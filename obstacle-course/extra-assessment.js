/* Extra numbered activities share the saved attempt and always keep the story visible. */
const extraMeta={descriptions:['4','Picture descriptions'],rockdescriptions:['5','Rock descriptions'],extraCloze:['4','More cloze'],grammar:['5','Grammar'],contractions:['6','Contractions'],tenses:['7','Tenses']};
function extraTasksAt(p=state.p){return state.extraTasks?.[p]||window.EXTRA_TASKS?.[state.level]?.[p]||{};}
function extraRequired(p=state.p){if(state.locked?.some(l=>l.kind==='story'&&l.section===p+1)&&!state.extraTasks?.[p])return [];return Object.keys(extraTasksAt(p));}
function allSectionGroups(p=state.p){return ['questions','language','pictures',...extraRequired(p)];}
testTools=function(){
 const core=[['story','1. Questions'],['sentences','2. Sentences'],['matching','3. Picture matching']];
 const buttons=core.map(([id,label])=>'<button type="button" data-test-view="'+id+'" aria-pressed="'+(view===id)+'">'+label+'</button>');
 for(const group of Object.keys(extraTasksAt()))buttons.push('<button type="button" data-extra-view="'+group+'" aria-pressed="'+(view===group)+'">'+extraMeta[group][0]+'. '+extraMeta[group][1]+'</button>');
 buttons.push('<button type="button" data-test-view="picture" aria-pressed="'+(view==='picture')+'">'+(allSectionGroups().length+1)+'. Story picture</button>');
 return '<nav class="test-tools" aria-label="Assessment sections">'+buttons.join('')+'</nav>';
};
function extraResponseCount(group,p=state.p){const task=extraTasksAt(p)[group],a=state.answers[p]||{};return task?task.items.filter((q,i)=>a[task.prefix+i]!==undefined&&q.choices[Number(a[task.prefix+i])]!==undefined).length:0;}
const coreGroupComplete=groupComplete;
groupComplete=function(group,section,answers){const task=extraTasksAt()[group];return task?extraResponseCount(group)===task.items.length:coreGroupComplete(group,section,answers);};
readingReady=function(section,answers={}){return allSectionGroups().every(group=>taskLock(group)&&groupComplete(group,section,answers));};
updateReadingGate=function(){
 if(!state||state.done||state.stage!=='story')return;const groups=allSectionGroups(),locked=groups.filter(g=>taskLock(g)).length;
 if($('nextBtn'))$('nextBtn').hidden=!readingReady(LEVELS[state.level].sections[state.p],state.answers[state.p]||{});
 if($('answerStatus'))$('answerStatus').textContent=locked+' of '+groups.length+' answer sections saved and locked'+(locked===groups.length?' · Ready for the next page':'');updateActivityProgress();
};
function extraCard(group){
 const task=extraTasksAt()[group],a=state.answers[state.p]||{},locked=taskLock(group),meta=extraMeta[group],pictures=!!task.items[0].picture;
 return '<section class="test-card extra-activity '+(pictures?'picture-descriptions':'language-challenges')+' '+(group==='rockdescriptions'?'six-rocks':'')+'" data-extra-card="'+group+'" aria-label="'+meta[1]+'"><div class="extra-heading"><h2>'+meta[0]+'. '+meta[1]+'</h2><p>'+ (group==='rockdescriptions'?'Choose three words for each rock.':pictures?'Choose the description that fits each picture.':'Use the story and read every choice carefully.')+'</p></div><div class="extra-task-grid">'+task.items.map((q,i)=>{
  const value=a[task.prefix+i],chosen=value===undefined?'':q.choices[Number(value)],pic=q.picture;
  return '<label class="extra-item"><span class="extra-item-number">'+(i+1)+'.</span>'+(pic?pictureSVG(pic,pic.index,'Picture '+(i+1),'extra-'+group):'<span class="extra-prompt">'+childText(q.prompt,state.level)+'</span>')+'<select data-extra-answer="'+task.prefix+i+'" data-extra-group="'+group+'" aria-label="'+(pic?'Description for picture '+(i+1):escapeHTML(q.prompt))+'" '+(locked?'disabled':'')+'><option value="">Choose'+(pic?' a description':' an answer')+'</option>'+q.choices.map((c,j)=>'<option value="'+j+'" '+(value===String(j)?'selected':'')+'>'+escapeHTML(c)+'</option>').join('')+'</select>'+(chosen?'<span class="chosen-description">'+childText(chosen,state.level)+'</span>':'')+'</label>';
 }).join('')+'</div>'+assessmentSave(group,task.label,LEVELS[state.level].sections[state.p],a)+'</section>';
}
function answerExtra(key,value,group){
 if(syncLatest()||!state||state.done||taskLock(group))return;const task=extraTasksAt()[group],i=Number(key.slice(task.prefix.length));if(!task.items[i]||(value!==''&&task.items[i].choices[Number(value)]===undefined))return;
 const a=state.answers[state.p]||={};if(value==='')delete a[key];else a[key]=value;noteAnswerEdit(key,value);navpush('answer_changed',key);render();document.querySelector('[data-extra-answer="'+key+'"]')?.focus({preventScroll:true});
}
function fitExtraActivity(card){
 const over=n=>n&&n.getClientRects().length&&(n.scrollHeight>n.clientHeight+3||n.scrollWidth>n.clientWidth+3);
 const story=document.querySelector('.independent-story'),read=story.closest('.reading-card');let font=parseFloat(getComputedStyle(story).fontSize);
 while((over(story)||over(read))&&font>18){font-=.5;story.style.fontSize=font+'px';}
 const grid=card.querySelector('.extra-task-grid'),items=[...grid.children];
 if(card.classList.contains('picture-descriptions')){
  if(innerHeight<720)card.classList.add('short-picture-grid');return;
 }
 card.querySelectorAll('.sentence-part-tools').forEach(n=>n.remove());items.forEach(item=>item.hidden=false);
 grid.style.gridTemplateColumns=grid.clientWidth<360?'1fr':'repeat(2,minmax(0,1fr))';
 if(!over(grid)&&!over(card)&&!items.some(over))return;
 const group=card.dataset.extraCard;let per=items.length,part=0,total=1;
 const controls=document.createElement('nav');controls.className='sentence-part-tools';controls.innerHTML='<button type="button" data-extra-step="-1">← Back</button><span></span><button type="button" data-extra-step="1">Next →</button>';grid.before(controls);
 const apply=()=>{total=Math.ceil(items.length/per);part=Math.min(state.extraPart?.[state.p]?.[group]||0,total-1);items.forEach((item,i)=>item.hidden=Math.floor(i/per)!==part);};apply();
 while((over(grid)||over(card)||items.some(over))&&per>1){per--;apply();}
 controls.querySelector('span').textContent='Items '+(part*per+1)+'–'+Math.min(items.length,(part+1)*per)+' of '+items.length;
 const b=controls.querySelectorAll('button');b[0].disabled=part===0;b[1].disabled=part===total-1;b.forEach(button=>button.onclick=()=>{commitVisibleAnswers();state.extraPart||={};state.extraPart[state.p]||={};state.extraPart[state.p][group]=part+Number(button.dataset.extraStep);render();});
}
const renderCoreAssessment=render;
render=function(){
 const working=state&&!state.done&&state.stage==='story';if(!working){renderCoreAssessment();return;}
 if(!state.extraTasks?.[state.p]&&!state.locked.some(l=>l.kind==='story'&&l.section===state.p+1)){state.extraTasks||={};state.extraTasks[state.p]=structuredClone(window.EXTRA_TASKS?.[state.level]?.[state.p]||{});store();}
 const requested=view,isExtra=!!extraTasksAt()[requested];if(isExtra)view='picture';renderCoreAssessment();view=requested;
 const ws=document.querySelector('.test-workspace'),tools=document.querySelector('.test-tools'),pictureButton=tools.querySelector('[data-test-view="picture"]');
 for(const[id,label]of [['story','1. Questions'],['sentences','2. Sentences'],['matching','3. Picture matching']])tools.querySelector('[data-test-view="'+id+'"]').textContent=label;
 for(const group of Object.keys(extraTasksAt())){let button=tools.querySelector('[data-extra-view="'+group+'"]');if(!button){button=document.createElement('button');button.type='button';button.dataset.extraView=group;tools.insertBefore(button,pictureButton);}button.textContent=extraMeta[group][0]+'. '+extraMeta[group][1];button.setAttribute('aria-pressed',String(requested===group));button.onclick=()=>{commitVisibleAnswers();view=group;render();navpush('view_tool',group)};}
 pictureButton.textContent=(allSectionGroups().length+1)+'. Story picture';
 tools.querySelectorAll('[data-test-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.testView===requested)));
 const qhead=ws.querySelector('.comprehension-card>h2');if(qhead)qhead.textContent='1. Questions';
 ws.querySelector('.language-card h2').textContent='2. Complete the sentences';ws.querySelector('.picture-card h2').textContent='3. Match words to pictures';
 if(requested==='picture'){
  const card=ws.querySelector('.full-story-picture'),locked=!!state.illustrationLocks?.[state.p];card.insertAdjacentHTML('beforeend','<div class="section-save"><span>'+(locked?'Story picture saved and locked':'Look at the story picture, then save this section.')+'</span><button type="button" class="primary" data-save-illustration '+(locked?'disabled':'')+'>'+(locked?'Saved ✓':'Save & lock')+'</button><span class="section-lock '+(locked?'':'spin-lock')+'">🔒</span></div>');card.querySelector('[data-save-illustration]').onclick=()=>{state.illustrationLocks||={};state.illustrationLocks[state.p]={at:now()};navpush('illustration_saved');render();};
 }
 if(isExtra){
  ws.dataset.layout='beside';ws.dataset.testView=requested;document.querySelector('.test-shell').dataset.layout='beside';
  if(['E','F','G'].includes(state.level))ws.style.gridTemplateColumns='minmax(0,.43fr) minmax(0,.57fr)';
  ws.insertAdjacentHTML('beforeend',extraCard(requested));const card=ws.querySelector('[data-extra-card]');
  card.querySelectorAll('[data-extra-answer]').forEach(select=>select.onchange=()=>answerExtra(select.dataset.extraAnswer,select.value,select.dataset.extraGroup));card.querySelector('[data-save-section]').onclick=()=>saveTestSection(requested);fitExtraActivity(card);
 }
 fitPersistentStory();fitCoreControls();fitCoreQuestions();if(isExtra)fitExtraActivity(ws.querySelector('[data-extra-card]'));updateReadingGate();
};
function fitCoreQuestions(){
 const card=document.querySelector('.comprehension-card');if(!card?.getClientRects().length)return;
 const over=n=>n&&n.getClientRects().length&&(n.scrollHeight>n.clientHeight+3||n.scrollWidth>n.clientWidth+3),grid=card.querySelector('.tick-questions'),items=[...grid.children];
 if(![card,grid,...items].some(over))return;
 card.querySelectorAll('.sentence-part-tools').forEach(n=>n.remove());items.forEach(n=>n.hidden=false);
 if(items.length>1){const current=Math.min(state.questionView?.[state.p]||0,items.length-1);items.forEach((n,i)=>n.hidden=i!==current);const controls=document.createElement('nav');controls.className='sentence-part-tools';controls.innerHTML='<button type="button">← Back</button><span>Question '+(current+1)+' of '+items.length+'</span><button type="button">Next →</button>';grid.before(controls);const buttons=controls.querySelectorAll('button');buttons[0].disabled=current===0;buttons[1].disabled=current===items.length-1;buttons.forEach((b,i)=>b.onclick=()=>{commitVisibleAnswers();state.questionView||={};state.questionView[state.p]=current+(i===0?-1:1);render()});}
 let font=17;while([card,grid,...items].some(over)&&font>15){font-=.5;card.querySelectorAll('legend,.tick-option').forEach(n=>n.style.setProperty('font-size',font+'px','important'));}
}
function fitCoreControls(){
 const ws=document.querySelector('.test-workspace'),card=ws.querySelector('.language-card'),grid=card.querySelector('.language-fields');
 const over=n=>n&&n.getClientRects().length&&(n.scrollHeight>n.clientHeight+3||n.scrollWidth>n.clientWidth+3);
 if(!card.getClientRects().length||![card,grid,grid.parentElement].some(over))return;
 if(ws.dataset.layout==='paired'&&view==='sentences'){ws.dataset.layout='beside';document.querySelector('.test-shell').dataset.layout='beside';ws.style.gridTemplateColumns='minmax(0,.48fr) minmax(0,.52fr)';}
 card.querySelectorAll('.sentence-part-tools').forEach(n=>n.remove());const rows=[...grid.children];rows.forEach(n=>n.hidden=false);grid.style.gridTemplateColumns=grid.clientWidth>=470?'repeat(2,minmax(0,1fr))':'1fr';
 if(![card,grid,grid.parentElement].some(over))return;
 let per=rows.length,part=0,total=1;const controls=document.createElement('nav');controls.className='sentence-part-tools';controls.innerHTML='<button type="button" data-sentence-step="-1">← Back</button><span></span><button type="button" data-sentence-step="1">Next →</button>';grid.before(controls);
 const apply=()=>{total=Math.ceil(rows.length/per);part=Math.min(state.sentencePart?.[state.p]||0,total-1);rows.forEach((row,i)=>row.hidden=Math.floor(i/per)!==part);};apply();while([card,grid,grid.parentElement].some(over)&&per>1){per--;apply();}
 controls.querySelector('span').textContent='Sentences '+(part*per+1)+'–'+Math.min(rows.length,(part+1)*per)+' of '+rows.length;const buttons=controls.querySelectorAll('button');buttons[0].disabled=part===0;buttons[1].disabled=part===total-1;buttons.forEach(button=>button.onclick=()=>{commitVisibleAnswers();state.sentencePart||={};state.sentencePart[state.p]=part+Number(button.dataset.sentenceStep);render();});
}
function fitPersistentStory(){
 const ws=document.querySelector('.test-workspace'),story=document.querySelector('.independent-story'),read=story?.closest('.reading-card');if(!story)return;
 const over=()=>story.scrollHeight>story.clientHeight+3||read.scrollHeight>read.clientHeight+3;let font=parseFloat(getComputedStyle(story).fontSize);
 while(over()&&font>18){font=Math.max(18,font-.5);story.style.fontSize=font+'px';}
 if(over()&&ws.dataset.layout==='beside'){
  let left=innerWidth>=innerHeight?.64:.52;const maximum=(innerWidth-260)/ws.clientWidth;
  while(over()&&left<Math.min(.78,maximum)){left+=.02;ws.style.gridTemplateColumns='minmax(0,'+left+'fr) minmax(0,'+(1-left)+'fr)';}
 }
}
const previousSectionMaximum=sectionMaximum;
sectionMaximum=function(level,p){return previousSectionMaximum(level,p)+extraRequired(p).reduce((n,g)=>n+extraTasksAt(p)[g].items.length,0);};
const coreProgressWithPictures=activityProgressData;
activityProgressData=function(){const data=coreProgressWithPictures();for(let p=0;p<storyCount(state.level);p++)for(const group of extraRequired(p)){const done=extraResponseCount(group,p),total=extraTasksAt(p)[group].items.length;data.meters[0].done+=done;data.meters[0].total+=total;if(state.stage==='story'&&state.p===p){data.meters[1].done+=done;data.meters[1].total+=total;}}data.meters.forEach(m=>m.caption=m.done+' of '+m.total+' done');return data;};
const resultsWithPictureMatches=results;
results=function(){const report=resultsWithPictureMatches();for(let p=0;p<storyCount(state.level);p++)for(const group of extraRequired(p)){const task=extraTasksAt(p)[group],a=state.answers[p]||{};task.items.forEach((q,i)=>{const value=a[task.prefix+i],response=value===undefined?'':q.choices[Number(value)];report.rows.push({section:p+1,item:task.prefix.toUpperCase()+(i+1),type:task.label,skill:q.skill,prompt:q.prompt,options:q.choices,response:response||'',correct:q.choices[q.answer],mark:response===q.choices[q.answer]?1:0,seconds:Math.round(state.pageTimes[p]||0),...(q.picture?{picture:q.picture}:{})});});}report.score=report.rows.reduce((n,r)=>n+r.mark,0);report.total=report.rows.length;report.percent=Math.round(100*report.score/Math.max(1,report.total));report.pages.forEach(page=>{const rows=report.rows.filter(r=>r.section===page.section);page.score=rows.reduce((n,r)=>n+r.mark,0);page.maximum=rows.length;});return report;};
const requestNextWithCoreLocks=requestNext;
requestNext=function(){requestNextWithCoreLocks();if(state?.stage==='story'&&$('lockDialog').open)$('lockText').textContent='All required sections are saved and locked. Save this reading page and continue?';};
window.addEventListener('focus',()=>syncLatest());
document.fonts?.addEventListener('loadingdone',()=>{if(state&&!state.done&&state.stage==='story'){commitVisibleAnswers();render();}});
