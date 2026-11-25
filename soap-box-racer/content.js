/* Original fiction; F&P letters are instructional targets for teacher review. */
const LEVELS={
  "E": {
    "grade": "F&P E target",
    "titles": [
      "A red car",
      "A nut to fix",
      "On the hill",
      "A pal can help"
    ],
    "sections": [
      {
        "text": [
          "It is a sunny day. They work at a table.",
          "Ben has a red car.",
          "Mia can sit in it.",
          "Jo can give it a push.",
          "The car can go."
        ],
        "mc": [
          {
            "prompt": "What colour is the car?",
            "choices": [
              "Tan",
              "Red"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "Red"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia can…",
              "sit in the car"
            ]
          ],
          "options": [
            "sit in the car",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia can… sit in the car"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It is a sunny day. They work at a table.",
            "Ben has a {{c0}} car.",
            "Mia can sit in it.",
            "Jo can give it a push.",
            "The car can {{c1}}."
          ],
          "parts": [
            "It is a sunny day. They work at a table.\n\nBen has a {{c0}} car.\n\nMia can sit in it.\n\nJo can give it a push.\n\nThe car can {{c1}}."
          ],
          "columns": [
            "It is a sunny day. They work at a table. Ben has a {{c0}} car.",
            "Mia can sit in it. Jo can give it a push. The car can {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "red",
              "paragraph": 1,
              "prompt": "Ben has a ______ car."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "go",
              "paragraph": 4,
              "prompt": "The car can ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "go"
            },
            {
              "id": "w0",
              "word": "red"
            }
          ]
        }
      },
      {
        "text": [
          "The car has a bad nut.",
          "Mia can stop.",
          "Jo can fix the nut.",
          "Ben can give it a spin.",
          "They look at the nut."
        ],
        "mc": [
          {
            "prompt": "Who can fix the nut?",
            "choices": [
              "Jo",
              "Ben"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "Jo"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Jo can fix the…",
              "nut"
            ]
          ],
          "options": [
            "nut",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Jo can fix the… nut"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The car has a bad {{c0}}.",
            "Mia can stop.",
            "Jo can fix the nut.",
            "Ben can give it a {{c1}}.",
            "They look at the nut."
          ],
          "parts": [
            "The car has a bad {{c0}}.\n\nMia can stop.\n\nJo can fix the nut.\n\nBen can give it a {{c1}}.\n\nThey look at the nut."
          ],
          "columns": [
            "The car has a bad {{c0}}. Mia can stop.",
            "Jo can fix the nut. Ben can give it a {{c1}}. They look at the nut."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "nut",
              "paragraph": 0,
              "prompt": "The car has a bad ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "spin",
              "paragraph": 3,
              "prompt": "Ben can give it a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "spin"
            },
            {
              "id": "w0",
              "word": "nut"
            }
          ]
        }
      },
      {
        "text": [
          "Mia has a red hat.",
          "It is a helmet.",
          "Ben has a flag.",
          "The car can go down the hill."
        ],
        "mc": [
          {
            "prompt": "What does Ben have?",
            "choices": [
              "A bag",
              "A flag"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "A flag"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Mia’s hat is a…",
              "helmet"
            ]
          ],
          "options": [
            "helmet",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia’s hat is a… helmet"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia has a red {{c0}}.",
            "It is a helmet.",
            "Ben has a flag.",
            "The car can go down the {{c1}}."
          ],
          "parts": [
            "Mia has a red {{c0}}.\n\nIt is a helmet.\n\nBen has a flag.\n\nThe car can go down the {{c1}}."
          ],
          "columns": [
            "Mia has a red {{c0}}. It is a helmet.",
            "Ben has a flag. The car can go down the {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hat",
              "paragraph": 0,
              "prompt": "Mia has a red ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "hill",
              "paragraph": 3,
              "prompt": "The car can go down the ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "hill"
            },
            {
              "id": "w0",
              "word": "hat"
            }
          ]
        }
      },
      {
        "text": [
          "Ben has lost his flag.",
          "Mia can stop and help.",
          "Ben can get it.",
          "Jo says, \"What a good pal!\"",
          "They sort the flags."
        ],
        "mc": [
          {
            "prompt": "Why does Mia stop?",
            "choices": [
              "To help Ben",
              "To get a hat"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "To help Ben"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Mia is a good…",
              "pal"
            ]
          ],
          "options": [
            "pal",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia is a good… pal"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ben has lost his {{c0}}.",
            "Mia can stop and help.",
            "Ben can get it.",
            "Jo says, \"What a good {{c1}}!\"",
            "They sort the flags."
          ],
          "parts": [
            "Ben has lost his {{c0}}.\n\nMia can stop and help.\n\nBen can get it.\n\nJo says, \"What a good {{c1}}!\"\n\nThey sort the flags."
          ],
          "columns": [
            "Ben has lost his {{c0}}. Mia can stop and help.",
            "Ben can get it. Jo says, \"What a good {{c1}}!\" They sort the flags."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Ben has lost his ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "pal",
              "paragraph": 3,
              "prompt": "Jo says, \"What a good ______!\""
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "pal"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      }
    ],
    "intro": "99 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "F": {
    "grade": "F&P F target",
    "titles": [
      "A racer for two friends",
      "Listen to the wheel",
      "Ready to roll",
      "More than a race"
    ],
    "sections": [
      {
        "text": [
          "It was sunny as the friends worked at the table.",
          "Mia and Ben made a small red racer.",
          "It had four wheels and no motor.",
          "Jo checked the wheels before the race.",
          "Mia sat in the seat, and Ben gave her a push."
        ],
        "mc": [
          {
            "prompt": "Why did Ben push the racer?",
            "choices": [
              "It was full of water.",
              "It had no wheels.",
              "It had no motor."
            ],
            "answer": 2,
            "skill": "Connect two details",
            "evidence": "no motor"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia",
              "sat in the seat"
            ],
            [
              "Jo",
              "checked the wheels"
            ]
          ],
          "options": [
            "checked the wheels",
            "sat in the seat"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia sat in the seat",
            "Jo checked the wheels"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny as the friends worked at the table.",
            "Mia and Ben made a small red {{c0}}.",
            "It had four wheels and no motor.",
            "Jo checked the wheels before the race.",
            "Mia sat in the {{c1}}, and Ben gave her a push."
          ],
          "parts": [
            "It was sunny as the friends worked at the table.\n\nMia and Ben made a small red {{c0}}.\n\nIt had four wheels and no motor.\n\nJo checked the wheels before the race.\n\nMia sat in the {{c1}}, and Ben gave her a push."
          ],
          "columns": [
            "It was sunny as the friends worked at the table. Mia and Ben made a small red {{c0}}.",
            "It had four wheels and no motor. Jo checked the wheels before the race. Mia sat in the {{c1}}, and Ben gave her a push."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "racer",
              "paragraph": 1,
              "prompt": "Mia and Ben made a small red ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "seat",
              "paragraph": 4,
              "prompt": "Mia sat in the ______, and Ben gave her a push."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "seat"
            },
            {
              "id": "w0",
              "word": "racer"
            }
          ]
        }
      },
      {
        "text": [
          "The front wheel made a sharp click.",
          "Mia stopped and called Jo.",
          "A nut was loose, so Jo made it tight.",
          "Ben spun the wheel, and it turned without a sound.",
          "Jo said, \"Look at the nut.\""
        ],
        "mc": [
          {
            "prompt": "What made the clicking sound?",
            "choices": [
              "A bird in a tree",
              "A loose nut",
              "A green flag"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "A nut was loose"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Mia",
              "called Jo"
            ],
            [
              "Ben",
              "spun the wheel"
            ]
          ],
          "options": [
            "spun the wheel",
            "called Jo"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia called Jo",
            "Ben spun the wheel"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The front wheel made a sharp {{c0}}.",
            "Mia stopped and called Jo.",
            "A nut was loose, so Jo made it tight.",
            "Ben spun the wheel, and it turned without a {{c1}}.",
            "Jo said, \"Look at the nut.\""
          ],
          "parts": [
            "The front wheel made a sharp {{c0}}.\n\nMia stopped and called Jo.\n\nA nut was loose, so Jo made it tight.\n\nBen spun the wheel, and it turned without a {{c1}}.\n\nJo said, \"Look at the nut.\""
          ],
          "columns": [
            "The front wheel made a sharp {{c0}}. Mia stopped and called Jo.",
            "A nut was loose, so Jo made it tight. Ben spun the wheel, and it turned without a {{c1}}. Jo said, \"Look at the nut.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "click",
              "paragraph": 0,
              "prompt": "The front wheel made a sharp ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sound",
              "paragraph": 3,
              "prompt": "Ben spun the wheel, and it turned without a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "sound"
            },
            {
              "id": "w0",
              "word": "click"
            }
          ]
        }
      },
      {
        "text": [
          "Mia put on her red helmet.",
          "Jo checked the brake one more time.",
          "Ben waved a green flag at the start.",
          "Mia rolled down the gentle hill and steered past a cone."
        ],
        "mc": [
          {
            "prompt": "What did Jo check before Mia rolled?",
            "choices": [
              "The brake",
              "The flag",
              "The tree"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "Jo checked the brake"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The green flag",
              "was at the start"
            ],
            [
              "The cone",
              "was on the course"
            ]
          ],
          "options": [
            "was on the course",
            "was at the start"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The green flag was at the start",
            "The cone was on the course"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia put on her red {{c0}}.",
            "Jo checked the brake one more time.",
            "Ben waved a green flag at the start.",
            "Mia rolled down the gentle hill and steered past a {{c1}}."
          ],
          "parts": [
            "Mia put on her red {{c0}}.\n\nJo checked the brake one more time.\n\nBen waved a green flag at the start.\n\nMia rolled down the gentle hill and steered past a {{c1}}."
          ],
          "columns": [
            "Mia put on her red {{c0}}. Jo checked the brake one more time.",
            "Ben waved a green flag at the start. Mia rolled down the gentle hill and steered past a {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "helmet",
              "paragraph": 0,
              "prompt": "Mia put on her red ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "cone",
              "paragraph": 3,
              "prompt": "Mia rolled down the gentle hill and steered past a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "cone"
            },
            {
              "id": "w0",
              "word": "helmet"
            }
          ]
        }
      },
      {
        "text": [
          "Near the finish, Ben dropped his blue flag.",
          "Mia stopped her racer to help him pick it up.",
          "Another racer went past them.",
          "Jo gave Mia a gold star for being a kind friend.",
          "Then they helped Jo sort the flags."
        ],
        "mc": [
          {
            "prompt": "Why did Jo give Mia a star?",
            "choices": [
              "She came first.",
              "She built a tree house.",
              "She helped her friend."
            ],
            "answer": 2,
            "skill": "Find a reason",
            "evidence": "for being a kind friend"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Mia stopped",
              "to help Ben"
            ],
            [
              "Another racer",
              "went past them"
            ]
          ],
          "options": [
            "went past them",
            "to help Ben"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Mia stopped to help Ben",
            "Another racer went past them"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Near the finish, Ben dropped his blue {{c0}}.",
            "Mia stopped her racer to help him pick it up.",
            "Another racer went past them.",
            "Jo gave Mia a gold {{c1}} for being a kind friend.",
            "Then they helped Jo sort the flags."
          ],
          "parts": [
            "Near the finish, Ben dropped his blue {{c0}}.\n\nMia stopped her racer to help him pick it up.\n\nAnother racer went past them.\n\nJo gave Mia a gold {{c1}} for being a kind friend.\n\nThen they helped Jo sort the flags."
          ],
          "columns": [
            "Near the finish, Ben dropped his blue {{c0}}. Mia stopped her racer to help him pick it up.",
            "Another racer went past them. Jo gave Mia a gold {{c1}} for being a kind friend. Then they helped Jo sort the flags."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Near the finish, Ben dropped his blue ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "star",
              "paragraph": 3,
              "prompt": "Jo gave Mia a gold ______ for being a kind friend."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "star"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      }
    ],
    "intro": "153 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "G": {
    "grade": "F&P G target",
    "titles": [
      "A racer for two friends",
      "Listen to the wheel",
      "Ready to roll",
      "More than a race"
    ],
    "sections": [
      {
        "text": [
          "It was sunny as the friends worked at the table.",
          "Mia and Ben built a small red racer together. It had four wheels but no motor.",
          "Jo checked each wheel before the children tried it. Mia sat in the wooden seat, and Ben gave the racer a gentle push.",
          "The friends watched it roll along the path. Their little car was ready for a first practice."
        ],
        "mc": [
          {
            "prompt": "Why did Ben push the racer?",
            "choices": [
              "It was full of water.",
              "It had no wheels.",
              "It had no motor."
            ],
            "answer": 2,
            "skill": "Connect two details",
            "evidence": "no motor"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia",
              "sat in the seat"
            ],
            [
              "Jo",
              "checked the wheels"
            ]
          ],
          "options": [
            "checked the wheels",
            "sat in the seat"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia sat in the seat",
            "Jo checked the wheels"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny as the friends worked at the table.",
            "Mia and Ben built a small red {{c0}} together. It had four wheels but no motor.",
            "Jo checked each wheel before the children tried it. Mia sat in the wooden {{c1}}, and Ben gave the racer a gentle push.",
            "The friends watched it roll along the path. Their little car was ready for a first practice."
          ],
          "parts": [
            "It was sunny as the friends worked at the table.\n\nMia and Ben built a small red {{c0}} together. It had four wheels but no motor.\n\nJo checked each wheel before the children tried it. Mia sat in the wooden {{c1}}, and Ben gave the racer a gentle push.\n\nThe friends watched it roll along the path. Their little car was ready for a first practice."
          ],
          "columns": [
            "It was sunny as the friends worked at the table. Mia and Ben built a small red {{c0}} together. It had four wheels but no motor.",
            "Jo checked each wheel before the children tried it. Mia sat in the wooden {{c1}}, and Ben gave the racer a gentle push. The friends watched it roll along the path. Their little car was ready for a first practice."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "racer",
              "paragraph": 1,
              "prompt": "Mia and Ben built a small red ______ together. It had four wheels but no motor."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "seat",
              "paragraph": 2,
              "prompt": "Jo checked each wheel before the children tried it. Mia sat in the wooden ______, and Ben gave the racer a gentle push."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "seat"
            },
            {
              "id": "w0",
              "word": "racer"
            }
          ]
        }
      },
      {
        "text": [
          "During practice, a front wheel made a sharp click. Mia stopped the racer and called Jo over.",
          "Jo found a loose nut and made it tight. Ben spun the wheel to check it. This time, it turned without a sound.",
          "The friends were glad they had stopped to find out what was wrong.",
          "Jo said, \"Look at the nut.\""
        ],
        "mc": [
          {
            "prompt": "What made the clicking sound?",
            "choices": [
              "A bird in a tree",
              "A loose nut",
              "A green flag"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "A nut was loose"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Mia",
              "called Jo"
            ],
            [
              "Ben",
              "spun the wheel"
            ]
          ],
          "options": [
            "spun the wheel",
            "called Jo"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia called Jo",
            "Ben spun the wheel"
          ]
        },
        "cloze": {
          "paragraphs": [
            "During practice, a front wheel made a sharp {{c0}}. Mia stopped the racer and called Jo over.",
            "Jo found a loose nut and made it tight. Ben spun the wheel to check it. This time, it turned without a {{c1}}.",
            "The friends were glad they had stopped to find out what was wrong.",
            "Jo said, \"Look at the nut.\""
          ],
          "parts": [
            "During practice, a front wheel made a sharp {{c0}}. Mia stopped the racer and called Jo over.\n\nJo found a loose nut and made it tight. Ben spun the wheel to check it. This time, it turned without a {{c1}}.\n\nThe friends were glad they had stopped to find out what was wrong.\n\nJo said, \"Look at the nut.\""
          ],
          "columns": [
            "During practice, a front wheel made a sharp {{c0}}. Mia stopped the racer and called Jo over. Jo found a loose nut and made it tight. Ben spun the wheel to check it. This time, it turned without a {{c1}}.",
            "The friends were glad they had stopped to find out what was wrong. Jo said, \"Look at the nut.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "click",
              "paragraph": 0,
              "prompt": "During practice, a front wheel made a sharp ______. Mia stopped the racer and called Jo over."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sound",
              "paragraph": 1,
              "prompt": "Jo found a loose nut and made it tight. Ben spun the wheel to check it. This time, it turned without a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "sound"
            },
            {
              "id": "w0",
              "word": "click"
            }
          ]
        }
      },
      {
        "text": [
          "Mia put on her red helmet while Ben waited by the start. Jo checked the brake before Mia took a turn.",
          "Ben waved a green flag. The racer rolled down the gentle hill, and Mia steered carefully past a cone.",
          "She kept both hands ready to steer and watched where she was going."
        ],
        "mc": [
          {
            "prompt": "What did Jo check before Mia rolled?",
            "choices": [
              "The brake",
              "The flag",
              "The tree"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "Jo checked the brake"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The green flag",
              "was at the start"
            ],
            [
              "The cone",
              "was on the course"
            ]
          ],
          "options": [
            "was on the course",
            "was at the start"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The green flag was at the start",
            "The cone was on the course"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia put on her red {{c0}} while Ben waited by the start. Jo checked the brake before Mia took a turn.",
            "Ben waved a green flag. The racer rolled down the gentle hill, and Mia steered carefully past a {{c1}}.",
            "She kept both hands ready to steer and watched where she was going."
          ],
          "parts": [
            "Mia put on her red {{c0}} while Ben waited by the start. Jo checked the brake before Mia took a turn.\n\nBen waved a green flag. The racer rolled down the gentle hill, and Mia steered carefully past a {{c1}}.\n\nShe kept both hands ready to steer and watched where she was going."
          ],
          "columns": [
            "Mia put on her red {{c0}} while Ben waited by the start. Jo checked the brake before Mia took a turn. Ben waved a green flag. The racer rolled down the gentle hill, and Mia steered carefully past a {{c1}}.",
            "She kept both hands ready to steer and watched where she was going."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "helmet",
              "paragraph": 0,
              "prompt": "Mia put on her red ______ while Ben waited by the start. Jo checked the brake before Mia took a turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "cone",
              "paragraph": 1,
              "prompt": "Ben waved a green flag. The racer rolled down the gentle hill, and Mia steered carefully past a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "cone"
            },
            {
              "id": "w0",
              "word": "helmet"
            }
          ]
        }
      },
      {
        "text": [
          "Near the finish, Ben dropped his blue flag. Mia saw it fall and stopped her racer to help him.",
          "Another racer rolled past while they picked it up. Mia and Ben went to the finish together.",
          "Jo gave Mia a gold star for being a kind friend. Mia smiled and showed the star to Ben.",
          "Then they helped Jo sort the flags."
        ],
        "mc": [
          {
            "prompt": "Why did Jo give Mia a star?",
            "choices": [
              "She came first.",
              "She built a tree house.",
              "She helped her friend."
            ],
            "answer": 2,
            "skill": "Find a reason",
            "evidence": "for being a kind friend"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Mia stopped",
              "to help Ben"
            ],
            [
              "Another racer",
              "went past them"
            ]
          ],
          "options": [
            "went past them",
            "to help Ben"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia stopped to help Ben",
            "Another racer went past them"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Near the finish, Ben dropped his blue {{c0}}. Mia saw it fall and stopped her racer to help him.",
            "Another racer rolled past while they picked it up. Mia and Ben went to the finish together.",
            "Jo gave Mia a gold {{c1}} for being a kind friend. Mia smiled and showed the star to Ben.",
            "Then they helped Jo sort the flags."
          ],
          "parts": [
            "Near the finish, Ben dropped his blue {{c0}}. Mia saw it fall and stopped her racer to help him.\n\nAnother racer rolled past while they picked it up. Mia and Ben went to the finish together.\n\nJo gave Mia a gold {{c1}} for being a kind friend. Mia smiled and showed the star to Ben.\n\nThen they helped Jo sort the flags."
          ],
          "columns": [
            "Near the finish, Ben dropped his blue {{c0}}. Mia saw it fall and stopped her racer to help him. Another racer rolled past while they picked it up. Mia and Ben went to the finish together.",
            "Jo gave Mia a gold {{c1}} for being a kind friend. Mia smiled and showed the star to Ben. Then they helped Jo sort the flags."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Near the finish, Ben dropped his blue ______. Mia saw it fall and stopped her racer to help him."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "star",
              "paragraph": 2,
              "prompt": "Jo gave Mia a gold ______ for being a kind friend. Mia smiled and showed the star to Ben."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "star"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      }
    ],
    "intro": "240 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "L": {
    "grade": "F&P L target",
    "titles": [
      "The team builds a racer",
      "A sound worth noticing",
      "The green flag",
      "A different sort of winner"
    ],
    "sections": [
      {
        "text": [
          "Mia wanted to build the fastest soap-box racer at the fair. Ben cared more about painting bright stripes along its wooden frame.",
          "Their racer had no motor. It would roll down a gentle slope, while Mia used a rope to steer the front wheels.",
          "Jo helped them fit a simple brake. Before anyone rode, she checked each wheel and watched Mia practise stopping.",
          "Ben painted a small star beside the seat. \"Now it looks fast,\" he said, although the racer had not moved."
        ],
        "mc": [
          {
            "prompt": "What makes the racer move?",
            "choices": [
              "A small motor",
              "A paddle",
              "A moving seat",
              "Rolling down a slope"
            ],
            "answer": 3,
            "skill": "Connect story details",
            "evidence": "roll down a gentle slope"
          },
          {
            "prompt": "Why does Jo watch Mia practise stopping?",
            "choices": [
              "To make the hill steeper",
              "To count the stars",
              "To check that she can use the brake",
              "To choose the paint colour"
            ],
            "answer": 2,
            "skill": "Infer from actions",
            "evidence": "watched Mia practise stopping"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia wanted",
              "a fast racer"
            ],
            [
              "Ben painted",
              "bright stripes"
            ]
          ],
          "options": [
            "bright stripes",
            "a fast racer"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia wanted a fast racer",
            "Ben painted bright stripes"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia wanted to build the fastest soap-box racer at the fair. Ben cared more about painting bright stripes along its wooden {{c0}}.",
            "Their racer had no motor. It would roll down a gentle slope, while Mia used a rope to steer the front wheels.",
            "Jo helped them fit a simple brake. Before anyone rode, she checked each {{c1}} and watched Mia practise stopping.",
            "Ben painted a small {{c2}} beside the seat. \"Now it looks fast,\" he said, although the racer had not moved."
          ],
          "parts": [
            "Mia wanted to build the fastest soap-box racer at the fair. Ben cared more about painting bright stripes along its wooden {{c0}}.\n\nTheir racer had no motor. It would roll down a gentle slope, while Mia used a rope to steer the front wheels.\n\nJo helped them fit a simple brake. Before anyone rode, she checked each {{c1}} and watched Mia practise stopping.\n\nBen painted a small {{c2}} beside the seat. \"Now it looks fast,\" he said, although the racer had not moved."
          ],
          "columns": [
            "Mia wanted to build the fastest soap-box racer at the fair. Ben cared more about painting bright stripes along its wooden {{c0}}. Their racer had no motor. It would roll down a gentle slope, while Mia used a rope to steer the front wheels.",
            "Jo helped them fit a simple brake. Before anyone rode, she checked each {{c1}} and watched Mia practise stopping. Ben painted a small {{c2}} beside the seat. \"Now it looks fast,\" he said, although the racer had not moved."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "frame",
              "paragraph": 0,
              "prompt": "Mia wanted to build the fastest soap-box racer at the fair. Ben cared more about painting bright stripes along its wooden ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wheel",
              "paragraph": 2,
              "prompt": "Jo helped them fit a simple brake. Before anyone rode, she checked each ______ and watched Mia practise stopping."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "star",
              "paragraph": 3,
              "prompt": "Ben painted a small ______ beside the seat. \"Now it looks fast,\" he said, although the racer had not moved."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "star"
            },
            {
              "id": "w1",
              "word": "wheel"
            },
            {
              "id": "w0",
              "word": "frame"
            }
          ]
        }
      },
      {
        "text": [
          "During a practice roll, the front wheel gave a sharp click. Mia wanted to try again quickly, but Ben asked her to wait.",
          "He had noticed that the wheel leaned slightly whenever the racer turned. Jo found a loose nut on the axle.",
          "After Jo tightened it, Ben spun the wheel. It turned smoothly, without the clicking sound.",
          "Mia thanked him for listening. Their practice had taken longer than planned, but now she felt more confident about the ride."
        ],
        "mc": [
          {
            "prompt": "Which detail suggests the wheel needs checking?",
            "choices": [
              "Ben has a flag.",
              "The fair has a slope.",
              "It leans when the racer turns.",
              "Its paint is red."
            ],
            "answer": 2,
            "skill": "Use evidence",
            "evidence": "wheel leaned slightly"
          },
          {
            "prompt": "Why does Mia feel more confident?",
            "choices": [
              "Ben has left the fair.",
              "The loose wheel has been fixed.",
              "The course is shorter.",
              "She has won the race."
            ],
            "answer": 1,
            "skill": "Infer a feeling",
            "evidence": "After Jo tightened it"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Ben noticed",
              "the leaning wheel"
            ],
            [
              "Jo tightened",
              "a loose nut"
            ]
          ],
          "options": [
            "a loose nut",
            "the leaning wheel"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben noticed the leaning wheel",
            "Jo tightened a loose nut"
          ]
        },
        "cloze": {
          "paragraphs": [
            "During a practice roll, the front wheel gave a sharp {{c0}}. Mia wanted to try again quickly, but Ben asked her to wait.",
            "He had noticed that the wheel leaned slightly whenever the racer turned. Jo found a loose {{c1}} on the axle.",
            "After Jo tightened it, Ben spun the wheel. It turned smoothly, without the clicking sound.",
            "Mia thanked him for listening. Their practice had taken longer than planned, but now she felt more {{c2}} about the ride."
          ],
          "parts": [
            "During a practice roll, the front wheel gave a sharp {{c0}}. Mia wanted to try again quickly, but Ben asked her to wait.\n\nHe had noticed that the wheel leaned slightly whenever the racer turned. Jo found a loose {{c1}} on the axle.\n\nAfter Jo tightened it, Ben spun the wheel. It turned smoothly, without the clicking sound.\n\nMia thanked him for listening. Their practice had taken longer than planned, but now she felt more {{c2}} about the ride."
          ],
          "columns": [
            "During a practice roll, the front wheel gave a sharp {{c0}}. Mia wanted to try again quickly, but Ben asked her to wait. He had noticed that the wheel leaned slightly whenever the racer turned. Jo found a loose {{c1}} on the axle.",
            "After Jo tightened it, Ben spun the wheel. It turned smoothly, without the clicking sound. Mia thanked him for listening. Their practice had taken longer than planned, but now she felt more {{c2}} about the ride."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "click",
              "paragraph": 0,
              "prompt": "During a practice roll, the front wheel gave a sharp ______. Mia wanted to try again quickly, but Ben asked her to wait."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "nut",
              "paragraph": 1,
              "prompt": "He had noticed that the wheel leaned slightly whenever the racer turned. Jo found a loose ______ on the axle."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "confident",
              "paragraph": 3,
              "prompt": "Mia thanked him for listening. Their practice had taken longer than planned, but now she felt more ______ about the ride."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "confident"
            },
            {
              "id": "w1",
              "word": "nut"
            },
            {
              "id": "w0",
              "word": "click"
            }
          ]
        }
      },
      {
        "text": [
          "At the start, Mia pulled on her helmet and tested the brake. Ben stood where Jo had asked him to wait, well outside the course.",
          "The green flag lifted. The racer rolled forward, and Mia guided it around the first cone.",
          "Halfway down, she heard a flap behind her. The loose end of her painted ribbon was brushing a wheel.",
          "Mia slowed and stopped in the marked stopping area. Jo removed the ribbon before it could catch, and Mia waited for permission to start again."
        ],
        "mc": [
          {
            "prompt": "Why does Mia stop in the marked area?",
            "choices": [
              "Ben is on the course.",
              "A ribbon is brushing a wheel.",
              "She has reached the finish.",
              "She wants a new helmet."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "ribbon was brushing a wheel"
          },
          {
            "prompt": "What do Mia’s actions show?",
            "choices": [
              "She puts a safe ride before speed.",
              "She has forgotten the brake.",
              "She wants Ben to race alone.",
              "She is ignoring Jo."
            ],
            "answer": 0,
            "skill": "Infer character",
            "evidence": "slowed and stopped"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Ben waited",
              "outside the course"
            ],
            [
              "Jo removed",
              "the loose ribbon"
            ]
          ],
          "options": [
            "the loose ribbon",
            "outside the course"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben waited outside the course",
            "Jo removed the loose ribbon"
          ]
        },
        "cloze": {
          "paragraphs": [
            "At the start, Mia pulled on her {{c0}} and tested the brake. Ben stood where Jo had asked him to wait, well outside the course.",
            "The green {{c1}} lifted. The racer rolled forward, and Mia guided it around the first cone.",
            "Halfway down, she heard a flap behind her. The loose end of her painted ribbon was brushing a wheel.",
            "Mia slowed and stopped in the marked stopping area. Jo removed the {{c2}} before it could catch, and Mia waited for permission to start again."
          ],
          "parts": [
            "At the start, Mia pulled on her {{c0}} and tested the brake. Ben stood where Jo had asked him to wait, well outside the course.\n\nThe green {{c1}} lifted. The racer rolled forward, and Mia guided it around the first cone.\n\nHalfway down, she heard a flap behind her. The loose end of her painted ribbon was brushing a wheel.\n\nMia slowed and stopped in the marked stopping area. Jo removed the {{c2}} before it could catch, and Mia waited for permission to start again."
          ],
          "columns": [
            "At the start, Mia pulled on her {{c0}} and tested the brake. Ben stood where Jo had asked him to wait, well outside the course. The green {{c1}} lifted. The racer rolled forward, and Mia guided it around the first cone.",
            "Halfway down, she heard a flap behind her. The loose end of her painted ribbon was brushing a wheel. Mia slowed and stopped in the marked stopping area. Jo removed the {{c2}} before it could catch, and Mia waited for permission to start again."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "helmet",
              "paragraph": 0,
              "prompt": "At the start, Mia pulled on her ______ and tested the brake. Ben stood where Jo had asked him to wait, well outside the course."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "flag",
              "paragraph": 1,
              "prompt": "The green ______ lifted. The racer rolled forward, and Mia guided it around the first cone."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "ribbon",
              "paragraph": 3,
              "prompt": "Mia slowed and stopped in the marked stopping area. Jo removed the ______ before it could catch, and Mia waited for permission to start again."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "ribbon"
            },
            {
              "id": "w1",
              "word": "flag"
            },
            {
              "id": "w0",
              "word": "helmet"
            }
          ]
        }
      },
      {
        "text": [
          "Mia finished behind two other racers. At first, she stared at the place where the winning ribbon hung.",
          "Then Ben pointed to the red racer. Its star was still shining, and every wheel had carried her safely home.",
          "Jo gave their team a small award for careful preparation and sensible choices. Mia asked Ben to hold it with her.",
          "\"Next time, we can work on speed,\" she said. \"This time, we built something we could trust.\""
        ],
        "mc": [
          {
            "prompt": "How does Mia’s idea of success change?",
            "choices": [
              "She values a reliable racer and teamwork.",
              "She decides that paint does not matter.",
              "She thinks only first place counts.",
              "She gives up building racers."
            ],
            "answer": 0,
            "skill": "Explain a change",
            "evidence": "something we could trust"
          },
          {
            "prompt": "Why does Mia ask Ben to hold the award?",
            "choices": [
              "The award is broken.",
              "Jo tells her to leave.",
              "Ben won a different race.",
              "His help was part of their success."
            ],
            "answer": 3,
            "skill": "Infer a motive",
            "evidence": "asked Ben to hold it with her"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The team’s award",
              "recognised sensible choices"
            ],
            [
              "Mia’s next goal",
              "was to work on speed"
            ]
          ],
          "options": [
            "was to work on speed",
            "recognised sensible choices"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The team’s award recognised sensible choices",
            "Mia’s next goal was to work on speed"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia finished behind two other racers. At first, she stared at the place where the winning {{c0}} hung.",
            "Then Ben pointed to the red racer. Its star was still shining, and every wheel had carried her safely home.",
            "Jo gave their team a small award for careful preparation and sensible {{c1}}. Mia asked Ben to hold it with her.",
            "\"Next time, we can work on speed,\" she said. \"This time, we built something we could {{c2}}.\""
          ],
          "parts": [
            "Mia finished behind two other racers. At first, she stared at the place where the winning {{c0}} hung.\n\nThen Ben pointed to the red racer. Its star was still shining, and every wheel had carried her safely home.\n\nJo gave their team a small award for careful preparation and sensible {{c1}}. Mia asked Ben to hold it with her.\n\n\"Next time, we can work on speed,\" she said. \"This time, we built something we could {{c2}}.\""
          ],
          "columns": [
            "Mia finished behind two other racers. At first, she stared at the place where the winning {{c0}} hung. Then Ben pointed to the red racer. Its star was still shining, and every wheel had carried her safely home.",
            "Jo gave their team a small award for careful preparation and sensible {{c1}}. Mia asked Ben to hold it with her. \"Next time, we can work on speed,\" she said. \"This time, we built something we could {{c2}}.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "ribbon",
              "paragraph": 0,
              "prompt": "Mia finished behind two other racers. At first, she stared at the place where the winning ______ hung."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "choices",
              "paragraph": 2,
              "prompt": "Jo gave their team a small award for careful preparation and sensible ______. Mia asked Ben to hold it with her."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "trust",
              "paragraph": 3,
              "prompt": "\"Next time, we can work on speed,\" she said. \"This time, we built something we could ______.\""
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "trust"
            },
            {
              "id": "w1",
              "word": "choices"
            },
            {
              "id": "w0",
              "word": "ribbon"
            }
          ]
        }
      }
    ],
    "intro": "323 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "M": {
    "grade": "F&P M target",
    "titles": [
      "The team builds a racer",
      "A sound worth noticing",
      "The green flag",
      "A different sort of winner"
    ],
    "sections": [
      {
        "text": [
          "Mia studied the gentle slope at the fair and imagined a red racer rolling down it. She wanted a quick machine; Ben wanted a strong wooden frame.",
          "They planned a soap-box racer with no motor. The slope would make it move, and a rope would turn the front wheels.",
          "Jo helped fit a brake and checked the wheels before Mia practised stopping. A fast start would be useless if Mia could not stop where she needed to.",
          "Ben added bright stripes and a small gold star. Mia laughed that paint could not make a racer faster, but she liked seeing both friends’ ideas in the finished car."
        ],
        "mc": [
          {
            "prompt": "What makes the racer move?",
            "choices": [
              "A small motor",
              "A paddle",
              "A moving seat",
              "Rolling down a slope"
            ],
            "answer": 3,
            "skill": "Connect story details",
            "evidence": "The slope would make it move"
          },
          {
            "prompt": "Why does Jo watch Mia practise stopping?",
            "choices": [
              "To make the hill steeper",
              "To count the stars",
              "To check that she can use the brake",
              "To choose the paint colour"
            ],
            "answer": 2,
            "skill": "Infer from actions",
            "evidence": "practised stopping"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia wanted",
              "a fast racer"
            ],
            [
              "Ben painted",
              "bright stripes"
            ]
          ],
          "options": [
            "bright stripes",
            "a fast racer"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia wanted a fast racer",
            "Ben painted bright stripes"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia studied the gentle slope at the fair and imagined a red racer rolling down it. She wanted a quick machine; Ben wanted a strong wooden {{c0}}.",
            "They planned a soap-box racer with no motor. The slope would make it move, and a rope would turn the front wheels.",
            "Jo helped fit a {{c1}} and checked the wheels before Mia practised stopping. A fast start would be useless if Mia could not stop where she needed to.",
            "Ben added bright stripes and a small gold {{c2}}. Mia laughed that paint could not make a racer faster, but she liked seeing both friends’ ideas in the finished car."
          ],
          "parts": [
            "Mia studied the gentle slope at the fair and imagined a red racer rolling down it. She wanted a quick machine; Ben wanted a strong wooden {{c0}}.\n\nThey planned a soap-box racer with no motor. The slope would make it move, and a rope would turn the front wheels.\n\nJo helped fit a {{c1}} and checked the wheels before Mia practised stopping. A fast start would be useless if Mia could not stop where she needed to.\n\nBen added bright stripes and a small gold {{c2}}. Mia laughed that paint could not make a racer faster, but she liked seeing both friends’ ideas in the finished car."
          ],
          "columns": [
            "Mia studied the gentle slope at the fair and imagined a red racer rolling down it. She wanted a quick machine; Ben wanted a strong wooden {{c0}}. They planned a soap-box racer with no motor. The slope would make it move, and a rope would turn the front wheels.",
            "Jo helped fit a {{c1}} and checked the wheels before Mia practised stopping. A fast start would be useless if Mia could not stop where she needed to. Ben added bright stripes and a small gold {{c2}}. Mia laughed that paint could not make a racer faster, but she liked seeing both friends’ ideas in the finished car."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "frame",
              "paragraph": 0,
              "prompt": "Mia studied the gentle slope at the fair and imagined a red racer rolling down it. She wanted a quick machine; Ben wanted a strong wooden ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "brake",
              "paragraph": 2,
              "prompt": "Jo helped fit a ______ and checked the wheels before Mia practised stopping. A fast start would be useless if Mia could not stop where she needed to."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "star",
              "paragraph": 3,
              "prompt": "Ben added bright stripes and a small gold ______. Mia laughed that paint could not make a racer faster, but she liked seeing both friends’ ideas in the finished car."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "star"
            },
            {
              "id": "w1",
              "word": "brake"
            },
            {
              "id": "w0",
              "word": "frame"
            }
          ]
        }
      },
      {
        "text": [
          "During the practice ride, a click came from the front wheel each time Mia turned. She wanted to roll once more before the fair opened.",
          "Ben asked her to wait. From the side, he could see that the wheel leaned instead of staying upright.",
          "Jo discovered a loose nut on the axle, tightened it, and checked the fastening. Ben spun the wheel after the repair; its movement was quiet and even.",
          "Mia’s shoulders relaxed. Listening to a small sound had prevented a bigger problem. They had used extra practice time, yet she felt more confident than before."
        ],
        "mc": [
          {
            "prompt": "Which detail suggests the wheel needs checking?",
            "choices": [
              "Ben has a flag.",
              "The fair has a slope.",
              "It leans when the racer turns.",
              "Its paint is red."
            ],
            "answer": 2,
            "skill": "Use evidence",
            "evidence": "the wheel leaned"
          },
          {
            "prompt": "Why does Mia feel more confident?",
            "choices": [
              "Ben has left the fair.",
              "The loose wheel has been fixed.",
              "The course is shorter.",
              "She has won the race."
            ],
            "answer": 1,
            "skill": "Infer a feeling",
            "evidence": "after the repair"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Ben noticed",
              "the leaning wheel"
            ],
            [
              "Jo tightened",
              "a loose nut"
            ]
          ],
          "options": [
            "a loose nut",
            "the leaning wheel"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben noticed the leaning wheel",
            "Jo tightened a loose nut"
          ]
        },
        "cloze": {
          "paragraphs": [
            "During the practice ride, a {{c0}} came from the front wheel each time Mia turned. She wanted to roll once more before the fair opened.",
            "Ben asked her to wait. From the side, he could see that the wheel leaned instead of staying upright.",
            "Jo discovered a loose {{c1}} on the axle, tightened it, and checked the fastening. Ben spun the wheel after the repair; its movement was quiet and even.",
            "Mia’s shoulders relaxed. Listening to a small sound had prevented a bigger problem. They had used extra practice time, yet she felt more {{c2}} than before."
          ],
          "parts": [
            "During the practice ride, a {{c0}} came from the front wheel each time Mia turned. She wanted to roll once more before the fair opened.\n\nBen asked her to wait. From the side, he could see that the wheel leaned instead of staying upright.\n\nJo discovered a loose {{c1}} on the axle, tightened it, and checked the fastening. Ben spun the wheel after the repair; its movement was quiet and even.\n\nMia’s shoulders relaxed. Listening to a small sound had prevented a bigger problem. They had used extra practice time, yet she felt more {{c2}} than before."
          ],
          "columns": [
            "During the practice ride, a {{c0}} came from the front wheel each time Mia turned. She wanted to roll once more before the fair opened. Ben asked her to wait. From the side, he could see that the wheel leaned instead of staying upright.",
            "Jo discovered a loose {{c1}} on the axle, tightened it, and checked the fastening. Ben spun the wheel after the repair; its movement was quiet and even. Mia’s shoulders relaxed. Listening to a small sound had prevented a bigger problem. They had used extra practice time, yet she felt more {{c2}} than before."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "click",
              "paragraph": 0,
              "prompt": "During the practice ride, a ______ came from the front wheel each time Mia turned. She wanted to roll once more before the fair opened."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "nut",
              "paragraph": 2,
              "prompt": "Jo discovered a loose ______ on the axle, tightened it, and checked the fastening. Ben spun the wheel after the repair; its movement was quiet and even."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "confident",
              "paragraph": 3,
              "prompt": "Mia’s shoulders relaxed. Listening to a small sound had prevented a bigger problem. They had used extra practice time, yet she felt more ______ than before."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "confident"
            },
            {
              "id": "w1",
              "word": "nut"
            },
            {
              "id": "w0",
              "word": "click"
            }
          ]
        }
      },
      {
        "text": [
          "Mia checked her helmet while Jo tested the brake. Ben took his place beyond the barrier, where he could cheer without entering the course.",
          "The green flag rose. Mia rolled around the first cone and began to enjoy the feeling of choosing her own direction.",
          "Then a loose ribbon brushed the front wheel with a soft, repeated flap. Mia steered into the marked stopping area instead of trying to finish with it there.",
          "Jo removed the ribbon and examined the wheel. Mia waited for permission to continue. Her careful stop had cost time, but she knew why it had been necessary."
        ],
        "mc": [
          {
            "prompt": "Why does Mia stop in the marked area?",
            "choices": [
              "Ben is on the course.",
              "A ribbon is brushing a wheel.",
              "She has reached the finish.",
              "She wants a new helmet."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "a loose ribbon brushed the front wheel"
          },
          {
            "prompt": "What do Mia’s actions show?",
            "choices": [
              "She puts a safe ride before speed.",
              "She has forgotten the brake.",
              "She wants Ben to race alone.",
              "She is ignoring Jo."
            ],
            "answer": 0,
            "skill": "Infer character",
            "evidence": "instead of trying to finish"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Ben waited",
              "outside the course"
            ],
            [
              "Jo removed",
              "the loose ribbon"
            ]
          ],
          "options": [
            "the loose ribbon",
            "outside the course"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben waited outside the course",
            "Jo removed the loose ribbon"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia checked her {{c0}} while Jo tested the brake. Ben took his place beyond the barrier, where he could cheer without entering the course.",
            "The green flag rose. Mia rolled around the first {{c1}} and began to enjoy the feeling of choosing her own direction.",
            "Then a loose ribbon brushed the front wheel with a soft, repeated flap. Mia steered into the marked stopping area instead of trying to finish with it there.",
            "Jo removed the {{c2}} and examined the wheel. Mia waited for permission to continue. Her careful stop had cost time, but she knew why it had been necessary."
          ],
          "parts": [
            "Mia checked her {{c0}} while Jo tested the brake. Ben took his place beyond the barrier, where he could cheer without entering the course.\n\nThe green flag rose. Mia rolled around the first {{c1}} and began to enjoy the feeling of choosing her own direction.\n\nThen a loose ribbon brushed the front wheel with a soft, repeated flap. Mia steered into the marked stopping area instead of trying to finish with it there.\n\nJo removed the {{c2}} and examined the wheel. Mia waited for permission to continue. Her careful stop had cost time, but she knew why it had been necessary."
          ],
          "columns": [
            "Mia checked her {{c0}} while Jo tested the brake. Ben took his place beyond the barrier, where he could cheer without entering the course. The green flag rose. Mia rolled around the first {{c1}} and began to enjoy the feeling of choosing her own direction.",
            "Then a loose ribbon brushed the front wheel with a soft, repeated flap. Mia steered into the marked stopping area instead of trying to finish with it there. Jo removed the {{c2}} and examined the wheel. Mia waited for permission to continue. Her careful stop had cost time, but she knew why it had been necessary."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "helmet",
              "paragraph": 0,
              "prompt": "Mia checked her ______ while Jo tested the brake. Ben took his place beyond the barrier, where he could cheer without entering the course."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "cone",
              "paragraph": 1,
              "prompt": "The green flag rose. Mia rolled around the first ______ and began to enjoy the feeling of choosing her own direction."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "ribbon",
              "paragraph": 3,
              "prompt": "Jo removed the ______ and examined the wheel. Mia waited for permission to continue. Her careful stop had cost time, but she knew why it had been necessary."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "ribbon"
            },
            {
              "id": "w1",
              "word": "cone"
            },
            {
              "id": "w0",
              "word": "helmet"
            }
          ]
        }
      },
      {
        "text": [
          "Two racers finished ahead of Mia. She looked towards the winning ribbon and felt a brief, sharp disappointment. Winning had been her plan all morning.",
          "Ben pointed out that their red racer had made every turn and stopped when she needed it to. The painted star had arrived safely too.",
          "Jo gave both children an award for preparation and sensible choices. Mia asked Ben to take one side while she held the other.",
          "On the walk home, she suggested another practice day. \"Next time, we can work on speed,\" she said. This time, building something they could trust had become part of winning as well."
        ],
        "mc": [
          {
            "prompt": "How does Mia’s idea of success change?",
            "choices": [
              "She values a reliable racer and teamwork.",
              "She decides that paint does not matter.",
              "She thinks only first place counts.",
              "She gives up building racers."
            ],
            "answer": 0,
            "skill": "Explain a change",
            "evidence": "something they could trust"
          },
          {
            "prompt": "Why does Mia ask Ben to hold the award?",
            "choices": [
              "The award is broken.",
              "Jo tells her to leave.",
              "Ben won a different race.",
              "His help was part of their success."
            ],
            "answer": 3,
            "skill": "Infer a motive",
            "evidence": "asked Ben to take one side"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The team’s award",
              "recognised sensible choices"
            ],
            [
              "Mia’s next goal",
              "was to work on speed"
            ]
          ],
          "options": [
            "was to work on speed",
            "recognised sensible choices"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The team’s award recognised sensible choices",
            "Mia’s next goal was to work on speed"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Two racers finished ahead of Mia. She looked towards the winning {{c0}} and felt a brief, sharp disappointment. Winning had been her plan all morning.",
            "Ben pointed out that their red racer had made every turn and stopped when she needed it to. The painted star had arrived safely too.",
            "Jo gave both children an award for preparation and sensible {{c1}}. Mia asked Ben to take one side while she held the other.",
            "On the walk home, she suggested another practice day. \"Next time, we can work on speed,\" she said. This time, building something they could {{c2}} had become part of winning as well."
          ],
          "parts": [
            "Two racers finished ahead of Mia. She looked towards the winning {{c0}} and felt a brief, sharp disappointment. Winning had been her plan all morning.\n\nBen pointed out that their red racer had made every turn and stopped when she needed it to. The painted star had arrived safely too.\n\nJo gave both children an award for preparation and sensible {{c1}}. Mia asked Ben to take one side while she held the other.\n\nOn the walk home, she suggested another practice day. \"Next time, we can work on speed,\" she said. This time, building something they could {{c2}} had become part of winning as well."
          ],
          "columns": [
            "Two racers finished ahead of Mia. She looked towards the winning {{c0}} and felt a brief, sharp disappointment. Winning had been her plan all morning. Ben pointed out that their red racer had made every turn and stopped when she needed it to. The painted star had arrived safely too.",
            "Jo gave both children an award for preparation and sensible {{c1}}. Mia asked Ben to take one side while she held the other. On the walk home, she suggested another practice day. \"Next time, we can work on speed,\" she said. This time, building something they could {{c2}} had become part of winning as well."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "ribbon",
              "paragraph": 0,
              "prompt": "Two racers finished ahead of Mia. She looked towards the winning ______ and felt a brief, sharp disappointment. Winning had been her plan all morning."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "choices",
              "paragraph": 2,
              "prompt": "Jo gave both children an award for preparation and sensible ______. Mia asked Ben to take one side while she held the other."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "trust",
              "paragraph": 3,
              "prompt": "On the walk home, she suggested another practice day. \"Next time, we can work on speed,\" she said. This time, building something they could ______ had become part of winning as well."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "trust"
            },
            {
              "id": "w1",
              "word": "choices"
            },
            {
              "id": "w0",
              "word": "ribbon"
            }
          ]
        }
      }
    ],
    "intro": "410 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "N": {
    "grade": "F&P N target",
    "titles": [
      "More than a stripe of red",
      "The small sound",
      "The choice on the slope",
      "What the star meant"
    ],
    "sections": [
      {
        "text": [
          "A drawing above Mia’s workbench showed a red racer crossing the finish first. On paper, success looked straightforward: build the car, roll down the slope, and win.",
          "Ben’s plan began with measurements. He checked the wooden frame twice, even when Mia insisted that once should be enough.",
          "Their racer would have no engine. The slope would provide motion, a rope would control the front wheels, and a lever would work the brake. Jo supervised construction and every test.",
          "Ben painted stripes and a star beside the seat. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car quicker."
        ],
        "mc": [
          {
            "prompt": "What does Mia’s drawing suggest about her expectations?",
            "choices": [
              "She expects the racer to float.",
              "She wants Ben to stop measuring forever.",
              "She already understands every possible problem.",
              "She focuses on winning rather than the work involved."
            ],
            "answer": 3,
            "skill": "Infer a viewpoint",
            "evidence": "success looked straightforward"
          },
          {
            "prompt": "Why does the author describe Ben measuring twice?",
            "choices": [
              "To explain the red paint",
              "To show that he has lost the drawing",
              "To show that he works carefully",
              "To prove that he cannot count"
            ],
            "answer": 2,
            "skill": "Interpret characterisation",
            "evidence": "checked the wooden frame twice"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia’s first goal",
              "was to finish first"
            ],
            [
              "Ben’s repeated measuring",
              "showed care"
            ],
            [
              "Jo’s role",
              "was to supervise tests"
            ]
          ],
          "options": [
            "was to supervise tests",
            "showed care",
            "was to finish first"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia’s first goal was to finish first",
            "Ben’s repeated measuring showed care",
            "Jo’s role was to supervise tests"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A drawing above Mia’s workbench showed a red racer crossing the finish first. On paper, success looked {{c0}}: build the car, roll down the slope, and win.",
            "Ben’s plan began with measurements. He checked the wooden frame twice, even when Mia insisted that once should be enough.",
            "Their racer would have no engine. The slope would provide motion, a rope would control the front wheels, and a lever would work the {{c1}}. Jo supervised construction and every test.",
            "Ben painted stripes and a star beside the {{c2}}. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car {{c3}}."
          ],
          "parts": [
            "A drawing above Mia’s workbench showed a red racer crossing the finish first. On paper, success looked {{c0}}: build the car, roll down the slope, and win.\n\nBen’s plan began with measurements. He checked the wooden frame twice, even when Mia insisted that once should be enough.\n\nTheir racer would have no engine. The slope would provide motion, a rope would control the front wheels, and a lever would work the {{c1}}. Jo supervised construction and every test.\n\nBen painted stripes and a star beside the {{c2}}. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car {{c3}}."
          ],
          "columns": [
            "A drawing above Mia’s workbench showed a red racer crossing the finish first. On paper, success looked {{c0}}: build the car, roll down the slope, and win. Ben’s plan began with measurements. He checked the wooden frame twice, even when Mia insisted that once should be enough.",
            "Their racer would have no engine. The slope would provide motion, a rope would control the front wheels, and a lever would work the {{c1}}. Jo supervised construction and every test. Ben painted stripes and a star beside the {{c2}}. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "straightforward",
              "paragraph": 0,
              "prompt": "A drawing above Mia’s workbench showed a red racer crossing the finish first. On paper, success looked ______: build the car, roll down the slope, and win."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "brake",
              "paragraph": 2,
              "prompt": "Their racer would have no engine. The slope would provide motion, a rope would control the front wheels, and a lever would work the ______. Jo supervised construction and every test."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "seat",
              "paragraph": 3,
              "prompt": "Ben painted stripes and a star beside the ______. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car quicker."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "quicker",
              "paragraph": 3,
              "prompt": "Ben painted stripes and a star beside the seat. Mia admired the colours, but she wondered whether time spent decorating could have been used to make the car ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "quicker"
            },
            {
              "id": "w2",
              "word": "seat"
            },
            {
              "id": "w1",
              "word": "brake"
            },
            {
              "id": "w0",
              "word": "straightforward"
            }
          ]
        }
      },
      {
        "text": [
          "A light clicking accompanied the first practice turn. Mia dismissed it as an unimportant rattle and glanced towards the next starting place.",
          "Ben walked beside the racer. He watched the front wheel lean whenever Mia pulled the steering rope, and asked Jo to stop the test.",
          "A loose nut had allowed the wheel to shift on its axle. After tightening it, Jo checked the wheel again before letting Mia ride.",
          "Mia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the rope, making no request to skip another check. The quiet turn of the repaired wheel sounded like progress."
        ],
        "mc": [
          {
            "prompt": "What does “dismissed” mean here?",
            "choices": [
              "Asked someone to explain it",
              "Heard it more clearly",
              "Decided it was not important",
              "Wrote it down carefully"
            ],
            "answer": 2,
            "skill": "Use vocabulary in context",
            "evidence": "dismissed it as an unimportant rattle"
          },
          {
            "prompt": "Which detail best shows that Mia is changing?",
            "choices": [
              "Ben raises one hand.",
              "She does not ask to skip the next check.",
              "She hears a clicking sound.",
              "The racer has a front wheel."
            ],
            "answer": 1,
            "skill": "Support an inference",
            "evidence": "making no request to skip another check"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The loose nut",
              "allowed the wheel to shift"
            ],
            [
              "Ben’s close observation",
              "stopped the test"
            ],
            [
              "Mia’s embarrassment",
              "followed her earlier teasing"
            ]
          ],
          "options": [
            "followed her earlier teasing",
            "stopped the test",
            "allowed the wheel to shift"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The loose nut allowed the wheel to shift",
            "Ben’s close observation stopped the test",
            "Mia’s embarrassment followed her earlier teasing"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A light clicking accompanied the first practice turn. Mia {{c0}} it as an unimportant rattle and glanced towards the next starting place.",
            "Ben walked beside the racer. He watched the front wheel lean whenever Mia pulled the steering rope, and asked Jo to stop the test.",
            "A loose {{c1}} had allowed the wheel to shift on its axle. After tightening it, Jo checked the wheel again before letting Mia ride.",
            "Mia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the {{c2}}, making no request to skip another check. The quiet turn of the repaired wheel sounded like {{c3}}."
          ],
          "parts": [
            "A light clicking accompanied the first practice turn. Mia {{c0}} it as an unimportant rattle and glanced towards the next starting place.\n\nBen walked beside the racer. He watched the front wheel lean whenever Mia pulled the steering rope, and asked Jo to stop the test.\n\nA loose {{c1}} had allowed the wheel to shift on its axle. After tightening it, Jo checked the wheel again before letting Mia ride.\n\nMia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the {{c2}}, making no request to skip another check. The quiet turn of the repaired wheel sounded like {{c3}}."
          ],
          "columns": [
            "A light clicking accompanied the first practice turn. Mia {{c0}} it as an unimportant rattle and glanced towards the next starting place. Ben walked beside the racer. He watched the front wheel lean whenever Mia pulled the steering rope, and asked Jo to stop the test.",
            "A loose {{c1}} had allowed the wheel to shift on its axle. After tightening it, Jo checked the wheel again before letting Mia ride. Mia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the {{c2}}, making no request to skip another check. The quiet turn of the repaired wheel sounded like {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dismissed",
              "paragraph": 0,
              "prompt": "A light clicking accompanied the first practice turn. Mia ______ it as an unimportant rattle and glanced towards the next starting place."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "nut",
              "paragraph": 2,
              "prompt": "A loose ______ had allowed the wheel to shift on its axle. After tightening it, Jo checked the wheel again before letting Mia ride."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "rope",
              "paragraph": 3,
              "prompt": "Mia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the ______, making no request to skip another check. The quiet turn of the repaired wheel sounded like progress."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "progress",
              "paragraph": 3,
              "prompt": "Mia remembered teasing Ben for being slow. Now his patience had helped her. She thanked him and took the rope, making no request to skip another check. The quiet turn of the repaired wheel sounded like ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "progress"
            },
            {
              "id": "w2",
              "word": "rope"
            },
            {
              "id": "w1",
              "word": "nut"
            },
            {
              "id": "w0",
              "word": "dismissed"
            }
          ]
        }
      },
      {
        "text": [
          "The green flag marked the start of Mia’s timed run. She felt light and quick as the red racer passed the first cone.",
          "A ribbon loosened by the wind began brushing a front wheel. The marked stopping area was ahead, and Mia knew another racer was nearly at the finish.",
          "She could continue chasing a fast time or stop to have the ribbon removed. Mia chose the stopping area and pressed the brake. The winning time would now be out of reach.",
          "Jo removed the ribbon and praised the decision Mia had made for herself. Beyond the barrier, Ben raised his thumb. Mia felt the knot in her stomach loosen. Stopping had brought relief, not just lost seconds."
        ],
        "mc": [
          {
            "prompt": "Why is stopping a difficult choice for Mia?",
            "choices": [
              "Ben has entered the course.",
              "It means giving up her chance of the winning time.",
              "She does not know where the brake is.",
              "Jo has ordered her to keep racing."
            ],
            "answer": 1,
            "skill": "Explain a conflict",
            "evidence": "The winning time would now be out of reach"
          },
          {
            "prompt": "What does the loosening knot suggest?",
            "choices": [
              "She feels relief about her decision.",
              "She is becoming more jealous.",
              "Her steering rope has fallen off.",
              "She wants to hide the ribbon."
            ],
            "answer": 0,
            "skill": "Interpret figurative language",
            "evidence": "Stopping had brought relief"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The repeated slap",
              "came from a loose ribbon"
            ],
            [
              "The stopping area",
              "gave Mia a safe place to stop"
            ],
            [
              "Ben’s raised thumb",
              "supported her decision"
            ]
          ],
          "options": [
            "supported her decision",
            "gave Mia a safe place to stop",
            "came from a loose ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The repeated slap came from a loose ribbon",
            "The stopping area gave Mia a safe place to stop",
            "Ben’s raised thumb supported her decision"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The green flag marked the start of Mia’s timed run. She felt light and quick as the red {{c0}} passed the first cone.",
            "A ribbon loosened by the wind began brushing a front {{c1}}. The marked stopping area was ahead, and Mia knew another racer was nearly at the finish.",
            "She could continue chasing a fast time or stop to have the ribbon removed. Mia chose the stopping area and pressed the {{c2}}. The winning time would now be out of reach.",
            "Jo removed the ribbon and praised the decision Mia had made for herself. Beyond the barrier, Ben raised his thumb. Mia felt the knot in her stomach loosen. Stopping had brought {{c3}}, not just lost seconds."
          ],
          "parts": [
            "The green flag marked the start of Mia’s timed run. She felt light and quick as the red {{c0}} passed the first cone.\n\nA ribbon loosened by the wind began brushing a front {{c1}}. The marked stopping area was ahead, and Mia knew another racer was nearly at the finish.\n\nShe could continue chasing a fast time or stop to have the ribbon removed. Mia chose the stopping area and pressed the {{c2}}. The winning time would now be out of reach.\n\nJo removed the ribbon and praised the decision Mia had made for herself. Beyond the barrier, Ben raised his thumb. Mia felt the knot in her stomach loosen. Stopping had brought {{c3}}, not just lost seconds."
          ],
          "columns": [
            "The green flag marked the start of Mia’s timed run. She felt light and quick as the red {{c0}} passed the first cone. A ribbon loosened by the wind began brushing a front {{c1}}. The marked stopping area was ahead, and Mia knew another racer was nearly at the finish.",
            "She could continue chasing a fast time or stop to have the ribbon removed. Mia chose the stopping area and pressed the {{c2}}. The winning time would now be out of reach. Jo removed the ribbon and praised the decision Mia had made for herself. Beyond the barrier, Ben raised his thumb. Mia felt the knot in her stomach loosen. Stopping had brought {{c3}}, not just lost seconds."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "racer",
              "paragraph": 0,
              "prompt": "The green flag marked the start of Mia’s timed run. She felt light and quick as the red ______ passed the first cone."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wheel",
              "paragraph": 1,
              "prompt": "A ribbon loosened by the wind began brushing a front ______. The marked stopping area was ahead, and Mia knew another racer was nearly at the finish."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "brake",
              "paragraph": 2,
              "prompt": "She could continue chasing a fast time or stop to have the ribbon removed. Mia chose the stopping area and pressed the ______. The winning time would now be out of reach."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "relief",
              "paragraph": 3,
              "prompt": "Jo removed the ribbon and praised the decision Mia had made for herself. Beyond the barrier, Ben raised his thumb. Mia felt the knot in her stomach loosen. Stopping had brought ______, not just lost seconds."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "relief"
            },
            {
              "id": "w2",
              "word": "brake"
            },
            {
              "id": "w1",
              "word": "wheel"
            },
            {
              "id": "w0",
              "word": "racer"
            }
          ]
        }
      },
      {
        "text": [
          "A blue car won the fastest-time ribbon. Mia watched the award being pinned to it and wished her red racer had been first.",
          "Jo presented Mia and Ben with a different award, recognising careful preparation and responsible decisions. Mia took one side so that Ben did not have to hold it alone.",
          "Later, she unfolded her original drawing. This time she added a second person behind the racer and made the little star easier to see. \"It needed the whole team,\" she explained.",
          "Mia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good race possible, even without the winning ribbon."
        ],
        "mc": [
          {
            "prompt": "Which statement best explains the ending?",
            "choices": [
              "Mia still likes winning but values other kinds of success.",
              "Mia no longer enjoys racing at all.",
              "Mia thinks the other team should return its ribbon.",
              "Mia decides that preparation is unnecessary."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "Mia still wanted to improve their time"
          },
          {
            "prompt": "Why does Mia add another person to her drawing?",
            "choices": [
              "She wants to make the racer longer.",
              "She has forgotten who drove.",
              "Jo requires a new race entry.",
              "She recognises Ben’s contribution."
            ],
            "answer": 3,
            "skill": "Interpret a symbolic action",
            "evidence": "It needed the whole team"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The blue car",
              "won the fastest-time ribbon"
            ],
            [
              "The shared award",
              "recognised responsible decisions"
            ],
            [
              "The changed drawing",
              "included the whole team"
            ]
          ],
          "options": [
            "included the whole team",
            "recognised responsible decisions",
            "won the fastest-time ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The blue car won the fastest-time ribbon",
            "The shared award recognised responsible decisions",
            "The changed drawing included the whole team"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A blue car won the fastest-time ribbon. Mia watched the award being pinned to it and wished her red {{c0}} had been first.",
            "Jo presented Mia and Ben with a different award, recognising careful preparation and responsible decisions. Mia took one side so that Ben did not have to hold it {{c1}}.",
            "Later, she unfolded her original drawing. This time she added a second person behind the racer and made the little star easier to see. \"It needed the whole team,\" she explained.",
            "Mia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good {{c2}} possible, even without the winning {{c3}}."
          ],
          "parts": [
            "A blue car won the fastest-time ribbon. Mia watched the award being pinned to it and wished her red {{c0}} had been first.\n\nJo presented Mia and Ben with a different award, recognising careful preparation and responsible decisions. Mia took one side so that Ben did not have to hold it {{c1}}.\n\nLater, she unfolded her original drawing. This time she added a second person behind the racer and made the little star easier to see. \"It needed the whole team,\" she explained.\n\nMia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good {{c2}} possible, even without the winning {{c3}}."
          ],
          "columns": [
            "A blue car won the fastest-time ribbon. Mia watched the award being pinned to it and wished her red {{c0}} had been first. Jo presented Mia and Ben with a different award, recognising careful preparation and responsible decisions. Mia took one side so that Ben did not have to hold it {{c1}}.",
            "Later, she unfolded her original drawing. This time she added a second person behind the racer and made the little star easier to see. \"It needed the whole team,\" she explained. Mia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good {{c2}} possible, even without the winning {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "racer",
              "paragraph": 0,
              "prompt": "A blue car won the fastest-time ribbon. Mia watched the award being pinned to it and wished her red ______ had been first."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "alone",
              "paragraph": 1,
              "prompt": "Jo presented Mia and Ben with a different award, recognising careful preparation and responsible decisions. Mia took one side so that Ben did not have to hold it ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "race",
              "paragraph": 3,
              "prompt": "Mia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good ______ possible, even without the winning ribbon."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "ribbon",
              "paragraph": 3,
              "prompt": "Mia still wanted to improve their time at the next fair. However, the drawing now showed more than speed. It included the people and choices that had made a good race possible, even without the winning ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "ribbon"
            },
            {
              "id": "w2",
              "word": "race"
            },
            {
              "id": "w1",
              "word": "alone"
            },
            {
              "id": "w0",
              "word": "racer"
            }
          ]
        }
      }
    ],
    "intro": "452 words · 4 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "P": {
    "grade": "F&P P target",
    "titles": [
      "More than a stripe of red",
      "Two plans on one table",
      "A test without a crowd",
      "The small sound",
      "The page beside the star",
      "Waiting for a clear signal",
      "The choice on the slope",
      "Rolling again",
      "A useful thing to share",
      "What the star meant"
    ],
    "sections": [
      {
        "text": [
          "Mia had sketched a streak of red crossing the finish line. The little drawing, taped above her workbench, made building a soap-box racer look straightforward.",
          "Ben disagreed. He spent an entire afternoon measuring the wooden frame, then measured it again. Mia called him the slowest member of the fastest team.",
          "Their unpowered racer would use the slope for motion, a rope for steering, and a lever for braking. Jo inspected the axles and supervised every test.",
          "Ben painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer quicker. For her, a successful race still had only one possible ending: first across the line."
        ],
        "mc": [
          {
            "prompt": "What does Mia’s drawing suggest about her expectations?",
            "choices": [
              "She expects the racer to float.",
              "She wants Ben to stop measuring forever.",
              "She already understands every possible problem.",
              "She focuses on winning rather than the work involved."
            ],
            "answer": 3,
            "skill": "Infer a viewpoint",
            "evidence": "made building a soap-box racer look straightforward"
          },
          {
            "prompt": "Why does the author describe Ben measuring twice?",
            "choices": [
              "To explain the red paint",
              "To show that he has lost the drawing",
              "To show that he works carefully",
              "To prove that he cannot count"
            ],
            "answer": 2,
            "skill": "Interpret characterisation",
            "evidence": "measuring the wooden frame"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia’s first goal",
              "was to finish first"
            ],
            [
              "Ben’s repeated measuring",
              "showed care"
            ],
            [
              "Jo’s role",
              "was to supervise tests"
            ]
          ],
          "options": [
            "was to supervise tests",
            "showed care",
            "was to finish first"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia’s first goal was to finish first",
            "Ben’s repeated measuring showed care",
            "Jo’s role was to supervise tests"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Mia had sketched a streak of red crossing the finish line. The little drawing, taped above her workbench, made building a soap-box racer look straightforward.",
            "Ben disagreed. He spent an entire afternoon measuring the wooden {{c0}}, then measured it again. Mia called him the slowest member of the fastest team.",
            "Their unpowered racer would use the slope for motion, a rope for steering, and a lever for braking. Jo inspected the {{c1}} and supervised every test.",
            "Ben painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer {{c2}}. For her, a successful race still had only one possible ending: first across the {{c3}}."
          ],
          "parts": [
            "Mia had sketched a streak of red crossing the finish line. The little drawing, taped above her workbench, made building a soap-box racer look straightforward.\n\nBen disagreed. He spent an entire afternoon measuring the wooden {{c0}}, then measured it again. Mia called him the slowest member of the fastest team.\n\nTheir unpowered racer would use the slope for motion, a rope for steering, and a lever for braking. Jo inspected the {{c1}} and supervised every test.\n\nBen painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer {{c2}}. For her, a successful race still had only one possible ending: first across the {{c3}}."
          ],
          "columns": [
            "Mia had sketched a streak of red crossing the finish line. The little drawing, taped above her workbench, made building a soap-box racer look straightforward. Ben disagreed. He spent an entire afternoon measuring the wooden {{c0}}, then measured it again. Mia called him the slowest member of the fastest team.",
            "Their unpowered racer would use the slope for motion, a rope for steering, and a lever for braking. Jo inspected the {{c1}} and supervised every test. Ben painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer {{c2}}. For her, a successful race still had only one possible ending: first across the {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "frame",
              "paragraph": 1,
              "prompt": "Ben disagreed. He spent an entire afternoon measuring the wooden ______, then measured it again. Mia called him the slowest member of the fastest team."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "axles",
              "paragraph": 2,
              "prompt": "Their unpowered racer would use the slope for motion, a rope for steering, and a lever for braking. Jo inspected the ______ and supervised every test."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "quicker",
              "paragraph": 3,
              "prompt": "Ben painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer ______. For her, a successful race still had only one possible ending: first across the line."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "line",
              "paragraph": 3,
              "prompt": "Ben painted a small star beside the seat. Mia liked its bright points, but wished he had spent the time finding a way to make the racer quicker. For her, a successful race still had only one possible ending: first across the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "line"
            },
            {
              "id": "w2",
              "word": "quicker"
            },
            {
              "id": "w1",
              "word": "axles"
            },
            {
              "id": "w0",
              "word": "frame"
            }
          ]
        }
      },
      {
        "text": [
          "Ben laid his measurements beside Mia’s drawing. The red streak had room for a driver, but no clear place for a brake. Mia had been thinking about the finish rather than the details that would get her there.",
          "They spread a larger sheet across the table. Ben marked where each wheel would sit, while Mia drew a seat and a place to hold the steering rope.",
          "Jo asked them to explain their plan before she helped them build. When their answers differed, she waited for them to decide together instead of choosing a side.",
          "Mia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for changes. Their drawing now looked less dramatic, but it was becoming a plan two people could actually use."
        ],
        "mc": [
          {
            "prompt": "What is missing from Mia’s first drawing?",
            "choices": [
              "A red racer",
              "A driver",
              "A clear place for a brake",
              "A finish line"
            ],
            "answer": 2,
            "skill": "Find a significant detail",
            "evidence": "no clear place for a brake"
          },
          {
            "prompt": "Why does Jo wait when their answers differ?",
            "choices": [
              "The fair has already ended.",
              "The children need to agree on their plan.",
              "She wants to abandon the racer.",
              "She cannot see the drawing."
            ],
            "answer": 1,
            "skill": "Infer a purpose",
            "evidence": "decide together"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Ben marked",
              "the wheel positions"
            ],
            [
              "Mia drew",
              "the seat and steering rope"
            ],
            [
              "The blank space",
              "allowed later changes"
            ]
          ],
          "options": [
            "allowed later changes",
            "the seat and steering rope",
            "the wheel positions"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben marked the wheel positions",
            "Mia drew the seat and steering rope",
            "The blank space allowed later changes"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ben laid his measurements beside Mia’s drawing. The red streak had room for a driver, but no clear place for a {{c0}}. Mia had been thinking about the finish rather than the details that would get her there.",
            "They spread a larger sheet across the table. Ben marked where each wheel would sit, while Mia drew a seat and a place to hold the steering {{c1}}.",
            "Jo asked them to explain their plan before she helped them build. When their answers differed, she waited for them to decide together instead of choosing a side.",
            "Mia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for {{c2}}. Their drawing now looked less dramatic, but it was becoming a plan two people could actually {{c3}}."
          ],
          "parts": [
            "Ben laid his measurements beside Mia’s drawing. The red streak had room for a driver, but no clear place for a {{c0}}. Mia had been thinking about the finish rather than the details that would get her there.\n\nThey spread a larger sheet across the table. Ben marked where each wheel would sit, while Mia drew a seat and a place to hold the steering {{c1}}.\n\nJo asked them to explain their plan before she helped them build. When their answers differed, she waited for them to decide together instead of choosing a side.\n\nMia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for {{c2}}. Their drawing now looked less dramatic, but it was becoming a plan two people could actually {{c3}}."
          ],
          "columns": [
            "Ben laid his measurements beside Mia’s drawing. The red streak had room for a driver, but no clear place for a {{c0}}. Mia had been thinking about the finish rather than the details that would get her there. They spread a larger sheet across the table. Ben marked where each wheel would sit, while Mia drew a seat and a place to hold the steering {{c1}}.",
            "Jo asked them to explain their plan before she helped them build. When their answers differed, she waited for them to decide together instead of choosing a side. Mia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for {{c2}}. Their drawing now looked less dramatic, but it was becoming a plan two people could actually {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "brake",
              "paragraph": 0,
              "prompt": "Ben laid his measurements beside Mia’s drawing. The red streak had room for a driver, but no clear place for a ______. Mia had been thinking about the finish rather than the details that would get her there."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rope",
              "paragraph": 1,
              "prompt": "They spread a larger sheet across the table. Ben marked where each wheel would sit, while Mia drew a seat and a place to hold the steering ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "changes",
              "paragraph": 3,
              "prompt": "Mia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for ______. Their drawing now looked less dramatic, but it was becoming a plan two people could actually use."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "use",
              "paragraph": 3,
              "prompt": "Mia wanted to begin cutting immediately. Ben wanted another measurement. They agreed to check the frame first and leave a space on the paper for changes. Their drawing now looked less dramatic, but it was becoming a plan two people could actually ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "use"
            },
            {
              "id": "w2",
              "word": "changes"
            },
            {
              "id": "w1",
              "word": "rope"
            },
            {
              "id": "w0",
              "word": "brake"
            }
          ]
        }
      },
      {
        "text": [
          "The first test took place on level ground, far from the cheering Mia imagined. Jo held the racer while Mia settled into the seat. Ben waited beside the course markers with their notebook.",
          "At Jo’s signal, the racer moved slowly forward. Mia pulled the steering rope, then pressed the brake. The car stopped before the last marker.",
          "Ben recorded what they had tried, not how impressive it had looked. He wrote that the steering and brake had worked during a slow test. They would need to check them again before using the slope.",
          "Mia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the hill soon. Jo reminded her that each test answered a particular question, rather than proving everything at once."
        ],
        "mc": [
          {
            "prompt": "What does the slow test show?",
            "choices": [
              "The hill is too steep.",
              "The steering and brake work at that speed.",
              "The racer has won the fair.",
              "No further checks will be needed."
            ],
            "answer": 1,
            "skill": "Evaluate evidence",
            "evidence": "during a slow test"
          },
          {
            "prompt": "Why does Ben record what they tried?",
            "choices": [
              "It provides useful information for the next test.",
              "It makes the racer roll faster.",
              "It replaces Jo’s supervision.",
              "It decides the colour of the paint."
            ],
            "answer": 0,
            "skill": "Connect an action to its purpose",
            "evidence": "a starting point"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia tested",
              "the steering and brake"
            ],
            [
              "Ben recorded",
              "what they had tried"
            ],
            [
              "The level ground",
              "was the first testing place"
            ]
          ],
          "options": [
            "was the first testing place",
            "what they had tried",
            "the steering and brake"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia tested the steering and brake",
            "Ben recorded what they had tried",
            "The level ground was the first testing place"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The first test took place on level ground, far from the cheering Mia imagined. Jo held the racer while Mia settled into the {{c0}}. Ben waited beside the course markers with their notebook.",
            "At Jo’s signal, the racer moved slowly forward. Mia pulled the steering rope, then pressed the brake. The car stopped before the last {{c1}}.",
            "Ben recorded what they had tried, not how impressive it had looked. He wrote that the steering and brake had worked during a slow test. They would need to check them again before using the slope.",
            "Mia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the {{c2}} soon. Jo reminded her that each test answered a particular {{c3}}, rather than proving everything at once."
          ],
          "parts": [
            "The first test took place on level ground, far from the cheering Mia imagined. Jo held the racer while Mia settled into the {{c0}}. Ben waited beside the course markers with their notebook.\n\nAt Jo’s signal, the racer moved slowly forward. Mia pulled the steering rope, then pressed the brake. The car stopped before the last {{c1}}.\n\nBen recorded what they had tried, not how impressive it had looked. He wrote that the steering and brake had worked during a slow test. They would need to check them again before using the slope.\n\nMia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the {{c2}} soon. Jo reminded her that each test answered a particular {{c3}}, rather than proving everything at once."
          ],
          "columns": [
            "The first test took place on level ground, far from the cheering Mia imagined. Jo held the racer while Mia settled into the {{c0}}. Ben waited beside the course markers with their notebook. At Jo’s signal, the racer moved slowly forward. Mia pulled the steering rope, then pressed the brake. The car stopped before the last {{c1}}.",
            "Ben recorded what they had tried, not how impressive it had looked. He wrote that the steering and brake had worked during a slow test. They would need to check them again before using the slope. Mia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the {{c2}} soon. Jo reminded her that each test answered a particular {{c3}}, rather than proving everything at once."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "seat",
              "paragraph": 0,
              "prompt": "The first test took place on level ground, far from the cheering Mia imagined. Jo held the racer while Mia settled into the ______. Ben waited beside the course markers with their notebook."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "marker",
              "paragraph": 1,
              "prompt": "At Jo’s signal, the racer moved slowly forward. Mia pulled the steering rope, then pressed the brake. The car stopped before the last ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "hill",
              "paragraph": 3,
              "prompt": "Mia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the ______ soon. Jo reminded her that each test answered a particular question, rather than proving everything at once."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "question",
              "paragraph": 3,
              "prompt": "Mia peered at the note. It was less exciting than writing a winning time, but it gave the next test a starting point. She asked whether they could try the hill soon. Jo reminded her that each test answered a particular ______, rather than proving everything at once."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "question"
            },
            {
              "id": "w2",
              "word": "hill"
            },
            {
              "id": "w1",
              "word": "marker"
            },
            {
              "id": "w0",
              "word": "seat"
            }
          ]
        }
      },
      {
        "text": [
          "The clicking was barely louder than a pebble tapping a tin. Mia heard it during the first practice roll and dismissed it as a harmless rattle.",
          "Ben walked beside the racer instead of watching the finish line. Whenever Mia steered, he saw the front wheel lean. He raised his hand and asked Jo to stop the test.",
          "A loose nut had allowed the wheel to shift along the axle. Jo tightened it, checked the fastening, and repeated the test before permitting another ride.",
          "Mia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like progress. Mia took the rope again, without asking to skip the next check."
        ],
        "mc": [
          {
            "prompt": "What does “dismissed” mean here?",
            "choices": [
              "Asked someone to explain it",
              "Heard it more clearly",
              "Decided it was not important",
              "Wrote it down carefully"
            ],
            "answer": 2,
            "skill": "Use vocabulary in context",
            "evidence": "dismissed it as a harmless rattle"
          },
          {
            "prompt": "Which detail best shows that Mia is changing?",
            "choices": [
              "Ben raises one hand.",
              "She does not ask to skip the next check.",
              "She hears a clicking sound.",
              "The racer has a front wheel."
            ],
            "answer": 1,
            "skill": "Support an inference",
            "evidence": "without asking to skip the next check"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The loose nut",
              "allowed the wheel to shift"
            ],
            [
              "Ben’s close observation",
              "stopped the test"
            ],
            [
              "Mia’s embarrassment",
              "followed her earlier teasing"
            ]
          ],
          "options": [
            "followed her earlier teasing",
            "stopped the test",
            "allowed the wheel to shift"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The loose nut allowed the wheel to shift",
            "Ben’s close observation stopped the test",
            "Mia’s embarrassment followed her earlier teasing"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The clicking was barely louder than a pebble tapping a tin. Mia heard it during the first practice roll and dismissed it as a harmless {{c0}}.",
            "Ben walked beside the racer instead of watching the finish line. Whenever Mia steered, he saw the front wheel lean. He raised his hand and asked Jo to stop the test.",
            "A loose nut had allowed the wheel to shift along the {{c1}}. Jo tightened it, checked the fastening, and repeated the test before permitting another ride.",
            "Mia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like {{c2}}. Mia took the {{c3}} again, without asking to skip the next check."
          ],
          "parts": [
            "The clicking was barely louder than a pebble tapping a tin. Mia heard it during the first practice roll and dismissed it as a harmless {{c0}}.\n\nBen walked beside the racer instead of watching the finish line. Whenever Mia steered, he saw the front wheel lean. He raised his hand and asked Jo to stop the test.\n\nA loose nut had allowed the wheel to shift along the {{c1}}. Jo tightened it, checked the fastening, and repeated the test before permitting another ride.\n\nMia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like {{c2}}. Mia took the {{c3}} again, without asking to skip the next check."
          ],
          "columns": [
            "The clicking was barely louder than a pebble tapping a tin. Mia heard it during the first practice roll and dismissed it as a harmless {{c0}}. Ben walked beside the racer instead of watching the finish line. Whenever Mia steered, he saw the front wheel lean. He raised his hand and asked Jo to stop the test.",
            "A loose nut had allowed the wheel to shift along the {{c1}}. Jo tightened it, checked the fastening, and repeated the test before permitting another ride. Mia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like {{c2}}. Mia took the {{c3}} again, without asking to skip the next check."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rattle",
              "paragraph": 0,
              "prompt": "The clicking was barely louder than a pebble tapping a tin. Mia heard it during the first practice roll and dismissed it as a harmless ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "axle",
              "paragraph": 2,
              "prompt": "A loose nut had allowed the wheel to shift along the ______. Jo tightened it, checked the fastening, and repeated the test before permitting another ride."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "progress",
              "paragraph": 3,
              "prompt": "Mia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like ______. Mia took the rope again, without asking to skip the next check."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "rope",
              "paragraph": 3,
              "prompt": "Mia felt a prickle of embarrassment. The team member she had called slow had noticed the detail she had hurried past. \"You listened properly,\" she admitted. Ben spun the wheel; this time, its quiet, even turn sounded like progress. Mia took the ______ again, without asking to skip the next check."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "rope"
            },
            {
              "id": "w2",
              "word": "progress"
            },
            {
              "id": "w1",
              "word": "axle"
            },
            {
              "id": "w0",
              "word": "rattle"
            }
          ]
        }
      },
      {
        "text": [
          "After the wheel repair, Ben opened the notebook to a fresh page. He drew a tiny wheel and added the words \"check after turning.\" Mia watched him underline them.",
          "She had assumed a repaired part could disappear from their worries. Jo explained that finding one problem was a reason to check carefully, not a promise that every other part was perfect.",
          "Mia offered to read the next checks aloud while Ben watched. They took turns so that each person had to notice something, rather than simply wait for the other to finish.",
          "The star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually happened. Mia added the time of their second test and left another line for the next result."
        ],
        "mc": [
          {
            "prompt": "Why should they continue checking after the repair?",
            "choices": [
              "The star has fallen off the seat.",
              "The fair requires a new colour.",
              "The racer now has a motor.",
              "One repair does not prove every part is perfect."
            ],
            "answer": 3,
            "skill": "Explain a reason",
            "evidence": "not a promise that every other part was perfect"
          },
          {
            "prompt": "How are the drawing and notebook different?",
            "choices": [
              "Neither is useful to the team.",
              "Both are instructions from another racer.",
              "One shows hopes; the other records observations.",
              "Both are lists of race winners."
            ],
            "answer": 2,
            "skill": "Compare purposes",
            "evidence": "what had actually happened"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Ben’s wheel drawing",
              "reminded them what to check"
            ],
            [
              "The children’s turns",
              "gave both a checking job"
            ],
            [
              "The empty line",
              "was for the next result"
            ]
          ],
          "options": [
            "was for the next result",
            "gave both a checking job",
            "reminded them what to check"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ben’s wheel drawing reminded them what to check",
            "The children’s turns gave both a checking job",
            "The empty line was for the next result"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After the wheel repair, Ben opened the notebook to a fresh {{c0}}. He drew a tiny wheel and added the words \"check after turning.\" Mia watched him underline them.",
            "She had assumed a repaired part could disappear from their worries. Jo explained that finding one problem was a reason to check carefully, not a promise that every other part was {{c1}}.",
            "Mia offered to read the next checks aloud while Ben watched. They took turns so that each person had to notice something, rather than simply wait for the other to finish.",
            "The star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually {{c2}}. Mia added the time of their second test and left another line for the next {{c3}}."
          ],
          "parts": [
            "After the wheel repair, Ben opened the notebook to a fresh {{c0}}. He drew a tiny wheel and added the words \"check after turning.\" Mia watched him underline them.\n\nShe had assumed a repaired part could disappear from their worries. Jo explained that finding one problem was a reason to check carefully, not a promise that every other part was {{c1}}.\n\nMia offered to read the next checks aloud while Ben watched. They took turns so that each person had to notice something, rather than simply wait for the other to finish.\n\nThe star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually {{c2}}. Mia added the time of their second test and left another line for the next {{c3}}."
          ],
          "columns": [
            "After the wheel repair, Ben opened the notebook to a fresh {{c0}}. He drew a tiny wheel and added the words \"check after turning.\" Mia watched him underline them. She had assumed a repaired part could disappear from their worries. Jo explained that finding one problem was a reason to check carefully, not a promise that every other part was {{c1}}.",
            "Mia offered to read the next checks aloud while Ben watched. They took turns so that each person had to notice something, rather than simply wait for the other to finish. The star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually {{c2}}. Mia added the time of their second test and left another line for the next {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "page",
              "paragraph": 0,
              "prompt": "After the wheel repair, Ben opened the notebook to a fresh ______. He drew a tiny wheel and added the words \"check after turning.\" Mia watched him underline them."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "perfect",
              "paragraph": 1,
              "prompt": "She had assumed a repaired part could disappear from their worries. Jo explained that finding one problem was a reason to check carefully, not a promise that every other part was ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "happened",
              "paragraph": 3,
              "prompt": "The star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually ______. Mia added the time of their second test and left another line for the next result."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "result",
              "paragraph": 3,
              "prompt": "The star beside the seat still caught Mia’s eye, but the notebook was beginning to matter too. A drawing could show what they hoped for; a record could show what had actually happened. Mia added the time of their second test and left another line for the next ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "result"
            },
            {
              "id": "w2",
              "word": "happened"
            },
            {
              "id": "w1",
              "word": "perfect"
            },
            {
              "id": "w0",
              "word": "page"
            }
          ]
        }
      },
      {
        "text": [
          "The fair was growing louder, and Mia found herself gripping the steering rope before Jo had finished speaking. She was ready to move before she was ready to listen.",
          "Ben suggested one clear signal for starting and another for stopping a test. They practised on level ground, where Jo could control the pace and check each response.",
          "Once, Mia moved too soon and had to stop before beginning again. Nobody called the practice a failure. Ben added a note about waiting for the complete signal.",
          "Mia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the start, Mia loosened her hands and looked directly at Jo."
        ],
        "mc": [
          {
            "prompt": "What makes the signals useful?",
            "choices": [
              "They let Mia ignore the course.",
              "They replace the brake.",
              "Everyone agrees what each signal means.",
              "They are different on every attempt."
            ],
            "answer": 2,
            "skill": "Connect details",
            "evidence": "the same words each time"
          },
          {
            "prompt": "What does Mia’s early movement reveal?",
            "choices": [
              "She thinks the fair is over.",
              "Her eagerness can interfere with listening.",
              "She no longer wants to race.",
              "She has forgotten how to steer."
            ],
            "answer": 1,
            "skill": "Infer from behaviour",
            "evidence": "before Jo had finished speaking"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The starting signal",
              "had to be complete"
            ],
            [
              "The slow practice",
              "allowed each response to be checked"
            ],
            [
              "Mia’s loosened grip",
              "helped her pause and listen"
            ]
          ],
          "options": [
            "helped her pause and listen",
            "allowed each response to be checked",
            "had to be complete"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The starting signal had to be complete",
            "The slow practice allowed each response to be checked",
            "Mia’s loosened grip helped her pause and listen"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The fair was growing louder, and Mia found herself gripping the steering {{c0}} before Jo had finished speaking. She was ready to move before she was ready to listen.",
            "Ben suggested one clear signal for starting and another for stopping a test. They practised on level ground, where Jo could control the pace and check each response.",
            "Once, Mia moved too soon and had to stop before beginning again. Nobody called the practice a failure. Ben added a note about waiting for the complete {{c1}}.",
            "Mia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the {{c2}}, Mia loosened her hands and looked directly at {{c3}}."
          ],
          "parts": [
            "The fair was growing louder, and Mia found herself gripping the steering {{c0}} before Jo had finished speaking. She was ready to move before she was ready to listen.\n\nBen suggested one clear signal for starting and another for stopping a test. They practised on level ground, where Jo could control the pace and check each response.\n\nOnce, Mia moved too soon and had to stop before beginning again. Nobody called the practice a failure. Ben added a note about waiting for the complete {{c1}}.\n\nMia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the {{c2}}, Mia loosened her hands and looked directly at {{c3}}."
          ],
          "columns": [
            "The fair was growing louder, and Mia found herself gripping the steering {{c0}} before Jo had finished speaking. She was ready to move before she was ready to listen. Ben suggested one clear signal for starting and another for stopping a test. They practised on level ground, where Jo could control the pace and check each response.",
            "Once, Mia moved too soon and had to stop before beginning again. Nobody called the practice a failure. Ben added a note about waiting for the complete {{c1}}. Mia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the {{c2}}, Mia loosened her hands and looked directly at {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rope",
              "paragraph": 0,
              "prompt": "The fair was growing louder, and Mia found herself gripping the steering ______ before Jo had finished speaking. She was ready to move before she was ready to listen."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "signal",
              "paragraph": 2,
              "prompt": "Once, Mia moved too soon and had to stop before beginning again. Nobody called the practice a failure. Ben added a note about waiting for the complete ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "start",
              "paragraph": 3,
              "prompt": "Mia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the ______, Mia loosened her hands and looked directly at Jo."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "Jo",
              "paragraph": 3,
              "prompt": "Mia preferred the feeling of rolling to the feeling of waiting. Even so, she could see that guessing what a partner meant would make teamwork harder. They agreed to use the same words each time. Before heading towards the start, Mia loosened her hands and looked directly at ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "Jo"
            },
            {
              "id": "w2",
              "word": "start"
            },
            {
              "id": "w1",
              "word": "signal"
            },
            {
              "id": "w0",
              "word": "rope"
            }
          ]
        }
      },
      {
        "text": [
          "A green flag lifted, and the racer began its only timed run. For a few seconds, Mia felt as if she were inside the red streak from her drawing.",
          "Then a soft slap repeated beside her knee. A decorative ribbon, loosened by the wind, was brushing the front wheel. She could see another racer approaching the finish.",
          "Mia knew the marked stopping area was just ahead. She guided her racer into it and pressed the brake, although stopping would cost her any chance of a winning time.",
          "Jo removed the ribbon and checked the wheel. \"You made that decision before I could signal,\" she said. Mia glanced at Ben, waiting beyond the barrier. He lifted his thumb. She had lost seconds, but the knot in her stomach loosened."
        ],
        "mc": [
          {
            "prompt": "Why is stopping a difficult choice for Mia?",
            "choices": [
              "Ben has entered the course.",
              "It means giving up her chance of the winning time.",
              "She does not know where the brake is.",
              "Jo has ordered her to keep racing."
            ],
            "answer": 1,
            "skill": "Explain a conflict",
            "evidence": "stopping would cost her any chance"
          },
          {
            "prompt": "What does the loosening knot suggest?",
            "choices": [
              "She feels relief about her decision.",
              "She is becoming more jealous.",
              "Her steering rope has fallen off.",
              "She wants to hide the ribbon."
            ],
            "answer": 0,
            "skill": "Interpret figurative language",
            "evidence": "the knot in her stomach loosened"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The repeated slap",
              "came from a loose ribbon"
            ],
            [
              "The stopping area",
              "gave Mia a safe place to stop"
            ],
            [
              "Ben’s raised thumb",
              "supported her decision"
            ]
          ],
          "options": [
            "supported her decision",
            "gave Mia a safe place to stop",
            "came from a loose ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The repeated slap came from a loose ribbon",
            "The stopping area gave Mia a safe place to stop",
            "Ben’s raised thumb supported her decision"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A green {{c0}} lifted, and the racer began its only timed run. For a few seconds, Mia felt as if she were inside the red streak from her drawing.",
            "Then a soft slap repeated beside her knee. A decorative {{c1}}, loosened by the wind, was brushing the front wheel. She could see another racer approaching the finish.",
            "Mia knew the marked stopping area was just ahead. She guided her racer into it and pressed the brake, although stopping would cost her any chance of a winning {{c2}}.",
            "Jo removed the ribbon and checked the wheel. \"You made that decision before I could signal,\" she said. Mia glanced at Ben, waiting beyond the barrier. He lifted his thumb. She had lost seconds, but the knot in her stomach {{c3}}."
          ],
          "parts": [
            "A green {{c0}} lifted, and the racer began its only timed run. For a few seconds, Mia felt as if she were inside the red streak from her drawing.\n\nThen a soft slap repeated beside her knee. A decorative {{c1}}, loosened by the wind, was brushing the front wheel. She could see another racer approaching the finish.\n\nMia knew the marked stopping area was just ahead. She guided her racer into it and pressed the brake, although stopping would cost her any chance of a winning {{c2}}.\n\nJo removed the ribbon and checked the wheel. \"You made that decision before I could signal,\" she said. Mia glanced at Ben, waiting beyond the barrier. He lifted his thumb. She had lost seconds, but the knot in her stomach {{c3}}."
          ],
          "columns": [
            "A green {{c0}} lifted, and the racer began its only timed run. For a few seconds, Mia felt as if she were inside the red streak from her drawing. Then a soft slap repeated beside her knee. A decorative {{c1}}, loosened by the wind, was brushing the front wheel. She could see another racer approaching the finish.",
            "Mia knew the marked stopping area was just ahead. She guided her racer into it and pressed the brake, although stopping would cost her any chance of a winning {{c2}}. Jo removed the ribbon and checked the wheel. \"You made that decision before I could signal,\" she said. Mia glanced at Ben, waiting beyond the barrier. He lifted his thumb. She had lost seconds, but the knot in her stomach {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "A green ______ lifted, and the racer began its only timed run. For a few seconds, Mia felt as if she were inside the red streak from her drawing."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "ribbon",
              "paragraph": 1,
              "prompt": "Then a soft slap repeated beside her knee. A decorative ______, loosened by the wind, was brushing the front wheel. She could see another racer approaching the finish."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "time",
              "paragraph": 2,
              "prompt": "Mia knew the marked stopping area was just ahead. She guided her racer into it and pressed the brake, although stopping would cost her any chance of a winning ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "loosened",
              "paragraph": 3,
              "prompt": "Jo removed the ribbon and checked the wheel. \"You made that decision before I could signal,\" she said. Mia glanced at Ben, waiting beyond the barrier. He lifted his thumb. She had lost seconds, but the knot in her stomach ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "loosened"
            },
            {
              "id": "w2",
              "word": "time"
            },
            {
              "id": "w1",
              "word": "ribbon"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      },
      {
        "text": [
          "From the stopping area, Mia could see the rest of the course. The loose ribbon was gone, but her chance of the fastest time had gone with it.",
          "Jo checked that the route was clear before giving permission to continue. Mia started again at a controlled pace, noticing the next cone rather than watching the other racers.",
          "The car steered where she asked it to go. When she reached the end, she used the brake and waited until Jo said she could get out. Ben came over only after the course was clear.",
          "He asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible actions, not just one exciting line on a drawing."
        ],
        "mc": [
          {
            "prompt": "When does Mia continue after the stop?",
            "choices": [
              "After Jo checks the route and gives permission",
              "As soon as another racer goes past",
              "Before the ribbon is removed",
              "When Ben steps onto the course"
            ],
            "answer": 0,
            "skill": "Follow a sequence",
            "evidence": "giving permission to continue"
          },
          {
            "prompt": "Why does Mia describe the wheels and brake?",
            "choices": [
              "She has forgotten about the racer.",
              "She thinks the car has no controls.",
              "She wants to change the course markers.",
              "She is noticing how a successful finish happens."
            ],
            "answer": 3,
            "skill": "Interpret a changing viewpoint",
            "evidence": "a series of sensible actions"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Jo checked",
              "that the route was clear"
            ],
            [
              "Mia used",
              "the brake at the end"
            ],
            [
              "Ben approached",
              "after the course was clear"
            ]
          ],
          "options": [
            "after the course was clear",
            "the brake at the end",
            "that the route was clear"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo checked that the route was clear",
            "Mia used the brake at the end",
            "Ben approached after the course was clear"
          ]
        },
        "cloze": {
          "paragraphs": [
            "From the stopping area, Mia could see the rest of the {{c0}}. The loose ribbon was gone, but her chance of the fastest time had gone with it.",
            "Jo checked that the route was clear before giving permission to continue. Mia started again at a controlled pace, noticing the next cone rather than watching the other racers.",
            "The car steered where she asked it to go. When she reached the end, she used the brake and waited until Jo said she could get {{c1}}. Ben came over only after the course was clear.",
            "He asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible {{c2}}, not just one exciting line on a {{c3}}."
          ],
          "parts": [
            "From the stopping area, Mia could see the rest of the {{c0}}. The loose ribbon was gone, but her chance of the fastest time had gone with it.\n\nJo checked that the route was clear before giving permission to continue. Mia started again at a controlled pace, noticing the next cone rather than watching the other racers.\n\nThe car steered where she asked it to go. When she reached the end, she used the brake and waited until Jo said she could get {{c1}}. Ben came over only after the course was clear.\n\nHe asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible {{c2}}, not just one exciting line on a {{c3}}."
          ],
          "columns": [
            "From the stopping area, Mia could see the rest of the {{c0}}. The loose ribbon was gone, but her chance of the fastest time had gone with it. Jo checked that the route was clear before giving permission to continue. Mia started again at a controlled pace, noticing the next cone rather than watching the other racers.",
            "The car steered where she asked it to go. When she reached the end, she used the brake and waited until Jo said she could get {{c1}}. Ben came over only after the course was clear. He asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible {{c2}}, not just one exciting line on a {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "course",
              "paragraph": 0,
              "prompt": "From the stopping area, Mia could see the rest of the ______. The loose ribbon was gone, but her chance of the fastest time had gone with it."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "out",
              "paragraph": 2,
              "prompt": "The car steered where she asked it to go. When she reached the end, she used the brake and waited until Jo said she could get ______. Ben came over only after the course was clear."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "actions",
              "paragraph": 3,
              "prompt": "He asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible ______, not just one exciting line on a drawing."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "drawing",
              "paragraph": 3,
              "prompt": "He asked what the last part had felt like. Mia could have answered with the lost seconds. Instead, she described the turning wheels and the moment the brake brought her to a stop. Finishing had become a series of sensible actions, not just one exciting line on a ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "drawing"
            },
            {
              "id": "w2",
              "word": "actions"
            },
            {
              "id": "w1",
              "word": "out"
            },
            {
              "id": "w0",
              "word": "course"
            }
          ]
        }
      },
      {
        "text": [
          "While the results were being prepared, a child from another team asked about the star on their red racer. Ben explained who had painted it and showed the sketch beside the seat.",
          "The child noticed the notebook too. Mia hesitated when he asked what they had written. Part of her still thought a competing team should work everything out alone.",
          "Then she remembered how much their own racer depended on help. She described the clicking wheel and why they had stopped to check it. She did not pretend that their notes were complete instructions for someone else’s car.",
          "The child thanked them and returned to his guide. Mia closed the notebook, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth remembering."
        ],
        "mc": [
          {
            "prompt": "Why does Mia hesitate before sharing?",
            "choices": [
              "She has lost the notebook.",
              "She does not remember the wheel.",
              "Jo has told her never to speak.",
              "She still sees the other team as a competitor."
            ],
            "answer": 3,
            "skill": "Infer a motive",
            "evidence": "a competing team should work everything out alone"
          },
          {
            "prompt": "What does Mia learn from sharing?",
            "choices": [
              "The results board is unnecessary.",
              "A painted star can replace preparation.",
              "Helping another team does not reduce their achievement.",
              "Every car needs exactly the same repair."
            ],
            "answer": 2,
            "skill": "Explain an insight",
            "evidence": "had not made their own effort smaller"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The child noticed",
              "the star and notebook"
            ],
            [
              "Mia described",
              "the clicking-wheel observation"
            ],
            [
              "The results board",
              "would show their placing"
            ]
          ],
          "options": [
            "would show their placing",
            "the clicking-wheel observation",
            "the star and notebook"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The child noticed the star and notebook",
            "Mia described the clicking-wheel observation",
            "The results board would show their placing"
          ]
        },
        "cloze": {
          "paragraphs": [
            "While the results were being prepared, a child from another team asked about the star on their red {{c0}}. Ben explained who had painted it and showed the sketch beside the seat.",
            "The child noticed the notebook too. Mia hesitated when he asked what they had written. Part of her still thought a competing team should work everything out {{c1}}.",
            "Then she remembered how much their own racer depended on help. She described the clicking wheel and why they had stopped to check it. She did not pretend that their notes were complete instructions for someone else’s car.",
            "The child thanked them and returned to his guide. Mia closed the {{c2}}, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth {{c3}}."
          ],
          "parts": [
            "While the results were being prepared, a child from another team asked about the star on their red {{c0}}. Ben explained who had painted it and showed the sketch beside the seat.\n\nThe child noticed the notebook too. Mia hesitated when he asked what they had written. Part of her still thought a competing team should work everything out {{c1}}.\n\nThen she remembered how much their own racer depended on help. She described the clicking wheel and why they had stopped to check it. She did not pretend that their notes were complete instructions for someone else’s car.\n\nThe child thanked them and returned to his guide. Mia closed the {{c2}}, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth {{c3}}."
          ],
          "columns": [
            "While the results were being prepared, a child from another team asked about the star on their red {{c0}}. Ben explained who had painted it and showed the sketch beside the seat. The child noticed the notebook too. Mia hesitated when he asked what they had written. Part of her still thought a competing team should work everything out {{c1}}.",
            "Then she remembered how much their own racer depended on help. She described the clicking wheel and why they had stopped to check it. She did not pretend that their notes were complete instructions for someone else’s car. The child thanked them and returned to his guide. Mia closed the {{c2}}, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "racer",
              "paragraph": 0,
              "prompt": "While the results were being prepared, a child from another team asked about the star on their red ______. Ben explained who had painted it and showed the sketch beside the seat."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "alone",
              "paragraph": 1,
              "prompt": "The child noticed the notebook too. Mia hesitated when he asked what they had written. Part of her still thought a competing team should work everything out ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "notebook",
              "paragraph": 3,
              "prompt": "The child thanked them and returned to his guide. Mia closed the ______, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth remembering."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "remembering",
              "paragraph": 3,
              "prompt": "The child thanked them and returned to his guide. Mia closed the notebook, surprised that sharing a useful observation had not made their own effort smaller. Ben pointed towards the results board. Their placing would soon be known, but another part of the day had already become worth ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "remembering"
            },
            {
              "id": "w2",
              "word": "notebook"
            },
            {
              "id": "w1",
              "word": "alone"
            },
            {
              "id": "w0",
              "word": "racer"
            }
          ]
        }
      },
      {
        "text": [
          "Their racer finished third. The fair’s fastest-time ribbon went to another team, and Mia watched it being pinned to a blue car. She still wished it were hers.",
          "Jo handed Mia and Ben a different award, for thoughtful preparation and responsible decisions. Ben held it awkwardly until Mia took the other side.",
          "On the walk home, Mia found her original drawing in her pocket. She added a second person behind the red racer, then a small star beside its seat.",
          "\"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a race, and that the quiet work done before the flag lifted could matter long after the cheering ended."
        ],
        "mc": [
          {
            "prompt": "Which statement best explains the ending?",
            "choices": [
              "Mia still likes winning but values other kinds of success.",
              "Mia no longer enjoys racing at all.",
              "Mia thinks the other team should return its ribbon.",
              "Mia decides that preparation is unnecessary."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "only one way to measure a race"
          },
          {
            "prompt": "Why does Mia add another person to her drawing?",
            "choices": [
              "She wants to make the racer longer.",
              "She has forgotten who drove.",
              "Jo requires a new race entry.",
              "She recognises Ben’s contribution."
            ],
            "answer": 3,
            "skill": "Interpret a symbolic action",
            "evidence": "The picture needed the whole team"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The blue car",
              "won the fastest-time ribbon"
            ],
            [
              "The shared award",
              "recognised responsible decisions"
            ],
            [
              "The changed drawing",
              "included the whole team"
            ]
          ],
          "options": [
            "included the whole team",
            "recognised responsible decisions",
            "won the fastest-time ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The blue car won the fastest-time ribbon",
            "The shared award recognised responsible decisions",
            "The changed drawing included the whole team"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Their racer finished third. The fair’s fastest-time ribbon went to another team, and Mia watched it being pinned to a blue {{c0}}. She still wished it were hers.",
            "Jo handed Mia and Ben a different award, for thoughtful preparation and responsible decisions. Ben held it awkwardly until Mia took the other {{c1}}.",
            "On the walk home, Mia found her original drawing in her pocket. She added a second person behind the red racer, then a small star beside its seat.",
            "\"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a {{c2}}, and that the quiet work done before the flag lifted could matter long after the cheering {{c3}}."
          ],
          "parts": [
            "Their racer finished third. The fair’s fastest-time ribbon went to another team, and Mia watched it being pinned to a blue {{c0}}. She still wished it were hers.\n\nJo handed Mia and Ben a different award, for thoughtful preparation and responsible decisions. Ben held it awkwardly until Mia took the other {{c1}}.\n\nOn the walk home, Mia found her original drawing in her pocket. She added a second person behind the red racer, then a small star beside its seat.\n\n\"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a {{c2}}, and that the quiet work done before the flag lifted could matter long after the cheering {{c3}}."
          ],
          "columns": [
            "Their racer finished third. The fair’s fastest-time ribbon went to another team, and Mia watched it being pinned to a blue {{c0}}. She still wished it were hers. Jo handed Mia and Ben a different award, for thoughtful preparation and responsible decisions. Ben held it awkwardly until Mia took the other {{c1}}.",
            "On the walk home, Mia found her original drawing in her pocket. She added a second person behind the red racer, then a small star beside its seat. \"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a {{c2}}, and that the quiet work done before the flag lifted could matter long after the cheering {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "car",
              "paragraph": 0,
              "prompt": "Their racer finished third. The fair’s fastest-time ribbon went to another team, and Mia watched it being pinned to a blue ______. She still wished it were hers."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "side",
              "paragraph": 1,
              "prompt": "Jo handed Mia and Ben a different award, for thoughtful preparation and responsible decisions. Ben held it awkwardly until Mia took the other ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "race",
              "paragraph": 3,
              "prompt": "\"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a ______, and that the quiet work done before the flag lifted could matter long after the cheering ended."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "ended",
              "paragraph": 3,
              "prompt": "\"The picture needed the whole team,\" she said. She had not stopped wanting to win. She had learned that a winning time was only one way to measure a race, and that the quiet work done before the flag lifted could matter long after the cheering ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "ended"
            },
            {
              "id": "w2",
              "word": "race"
            },
            {
              "id": "w1",
              "word": "side"
            },
            {
              "id": "w0",
              "word": "car"
            }
          ]
        }
      }
    ],
    "intro": "1350 words · 10 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "R": {
    "grade": "F&P R target",
    "titles": [
      "More than a stripe of red",
      "The small sound",
      "The choice on the slope",
      "What the star meant"
    ],
    "sections": [
      {
        "text": [
          "The red streak in Mia’s sketch had no loose nuts, crooked wheels, or waiting. It crossed a finish line before a cheering crowd. She kept the drawing above her workbench, where it made the outcome seem more certain than the work leading to it.",
          "Ben had a different picture in mind: a frame that stayed square, wheels that turned freely, and a brake that answered every time. He measured the timber twice. Mia called this caution an expensive way to spend an afternoon.",
          "Jo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering rope and a brake lever would give Mia control. Neither could replace a securely built frame.",
          "When Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a success. For Mia, that still meant the fastest time."
        ],
        "mc": [
          {
            "prompt": "Why does the author contrast Mia’s sketch with Ben’s plans?",
            "choices": [
              "To prove that both children dislike building",
              "To explain why red paint makes wheels turn",
              "To suggest that Jo has cancelled the fair",
              "To establish different ideas of a successful racer"
            ],
            "answer": 3,
            "skill": "Analyse contrasting viewpoints",
            "evidence": "The difference lay in what each believed"
          },
          {
            "prompt": "What does Mia’s choice of paint reveal?",
            "choices": [
              "She knows the racer cannot be driven.",
              "She wants Ben to stop contributing.",
              "She also values appearance, despite questioning Ben’s decoration.",
              "She has accepted every one of Ben’s priorities."
            ],
            "answer": 2,
            "skill": "Recognise a contradiction",
            "evidence": "she chose the brightest red"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Mia’s first goal",
              "was to finish first"
            ],
            [
              "Ben’s repeated measuring",
              "showed care"
            ],
            [
              "Jo’s role",
              "was to supervise tests"
            ]
          ],
          "options": [
            "was to supervise tests",
            "showed care",
            "was to finish first"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Mia’s first goal was to finish first",
            "Ben’s repeated measuring showed care",
            "Jo’s role was to supervise tests"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The red streak in Mia’s sketch had no loose nuts, crooked wheels, or waiting. It crossed a finish line before a cheering crowd. She kept the drawing above her workbench, where it made the outcome seem more certain than the work leading to {{c0}}.",
            "Ben had a different picture in mind: a frame that stayed square, wheels that turned freely, and a brake that answered every time. He measured the timber twice. Mia called this caution an expensive way to spend an afternoon.",
            "Jo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering {{c1}} and a brake lever would give Mia control. Neither could replace a securely built {{c2}}.",
            "When Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a {{c3}}. For Mia, that still meant the fastest {{c4}}."
          ],
          "parts": [
            "The red streak in Mia’s sketch had no loose nuts, crooked wheels, or waiting. It crossed a finish line before a cheering crowd. She kept the drawing above her workbench, where it made the outcome seem more certain than the work leading to {{c0}}.\n\nBen had a different picture in mind: a frame that stayed square, wheels that turned freely, and a brake that answered every time. He measured the timber twice. Mia called this caution an expensive way to spend an afternoon.\n\nJo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering {{c1}} and a brake lever would give Mia control. Neither could replace a securely built {{c2}}.\n\nWhen Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a {{c3}}. For Mia, that still meant the fastest {{c4}}."
          ],
          "columns": [
            "The red streak in Mia’s sketch had no loose nuts, crooked wheels, or waiting. It crossed a finish line before a cheering crowd. She kept the drawing above her workbench, where it made the outcome seem more certain than the work leading to {{c0}}. Ben had a different picture in mind: a frame that stayed square, wheels that turned freely, and a brake that answered every time. He measured the timber twice. Mia called this caution an expensive way to spend an afternoon.",
            "Jo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering {{c1}} and a brake lever would give Mia control. Neither could replace a securely built {{c2}}. When Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a {{c3}}. For Mia, that still meant the fastest {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "it",
              "paragraph": 0,
              "prompt": "The red streak in Mia’s sketch had no loose nuts, crooked wheels, or waiting. It crossed a finish line before a cheering crowd. She kept the drawing above her workbench, where it made the outcome seem more certain than the work leading to ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rope",
              "paragraph": 2,
              "prompt": "Jo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering ______ and a brake lever would give Mia control. Neither could replace a securely built frame."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "frame",
              "paragraph": 2,
              "prompt": "Jo helped them build their unpowered soap-box racer and supervised its tests. The slope would supply motion; a steering rope and a brake lever would give Mia control. Neither could replace a securely built ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "success",
              "paragraph": 3,
              "prompt": "When Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a ______. For Mia, that still meant the fastest time."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "time",
              "paragraph": 3,
              "prompt": "When Ben painted a star beside the seat, Mia wondered whether decoration was another delay. Yet she chose the brightest red for the sides. Both children cared about the racer’s appearance; the difference lay in what each believed would make the finished machine a success. For Mia, that still meant the fastest ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "time"
            },
            {
              "id": "w3",
              "word": "success"
            },
            {
              "id": "w2",
              "word": "frame"
            },
            {
              "id": "w1",
              "word": "rope"
            },
            {
              "id": "w0",
              "word": "it"
            }
          ]
        }
      },
      {
        "text": [
          "The sound was easy to overlook: a dry click at the moment the front wheel changed direction. Mia heard it, but the start of the fair was approaching and another test would use time she wanted for practice.",
          "Ben did not hear merely an interruption. Walking beside the car, he noticed a wheel leaning against the direction of the turn. He raised his hand before Mia could line up for another run.",
          "Jo found a loose nut that allowed movement along the axle. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier click.",
          "Mia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the silence, leaving Mia to understand what the quiet turn had changed."
        ],
        "mc": [
          {
            "prompt": "Which action most strongly supports Mia’s thanks?",
            "choices": [
              "She remembers the colour of the paint.",
              "She hears the first clicking sound.",
              "She waits patiently through the next check.",
              "She looks at the approaching fair."
            ],
            "answer": 2,
            "skill": "Evaluate evidence of change",
            "evidence": "waited through the next check"
          },
          {
            "prompt": "Why does Ben’s silence matter at the end?",
            "choices": [
              "It means that Jo forbids him to speak.",
              "It lets the repair demonstrate his point without a lecture.",
              "It shows that he has not noticed Mia.",
              "It proves that he dislikes the repaired racer."
            ],
            "answer": 1,
            "skill": "Analyse an author’s choice",
            "evidence": "Ben made no speech about being right"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The loose nut",
              "allowed the wheel to shift"
            ],
            [
              "Ben’s close observation",
              "stopped the test"
            ],
            [
              "Mia’s embarrassment",
              "followed her earlier teasing"
            ]
          ],
          "options": [
            "followed her earlier teasing",
            "stopped the test",
            "allowed the wheel to shift"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The loose nut allowed the wheel to shift",
            "Ben’s close observation stopped the test",
            "Mia’s embarrassment followed her earlier teasing"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The sound was easy to overlook: a dry click at the moment the front wheel changed direction. Mia heard it, but the start of the fair was approaching and another test would use time she wanted for {{c0}}.",
            "Ben did not hear merely an interruption. Walking beside the car, he noticed a wheel leaning against the direction of the turn. He raised his hand before Mia could line up for another run.",
            "Jo found a loose nut that allowed movement along the {{c1}}. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier {{c2}}.",
            "Mia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the {{c3}}, leaving Mia to understand what the quiet turn had {{c4}}."
          ],
          "parts": [
            "The sound was easy to overlook: a dry click at the moment the front wheel changed direction. Mia heard it, but the start of the fair was approaching and another test would use time she wanted for {{c0}}.\n\nBen did not hear merely an interruption. Walking beside the car, he noticed a wheel leaning against the direction of the turn. He raised his hand before Mia could line up for another run.\n\nJo found a loose nut that allowed movement along the {{c1}}. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier {{c2}}.\n\nMia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the {{c3}}, leaving Mia to understand what the quiet turn had {{c4}}."
          ],
          "columns": [
            "The sound was easy to overlook: a dry click at the moment the front wheel changed direction. Mia heard it, but the start of the fair was approaching and another test would use time she wanted for {{c0}}. Ben did not hear merely an interruption. Walking beside the car, he noticed a wheel leaning against the direction of the turn. He raised his hand before Mia could line up for another run.",
            "Jo found a loose nut that allowed movement along the {{c1}}. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier {{c2}}. Mia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the {{c3}}, leaving Mia to understand what the quiet turn had {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "practice",
              "paragraph": 0,
              "prompt": "The sound was easy to overlook: a dry click at the moment the front wheel changed direction. Mia heard it, but the start of the fair was approaching and another test would use time she wanted for ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "axle",
              "paragraph": 2,
              "prompt": "Jo found a loose nut that allowed movement along the ______. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier click."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "click",
              "paragraph": 2,
              "prompt": "Jo found a loose nut that allowed movement along the axle. She tightened and checked it, then supervised a fresh test. The wheel turned evenly, without the earlier ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "silence",
              "paragraph": 3,
              "prompt": "Mia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the ______, leaving Mia to understand what the quiet turn had changed."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "changed",
              "paragraph": 3,
              "prompt": "Mia remembered calling Ben slow. She had meant that he was holding back the team, although his careful attention had just moved them forward. Saying thank you did not quite repair the teasing, so she also waited through the next check without urging anyone to hurry. Ben made no speech about being right. He spun the wheel and listened to the silence, leaving Mia to understand what the quiet turn had ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "changed"
            },
            {
              "id": "w3",
              "word": "silence"
            },
            {
              "id": "w2",
              "word": "click"
            },
            {
              "id": "w1",
              "word": "axle"
            },
            {
              "id": "w0",
              "word": "practice"
            }
          ]
        }
      },
      {
        "text": [
          "As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the finish waiting ahead. For several seconds, her plan seemed to have become reality.",
          "Then a soft flap repeated near the front wheel. A decorative ribbon had worked loose. The marked stopping area was ahead, but so was another racer with a chance of setting the best time.",
          "Nobody had yet told Mia to stop. She could still hope that the ribbon would remain harmless for a few more seconds. Instead, she guided the car out of the timed run and pressed the brake.",
          "Jo removed the ribbon and checked the wheel before authorising a restart. Her praise focused on Mia’s decision, made before an adult’s signal. Ben, waiting safely beyond the barrier, lifted his thumb.",
          "Mia felt disappointed about the lost time and relieved about the stop. The feelings did not cancel each other. She was beginning to understand that a responsible choice could remain costly even when she was sure it had been right."
        ],
        "mc": [
          {
            "prompt": "Why does the author emphasise that nobody has told Mia to stop?",
            "choices": [
              "The race has already been cancelled.",
              "Her decision demonstrates independent judgement.",
              "She has forgotten how to use the brake.",
              "Jo wants her to ignore the ribbon."
            ],
            "answer": 1,
            "skill": "Explain the significance of a detail",
            "evidence": "Nobody had yet told Mia to stop"
          },
          {
            "prompt": "What is suggested by Mia feeling both relief and disappointment?",
            "choices": [
              "A sound decision can still involve a real sacrifice.",
              "She secretly believes the stop was pointless.",
              "She cannot remember which car she drove.",
              "Responsible decisions always make people happy immediately."
            ],
            "answer": 0,
            "skill": "Interpret a complex response",
            "evidence": "The feelings did not cancel each other"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The repeated slap",
              "came from a loose ribbon"
            ],
            [
              "The stopping area",
              "gave Mia a safe place to stop"
            ],
            [
              "Ben’s raised thumb",
              "supported her decision"
            ]
          ],
          "options": [
            "supported her decision",
            "gave Mia a safe place to stop",
            "came from a loose ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The repeated slap came from a loose ribbon",
            "The stopping area gave Mia a safe place to stop",
            "Ben’s raised thumb supported her decision"
          ]
        },
        "cloze": {
          "paragraphs": [
            "As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the finish waiting ahead. For several seconds, her plan seemed to have become {{c0}}.",
            "Then a soft flap repeated near the front wheel. A decorative ribbon had worked loose. The marked stopping area was ahead, but so was another racer with a chance of setting the best {{c1}}.",
            "Nobody had yet told Mia to stop. She could still hope that the ribbon would remain harmless for a few more seconds. Instead, she guided the car out of the timed run and pressed the {{c2}}.",
            "Jo removed the ribbon and checked the wheel before authorising a restart. Her praise focused on Mia’s decision, made before an adult’s signal. Ben, waiting safely beyond the barrier, lifted his {{c3}}.",
            "Mia felt disappointed about the lost time and relieved about the stop. The feelings did not cancel each other. She was beginning to understand that a responsible choice could remain costly even when she was sure it had been {{c4}}."
          ],
          "parts": [
            "As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the finish waiting ahead. For several seconds, her plan seemed to have become {{c0}}.\n\nThen a soft flap repeated near the front wheel. A decorative ribbon had worked loose. The marked stopping area was ahead, but so was another racer with a chance of setting the best {{c1}}.\n\nNobody had yet told Mia to stop. She could still hope that the ribbon would remain harmless for a few more seconds. Instead, she guided the car out of the timed run and pressed the {{c2}}.\n\nJo removed the ribbon and checked the wheel before authorising a restart. Her praise focused on Mia’s decision, made before an adult’s signal. Ben, waiting safely beyond the barrier, lifted his {{c3}}.\n\nMia felt disappointed about the lost time and relieved about the stop. The feelings did not cancel each other. She was beginning to understand that a responsible choice could remain costly even when she was sure it had been {{c4}}."
          ],
          "columns": [
            "As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the finish waiting ahead. For several seconds, her plan seemed to have become {{c0}}. Then a soft flap repeated near the front wheel. A decorative ribbon had worked loose. The marked stopping area was ahead, but so was another racer with a chance of setting the best {{c1}}.",
            "Nobody had yet told Mia to stop. She could still hope that the ribbon would remain harmless for a few more seconds. Instead, she guided the car out of the timed run and pressed the {{c2}}. Jo removed the ribbon and checked the wheel before authorising a restart. Her praise focused on Mia’s decision, made before an adult’s signal. Ben, waiting safely beyond the barrier, lifted his {{c3}}. Mia felt disappointed about the lost time and relieved about the stop. The feelings did not cancel each other. She was beginning to understand that a responsible choice could remain costly even when she was sure it had been {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "reality",
              "paragraph": 0,
              "prompt": "As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the finish waiting ahead. For several seconds, her plan seemed to have become ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "time",
              "paragraph": 1,
              "prompt": "Then a soft flap repeated near the front wheel. A decorative ribbon had worked loose. The marked stopping area was ahead, but so was another racer with a chance of setting the best ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "brake",
              "paragraph": 2,
              "prompt": "Nobody had yet told Mia to stop. She could still hope that the ribbon would remain harmless for a few more seconds. Instead, she guided the car out of the timed run and pressed the ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "thumb",
              "paragraph": 3,
              "prompt": "Jo removed the ribbon and checked the wheel before authorising a restart. Her praise focused on Mia’s decision, made before an adult’s signal. Ben, waiting safely beyond the barrier, lifted his ______."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "right",
              "paragraph": 4,
              "prompt": "Mia felt disappointed about the lost time and relieved about the stop. The feelings did not cancel each other. She was beginning to understand that a responsible choice could remain costly even when she was sure it had been ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "right"
            },
            {
              "id": "w3",
              "word": "thumb"
            },
            {
              "id": "w2",
              "word": "brake"
            },
            {
              "id": "w1",
              "word": "time"
            },
            {
              "id": "w0",
              "word": "reality"
            }
          ]
        }
      },
      {
        "text": [
          "The fastest-time ribbon went to a blue car. Mia applauded, then found herself studying the gap between that racer and her own. She still wanted to know what they could improve before the next fair.",
          "Jo gave Mia and Ben an award for thoughtful preparation and responsible decisions. Ben held it at one edge until Mia reached for the other. Their names sat side by side, although the work each name represented had often looked very different.",
          "On the journey home, Mia unfolded her old sketch. She did not erase the finish line or the cheering crowd. Instead, she added Ben behind the racer and a clearer star beside the seat.",
          "\"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a race could be larger than the number written beside its finishing time."
        ],
        "mc": [
          {
            "prompt": "Why is it significant that Mia keeps the finish line in her drawing?",
            "choices": [
              "She revises her idea of success without abandoning ambition.",
              "She has learned nothing from the race.",
              "She wants to hide Ben’s contribution.",
              "She believes that preparation does not matter."
            ],
            "answer": 0,
            "skill": "Interpret a nuanced ending",
            "evidence": "She did not erase the finish line"
          },
          {
            "prompt": "How does the drawing provide structure for the story?",
            "choices": [
              "It provides exact instructions for building a brake.",
              "It reveals that the race was only a dream.",
              "It introduces a new character at the finish.",
              "Its revision makes Mia’s changing viewpoint visible."
            ],
            "answer": 3,
            "skill": "Analyse narrative structure",
            "evidence": "evidence her first picture had ignored"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The blue car",
              "won the fastest-time ribbon"
            ],
            [
              "The shared award",
              "recognised responsible decisions"
            ],
            [
              "The changed drawing",
              "included the whole team"
            ]
          ],
          "options": [
            "included the whole team",
            "recognised responsible decisions",
            "won the fastest-time ribbon"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The blue car won the fastest-time ribbon",
            "The shared award recognised responsible decisions",
            "The changed drawing included the whole team"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The fastest-time ribbon went to a blue car. Mia applauded, then found herself studying the gap between that racer and her own. She still wanted to know what they could improve before the next {{c0}}.",
            "Jo gave Mia and Ben an award for thoughtful preparation and responsible decisions. Ben held it at one edge until Mia reached for the other. Their names sat side by side, although the work each name represented had often looked very {{c1}}.",
            "On the journey home, Mia unfolded her old sketch. She did not erase the finish line or the cheering crowd. Instead, she added Ben behind the racer and a clearer star beside the {{c2}}.",
            "\"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a {{c3}} could be larger than the number written beside its finishing {{c4}}."
          ],
          "parts": [
            "The fastest-time ribbon went to a blue car. Mia applauded, then found herself studying the gap between that racer and her own. She still wanted to know what they could improve before the next {{c0}}.\n\nJo gave Mia and Ben an award for thoughtful preparation and responsible decisions. Ben held it at one edge until Mia reached for the other. Their names sat side by side, although the work each name represented had often looked very {{c1}}.\n\nOn the journey home, Mia unfolded her old sketch. She did not erase the finish line or the cheering crowd. Instead, she added Ben behind the racer and a clearer star beside the {{c2}}.\n\n\"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a {{c3}} could be larger than the number written beside its finishing {{c4}}."
          ],
          "columns": [
            "The fastest-time ribbon went to a blue car. Mia applauded, then found herself studying the gap between that racer and her own. She still wanted to know what they could improve before the next {{c0}}. Jo gave Mia and Ben an award for thoughtful preparation and responsible decisions. Ben held it at one edge until Mia reached for the other. Their names sat side by side, although the work each name represented had often looked very {{c1}}.",
            "On the journey home, Mia unfolded her old sketch. She did not erase the finish line or the cheering crowd. Instead, she added Ben behind the racer and a clearer star beside the {{c2}}. \"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a {{c3}} could be larger than the number written beside its finishing {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "fair",
              "paragraph": 0,
              "prompt": "The fastest-time ribbon went to a blue car. Mia applauded, then found herself studying the gap between that racer and her own. She still wanted to know what they could improve before the next ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "different",
              "paragraph": 1,
              "prompt": "Jo gave Mia and Ben an award for thoughtful preparation and responsible decisions. Ben held it at one edge until Mia reached for the other. Their names sat side by side, although the work each name represented had often looked very ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "seat",
              "paragraph": 2,
              "prompt": "On the journey home, Mia unfolded her old sketch. She did not erase the finish line or the cheering crowd. Instead, she added Ben behind the racer and a clearer star beside the ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "race",
              "paragraph": 3,
              "prompt": "\"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a ______ could be larger than the number written beside its finishing time."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "time",
              "paragraph": 3,
              "prompt": "\"There was more going on than I drew,\" she said. The new picture did not turn third place into first or make disappointment disappear. It made room for evidence her first picture had ignored: the measurements, the repaired wheel, and the stop nobody had ordered. Mia still hoped to win a ribbon. She now knew that the story of a race could be larger than the number written beside its finishing ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "time"
            },
            {
              "id": "w3",
              "word": "race"
            },
            {
              "id": "w2",
              "word": "seat"
            },
            {
              "id": "w1",
              "word": "different"
            },
            {
              "id": "w0",
              "word": "fair"
            }
          ]
        }
      }
    ],
    "intro": "701 words · 4 reading pages · 5 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  }
};
const TITLES=["A red car","A nut to fix","On the hill","A pal can help"];
const SCENE_ALTS=["Soap Box Racer cover","Soap Box Racer: A red car","Soap Box Racer: A nut to fix","Soap Box Racer: On the hill","Soap Box Racer: A pal can help"];
window.CAMP_ART=["assets/illustrations/page-1-pixar.png","assets/illustrations/page-1-pixar.png","assets/illustrations/page-2-pixar-rope-v2.png","assets/illustrations/page-3-pixar.png","assets/illustrations/page-4-pixar.png"];
window.CAMP_REPORT_ART_VERSION="bbd3070a7242";
window.LOWER_PICTURE_SETS={"groups":[["car","seat","wheel","rope"],["nut","spanner","axle","hand"],["helmet","flag","cone","hill"],["star","blue flag","pal","finish line"]],"atlas":"assets/illustrations/chapter-picture-groups-v1.png"};
window.EXTRA_TASKS={"E":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A blue car with four wheels.","A red car with two wheels.","A red car with four wheels."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A plastic seat.","A wooden seat.","A metal seat."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A wheel with a black tyre.","A wheel with a red tyre.","A wheel with a white tyre."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A rope pulled straight.","A rope tied in a tight knot.","A rope in a loop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A metal nut with no hole.","A metal nut with a round hole.","A metal nut with a square hole."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A spanner with one open end.","A spanner with two open ends.","A spanner with no open ends."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A bent metal axle.","A straight wooden axle.","A straight metal axle."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A hand holding a rope.","An open hand.","A hand in a fist."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A red helmet with straps.","A blue helmet with straps.","A green helmet with straps."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A red flag on a pole.","A blue flag on a pole.","A green flag on a pole."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A yellow cone.","A red cone.","A blue cone."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A low grassy hill.","A tall rocky hill.","A hill covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A red star with five points.","A gold star with six points.","A gold star with five points."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A red flag on a pole.","A blue flag on a pole.","A green flag on a pole."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A smiling pal who is waving.","A pal who is sitting down.","A pal who has both hands down."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A red and white finish line.","A plain white finish line.","A black and white finish line."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"F":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a red car with two wheels.","I can see a red car with four wheels.","I can see a blue car with four wheels."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a wooden seat.","I can see a metal seat.","I can see a plastic seat."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a wheel with a red tyre.","I can see a wheel with a white tyre.","I can see a wheel with a black tyre."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a rope tied in a tight knot.","I can see a rope in a loop.","I can see a rope pulled straight."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a metal nut with a round hole.","I can see a metal nut with a square hole.","I can see a metal nut with no hole."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a spanner with two open ends.","I can see a spanner with no open ends.","I can see a spanner with one open end."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a straight wooden axle.","I can see a straight metal axle.","I can see a bent metal axle."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see an open hand.","I can see a hand in a fist.","I can see a hand holding a rope."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a blue helmet with straps.","I can see a green helmet with straps.","I can see a red helmet with straps."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a blue flag on a pole.","I can see a green flag on a pole.","I can see a red flag on a pole."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a red cone.","I can see a blue cone.","I can see a yellow cone."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a tall rocky hill.","I can see a hill covered in snow.","I can see a low grassy hill."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a gold star with six points.","I can see a gold star with five points.","I can see a red star with five points."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a blue flag on a pole.","I can see a green flag on a pole.","I can see a red flag on a pole."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a pal who is sitting down.","I can see a pal who has both hands down.","I can see a smiling pal who is waving."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a plain white finish line.","I can see a black and white finish line.","I can see a red and white finish line."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"G":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a red car with four wheels.","The picture shows a blue car with four wheels.","The picture shows a red car with two wheels."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a metal seat.","The picture shows a plastic seat.","The picture shows a wooden seat."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a wheel with a white tyre.","The picture shows a wheel with a black tyre.","The picture shows a wheel with a red tyre."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a rope in a loop.","The picture shows a rope pulled straight.","The picture shows a rope tied in a tight knot."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a metal nut with a square hole.","The picture shows a metal nut with no hole.","The picture shows a metal nut with a round hole."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a spanner with no open ends.","The picture shows a spanner with one open end.","The picture shows a spanner with two open ends."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a straight metal axle.","The picture shows a bent metal axle.","The picture shows a straight wooden axle."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a hand in a fist.","The picture shows a hand holding a rope.","The picture shows an open hand."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a green helmet with straps.","The picture shows a red helmet with straps.","The picture shows a blue helmet with straps."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a green flag on a pole.","The picture shows a red flag on a pole.","The picture shows a blue flag on a pole."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a blue cone.","The picture shows a yellow cone.","The picture shows a red cone."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a hill covered in snow.","The picture shows a low grassy hill.","The picture shows a tall rocky hill."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a gold star with five points.","The picture shows a red star with five points.","The picture shows a gold star with six points."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a green flag on a pole.","The picture shows a red flag on a pole.","The picture shows a blue flag on a pole."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a pal who has both hands down.","The picture shows a smiling pal who is waving.","The picture shows a pal who is sitting down."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a black and white finish line.","The picture shows a red and white finish line.","The picture shows a plain white finish line."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"L":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Mia wanted to build the fastest soap-box ______ at the fair.","choices":["wheel","brake","rope","racer"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ben cared more about ______ bright stripes along its wooden frame.","choices":["looking","checking","painting","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"It would roll down a gentle slope, while Mia used a rope to steer the front ______.","choices":["frame","wheels","brake","rope"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo helped them fit a simple ______.","choices":["brake","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Before anyone rode, she checked each wheel and watched Mia practise ______.","choices":["waiting","looking","checking","stopping"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ben ______ a small star beside the seat.","choices":["checked","waited","painted","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will check","checked","are checking"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"During a practice roll, the front ______ gave a sharp click.","choices":["rope","frame","wheel","brake"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia wanted to try again quickly, but Ben ______ her to wait.","choices":["waited","asked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He had noticed that the wheel leaned slightly whenever the ______ turned.","choices":["racer","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo found a loose nut on the ______.","choices":["frame","ribbon","finish","axle"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"After Jo ______ it, Ben spun the wheel.","choices":["checked","waited","tightened","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"It turned smoothly, without the ______ sound.","choices":["checking","clicking","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["checked","are checking","will check"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"At the start, Mia pulled on her helmet and tested the ______.","choices":["ribbon","brake","rope","frame"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben stood where Jo had ______ him to wait, well outside the course.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The green flag ______.","choices":["noticed","checked","waited","lifted"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The ______ rolled forward, and Mia guided it around the first cone.","choices":["award","drawing","racer","finish"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The loose end of her painted ribbon was brushing a ______.","choices":["star","wheel","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mia slowed and stopped in the marked ______ area.","choices":["stopping","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are checking","will check","checked"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Mia finished behind two other ______.","choices":["racers","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"At first, she stared at the place where the ______ ribbon hung.","choices":["waiting","looking","checking","winning"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Then Ben pointed to the red ______.","choices":["award","drawing","racer","finish"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Its star was still shining, and every ______ had carried her safely home.","choices":["star","wheel","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo gave their team a small ______ for careful preparation and sensible choices.","choices":["award","drawing","star","nut"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia ______ Ben to hold it with her.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will check","checked","are checking"],"answer":0,"skill":"Use the future tense"}]}}],"M":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Mia studied the gentle slope at the fair and imagined a red ______ rolling down it.","choices":["wheel","brake","rope","racer"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She wanted a quick machine; Ben ______ a strong wooden frame.","choices":["checked","waited","wanted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They ______ a soap-box racer with no motor.","choices":["waited","planned","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The slope would make it move, and a rope would turn the front ______.","choices":["wheels","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo helped fit a brake and checked the wheels before Mia practised ______.","choices":["waiting","looking","checking","stopping"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"A fast start would be useless if Mia could not stop where she ______ to.","choices":["checked","waited","needed","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will check","checked","are checking"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"During the practice ride, a click came from the front ______ each time Mia turned.","choices":["rope","frame","wheel","brake"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She wanted to roll once more before the fair ______.","choices":["waited","opened","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben ______ her to wait.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"From the side, he could see that the wheel leaned instead of ______ upright.","choices":["waiting","looking","checking","staying"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo discovered a loose nut on the ______, tightened it, and checked the fastening.","choices":["finish","award","axle","ribbon"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ben spun the wheel after the repair; its ______ was quiet and even.","choices":["drawing","movement","finish","award"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["checked","are checking","will check"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Mia checked her helmet while Jo tested the ______.","choices":["ribbon","brake","rope","frame"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben took his place beyond the barrier, where he could cheer without ______ the course.","choices":["entering","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia rolled around the first cone and began to enjoy the feeling of choosing her own ______.","choices":["frame","ribbon","finish","direction"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Then a loose ribbon brushed the front ______ with a soft, repeated flap.","choices":["award","drawing","wheel","finish"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia steered into the marked stopping area instead of trying to ______ with it there.","choices":["star","finish","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo removed the ribbon and ______ the wheel.","choices":["examined","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are checking","will check","checked"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Two ______ finished ahead of Mia.","choices":["racers","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She looked towards the winning ribbon and felt a brief, sharp ______.","choices":["frame","ribbon","finish","disappointment"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Winning had been her plan all ______.","choices":["looking","checking","morning","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ben pointed out that their red ______ had made every turn and stopped when she needed it to.","choices":["star","racer","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The painted ______ had arrived safely too.","choices":["star","award","drawing","nut"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo gave both children an ______ for preparation and sensible choices.","choices":["star","nut","axle","award"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will check","checked","are checking"],"answer":0,"skill":"Use the future tense"}]}}],"N":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A drawing above Mia’s workbench showed a red racer crossing the ______ first.","choices":["racer","wheel","brake","finish"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"On paper, success looked straightforward: build the ______, roll down the slope, and win.","choices":["brake","rope","car","wheel"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He checked the wooden ______ twice, even when Mia insisted that once should be enough.","choices":["ribbon","frame","brake","rope"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Their ______ would have no engine.","choices":["racer","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The slope would provide motion, a rope would control the front ______, and a lever would work the brake.","choices":["frame","ribbon","finish","wheels"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo supervised ______ and every test.","choices":["finish","award","construction","ribbon"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A light clicking ______ the first practice turn.","choices":["checked","waited","accompanied","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia dismissed it as an unimportant rattle and glanced towards the next ______ place.","choices":["checking","starting","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben walked beside the ______.","choices":["racer","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He watched the front ______ lean whenever Mia pulled the steering rope, and asked Jo to stop the test.","choices":["ribbon","finish","award","wheel"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"A loose nut had allowed the wheel to shift on its ______.","choices":["finish","award","axle","ribbon"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"After tightening it, Jo checked the wheel again before ______ Mia ride.","choices":["checking","letting","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["will check","are checking","had checked"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The green flag marked the start of Mia’s ______ run.","choices":["waited","timed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She felt light and quick as the red racer ______ the first cone.","choices":["passed","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"A ______ loosened by the wind began brushing a front wheel.","choices":["frame","finish","award","ribbon"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The marked stopping area was ahead, and Mia knew another racer was nearly at the ______.","choices":["award","drawing","finish","ribbon"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She could continue chasing a fast time or stop to have the ribbon ______.","choices":["waited","removed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mia chose the stopping area and ______ the brake.","choices":["pressed","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["are checking","had checked","will check"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A blue ______ won the fastest-time ribbon.","choices":["car","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia watched the ______ being pinned to it and wished her red racer had been first.","choices":["frame","ribbon","finish","award"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo presented Mia and Ben with a different award, recognising careful ______ and responsible decisions.","choices":["finish","award","preparation","ribbon"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Later, she unfolded her original ______.","choices":["checking","drawing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"This time she added a second person behind the racer and made the little ______ easier to see.","choices":["star","award","drawing","nut"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"\"It needed the whole ______,\" she explained.","choices":["drawing","star","nut","team"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}}],"P":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Mia had sketched a streak of red crossing the ______ line.","choices":["racer","wheel","brake","finish"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The little drawing, taped above her workbench, made building a soap-box ______ look straightforward.","choices":["rope","frame","racer","brake"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ben ______.","choices":["waited","disagreed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He spent an entire afternoon measuring the wooden frame, then ______ it again.","choices":["measured","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia called him the slowest member of the fastest ______.","choices":["frame","ribbon","finish","team"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Their unpowered racer would use the slope for motion, a ______ for steering, and a lever for braking.","choices":["award","drawing","rope","finish"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ben laid his measurements beside Mia’s ______.","choices":["looking","checking","drawing","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The ______ streak had room for a driver, but no clear place for a brake.","choices":["waited","red","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mia had been thinking about the ______ rather than the details that would get her there.","choices":["finish","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Ben marked where each ______ would sit, while Mia drew a seat and a place to hold the steering rope.","choices":["ribbon","finish","award","wheel"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked them to explain their plan before she ______ them build.","choices":["checked","waited","helped","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"When their answers differed, she waited for them to decide together instead of ______ a side.","choices":["checking","choosing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["will check","are checking","had checked"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The first test took place on level ground, far from the cheering Mia ______.","choices":["waited","imagined","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo held the ______ while Mia settled into the seat.","choices":["racer","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Ben ______ beside the course markers with their notebook.","choices":["noticed","checked","guided","waited"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"At Jo’s signal, the racer ______ slowly forward.","choices":["checked","waited","moved","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia pulled the steering rope, then pressed the ______.","choices":["star","brake","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The ______ stopped before the last marker.","choices":["car","award","drawing","star"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["are checking","had checked","will check"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The clicking was barely louder than a pebble ______ a tin.","choices":["tapping","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia heard it during the first practice roll and ______ it as a harmless rattle.","choices":["noticed","checked","waited","dismissed"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ben walked beside the racer instead of watching the ______ line.","choices":["award","drawing","finish","ribbon"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Whenever Mia steered, he saw the front ______ lean.","choices":["star","wheel","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He raised his hand and ______ Jo to stop the test.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"A loose ______ had allowed the wheel to shift along the axle.","choices":["drawing","star","axle","nut"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After the ______ repair, Ben opened the notebook to a fresh page.","choices":["ribbon","finish","award","wheel"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He drew a tiny wheel and added the words \"check after ______.\"","choices":["looking","checking","turning","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia ______ him underline them.","choices":["waited","watched","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She had assumed a ______ part could disappear from their worries.","choices":["repaired","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that ______ one problem was a reason to check carefully, not a promise that every other part was perfect.","choices":["waiting","looking","checking","finding"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Mia ______ to read the next checks aloud while Ben watched.","choices":["checked","waited","offered","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["will check","are checking","had checked"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The fair was growing louder, and Mia found herself gripping the steering rope before Jo had finished ______.","choices":["looking","checking","speaking","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ben suggested one clear signal for starting and another for ______ a test.","choices":["checking","stopping","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They ______ on level ground, where Jo could control the pace and check each response.","choices":["practised","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Once, Mia moved too soon and had to stop before ______ again.","choices":["waiting","looking","checking","beginning"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Nobody ______ the practice a failure.","choices":["checked","waited","called","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ben added a note about ______ for the complete signal.","choices":["listening","waiting","looking","checking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["are checking","had checked","will check"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A green flag lifted, and the ______ began its only timed run.","choices":["star","racer","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"For a few seconds, Mia felt as if she were inside the red streak from her ______.","choices":["drawing","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Then a soft slap ______ beside her knee.","choices":["noticed","checked","waited","repeated"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"A decorative ribbon, loosened by the wind, was brushing the front ______.","choices":["axle","helmet","wheel","nut"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She could see another racer approaching the ______.","choices":["team","finish","axle","helmet"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mia knew the marked ______ area was just ahead.","choices":["stopping","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"From the ______ area, Mia could see the rest of the course.","choices":["stopping","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The loose ______ was gone, but her chance of the fastest time had gone with it.","choices":["star","nut","axle","ribbon"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo checked that the route was clear before ______ permission to continue.","choices":["looking","checking","giving","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia started again at a controlled pace, noticing the next cone rather than watching the other ______.","choices":["helmet","racers","nut","axle"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The ______ steered where she asked it to go.","choices":["car","racer","wheel","brake"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"When she reached the end, she used the ______ and waited until Jo said she could get out.","choices":["wheel","rope","frame","brake"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["will check","are checking","had checked"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"While the results were being prepared, a child from another team asked about the ______ on their red racer.","choices":["drawing","nut","axle","star"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ben explained who had painted it and ______ the sketch beside the seat.","choices":["checked","waited","showed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The child ______ the notebook too.","choices":["guided","noticed","checked","waited"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mia hesitated when he ______ what they had written.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Part of her still thought a competing ______ should work everything out alone.","choices":["wheel","brake","rope","team"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Then she remembered how much their own racer ______ on help.","choices":["checked","waited","depended","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["are checking","had checked","will check"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Their ______ finished third.","choices":["axle","helmet","racer","nut"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The fair’s fastest-time ribbon went to another ______, and Mia watched it being pinned to a blue car.","choices":["helmet","team","nut","axle"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She still ______ it were hers.","choices":["wished","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo handed Mia and Ben a different ______, for thoughtful preparation and responsible decisions.","choices":["wheel","brake","rope","award"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"On the walk home, Mia found her original ______ in her pocket.","choices":["looking","checking","drawing","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She added a second person behind the red racer, then a small ______ beside its seat.","choices":["ribbon","star","rope","frame"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}}],"R":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The red streak in Mia’s sketch had no loose nuts, crooked ______, or waiting.","choices":["racer","wheel","brake","wheels"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"It crossed a ______ line before a cheering crowd.","choices":["brake","rope","finish","wheel"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She kept the ______ above her workbench, where it made the outcome seem more certain than the work leading to it.","choices":["checking","drawing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben had a different picture in mind: a frame that stayed square, wheels that turned freely, and a ______ that answered every time.","choices":["brake","frame","ribbon","finish"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He ______ the timber twice.","choices":["noticed","checked","waited","measured"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Mia called this ______ an expensive way to spend an afternoon.","choices":["finish","award","caution","ribbon"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The sound was easy to overlook: a dry click at the moment the front ______ changed direction.","choices":["rope","frame","wheel","brake"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Mia heard it, but the start of the fair was approaching and another test would use time she ______ for practice.","choices":["waited","wanted","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben did not hear merely an ______.","choices":["interruption","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Walking beside the ______, he noticed a wheel leaning against the direction of the turn.","choices":["frame","ribbon","finish","car"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He ______ his hand before Mia could line up for another run.","choices":["checked","waited","raised","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo found a loose ______ that allowed movement along the axle.","choices":["drawing","nut","finish","award"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checking carefully.","Mia and Ben check carefully.","Mia and Ben checks carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will check","checked","checks"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are checking","checked","will check"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["will check","are checking","had checked"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"As the flag rose, Mia recognised the scene from her drawing: the red sides, the downhill slope, and the ______ waiting ahead.","choices":["frame","finish","brake","rope"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"For several seconds, her plan ______ to have become reality.","choices":["seemed","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Then a soft flap repeated near the front ______.","choices":["ribbon","finish","award","wheel"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"A decorative ______ had worked loose.","choices":["award","drawing","ribbon","finish"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The marked stopping area was ahead, but so was another ______ with a chance of setting the best time.","choices":["star","racer","award","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Instead, she guided the ______ out of the timed run and pressed the brake.","choices":["car","award","drawing","star"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben check carefully.","Mia and Ben checks carefully.","Mia and Ben checking carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel\" Jo said.","\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checked","checks","will check"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["checked","will check","are checking"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["are checking","had checked","will check"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The fastest-time ribbon went to a blue ______.","choices":["car","rope","frame","ribbon"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Mia applauded, then found herself studying the gap between that ______ and her own.","choices":["ribbon","finish","award","racer"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She still ______ to know what they could improve before the next fair.","choices":["checked","waited","wanted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo gave Mia and Ben an ______ for thoughtful preparation and responsible decisions.","choices":["star","award","finish","drawing"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ben held it at one edge until Mia ______ for the other.","choices":["reached","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Their names sat side by side, although the work each name represented had often ______ very different.","choices":["noticed","checked","waited","looked"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Mia and Ben checks carefully.","Mia and Ben checking carefully.","Mia and Ben check carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Check the wheel, Jo said.\"","\"Check the wheel,\" Jo said.","\"Check the wheel\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Mia and Ben checked the racer. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["checks","will check","checked"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will check","are checking","checked"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the racer.","choices":["had checked","will check","are checking"],"answer":0,"skill":"Use the past perfect tense"}]}}]};
