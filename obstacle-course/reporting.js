/* Parent report and workbook infrastructure reused from the classroom reader. */
/* Parent reports reuse Math Landing's offline screen-PDF writer and this
   activity's ZIP, illustration atlas and per-item assessment records. */
const teacherReport={scope:'',unlocked:false,pages:null,report:null};
function parentReportTotal(report){return 2+report.pages.length}
function teacherScope(report){return report.level+'|'+report.student_id+'|'+report.submitted_at}
function teacherHandoff(report){
if(teacherReport.scope!==teacherScope(report)){teacherReport.scope=teacherScope(report);teacherReport.unlocked=false;teacherReport.pages=null}
teacherReport.report=report;
if(teacherReport.unlocked){teacherReceipt(report);return}
$('app').innerHTML='<main class="completion">'+scene(storyCount(report.level)-1)+'<div class="receipt"><span class="eyebrow">STORY COMPLETE</span><h1>All done!</h1><p class="call-teacher" role="status">Please call your teacher.</p><p>Your story words and question answers are locked. Your teacher will open your results.</p><div class="receipt-meta"><b>Student ID:</b> '+escapeHTML(report.student_id.replace(/-/g,' '))+'<br><b>Level:</b> '+report.level+' · '+LEVELS[report.level].grade+'<br><b>Finished:</b> all '+storyCount(report.level)+' story pages and the picture notebook</div><button id="teacherAccess" class="quiet">Teacher access</button><form id="teacherCodeForm" class="teacher-code-form" hidden><label for="teacherCode">Teacher code</label><div><input id="teacherCode" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" aria-label="Teacher code"><button type="submit" class="primary">Open results</button></div><p id="teacherCodeStatus" class="status" role="status"></p></form><small>'+escapeHTML(attemptStorage.mode==='memory'?'Keep this tab open until your teacher saves the results.':'Your teacher can save a parent report and clear the activity for the next student.')+'</small></div></main>';
$('teacherAccess').onclick=()=>{$('teacherCodeForm').hidden=false;$('teacherAccess').hidden=true;$('teacherCode').focus()};
bindScreenTools();
$('teacherCodeForm').onsubmit=e=>{e.preventDefault();if($('teacherCode').value.trim()!=='259'){$('teacherCodeStatus').textContent='Please ask your teacher to enter the code.';$('teacherCode').value='';$('teacherCode').focus();return}teacherReport.unlocked=true;navpush('teacher_results_opened');teacherReceipt(report)};
}
function teacherReceipt(report){
const words=report.clozeTotal||0,combined=report.score+(report.clozeScore||0)+(report.bikeScore||0),maximum=report.total+words+(report.bikeTotal||0);
$('app').innerHTML='<main class="completion">'+scene(storyCount(report.level)-1)+'<div class="receipt teacher-receipt"><span class="eyebrow">TEACHER RESULTS</span><h1>Ready to share.</h1><p>The parent report includes a summary, '+storyCount(report.level)+' story pages and the obstacle course diagram, with every word choice and question answer.</p><div class="receipt-meta"><b>Student ID:</b> '+escapeHTML(report.student_id.replace(/-/g,' '))+' · <b>Level:</b> '+report.level+'<br><b>Cloze words:</b> '+(report.clozeScore||0)+' / '+words+'<br><b>Questions:</b> '+report.score+' / '+report.total+'<br><b>Combined:</b> '+combined+' / '+maximum+'</div><div class="teacher-tools"><button id="previewParent" class="primary">View / print report</button><button id="downloadParentPng" class="quiet">Save PNG pages</button><button id="downloadXlsx" class="quiet">Download Excel results</button><button id="downloadCsv" class="quiet">Download CSV</button><button id="downloadJson" class="quiet">Save backup</button><button id="endReset" class="quiet">Clear for next student</button></div><p id="downloadStatus" class="saved-state" role="status">'+(attemptStorage.mode==='local'?'Choose a report format for the parent.':'Download the results before refreshing or closing this tab.')+'</p></div></main>';
$('previewParent').onclick=()=>parentAction('preview');$('downloadParentPng').onclick=()=>parentAction('png');
bindScreenTools();
document.querySelector('.teacher-receipt .receipt-meta').insertAdjacentHTML('beforeend','<br><b>Picture diagram:</b> '+(report.bikeScore||0)+' / '+(report.bikeTotal||0));
$('downloadXlsx').onclick=()=>downloadXLSX(report);$('downloadCsv').onclick=()=>downloadCSV(report);$('downloadJson').onclick=()=>downloadFile(JSON.stringify(report,null,2),'application/json','backup.json');$('endReset').onclick=requestReset;
}
function parentPage(){
const canvas=document.createElement('canvas');canvas.width=1584;canvas.height=1224;const ctx=canvas.getContext('2d');ctx.scale(2,2);ctx.fillStyle='white';ctx.fillRect(0,0,792,612);ctx.strokeStyle='#bbb';return {canvas,ctx};
}
function reportFont(ctx,size=11,bold=false){ctx.font=(bold?'700 ':'')+size+'px Arial';ctx.fillStyle='#222';ctx.textBaseline='alphabetic'}
function reportLines(ctx,text,width,size=11,bold=false){
reportFont(ctx,size,bold);const lines=[];for(const paragraph of String(text??'').split('\n')){let line='';for(const word of paragraph.split(/\s+/)){if(line&&ctx.measureText(line+' '+word).width>width){lines.push(line);line=word}else line+=(line?' ':'')+word}lines.push(line)}return lines;
}
function reportText(ctx,text,x,y,width,size=11,bold=false,leading=size*1.28){
const lines=reportLines(ctx,text,width,size,bold);for(const line of lines){ctx.fillText(line,x,y);y+=leading}return y;
}
function reportRule(ctx,x,y,w){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+w,y);ctx.stroke()}
function reportPicture(ctx,images,page,x,y,w,h){const image=images[page+1],scale=Math.min(w/image.naturalWidth,h/image.naturalHeight),dw=image.naturalWidth*scale,dh=image.naturalHeight*scale;ctx.drawImage(image,x+(w-dw)/2,y+(h-dh)/2,dw,dh)}
function reportHeading(ctx,title,subtitle,page,total){
reportText(ctx,'ADVENTURE READING · PARENT REPORT',28,26,736,9,true);reportText(ctx,title,28,51,736,22,true);reportText(ctx,subtitle,28,70,736,10);reportRule(ctx,28,80,736);
reportRule(ctx,28,584,736);reportText(ctx,'Obstacle Course Story · Story words, comprehension and diagram parts',28,600,620,8.5);reportText(ctx,'Page '+page+' of '+total,708,600,60,8.5);
}
function reportDate(iso){try{return new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'long',day:'numeric',timeZone:'America/Toronto'}).format(new Date(iso))}catch{return String(iso||'').slice(0,10)}}
async function makeParentPages(report){
const images=await loadReportArt(),pages=[],id=report.student_id.replace(/-/g,' '),totalPages=parentReportTotal(report);let {canvas,ctx}=parentPage();
reportHeading(ctx,'Obstacle Course Story · reading adventure',id+' · Level '+report.level+' · '+report.grade+' · '+reportDate(report.submitted_at),1,totalPages);
const combined=report.score+report.clozeScore+report.bikeScore,maximum=report.total+report.clozeTotal+report.bikeTotal;
reportText(ctx,'Story words: '+report.clozeScore+' / '+report.clozeTotal,28,119,380,15,true);reportText(ctx,'Question answers: '+report.score+' / '+report.total,28,151,380,15,true);reportText(ctx,'Picture diagram: '+report.bikeScore+' / '+report.bikeTotal,28,183,380,15,true);reportText(ctx,'Combined: '+combined+' / '+maximum+'  ('+Math.round(combined/maximum*100)+'%)',28,225,380,17,true);
ctx.drawImage(images[0],444,99,300,225);reportText(ctx,'Chapter',28,293,70,11,true);reportText(ctx,'Story words',290,293,95,11,true);reportText(ctx,'Questions',404,293,95,11,true);reportRule(ctx,28,303,470);
report.pages.forEach((page,p)=>{const y=327+p*38,words=report.clozeRows.filter(row=>row.section===p+1);reportText(ctx,(p+1)+'. '+page.title,28,y,250,10.7);reportText(ctx,words.reduce((n,row)=>n+row.mark,0)+' / '+words.length,290,y,90,10.7);reportText(ctx,page.score+' / '+page.maximum,404,y,90,10.7);reportRule(ctx,28,y+10,470)});
reportText(ctx,'What this activity practises',28,508,730,12,true);reportText(ctx,'Reading for detail, noticing a character’s feelings, vocabulary in context, matching related ideas, and recognising picture labels.',28,530,730,11);reportText(ctx,'Together at home: talk about a time when asking for help or slowing down was a thoughtful choice.',28,562,730,10.5);
pages.push({canvas,title:'Assessment summary'});
for(let p=0;p<4;p++){
({canvas,ctx}=parentPage());const section=LEVELS[report.level].sections[p],wordRows=report.clozeRows.filter(row=>row.section===p+1),questions=report.rows.filter(row=>row.section===p+1);
reportHeading(ctx,'Chapter '+(p+1)+' · '+sectionTitle(report.level,p),id+' · Level '+report.level+' · Story words '+wordRows.reduce((n,row)=>n+row.mark,0)+'/'+wordRows.length+' · Questions '+report.pages[p].score+'/'+report.pages[p].maximum,pages.length+1,totalPages);
reportText(ctx,'Story as completed',28,103,320,12,true);let leftY=124;
for(const paragraph of section.cloze.paragraphs){const completed=paragraph.replace(/\{\{c(\d+)\}\}/g,(_,n)=>'['+(Number(n)+1)+'] '+(wordRows[Number(n)].response||'______'));leftY=reportText(ctx,completed,28,leftY,320,10.3,false,12.8)+7;}
const pictureHeight=Math.max(90,Math.min(148,516-leftY));reportPicture(ctx,images,p,28,leftY+2,320,pictureHeight);leftY+=pictureHeight+17;leftY=reportText(ctx,'Word bank: '+section.cloze.bank.map(word=>word.word).join(' · '),28,leftY,320,9.8,false,12.5);
let rightY=103;reportText(ctx,'Story words',377,rightY,387,12,true);rightY+=23;ctx.fillStyle='#e9efdf';ctx.fillRect(377,rightY-13,387,19);reportText(ctx,'Blank',382,rightY,40,9.8,true);reportText(ctx,'Student chose',427,rightY,124,9.8,true);reportText(ctx,'Expected',554,rightY,123,9.8,true);reportText(ctx,'Mark',716,rightY,45,9.8,true);rightY+=23;
wordRows.forEach((row,i)=>{reportText(ctx,String(i+1),382,rightY,40,10);reportText(ctx,row.response||'No response',427,rightY,122,10);reportText(ctx,row.correct,554,rightY,135,10);reportText(ctx,row.mark+'/1',716,rightY,45,10);reportRule(ctx,377,rightY+6,387);rightY+=21});
rightY+=6;reportText(ctx,'Question answers',377,rightY,387,12,true);rightY+=19;
for(const row of questions){rightY=reportText(ctx,row.item+'. '+row.prompt+'  ['+row.mark+'/1]',377,rightY,387,9.8,true,12);rightY=reportText(ctx,'Choices: '+row.options.map((choice,i)=>String.fromCharCode(65+i)+'. '+choice).join(' / '),377,rightY+2,387,9.3,false,11.2);rightY=reportText(ctx,'Student: '+(row.response||'No response')+' | Expected: '+row.correct,377,rightY+2,387,9.6,false,11.8)+8;}
if(Math.max(leftY,rightY)>580)throw new Error('Report layout overflow in chapter '+(p+1));pages.push({canvas,title:'Chapter '+(p+1)+' · '+sectionTitle(report.level,p)});
}
({canvas,ctx}=parentPage());reportHeading(ctx,'Mountain-picture notebook',id+' · Level '+report.level+' · Bike parts '+report.bikeScore+'/'+report.bikeTotal,6,totalPages);
const diagram=new Image();diagram.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(bikeDiagramSVG(report.level,report.bikeRows));await diagram.decode();ctx.drawImage(diagram,22,104,535,332);
reportText(ctx,'The diagram shows the student’s labels.',28,466,520,11,true);reportText(ctx,'Word bank: '+bikeWordBank(report.level).map(part=>part.label).join(' · '),28,490,520,10.5);reportText(ctx,'Numbered pointers end at the diagram parts. Expected labels and marks appear in the table.',28,527,520,10.5);
let y=112;reportText(ctx,'Part',576,y,38,11,true);reportText(ctx,'Student / expected',620,y,135,11,true);y+=27;
for(const row of report.bikeRows){reportText(ctx,row.item,576,y,38,10.5,true);y=reportText(ctx,(row.response||'No response')+'  ['+row.mark+'/1]',620,y,137,10.5,true,13);y=reportText(ctx,'Expected: '+row.correct,620,y+2,137,10.1,false,12.5)+12;reportRule(ctx,576,y-5,186)}
if(y>580)throw new Error('Bike report layout overflow');pages.push({canvas,title:'Mountain-obstacle course diagram'});return pages;
}
async function parentAction(action){if(!teacherReport.unlocked)return;const status=$('downloadStatus');status.textContent='Preparing story pictures, responses and the obstacle course diagram…';try{teacherReport.pages||=await makeParentPages(teacherReport.report);showParentPreview();status.textContent='Complete parent report ready: '+teacherReport.pages.length+' pages. Use the page selector to save a PNG.';}catch(error){status.textContent='The report could not finish. Your answers are saved; use Excel or CSV.';console.error(error)}}
function showParentPreview(){let dialog=$('parentReportDialog');if(!dialog){dialog=document.createElement('dialog');dialog.id='parentReportDialog';dialog.setAttribute('aria-label','Parent assessment report');document.body.append(dialog)}dialog.innerHTML='<div class="parent-report-toolbar"><label>Report page <select id="parentReportPage" aria-label="Report page">'+teacherReport.pages.map((page,i)=>'<option value="'+i+'">'+escapeHTML(page.title)+'</option>').join('')+'</select></label><button id="saveParentPNG" class="quiet">Save this PNG</button><button id="printParentReport" class="primary">Print report</button><button id="closeParentReport" class="quiet">Close</button></div><div id="parentCanvasHost"></div>';
const show=()=>{$('parentCanvasHost').replaceChildren(teacherReport.pages[Number($('parentReportPage').value)].canvas)};show();$('parentReportPage').onchange=show;$('closeParentReport').onclick=()=>dialog.close();$('printParentReport').onclick=printParentReport;$('saveParentPNG').onclick=async()=>{const index=Number($('parentReportPage').value),blob=await new Promise(resolve=>teacherReport.pages[index].canvas.toBlob(resolve,'image/png'));downloadFile(blob,'image/png','Parent-Report-Page-'+(index+1)+'.png',teacherReport.report)};dialog.showModal()}
async function printParentReport(){if(!teacherReport.unlocked||!teacherReport.pages)return;let host=$('parentPrintReport');if(!host){host=document.createElement('div');host.id='parentPrintReport';document.body.append(host)}host.replaceChildren(...teacherReport.pages.map(page=>{const image=document.createElement('img');image.src=page.canvas.toDataURL('image/png');image.alt=page.title;return image}));await Promise.all([...host.children].map(image=>image.decode()));document.body.classList.add('printing-parent-report');window.print();document.body.classList.remove('printing-parent-report')}
/* Reuse the existing Artifact Tool report template for any number of story pages. */
function extendedExcelFiles(r){
const base=window.RESULT_TEMPLATE;if(!base)throw new Error('Result template unavailable');const files={...base},count=LEVELS[r.level].sections.length+1;
for(const key of Object.keys(files))if(/^xl\/(worksheets|drawings|media)\//.test(key))delete files[key];
const summary=[['Obstacle Course Story'],['Student ID',r.student_id],['Level',r.level],['Grade',r.grade],['Started (UTC)',r.started_at],['Submitted (UTC)',r.submitted_at],['Question score',r.score,r.total],['Question percent',r.percent/100],['Reading pages',storyCount(r.level)],['Story','Title','Score','Maximum','Seconds'],...r.pages.map(page=>[page.section,page.title,page.score,page.maximum,page.seconds]),[],['Cloze word score',r.clozeScore||0,r.clozeTotal||0],['Picture diagram score',r.bikeScore||0,r.bikeTotal||0],['Combined score',r.score+(r.clozeScore||0)+(r.bikeScore||0),r.total+(r.clozeTotal||0)+(r.bikeTotal||0)]];
files['xl/worksheets/sheet1.xml']=replaceSheetData(base['xl/worksheets/sheet1.xml'],summary,Object.fromEntries(summary.slice(16).map((_,i)=>[i+16,{template:16,height:28}])));
for(let p=0;p<count;p++){
const isBike=p===storyCount(r.level),passage=isBike?{text:['Name each numbered mountain-diagram part using the word bank. The picture records the student’s labels.'],cloze:{bank:bikeWordBank(r.level).map(part=>({word:part.label}))}}:LEVELS[r.level].sections[p],questionRows=isBike?r.bikeRows:r.rows.filter(row=>row.section===p+1),wordRows=isBike?[]:(r.clozeRows||[]).filter(row=>row.section===p+1),rows=Array.from({length:26},()=>Array(6).fill(null)),settings={};
rows[1]=[(isBike?'Picture diagram':'Chapter '+(p+1))+' — '+sectionTitle(r.level,p)];rows[2]=['Student ID',r.student_id,'Level',r.level,'Questions / '+questionRows.length,(isBike?r.bikeScore:r.pages[p].score)];rows[4]=[passage.text.join('\n\n')];rows[21]=['FOLLOW THE STORY'];rows[22]=['Word bank: '+passage.cloze.bank.map(word=>word.word).join(', ')];rows[25]=['Item','What was asked','Options shown','Student chose','Expected answer','Mark'];
settings[4]={template:5,height:20+Math.max(0,Math.ceil((passage.text.join(' ').split(/\s+/).length-150)*1.2))};
questionRows.forEach(row=>rows.push([row.item,(row.instruction?row.instruction+'\n':'')+row.prompt,optionsText(row),row.response||'No response',row.correct,row.mark]));
function addBlock(title,items){if(!items.length)return;const header=rows.length;rows.push([title,'Question / sentence','Choices','Student chose','Expected answer','Mark']);settings[header]={template:26,height:34};items.forEach(row=>{const at=rows.length,prompt=row.prompt+(row.visualDescription?'\nPicture: '+row.visualDescription:'');rows.push([row.item,prompt,optionsText(row),row.response||'No response',row.correct,row.mark]);settings[at]={template:27,height:Math.max(92,Math.ceil(Math.max(prompt.length/25,optionsText(row).length/28))*17)}})}
addBlock('Cloze words',wordRows);
const sheet=p+2;files['xl/worksheets/sheet'+sheet+'.xml']=replaceSheetData(base['xl/worksheets/sheet2.xml'],rows,settings);
files['xl/worksheets/_rels/sheet'+sheet+'.xml.rels']=base['xl/worksheets/_rels/sheet2.xml.rels'].replace(/Target="[^"]*drawing1\.xml"/,'Target="/xl/drawings/story'+(p+1)+'.xml"');
files['xl/drawings/story'+(p+1)+'.xml']=base['xl/drawings/drawing1.xml'];files['xl/drawings/_rels/story'+(p+1)+'.xml.rels']=base['xl/drawings/_rels/drawing1.xml.rels'].replace(/Target="[^"]*image\.png"/,'Target="/xl/media/story'+(p+1)+'.png"');files['xl/media/story'+(p+1)+'.png']={page:p+1};
}
const all=[...r.rows,...(r.clozeRows||[]),...(r.bikeRows||[])],detail=[['Full story, cloze and bike-diagram responses'],['Student ID',r.student_id,null,null,'Level',r.level],[],['Chapter / diagram','Item','Type','Skill','Question / instruction','Options shown','Student chose','Expected answer','Mark','Maximum'],...all.map(row=>[row.section,row.item,row.type,row.skill,(row.instruction?row.instruction+'\n':'')+row.prompt+(row.visualDescription?'\nPicture: '+row.visualDescription:''),optionsText(row),row.response||'No response',row.correct,row.mark,1])];
files['xl/worksheets/sheet'+(count+2)+'.xml']=replaceSheetData(base['xl/worksheets/sheet8.xml'],detail,Object.fromEntries(detail.slice(4).map((row,i)=>[i+4,{template:5,height:Math.max(100,Math.ceil(String(row[4]).length/28)*16)}])));
const log=[['Assessment activity log'],['Class ID: '+r.student_id,null,'Level '+r.level],[],['Time (UTC)','Chapter / diagram','Action','Detail'],...r.events.map(event=>[event.time,event.section,event.action,String(event.detail)])];files['xl/worksheets/sheet'+(count+3)+'.xml']=replaceSheetData(base['xl/worksheets/sheet9.xml'],log);
const names=['Summary',...Array.from({length:count},(_,p)=>p===storyCount(r.level)?'Picture diagram':'Chapter '+(p+1)),'Responses','Activity log'];
files['xl/workbook.xml']=base['xl/workbook.xml'].replace(/<sheets>[\s\S]*?<\/sheets>/,'<sheets>'+names.map((name,i)=>'<sheet name="'+name+'" sheetId="'+(i+1)+'" r:id="storySheet'+(i+1)+'"/>').join('')+'</sheets>').replace(/<definedNames>[\s\S]*?<\/definedNames>/,'');
files['xl/_rels/workbook.xml.rels']=base['xl/_rels/workbook.xml.rels'].replace(/<Relationship\b[^>]*Type="[^"]*\/worksheet"[^>]*\/>/g,'').replace('</Relationships>',names.map((_,i)=>'<Relationship Id="storySheet'+(i+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="/xl/worksheets/sheet'+(i+1)+'.xml"/>').join('')+'</Relationships>');
files['[Content_Types].xml']=base['[Content_Types].xml'].replace(/<Override\b[^>]*PartName="\/xl\/(?:worksheets|drawings)\/[^\"]*"[^>]*\/>/g,'').replace('</Types>',names.map((_,i)=>'<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join('')+Array.from({length:count},(_,p)=>'<Override PartName="/xl/drawings/story'+(p+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>').join('')+'</Types>');
files['xl/workbook.xml']='<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'+names.map((name,i)=>'<sheet name="'+name+'" sheetId="'+(i+1)+'" r:id="storySheet'+(i+1)+'"/>').join('')+'</sheets></workbook>';
for(const [path,value] of Object.entries(files))if(typeof value==='string')files[path]=value.replace(/The Tiny Pumpkin Mystery|The Tiny Pumpkin Cloze Story|The Tiny Pumpkin Story/g,'Obstacle Course Story').replace(/Halloween/g,'Autumn').replace(/FF4E3567/g,'FF335C46');
for(let p=0;p<count;p++){const path='xl/drawings/story'+(p+1)+'.xml';files[path]=files[path].replace(/<xdr:ext\b[^>]*\/>/,'<xdr:ext cx="3429000" cy="2571750"/>').replace(/<a:ext\b[^>]*\/>/,'<a:ext cx="3429000" cy="2571750"/>');}
if(files['docProps/core.xml'])files['docProps/core.xml']=files['docProps/core.xml'].replace(/<dc:title>[\s\S]*?<\/dc:title>/,'<dc:title>Obstacle Course Story</dc:title>');
return files;
}

/* Complete parent/teacher report with continuation pages when content needs them. */
reportHeading=function(ctx,title,subtitle,page,total){
 reportText(ctx,'ADVENTURE READING · PARENT / TEACHER REPORT',28,26,736,9,true);
 let size=22;reportFont(ctx,size,true);while(ctx.measureText(title).width>736&&size>16){size-=.5;reportFont(ctx,size,true);}ctx.fillText(title,28,51);
 reportText(ctx,subtitle,28,70,736,10);reportRule(ctx,28,80,736);reportRule(ctx,28,584,736);
 reportText(ctx,'Adventure Reading · Independent story assessment',28,600,620,8.5);reportText(ctx,'Page '+page+' of '+total,708,600,60,8.5);
};
async function makeParentPages(report){
 const images=await loadReportArt(),pages=[],identity=report.student_id.replace(/-/g,' '),subtitle=identity+' · F&P '+report.level+' instructional target · '+reportDate(report.submitted_at);
 let ctx,canvas,y,title,first=false;
 const start=(heading)=>{({canvas,ctx}=parentPage());title=heading;y=103;pages.push({canvas,title:heading});return ctx;};
 const ensure=(height,heading=title+' · continued')=>{if(y+height>565)start(heading);};
 const text=(value,size=11,bold=false,width=736,x=28)=>{const lines=reportLines(ctx,value,width,size,bold),height=lines.length*size*1.3;ensure(height+5);reportText(ctx,value,x,y,width,size,bold,size*1.3);y+=height+5;};
 start('Assessment summary');
 const combined=report.score+report.clozeScore+report.bikeScore,maximum=report.total+report.clozeTotal+report.bikeTotal;
 ctx.drawImage(images[0],490,99,265,199);
 reportText(ctx,report.activity,28,111,440,20,true);
 reportText(ctx,'Story words: '+report.clozeScore+' / '+report.clozeTotal,28,157,420,14,true);
 reportText(ctx,'Question and matching answers: '+report.score+' / '+report.total,28,192,420,14,true);
 reportText(ctx,'Picture labels: '+report.bikeScore+' / '+report.bikeTotal,28,227,420,14,true);
 reportText(ctx,'Combined: '+combined+' / '+maximum,28,266,420,18,true);
 y=326;
 report.pages.forEach((page,p)=>{const words=report.clozeRows.filter(row=>row.section===p+1);text((p+1)+'. '+page.title+' — story words '+words.reduce((n,r)=>n+r.mark,0)+'/'+words.length+'; questions/matching '+page.score+'/'+page.maximum,11,true);});
 y=Math.max(y,442);
 text('What the results describe',12,true);
 text('These are the student’s independent word, comprehension, matching and picture-label choices. Incorrect completed responses can be saved. The report does not measure oral reading accuracy or fluency, and it does not establish an F&P reading level.',10.5);
 text('At home: reread one short part, ask the child to explain a choice using the story, and talk about a time when listening or helping changed what happened.',10.5);
 for(let p=0;p<storyCount(report.level);p++){
  const section=LEVELS[report.level].sections[p],words=report.clozeRows.filter(row=>row.section===p+1),questions=report.rows.filter(row=>row.section===p+1),chapter='Chapter '+(p+1)+' · '+sectionTitle(report.level,p);
  start(chapter);
  ctx.drawImage(images[storyArtPage(report.level,p)+1],528,99,232,174);
  reportText(ctx,'Story read by the student',28,y,475,12,true);y+=23;
  const completed=section.text.join('\n\n');
  const lines=reportLines(ctx,completed,475,11.5),height=lines.length*15;
  reportText(ctx,completed,28,y,475,11.5,false,15);y+=height+12;y=Math.max(y,290);
  text('Word bank: '+section.cloze.bank.map(word=>word.word).join(' · '),10.5);
  text('Story-word responses',12,true);
  for(const row of words){
   const value=row.item+': '+(row.response||'No response')+' | Expected: '+row.correct+' | '+row.mark+'/1';
   text(value,10.5,false);
  }
  for(const row of questions){
   const sourceQuestion=row.type==='Multiple choice'?section.mc[Number(row.item.slice(1))-1]:null;
   const parts=[['Question '+row.item+' · '+row.skill,11,true],[row.prompt,11,true],['Choices: '+row.options.join(' / '),10.5,false],['Student chose: '+(row.response||'No response')+' | Expected: '+row.correct+' | Mark: '+row.mark+'/1',10.5,false]];
   if(sourceQuestion?.evidence)parts.push(['Story evidence: '+sourceQuestion.evidence,10,false]);
   const height=parts.reduce((n,[value,size,bold])=>n+reportLines(ctx,value,736,size,bold).length*size*1.3+5,0)+13;
   ensure(height,chapter+' · notebook responses');y+=7;
   for(const[value,size,bold]of parts)text(value,size,bold);
   reportRule(ctx,28,y,736);y+=9;
  }
 }
 start('Picture notebook · labelled diagram');
 const picture=new Image();picture.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(bikeDiagramSVG(report.level,report.bikeRows));await picture.decode();
 ctx.drawImage(picture,24,106,505,313);
 reportText(ctx,'Every saved label',548,110,216,12,true);
 let rowY=138;
 report.bikeRows.forEach((row,i)=>{rowY=reportText(ctx,(i+1)+'. '+(row.response||'No response')+'\nExpected: '+row.correct+' · '+row.mark+'/1',548,rowY,210,10,false,13)+16;});
 y=Math.max(435,rowY+4);
 text('Saved assessment record',12,true);
 text('Started: '+reportDate(report.started_at)+' · Finished: '+reportDate(report.submitted_at),10);
 text('The '+storyCount(report.level)+' reading pages and picture notebook were locked before teacher results opened. Work is stored separately for this story, reading target and picture ID.',10.5);
 // Add consistent, accurate page counts only after the continuation pages are known.
 pages.forEach((page,i)=>{
  const context=page.canvas.getContext('2d');context.save();context.fillStyle='white';context.fillRect(0,0,792,84);context.fillRect(0,582,792,30);reportHeading(context,page.title,subtitle,i+1,pages.length);context.restore();
 });
 return pages;
}

/* Native print text makes every story paragraph readable and searchable in the PDF. */
function printableFullReport(report){
 const esc=escapeHTML,combined=report.score+report.clozeScore+report.bikeScore,total=report.total+report.clozeTotal+report.bikeTotal;
 const records=rows=>'<table class="pdf-response-table"><thead><tr><th>Question / choices</th><th>Student response</th><th>Expected</th><th>Mark</th></tr></thead><tbody>'+rows.map(row=>'<tr><td>'+(row.picture?'<div class="pdf-response-picture">'+pictureSVG(row.picture,row.picture.index,'Activity picture','report-'+row.section+'-'+row.item)+'</div>':'')+'<b>'+esc(row.item)+'. '+esc(row.prompt)+'</b><br><span>'+esc(row.options.join(' / '))+'</span></td><td>'+esc(row.response||'No response')+'</td><td>'+esc(row.correct)+'</td><td>'+row.mark+'/1</td></tr>').join('')+'</tbody></table>';
 return '<section class="pdf-summary"><h1>'+esc(report.activity)+'</h1><p>Parent / teacher reading assessment report</p><p><b>Student:</b> '+esc(report.student_id.replace(/-/g,' '))+' &nbsp; <b>Target:</b> '+esc(report.level)+' &nbsp; <b>Completed:</b> '+esc(reportDate(report.submitted_at))+'</p><p><b>Combined:</b> '+combined+' / '+total+' &nbsp; <b>Sentence words:</b> '+report.clozeScore+' / '+report.clozeTotal+' &nbsp; <b>Questions and matching:</b> '+report.score+' / '+report.total+'</p><p>This report includes the complete original story text for all '+storyCount(report.level)+' reading pages, followed by the student’s recorded answers, choices, expected responses and marks.</p></section>'+LEVELS[report.level].sections.map((section,p)=>'<section class="pdf-chapter" data-report-story-page="'+p+'"><h2>Reading page '+(p+1)+' - '+esc(sectionTitle(report.level,p))+'</h2><div class="pdf-original-story"><img class="pdf-story-art" src="'+ART[storyArtPage(report.level,p)+1]+'" alt="Story illustration"><h3>Full story text</h3>'+section.text.map(paragraph=>'<p data-original-paragraph>'+childText(paragraph,report.level)+'</p>').join('')+'</div><h3>Sentence word responses</h3>'+records(report.clozeRows.filter(row=>row.section===p+1))+'<h3>Reading questions and matching</h3>'+records(report.rows.filter(row=>row.section===p+1))+'</section>').join('')+'<section class="pdf-chapter"><h2>Final picture notebook</h2><div class="pdf-diagram">'+bikeDiagramSVG(report.level,report.bikeRows)+'</div>'+records(report.bikeRows)+'</section>';
}
function prepareFullPrintReport(report){
 let host=$('parentPrintReport');if(!host){host=document.createElement('div');host.id='parentPrintReport';document.body.append(host);}host.className='native-reading-report';host.innerHTML=printableFullReport(report);
 let style=$('fullStoryPrintStyles');if(!style){style=document.createElement('style');style.id='fullStoryPrintStyles';style.textContent=`
 #parentPrintReport.native-reading-report{display:none}
 @media print{
  @page{size:letter landscape;margin:12mm}
  html:has(body.printing-parent-report),body.printing-parent-report{height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important;width:auto!important;display:block!important;margin:0!important;padding:0!important;background:white!important}
  body.printing-parent-report> :not(#parentPrintReport){display:none!important}
  body.printing-parent-report #parentPrintReport.native-reading-report{display:block!important;position:static!important;float:none!important;width:100%!important;height:auto!important;max-height:none!important;overflow:visible!important;margin:0!important;padding:0!important;font:11pt/1.4 Arial,sans-serif!important;color:#162f29!important;background:white!important}
  #parentPrintReport.native-reading-report *{box-sizing:border-box;max-height:none!important;overflow:visible!important}
  #parentPrintReport.native-reading-report h1{font:700 24pt/1.15 Arial;margin:0 0 10pt}
  #parentPrintReport.native-reading-report h2{font:700 18pt/1.2 Arial;margin:0 0 12pt;break-after:avoid}
  #parentPrintReport.native-reading-report h3{font:700 12pt/1.25 Arial;margin:12pt 0 7pt;break-after:avoid}
  #parentPrintReport.native-reading-report p{font:11pt/1.4 Arial;margin:0 0 8pt;orphans:3;widows:3}
  #parentPrintReport.native-reading-report .pdf-chapter{display:block!important;position:static!important;height:auto!important;width:100%!important;break-before:page;margin:0!important;padding:0!important}
  #parentPrintReport.native-reading-report .pdf-original-story{display:flow-root;break-inside:avoid;margin-bottom:14pt}
  #parentPrintReport.native-reading-report .pdf-story-art{display:block!important;float:right!important;width:28%!important;height:auto!important;max-width:220pt!important;margin:0 0 10pt 18pt!important;object-fit:contain;break-after:auto!important;page-break-after:auto!important}
  #parentPrintReport.native-reading-report .pdf-response-table{width:100%;border-collapse:collapse;table-layout:fixed;font:9pt/1.3 Arial;margin:0 0 14pt;break-inside:auto}
  #parentPrintReport.native-reading-report .pdf-response-table th,#parentPrintReport.native-reading-report .pdf-response-table td{border:1px solid #b9cbbb;text-align:left;vertical-align:top;padding:6pt;overflow-wrap:anywhere;white-space:normal}
  #parentPrintReport.native-reading-report .pdf-response-table th:first-child{width:52%}
  #parentPrintReport.native-reading-report .pdf-response-table th:last-child{width:7%}
  #parentPrintReport.native-reading-report .pdf-response-table th{background:#edf3e7}
  #parentPrintReport.native-reading-report .pdf-response-table tr{break-inside:avoid}
  #parentPrintReport.native-reading-report .pdf-response-table thead{display:table-header-group}
  #parentPrintReport.native-reading-report .pdf-response-picture{float:left;width:82pt;height:70pt;margin:0 8pt 5pt 0}
  #parentPrintReport.native-reading-report .pdf-response-picture svg{width:100%;height:100%;display:block}
  #parentPrintReport.native-reading-report .pdf-diagram{width:75%;margin:0 auto 12pt}
  #parentPrintReport.native-reading-report .pdf-diagram svg{display:block;width:100%;height:auto}
 }
 `;document.head.append(style);}return host;
}
printParentReport=async function(){
 if(!teacherReport.unlocked||!teacherReport.report)return;
 const host=prepareFullPrintReport(teacherReport.report);await Promise.all([...host.querySelectorAll('img')].map(image=>image.decode()));
 await document.fonts.ready;await Promise.all([...new Set(teacherReport.report.rows.filter(row=>row.picture).map(row=>row.picture.atlas))].map(async source=>{const image=new Image();image.src=source;await image.decode();}));
 document.body.classList.add('printing-parent-report');try{window.print();}finally{document.body.classList.remove('printing-parent-report');}
};
