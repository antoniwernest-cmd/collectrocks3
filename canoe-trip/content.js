/* Original fiction; F&P letters are instructional targets for teacher review. */
const LEVELS={
  "E": {
    "grade": "F&P E target",
    "titles": [
      "Set to go",
      "Dip and pull",
      "A duck in the bay",
      "Back at the dock"
    ],
    "sections": [
      {
        "text": [
          "It is a sunny day. The life jackets are on a table.",
          "Noor and Eli can sit.",
          "Jo has a big canoe.",
          "They put life jackets on.",
          "Jo checks each clip."
        ],
        "mc": [
          {
            "prompt": "What do they put on?",
            "choices": [
              "Red boots",
              "Life jackets"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "Life jackets"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Jo checks each…",
              "clip"
            ]
          ],
          "options": [
            "clip",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Jo checks each… clip"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It is a sunny day. The life jackets are on a table.",
            "Noor and Eli can {{c0}}.",
            "Jo has a big canoe.",
            "They put life jackets on.",
            "Jo checks each {{c1}}."
          ],
          "parts": [
            "It is a sunny day. The life jackets are on a table.\n\nNoor and Eli can {{c0}}.\n\nJo has a big canoe.\n\nThey put life jackets on.\n\nJo checks each {{c1}}."
          ],
          "columns": [
            "It is a sunny day. The life jackets are on a table. Noor and Eli can {{c0}}.",
            "Jo has a big canoe. They put life jackets on. Jo checks each {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "sit",
              "paragraph": 1,
              "prompt": "Noor and Eli can ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "clip",
              "paragraph": 4,
              "prompt": "Jo checks each ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "clip"
            },
            {
              "id": "w0",
              "word": "sit"
            }
          ]
        }
      },
      {
        "text": [
          "Jo can sit in the canoe.",
          "Noor has a paddle.",
          "Eli has one too.",
          "They can dip and pull.",
          "They look at the water."
        ],
        "mc": [
          {
            "prompt": "What does Noor have?",
            "choices": [
              "A paddle",
              "A flag"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "A paddle"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "They can dip and…",
              "pull"
            ]
          ],
          "options": [
            "pull",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "They can dip and… pull"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Jo can {{c0}} in the canoe.",
            "Noor has a paddle.",
            "Eli has one too.",
            "They can {{c1}} and pull.",
            "They look at the water."
          ],
          "parts": [
            "Jo can {{c0}} in the canoe.\n\nNoor has a paddle.\n\nEli has one too.\n\nThey can {{c1}} and pull.\n\nThey look at the water."
          ],
          "columns": [
            "Jo can {{c0}} in the canoe. Noor has a paddle.",
            "Eli has one too. They can {{c1}} and pull. They look at the water."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "sit",
              "paragraph": 0,
              "prompt": "Jo can ______ in the canoe."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "dip",
              "paragraph": 3,
              "prompt": "They can ______ and pull."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "dip"
            },
            {
              "id": "w0",
              "word": "sit"
            }
          ]
        }
      },
      {
        "text": [
          "The wind can blow.",
          "Jo can get to the bay.",
          "A duck can swim by.",
          "The duck is wet."
        ],
        "mc": [
          {
            "prompt": "What can swim by?",
            "choices": [
              "A cat",
              "A duck"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "A duck"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The duck is…",
              "wet"
            ]
          ],
          "options": [
            "wet",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The duck is… wet"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The wind can blow.",
            "Jo can get to the {{c0}}.",
            "A duck can swim by.",
            "The duck is {{c1}}."
          ],
          "parts": [
            "The wind can blow.\n\nJo can get to the {{c0}}.\n\nA duck can swim by.\n\nThe duck is {{c1}}."
          ],
          "columns": [
            "The wind can blow. Jo can get to the {{c0}}.",
            "A duck can swim by. The duck is {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "bay",
              "paragraph": 1,
              "prompt": "Jo can get to the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wet",
              "paragraph": 3,
              "prompt": "The duck is ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "wet"
            },
            {
              "id": "w0",
              "word": "bay"
            }
          ]
        }
      },
      {
        "text": [
          "They go back to the dock.",
          "Jo can hold the canoe.",
          "Noor and Eli get out.",
          "\"We had fun!\" they say.",
          "They sort the paddles."
        ],
        "mc": [
          {
            "prompt": "Who can hold the canoe?",
            "choices": [
              "Jo",
              "Eli"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "Jo"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "They get out at the…",
              "dock"
            ]
          ],
          "options": [
            "dock",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "They get out at the… dock"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They go back to the {{c0}}.",
            "Jo can hold the canoe.",
            "Noor and Eli get out.",
            "\"We had {{c1}}!\" they say.",
            "They sort the paddles."
          ],
          "parts": [
            "They go back to the {{c0}}.\n\nJo can hold the canoe.\n\nNoor and Eli get out.\n\n\"We had {{c1}}!\" they say.\n\nThey sort the paddles."
          ],
          "columns": [
            "They go back to the {{c0}}. Jo can hold the canoe.",
            "Noor and Eli get out. \"We had {{c1}}!\" they say. They sort the paddles."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "They go back to the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "fun",
              "paragraph": 3,
              "prompt": "\"We had ______!\" they say."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "fun"
            },
            {
              "id": "w0",
              "word": "dock"
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
      "Ready at the dock",
      "Find a rhythm",
      "The quiet bay",
      "Home to the dock"
    ],
    "sections": [
      {
        "text": [
          "It was sunny. A table on the dock held spare life jackets.",
          "Noor and Eli met Jo beside the lake.",
          "They put on life jackets before getting into the canoe.",
          "Jo checked each clip and held the canoe beside the dock.",
          "The children sat down and held their paddles."
        ],
        "mc": [
          {
            "prompt": "When did they put on life jackets?",
            "choices": [
              "After the trip",
              "When they got home",
              "Before getting into the canoe"
            ],
            "answer": 2,
            "skill": "Follow a sequence",
            "evidence": "before getting into the canoe"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Jo checked",
              "each clip"
            ],
            [
              "The children held",
              "their paddles"
            ]
          ],
          "options": [
            "their paddles",
            "each clip"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Jo checked each clip",
            "The children held their paddles"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny. A table on the dock held spare life jackets.",
            "Noor and Eli met Jo beside the {{c0}}.",
            "They put on life jackets before getting into the canoe.",
            "Jo checked each clip and held the canoe beside the dock.",
            "The children sat down and held their {{c1}}."
          ],
          "parts": [
            "It was sunny. A table on the dock held spare life jackets.\n\nNoor and Eli met Jo beside the {{c0}}.\n\nThey put on life jackets before getting into the canoe.\n\nJo checked each clip and held the canoe beside the dock.\n\nThe children sat down and held their {{c1}}."
          ],
          "columns": [
            "It was sunny. A table on the dock held spare life jackets. Noor and Eli met Jo beside the {{c0}}.",
            "They put on life jackets before getting into the canoe. Jo checked each clip and held the canoe beside the dock. The children sat down and held their {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 1,
              "prompt": "Noor and Eli met Jo beside the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "paddles",
              "paragraph": 4,
              "prompt": "The children sat down and held their ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "paddles"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "Noor dipped her paddle into the water.",
          "Eli dipped his paddle a little later.",
          "The canoe turned towards the reeds.",
          "Jo counted slowly, and the children paddled together.",
          "Jo said, \"Look at each paddle.\""
        ],
        "mc": [
          {
            "prompt": "What helped them paddle together?",
            "choices": [
              "They dropped the paddles.",
              "Jo counted slowly.",
              "A duck waved."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "Jo counted slowly"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The canoe turned",
              "towards the reeds"
            ],
            [
              "Jo counted",
              "slowly"
            ]
          ],
          "options": [
            "slowly",
            "towards the reeds"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The canoe turned towards the reeds",
            "Jo counted slowly"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor dipped her paddle into the {{c0}}.",
            "Eli dipped his paddle a little later.",
            "The canoe turned towards the reeds.",
            "Jo counted slowly, and the children paddled {{c1}}.",
            "Jo said, \"Look at each paddle.\""
          ],
          "parts": [
            "Noor dipped her paddle into the {{c0}}.\n\nEli dipped his paddle a little later.\n\nThe canoe turned towards the reeds.\n\nJo counted slowly, and the children paddled {{c1}}.\n\nJo said, \"Look at each paddle.\""
          ],
          "columns": [
            "Noor dipped her paddle into the {{c0}}. Eli dipped his paddle a little later.",
            "The canoe turned towards the reeds. Jo counted slowly, and the children paddled {{c1}}. Jo said, \"Look at each paddle.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "water",
              "paragraph": 0,
              "prompt": "Noor dipped her paddle into the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "together",
              "paragraph": 3,
              "prompt": "Jo counted slowly, and the children paddled ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "together"
            },
            {
              "id": "w0",
              "word": "water"
            }
          ]
        }
      },
      {
        "text": [
          "A breeze made little waves on the lake.",
          "Jo guided the canoe into a quiet bay.",
          "Tall reeds sheltered the water there.",
          "Noor saw a small duck swimming beside the reeds."
        ],
        "mc": [
          {
            "prompt": "Why was the bay quiet?",
            "choices": [
              "The reeds sheltered the water.",
              "The lake had no water.",
              "The canoe had a motor."
            ],
            "answer": 0,
            "skill": "Connect story details",
            "evidence": "reeds sheltered the water"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "A breeze made",
              "little waves"
            ],
            [
              "Noor saw",
              "a small duck"
            ]
          ],
          "options": [
            "a small duck",
            "little waves"
          ],
          "skill": "Connect story details",
          "evidence": [
            "A breeze made little waves",
            "Noor saw a small duck"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A breeze made little waves on the {{c0}}.",
            "Jo guided the canoe into a quiet bay.",
            "Tall reeds sheltered the water there.",
            "Noor saw a small duck swimming beside the {{c1}}."
          ],
          "parts": [
            "A breeze made little waves on the {{c0}}.\n\nJo guided the canoe into a quiet bay.\n\nTall reeds sheltered the water there.\n\nNoor saw a small duck swimming beside the {{c1}}."
          ],
          "columns": [
            "A breeze made little waves on the {{c0}}. Jo guided the canoe into a quiet bay.",
            "Tall reeds sheltered the water there. Noor saw a small duck swimming beside the {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "A breeze made little waves on the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "reeds",
              "paragraph": 3,
              "prompt": "Noor saw a small duck swimming beside the ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "reeds"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "On the way back, Eli counted each paddle stroke.",
          "Noor matched his slow, steady rhythm.",
          "At the dock, Jo held the canoe while they got out.",
          "Noor said their best trick was learning to listen.",
          "After the trip, they helped sort the paddles."
        ],
        "mc": [
          {
            "prompt": "What did Noor think was their best trick?",
            "choices": [
              "Paddling very fast",
              "Finding a race flag",
              "Learning to listen"
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "learning to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Eli counted",
              "each paddle stroke"
            ],
            [
              "Jo held",
              "the canoe at the dock"
            ]
          ],
          "options": [
            "the canoe at the dock",
            "each paddle stroke"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Eli counted each paddle stroke",
            "Jo held the canoe at the dock"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the way back, Eli counted each paddle {{c0}}.",
            "Noor matched his slow, steady rhythm.",
            "At the dock, Jo held the canoe while they got out.",
            "Noor said their best trick was learning to {{c1}}.",
            "After the trip, they helped sort the paddles."
          ],
          "parts": [
            "On the way back, Eli counted each paddle {{c0}}.\n\nNoor matched his slow, steady rhythm.\n\nAt the dock, Jo held the canoe while they got out.\n\nNoor said their best trick was learning to {{c1}}.\n\nAfter the trip, they helped sort the paddles."
          ],
          "columns": [
            "On the way back, Eli counted each paddle {{c0}}. Noor matched his slow, steady rhythm.",
            "At the dock, Jo held the canoe while they got out. Noor said their best trick was learning to {{c1}}. After the trip, they helped sort the paddles."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "stroke",
              "paragraph": 0,
              "prompt": "On the way back, Eli counted each paddle ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "listen",
              "paragraph": 3,
              "prompt": "Noor said their best trick was learning to ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "listen"
            },
            {
              "id": "w0",
              "word": "stroke"
            }
          ]
        }
      }
    ],
    "intro": "157 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "G": {
    "grade": "F&P G target",
    "titles": [
      "Ready at the dock",
      "Find a rhythm",
      "The quiet bay",
      "Home to the dock"
    ],
    "sections": [
      {
        "text": [
          "It was sunny. A table on the dock held spare life jackets.",
          "Noor and Eli met Jo beside the lake. A canoe was waiting next to the wooden dock.",
          "Before getting in, the children put on their life jackets. Jo checked every clip and held the canoe still.",
          "The children sat down carefully and held their paddles. They were ready for their trip."
        ],
        "mc": [
          {
            "prompt": "When did they put on life jackets?",
            "choices": [
              "After the trip",
              "When they got home",
              "Before getting into the canoe"
            ],
            "answer": 2,
            "skill": "Follow a sequence",
            "evidence": "before getting into the canoe"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Jo checked",
              "each clip"
            ],
            [
              "The children held",
              "their paddles"
            ]
          ],
          "options": [
            "their paddles",
            "each clip"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo checked each clip",
            "The children held their paddles"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny. A table on the dock held spare life jackets.",
            "Noor and Eli met Jo beside the {{c0}}. A canoe was waiting next to the wooden dock.",
            "Before getting in, the children put on their life jackets. Jo checked every clip and held the canoe still.",
            "The children sat down carefully and held their {{c1}}. They were ready for their trip."
          ],
          "parts": [
            "It was sunny. A table on the dock held spare life jackets.\n\nNoor and Eli met Jo beside the {{c0}}. A canoe was waiting next to the wooden dock.\n\nBefore getting in, the children put on their life jackets. Jo checked every clip and held the canoe still.\n\nThe children sat down carefully and held their {{c1}}. They were ready for their trip."
          ],
          "columns": [
            "It was sunny. A table on the dock held spare life jackets. Noor and Eli met Jo beside the {{c0}}. A canoe was waiting next to the wooden dock.",
            "Before getting in, the children put on their life jackets. Jo checked every clip and held the canoe still. The children sat down carefully and held their {{c1}}. They were ready for their trip."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 1,
              "prompt": "Noor and Eli met Jo beside the ______. A canoe was waiting next to the wooden dock."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "paddles",
              "paragraph": 3,
              "prompt": "The children sat down carefully and held their ______. They were ready for their trip."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "paddles"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "Noor dipped her paddle into the water. Eli dipped his a little later, and the canoe began to turn.",
          "The children looked towards the reeds. They needed to make their strokes at the same time.",
          "Jo counted slowly. Noor and Eli listened and paddled together. Soon the canoe was moving straight.",
          "Jo said, \"Look at each paddle.\""
        ],
        "mc": [
          {
            "prompt": "What helped them paddle together?",
            "choices": [
              "They dropped the paddles.",
              "Jo counted slowly.",
              "A duck waved."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "Jo counted slowly"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The canoe turned",
              "towards the reeds"
            ],
            [
              "Jo counted",
              "slowly"
            ]
          ],
          "options": [
            "slowly",
            "towards the reeds"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The canoe turned towards the reeds",
            "Jo counted slowly"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor dipped her paddle into the {{c0}}. Eli dipped his a little later, and the canoe began to turn.",
            "The children looked towards the reeds. They needed to make their strokes at the same time.",
            "Jo counted slowly. Noor and Eli listened and paddled {{c1}}. Soon the canoe was moving straight.",
            "Jo said, \"Look at each paddle.\""
          ],
          "parts": [
            "Noor dipped her paddle into the {{c0}}. Eli dipped his a little later, and the canoe began to turn.\n\nThe children looked towards the reeds. They needed to make their strokes at the same time.\n\nJo counted slowly. Noor and Eli listened and paddled {{c1}}. Soon the canoe was moving straight.\n\nJo said, \"Look at each paddle.\""
          ],
          "columns": [
            "Noor dipped her paddle into the {{c0}}. Eli dipped his a little later, and the canoe began to turn. The children looked towards the reeds. They needed to make their strokes at the same time.",
            "Jo counted slowly. Noor and Eli listened and paddled {{c1}}. Soon the canoe was moving straight. Jo said, \"Look at each paddle.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "water",
              "paragraph": 0,
              "prompt": "Noor dipped her paddle into the ______. Eli dipped his a little later, and the canoe began to turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "together",
              "paragraph": 2,
              "prompt": "Jo counted slowly. Noor and Eli listened and paddled ______. Soon the canoe was moving straight."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "together"
            },
            {
              "id": "w0",
              "word": "water"
            }
          ]
        }
      },
      {
        "text": [
          "A breeze made little waves on the lake. Jo guided the canoe into a quiet bay near the shore.",
          "Tall reeds sheltered the water, so it was calmer there. The children rested their paddles and looked around.",
          "Noor saw a small duck swimming beside the reeds. They watched it quietly from the canoe."
        ],
        "mc": [
          {
            "prompt": "Why was the bay quiet?",
            "choices": [
              "The reeds sheltered the water.",
              "The lake had no water.",
              "The canoe had a motor."
            ],
            "answer": 0,
            "skill": "Connect story details",
            "evidence": "reeds sheltered the water"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "A breeze made",
              "little waves"
            ],
            [
              "Noor saw",
              "a small duck"
            ]
          ],
          "options": [
            "a small duck",
            "little waves"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "A breeze made little waves",
            "Noor saw a small duck"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A breeze made little waves on the {{c0}}. Jo guided the canoe into a quiet bay near the shore.",
            "Tall reeds sheltered the water, so it was calmer there. The children rested their paddles and looked around.",
            "Noor saw a small duck swimming beside the {{c1}}. They watched it quietly from the canoe."
          ],
          "parts": [
            "A breeze made little waves on the {{c0}}. Jo guided the canoe into a quiet bay near the shore.\n\nTall reeds sheltered the water, so it was calmer there. The children rested their paddles and looked around.\n\nNoor saw a small duck swimming beside the {{c1}}. They watched it quietly from the canoe."
          ],
          "columns": [
            "A breeze made little waves on the {{c0}}. Jo guided the canoe into a quiet bay near the shore. Tall reeds sheltered the water, so it was calmer there. The children rested their paddles and looked around.",
            "Noor saw a small duck swimming beside the {{c1}}. They watched it quietly from the canoe."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "A breeze made little waves on the ______. Jo guided the canoe into a quiet bay near the shore."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "reeds",
              "paragraph": 2,
              "prompt": "Noor saw a small duck swimming beside the ______. They watched it quietly from the canoe."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "reeds"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "On the way back, Eli counted each paddle stroke. Noor listened and matched his slow, steady rhythm.",
          "At the dock, Jo held the canoe still while the children got out. They stepped onto the dock one at a time.",
          "Noor said their best trick was learning to listen. Eli agreed that they made a good team.",
          "After the trip, they helped sort the paddles."
        ],
        "mc": [
          {
            "prompt": "What did Noor think was their best trick?",
            "choices": [
              "Paddling very fast",
              "Finding a race flag",
              "Learning to listen"
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "learning to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Eli counted",
              "each paddle stroke"
            ],
            [
              "Jo held",
              "the canoe at the dock"
            ]
          ],
          "options": [
            "the canoe at the dock",
            "each paddle stroke"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli counted each paddle stroke",
            "Jo held the canoe at the dock"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the way back, Eli counted each paddle {{c0}}. Noor listened and matched his slow, steady rhythm.",
            "At the dock, Jo held the canoe still while the children got out. They stepped onto the dock one at a time.",
            "Noor said their best trick was learning to {{c1}}. Eli agreed that they made a good team.",
            "After the trip, they helped sort the paddles."
          ],
          "parts": [
            "On the way back, Eli counted each paddle {{c0}}. Noor listened and matched his slow, steady rhythm.\n\nAt the dock, Jo held the canoe still while the children got out. They stepped onto the dock one at a time.\n\nNoor said their best trick was learning to {{c1}}. Eli agreed that they made a good team.\n\nAfter the trip, they helped sort the paddles."
          ],
          "columns": [
            "On the way back, Eli counted each paddle {{c0}}. Noor listened and matched his slow, steady rhythm. At the dock, Jo held the canoe still while the children got out. They stepped onto the dock one at a time.",
            "Noor said their best trick was learning to {{c1}}. Eli agreed that they made a good team. After the trip, they helped sort the paddles."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "stroke",
              "paragraph": 0,
              "prompt": "On the way back, Eli counted each paddle ______. Noor listened and matched his slow, steady rhythm."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "listen",
              "paragraph": 2,
              "prompt": "Noor said their best trick was learning to ______. Eli agreed that they made a good team."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "listen"
            },
            {
              "id": "w0",
              "word": "stroke"
            }
          ]
        }
      }
    ],
    "intro": "237 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "L": {
    "grade": "F&P L target",
    "titles": [
      "Before the first stroke",
      "The canoe that would not agree",
      "A change of plan",
      "Bringing the rhythm home"
    ],
    "sections": [
      {
        "text": [
          "Noor and Eli met Jo at the wooden dock. The lake looked smooth, and Noor was eager to begin their first canoe trip.",
          "Before they stepped aboard, Jo checked that their life jackets fitted and every clip was fastened. They placed a small dry bag under a seat.",
          "Jo held the canoe steady while the children sat down. Eli held his paddle as if it were a racing flag.",
          "\"We are going to work together,\" Jo reminded them. Noor watched a leaf drift beside the dock and wondered how they would keep the canoe going straight."
        ],
        "mc": [
          {
            "prompt": "Why does Jo check the life jackets first?",
            "choices": [
              "They will make the canoe faster.",
              "They tell Jo where the bay is.",
              "They are part of a race.",
              "They need to fit and be fastened before boarding."
            ],
            "answer": 3,
            "skill": "Find a reason",
            "evidence": "life jackets fitted"
          },
          {
            "prompt": "What does Eli’s way of holding his paddle suggest?",
            "choices": [
              "He has already finished the trip.",
              "He is measuring the lake.",
              "He is excited and thinking about speed.",
              "He wants to leave it behind."
            ],
            "answer": 2,
            "skill": "Infer from a comparison",
            "evidence": "as if it were a racing flag"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The dry bag",
              "went under a seat"
            ],
            [
              "Jo held the canoe",
              "while the children sat down"
            ]
          ],
          "options": [
            "while the children sat down",
            "went under a seat"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The dry bag went under a seat",
            "Jo held the canoe while the children sat down"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor and Eli met Jo at the wooden {{c0}}. The lake looked smooth, and Noor was eager to begin their first canoe trip.",
            "Before they stepped aboard, Jo checked that their life jackets fitted and every clip was fastened. They placed a small dry bag under a {{c1}}.",
            "Jo held the canoe steady while the children sat down. Eli held his paddle as if it were a racing flag.",
            "\"We are going to work together,\" Jo reminded them. Noor watched a leaf drift beside the dock and wondered how they would keep the canoe going {{c2}}."
          ],
          "parts": [
            "Noor and Eli met Jo at the wooden {{c0}}. The lake looked smooth, and Noor was eager to begin their first canoe trip.\n\nBefore they stepped aboard, Jo checked that their life jackets fitted and every clip was fastened. They placed a small dry bag under a {{c1}}.\n\nJo held the canoe steady while the children sat down. Eli held his paddle as if it were a racing flag.\n\n\"We are going to work together,\" Jo reminded them. Noor watched a leaf drift beside the dock and wondered how they would keep the canoe going {{c2}}."
          ],
          "columns": [
            "Noor and Eli met Jo at the wooden {{c0}}. The lake looked smooth, and Noor was eager to begin their first canoe trip. Before they stepped aboard, Jo checked that their life jackets fitted and every clip was fastened. They placed a small dry bag under a {{c1}}.",
            "Jo held the canoe steady while the children sat down. Eli held his paddle as if it were a racing flag. \"We are going to work together,\" Jo reminded them. Noor watched a leaf drift beside the dock and wondered how they would keep the canoe going {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "Noor and Eli met Jo at the wooden ______. The lake looked smooth, and Noor was eager to begin their first canoe trip."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "seat",
              "paragraph": 1,
              "prompt": "Before they stepped aboard, Jo checked that their life jackets fitted and every clip was fastened. They placed a small dry bag under a ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "straight",
              "paragraph": 3,
              "prompt": "\"We are going to work together,\" Jo reminded them. Noor watched a leaf drift beside the dock and wondered how they would keep the canoe going ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "straight"
            },
            {
              "id": "w1",
              "word": "seat"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      },
      {
        "text": [
          "Noor pulled her paddle quickly through the water. Eli took a slower stroke on the other side. Instead of going straight, the canoe curved towards the reeds.",
          "Each child thought the other should change. Jo asked them to pause and listen while she counted a steady rhythm.",
          "They dipped, pulled, and lifted their paddles to the count. Jo guided from the back, and the canoe moved along the planned route.",
          "Noor noticed that working harder was not the same as working together. Eli smiled when their two small splashes finally sounded like one."
        ],
        "mc": [
          {
            "prompt": "Why does the canoe curve towards the reeds at first?",
            "choices": [
              "A duck pulls it.",
              "Jo asks them to stop at the reeds.",
              "The children paddle at different speeds.",
              "The dry bag is empty."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "slower stroke on the other side"
          },
          {
            "prompt": "What does Noor learn?",
            "choices": [
              "The reeds show the way home.",
              "Matching their actions matters more than pulling harder.",
              "A canoe works best without paddles.",
              "She should ignore Eli’s strokes."
            ],
            "answer": 1,
            "skill": "Explain a lesson",
            "evidence": "not the same as working together"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Jo’s steady count",
              "helped them find a rhythm"
            ],
            [
              "Their matching strokes",
              "made the splashes sound like one"
            ]
          ],
          "options": [
            "made the splashes sound like one",
            "helped them find a rhythm"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo’s steady count helped them find a rhythm",
            "Their matching strokes made the splashes sound like one"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor pulled her paddle quickly through the {{c0}}. Eli took a slower stroke on the other side. Instead of going straight, the canoe curved towards the reeds.",
            "Each child thought the other should change. Jo asked them to pause and listen while she counted a steady {{c1}}.",
            "They dipped, pulled, and lifted their paddles to the count. Jo guided from the back, and the canoe moved along the planned route.",
            "Noor noticed that working harder was not the same as working {{c2}}. Eli smiled when their two small splashes finally sounded like one."
          ],
          "parts": [
            "Noor pulled her paddle quickly through the {{c0}}. Eli took a slower stroke on the other side. Instead of going straight, the canoe curved towards the reeds.\n\nEach child thought the other should change. Jo asked them to pause and listen while she counted a steady {{c1}}.\n\nThey dipped, pulled, and lifted their paddles to the count. Jo guided from the back, and the canoe moved along the planned route.\n\nNoor noticed that working harder was not the same as working {{c2}}. Eli smiled when their two small splashes finally sounded like one."
          ],
          "columns": [
            "Noor pulled her paddle quickly through the {{c0}}. Eli took a slower stroke on the other side. Instead of going straight, the canoe curved towards the reeds. Each child thought the other should change. Jo asked them to pause and listen while she counted a steady {{c1}}.",
            "They dipped, pulled, and lifted their paddles to the count. Jo guided from the back, and the canoe moved along the planned route. Noor noticed that working harder was not the same as working {{c2}}. Eli smiled when their two small splashes finally sounded like one."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "water",
              "paragraph": 0,
              "prompt": "Noor pulled her paddle quickly through the ______. Eli took a slower stroke on the other side. Instead of going straight, the canoe curved towards the reeds."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rhythm",
              "paragraph": 1,
              "prompt": "Each child thought the other should change. Jo asked them to pause and listen while she counted a steady ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "together",
              "paragraph": 3,
              "prompt": "Noor noticed that working harder was not the same as working ______. Eli smiled when their two small splashes finally sounded like one."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "together"
            },
            {
              "id": "w1",
              "word": "rhythm"
            },
            {
              "id": "w0",
              "word": "water"
            }
          ]
        }
      },
      {
        "text": [
          "A breeze began to ruffle the open lake. Jo checked the shore and chose a sheltered bay instead of the longer route they had planned.",
          "Eli looked disappointed until Noor pointed to a duck moving between the tall reeds. In the quieter water, they could see tiny rings spreading behind it.",
          "They kept their distance and watched without calling out. Jo explained that a useful plan could change when conditions changed.",
          "The shorter route had given them something they would have missed while hurrying. Eli rested his paddle and listened to the soft rustle beside the canoe."
        ],
        "mc": [
          {
            "prompt": "Why does Jo change the route?",
            "choices": [
              "The duck blocks the dock.",
              "A breeze is making the open water less calm.",
              "The canoe has no seats.",
              "She wants to enter a race."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "breeze began to ruffle"
          },
          {
            "prompt": "How does Eli’s view of the shorter route change?",
            "choices": [
              "He begins to enjoy what the quiet bay offers.",
              "He becomes certain it was a mistake.",
              "He decides to paddle alone.",
              "He stops noticing the reeds."
            ],
            "answer": 0,
            "skill": "Trace a response",
            "evidence": "rested his paddle and listened"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The sheltered bay",
              "offered quieter water"
            ],
            [
              "The children watched",
              "without calling out"
            ]
          ],
          "options": [
            "without calling out",
            "offered quieter water"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The sheltered bay offered quieter water",
            "The children watched without calling out"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A breeze began to ruffle the open {{c0}}. Jo checked the shore and chose a sheltered bay instead of the longer route they had planned.",
            "Eli looked disappointed until Noor pointed to a duck moving between the tall {{c1}}. In the quieter water, they could see tiny rings spreading behind it.",
            "They kept their distance and watched without calling out. Jo explained that a useful plan could change when conditions changed.",
            "The shorter route had given them something they would have missed while hurrying. Eli rested his paddle and listened to the soft {{c2}} beside the canoe."
          ],
          "parts": [
            "A breeze began to ruffle the open {{c0}}. Jo checked the shore and chose a sheltered bay instead of the longer route they had planned.\n\nEli looked disappointed until Noor pointed to a duck moving between the tall {{c1}}. In the quieter water, they could see tiny rings spreading behind it.\n\nThey kept their distance and watched without calling out. Jo explained that a useful plan could change when conditions changed.\n\nThe shorter route had given them something they would have missed while hurrying. Eli rested his paddle and listened to the soft {{c2}} beside the canoe."
          ],
          "columns": [
            "A breeze began to ruffle the open {{c0}}. Jo checked the shore and chose a sheltered bay instead of the longer route they had planned. Eli looked disappointed until Noor pointed to a duck moving between the tall {{c1}}. In the quieter water, they could see tiny rings spreading behind it.",
            "They kept their distance and watched without calling out. Jo explained that a useful plan could change when conditions changed. The shorter route had given them something they would have missed while hurrying. Eli rested his paddle and listened to the soft {{c2}} beside the canoe."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "A breeze began to ruffle the open ______. Jo checked the shore and chose a sheltered bay instead of the longer route they had planned."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "reeds",
              "paragraph": 1,
              "prompt": "Eli looked disappointed until Noor pointed to a duck moving between the tall ______. In the quieter water, they could see tiny rings spreading behind it."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "rustle",
              "paragraph": 3,
              "prompt": "The shorter route had given them something they would have missed while hurrying. Eli rested his paddle and listened to the soft ______ beside the canoe."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "rustle"
            },
            {
              "id": "w1",
              "word": "reeds"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "On the return trip, Eli counted the strokes and Noor matched him. Jo guided them back along the sheltered shore.",
          "At the dock, everyone remained seated until Jo said it was time to get out. She held the canoe steady as they stepped ashore one at a time.",
          "Noor found the leaf she had watched at the start. It was caught beside the dock, but she no longer felt puzzled about travelling in a straight line.",
          "\"We needed one rhythm,\" she told Eli. Their favourite part was different, yet both agreed that the trip had worked because they had learned to listen."
        ],
        "mc": [
          {
            "prompt": "What shows that the children remember their safety routine?",
            "choices": [
              "They stay seated until Jo tells them to get out.",
              "They stand up before reaching the dock.",
              "They leave the life jackets behind.",
              "They jump out together."
            ],
            "answer": 0,
            "skill": "Use story evidence",
            "evidence": "remained seated until Jo said"
          },
          {
            "prompt": "Why does the story return to the leaf?",
            "choices": [
              "It explains where the duck lives.",
              "It shows that the canoe is broken.",
              "It tells us who won a race.",
              "It reminds us of Noor’s question at the beginning."
            ],
            "answer": 3,
            "skill": "Connect beginning and ending",
            "evidence": "leaf she had watched at the start"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Eli counted",
              "the returning strokes"
            ],
            [
              "Noor’s discovery",
              "was that they needed one rhythm"
            ]
          ],
          "options": [
            "was that they needed one rhythm",
            "the returning strokes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli counted the returning strokes",
            "Noor’s discovery was that they needed one rhythm"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the return trip, Eli counted the {{c0}} and Noor matched him. Jo guided them back along the sheltered shore.",
            "At the dock, everyone remained seated until Jo said it was time to get out. She held the canoe steady as they stepped ashore one at a time.",
            "Noor found the leaf she had watched at the start. It was caught beside the dock, but she no longer felt puzzled about travelling in a straight {{c1}}.",
            "\"We needed one rhythm,\" she told Eli. Their favourite part was different, yet both agreed that the trip had worked because they had learned to {{c2}}."
          ],
          "parts": [
            "On the return trip, Eli counted the {{c0}} and Noor matched him. Jo guided them back along the sheltered shore.\n\nAt the dock, everyone remained seated until Jo said it was time to get out. She held the canoe steady as they stepped ashore one at a time.\n\nNoor found the leaf she had watched at the start. It was caught beside the dock, but she no longer felt puzzled about travelling in a straight {{c1}}.\n\n\"We needed one rhythm,\" she told Eli. Their favourite part was different, yet both agreed that the trip had worked because they had learned to {{c2}}."
          ],
          "columns": [
            "On the return trip, Eli counted the {{c0}} and Noor matched him. Jo guided them back along the sheltered shore. At the dock, everyone remained seated until Jo said it was time to get out. She held the canoe steady as they stepped ashore one at a time.",
            "Noor found the leaf she had watched at the start. It was caught beside the dock, but she no longer felt puzzled about travelling in a straight {{c1}}. \"We needed one rhythm,\" she told Eli. Their favourite part was different, yet both agreed that the trip had worked because they had learned to {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "strokes",
              "paragraph": 0,
              "prompt": "On the return trip, Eli counted the ______ and Noor matched him. Jo guided them back along the sheltered shore."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "line",
              "paragraph": 2,
              "prompt": "Noor found the leaf she had watched at the start. It was caught beside the dock, but she no longer felt puzzled about travelling in a straight ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "listen",
              "paragraph": 3,
              "prompt": "\"We needed one rhythm,\" she told Eli. Their favourite part was different, yet both agreed that the trip had worked because they had learned to ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "listen"
            },
            {
              "id": "w1",
              "word": "line"
            },
            {
              "id": "w0",
              "word": "strokes"
            }
          ]
        }
      }
    ],
    "intro": "388 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "M": {
    "grade": "F&P M target",
    "titles": [
      "Before the first stroke",
      "The canoe that would not agree",
      "A change of plan",
      "Bringing the rhythm home"
    ],
    "sections": [
      {
        "text": [
          "The lake looked smooth when Noor and Eli joined Jo at the dock. Noor watched a leaf drift beside the wood and wondered how they would make their canoe travel straight.",
          "Eli held his paddle upright like a racing flag. He was already imagining how quickly they might cross the water.",
          "Jo checked the fit and clips of their life jackets before either child stepped aboard. Their small dry bag went under a seat, where it would stay out of the way.",
          "She held the canoe steady while they sat down. Noor took her paddle and looked once more at the leaf. It seemed to know where to go without anyone telling it."
        ],
        "mc": [
          {
            "prompt": "Why does Jo check the life jackets first?",
            "choices": [
              "They will make the canoe faster.",
              "They tell Jo where the bay is.",
              "They are part of a race.",
              "They need to fit and be fastened before boarding."
            ],
            "answer": 3,
            "skill": "Find a reason",
            "evidence": "before either child stepped aboard"
          },
          {
            "prompt": "What does Eli’s way of holding his paddle suggest?",
            "choices": [
              "He has already finished the trip.",
              "He is measuring the lake.",
              "He is excited and thinking about speed.",
              "He wants to leave it behind."
            ],
            "answer": 2,
            "skill": "Infer from a comparison",
            "evidence": "like a racing flag"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The dry bag",
              "went under a seat"
            ],
            [
              "Jo held the canoe",
              "while the children sat down"
            ]
          ],
          "options": [
            "while the children sat down",
            "went under a seat"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The dry bag went under a seat",
            "Jo held the canoe while the children sat down"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The lake looked smooth when Noor and Eli joined Jo at the {{c0}}. Noor watched a leaf drift beside the wood and wondered how they would make their canoe travel straight.",
            "Eli held his paddle upright like a racing flag. He was already imagining how quickly they might cross the water.",
            "Jo checked the fit and clips of their life jackets before either child stepped aboard. Their small dry {{c1}} went under a seat, where it would stay out of the way.",
            "She held the canoe steady while they sat down. Noor took her {{c2}} and looked once more at the leaf. It seemed to know where to go without anyone telling it."
          ],
          "parts": [
            "The lake looked smooth when Noor and Eli joined Jo at the {{c0}}. Noor watched a leaf drift beside the wood and wondered how they would make their canoe travel straight.\n\nEli held his paddle upright like a racing flag. He was already imagining how quickly they might cross the water.\n\nJo checked the fit and clips of their life jackets before either child stepped aboard. Their small dry {{c1}} went under a seat, where it would stay out of the way.\n\nShe held the canoe steady while they sat down. Noor took her {{c2}} and looked once more at the leaf. It seemed to know where to go without anyone telling it."
          ],
          "columns": [
            "The lake looked smooth when Noor and Eli joined Jo at the {{c0}}. Noor watched a leaf drift beside the wood and wondered how they would make their canoe travel straight. Eli held his paddle upright like a racing flag. He was already imagining how quickly they might cross the water.",
            "Jo checked the fit and clips of their life jackets before either child stepped aboard. Their small dry {{c1}} went under a seat, where it would stay out of the way. She held the canoe steady while they sat down. Noor took her {{c2}} and looked once more at the leaf. It seemed to know where to go without anyone telling it."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "The lake looked smooth when Noor and Eli joined Jo at the ______. Noor watched a leaf drift beside the wood and wondered how they would make their canoe travel straight."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "bag",
              "paragraph": 2,
              "prompt": "Jo checked the fit and clips of their life jackets before either child stepped aboard. Their small dry ______ went under a seat, where it would stay out of the way."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "paddle",
              "paragraph": 3,
              "prompt": "She held the canoe steady while they sat down. Noor took her ______ and looked once more at the leaf. It seemed to know where to go without anyone telling it."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "paddle"
            },
            {
              "id": "w1",
              "word": "bag"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      },
      {
        "text": [
          "Noor pulled quickly on one side while Eli made a slower stroke on the other. The canoe curved towards the reeds, and both children looked at Jo.",
          "She explained that their two patterns were not working together. Instead of asking them to pull harder, she counted a steady rhythm for them to follow.",
          "Dip, pull, lift. The children matched the count while Jo guided from the back. Their strokes began to make one repeating pattern of splashes.",
          "Noor noticed the difference at once. More effort from one paddler had not solved the problem, but listening and adjusting had. Eli grinned when their splashes finally sounded as though they belonged to the same team."
        ],
        "mc": [
          {
            "prompt": "Why does the canoe curve towards the reeds at first?",
            "choices": [
              "A duck pulls it.",
              "Jo asks them to stop at the reeds.",
              "The children paddle at different speeds.",
              "The dry bag is empty."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "their two patterns were not working together"
          },
          {
            "prompt": "What does Noor learn?",
            "choices": [
              "The reeds show the way home.",
              "Matching their actions matters more than pulling harder.",
              "A canoe works best without paddles.",
              "She should ignore Eli’s strokes."
            ],
            "answer": 1,
            "skill": "Explain a lesson",
            "evidence": "listening and adjusting"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Jo’s steady count",
              "helped them find a rhythm"
            ],
            [
              "Their matching strokes",
              "made the splashes sound like one"
            ]
          ],
          "options": [
            "made the splashes sound like one",
            "helped them find a rhythm"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo’s steady count helped them find a rhythm",
            "Their matching strokes made the splashes sound like one"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor pulled quickly on one side while Eli made a slower stroke on the other. The canoe curved towards the {{c0}}, and both children looked at Jo.",
            "She explained that their two patterns were not working together. Instead of asking them to pull harder, she counted a steady rhythm for them to {{c1}}.",
            "Dip, pull, lift. The children matched the count while Jo guided from the back. Their strokes began to make one repeating pattern of splashes.",
            "Noor noticed the difference at once. More effort from one paddler had not solved the problem, but listening and adjusting had. Eli grinned when their splashes finally sounded as though they belonged to the same {{c2}}."
          ],
          "parts": [
            "Noor pulled quickly on one side while Eli made a slower stroke on the other. The canoe curved towards the {{c0}}, and both children looked at Jo.\n\nShe explained that their two patterns were not working together. Instead of asking them to pull harder, she counted a steady rhythm for them to {{c1}}.\n\nDip, pull, lift. The children matched the count while Jo guided from the back. Their strokes began to make one repeating pattern of splashes.\n\nNoor noticed the difference at once. More effort from one paddler had not solved the problem, but listening and adjusting had. Eli grinned when their splashes finally sounded as though they belonged to the same {{c2}}."
          ],
          "columns": [
            "Noor pulled quickly on one side while Eli made a slower stroke on the other. The canoe curved towards the {{c0}}, and both children looked at Jo. She explained that their two patterns were not working together. Instead of asking them to pull harder, she counted a steady rhythm for them to {{c1}}.",
            "Dip, pull, lift. The children matched the count while Jo guided from the back. Their strokes began to make one repeating pattern of splashes. Noor noticed the difference at once. More effort from one paddler had not solved the problem, but listening and adjusting had. Eli grinned when their splashes finally sounded as though they belonged to the same {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "reeds",
              "paragraph": 0,
              "prompt": "Noor pulled quickly on one side while Eli made a slower stroke on the other. The canoe curved towards the ______, and both children looked at Jo."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "follow",
              "paragraph": 1,
              "prompt": "She explained that their two patterns were not working together. Instead of asking them to pull harder, she counted a steady rhythm for them to ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "team",
              "paragraph": 3,
              "prompt": "Noor noticed the difference at once. More effort from one paddler had not solved the problem, but listening and adjusting had. Eli grinned when their splashes finally sounded as though they belonged to the same ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "team"
            },
            {
              "id": "w1",
              "word": "follow"
            },
            {
              "id": "w0",
              "word": "reeds"
            }
          ]
        }
      },
      {
        "text": [
          "A breeze began to roughen the open lake. Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned route.",
          "Eli’s face fell. He had wanted to reach the distant point, and turning early felt like leaving part of the trip unfinished.",
          "Then Noor pointed to a duck moving among the tall reeds. They stayed well back and watched rings spread across the quieter water.",
          "Jo explained that changing conditions could call for a different plan. Eli rested his paddle and listened to the reeds rustle. The shorter route had brought them close to details he would have missed while hurrying."
        ],
        "mc": [
          {
            "prompt": "Why does Jo change the route?",
            "choices": [
              "The duck blocks the dock.",
              "A breeze is making the open water less calm.",
              "The canoe has no seats.",
              "She wants to enter a race."
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "A breeze began to roughen the open lake"
          },
          {
            "prompt": "How does Eli’s view of the shorter route change?",
            "choices": [
              "He begins to enjoy what the quiet bay offers.",
              "He becomes certain it was a mistake.",
              "He decides to paddle alone.",
              "He stops noticing the reeds."
            ],
            "answer": 0,
            "skill": "Trace a response",
            "evidence": "listened to the reeds rustle"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The sheltered bay",
              "offered quieter water"
            ],
            [
              "The children watched",
              "without calling out"
            ]
          ],
          "options": [
            "without calling out",
            "offered quieter water"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The sheltered bay offered quieter water",
            "The children watched without calling out"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A breeze began to roughen the open {{c0}}. Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned route.",
            "Eli’s face fell. He had wanted to reach the distant point, and turning early felt like leaving part of the trip unfinished.",
            "Then Noor pointed to a duck moving among the tall {{c1}}. They stayed well back and watched rings spread across the quieter water.",
            "Jo explained that changing conditions could call for a different plan. Eli rested his paddle and listened to the reeds rustle. The shorter route had brought them close to details he would have missed while {{c2}}."
          ],
          "parts": [
            "A breeze began to roughen the open {{c0}}. Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned route.\n\nEli’s face fell. He had wanted to reach the distant point, and turning early felt like leaving part of the trip unfinished.\n\nThen Noor pointed to a duck moving among the tall {{c1}}. They stayed well back and watched rings spread across the quieter water.\n\nJo explained that changing conditions could call for a different plan. Eli rested his paddle and listened to the reeds rustle. The shorter route had brought them close to details he would have missed while {{c2}}."
          ],
          "columns": [
            "A breeze began to roughen the open {{c0}}. Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned route. Eli’s face fell. He had wanted to reach the distant point, and turning early felt like leaving part of the trip unfinished.",
            "Then Noor pointed to a duck moving among the tall {{c1}}. They stayed well back and watched rings spread across the quieter water. Jo explained that changing conditions could call for a different plan. Eli rested his paddle and listened to the reeds rustle. The shorter route had brought them close to details he would have missed while {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "A breeze began to roughen the open ______. Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned route."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "reeds",
              "paragraph": 2,
              "prompt": "Then Noor pointed to a duck moving among the tall ______. They stayed well back and watched rings spread across the quieter water."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "hurrying",
              "paragraph": 3,
              "prompt": "Jo explained that changing conditions could call for a different plan. Eli rested his paddle and listened to the reeds rustle. The shorter route had brought them close to details he would have missed while ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "hurrying"
            },
            {
              "id": "w1",
              "word": "reeds"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "On the journey back, Eli counted their paddle strokes. Noor matched his slow beat while Jo guided them along the sheltered shore.",
          "At the dock, they stayed seated until Jo told them to step out. She held the canoe steady, and they moved one at a time.",
          "The little leaf was still beside the dock. Seeing it reminded Noor of the question she had asked herself before the trip: how could two paddlers keep a straight course?",
          "She now had an answer. The children did not need identical ideas about their favourite part, but they did need a shared rhythm. Noor told Eli that learning to listen had been their best new skill."
        ],
        "mc": [
          {
            "prompt": "What shows that the children remember their safety routine?",
            "choices": [
              "They stay seated until Jo tells them to get out.",
              "They stand up before reaching the dock.",
              "They leave the life jackets behind.",
              "They jump out together."
            ],
            "answer": 0,
            "skill": "Use story evidence",
            "evidence": "they stayed seated until Jo told them"
          },
          {
            "prompt": "Why does the story return to the leaf?",
            "choices": [
              "It explains where the duck lives.",
              "It shows that the canoe is broken.",
              "It tells us who won a race.",
              "It reminds us of Noor’s question at the beginning."
            ],
            "answer": 3,
            "skill": "Connect beginning and ending",
            "evidence": "reminded Noor of the question"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Eli counted",
              "the returning strokes"
            ],
            [
              "Noor’s discovery",
              "was that they needed one rhythm"
            ]
          ],
          "options": [
            "was that they needed one rhythm",
            "the returning strokes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli counted the returning strokes",
            "Noor’s discovery was that they needed one rhythm"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the journey back, Eli counted their paddle {{c0}}. Noor matched his slow beat while Jo guided them along the sheltered shore.",
            "At the dock, they stayed seated until Jo told them to step out. She held the canoe steady, and they moved one at a time.",
            "The little leaf was still beside the dock. Seeing it reminded Noor of the question she had asked herself before the trip: how could two paddlers keep a straight {{c1}}?",
            "She now had an answer. The children did not need identical ideas about their favourite part, but they did need a shared rhythm. Noor told Eli that learning to {{c2}} had been their best new skill."
          ],
          "parts": [
            "On the journey back, Eli counted their paddle {{c0}}. Noor matched his slow beat while Jo guided them along the sheltered shore.\n\nAt the dock, they stayed seated until Jo told them to step out. She held the canoe steady, and they moved one at a time.\n\nThe little leaf was still beside the dock. Seeing it reminded Noor of the question she had asked herself before the trip: how could two paddlers keep a straight {{c1}}?\n\nShe now had an answer. The children did not need identical ideas about their favourite part, but they did need a shared rhythm. Noor told Eli that learning to {{c2}} had been their best new skill."
          ],
          "columns": [
            "On the journey back, Eli counted their paddle {{c0}}. Noor matched his slow beat while Jo guided them along the sheltered shore. At the dock, they stayed seated until Jo told them to step out. She held the canoe steady, and they moved one at a time.",
            "The little leaf was still beside the dock. Seeing it reminded Noor of the question she had asked herself before the trip: how could two paddlers keep a straight {{c1}}? She now had an answer. The children did not need identical ideas about their favourite part, but they did need a shared rhythm. Noor told Eli that learning to {{c2}} had been their best new skill."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "strokes",
              "paragraph": 0,
              "prompt": "On the journey back, Eli counted their paddle ______. Noor matched his slow beat while Jo guided them along the sheltered shore."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "course",
              "paragraph": 2,
              "prompt": "The little leaf was still beside the dock. Seeing it reminded Noor of the question she had asked herself before the trip: how could two paddlers keep a straight ______?"
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "listen",
              "paragraph": 3,
              "prompt": "She now had an answer. The children did not need identical ideas about their favourite part, but they did need a shared rhythm. Noor told Eli that learning to ______ had been their best new skill."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "listen"
            },
            {
              "id": "w1",
              "word": "course"
            },
            {
              "id": "w0",
              "word": "strokes"
            }
          ]
        }
      }
    ],
    "intro": "445 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "N": {
    "grade": "F&P N target",
    "titles": [
      "The route in blue",
      "Two paddles, one direction",
      "A shorter line",
      "The story they brought back"
    ],
    "sections": [
      {
        "text": [
          "Eli followed the blue route on Jo’s map with one finger. He imagined telling everyone how far the canoe had travelled to the distant point.",
          "Noor watched a leaf turn beside the dock. With one paddler on each side, she wondered how they would avoid travelling in circles.",
          "Jo checked the weather, their route, and every life-jacket clip. She held the canoe while they boarded and placed the dry bag beneath a seat.",
          "Eli asked when they would reach the point. Jo said they would decide as they went. He looked at the calm water and found it hard to imagine a reason for changing the plan. The line on the map felt like a promise."
        ],
        "mc": [
          {
            "prompt": "How do Eli and Noor view the trip differently?",
            "choices": [
              "Both want to stay at the dock.",
              "Noor wants a race; Eli wants to study the leaf.",
              "Both think the map is wrong.",
              "Eli focuses on distance; Noor wonders how paddling works."
            ],
            "answer": 3,
            "skill": "Compare perspectives",
            "evidence": "imagined telling everyone how far"
          },
          {
            "prompt": "What does the blue line represent to Eli?",
            "choices": [
              "A warning about a broken canoe",
              "A way to measure the life jackets",
              "A goal he expects the team to complete",
              "A place to leave the paddles"
            ],
            "answer": 2,
            "skill": "Interpret a detail",
            "evidence": "felt like a promise"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Eli’s imagined story",
              "centred on a long trip"
            ],
            [
              "Noor’s question",
              "concerned steering straight"
            ],
            [
              "Jo’s preparations",
              "included weather and life jackets"
            ]
          ],
          "options": [
            "included weather and life jackets",
            "concerned steering straight",
            "centred on a long trip"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli’s imagined story centred on a long trip",
            "Noor’s question concerned steering straight",
            "Jo’s preparations included weather and life jackets"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Eli followed the blue route on Jo’s {{c0}} with one finger. He imagined telling everyone how far the canoe had travelled to the distant point.",
            "Noor watched a leaf turn beside the dock. With one paddler on each side, she wondered how they would avoid travelling in {{c1}}.",
            "Jo checked the weather, their route, and every life-jacket clip. She held the canoe while they boarded and placed the dry bag beneath a {{c2}}.",
            "Eli asked when they would reach the point. Jo said they would decide as they went. He looked at the calm water and found it hard to imagine a reason for changing the plan. The line on the map felt like a {{c3}}."
          ],
          "parts": [
            "Eli followed the blue route on Jo’s {{c0}} with one finger. He imagined telling everyone how far the canoe had travelled to the distant point.\n\nNoor watched a leaf turn beside the dock. With one paddler on each side, she wondered how they would avoid travelling in {{c1}}.\n\nJo checked the weather, their route, and every life-jacket clip. She held the canoe while they boarded and placed the dry bag beneath a {{c2}}.\n\nEli asked when they would reach the point. Jo said they would decide as they went. He looked at the calm water and found it hard to imagine a reason for changing the plan. The line on the map felt like a {{c3}}."
          ],
          "columns": [
            "Eli followed the blue route on Jo’s {{c0}} with one finger. He imagined telling everyone how far the canoe had travelled to the distant point. Noor watched a leaf turn beside the dock. With one paddler on each side, she wondered how they would avoid travelling in {{c1}}.",
            "Jo checked the weather, their route, and every life-jacket clip. She held the canoe while they boarded and placed the dry bag beneath a {{c2}}. Eli asked when they would reach the point. Jo said they would decide as they went. He looked at the calm water and found it hard to imagine a reason for changing the plan. The line on the map felt like a {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "map",
              "paragraph": 0,
              "prompt": "Eli followed the blue route on Jo’s ______ with one finger. He imagined telling everyone how far the canoe had travelled to the distant point."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "circles",
              "paragraph": 1,
              "prompt": "Noor watched a leaf turn beside the dock. With one paddler on each side, she wondered how they would avoid travelling in ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "seat",
              "paragraph": 2,
              "prompt": "Jo checked the weather, their route, and every life-jacket clip. She held the canoe while they boarded and placed the dry bag beneath a ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "promise",
              "paragraph": 3,
              "prompt": "Eli asked when they would reach the point. Jo said they would decide as they went. He looked at the calm water and found it hard to imagine a reason for changing the plan. The line on the map felt like a ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "promise"
            },
            {
              "id": "w2",
              "word": "seat"
            },
            {
              "id": "w1",
              "word": "circles"
            },
            {
              "id": "w0",
              "word": "map"
            }
          ]
        }
      },
      {
        "text": [
          "The children began with different paddle strokes. Noor’s were quick and shallow; Eli’s were slower and deeper. Their canoe curved towards the reeds.",
          "Both were ready to explain what the other person should change. Jo asked them to pause and listen to a measured beat: dip, pull, lift.",
          "Following the count made their movements work together. The canoe settled into a smoother rhythm as Jo guided from the back.",
          "Eli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being right. They had to notice and respond."
        ],
        "mc": [
          {
            "prompt": "Why does Eli adjust his stroke without being asked?",
            "choices": [
              "Jo has stopped counting forever.",
              "He has reached the dock.",
              "He notices that his change disrupts their shared rhythm.",
              "He wants to lose his paddle."
            ],
            "answer": 2,
            "skill": "Infer from an action",
            "evidence": "felt the pattern falter"
          },
          {
            "prompt": "What larger idea does the paddling problem develop?",
            "choices": [
              "A map makes communication unnecessary.",
              "Cooperation requires attention and adjustment.",
              "The strongest person should make every decision.",
              "Disagreement always ends a trip."
            ],
            "answer": 1,
            "skill": "Explain a theme",
            "evidence": "notice and respond"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The early curve",
              "followed mismatched strokes"
            ],
            [
              "Jo’s measured beat",
              "offered a shared pattern"
            ],
            [
              "Eli’s adjustment",
              "helped restore the rhythm"
            ]
          ],
          "options": [
            "helped restore the rhythm",
            "offered a shared pattern",
            "followed mismatched strokes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The early curve followed mismatched strokes",
            "Jo’s measured beat offered a shared pattern",
            "Eli’s adjustment helped restore the rhythm"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The children began with different paddle strokes. Noor’s were quick and shallow; Eli’s were slower and deeper. Their canoe curved towards the {{c0}}.",
            "Both were ready to explain what the other person should change. Jo asked them to pause and listen to a measured beat: dip, pull, {{c1}}.",
            "Following the count made their movements work together. The canoe settled into a smoother rhythm as Jo guided from the back.",
            "Eli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being {{c2}}. They had to notice and {{c3}}."
          ],
          "parts": [
            "The children began with different paddle strokes. Noor’s were quick and shallow; Eli’s were slower and deeper. Their canoe curved towards the {{c0}}.\n\nBoth were ready to explain what the other person should change. Jo asked them to pause and listen to a measured beat: dip, pull, {{c1}}.\n\nFollowing the count made their movements work together. The canoe settled into a smoother rhythm as Jo guided from the back.\n\nEli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being {{c2}}. They had to notice and {{c3}}."
          ],
          "columns": [
            "The children began with different paddle strokes. Noor’s were quick and shallow; Eli’s were slower and deeper. Their canoe curved towards the {{c0}}. Both were ready to explain what the other person should change. Jo asked them to pause and listen to a measured beat: dip, pull, {{c1}}.",
            "Following the count made their movements work together. The canoe settled into a smoother rhythm as Jo guided from the back. Eli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being {{c2}}. They had to notice and {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "reeds",
              "paragraph": 0,
              "prompt": "The children began with different paddle strokes. Noor’s were quick and shallow; Eli’s were slower and deeper. Their canoe curved towards the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "lift",
              "paragraph": 1,
              "prompt": "Both were ready to explain what the other person should change. Jo asked them to pause and listen to a measured beat: dip, pull, ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "right",
              "paragraph": 3,
              "prompt": "Eli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being ______. They had to notice and respond."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "respond",
              "paragraph": 3,
              "prompt": "Eli tried a longer stroke to gain speed, then felt the pattern falter. He adjusted without waiting for Jo to ask. Noor realised that neither paddler could make a shared journey work by insisting on being right. They had to notice and ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "respond"
            },
            {
              "id": "w2",
              "word": "right"
            },
            {
              "id": "w1",
              "word": "lift"
            },
            {
              "id": "w0",
              "word": "reeds"
            }
          ]
        }
      },
      {
        "text": [
          "A line of small wrinkles appeared on the open lake. Jo studied the water and turned towards a bay sheltered by the shore and tall reeds.",
          "Eli objected that the map showed a longer route. Jo explained that the plan had been made for calmer conditions, before the breeze changed.",
          "For a while he paddled quietly, thinking about the point they would not reach. Then Noor noticed a duck slipping between the reeds. They watched from a distance.",
          "The quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed larger because he was beginning to notice more of it."
        ],
        "mc": [
          {
            "prompt": "Why does Jo choose the sheltered bay?",
            "choices": [
              "The life jackets have become too small.",
              "The wind is changing the conditions on the open lake.",
              "The map orders her to stop there.",
              "The duck has called to the children."
            ],
            "answer": 1,
            "skill": "Use cause and effect",
            "evidence": "before the breeze changed"
          },
          {
            "prompt": "How can the trip get “larger” as the route gets shorter?",
            "choices": [
              "They notice more and gain a richer experience.",
              "The canoe physically grows.",
              "The lake becomes deeper everywhere.",
              "The map changes its scale."
            ],
            "answer": 0,
            "skill": "Interpret figurative language",
            "evidence": "beginning to notice more"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The darker wrinkles",
              "signalled a breeze"
            ],
            [
              "The sheltered water",
              "revealed quieter details"
            ],
            [
              "Eli’s changing response",
              "moved towards curiosity"
            ]
          ],
          "options": [
            "moved towards curiosity",
            "revealed quieter details",
            "signalled a breeze"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The darker wrinkles signalled a breeze",
            "The sheltered water revealed quieter details",
            "Eli’s changing response moved towards curiosity"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A line of small wrinkles appeared on the open {{c0}}. Jo studied the water and turned towards a bay sheltered by the shore and tall reeds.",
            "Eli objected that the map showed a longer route. Jo explained that the plan had been made for calmer conditions, before the breeze {{c1}}.",
            "For a while he paddled quietly, thinking about the point they would not reach. Then Noor noticed a duck slipping between the reeds. They watched from a distance.",
            "The quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed {{c2}} because he was beginning to notice more of {{c3}}."
          ],
          "parts": [
            "A line of small wrinkles appeared on the open {{c0}}. Jo studied the water and turned towards a bay sheltered by the shore and tall reeds.\n\nEli objected that the map showed a longer route. Jo explained that the plan had been made for calmer conditions, before the breeze {{c1}}.\n\nFor a while he paddled quietly, thinking about the point they would not reach. Then Noor noticed a duck slipping between the reeds. They watched from a distance.\n\nThe quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed {{c2}} because he was beginning to notice more of {{c3}}."
          ],
          "columns": [
            "A line of small wrinkles appeared on the open {{c0}}. Jo studied the water and turned towards a bay sheltered by the shore and tall reeds. Eli objected that the map showed a longer route. Jo explained that the plan had been made for calmer conditions, before the breeze {{c1}}.",
            "For a while he paddled quietly, thinking about the point they would not reach. Then Noor noticed a duck slipping between the reeds. They watched from a distance. The quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed {{c2}} because he was beginning to notice more of {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "A line of small wrinkles appeared on the open ______. Jo studied the water and turned towards a bay sheltered by the shore and tall reeds."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "changed",
              "paragraph": 1,
              "prompt": "Eli objected that the map showed a longer route. Jo explained that the plan had been made for calmer conditions, before the breeze ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "larger",
              "paragraph": 3,
              "prompt": "The quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed ______ because he was beginning to notice more of it."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "it",
              "paragraph": 3,
              "prompt": "The quiet bay revealed widening rings and soft rustling sounds. Eli’s disappointment gave way to curiosity. Their route was shorter, but the experience seemed larger because he was beginning to notice more of ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "it"
            },
            {
              "id": "w2",
              "word": "larger"
            },
            {
              "id": "w1",
              "word": "changed"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "Eli counted the strokes all the way back along the sheltered shore. Noor matched him while Jo guided the canoe to the dock. They stayed seated until it was time to step out.",
          "After putting the paddles away, Eli opened the map. He circled the bay and added three notes: duck, reeds, one rhythm.",
          "Noor asked whether he would tell people about a long trip. He thought for a moment and chose a different description: a good trip.",
          "The distant point remained a possible goal for another day. This day’s value could not be measured only in distance. It also included changing a plan, listening to a partner, and discovering something he had not expected to see."
        ],
        "mc": [
          {
            "prompt": "What does Eli’s note on the map show?",
            "choices": [
              "He values the discoveries and shared experience.",
              "He wants to erase the whole lake.",
              "He thinks they reached the distant point.",
              "He has forgotten the duck."
            ],
            "answer": 0,
            "skill": "Interpret a symbolic action",
            "evidence": "duck, reeds, one rhythm"
          },
          {
            "prompt": "Which statement best describes Eli’s change?",
            "choices": [
              "He no longer wants to go canoeing.",
              "He believes plans should never change.",
              "He thinks Noor’s ideas are unimportant.",
              "He judges a trip by more than the distance travelled."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "could not be measured only in distance"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The distant point",
              "remained a possible future goal"
            ],
            [
              "The note in the bay",
              "recorded meaningful discoveries"
            ],
            [
              "The story Eli would tell",
              "included another person’s view"
            ]
          ],
          "options": [
            "included another person’s view",
            "recorded meaningful discoveries",
            "remained a possible future goal"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The distant point remained a possible future goal",
            "The note in the bay recorded meaningful discoveries",
            "The story Eli would tell included another person’s view"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Eli counted the strokes all the way back along the sheltered shore. Noor matched him while Jo guided the canoe to the {{c0}}. They stayed seated until it was time to step out.",
            "After putting the paddles away, Eli opened the map. He circled the bay and added three notes: duck, reeds, one {{c1}}.",
            "Noor asked whether he would tell people about a long trip. He thought for a moment and chose a different description: a good trip.",
            "The distant point remained a possible goal for another day. This day’s value could not be measured only in {{c2}}. It also included changing a plan, listening to a partner, and discovering something he had not expected to {{c3}}."
          ],
          "parts": [
            "Eli counted the strokes all the way back along the sheltered shore. Noor matched him while Jo guided the canoe to the {{c0}}. They stayed seated until it was time to step out.\n\nAfter putting the paddles away, Eli opened the map. He circled the bay and added three notes: duck, reeds, one {{c1}}.\n\nNoor asked whether he would tell people about a long trip. He thought for a moment and chose a different description: a good trip.\n\nThe distant point remained a possible goal for another day. This day’s value could not be measured only in {{c2}}. It also included changing a plan, listening to a partner, and discovering something he had not expected to {{c3}}."
          ],
          "columns": [
            "Eli counted the strokes all the way back along the sheltered shore. Noor matched him while Jo guided the canoe to the {{c0}}. They stayed seated until it was time to step out. After putting the paddles away, Eli opened the map. He circled the bay and added three notes: duck, reeds, one {{c1}}.",
            "Noor asked whether he would tell people about a long trip. He thought for a moment and chose a different description: a good trip. The distant point remained a possible goal for another day. This day’s value could not be measured only in {{c2}}. It also included changing a plan, listening to a partner, and discovering something he had not expected to {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "Eli counted the strokes all the way back along the sheltered shore. Noor matched him while Jo guided the canoe to the ______. They stayed seated until it was time to step out."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rhythm",
              "paragraph": 1,
              "prompt": "After putting the paddles away, Eli opened the map. He circled the bay and added three notes: duck, reeds, one ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "distance",
              "paragraph": 3,
              "prompt": "The distant point remained a possible goal for another day. This day’s value could not be measured only in ______. It also included changing a plan, listening to a partner, and discovering something he had not expected to see."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "see",
              "paragraph": 3,
              "prompt": "The distant point remained a possible goal for another day. This day’s value could not be measured only in distance. It also included changing a plan, listening to a partner, and discovering something he had not expected to ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "see"
            },
            {
              "id": "w2",
              "word": "distance"
            },
            {
              "id": "w1",
              "word": "rhythm"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      }
    ],
    "intro": "457 words · 4 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "P": {
    "grade": "F&P P target",
    "titles": [
      "The route in blue",
      "Jobs before the journey",
      "The dock from a new direction",
      "Two paddles, one direction",
      "A pattern worth keeping",
      "What the map could not answer",
      "A shorter line",
      "The bay’s small world",
      "Choosing the way home",
      "The story they brought back"
    ],
    "sections": [
      {
        "text": [
          "On Jo’s map, a blue line curved across the lake to a distant point and back. Eli traced it twice, imagining the story he would tell about their long canoe trip.",
          "Noor was less interested in distance. She watched a leaf drift beside the dock and wondered how two people could paddle on opposite sides without sending the canoe in circles.",
          "Jo checked the weather, their route, and the fit of each life jacket. She held the canoe steady while they boarded and placed their dry bag under a seat.",
          "Eli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need changing. Noor tightened her paddle grip and watched the leaf."
        ],
        "mc": [
          {
            "prompt": "How do Eli and Noor view the trip differently?",
            "choices": [
              "Both want to stay at the dock.",
              "Noor wants a race; Eli wants to study the leaf.",
              "Both think the map is wrong.",
              "Eli focuses on distance; Noor wonders how paddling works."
            ],
            "answer": 3,
            "skill": "Compare perspectives",
            "evidence": "less interested in distance"
          },
          {
            "prompt": "What does the blue line represent to Eli?",
            "choices": [
              "A warning about a broken canoe",
              "A way to measure the life jackets",
              "A goal he expects the team to complete",
              "A place to leave the paddles"
            ],
            "answer": 2,
            "skill": "Interpret a detail",
            "evidence": "looked like a promise"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Eli’s imagined story",
              "centred on a long trip"
            ],
            [
              "Noor’s question",
              "concerned steering straight"
            ],
            [
              "Jo’s preparations",
              "included weather and life jackets"
            ]
          ],
          "options": [
            "included weather and life jackets",
            "concerned steering straight",
            "centred on a long trip"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli’s imagined story centred on a long trip",
            "Noor’s question concerned steering straight",
            "Jo’s preparations included weather and life jackets"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On Jo’s map, a blue line curved across the lake to a distant point and back. Eli traced it twice, imagining the story he would tell about their long canoe {{c0}}.",
            "Noor was less interested in distance. She watched a leaf drift beside the dock and wondered how two people could paddle on opposite sides without sending the canoe in {{c1}}.",
            "Jo checked the weather, their route, and the fit of each life jacket. She held the canoe steady while they boarded and placed their dry bag under a seat.",
            "Eli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need {{c2}}. Noor tightened her paddle grip and watched the {{c3}}."
          ],
          "parts": [
            "On Jo’s map, a blue line curved across the lake to a distant point and back. Eli traced it twice, imagining the story he would tell about their long canoe {{c0}}.\n\nNoor was less interested in distance. She watched a leaf drift beside the dock and wondered how two people could paddle on opposite sides without sending the canoe in {{c1}}.\n\nJo checked the weather, their route, and the fit of each life jacket. She held the canoe steady while they boarded and placed their dry bag under a seat.\n\nEli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need {{c2}}. Noor tightened her paddle grip and watched the {{c3}}."
          ],
          "columns": [
            "On Jo’s map, a blue line curved across the lake to a distant point and back. Eli traced it twice, imagining the story he would tell about their long canoe {{c0}}. Noor was less interested in distance. She watched a leaf drift beside the dock and wondered how two people could paddle on opposite sides without sending the canoe in {{c1}}.",
            "Jo checked the weather, their route, and the fit of each life jacket. She held the canoe steady while they boarded and placed their dry bag under a seat. Eli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need {{c2}}. Noor tightened her paddle grip and watched the {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "trip",
              "paragraph": 0,
              "prompt": "On Jo’s map, a blue line curved across the lake to a distant point and back. Eli traced it twice, imagining the story he would tell about their long canoe ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "circles",
              "paragraph": 1,
              "prompt": "Noor was less interested in distance. She watched a leaf drift beside the dock and wondered how two people could paddle on opposite sides without sending the canoe in ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "changing",
              "paragraph": 3,
              "prompt": "Eli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need ______. Noor tightened her paddle grip and watched the leaf."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "leaf",
              "paragraph": 3,
              "prompt": "Eli asked how soon they would reach the point. \"We will decide as we go,\" Jo said. He glanced at the clear sky. To him, the blue line looked like a promise, rather than a plan that might need changing. Noor tightened her paddle grip and watched the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "leaf"
            },
            {
              "id": "w2",
              "word": "changing"
            },
            {
              "id": "w1",
              "word": "circles"
            },
            {
              "id": "w0",
              "word": "trip"
            }
          ]
        }
      },
      {
        "text": [
          "While Jo held the canoe beside the dock, the children checked where their belongings would stay. The map and notebook went inside the dry bag, where a splash would not spoil their pages.",
          "Eli offered to remember every part of the route. Noor asked whether one person should really have to remember everything. Jo suggested that shared responsibility began with making the plan clear to both paddlers.",
          "They agreed that nobody would stand to search for equipment while the canoe was moving. If they needed something, they would ask Jo and wait for her instructions.",
          "The arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a question. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first stroke."
        ],
        "mc": [
          {
            "prompt": "Why do the map and notebook go in the dry bag?",
            "choices": [
              "To hide the route from Jo",
              "To replace the paddles",
              "To protect their pages from splashes",
              "To make the canoe faster"
            ],
            "answer": 2,
            "skill": "Connect a tool to its purpose",
            "evidence": "a splash would not spoil their pages"
          },
          {
            "prompt": "What does Noor question about Eli’s offer?",
            "choices": [
              "Whether Jo knows where the dock is",
              "Whether one person should remember the whole plan",
              "Whether the lake has a shore",
              "Whether the notebook has enough pictures"
            ],
            "answer": 1,
            "skill": "Interpret a response",
            "evidence": "one person should really have to remember everything"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The dry bag",
              "protected the paper records"
            ],
            [
              "Both paddlers",
              "needed to understand the plan"
            ],
            [
              "A question about equipment",
              "was something to ask Jo"
            ]
          ],
          "options": [
            "was something to ask Jo",
            "needed to understand the plan",
            "protected the paper records"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The dry bag protected the paper records",
            "Both paddlers needed to understand the plan",
            "A question about equipment was something to ask Jo"
          ]
        },
        "cloze": {
          "paragraphs": [
            "While Jo held the canoe beside the dock, the children checked where their belongings would stay. The map and notebook went inside the dry {{c0}}, where a splash would not spoil their pages.",
            "Eli offered to remember every part of the route. Noor asked whether one person should really have to remember everything. Jo suggested that shared responsibility began with making the plan clear to both {{c1}}.",
            "They agreed that nobody would stand to search for equipment while the canoe was moving. If they needed something, they would ask Jo and wait for her instructions.",
            "The arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a {{c2}}. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first {{c3}}."
          ],
          "parts": [
            "While Jo held the canoe beside the dock, the children checked where their belongings would stay. The map and notebook went inside the dry {{c0}}, where a splash would not spoil their pages.\n\nEli offered to remember every part of the route. Noor asked whether one person should really have to remember everything. Jo suggested that shared responsibility began with making the plan clear to both {{c1}}.\n\nThey agreed that nobody would stand to search for equipment while the canoe was moving. If they needed something, they would ask Jo and wait for her instructions.\n\nThe arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a {{c2}}. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first {{c3}}."
          ],
          "columns": [
            "While Jo held the canoe beside the dock, the children checked where their belongings would stay. The map and notebook went inside the dry {{c0}}, where a splash would not spoil their pages. Eli offered to remember every part of the route. Noor asked whether one person should really have to remember everything. Jo suggested that shared responsibility began with making the plan clear to both {{c1}}.",
            "They agreed that nobody would stand to search for equipment while the canoe was moving. If they needed something, they would ask Jo and wait for her instructions. The arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a {{c2}}. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "bag",
              "paragraph": 0,
              "prompt": "While Jo held the canoe beside the dock, the children checked where their belongings would stay. The map and notebook went inside the dry ______, where a splash would not spoil their pages."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "paddlers",
              "paragraph": 1,
              "prompt": "Eli offered to remember every part of the route. Noor asked whether one person should really have to remember everything. Jo suggested that shared responsibility began with making the plan clear to both ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "question",
              "paragraph": 3,
              "prompt": "The arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a ______. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first stroke."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "stroke",
              "paragraph": 3,
              "prompt": "The arrangement sounded less adventurous than Eli’s imagined crossing, but Noor found it reassuring. She knew where the bag was and what to do if she had a question. Eli looked again at the blue route, beginning to realise that a journey included small decisions before its first ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "stroke"
            },
            {
              "id": "w2",
              "word": "question"
            },
            {
              "id": "w1",
              "word": "paddlers"
            },
            {
              "id": "w0",
              "word": "bag"
            }
          ]
        }
      },
      {
        "text": [
          "Jo guided the canoe a short distance from the dock while the children kept their paddles still. Noor watched the familiar boards become a smaller shape against the shore.",
          "From this angle, the path behind the dock was partly hidden by a tree. Eli checked the map, surprised that a place could look different without having moved.",
          "Jo asked them to notice a group of tall pines and the pale roof of the boathouse. These landmarks could help them recognise the place when they returned from another direction.",
          "Noor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every detail. Soon they would add their own paddle strokes to the canoe’s movement."
        ],
        "mc": [
          {
            "prompt": "Why does the path look different from the canoe?",
            "choices": [
              "The children have reached a new lake.",
              "Their viewing position has changed.",
              "Someone has moved the dock.",
              "The map has changed the shore."
            ],
            "answer": 1,
            "skill": "Explain a difference in perspective",
            "evidence": "From this angle"
          },
          {
            "prompt": "How can the pines and roof help later?",
            "choices": [
              "They can be recognised as landmarks on the return.",
              "They can stop every breeze.",
              "They can replace Jo’s guidance.",
              "They can tell the exact depth of the lake."
            ],
            "answer": 0,
            "skill": "Infer the use of a detail",
            "evidence": "recognise the place when they returned"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The tree",
              "hid part of the path"
            ],
            [
              "The pines and roof",
              "were useful landmarks"
            ],
            [
              "The map and view",
              "showed different kinds of detail"
            ]
          ],
          "options": [
            "showed different kinds of detail",
            "were useful landmarks",
            "hid part of the path"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The tree hid part of the path",
            "The pines and roof were useful landmarks",
            "The map and view showed different kinds of detail"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Jo guided the canoe a short distance from the {{c0}} while the children kept their paddles still. Noor watched the familiar boards become a smaller shape against the shore.",
            "From this angle, the path behind the dock was partly hidden by a tree. Eli checked the map, surprised that a place could look different without having moved.",
            "Jo asked them to notice a group of tall pines and the pale roof of the boathouse. These landmarks could help them recognise the place when they returned from another {{c1}}.",
            "Noor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every {{c2}}. Soon they would add their own paddle strokes to the canoe’s {{c3}}."
          ],
          "parts": [
            "Jo guided the canoe a short distance from the {{c0}} while the children kept their paddles still. Noor watched the familiar boards become a smaller shape against the shore.\n\nFrom this angle, the path behind the dock was partly hidden by a tree. Eli checked the map, surprised that a place could look different without having moved.\n\nJo asked them to notice a group of tall pines and the pale roof of the boathouse. These landmarks could help them recognise the place when they returned from another {{c1}}.\n\nNoor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every {{c2}}. Soon they would add their own paddle strokes to the canoe’s {{c3}}."
          ],
          "columns": [
            "Jo guided the canoe a short distance from the {{c0}} while the children kept their paddles still. Noor watched the familiar boards become a smaller shape against the shore. From this angle, the path behind the dock was partly hidden by a tree. Eli checked the map, surprised that a place could look different without having moved.",
            "Jo asked them to notice a group of tall pines and the pale roof of the boathouse. These landmarks could help them recognise the place when they returned from another {{c1}}. Noor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every {{c2}}. Soon they would add their own paddle strokes to the canoe’s {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "Jo guided the canoe a short distance from the ______ while the children kept their paddles still. Noor watched the familiar boards become a smaller shape against the shore."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "direction",
              "paragraph": 2,
              "prompt": "Jo asked them to notice a group of tall pines and the pale roof of the boathouse. These landmarks could help them recognise the place when they returned from another ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "detail",
              "paragraph": 3,
              "prompt": "Noor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every ______. Soon they would add their own paddle strokes to the canoe’s movement."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "movement",
              "paragraph": 3,
              "prompt": "Noor described what she could see instead of guessing what lay behind the tree. Eli found the same area on the map. They were learning to connect a view with a drawing, while accepting that neither showed every detail. Soon they would add their own paddle strokes to the canoe’s ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "movement"
            },
            {
              "id": "w2",
              "word": "detail"
            },
            {
              "id": "w1",
              "word": "direction"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      },
      {
        "text": [
          "Noor’s first strokes were quick and shallow. Eli’s were slower and deeper. The canoe described a gentle curve towards the reeds, and both children blamed the other’s side.",
          "Jo asked them to stop paddling while she held their direction. Then she counted a measured beat: dip, pull, lift. The children listened and matched their movements.",
          "The canoe settled into a smoother rhythm. Noor discovered that the splash beside her and the splash across from her could become parts of the same pattern.",
          "Eli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to notice and respond."
        ],
        "mc": [
          {
            "prompt": "Why does Eli adjust his stroke without being asked?",
            "choices": [
              "Jo has stopped counting forever.",
              "He has reached the dock.",
              "He notices that his change disrupts their shared rhythm.",
              "He wants to lose his paddle."
            ],
            "answer": 2,
            "skill": "Infer from an action",
            "evidence": "felt the rhythm falter"
          },
          {
            "prompt": "What larger idea does the paddling problem develop?",
            "choices": [
              "A map makes communication unnecessary.",
              "Cooperation requires attention and adjustment.",
              "The strongest person should make every decision.",
              "Disagreement always ends a trip."
            ],
            "answer": 1,
            "skill": "Explain a theme",
            "evidence": "willing to notice and respond"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The early curve",
              "followed mismatched strokes"
            ],
            [
              "Jo’s measured beat",
              "offered a shared pattern"
            ],
            [
              "Eli’s adjustment",
              "helped restore the rhythm"
            ]
          ],
          "options": [
            "helped restore the rhythm",
            "offered a shared pattern",
            "followed mismatched strokes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The early curve followed mismatched strokes",
            "Jo’s measured beat offered a shared pattern",
            "Eli’s adjustment helped restore the rhythm"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Noor’s first strokes were quick and shallow. Eli’s were slower and deeper. The canoe described a gentle curve towards the {{c0}}, and both children blamed the other’s side.",
            "Jo asked them to stop paddling while she held their direction. Then she counted a measured beat: dip, pull, lift. The children listened and matched their movements.",
            "The canoe settled into a smoother {{c1}}. Noor discovered that the splash beside her and the splash across from her could become parts of the same pattern.",
            "Eli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to {{c2}} and {{c3}}."
          ],
          "parts": [
            "Noor’s first strokes were quick and shallow. Eli’s were slower and deeper. The canoe described a gentle curve towards the {{c0}}, and both children blamed the other’s side.\n\nJo asked them to stop paddling while she held their direction. Then she counted a measured beat: dip, pull, lift. The children listened and matched their movements.\n\nThe canoe settled into a smoother {{c1}}. Noor discovered that the splash beside her and the splash across from her could become parts of the same pattern.\n\nEli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to {{c2}} and {{c3}}."
          ],
          "columns": [
            "Noor’s first strokes were quick and shallow. Eli’s were slower and deeper. The canoe described a gentle curve towards the {{c0}}, and both children blamed the other’s side. Jo asked them to stop paddling while she held their direction. Then she counted a measured beat: dip, pull, lift. The children listened and matched their movements.",
            "The canoe settled into a smoother {{c1}}. Noor discovered that the splash beside her and the splash across from her could become parts of the same pattern. Eli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to {{c2}} and {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "reeds",
              "paragraph": 0,
              "prompt": "Noor’s first strokes were quick and shallow. Eli’s were slower and deeper. The canoe described a gentle curve towards the ______, and both children blamed the other’s side."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rhythm",
              "paragraph": 2,
              "prompt": "The canoe settled into a smoother ______. Noor discovered that the splash beside her and the splash across from her could become parts of the same pattern."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "notice",
              "paragraph": 3,
              "prompt": "Eli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to ______ and respond."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "respond",
              "paragraph": 3,
              "prompt": "Eli tried to lengthen a stroke to gain speed, but felt the rhythm falter. This time he adjusted without being asked. A straight course, Noor realised, depended less on either person proving they were right than on both being willing to notice and ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "respond"
            },
            {
              "id": "w2",
              "word": "notice"
            },
            {
              "id": "w1",
              "word": "rhythm"
            },
            {
              "id": "w0",
              "word": "reeds"
            }
          ]
        }
      },
      {
        "text": [
          "With their paddles moving together, the children had room to notice more than their own hands. Noor could hear Eli’s splash and feel when their shared pattern began to drift.",
          "Once, she hurried a stroke to avoid a floating leaf. The rhythm faltered. She slowed the next stroke, and Eli matched the change without turning it into a disagreement.",
          "Jo reminded them that listening did not mean repeating a count without thinking. They still needed to notice the water, their partner, and the direction of the canoe.",
          "Eli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children respond; it was not a rule that prevented them from noticing."
        ],
        "mc": [
          {
            "prompt": "What does Noor do after hurrying a stroke?",
            "choices": [
              "She asks Eli to stop listening.",
              "She drops her paddle.",
              "She tells Jo to return immediately.",
              "She slows the next stroke to restore the rhythm."
            ],
            "answer": 3,
            "skill": "Follow cause and response",
            "evidence": "She slowed the next stroke"
          },
          {
            "prompt": "How is rhythm described as useful?",
            "choices": [
              "It proves that strength never matters.",
              "It gives one paddler control of every decision.",
              "It supports attention and adjustment.",
              "It removes the need to notice the water."
            ],
            "answer": 2,
            "skill": "Explain an idea",
            "evidence": "helped both children respond"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Noor’s quicker stroke",
              "briefly changed the rhythm"
            ],
            [
              "Eli’s matching response",
              "helped them work together"
            ],
            [
              "Jo’s reminder",
              "was to keep noticing"
            ]
          ],
          "options": [
            "was to keep noticing",
            "helped them work together",
            "briefly changed the rhythm"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Noor’s quicker stroke briefly changed the rhythm",
            "Eli’s matching response helped them work together",
            "Jo’s reminder was to keep noticing"
          ]
        },
        "cloze": {
          "paragraphs": [
            "With their paddles moving together, the children had room to notice more than their own {{c0}}. Noor could hear Eli’s splash and feel when their shared pattern began to drift.",
            "Once, she hurried a stroke to avoid a floating leaf. The rhythm faltered. She slowed the next stroke, and Eli matched the change without turning it into a disagreement.",
            "Jo reminded them that listening did not mean repeating a count without thinking. They still needed to notice the water, their partner, and the direction of the {{c1}}.",
            "Eli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children {{c2}}; it was not a rule that prevented them from {{c3}}."
          ],
          "parts": [
            "With their paddles moving together, the children had room to notice more than their own {{c0}}. Noor could hear Eli’s splash and feel when their shared pattern began to drift.\n\nOnce, she hurried a stroke to avoid a floating leaf. The rhythm faltered. She slowed the next stroke, and Eli matched the change without turning it into a disagreement.\n\nJo reminded them that listening did not mean repeating a count without thinking. They still needed to notice the water, their partner, and the direction of the {{c1}}.\n\nEli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children {{c2}}; it was not a rule that prevented them from {{c3}}."
          ],
          "columns": [
            "With their paddles moving together, the children had room to notice more than their own {{c0}}. Noor could hear Eli’s splash and feel when their shared pattern began to drift. Once, she hurried a stroke to avoid a floating leaf. The rhythm faltered. She slowed the next stroke, and Eli matched the change without turning it into a disagreement.",
            "Jo reminded them that listening did not mean repeating a count without thinking. They still needed to notice the water, their partner, and the direction of the {{c1}}. Eli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children {{c2}}; it was not a rule that prevented them from {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hands",
              "paragraph": 0,
              "prompt": "With their paddles moving together, the children had room to notice more than their own ______. Noor could hear Eli’s splash and feel when their shared pattern began to drift."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "canoe",
              "paragraph": 2,
              "prompt": "Jo reminded them that listening did not mean repeating a count without thinking. They still needed to notice the water, their partner, and the direction of the ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "respond",
              "paragraph": 3,
              "prompt": "Eli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children ______; it was not a rule that prevented them from noticing."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "noticing",
              "paragraph": 3,
              "prompt": "Eli had imagined strength doing most of the work. Now a small adjustment seemed just as important. He began to understand why Jo had asked them to practise a pattern rather than simply paddle harder. A useful rhythm helped both children respond; it was not a rule that prevented them from ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "noticing"
            },
            {
              "id": "w2",
              "word": "respond"
            },
            {
              "id": "w1",
              "word": "canoe"
            },
            {
              "id": "w0",
              "word": "hands"
            }
          ]
        }
      },
      {
        "text": [
          "At a calm stretch, Jo asked Eli to point out the distant point on the map. He found it quickly and traced the route with his finger.",
          "Noor asked whether the drawing could tell them what the water would be like when they arrived. Eli looked for a symbol that might answer, then stopped searching.",
          "The map showed places and a possible route. Their observations would have to tell them about conditions during the trip. Jo checked the shore while the children discussed the difference.",
          "Eli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to think. Noor watched the water, ready to notice what might change."
        ],
        "mc": [
          {
            "prompt": "What can the map not settle for them?",
            "choices": [
              "The shape of the marked route",
              "The location shown for the dock",
              "The conditions they will meet during the trip",
              "The position of the distant point"
            ],
            "answer": 2,
            "skill": "Distinguish kinds of information",
            "evidence": "observations would have to tell them about conditions"
          },
          {
            "prompt": "What does Eli begin to understand?",
            "choices": [
              "Noor does not want to learn the route.",
              "A plan still requires decisions based on observations.",
              "A map makes every decision in advance.",
              "The point has disappeared from the lake."
            ],
            "answer": 1,
            "skill": "Explain a developing understanding",
            "evidence": "did not relieve them of the need to think"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The map",
              "showed places and a possible route"
            ],
            [
              "Their observations",
              "described current conditions"
            ],
            [
              "The blue line",
              "could not replace thinking"
            ]
          ],
          "options": [
            "could not replace thinking",
            "described current conditions",
            "showed places and a possible route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The map showed places and a possible route",
            "Their observations described current conditions",
            "The blue line could not replace thinking"
          ]
        },
        "cloze": {
          "paragraphs": [
            "At a calm stretch, Jo asked Eli to point out the distant {{c0}} on the map. He found it quickly and traced the route with his finger.",
            "Noor asked whether the drawing could tell them what the water would be like when they arrived. Eli looked for a symbol that might answer, then stopped searching.",
            "The map showed places and a possible route. Their observations would have to tell them about conditions during the {{c1}}. Jo checked the shore while the children discussed the difference.",
            "Eli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to {{c2}}. Noor watched the water, ready to notice what might {{c3}}."
          ],
          "parts": [
            "At a calm stretch, Jo asked Eli to point out the distant {{c0}} on the map. He found it quickly and traced the route with his finger.\n\nNoor asked whether the drawing could tell them what the water would be like when they arrived. Eli looked for a symbol that might answer, then stopped searching.\n\nThe map showed places and a possible route. Their observations would have to tell them about conditions during the {{c1}}. Jo checked the shore while the children discussed the difference.\n\nEli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to {{c2}}. Noor watched the water, ready to notice what might {{c3}}."
          ],
          "columns": [
            "At a calm stretch, Jo asked Eli to point out the distant {{c0}} on the map. He found it quickly and traced the route with his finger. Noor asked whether the drawing could tell them what the water would be like when they arrived. Eli looked for a symbol that might answer, then stopped searching.",
            "The map showed places and a possible route. Their observations would have to tell them about conditions during the {{c1}}. Jo checked the shore while the children discussed the difference. Eli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to {{c2}}. Noor watched the water, ready to notice what might {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "point",
              "paragraph": 0,
              "prompt": "At a calm stretch, Jo asked Eli to point out the distant ______ on the map. He found it quickly and traced the route with his finger."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "trip",
              "paragraph": 2,
              "prompt": "The map showed places and a possible route. Their observations would have to tell them about conditions during the ______. Jo checked the shore while the children discussed the difference."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "think",
              "paragraph": 3,
              "prompt": "Eli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to ______. Noor watched the water, ready to notice what might change."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "change",
              "paragraph": 3,
              "prompt": "Eli put the map safely away. He still wanted to reach the point, but could see that reading the route and reading the situation were different jobs. The blue line offered a plan; it did not relieve them of the need to think. Noor watched the water, ready to notice what might ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "change"
            },
            {
              "id": "w2",
              "word": "think"
            },
            {
              "id": "w1",
              "word": "trip"
            },
            {
              "id": "w0",
              "word": "point"
            }
          ]
        }
      },
      {
        "text": [
          "The breeze arrived as a scattering of darker wrinkles across the lake. Jo watched them, checked the shoreline, and turned towards a sheltered bay.",
          "Eli looked back at the distant point. \"But the map goes there,\" he said. Jo explained that their route had been a plan for calm conditions, not an instruction to ignore a changing wind.",
          "For a while, Eli paddled silently. Then Noor pointed to a duck threading between the reeds. The bay held details the open water had hidden: widening rings, pale stems, and the soft click of paddle against gunwale.",
          "They kept well back from the bird. As Eli watched, his disappointment loosened into curiosity. The blue line on the map had become shorter, but the trip itself seemed to be getting larger."
        ],
        "mc": [
          {
            "prompt": "Why does Jo choose the sheltered bay?",
            "choices": [
              "The life jackets have become too small.",
              "The wind is changing the conditions on the open lake.",
              "The map orders her to stop there.",
              "The duck has called to the children."
            ],
            "answer": 1,
            "skill": "Use cause and effect",
            "evidence": "a changing wind"
          },
          {
            "prompt": "How can the trip get “larger” as the route gets shorter?",
            "choices": [
              "They notice more and gain a richer experience.",
              "The canoe physically grows.",
              "The lake becomes deeper everywhere.",
              "The map changes its scale."
            ],
            "answer": 0,
            "skill": "Interpret figurative language",
            "evidence": "disappointment loosened into curiosity"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The darker wrinkles",
              "signalled a breeze"
            ],
            [
              "The sheltered water",
              "revealed quieter details"
            ],
            [
              "Eli’s changing response",
              "moved towards curiosity"
            ]
          ],
          "options": [
            "moved towards curiosity",
            "revealed quieter details",
            "signalled a breeze"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The darker wrinkles signalled a breeze",
            "The sheltered water revealed quieter details",
            "Eli’s changing response moved towards curiosity"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The breeze arrived as a scattering of darker wrinkles across the lake. Jo watched them, checked the shoreline, and turned towards a sheltered {{c0}}.",
            "Eli looked back at the distant point. \"But the map goes there,\" he said. Jo explained that their route had been a plan for calm conditions, not an instruction to ignore a changing {{c1}}.",
            "For a while, Eli paddled silently. Then Noor pointed to a duck threading between the reeds. The bay held details the open water had hidden: widening rings, pale stems, and the soft click of paddle against {{c2}}.",
            "They kept well back from the bird. As Eli watched, his disappointment loosened into curiosity. The blue line on the map had become shorter, but the trip itself seemed to be getting {{c3}}."
          ],
          "parts": [
            "The breeze arrived as a scattering of darker wrinkles across the lake. Jo watched them, checked the shoreline, and turned towards a sheltered {{c0}}.\n\nEli looked back at the distant point. \"But the map goes there,\" he said. Jo explained that their route had been a plan for calm conditions, not an instruction to ignore a changing {{c1}}.\n\nFor a while, Eli paddled silently. Then Noor pointed to a duck threading between the reeds. The bay held details the open water had hidden: widening rings, pale stems, and the soft click of paddle against {{c2}}.\n\nThey kept well back from the bird. As Eli watched, his disappointment loosened into curiosity. The blue line on the map had become shorter, but the trip itself seemed to be getting {{c3}}."
          ],
          "columns": [
            "The breeze arrived as a scattering of darker wrinkles across the lake. Jo watched them, checked the shoreline, and turned towards a sheltered {{c0}}. Eli looked back at the distant point. \"But the map goes there,\" he said. Jo explained that their route had been a plan for calm conditions, not an instruction to ignore a changing {{c1}}.",
            "For a while, Eli paddled silently. Then Noor pointed to a duck threading between the reeds. The bay held details the open water had hidden: widening rings, pale stems, and the soft click of paddle against {{c2}}. They kept well back from the bird. As Eli watched, his disappointment loosened into curiosity. The blue line on the map had become shorter, but the trip itself seemed to be getting {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "bay",
              "paragraph": 0,
              "prompt": "The breeze arrived as a scattering of darker wrinkles across the lake. Jo watched them, checked the shoreline, and turned towards a sheltered ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wind",
              "paragraph": 1,
              "prompt": "Eli looked back at the distant point. \"But the map goes there,\" he said. Jo explained that their route had been a plan for calm conditions, not an instruction to ignore a changing ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "gunwale",
              "paragraph": 2,
              "prompt": "For a while, Eli paddled silently. Then Noor pointed to a duck threading between the reeds. The bay held details the open water had hidden: widening rings, pale stems, and the soft click of paddle against ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "larger",
              "paragraph": 3,
              "prompt": "They kept well back from the bird. As Eli watched, his disappointment loosened into curiosity. The blue line on the map had become shorter, but the trip itself seemed to be getting ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "larger"
            },
            {
              "id": "w2",
              "word": "gunwale"
            },
            {
              "id": "w1",
              "word": "wind"
            },
            {
              "id": "w0",
              "word": "bay"
            }
          ]
        }
      },
      {
        "text": [
          "The sheltered bay seemed quieter each time the children stopped trying to fill it with their own voices. They watched the duck from a distance, leaving it room to move between the reeds.",
          "Noor noticed rings spreading behind the bird. Eli noticed pale stems below the surface and a reflection that broke apart when the water moved.",
          "They described these details to each other without deciding that either view was the complete one. From their different seats, they could not see exactly the same things.",
          "Jo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of distance: room between their first expectations and what they were now ready to notice."
        ],
        "mc": [
          {
            "prompt": "Why do the children keep their distance from the duck?",
            "choices": [
              "To leave it room to move",
              "To make it follow their canoe",
              "To reach the point more quickly",
              "To hide the paddles from Jo"
            ],
            "answer": 0,
            "skill": "Infer a purpose",
            "evidence": "leaving it room to move"
          },
          {
            "prompt": "Why are their descriptions different?",
            "choices": [
              "One child is inventing every detail.",
              "The bay changes whenever they speak.",
              "The map tells them to disagree.",
              "Their seats give them different views."
            ],
            "answer": 3,
            "skill": "Compare perspectives",
            "evidence": "From their different seats"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Noor noticed",
              "rings behind the duck"
            ],
            [
              "Eli noticed",
              "pale stems and a changing reflection"
            ],
            [
              "Jo allowed",
              "time to observe quietly"
            ]
          ],
          "options": [
            "time to observe quietly",
            "pale stems and a changing reflection",
            "rings behind the duck"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Noor noticed rings behind the duck",
            "Eli noticed pale stems and a changing reflection",
            "Jo allowed time to observe quietly"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The sheltered {{c0}} seemed quieter each time the children stopped trying to fill it with their own voices. They watched the duck from a distance, leaving it room to move between the reeds.",
            "Noor noticed rings spreading behind the bird. Eli noticed pale stems below the surface and a reflection that broke apart when the water moved.",
            "They described these details to each other without deciding that either view was the complete one. From their different seats, they could not see exactly the same {{c1}}.",
            "Jo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of {{c2}}: room between their first expectations and what they were now ready to {{c3}}."
          ],
          "parts": [
            "The sheltered {{c0}} seemed quieter each time the children stopped trying to fill it with their own voices. They watched the duck from a distance, leaving it room to move between the reeds.\n\nNoor noticed rings spreading behind the bird. Eli noticed pale stems below the surface and a reflection that broke apart when the water moved.\n\nThey described these details to each other without deciding that either view was the complete one. From their different seats, they could not see exactly the same {{c1}}.\n\nJo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of {{c2}}: room between their first expectations and what they were now ready to {{c3}}."
          ],
          "columns": [
            "The sheltered {{c0}} seemed quieter each time the children stopped trying to fill it with their own voices. They watched the duck from a distance, leaving it room to move between the reeds. Noor noticed rings spreading behind the bird. Eli noticed pale stems below the surface and a reflection that broke apart when the water moved.",
            "They described these details to each other without deciding that either view was the complete one. From their different seats, they could not see exactly the same {{c1}}. Jo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of {{c2}}: room between their first expectations and what they were now ready to {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "bay",
              "paragraph": 0,
              "prompt": "The sheltered ______ seemed quieter each time the children stopped trying to fill it with their own voices. They watched the duck from a distance, leaving it room to move between the reeds."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "things",
              "paragraph": 2,
              "prompt": "They described these details to each other without deciding that either view was the complete one. From their different seats, they could not see exactly the same ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "distance",
              "paragraph": 3,
              "prompt": "Jo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of ______: room between their first expectations and what they were now ready to notice."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "notice",
              "paragraph": 3,
              "prompt": "Jo gave them time to look before guiding them onward. Eli tried to remember how disappointed he had been about the shorter route. He still understood the feeling, but it no longer explained the whole experience. The quiet water had offered a different kind of distance: room between their first expectations and what they were now ready to ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "notice"
            },
            {
              "id": "w2",
              "word": "distance"
            },
            {
              "id": "w1",
              "word": "things"
            },
            {
              "id": "w0",
              "word": "bay"
            }
          ]
        }
      },
      {
        "text": [
          "Before they turned for the dock, Jo reviewed the return route along the sheltered shore. Eli followed it on the map, then asked Noor which landmarks she remembered.",
          "She described the tall pines and pale boathouse roof. Eli added the partly hidden path, recognising a place that had looked unfamiliar when they first left it.",
          "They agreed to keep the same steady paddling rhythm. This time Eli offered to count, while Noor listened and matched his pace. Their different jobs would support the same direction.",
          "As they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good trip. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely home."
        ],
        "mc": [
          {
            "prompt": "Which landmarks help the children recognise the dock area?",
            "choices": [
              "A red race flag and a log",
              "A stone bridge and a tower",
              "A blue car and a tunnel",
              "The pines and pale boathouse roof"
            ],
            "answer": 3,
            "skill": "Recall relevant details",
            "evidence": "tall pines and pale boathouse roof"
          },
          {
            "prompt": "How does Eli’s attitude to the point change?",
            "choices": [
              "He decides that maps are useless.",
              "He wants Noor to return alone.",
              "It remains interesting without defining the whole trip.",
              "He believes it has moved closer."
            ],
            "answer": 2,
            "skill": "Trace a change in viewpoint",
            "evidence": "no longer felt like the only possible ending"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Jo reviewed",
              "the sheltered return route"
            ],
            [
              "Eli’s counting",
              "supported their shared rhythm"
            ],
            [
              "The distant point",
              "remained a possible future goal"
            ]
          ],
          "options": [
            "remained a possible future goal",
            "supported their shared rhythm",
            "the sheltered return route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo reviewed the sheltered return route",
            "Eli’s counting supported their shared rhythm",
            "The distant point remained a possible future goal"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Before they turned for the dock, Jo reviewed the return route along the sheltered {{c0}}. Eli followed it on the map, then asked Noor which landmarks she remembered.",
            "She described the tall pines and pale boathouse roof. Eli added the partly hidden path, recognising a place that had looked unfamiliar when they first left it.",
            "They agreed to keep the same steady paddling rhythm. This time Eli offered to count, while Noor listened and matched his pace. Their different jobs would support the same {{c1}}.",
            "As they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good {{c2}}. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely {{c3}}."
          ],
          "parts": [
            "Before they turned for the dock, Jo reviewed the return route along the sheltered {{c0}}. Eli followed it on the map, then asked Noor which landmarks she remembered.\n\nShe described the tall pines and pale boathouse roof. Eli added the partly hidden path, recognising a place that had looked unfamiliar when they first left it.\n\nThey agreed to keep the same steady paddling rhythm. This time Eli offered to count, while Noor listened and matched his pace. Their different jobs would support the same {{c1}}.\n\nAs they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good {{c2}}. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely {{c3}}."
          ],
          "columns": [
            "Before they turned for the dock, Jo reviewed the return route along the sheltered {{c0}}. Eli followed it on the map, then asked Noor which landmarks she remembered. She described the tall pines and pale boathouse roof. Eli added the partly hidden path, recognising a place that had looked unfamiliar when they first left it.",
            "They agreed to keep the same steady paddling rhythm. This time Eli offered to count, while Noor listened and matched his pace. Their different jobs would support the same {{c1}}. As they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good {{c2}}. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "shore",
              "paragraph": 0,
              "prompt": "Before they turned for the dock, Jo reviewed the return route along the sheltered ______. Eli followed it on the map, then asked Noor which landmarks she remembered."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "direction",
              "paragraph": 2,
              "prompt": "They agreed to keep the same steady paddling rhythm. This time Eli offered to count, while Noor listened and matched his pace. Their different jobs would support the same ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "trip",
              "paragraph": 3,
              "prompt": "As they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good ______. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely home."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "home",
              "paragraph": 3,
              "prompt": "As they began the return, the distant point remained across the lake. It had not stopped being interesting, but it no longer felt like the only possible ending to a good trip. Eli watched for the first familiar landmark and counted the next stroke, ready to help bring their shared experience safely ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "home"
            },
            {
              "id": "w2",
              "word": "trip"
            },
            {
              "id": "w1",
              "word": "direction"
            },
            {
              "id": "w0",
              "word": "shore"
            }
          ]
        }
      },
      {
        "text": [
          "Eli counted their strokes on the way home. Noor matched the beat, and Jo guided the canoe along the sheltered shore to the dock. Everyone stayed seated until she gave the signal to step out, one at a time.",
          "After the paddles were put away, Eli opened the map. The distant point remained where it had always been. He drew a small circle around the bay, then wrote, \"Duck, reeds, one rhythm.\"",
          "Noor asked whether he would still tell people about their long trip. Eli considered the question. \"I will tell them about our good trip,\" he said.",
          "They had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s view. The shorter blue line had carried more than distance."
        ],
        "mc": [
          {
            "prompt": "What does Eli’s note on the map show?",
            "choices": [
              "He values the discoveries and shared experience.",
              "He wants to erase the whole lake.",
              "He thinks they reached the distant point.",
              "He has forgotten the duck."
            ],
            "answer": 0,
            "skill": "Interpret a symbolic action",
            "evidence": "Duck, reeds, one rhythm"
          },
          {
            "prompt": "Which statement best describes Eli’s change?",
            "choices": [
              "He no longer wants to go canoeing.",
              "He believes plans should never change.",
              "He thinks Noor’s ideas are unimportant.",
              "He judges a trip by more than the distance travelled."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "our good trip"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The distant point",
              "remained a possible future goal"
            ],
            [
              "The note in the bay",
              "recorded meaningful discoveries"
            ],
            [
              "The story Eli would tell",
              "included another person’s view"
            ]
          ],
          "options": [
            "included another person’s view",
            "recorded meaningful discoveries",
            "remained a possible future goal"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The distant point remained a possible future goal",
            "The note in the bay recorded meaningful discoveries",
            "The story Eli would tell included another person’s view"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Eli counted their strokes on the way home. Noor matched the beat, and Jo guided the canoe along the sheltered shore to the {{c0}}. Everyone stayed seated until she gave the signal to step out, one at a time.",
            "After the paddles were put away, Eli opened the map. The distant point remained where it had always been. He drew a small circle around the bay, then wrote, \"Duck, reeds, one {{c1}}.\"",
            "Noor asked whether he would still tell people about their long trip. Eli considered the question. \"I will tell them about our good trip,\" he said.",
            "They had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s {{c2}}. The shorter blue line had carried more than {{c3}}."
          ],
          "parts": [
            "Eli counted their strokes on the way home. Noor matched the beat, and Jo guided the canoe along the sheltered shore to the {{c0}}. Everyone stayed seated until she gave the signal to step out, one at a time.\n\nAfter the paddles were put away, Eli opened the map. The distant point remained where it had always been. He drew a small circle around the bay, then wrote, \"Duck, reeds, one {{c1}}.\"\n\nNoor asked whether he would still tell people about their long trip. Eli considered the question. \"I will tell them about our good trip,\" he said.\n\nThey had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s {{c2}}. The shorter blue line had carried more than {{c3}}."
          ],
          "columns": [
            "Eli counted their strokes on the way home. Noor matched the beat, and Jo guided the canoe along the sheltered shore to the {{c0}}. Everyone stayed seated until she gave the signal to step out, one at a time. After the paddles were put away, Eli opened the map. The distant point remained where it had always been. He drew a small circle around the bay, then wrote, \"Duck, reeds, one {{c1}}.\"",
            "Noor asked whether he would still tell people about their long trip. Eli considered the question. \"I will tell them about our good trip,\" he said. They had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s {{c2}}. The shorter blue line had carried more than {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "Eli counted their strokes on the way home. Noor matched the beat, and Jo guided the canoe along the sheltered shore to the ______. Everyone stayed seated until she gave the signal to step out, one at a time."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rhythm",
              "paragraph": 1,
              "prompt": "After the paddles were put away, Eli opened the map. The distant point remained where it had always been. He drew a small circle around the bay, then wrote, \"Duck, reeds, one ______.\""
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "view",
              "paragraph": 3,
              "prompt": "They had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s ______. The shorter blue line had carried more than distance."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "distance",
              "paragraph": 3,
              "prompt": "They had not travelled as far as he had imagined, and the point was still a possible goal for another day. Yet he now had a story that included decisions, discoveries, and another person’s view. The shorter blue line had carried more than ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "distance"
            },
            {
              "id": "w2",
              "word": "view"
            },
            {
              "id": "w1",
              "word": "rhythm"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      }
    ],
    "intro": "1377 words · 10 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "R": {
    "grade": "F&P R target",
    "titles": [
      "The route in blue",
      "Two paddles, one direction",
      "A shorter line",
      "The story they brought back"
    ],
    "sections": [
      {
        "text": [
          "The blue route on Jo’s map looked reassuringly complete. It crossed the lake to a distant point, curved along the opposite shore, and returned to the dock without showing a single hesitation.",
          "Eli imagined describing that journey afterwards. Distance would make a simple story: they had travelled all the way to the point and back. Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding question. How could two paddlers, working on opposite sides, agree on a direction?",
          "Jo checked the weather, the route, and the fit of each life jacket. She steadied the canoe while they boarded and secured their small dry bag under a seat.",
          "When Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the leaf, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of journey."
        ],
        "mc": [
          {
            "prompt": "What limitation of the map is suggested in the opening?",
            "choices": [
              "The map has no connection to the lake.",
              "A printed line makes weather checks unnecessary.",
              "The map proves the canoe will travel in circles.",
              "A fixed route cannot show every changing condition."
            ],
            "answer": 3,
            "skill": "Interpret an implied contrast",
            "evidence": "the water it represented would not be"
          },
          {
            "prompt": "Why are Noor’s and Eli’s private thoughts included before they launch?",
            "choices": [
              "They reveal that Jo has already changed the route.",
              "They show that both children have the same goal.",
              "They establish different expectations that the trip will challenge.",
              "They explain why neither child wants to paddle."
            ],
            "answer": 2,
            "skill": "Analyse narrative preparation",
            "evidence": "imagining different kinds of journey"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Eli’s imagined story",
              "centred on a long trip"
            ],
            [
              "Noor’s question",
              "concerned steering straight"
            ],
            [
              "Jo’s preparations",
              "included weather and life jackets"
            ]
          ],
          "options": [
            "included weather and life jackets",
            "concerned steering straight",
            "centred on a long trip"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Eli’s imagined story centred on a long trip",
            "Noor’s question concerned steering straight",
            "Jo’s preparations included weather and life jackets"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The blue route on Jo’s map looked reassuringly complete. It crossed the lake to a distant point, curved along the opposite shore, and returned to the dock without showing a single {{c0}}.",
            "Eli imagined describing that journey afterwards. Distance would make a simple story: they had travelled all the way to the point and back. Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding question. How could two paddlers, working on opposite sides, agree on a {{c1}}?",
            "Jo checked the weather, the route, and the fit of each life jacket. She steadied the canoe while they boarded and secured their small dry {{c2}} under a seat.",
            "When Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the {{c3}}, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of {{c4}}."
          ],
          "parts": [
            "The blue route on Jo’s map looked reassuringly complete. It crossed the lake to a distant point, curved along the opposite shore, and returned to the dock without showing a single {{c0}}.\n\nEli imagined describing that journey afterwards. Distance would make a simple story: they had travelled all the way to the point and back. Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding question. How could two paddlers, working on opposite sides, agree on a {{c1}}?\n\nJo checked the weather, the route, and the fit of each life jacket. She steadied the canoe while they boarded and secured their small dry {{c2}} under a seat.\n\nWhen Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the {{c3}}, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of {{c4}}."
          ],
          "columns": [
            "The blue route on Jo’s map looked reassuringly complete. It crossed the lake to a distant point, curved along the opposite shore, and returned to the dock without showing a single {{c0}}. Eli imagined describing that journey afterwards. Distance would make a simple story: they had travelled all the way to the point and back. Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding question. How could two paddlers, working on opposite sides, agree on a {{c1}}?",
            "Jo checked the weather, the route, and the fit of each life jacket. She steadied the canoe while they boarded and secured their small dry {{c2}} under a seat. When Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the {{c3}}, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hesitation",
              "paragraph": 0,
              "prompt": "The blue route on Jo’s map looked reassuringly complete. It crossed the lake to a distant point, curved along the opposite shore, and returned to the dock without showing a single ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "direction",
              "paragraph": 1,
              "prompt": "Eli imagined describing that journey afterwards. Distance would make a simple story: they had travelled all the way to the point and back. Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding question. How could two paddlers, working on opposite sides, agree on a ______?"
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "bag",
              "paragraph": 2,
              "prompt": "Jo checked the weather, the route, and the fit of each life jacket. She steadied the canoe while they boarded and secured their small dry ______ under a seat."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "leaf",
              "paragraph": 3,
              "prompt": "When Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the ______, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of journey."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "journey",
              "paragraph": 3,
              "prompt": "When Eli asked about reaching the point, she answered that they would keep assessing the conditions. He heard caution where he had expected a timetable. The map’s line was fixed, but the water it represented would not be. Noor took her paddle and looked again at the leaf, which had turned once more while they were speaking. Both children were ready to begin, although they were imagining different kinds of ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "journey"
            },
            {
              "id": "w3",
              "word": "leaf"
            },
            {
              "id": "w2",
              "word": "bag"
            },
            {
              "id": "w1",
              "word": "direction"
            },
            {
              "id": "w0",
              "word": "hesitation"
            }
          ]
        }
      },
      {
        "text": [
          "The first bend in their course was not drawn on the map. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to do.",
          "Jo asked them to pause. While she maintained their direction, she counted a deliberate pattern: dip, pull, lift. The children matched it, and their separate splashes became parts of one repeating rhythm.",
          "Eli lengthened a stroke, hoping to add speed. He felt the pattern falter and shortened the next one without being corrected. The change was small, but Noor noticed it. Until then, adjusting had seemed to mean admitting that the other person had been right.",
          "Now it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move forward. Noor listened to Eli’s splash, ready to alter her own next stroke."
        ],
        "mc": [
          {
            "prompt": "How does the children’s response to adjustment change?",
            "choices": [
              "They assume the map is responsible for every mistake.",
              "They agree that the stronger person must always be right.",
              "They begin to treat it as useful information rather than a contest.",
              "They decide that one paddler should stop noticing."
            ],
            "answer": 2,
            "skill": "Trace a change in thinking",
            "evidence": "instead of defending what each had intended"
          },
          {
            "prompt": "Why is Eli’s unprompted correction important?",
            "choices": [
              "It makes the water completely predictable.",
              "It shows that he is monitoring the shared result himself.",
              "It proves that Jo has stopped guiding the canoe.",
              "It means the children no longer need to communicate."
            ],
            "answer": 1,
            "skill": "Evaluate evidence of learning",
            "evidence": "without being corrected"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The early curve",
              "followed mismatched strokes"
            ],
            [
              "Jo’s measured beat",
              "offered a shared pattern"
            ],
            [
              "Eli’s adjustment",
              "helped restore the rhythm"
            ]
          ],
          "options": [
            "helped restore the rhythm",
            "offered a shared pattern",
            "followed mismatched strokes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The early curve followed mismatched strokes",
            "Jo’s measured beat offered a shared pattern",
            "Eli’s adjustment helped restore the rhythm"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The first bend in their course was not drawn on the {{c0}}. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to {{c1}}.",
            "Jo asked them to pause. While she maintained their direction, she counted a deliberate pattern: dip, pull, lift. The children matched it, and their separate splashes became parts of one repeating {{c2}}.",
            "Eli lengthened a stroke, hoping to add speed. He felt the pattern falter and shortened the next one without being corrected. The change was small, but Noor noticed it. Until then, adjusting had seemed to mean admitting that the other person had been right.",
            "Now it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move {{c3}}. Noor listened to Eli’s splash, ready to alter her own next {{c4}}."
          ],
          "parts": [
            "The first bend in their course was not drawn on the {{c0}}. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to {{c1}}.\n\nJo asked them to pause. While she maintained their direction, she counted a deliberate pattern: dip, pull, lift. The children matched it, and their separate splashes became parts of one repeating {{c2}}.\n\nEli lengthened a stroke, hoping to add speed. He felt the pattern falter and shortened the next one without being corrected. The change was small, but Noor noticed it. Until then, adjusting had seemed to mean admitting that the other person had been right.\n\nNow it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move {{c3}}. Noor listened to Eli’s splash, ready to alter her own next {{c4}}."
          ],
          "columns": [
            "The first bend in their course was not drawn on the {{c0}}. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to {{c1}}. Jo asked them to pause. While she maintained their direction, she counted a deliberate pattern: dip, pull, lift. The children matched it, and their separate splashes became parts of one repeating {{c2}}.",
            "Eli lengthened a stroke, hoping to add speed. He felt the pattern falter and shortened the next one without being corrected. The change was small, but Noor noticed it. Until then, adjusting had seemed to mean admitting that the other person had been right. Now it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move {{c3}}. Noor listened to Eli’s splash, ready to alter her own next {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "map",
              "paragraph": 0,
              "prompt": "The first bend in their course was not drawn on the ______. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to do."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "do",
              "paragraph": 0,
              "prompt": "The first bend in their course was not drawn on the map. Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the reeds. Each child began with an explanation of what the other ought to ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "rhythm",
              "paragraph": 1,
              "prompt": "Jo asked them to pause. While she maintained their direction, she counted a deliberate pattern: dip, pull, lift. The children matched it, and their separate splashes became parts of one repeating ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "forward",
              "paragraph": 3,
              "prompt": "Now it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move ______. Noor listened to Eli’s splash, ready to alter her own next stroke."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "stroke",
              "paragraph": 3,
              "prompt": "Now it looked more useful than that. They could respond to what the canoe was doing instead of defending what each had intended. A shared course required information from both paddlers and from the water itself. Nobody’s first idea had to win before the canoe could move forward. Noor listened to Eli’s splash, ready to alter her own next ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "stroke"
            },
            {
              "id": "w3",
              "word": "forward"
            },
            {
              "id": "w2",
              "word": "rhythm"
            },
            {
              "id": "w1",
              "word": "do"
            },
            {
              "id": "w0",
              "word": "map"
            }
          ]
        }
      },
      {
        "text": [
          "The breeze first appeared as darker wrinkles spreading across the lake. Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered bay.",
          "Eli pointed to the map. Its line continued towards the distant point. Jo explained that the earlier route had been suitable for the conditions they expected, and that new observations now supported a different decision.",
          "For several strokes, Eli said little. A shorter route felt uncomfortably like an incomplete achievement. Then Noor noticed a duck threading through the reeds, and they watched from a respectful distance.",
          "In the quieter water, Eli could distinguish details the crossing had not offered: rings opening behind the bird, pale stems under the surface, and the click of a paddle against the gunwale. His disappointment did not disappear instantly, but curiosity began to share its place.",
          "The plan had changed because Jo was using it thoughtfully, not because she had forgotten it. Eli was starting to see that faithfully following a line and responsibly completing a journey were not necessarily the same thing."
        ],
        "mc": [
          {
            "prompt": "How is Jo’s decision presented as responsible rather than careless?",
            "choices": [
              "She asks Eli to decide without considering conditions.",
              "She revises the plan in response to new observations.",
              "She ignores the weather and follows a bird.",
              "She changes the route because the map is missing."
            ],
            "answer": 1,
            "skill": "Evaluate a decision using evidence",
            "evidence": "new observations now supported a different decision"
          },
          {
            "prompt": "What does Eli’s mixed response to the bay suggest?",
            "choices": [
              "A useful change can be disappointing before its value becomes clear.",
              "He has completely abandoned interest in distance.",
              "He thinks every sheltered bay is identical.",
              "He is certain that the trip should never have begun."
            ],
            "answer": 0,
            "skill": "Interpret an evolving response",
            "evidence": "curiosity began to share its place"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The darker wrinkles",
              "signalled a breeze"
            ],
            [
              "The sheltered water",
              "revealed quieter details"
            ],
            [
              "Eli’s changing response",
              "moved towards curiosity"
            ]
          ],
          "options": [
            "moved towards curiosity",
            "revealed quieter details",
            "signalled a breeze"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The darker wrinkles signalled a breeze",
            "The sheltered water revealed quieter details",
            "Eli’s changing response moved towards curiosity"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The breeze first appeared as darker wrinkles spreading across the {{c0}}. Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered bay.",
            "Eli pointed to the map. Its line continued towards the distant point. Jo explained that the earlier route had been suitable for the conditions they expected, and that new observations now supported a different {{c1}}.",
            "For several strokes, Eli said little. A shorter route felt uncomfortably like an incomplete achievement. Then Noor noticed a duck threading through the reeds, and they watched from a respectful {{c2}}.",
            "In the quieter water, Eli could distinguish details the crossing had not offered: rings opening behind the bird, pale stems under the surface, and the click of a paddle against the {{c3}}. His disappointment did not disappear instantly, but curiosity began to share its place.",
            "The plan had changed because Jo was using it thoughtfully, not because she had forgotten it. Eli was starting to see that faithfully following a line and responsibly completing a journey were not necessarily the same {{c4}}."
          ],
          "parts": [
            "The breeze first appeared as darker wrinkles spreading across the {{c0}}. Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered bay.\n\nEli pointed to the map. Its line continued towards the distant point. Jo explained that the earlier route had been suitable for the conditions they expected, and that new observations now supported a different {{c1}}.\n\nFor several strokes, Eli said little. A shorter route felt uncomfortably like an incomplete achievement. Then Noor noticed a duck threading through the reeds, and they watched from a respectful {{c2}}.\n\nIn the quieter water, Eli could distinguish details the crossing had not offered: rings opening behind the bird, pale stems under the surface, and the click of a paddle against the {{c3}}. His disappointment did not disappear instantly, but curiosity began to share its place.\n\nThe plan had changed because Jo was using it thoughtfully, not because she had forgotten it. Eli was starting to see that faithfully following a line and responsibly completing a journey were not necessarily the same {{c4}}."
          ],
          "columns": [
            "The breeze first appeared as darker wrinkles spreading across the {{c0}}. Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered bay. Eli pointed to the map. Its line continued towards the distant point. Jo explained that the earlier route had been suitable for the conditions they expected, and that new observations now supported a different {{c1}}.",
            "For several strokes, Eli said little. A shorter route felt uncomfortably like an incomplete achievement. Then Noor noticed a duck threading through the reeds, and they watched from a respectful {{c2}}. In the quieter water, Eli could distinguish details the crossing had not offered: rings opening behind the bird, pale stems under the surface, and the click of a paddle against the {{c3}}. His disappointment did not disappear instantly, but curiosity began to share its place. The plan had changed because Jo was using it thoughtfully, not because she had forgotten it. Eli was starting to see that faithfully following a line and responsibly completing a journey were not necessarily the same {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lake",
              "paragraph": 0,
              "prompt": "The breeze first appeared as darker wrinkles spreading across the ______. Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered bay."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "decision",
              "paragraph": 1,
              "prompt": "Eli pointed to the map. Its line continued towards the distant point. Jo explained that the earlier route had been suitable for the conditions they expected, and that new observations now supported a different ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "distance",
              "paragraph": 2,
              "prompt": "For several strokes, Eli said little. A shorter route felt uncomfortably like an incomplete achievement. Then Noor noticed a duck threading through the reeds, and they watched from a respectful ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "gunwale",
              "paragraph": 3,
              "prompt": "In the quieter water, Eli could distinguish details the crossing had not offered: rings opening behind the bird, pale stems under the surface, and the click of a paddle against the ______. His disappointment did not disappear instantly, but curiosity began to share its place."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "thing",
              "paragraph": 4,
              "prompt": "The plan had changed because Jo was using it thoughtfully, not because she had forgotten it. Eli was starting to see that faithfully following a line and responsibly completing a journey were not necessarily the same ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "thing"
            },
            {
              "id": "w3",
              "word": "gunwale"
            },
            {
              "id": "w2",
              "word": "distance"
            },
            {
              "id": "w1",
              "word": "decision"
            },
            {
              "id": "w0",
              "word": "lake"
            }
          ]
        }
      },
      {
        "text": [
          "Returning along the sheltered shore, Eli counted the strokes and Noor matched the beat. At the dock, everyone remained seated until Jo steadied the canoe and signalled them to step out one at a time.",
          "With the equipment put away, Eli spread out the map. The distant point had not moved, nor had their chance of visiting it on another suitable day. He circled the bay and wrote three reminders: duck, reeds, shared rhythm.",
          "Noor asked which version of the journey he would tell. Eli considered the long crossing he had imagined and the shorter trip they had actually made. He chose to describe what had happened, including the part where he had wanted something different.",
          "That detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a notebook of his own to supply what its blue line left out."
        ],
        "mc": [
          {
            "prompt": "Why does Eli decide to include his initial disappointment in his account?",
            "choices": [
              "It helps explain the change in his understanding.",
              "It proves that the whole trip was unsuccessful.",
              "It hides Noor’s contribution to the return.",
              "It suggests that he never noticed the duck."
            ],
            "answer": 0,
            "skill": "Interpret a reflective choice",
            "evidence": "helped explain what he had learned"
          },
          {
            "prompt": "What does the ending suggest about the distant point?",
            "choices": [
              "It must be removed from the map.",
              "It has become unreachable forever.",
              "It proves that changing a plan is always a failure.",
              "It remains a possible goal without defining this trip’s value."
            ],
            "answer": 3,
            "skill": "Explain a nuanced conclusion",
            "evidence": "another suitable day"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The distant point",
              "remained a possible future goal"
            ],
            [
              "The note in the bay",
              "recorded meaningful discoveries"
            ],
            [
              "The story Eli would tell",
              "included another person’s view"
            ]
          ],
          "options": [
            "included another person’s view",
            "recorded meaningful discoveries",
            "remained a possible future goal"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The distant point remained a possible future goal",
            "The note in the bay recorded meaningful discoveries",
            "The story Eli would tell included another person’s view"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Returning along the sheltered shore, Eli counted the strokes and Noor matched the beat. At the {{c0}}, everyone remained seated until Jo steadied the canoe and signalled them to step out one at a time.",
            "With the equipment put away, Eli spread out the map. The distant point had not moved, nor had their chance of visiting it on another suitable day. He circled the bay and wrote three reminders: duck, reeds, shared {{c1}}.",
            "Noor asked which version of the journey he would tell. Eli considered the long crossing he had imagined and the shorter trip they had actually made. He chose to describe what had happened, including the part where he had wanted something {{c2}}.",
            "That detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a {{c3}} of his own to supply what its blue line left {{c4}}."
          ],
          "parts": [
            "Returning along the sheltered shore, Eli counted the strokes and Noor matched the beat. At the {{c0}}, everyone remained seated until Jo steadied the canoe and signalled them to step out one at a time.\n\nWith the equipment put away, Eli spread out the map. The distant point had not moved, nor had their chance of visiting it on another suitable day. He circled the bay and wrote three reminders: duck, reeds, shared {{c1}}.\n\nNoor asked which version of the journey he would tell. Eli considered the long crossing he had imagined and the shorter trip they had actually made. He chose to describe what had happened, including the part where he had wanted something {{c2}}.\n\nThat detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a {{c3}} of his own to supply what its blue line left {{c4}}."
          ],
          "columns": [
            "Returning along the sheltered shore, Eli counted the strokes and Noor matched the beat. At the {{c0}}, everyone remained seated until Jo steadied the canoe and signalled them to step out one at a time. With the equipment put away, Eli spread out the map. The distant point had not moved, nor had their chance of visiting it on another suitable day. He circled the bay and wrote three reminders: duck, reeds, shared {{c1}}.",
            "Noor asked which version of the journey he would tell. Eli considered the long crossing he had imagined and the shorter trip they had actually made. He chose to describe what had happened, including the part where he had wanted something {{c2}}. That detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a {{c3}} of his own to supply what its blue line left {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dock",
              "paragraph": 0,
              "prompt": "Returning along the sheltered shore, Eli counted the strokes and Noor matched the beat. At the ______, everyone remained seated until Jo steadied the canoe and signalled them to step out one at a time."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rhythm",
              "paragraph": 1,
              "prompt": "With the equipment put away, Eli spread out the map. The distant point had not moved, nor had their chance of visiting it on another suitable day. He circled the bay and wrote three reminders: duck, reeds, shared ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "different",
              "paragraph": 2,
              "prompt": "Noor asked which version of the journey he would tell. Eli considered the long crossing he had imagined and the shorter trip they had actually made. He chose to describe what had happened, including the part where he had wanted something ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "notebook",
              "paragraph": 3,
              "prompt": "That detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a ______ of his own to supply what its blue line left out."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "out",
              "paragraph": 3,
              "prompt": "That detail no longer spoiled the story. It helped explain what he had learned from it. Their achievement included a safe return, a workable partnership, and a decision changed by evidence. The map still recorded distance more easily than it recorded judgement, but Eli now had a notebook of his own to supply what its blue line left ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "out"
            },
            {
              "id": "w3",
              "word": "notebook"
            },
            {
              "id": "w2",
              "word": "different"
            },
            {
              "id": "w1",
              "word": "rhythm"
            },
            {
              "id": "w0",
              "word": "dock"
            }
          ]
        }
      }
    ],
    "intro": "708 words · 4 reading pages · 5 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  }
};
const TITLES=["Set to go","Dip and pull","A duck in the bay","Back at the dock"];
const SCENE_ALTS=["Canoe Trip cover","Canoe Trip: Set to go","Canoe Trip: Dip and pull","Canoe Trip: A duck in the bay","Canoe Trip: Back at the dock"];
window.CAMP_ART=["assets/illustrations/page-1-pixar.png","assets/illustrations/page-1-pixar.png","assets/illustrations/page-2-pixar.png","assets/illustrations/page-3-pixar.png","assets/illustrations/page-4-pixar.png"];
window.CAMP_REPORT_ART_VERSION="d06b0080da6a";
window.LOWER_PICTURE_SETS={"groups":[["canoe","life jacket","clip","seat"],["paddle","water","hand","ripples"],["duck","reeds","wind","bay"],["dock","rope","bag","map"]],"atlas":"assets/illustrations/chapter-picture-groups-v1.png"};
window.EXTRA_TASKS={"E":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["An open blue canoe with wooden seats.","A red canoe with a roof.","An open red canoe with wooden seats."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["An orange life jacket with white clips.","An orange life jacket with black clips.","A blue life jacket with black clips."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A black clip fastened shut.","A black clip pulled apart.","A red clip fastened shut."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A metal seat.","A plastic seat.","A wooden seat."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A long blue plastic paddle.","A long wooden paddle.","A short metal paddle."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["Some blue water.","Some green water.","Some brown water."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A hand in a fist.","A hand holding a rope.","An open hand."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["Big white waves on blue water.","Round rings on blue water.","Straight lines on blue water."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A brown duck standing up.","A brown duck flying.","A white duck standing up."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["Short brown reeds beside water.","Tall green reeds in a dry pot.","Tall green reeds beside water."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["Brown leaves growing on a branch.","Green leaves blowing in the wind.","Green leaves lying in a pile."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A calm blue bay by a green shore.","A rough blue bay by a snowy shore.","A calm brown bay by a sandy shore."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A metal dock over blue water.","A wooden dock over green grass.","A wooden dock over blue water."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A rope tied in a tight knot.","A rope in a loop.","A rope pulled straight."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A bag with a string.","A bag with a zip.","A bag with two straps."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A map rolled up.","A map folded shut.","A map spread out."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"F":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a red canoe with a roof.","I can see an open red canoe with wooden seats.","I can see an open blue canoe with wooden seats."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see an orange life jacket with black clips.","I can see a blue life jacket with black clips.","I can see an orange life jacket with white clips."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a black clip pulled apart.","I can see a red clip fastened shut.","I can see a black clip fastened shut."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a plastic seat.","I can see a wooden seat.","I can see a metal seat."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a long wooden paddle.","I can see a short metal paddle.","I can see a long blue plastic paddle."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see some green water.","I can see some brown water.","I can see some blue water."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a hand holding a rope.","I can see an open hand.","I can see a hand in a fist."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see round rings on blue water.","I can see straight lines on blue water.","I can see big white waves on blue water."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a brown duck flying.","I can see a white duck standing up.","I can see a brown duck standing up."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see tall green reeds in a dry pot.","I can see tall green reeds beside water.","I can see short brown reeds beside water."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see green leaves blowing in the wind.","I can see green leaves lying in a pile.","I can see brown leaves growing on a branch."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a rough blue bay by a snowy shore.","I can see a calm brown bay by a sandy shore.","I can see a calm blue bay by a green shore."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a wooden dock over green grass.","I can see a wooden dock over blue water.","I can see a metal dock over blue water."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a rope in a loop.","I can see a rope pulled straight.","I can see a rope tied in a tight knot."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a bag with a zip.","I can see a bag with two straps.","I can see a bag with a string."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a map folded shut.","I can see a map spread out.","I can see a map rolled up."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"G":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows an open red canoe with wooden seats.","The picture shows an open blue canoe with wooden seats.","The picture shows a red canoe with a roof."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a blue life jacket with black clips.","The picture shows an orange life jacket with white clips.","The picture shows an orange life jacket with black clips."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a red clip fastened shut.","The picture shows a black clip fastened shut.","The picture shows a black clip pulled apart."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a wooden seat.","The picture shows a metal seat.","The picture shows a plastic seat."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a short metal paddle.","The picture shows a long blue plastic paddle.","The picture shows a long wooden paddle."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows some brown water.","The picture shows some blue water.","The picture shows some green water."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows an open hand.","The picture shows a hand in a fist.","The picture shows a hand holding a rope."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows straight lines on blue water.","The picture shows big white waves on blue water.","The picture shows round rings on blue water."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a white duck standing up.","The picture shows a brown duck standing up.","The picture shows a brown duck flying."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows tall green reeds beside water.","The picture shows short brown reeds beside water.","The picture shows tall green reeds in a dry pot."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows green leaves lying in a pile.","The picture shows brown leaves growing on a branch.","The picture shows green leaves blowing in the wind."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a calm brown bay by a sandy shore.","The picture shows a calm blue bay by a green shore.","The picture shows a rough blue bay by a snowy shore."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a wooden dock over blue water.","The picture shows a metal dock over blue water.","The picture shows a wooden dock over green grass."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a rope pulled straight.","The picture shows a rope tied in a tight knot.","The picture shows a rope in a loop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a bag with two straps.","The picture shows a bag with a string.","The picture shows a bag with a zip."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a map spread out.","The picture shows a map rolled up.","The picture shows a map folded shut."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"L":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The lake looked smooth, and Noor was eager to begin their first canoe ______.","choices":["canoe","paddle","water","trip"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Before they stepped aboard, Jo checked that their life jackets fitted and every clip was ______.","choices":["checked","waited","fastened","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They ______ a small dry bag under a seat.","choices":["waited","placed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo held the ______ steady while the children sat down.","choices":["canoe","dock","bay","reed"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli held his ______ as if it were a racing flag.","choices":["bay","reed","duck","paddle"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"\"We are going to work together,\" Jo ______ them.","choices":["checked","waited","reminded","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will paddle","paddled","are paddling"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Noor pulled her ______ quickly through the water.","choices":["lake","dock","paddle","water"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli took a slower ______ on the other side.","choices":["dock","stroke","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Instead of going straight, the canoe curved towards the ______.","choices":["reeds","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo asked them to pause and listen while she ______ a steady rhythm.","choices":["noticed","checked","waited","counted"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They dipped, pulled, and lifted their ______ to the count.","choices":["reed","duck","paddles","bay"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo guided from the back, and the canoe moved along the planned ______.","choices":["rhythm","route","reed","duck"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["paddled","are paddling","will paddle"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Jo checked the shore and chose a sheltered bay instead of the longer ______ they had planned.","choices":["dock","route","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Eli looked disappointed until Noor pointed to a ______ moving between the tall reeds.","choices":["duck","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"In the quieter ______, they could see tiny rings spreading behind it.","choices":["bay","reed","duck","water"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They kept their distance and watched without ______ out.","choices":["looking","checking","calling","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that a useful plan could change when conditions ______.","choices":["waited","changed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The shorter route had given them something they would have missed while ______.","choices":["hurrying","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are paddling","will paddle","paddled"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the return ______, Eli counted the strokes and Noor matched him.","choices":["trip","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo guided them back along the sheltered ______.","choices":["dock","bay","reed","shore"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"At the ______, everyone remained seated until Jo said it was time to get out.","choices":["duck","rhythm","dock","reed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She held the ______ steady as they stepped ashore one at a time.","choices":["stroke","canoe","duck","rhythm"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Noor found the leaf she had ______ at the start.","choices":["watched","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"It was caught beside the dock, but she no longer felt puzzled about ______ in a straight line.","choices":["waiting","looking","checking","travelling"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will paddle","paddled","are paddling"],"answer":0,"skill":"Use the future tense"}]}}],"M":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The ______ looked smooth when Noor and Eli joined Jo at the dock.","choices":["canoe","paddle","water","lake"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Noor watched a leaf drift beside the wood and wondered how they would make their ______ travel straight.","choices":["lake","dock","canoe","water"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli held his paddle upright like a ______ flag.","choices":["checking","racing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He was already imagining how quickly they might cross the ______.","choices":["water","dock","bay","reed"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo checked the fit and clips of their life jackets before either child ______ aboard.","choices":["noticed","checked","waited","stepped"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Noor took her paddle and ______ once more at the leaf.","choices":["checked","waited","looked","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will paddle","paddled","are paddling"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Noor pulled quickly on one side while Eli made a slower ______ on the other.","choices":["water","lake","stroke","paddle"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The ______ curved towards the reeds, and both children looked at Jo.","choices":["bay","canoe","lake","dock"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She explained that their two patterns were not ______ together.","choices":["working","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Instead of asking them to pull harder, she counted a steady ______ for them to follow.","choices":["dock","bay","reed","rhythm"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The children matched the count while Jo ______ from the back.","choices":["checked","waited","guided","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Their ______ began to make one repeating pattern of splashes.","choices":["rhythm","strokes","reed","duck"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["paddled","are paddling","will paddle"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Jo watched the shore and chose a sheltered bay instead of continuing along the longer planned ______.","choices":["dock","route","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He had wanted to reach the distant point, and turning early felt like leaving part of the ______ unfinished.","choices":["trip","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Then Noor pointed to a ______ moving among the tall reeds.","choices":["dock","bay","reed","duck"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They stayed well back and watched rings spread across the quieter ______.","choices":["duck","rhythm","water","reed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that ______ conditions could call for a different plan.","choices":["checking","changing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Eli rested his ______ and listened to the reeds rustle.","choices":["paddle","rhythm","stroke","shore"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are paddling","will paddle","paddled"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the journey back, Eli counted their ______ strokes.","choices":["paddle","dock","bay","reed"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor matched his slow beat while Jo guided them along the sheltered ______.","choices":["dock","bay","reed","shore"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"At the ______, they stayed seated until Jo told them to step out.","choices":["duck","rhythm","dock","reed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She held the ______ steady, and they moved one at a time.","choices":["stroke","canoe","duck","rhythm"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Seeing it reminded Noor of the question she had asked herself before the ______: how could two paddlers keep a straight course?","choices":["trip","duck","rhythm","stroke"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The children did not need identical ideas about their favourite part, but they did need a shared ______.","choices":["stroke","shore","route","rhythm"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will paddle","paddled","are paddling"],"answer":0,"skill":"Use the future tense"}]}}],"N":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Eli followed the blue ______ on Jo’s map with one finger.","choices":["canoe","paddle","water","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He imagined telling everyone how far the ______ had travelled to the distant point.","choices":["lake","dock","canoe","water"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Noor watched a leaf turn beside the ______.","choices":["bay","dock","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"With one paddler on each side, she wondered how they would avoid ______ in circles.","choices":["travelling","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ the weather, their route, and every life-jacket clip.","choices":["noticed","waited","guided","checked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She held the canoe while they boarded and ______ the dry bag beneath a seat.","choices":["checked","waited","placed","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The children began with different paddle ______.","choices":["water","lake","strokes","paddle"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Their ______ curved towards the reeds.","choices":["bay","canoe","lake","dock"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo asked them to pause and listen to a ______ beat: dip, pull, lift.","choices":["measured","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"______ the count made their movements work together.","choices":["waiting","looking","checking","Following"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The canoe settled into a smoother ______ as Jo guided from the back.","choices":["reed","duck","rhythm","bay"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli tried a longer ______ to gain speed, then felt the pattern falter.","choices":["rhythm","stroke","reed","duck"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["will paddle","are paddling","had paddled"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A line of small wrinkles ______ on the open lake.","choices":["waited","appeared","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo studied the water and turned towards a bay sheltered by the shore and tall ______.","choices":["reeds","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli objected that the map showed a longer ______.","choices":["dock","bay","reed","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ that the plan had been made for calmer conditions, before the breeze changed.","choices":["checked","waited","explained","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"For a while he paddled quietly, ______ about the point they would not reach.","choices":["checking","thinking","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Then Noor noticed a ______ slipping between the reeds.","choices":["duck","rhythm","stroke","shore"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["are paddling","had paddled","will paddle"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Eli counted the strokes all the way back along the sheltered ______.","choices":["shore","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor matched him while Jo guided the ______ to the dock.","choices":["bay","reed","duck","canoe"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They stayed ______ until it was time to step out.","choices":["checked","waited","seated","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"After putting the paddles away, Eli opened the ______.","choices":["rhythm","map","reed","duck"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He circled the bay and added three notes: duck, ______, one rhythm.","choices":["reeds","duck","rhythm","stroke"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor asked whether he would tell people about a long ______.","choices":["rhythm","stroke","shore","trip"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}}],"P":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On Jo’s map, a blue line curved across the ______ to a distant point and back.","choices":["canoe","paddle","water","lake"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Eli traced it twice, imagining the story he would tell about their long ______ trip.","choices":["lake","dock","canoe","water"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Noor was less ______ in distance.","choices":["waited","interested","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She watched a leaf drift beside the dock and wondered how two people could ______ on opposite sides without sending the canoe in circles.","choices":["paddle","dock","bay","reed"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo checked the weather, their ______, and the fit of each life jacket.","choices":["dock","bay","reed","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She held the canoe steady while they boarded and ______ their dry bag under a seat.","choices":["checked","waited","placed","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"While Jo held the canoe beside the ______, the children checked where their belongings would stay.","choices":["water","lake","dock","paddle"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The ______ and notebook went inside the dry bag, where a splash would not spoil their pages.","choices":["dock","map","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Eli offered to remember every part of the ______.","choices":["route","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor asked whether one person should really have to remember ______.","choices":["waiting","looking","checking","everything"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo suggested that shared responsibility began with ______ the plan clear to both paddlers.","choices":["looking","checking","making","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They agreed that nobody would stand to search for equipment while the ______ was moving.","choices":["stroke","canoe","duck","rhythm"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["will paddle","are paddling","had paddled"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Jo guided the canoe a short distance from the dock while the children kept their ______ still.","choices":["dock","paddles","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Noor watched the familiar boards become a smaller shape against the ______.","choices":["shore","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli checked the ______, surprised that a place could look different without having moved.","choices":["dock","bay","reed","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ them to notice a group of tall pines and the pale roof of the boathouse.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"These landmarks could help them recognise the place when they ______ from another direction.","choices":["waited","returned","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Noor described what she could see instead of ______ what lay behind the tree.","choices":["guessing","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["are paddling","had paddled","will paddle"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Noor’s first ______ were quick and shallow.","choices":["strokes","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The ______ described a gentle curve towards the reeds, and both children blamed the other’s side.","choices":["bay","reed","duck","canoe"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked them to stop paddling while she held their ______.","choices":["reed","duck","direction","bay"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Then she counted a ______ beat: dip, pull, lift.","choices":["waited","measured","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The children listened and ______ their movements.","choices":["matched","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The canoe ______ into a smoother rhythm.","choices":["noticed","checked","waited","settled"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"With their ______ moving together, the children had room to notice more than their own hands.","choices":["dock","bay","reed","paddles"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Noor could hear Eli’s splash and feel when their ______ pattern began to drift.","choices":["checked","waited","shared","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Once, she hurried a ______ to avoid a floating leaf.","choices":["rhythm","stroke","reed","duck"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The ______ faltered.","choices":["rhythm","duck","stroke","shore"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She slowed the next stroke, and Eli matched the change without turning it into a ______.","choices":["rhythm","stroke","shore","disagreement"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo reminded them that listening did not mean repeating a count without ______.","choices":["looking","checking","thinking","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["will paddle","are paddling","had paddled"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"At a calm stretch, Jo asked Eli to point out the distant point on the ______.","choices":["reed","duck","map","bay"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He found it quickly and traced the ______ with his finger.","choices":["rhythm","route","reed","duck"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Noor asked whether the drawing could tell them what the ______ would be like when they arrived.","choices":["water","rhythm","stroke","shore"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli looked for a symbol that might answer, then stopped ______.","choices":["waiting","looking","checking","searching"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The map ______ places and a possible route.","choices":["checked","waited","showed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Their observations would have to tell them about conditions ______ the trip.","choices":["checking","during","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["are paddling","had paddled","will paddle"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The breeze arrived as a scattering of darker wrinkles across the ______.","choices":["stroke","lake","duck","rhythm"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo watched them, checked the shoreline, and turned towards a ______ bay.","choices":["sheltered","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli ______ back at the distant point.","choices":["noticed","checked","waited","looked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"\"But the ______ goes there,\" he said.","choices":["shore","route","map","stroke"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that their ______ had been a plan for calm conditions, not an instruction to ignore a changing wind.","choices":["wind","route","shore","map"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"For a while, Eli ______ silently.","choices":["paddled","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The sheltered bay seemed quieter each time the children stopped ______ to fill it with their own voices.","choices":["trying","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They watched the duck from a distance, leaving it room to move between the ______.","choices":["rhythm","stroke","shore","reeds"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Noor noticed rings ______ behind the bird.","choices":["looking","checking","spreading","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli noticed pale stems below the surface and a reflection that broke apart when the ______ moved.","choices":["wind","water","route","map"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They described these details to each other without ______ that either view was the complete one.","choices":["deciding","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo gave them time to look before ______ them onward.","choices":["waiting","looking","checking","guiding"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["will paddle","are paddling","had paddled"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Before they turned for the dock, Jo reviewed the return ______ along the sheltered shore.","choices":["rhythm","stroke","shore","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Eli followed it on the ______, then asked Noor which landmarks she remembered.","choices":["shore","route","map","stroke"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She ______ the tall pines and pale boathouse roof.","choices":["waited","described","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Eli added the partly hidden path, recognising a place that had ______ unfamiliar when they first left it.","choices":["looked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They agreed to keep the same steady paddling ______.","choices":["paddle","water","lake","rhythm"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"This time Eli offered to count, while Noor listened and ______ his pace.","choices":["checked","waited","matched","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["are paddling","had paddled","will paddle"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Eli counted their ______ on the way home.","choices":["shore","route","strokes","stroke"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Noor matched the beat, and Jo guided the canoe along the sheltered ______ to the dock.","choices":["wind","shore","route","map"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Everyone stayed ______ until she gave the signal to step out, one at a time.","choices":["seated","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"After the paddles were put away, Eli opened the ______.","choices":["paddle","water","lake","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The distant point ______ where it had always been.","choices":["checked","waited","remained","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He drew a small circle around the bay, then wrote, \"Duck, ______, one rhythm.\"","choices":["dock","reeds","water","lake"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}}],"R":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The blue route on Jo’s ______ looked reassuringly complete.","choices":["canoe","paddle","water","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"It crossed the lake to a distant point, curved along the opposite shore, and returned to the ______ without showing a single hesitation.","choices":["water","lake","dock","paddle"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli imagined ______ that journey afterwards.","choices":["checking","describing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Distance would make a simple story: they had ______ all the way to the point and back.","choices":["travelled","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor, watching a leaf revolve beside the dock, was wondering about a less impressive-sounding ______.","choices":["dock","bay","reed","question"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"How could two paddlers, ______ on opposite sides, agree on a direction?","choices":["looking","checking","working","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Noor’s quick, shallow strokes and Eli’s slower, deeper pulls sent the canoe curving towards the ______.","choices":["water","lake","reeds","paddle"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Each child began with an ______ of what the other ought to do.","choices":["dock","explanation","water","lake"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ them to pause.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"While she maintained their direction, she ______ a deliberate pattern: dip, pull, lift.","choices":["noticed","checked","waited","counted"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The children matched it, and their separate splashes became parts of one ______ rhythm.","choices":["looking","checking","repeating","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Eli lengthened a stroke, hoping to add ______.","choices":["waited","speed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddling carefully.","Noor and Eli paddle carefully.","Noor and Eli paddles carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will paddle","paddled","paddles"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are paddling","paddled","will paddle"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["will paddle","are paddling","had paddled"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The breeze first appeared as darker wrinkles ______ across the lake.","choices":["checking","spreading","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo checked the shoreline, considered the open stretch ahead, and turned towards a sheltered ______.","choices":["bay","lake","dock","reed"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Eli pointed to the ______.","choices":["dock","bay","reed","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Its line ______ towards the distant point.","choices":["checked","waited","continued","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that the earlier ______ had been suitable for the conditions they expected, and that new observations now supported a different decision.","choices":["rhythm","route","reed","duck"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"For several ______, Eli said little.","choices":["strokes","duck","rhythm","stroke"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddle carefully.","Noor and Eli paddles carefully.","Noor and Eli paddling carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes\" Jo said.","\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddled","paddles","will paddle"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["paddled","will paddle","are paddling"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["are paddling","had paddled","will paddle"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Returning along the sheltered shore, Eli counted the ______ and Noor matched the beat.","choices":["strokes","lake","dock","bay"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"At the dock, everyone remained seated until Jo steadied the ______ and signalled them to step out one at a time.","choices":["bay","reed","duck","canoe"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"With the equipment put away, Eli spread out the ______.","choices":["reed","duck","map","bay"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The distant point had not moved, nor had their chance of ______ it on another suitable day.","choices":["checking","visiting","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He circled the bay and wrote three reminders: duck, ______, shared rhythm.","choices":["reeds","duck","rhythm","stroke"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Noor ______ which version of the journey he would tell.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Noor and Eli paddles carefully.","Noor and Eli paddling carefully.","Noor and Eli paddle carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Match your strokes, Jo said.\"","\"Match your strokes,\" Jo said.","\"Match your strokes\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Noor and Eli checked the lake. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["paddles","will paddle","paddled"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will paddle","are paddling","paddled"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the lake.","choices":["had paddled","will paddle","are paddling"],"answer":0,"skill":"Use the past perfect tense"}]}}]};
