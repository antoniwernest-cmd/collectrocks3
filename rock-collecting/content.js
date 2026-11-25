/* Original fiction; F&P letters are instructional targets for teacher review. */
const LEVELS={
  "E": {
    "grade": "F&P E target",
    "titles": [
      "A big rock",
      "Get the rock wet",
      "Look at each rock",
      "A rock in a box"
    ],
    "sections": [
      {
        "text": [
          "It is a sunny day. The rocks are on a table.",
          "Max has a big rock.",
          "Ava has a red rock.",
          "Jo has a cloth bag.",
          "Max can put his rock in the bag."
        ],
        "mc": [
          {
            "prompt": "What colour is Ava’s rock?",
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
              "Max puts his rock in the…",
              "bag"
            ]
          ],
          "options": [
            "bag",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Max puts his rock in the… bag"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It is a sunny day. The rocks are on a table.",
            "Max has a {{c0}} rock.",
            "Ava has a red rock.",
            "Jo has a cloth bag.",
            "Max can put his rock in the {{c1}}."
          ],
          "parts": [
            "It is a sunny day. The rocks are on a table.\n\nMax has a {{c0}} rock.\n\nAva has a red rock.\n\nJo has a cloth bag.\n\nMax can put his rock in the {{c1}}."
          ],
          "columns": [
            "It is a sunny day. The rocks are on a table. Max has a {{c0}} rock.",
            "Ava has a red rock. Jo has a cloth bag. Max can put his rock in the {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "big",
              "paragraph": 1,
              "prompt": "Max has a ______ rock."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "bag",
              "paragraph": 4,
              "prompt": "Max can put his rock in the ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "bag"
            },
            {
              "id": "w0",
              "word": "big"
            }
          ]
        }
      },
      {
        "text": [
          "Max can get his rock wet.",
          "Ava has a brush.",
          "She can rub her red rock.",
          "Jo says, \"Let it dry in the sun.\""
        ],
        "mc": [
          {
            "prompt": "What does Ava have?",
            "choices": [
              "A brush",
              "A flag"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "A brush"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The rock can dry in the…",
              "sun"
            ]
          ],
          "options": [
            "sun",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The rock can dry in the… sun"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max can get his rock {{c0}}.",
            "Ava has a brush.",
            "She can rub her red rock.",
            "Jo says, \"Let it dry in the {{c1}}.\""
          ],
          "parts": [
            "Max can get his rock {{c0}}.\n\nAva has a brush.\n\nShe can rub her red rock.\n\nJo says, \"Let it dry in the {{c1}}.\""
          ],
          "columns": [
            "Max can get his rock {{c0}}. Ava has a brush.",
            "She can rub her red rock. Jo says, \"Let it dry in the {{c1}}.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "wet",
              "paragraph": 0,
              "prompt": "Max can get his rock ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sun",
              "paragraph": 3,
              "prompt": "Jo says, \"Let it dry in the ______.\""
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "sun"
            },
            {
              "id": "w0",
              "word": "wet"
            }
          ]
        }
      },
      {
        "text": [
          "Max can feel his rock.",
          "It has a bump.",
          "Ava has a flat rock.",
          "They set the rocks in a box.",
          "They look at the rocks. They sort the rocks."
        ],
        "mc": [
          {
            "prompt": "What does Max’s rock have?",
            "choices": [
              "A cap",
              "A bump"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "A bump"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "They set the rocks in a…",
              "box"
            ]
          ],
          "options": [
            "box",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "They set the rocks in a… box"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max can feel his {{c0}}.",
            "It has a bump.",
            "Ava has a flat rock.",
            "They set the rocks in a {{c1}}.",
            "They look at the rocks. They sort the rocks."
          ],
          "parts": [
            "Max can feel his {{c0}}.\n\nIt has a bump.\n\nAva has a flat rock.\n\nThey set the rocks in a {{c1}}.\n\nThey look at the rocks. They sort the rocks."
          ],
          "columns": [
            "Max can feel his {{c0}}. It has a bump.",
            "Ava has a flat rock. They set the rocks in a {{c1}}. They look at the rocks. They sort the rocks."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rock",
              "paragraph": 0,
              "prompt": "Max can feel his ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "box",
              "paragraph": 3,
              "prompt": "They set the rocks in a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "box"
            },
            {
              "id": "w0",
              "word": "rock"
            }
          ]
        }
      },
      {
        "text": [
          "Ava can draw her red rock.",
          "Max can draw his big rock.",
          "Jo can help them.",
          "They can put the rocks in a box."
        ],
        "mc": [
          {
            "prompt": "What does Max draw?",
            "choices": [
              "His big rock",
              "A red car"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "His big rock"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The rocks go in a…",
              "box"
            ]
          ],
          "options": [
            "box",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The rocks go in a… box"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava can draw her {{c0}} rock.",
            "Max can draw his big rock.",
            "Jo can help them.",
            "They can put the rocks in a {{c1}}."
          ],
          "parts": [
            "Ava can draw her {{c0}} rock.\n\nMax can draw his big rock.\n\nJo can help them.\n\nThey can put the rocks in a {{c1}}."
          ],
          "columns": [
            "Ava can draw her {{c0}} rock. Max can draw his big rock.",
            "Jo can help them. They can put the rocks in a {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "red",
              "paragraph": 0,
              "prompt": "Ava can draw her ______ rock."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "box",
              "paragraph": 3,
              "prompt": "They can put the rocks in a ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "box"
            },
            {
              "id": "w0",
              "word": "red"
            }
          ]
        }
      }
    ],
    "intro": "112 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "F": {
    "grade": "F&P F target",
    "titles": [
      "Two happy collectors",
      "Brush, wash, and look",
      "Two ways to sort",
      "A book of discoveries"
    ],
    "sections": [
      {
        "text": [
          "It was a sunny morning. The tray sat on a table.",
          "Ava and Max loved collecting rocks.",
          "Jo gave them a tray of loose garden stones to explore.",
          "They could each choose two small stones to keep.",
          "Max brought a cloth bag, and Ava brought a notebook."
        ],
        "mc": [
          {
            "prompt": "How many stones could each child keep?",
            "choices": [
              "One",
              "Ten",
              "Two"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "each choose two"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Max brought",
              "a cloth bag"
            ],
            [
              "Ava brought",
              "a notebook"
            ]
          ],
          "options": [
            "a notebook",
            "a cloth bag"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Max brought a cloth bag",
            "Ava brought a notebook"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was a sunny morning. The tray sat on a table.",
            "Ava and Max loved collecting {{c0}}.",
            "Jo gave them a tray of loose garden stones to explore.",
            "They could each choose two small stones to keep.",
            "Max brought a cloth {{c1}}, and Ava brought a notebook."
          ],
          "parts": [
            "It was a sunny morning. The tray sat on a table.\n\nAva and Max loved collecting {{c0}}.\n\nJo gave them a tray of loose garden stones to explore.\n\nThey could each choose two small stones to keep.\n\nMax brought a cloth {{c1}}, and Ava brought a notebook."
          ],
          "columns": [
            "It was a sunny morning. The tray sat on a table. Ava and Max loved collecting {{c0}}.",
            "Jo gave them a tray of loose garden stones to explore. They could each choose two small stones to keep. Max brought a cloth {{c1}}, and Ava brought a notebook."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rocks",
              "paragraph": 1,
              "prompt": "Ava and Max loved collecting ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "bag",
              "paragraph": 4,
              "prompt": "Max brought a cloth ______, and Ava brought a notebook."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "bag"
            },
            {
              "id": "w0",
              "word": "rocks"
            }
          ]
        }
      },
      {
        "text": [
          "Ava cleaned a red stone with a soft brush.",
          "Max washed a grey stone and let it dry.",
          "Jo gave them a hand lens to make small details look bigger.",
          "They saw tiny dots in Max’s stone."
        ],
        "mc": [
          {
            "prompt": "What helped them see small details?",
            "choices": [
              "A red flag",
              "A hand lens",
              "A cloth bag"
            ],
            "answer": 1,
            "skill": "Connect a tool to its purpose",
            "evidence": "make small details look bigger"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Ava used",
              "a soft brush"
            ],
            [
              "Max found",
              "tiny dots"
            ]
          ],
          "options": [
            "tiny dots",
            "a soft brush"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Ava used a soft brush",
            "Max found tiny dots"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava cleaned a red stone with a soft {{c0}}.",
            "Max washed a grey stone and let it dry.",
            "Jo gave them a hand lens to make small details look bigger.",
            "They saw tiny dots in Max’s {{c1}}."
          ],
          "parts": [
            "Ava cleaned a red stone with a soft {{c0}}.\n\nMax washed a grey stone and let it dry.\n\nJo gave them a hand lens to make small details look bigger.\n\nThey saw tiny dots in Max’s {{c1}}."
          ],
          "columns": [
            "Ava cleaned a red stone with a soft {{c0}}. Max washed a grey stone and let it dry.",
            "Jo gave them a hand lens to make small details look bigger. They saw tiny dots in Max’s {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "brush",
              "paragraph": 0,
              "prompt": "Ava cleaned a red stone with a soft ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "stone",
              "paragraph": 3,
              "prompt": "They saw tiny dots in Max’s ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "stone"
            },
            {
              "id": "w0",
              "word": "brush"
            }
          ]
        }
      },
      {
        "text": [
          "First, the children sorted their rocks by colour.",
          "Then Jo asked them to feel each one.",
          "Ava’s red rock was smooth, but Max’s grey rock felt rough.",
          "They made new groups for smooth and rough rocks.",
          "Ava’s rock was flat. Max’s rock was bumpy.",
          "Jo said, \"Look at both groups. How else can we sort them?\""
        ],
        "mc": [
          {
            "prompt": "How did they sort the rocks the second time?",
            "choices": [
              "By how they felt",
              "By who was tallest",
              "By the size of the bags"
            ],
            "answer": 0,
            "skill": "Follow a sequence",
            "evidence": "new groups for smooth and rough"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The red rock",
              "felt smooth"
            ],
            [
              "The grey rock",
              "felt rough"
            ]
          ],
          "options": [
            "felt rough",
            "felt smooth"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The red rock felt smooth",
            "The grey rock felt rough"
          ]
        },
        "cloze": {
          "paragraphs": [
            "First, the children sorted their rocks by {{c0}}.",
            "Then Jo asked them to feel each one.",
            "Ava’s red rock was smooth, but Max’s grey rock felt rough.",
            "They made new groups for smooth and rough {{c1}}.",
            "Ava’s rock was flat. Max’s rock was bumpy.",
            "Jo said, \"Look at both groups. How else can we sort them?\""
          ],
          "parts": [
            "First, the children sorted their rocks by {{c0}}.\n\nThen Jo asked them to feel each one.\n\nAva’s red rock was smooth, but Max’s grey rock felt rough.\n\nThey made new groups for smooth and rough {{c1}}.\n\nAva’s rock was flat. Max’s rock was bumpy.\n\nJo said, \"Look at both groups. How else can we sort them?\""
          ],
          "columns": [
            "First, the children sorted their rocks by {{c0}}. Then Jo asked them to feel each one.",
            "Ava’s red rock was smooth, but Max’s grey rock felt rough. They made new groups for smooth and rough {{c1}}. Ava’s rock was flat. Max’s rock was bumpy. Jo said, \"Look at both groups. How else can we sort them?\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "colour",
              "paragraph": 0,
              "prompt": "First, the children sorted their rocks by ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rocks",
              "paragraph": 3,
              "prompt": "They made new groups for smooth and rough ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "rocks"
            },
            {
              "id": "w0",
              "word": "colour"
            }
          ]
        }
      },
      {
        "text": [
          "Ava drew each rock in her notebook.",
          "Max added a word to show how it felt.",
          "Jo said their notes would help them remember what they had noticed.",
          "The children put their small collection in a box and planned another rock day."
        ],
        "mc": [
          {
            "prompt": "Why did the children make notes?",
            "choices": [
              "To make the rocks heavier",
              "To cover the box",
              "To remember what they noticed"
            ],
            "answer": 2,
            "skill": "Find a reason",
            "evidence": "help them remember"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Ava added",
              "drawings"
            ],
            [
              "Max added",
              "describing words"
            ]
          ],
          "options": [
            "describing words",
            "drawings"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Ava added drawings",
            "Max added describing words"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava drew each rock in her {{c0}}.",
            "Max added a word to show how it felt.",
            "Jo said their notes would help them remember what they had noticed.",
            "The children put their small collection in a {{c1}} and planned another rock day."
          ],
          "parts": [
            "Ava drew each rock in her {{c0}}.\n\nMax added a word to show how it felt.\n\nJo said their notes would help them remember what they had noticed.\n\nThe children put their small collection in a {{c1}} and planned another rock day."
          ],
          "columns": [
            "Ava drew each rock in her {{c0}}. Max added a word to show how it felt.",
            "Jo said their notes would help them remember what they had noticed. The children put their small collection in a {{c1}} and planned another rock day."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "notebook",
              "paragraph": 0,
              "prompt": "Ava drew each rock in her ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "box",
              "paragraph": 3,
              "prompt": "The children put their small collection in a ______ and planned another rock day."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "box"
            },
            {
              "id": "w0",
              "word": "notebook"
            }
          ]
        }
      }
    ],
    "intro": "182 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "G": {
    "grade": "F&P G target",
    "titles": [
      "Two happy collectors",
      "Brush, wash, and look",
      "Two ways to sort",
      "A book of discoveries"
    ],
    "sections": [
      {
        "text": [
          "It was a sunny morning. The tray sat on a table.",
          "Ava and Max loved collecting rocks. Jo brought a tray of loose garden stones for them to explore.",
          "The children could each choose two small stones to keep. They looked at the colours and shapes before choosing.",
          "Max had brought a cloth bag, and Ava had brought her notebook. They were ready to look closely."
        ],
        "mc": [
          {
            "prompt": "How many stones could each child keep?",
            "choices": [
              "One",
              "Ten",
              "Two"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "each choose two"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Max brought",
              "a cloth bag"
            ],
            [
              "Ava brought",
              "a notebook"
            ]
          ],
          "options": [
            "a notebook",
            "a cloth bag"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Max brought a cloth bag",
            "Ava brought a notebook"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was a sunny morning. The tray sat on a table.",
            "Ava and Max loved collecting {{c0}}. Jo brought a tray of loose garden stones for them to explore.",
            "The children could each choose two small stones to keep. They looked at the colours and shapes before choosing.",
            "Max had brought a cloth {{c1}}, and Ava had brought her notebook. They were ready to look closely."
          ],
          "parts": [
            "It was a sunny morning. The tray sat on a table.\n\nAva and Max loved collecting {{c0}}. Jo brought a tray of loose garden stones for them to explore.\n\nThe children could each choose two small stones to keep. They looked at the colours and shapes before choosing.\n\nMax had brought a cloth {{c1}}, and Ava had brought her notebook. They were ready to look closely."
          ],
          "columns": [
            "It was a sunny morning. The tray sat on a table. Ava and Max loved collecting {{c0}}. Jo brought a tray of loose garden stones for them to explore.",
            "The children could each choose two small stones to keep. They looked at the colours and shapes before choosing. Max had brought a cloth {{c1}}, and Ava had brought her notebook. They were ready to look closely."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rocks",
              "paragraph": 1,
              "prompt": "Ava and Max loved collecting ______. Jo brought a tray of loose garden stones for them to explore."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "bag",
              "paragraph": 3,
              "prompt": "Max had brought a cloth ______, and Ava had brought her notebook. They were ready to look closely."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "bag"
            },
            {
              "id": "w0",
              "word": "rocks"
            }
          ]
        }
      },
      {
        "text": [
          "Ava cleaned a red stone with a soft brush. Max washed a grey stone and waited for it to dry.",
          "Jo gave them a hand lens. It made small details look bigger when they held it over a rock.",
          "The children could now see tiny dots in Max’s stone. They had not noticed the dots before."
        ],
        "mc": [
          {
            "prompt": "What helped them see small details?",
            "choices": [
              "A red flag",
              "A hand lens",
              "A cloth bag"
            ],
            "answer": 1,
            "skill": "Connect a tool to its purpose",
            "evidence": "make small details look bigger"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Ava used",
              "a soft brush"
            ],
            [
              "Max found",
              "tiny dots"
            ]
          ],
          "options": [
            "tiny dots",
            "a soft brush"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ava used a soft brush",
            "Max found tiny dots"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava cleaned a red stone with a soft {{c0}}. Max washed a grey stone and waited for it to dry.",
            "Jo gave them a hand lens. It made small details look bigger when they held it over a rock.",
            "The children could now see tiny dots in Max’s {{c1}}. They had not noticed the dots before."
          ],
          "parts": [
            "Ava cleaned a red stone with a soft {{c0}}. Max washed a grey stone and waited for it to dry.\n\nJo gave them a hand lens. It made small details look bigger when they held it over a rock.\n\nThe children could now see tiny dots in Max’s {{c1}}. They had not noticed the dots before."
          ],
          "columns": [
            "Ava cleaned a red stone with a soft {{c0}}. Max washed a grey stone and waited for it to dry. Jo gave them a hand lens. It made small details look bigger when they held it over a rock.",
            "The children could now see tiny dots in Max’s {{c1}}. They had not noticed the dots before."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "brush",
              "paragraph": 0,
              "prompt": "Ava cleaned a red stone with a soft ______. Max washed a grey stone and waited for it to dry."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "stone",
              "paragraph": 2,
              "prompt": "The children could now see tiny dots in Max’s ______. They had not noticed the dots before."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "stone"
            },
            {
              "id": "w0",
              "word": "brush"
            }
          ]
        }
      },
      {
        "text": [
          "First, Ava and Max sorted the rocks by colour. Red stones went together, and grey stones went together.",
          "Then Jo asked them to feel the surfaces. Ava’s red rock was smooth, but Max’s grey rock felt rough.",
          "They made new groups for smooth and rough rocks. The same rocks could be sorted in a different way.",
          "Ava’s rock was flat. Max’s rock was bumpy.",
          "Jo said, \"Look at both groups. How else can we sort them?\""
        ],
        "mc": [
          {
            "prompt": "How did they sort the rocks the second time?",
            "choices": [
              "By how they felt",
              "By who was tallest",
              "By the size of the bags"
            ],
            "answer": 0,
            "skill": "Follow a sequence",
            "evidence": "new groups for smooth and rough"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The red rock",
              "felt smooth"
            ],
            [
              "The grey rock",
              "felt rough"
            ]
          ],
          "options": [
            "felt rough",
            "felt smooth"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The red rock felt smooth",
            "The grey rock felt rough"
          ]
        },
        "cloze": {
          "paragraphs": [
            "First, Ava and Max sorted the rocks by {{c0}}. Red stones went together, and grey stones went together.",
            "Then Jo asked them to feel the surfaces. Ava’s red rock was smooth, but Max’s grey rock felt rough.",
            "They made new groups for smooth and rough {{c1}}. The same rocks could be sorted in a different way.",
            "Ava’s rock was flat. Max’s rock was bumpy.",
            "Jo said, \"Look at both groups. How else can we sort them?\""
          ],
          "parts": [
            "First, Ava and Max sorted the rocks by {{c0}}. Red stones went together, and grey stones went together.\n\nThen Jo asked them to feel the surfaces. Ava’s red rock was smooth, but Max’s grey rock felt rough.\n\nThey made new groups for smooth and rough {{c1}}. The same rocks could be sorted in a different way.\n\nAva’s rock was flat. Max’s rock was bumpy.\n\nJo said, \"Look at both groups. How else can we sort them?\""
          ],
          "columns": [
            "First, Ava and Max sorted the rocks by {{c0}}. Red stones went together, and grey stones went together. Then Jo asked them to feel the surfaces. Ava’s red rock was smooth, but Max’s grey rock felt rough.",
            "They made new groups for smooth and rough {{c1}}. The same rocks could be sorted in a different way. Ava’s rock was flat. Max’s rock was bumpy. Jo said, \"Look at both groups. How else can we sort them?\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "colour",
              "paragraph": 0,
              "prompt": "First, Ava and Max sorted the rocks by ______. Red stones went together, and grey stones went together."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "rocks",
              "paragraph": 2,
              "prompt": "They made new groups for smooth and rough ______. The same rocks could be sorted in a different way."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "rocks"
            },
            {
              "id": "w0",
              "word": "colour"
            }
          ]
        }
      },
      {
        "text": [
          "Ava drew each rock in her notebook. Max added a word to describe how each one felt.",
          "Their notes would help them remember the details they had noticed. Jo helped them put the samples away carefully.",
          "The children packed their small collection in a box. They already had questions for their next rock day."
        ],
        "mc": [
          {
            "prompt": "Why did the children make notes?",
            "choices": [
              "To make the rocks heavier",
              "To cover the box",
              "To remember what they noticed"
            ],
            "answer": 2,
            "skill": "Find a reason",
            "evidence": "help them remember"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Ava added",
              "drawings"
            ],
            [
              "Max added",
              "describing words"
            ]
          ],
          "options": [
            "describing words",
            "drawings"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ava added drawings",
            "Max added describing words"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava drew each rock in her {{c0}}. Max added a word to describe how each one felt.",
            "Their notes would help them remember the details they had noticed. Jo helped them put the samples away carefully.",
            "The children packed their small collection in a {{c1}}. They already had questions for their next rock day."
          ],
          "parts": [
            "Ava drew each rock in her {{c0}}. Max added a word to describe how each one felt.\n\nTheir notes would help them remember the details they had noticed. Jo helped them put the samples away carefully.\n\nThe children packed their small collection in a {{c1}}. They already had questions for their next rock day."
          ],
          "columns": [
            "Ava drew each rock in her {{c0}}. Max added a word to describe how each one felt. Their notes would help them remember the details they had noticed. Jo helped them put the samples away carefully.",
            "The children packed their small collection in a {{c1}}. They already had questions for their next rock day."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "notebook",
              "paragraph": 0,
              "prompt": "Ava drew each rock in her ______. Max added a word to describe how each one felt."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "box",
              "paragraph": 2,
              "prompt": "The children packed their small collection in a ______. They already had questions for their next rock day."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "box"
            },
            {
              "id": "w0",
              "word": "notebook"
            }
          ]
        }
      }
    ],
    "intro": "252 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "L": {
    "grade": "F&P L target",
    "titles": [
      "The tray of possibilities",
      "Small things become visible",
      "A rock can belong to two groups",
      "Taking home questions"
    ],
    "sections": [
      {
        "text": [
          "Ava and Max could turn almost any walk into a conversation about rocks. Ava liked rounded pebbles; Max searched for patterns that looked like tiny maps.",
          "Today, Jo brought a tray of loose garden stones for them to examine. They could each choose two small samples to keep.",
          "Before choosing, the children spread a cloth over the table and set out a brush, a hand lens, and a notebook.",
          "Max reached for the brightest stone. Ava suggested looking at all of them first. There might be something interesting about an ordinary grey pebble too."
        ],
        "mc": [
          {
            "prompt": "How do the children’s interests differ?",
            "choices": [
              "Both look only for red rocks.",
              "Ava dislikes rocks; Max loves them.",
              "Max only wants large stones.",
              "Ava likes rounded pebbles; Max likes patterns."
            ],
            "answer": 3,
            "skill": "Compare details",
            "evidence": "Ava liked rounded pebbles"
          },
          {
            "prompt": "Why does Ava suggest looking at every stone?",
            "choices": [
              "Jo has asked them to finish quickly.",
              "The notebook is already full.",
              "An ordinary-looking stone may have interesting details.",
              "She wants to hide the brightest one."
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "ordinary grey pebble too"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Max searched for",
              "interesting patterns"
            ],
            [
              "The hand lens",
              "was one of their tools"
            ]
          ],
          "options": [
            "was one of their tools",
            "interesting patterns"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Max searched for interesting patterns",
            "The hand lens was one of their tools"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava and Max could turn almost any walk into a conversation about {{c0}}. Ava liked rounded pebbles; Max searched for patterns that looked like tiny maps.",
            "Today, Jo brought a tray of loose garden stones for them to examine. They could each choose two small samples to keep.",
            "Before choosing, the children spread a cloth over the table and set out a brush, a hand {{c1}}, and a notebook.",
            "Max reached for the brightest stone. Ava suggested looking at all of them first. There might be something interesting about an ordinary grey {{c2}} too."
          ],
          "parts": [
            "Ava and Max could turn almost any walk into a conversation about {{c0}}. Ava liked rounded pebbles; Max searched for patterns that looked like tiny maps.\n\nToday, Jo brought a tray of loose garden stones for them to examine. They could each choose two small samples to keep.\n\nBefore choosing, the children spread a cloth over the table and set out a brush, a hand {{c1}}, and a notebook.\n\nMax reached for the brightest stone. Ava suggested looking at all of them first. There might be something interesting about an ordinary grey {{c2}} too."
          ],
          "columns": [
            "Ava and Max could turn almost any walk into a conversation about {{c0}}. Ava liked rounded pebbles; Max searched for patterns that looked like tiny maps. Today, Jo brought a tray of loose garden stones for them to examine. They could each choose two small samples to keep.",
            "Before choosing, the children spread a cloth over the table and set out a brush, a hand {{c1}}, and a notebook. Max reached for the brightest stone. Ava suggested looking at all of them first. There might be something interesting about an ordinary grey {{c2}} too."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "rocks",
              "paragraph": 0,
              "prompt": "Ava and Max could turn almost any walk into a conversation about ______. Ava liked rounded pebbles; Max searched for patterns that looked like tiny maps."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "lens",
              "paragraph": 2,
              "prompt": "Before choosing, the children spread a cloth over the table and set out a brush, a hand ______, and a notebook."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "pebble",
              "paragraph": 3,
              "prompt": "Max reached for the brightest stone. Ava suggested looking at all of them first. There might be something interesting about an ordinary grey ______ too."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "pebble"
            },
            {
              "id": "w1",
              "word": "lens"
            },
            {
              "id": "w0",
              "word": "rocks"
            }
          ]
        }
      },
      {
        "text": [
          "Ava loosened dirt from a grey stone with the soft brush. After washing it and letting it dry, she passed it to Max.",
          "Through the hand lens, Max could see small grains that had been hard to notice before. Some caught the light.",
          "Jo showed them a labelled sample of granite. She explained that rocks can contain different minerals and that a lens helps reveal their grains.",
          "The children did not give their garden stone a name just because it sparkled. Instead, Ava wrote, \"Grey, rough, with shiny grains.\" It was a description they could check again."
        ],
        "mc": [
          {
            "prompt": "What new detail does Max notice?",
            "choices": [
              "A hidden leaf inside the bag",
              "A moving shadow on the wall",
              "Small grains, some of which catch the light",
              "A painted race number"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "small grains"
          },
          {
            "prompt": "Why do the children describe the stone before naming it?",
            "choices": [
              "Every grey stone is the same rock.",
              "They have observations but need more evidence for a name.",
              "They do not enjoy learning about rocks.",
              "Jo has lost all the samples."
            ],
            "answer": 1,
            "skill": "Explain scientific thinking",
            "evidence": "description they could check again"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The brush",
              "removed loose dirt"
            ],
            [
              "The notebook description",
              "recorded what they observed"
            ]
          ],
          "options": [
            "recorded what they observed",
            "removed loose dirt"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The brush removed loose dirt",
            "The notebook description recorded what they observed"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava loosened dirt from a grey stone with the soft {{c0}}. After washing it and letting it dry, she passed it to Max.",
            "Through the hand lens, Max could see small grains that had been hard to notice before. Some caught the {{c1}}.",
            "Jo showed them a labelled sample of granite. She explained that rocks can contain different minerals and that a lens helps reveal their grains.",
            "The children did not give their garden stone a name just because it sparkled. Instead, Ava wrote, \"Grey, rough, with shiny {{c2}}.\" It was a description they could check again."
          ],
          "parts": [
            "Ava loosened dirt from a grey stone with the soft {{c0}}. After washing it and letting it dry, she passed it to Max.\n\nThrough the hand lens, Max could see small grains that had been hard to notice before. Some caught the {{c1}}.\n\nJo showed them a labelled sample of granite. She explained that rocks can contain different minerals and that a lens helps reveal their grains.\n\nThe children did not give their garden stone a name just because it sparkled. Instead, Ava wrote, \"Grey, rough, with shiny {{c2}}.\" It was a description they could check again."
          ],
          "columns": [
            "Ava loosened dirt from a grey stone with the soft {{c0}}. After washing it and letting it dry, she passed it to Max. Through the hand lens, Max could see small grains that had been hard to notice before. Some caught the {{c1}}.",
            "Jo showed them a labelled sample of granite. She explained that rocks can contain different minerals and that a lens helps reveal their grains. The children did not give their garden stone a name just because it sparkled. Instead, Ava wrote, \"Grey, rough, with shiny {{c2}}.\" It was a description they could check again."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "brush",
              "paragraph": 0,
              "prompt": "Ava loosened dirt from a grey stone with the soft ______. After washing it and letting it dry, she passed it to Max."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "light",
              "paragraph": 1,
              "prompt": "Through the hand lens, Max could see small grains that had been hard to notice before. Some caught the ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "grains",
              "paragraph": 3,
              "prompt": "The children did not give their garden stone a name just because it sparkled. Instead, Ava wrote, \"Grey, rough, with shiny ______.\" It was a description they could check again."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "grains"
            },
            {
              "id": "w1",
              "word": "light"
            },
            {
              "id": "w0",
              "word": "brush"
            }
          ]
        }
      },
      {
        "text": [
          "Max arranged the stones by colour. Ava arranged the same stones by how smooth or rough they felt. The groups were different each time.",
          "At first, Max thought one arrangement must be wrong. Jo asked which question each arrangement answered.",
          "Colour groups showed which stones looked alike in one way. Texture groups showed how their surfaces felt. Both were useful ways to organise observations.",
          "Jo then showed them a quartz crystal from her teaching collection. The children learned that a mineral crystal and a rock were not simply two names for the same thing."
        ],
        "mc": [
          {
            "prompt": "Why are both arrangements useful?",
            "choices": [
              "They make the stones change colour.",
              "Each groups the stones by a different feature.",
              "They both prove every rock has the same name.",
              "They use different stones."
            ],
            "answer": 1,
            "skill": "Connect ideas",
            "evidence": "which question each arrangement answered"
          },
          {
            "prompt": "What does “texture” describe in this story?",
            "choices": [
              "How a surface feels",
              "The name of a child",
              "How heavy the notebook is",
              "The colour of the cloth bag"
            ],
            "answer": 0,
            "skill": "Use vocabulary in context",
            "evidence": "how their surfaces felt"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Colour groups",
              "compared appearance"
            ],
            [
              "Texture groups",
              "compared surfaces"
            ]
          ],
          "options": [
            "compared surfaces",
            "compared appearance"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Colour groups compared appearance",
            "Texture groups compared surfaces"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max arranged the stones by {{c0}}. Ava arranged the same stones by how smooth or rough they felt. The groups were different each time.",
            "At first, Max thought one arrangement must be wrong. Jo asked which question each arrangement answered.",
            "Colour groups showed which stones looked alike in one way. Texture groups showed how their surfaces {{c1}}. Both were useful ways to organise observations.",
            "Jo then showed them a quartz crystal from her teaching collection. The children learned that a mineral crystal and a rock were not simply two names for the same {{c2}}."
          ],
          "parts": [
            "Max arranged the stones by {{c0}}. Ava arranged the same stones by how smooth or rough they felt. The groups were different each time.\n\nAt first, Max thought one arrangement must be wrong. Jo asked which question each arrangement answered.\n\nColour groups showed which stones looked alike in one way. Texture groups showed how their surfaces {{c1}}. Both were useful ways to organise observations.\n\nJo then showed them a quartz crystal from her teaching collection. The children learned that a mineral crystal and a rock were not simply two names for the same {{c2}}."
          ],
          "columns": [
            "Max arranged the stones by {{c0}}. Ava arranged the same stones by how smooth or rough they felt. The groups were different each time. At first, Max thought one arrangement must be wrong. Jo asked which question each arrangement answered.",
            "Colour groups showed which stones looked alike in one way. Texture groups showed how their surfaces {{c1}}. Both were useful ways to organise observations. Jo then showed them a quartz crystal from her teaching collection. The children learned that a mineral crystal and a rock were not simply two names for the same {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "colour",
              "paragraph": 0,
              "prompt": "Max arranged the stones by ______. Ava arranged the same stones by how smooth or rough they felt. The groups were different each time."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "felt",
              "paragraph": 2,
              "prompt": "Colour groups showed which stones looked alike in one way. Texture groups showed how their surfaces ______. Both were useful ways to organise observations."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "thing",
              "paragraph": 3,
              "prompt": "Jo then showed them a quartz crystal from her teaching collection. The children learned that a mineral crystal and a rock were not simply two names for the same ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "thing"
            },
            {
              "id": "w1",
              "word": "felt"
            },
            {
              "id": "w0",
              "word": "colour"
            }
          ]
        }
      },
      {
        "text": [
          "The children chose two small samples each and put a numbered label beside every rock. Their notebook matched each number to a drawing and a description.",
          "Max had wanted the brightest stone at the start. Now he chose a plain grey one because its tiny grains had surprised him.",
          "Ava selected a smooth pebble and a rough red stone so she could compare them again at home.",
          "They packed their collection carefully. Their box was small, but their list of questions was growing. For both children, the best part of collecting was having another reason to look closely."
        ],
        "mc": [
          {
            "prompt": "Why does Max choose a plain grey stone?",
            "choices": [
              "Its tiny grains interest him.",
              "It is the largest stone on the table.",
              "Jo says bright stones are not allowed.",
              "Ava has painted it grey."
            ],
            "answer": 0,
            "skill": "Trace a change",
            "evidence": "its tiny grains had surprised him"
          },
          {
            "prompt": "How do the labels help the children?",
            "choices": [
              "They make every stone smooth.",
              "They tell the children which rock is oldest.",
              "They change the rocks into crystals.",
              "They connect each sample to its notes."
            ],
            "answer": 3,
            "skill": "Connect a tool to its purpose",
            "evidence": "matched each number"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The numbered labels",
              "linked rocks and notes"
            ],
            [
              "The growing questions",
              "showed their curiosity"
            ]
          ],
          "options": [
            "showed their curiosity",
            "linked rocks and notes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The numbered labels linked rocks and notes",
            "The growing questions showed their curiosity"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The children chose two small samples each and put a numbered {{c0}} beside every rock. Their notebook matched each number to a drawing and a description.",
            "Max had wanted the brightest stone at the start. Now he chose a plain grey one because its tiny grains had surprised him.",
            "Ava selected a smooth pebble and a rough red stone so she could compare them again at {{c1}}.",
            "They packed their collection carefully. Their box was small, but their list of questions was growing. For both children, the best part of collecting was having another reason to look {{c2}}."
          ],
          "parts": [
            "The children chose two small samples each and put a numbered {{c0}} beside every rock. Their notebook matched each number to a drawing and a description.\n\nMax had wanted the brightest stone at the start. Now he chose a plain grey one because its tiny grains had surprised him.\n\nAva selected a smooth pebble and a rough red stone so she could compare them again at {{c1}}.\n\nThey packed their collection carefully. Their box was small, but their list of questions was growing. For both children, the best part of collecting was having another reason to look {{c2}}."
          ],
          "columns": [
            "The children chose two small samples each and put a numbered {{c0}} beside every rock. Their notebook matched each number to a drawing and a description. Max had wanted the brightest stone at the start. Now he chose a plain grey one because its tiny grains had surprised him.",
            "Ava selected a smooth pebble and a rough red stone so she could compare them again at {{c1}}. They packed their collection carefully. Their box was small, but their list of questions was growing. For both children, the best part of collecting was having another reason to look {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "label",
              "paragraph": 0,
              "prompt": "The children chose two small samples each and put a numbered ______ beside every rock. Their notebook matched each number to a drawing and a description."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "home",
              "paragraph": 2,
              "prompt": "Ava selected a smooth pebble and a rough red stone so she could compare them again at ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "closely",
              "paragraph": 3,
              "prompt": "They packed their collection carefully. Their box was small, but their list of questions was growing. For both children, the best part of collecting was having another reason to look ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "closely"
            },
            {
              "id": "w1",
              "word": "home"
            },
            {
              "id": "w0",
              "word": "label"
            }
          ]
        }
      }
    ],
    "intro": "383 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "M": {
    "grade": "F&P M target",
    "titles": [
      "The tray of possibilities",
      "Small things become visible",
      "A rock can belong to two groups",
      "Taking home questions"
    ],
    "sections": [
      {
        "text": [
          "Ava and Max enjoyed finding stones that made them stop and look again. Ava liked rounded pebbles, while Max searched for patterns and bright colours.",
          "Jo brought a tray of loose garden rocks for them to study. Each child could choose two small samples to keep after looking at the whole collection.",
          "They spread a cloth on the table and arranged a soft brush, a hand lens, and a notebook beside it. Max reached immediately for a red stone.",
          "Ava picked up an ordinary grey one and suggested examining it too. A stone did not have to be bright to contain an interesting detail. Max agreed to compare both before making his choice."
        ],
        "mc": [
          {
            "prompt": "How do the children’s interests differ?",
            "choices": [
              "Both look only for red rocks.",
              "Ava dislikes rocks; Max loves them.",
              "Max only wants large stones.",
              "Ava likes rounded pebbles; Max likes patterns."
            ],
            "answer": 3,
            "skill": "Compare details",
            "evidence": "Ava liked rounded pebbles"
          },
          {
            "prompt": "Why does Ava suggest looking at every stone?",
            "choices": [
              "Jo has asked them to finish quickly.",
              "The notebook is already full.",
              "An ordinary-looking stone may have interesting details.",
              "She wants to hide the brightest one."
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "did not have to be bright"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Max searched for",
              "interesting patterns"
            ],
            [
              "The hand lens",
              "was one of their tools"
            ]
          ],
          "options": [
            "was one of their tools",
            "interesting patterns"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Max searched for interesting patterns",
            "The hand lens was one of their tools"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava and Max enjoyed finding stones that made them stop and look again. Ava liked rounded {{c0}}, while Max searched for patterns and bright colours.",
            "Jo brought a tray of loose garden rocks for them to study. Each child could choose two small samples to keep after looking at the whole collection.",
            "They spread a cloth on the table and arranged a soft brush, a hand {{c1}}, and a notebook beside it. Max reached immediately for a red stone.",
            "Ava picked up an ordinary grey one and suggested examining it too. A stone did not have to be bright to contain an interesting {{c2}}. Max agreed to compare both before making his choice."
          ],
          "parts": [
            "Ava and Max enjoyed finding stones that made them stop and look again. Ava liked rounded {{c0}}, while Max searched for patterns and bright colours.\n\nJo brought a tray of loose garden rocks for them to study. Each child could choose two small samples to keep after looking at the whole collection.\n\nThey spread a cloth on the table and arranged a soft brush, a hand {{c1}}, and a notebook beside it. Max reached immediately for a red stone.\n\nAva picked up an ordinary grey one and suggested examining it too. A stone did not have to be bright to contain an interesting {{c2}}. Max agreed to compare both before making his choice."
          ],
          "columns": [
            "Ava and Max enjoyed finding stones that made them stop and look again. Ava liked rounded {{c0}}, while Max searched for patterns and bright colours. Jo brought a tray of loose garden rocks for them to study. Each child could choose two small samples to keep after looking at the whole collection.",
            "They spread a cloth on the table and arranged a soft brush, a hand {{c1}}, and a notebook beside it. Max reached immediately for a red stone. Ava picked up an ordinary grey one and suggested examining it too. A stone did not have to be bright to contain an interesting {{c2}}. Max agreed to compare both before making his choice."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "pebbles",
              "paragraph": 0,
              "prompt": "Ava and Max enjoyed finding stones that made them stop and look again. Ava liked rounded ______, while Max searched for patterns and bright colours."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "lens",
              "paragraph": 2,
              "prompt": "They spread a cloth on the table and arranged a soft brush, a hand ______, and a notebook beside it. Max reached immediately for a red stone."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "detail",
              "paragraph": 3,
              "prompt": "Ava picked up an ordinary grey one and suggested examining it too. A stone did not have to be bright to contain an interesting ______. Max agreed to compare both before making his choice."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "detail"
            },
            {
              "id": "w1",
              "word": "lens"
            },
            {
              "id": "w0",
              "word": "pebbles"
            }
          ]
        }
      },
      {
        "text": [
          "Ava brushed loose dirt from the grey stone, washed it, and let it dry. Max then studied its surface through their hand lens.",
          "He could make out small grains that had been difficult to see before. Some reflected light, while others looked dark.",
          "Jo showed them a labelled granite specimen from her teaching collection. She explained that rocks can contain different minerals, whose grains can be useful to observe.",
          "The children did not decide their stone was granite simply because some grains shone. Ava recorded the colour, rough surface, and shiny grains. They could compare those observations again without pretending to have proved a name."
        ],
        "mc": [
          {
            "prompt": "What new detail does Max notice?",
            "choices": [
              "A hidden leaf inside the bag",
              "A moving shadow on the wall",
              "Small grains, some of which catch the light",
              "A painted race number"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "small grains"
          },
          {
            "prompt": "Why do the children describe the stone before naming it?",
            "choices": [
              "Every grey stone is the same rock.",
              "They have observations but need more evidence for a name.",
              "They do not enjoy learning about rocks.",
              "Jo has lost all the samples."
            ],
            "answer": 1,
            "skill": "Explain scientific thinking",
            "evidence": "without pretending to have proved a name"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The brush",
              "removed loose dirt"
            ],
            [
              "The notebook description",
              "recorded what they observed"
            ]
          ],
          "options": [
            "recorded what they observed",
            "removed loose dirt"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The brush removed loose dirt",
            "The notebook description recorded what they observed"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava brushed loose dirt from the grey {{c0}}, washed it, and let it dry. Max then studied its surface through their hand lens.",
            "He could make out small grains that had been difficult to see before. Some reflected light, while others looked {{c1}}.",
            "Jo showed them a labelled granite specimen from her teaching collection. She explained that rocks can contain different minerals, whose grains can be useful to observe.",
            "The children did not decide their stone was granite simply because some grains shone. Ava recorded the colour, rough surface, and shiny {{c2}}. They could compare those observations again without pretending to have proved a name."
          ],
          "parts": [
            "Ava brushed loose dirt from the grey {{c0}}, washed it, and let it dry. Max then studied its surface through their hand lens.\n\nHe could make out small grains that had been difficult to see before. Some reflected light, while others looked {{c1}}.\n\nJo showed them a labelled granite specimen from her teaching collection. She explained that rocks can contain different minerals, whose grains can be useful to observe.\n\nThe children did not decide their stone was granite simply because some grains shone. Ava recorded the colour, rough surface, and shiny {{c2}}. They could compare those observations again without pretending to have proved a name."
          ],
          "columns": [
            "Ava brushed loose dirt from the grey {{c0}}, washed it, and let it dry. Max then studied its surface through their hand lens. He could make out small grains that had been difficult to see before. Some reflected light, while others looked {{c1}}.",
            "Jo showed them a labelled granite specimen from her teaching collection. She explained that rocks can contain different minerals, whose grains can be useful to observe. The children did not decide their stone was granite simply because some grains shone. Ava recorded the colour, rough surface, and shiny {{c2}}. They could compare those observations again without pretending to have proved a name."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "stone",
              "paragraph": 0,
              "prompt": "Ava brushed loose dirt from the grey ______, washed it, and let it dry. Max then studied its surface through their hand lens."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "dark",
              "paragraph": 1,
              "prompt": "He could make out small grains that had been difficult to see before. Some reflected light, while others looked ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "grains",
              "paragraph": 3,
              "prompt": "The children did not decide their stone was granite simply because some grains shone. Ava recorded the colour, rough surface, and shiny ______. They could compare those observations again without pretending to have proved a name."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "grains"
            },
            {
              "id": "w1",
              "word": "dark"
            },
            {
              "id": "w0",
              "word": "stone"
            }
          ]
        }
      },
      {
        "text": [
          "Max’s first groups were based on colour. Ava used the same stones to make groups of smooth and rough surfaces. The two arrangements looked quite different.",
          "Max wondered which one was correct. Jo asked what feature they were comparing each time, and the children began to see why both arrangements could be useful.",
          "Texture described how a surface felt. Colour described another visible feature. One stone could belong to a group in each arrangement without changing into a different rock.",
          "Jo also showed them a quartz crystal. The children learned to distinguish a mineral specimen from a rock sample, then added the two terms to their growing notebook."
        ],
        "mc": [
          {
            "prompt": "Why are both arrangements useful?",
            "choices": [
              "They make the stones change colour.",
              "Each groups the stones by a different feature.",
              "They both prove every rock has the same name.",
              "They use different stones."
            ],
            "answer": 1,
            "skill": "Connect ideas",
            "evidence": "what feature they were comparing"
          },
          {
            "prompt": "What does “texture” describe in this story?",
            "choices": [
              "How a surface feels",
              "The name of a child",
              "How heavy the notebook is",
              "The colour of the cloth bag"
            ],
            "answer": 0,
            "skill": "Use vocabulary in context",
            "evidence": "Texture described how a surface felt"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Colour groups",
              "compared appearance"
            ],
            [
              "Texture groups",
              "compared surfaces"
            ]
          ],
          "options": [
            "compared surfaces",
            "compared appearance"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Colour groups compared appearance",
            "Texture groups compared surfaces"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max’s first groups were based on {{c0}}. Ava used the same stones to make groups of smooth and rough surfaces. The two arrangements looked quite different.",
            "Max wondered which one was correct. Jo asked what feature they were comparing each time, and the children began to see why both arrangements could be useful.",
            "Texture described how a surface felt. Colour described another visible {{c1}}. One stone could belong to a group in each arrangement without changing into a different rock.",
            "Jo also showed them a quartz crystal. The children learned to distinguish a mineral specimen from a rock sample, then added the two terms to their growing {{c2}}."
          ],
          "parts": [
            "Max’s first groups were based on {{c0}}. Ava used the same stones to make groups of smooth and rough surfaces. The two arrangements looked quite different.\n\nMax wondered which one was correct. Jo asked what feature they were comparing each time, and the children began to see why both arrangements could be useful.\n\nTexture described how a surface felt. Colour described another visible {{c1}}. One stone could belong to a group in each arrangement without changing into a different rock.\n\nJo also showed them a quartz crystal. The children learned to distinguish a mineral specimen from a rock sample, then added the two terms to their growing {{c2}}."
          ],
          "columns": [
            "Max’s first groups were based on {{c0}}. Ava used the same stones to make groups of smooth and rough surfaces. The two arrangements looked quite different. Max wondered which one was correct. Jo asked what feature they were comparing each time, and the children began to see why both arrangements could be useful.",
            "Texture described how a surface felt. Colour described another visible {{c1}}. One stone could belong to a group in each arrangement without changing into a different rock. Jo also showed them a quartz crystal. The children learned to distinguish a mineral specimen from a rock sample, then added the two terms to their growing {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "colour",
              "paragraph": 0,
              "prompt": "Max’s first groups were based on ______. Ava used the same stones to make groups of smooth and rough surfaces. The two arrangements looked quite different."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "feature",
              "paragraph": 2,
              "prompt": "Texture described how a surface felt. Colour described another visible ______. One stone could belong to a group in each arrangement without changing into a different rock."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "notebook",
              "paragraph": 3,
              "prompt": "Jo also showed them a quartz crystal. The children learned to distinguish a mineral specimen from a rock sample, then added the two terms to their growing ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "notebook"
            },
            {
              "id": "w1",
              "word": "feature"
            },
            {
              "id": "w0",
              "word": "colour"
            }
          ]
        }
      },
      {
        "text": [
          "Each chosen sample received a numbered label. The children matched that number to a drawing and a description so their observations would stay connected to the right rock.",
          "Max selected the grey stone whose grains had surprised him. It looked less dramatic than the red one, but it gave him more to wonder about.",
          "Ava chose contrasting textures: a smooth pebble and a rough red stone. She wanted to compare their surfaces again at home.",
          "Their collection fitted into a small box. The notebook beside it was beginning to fill with questions. Looking carefully had made the children’s interest grow, even though each was taking home only two samples."
        ],
        "mc": [
          {
            "prompt": "Why does Max choose a plain grey stone?",
            "choices": [
              "Its tiny grains interest him.",
              "It is the largest stone on the table.",
              "Jo says bright stones are not allowed.",
              "Ava has painted it grey."
            ],
            "answer": 0,
            "skill": "Trace a change",
            "evidence": "whose grains had surprised him"
          },
          {
            "prompt": "How do the labels help the children?",
            "choices": [
              "They make every stone smooth.",
              "They tell the children which rock is oldest.",
              "They change the rocks into crystals.",
              "They connect each sample to its notes."
            ],
            "answer": 3,
            "skill": "Connect a tool to its purpose",
            "evidence": "matched that number to a drawing"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The numbered labels",
              "linked rocks and notes"
            ],
            [
              "The growing questions",
              "showed their curiosity"
            ]
          ],
          "options": [
            "showed their curiosity",
            "linked rocks and notes"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The numbered labels linked rocks and notes",
            "The growing questions showed their curiosity"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Each chosen sample received a numbered {{c0}}. The children matched that number to a drawing and a description so their observations would stay connected to the right rock.",
            "Max selected the grey stone whose grains had surprised him. It looked less dramatic than the red one, but it gave him more to wonder about.",
            "Ava chose contrasting textures: a smooth pebble and a rough red {{c1}}. She wanted to compare their surfaces again at home.",
            "Their collection fitted into a small box. The notebook beside it was beginning to fill with questions. Looking carefully had made the children’s interest {{c2}}, even though each was taking home only two samples."
          ],
          "parts": [
            "Each chosen sample received a numbered {{c0}}. The children matched that number to a drawing and a description so their observations would stay connected to the right rock.\n\nMax selected the grey stone whose grains had surprised him. It looked less dramatic than the red one, but it gave him more to wonder about.\n\nAva chose contrasting textures: a smooth pebble and a rough red {{c1}}. She wanted to compare their surfaces again at home.\n\nTheir collection fitted into a small box. The notebook beside it was beginning to fill with questions. Looking carefully had made the children’s interest {{c2}}, even though each was taking home only two samples."
          ],
          "columns": [
            "Each chosen sample received a numbered {{c0}}. The children matched that number to a drawing and a description so their observations would stay connected to the right rock. Max selected the grey stone whose grains had surprised him. It looked less dramatic than the red one, but it gave him more to wonder about.",
            "Ava chose contrasting textures: a smooth pebble and a rough red {{c1}}. She wanted to compare their surfaces again at home. Their collection fitted into a small box. The notebook beside it was beginning to fill with questions. Looking carefully had made the children’s interest {{c2}}, even though each was taking home only two samples."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "label",
              "paragraph": 0,
              "prompt": "Each chosen sample received a numbered ______. The children matched that number to a drawing and a description so their observations would stay connected to the right rock."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "stone",
              "paragraph": 2,
              "prompt": "Ava chose contrasting textures: a smooth pebble and a rough red ______. She wanted to compare their surfaces again at home."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "grow",
              "paragraph": 3,
              "prompt": "Their collection fitted into a small box. The notebook beside it was beginning to fill with questions. Looking carefully had made the children’s interest ______, even though each was taking home only two samples."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "grow"
            },
            {
              "id": "w1",
              "word": "stone"
            },
            {
              "id": "w0",
              "word": "label"
            }
          ]
        }
      }
    ],
    "intro": "435 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "N": {
    "grade": "F&P N target",
    "titles": [
      "More than the brightest stone",
      "Observation before a name",
      "Different questions, different groups",
      "A collection that kept growing"
    ],
    "sections": [
      {
        "text": [
          "The Pocket Geologists was the name Ava and Max had given their rock-collecting club. Most of their investigations began in Jo’s garden rather than on an expedition.",
          "Ava noticed rounded shapes and wondered where a pebble might have travelled. Max preferred stones with strong colours or unusual patterns.",
          "Jo brought a tray of loose garden samples and gave each child permission to choose two. They set a lens, brush, ruler, and notebook beside the tray before starting.",
          "Max reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting detail. Max kept the red stone nearby while agreeing to take a closer look."
        ],
        "mc": [
          {
            "prompt": "What is the main difference between the children’s first interests?",
            "choices": [
              "Ava collects only minerals; Max collects only fossils.",
              "Max wants to stop collecting; Ava wants to begin.",
              "Both judge every stone only by its size.",
              "Shapes interest Ava; striking colours interest Max."
            ],
            "answer": 3,
            "skill": "Compare perspectives",
            "evidence": "Ava noticed rounded shapes"
          },
          {
            "prompt": "What does Ava’s suggestion reveal about her?",
            "choices": [
              "She thinks grey rocks are always older.",
              "She wants Max to leave the table.",
              "She investigates details that are not obvious at first.",
              "She already knows the name of every stone."
            ],
            "answer": 2,
            "skill": "Infer a quality",
            "evidence": "might hide an interesting detail"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The Pocket Geologists",
              "was the children’s own name"
            ],
            [
              "Max’s first choice",
              "was a striking red stone"
            ],
            [
              "Jo’s tools",
              "supported close observation"
            ]
          ],
          "options": [
            "supported close observation",
            "was a striking red stone",
            "was the children’s own name"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The Pocket Geologists was the children’s own name",
            "Max’s first choice was a striking red stone",
            "Jo’s tools supported close observation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The Pocket Geologists was the name Ava and Max had given their rock-collecting {{c0}}. Most of their investigations began in Jo’s garden rather than on an expedition.",
            "Ava noticed rounded shapes and wondered where a pebble might have travelled. Max preferred stones with strong colours or unusual patterns.",
            "Jo brought a tray of loose garden samples and gave each child permission to choose two. They set a lens, brush, ruler, and {{c1}} beside the tray before starting.",
            "Max reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting {{c2}}. Max kept the red stone nearby while agreeing to take a closer {{c3}}."
          ],
          "parts": [
            "The Pocket Geologists was the name Ava and Max had given their rock-collecting {{c0}}. Most of their investigations began in Jo’s garden rather than on an expedition.\n\nAva noticed rounded shapes and wondered where a pebble might have travelled. Max preferred stones with strong colours or unusual patterns.\n\nJo brought a tray of loose garden samples and gave each child permission to choose two. They set a lens, brush, ruler, and {{c1}} beside the tray before starting.\n\nMax reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting {{c2}}. Max kept the red stone nearby while agreeing to take a closer {{c3}}."
          ],
          "columns": [
            "The Pocket Geologists was the name Ava and Max had given their rock-collecting {{c0}}. Most of their investigations began in Jo’s garden rather than on an expedition. Ava noticed rounded shapes and wondered where a pebble might have travelled. Max preferred stones with strong colours or unusual patterns.",
            "Jo brought a tray of loose garden samples and gave each child permission to choose two. They set a lens, brush, ruler, and {{c1}} beside the tray before starting. Max reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting {{c2}}. Max kept the red stone nearby while agreeing to take a closer {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "club",
              "paragraph": 0,
              "prompt": "The Pocket Geologists was the name Ava and Max had given their rock-collecting ______. Most of their investigations began in Jo’s garden rather than on an expedition."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "notebook",
              "paragraph": 2,
              "prompt": "Jo brought a tray of loose garden samples and gave each child permission to choose two. They set a lens, brush, ruler, and ______ beside the tray before starting."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "detail",
              "paragraph": 3,
              "prompt": "Max reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting ______. Max kept the red stone nearby while agreeing to take a closer look."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "look",
              "paragraph": 3,
              "prompt": "Max reached for a red stone, but Ava wanted to examine a plain grey one too. She thought an ordinary appearance might hide an interesting detail. Max kept the red stone nearby while agreeing to take a closer ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "look"
            },
            {
              "id": "w2",
              "word": "detail"
            },
            {
              "id": "w1",
              "word": "notebook"
            },
            {
              "id": "w0",
              "word": "club"
            }
          ]
        }
      },
      {
        "text": [
          "After brushing and washing the grey sample, Ava let it dry. Max looked through the lens and found a patchwork of tiny grains, some bright and others dark.",
          "He compared it with Jo’s labelled granite specimen and began writing the same name. Jo asked which observations supported that decision.",
          "Visible grains were a useful similarity, but their colours and arrangement differed. Rocks can contain different minerals, and an identification needs more than one shared feature.",
          "Max replaced the name with a description they could check: colour, texture, and visible grains. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the evidence."
        ],
        "mc": [
          {
            "prompt": "Why is Max’s first identification uncertain?",
            "choices": [
              "All shiny stones are the same mineral.",
              "The labelled granite sample has disappeared.",
              "A shared feature alone does not establish the rock’s identity.",
              "The hand lens cannot show grains."
            ],
            "answer": 2,
            "skill": "Evaluate evidence",
            "evidence": "needs more than one shared feature"
          },
          {
            "prompt": "Why does the description make their notebook more reliable?",
            "choices": [
              "It proves their collection contains every rock type.",
              "It separates observed details from an unconfirmed name.",
              "It makes the grey stone look brighter.",
              "It removes the need for further study."
            ],
            "answer": 1,
            "skill": "Explain scientific reasoning",
            "evidence": "a description they could check"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The hand lens",
              "revealed small grains"
            ],
            [
              "The granite specimen",
              "provided a comparison"
            ],
            [
              "The revised note",
              "recorded observations"
            ]
          ],
          "options": [
            "recorded observations",
            "provided a comparison",
            "revealed small grains"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The hand lens revealed small grains",
            "The granite specimen provided a comparison",
            "The revised note recorded observations"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After brushing and washing the grey sample, Ava let it {{c0}}. Max looked through the lens and found a patchwork of tiny grains, some bright and others dark.",
            "He compared it with Jo’s labelled granite specimen and began writing the same {{c1}}. Jo asked which observations supported that decision.",
            "Visible grains were a useful similarity, but their colours and arrangement differed. Rocks can contain different minerals, and an identification needs more than one shared feature.",
            "Max replaced the name with a description they could check: colour, texture, and visible {{c2}}. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the {{c3}}."
          ],
          "parts": [
            "After brushing and washing the grey sample, Ava let it {{c0}}. Max looked through the lens and found a patchwork of tiny grains, some bright and others dark.\n\nHe compared it with Jo’s labelled granite specimen and began writing the same {{c1}}. Jo asked which observations supported that decision.\n\nVisible grains were a useful similarity, but their colours and arrangement differed. Rocks can contain different minerals, and an identification needs more than one shared feature.\n\nMax replaced the name with a description they could check: colour, texture, and visible {{c2}}. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the {{c3}}."
          ],
          "columns": [
            "After brushing and washing the grey sample, Ava let it {{c0}}. Max looked through the lens and found a patchwork of tiny grains, some bright and others dark. He compared it with Jo’s labelled granite specimen and began writing the same {{c1}}. Jo asked which observations supported that decision.",
            "Visible grains were a useful similarity, but their colours and arrangement differed. Rocks can contain different minerals, and an identification needs more than one shared feature. Max replaced the name with a description they could check: colour, texture, and visible {{c2}}. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "dry",
              "paragraph": 0,
              "prompt": "After brushing and washing the grey sample, Ava let it ______. Max looked through the lens and found a patchwork of tiny grains, some bright and others dark."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "name",
              "paragraph": 1,
              "prompt": "He compared it with Jo’s labelled granite specimen and began writing the same ______. Jo asked which observations supported that decision."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "grains",
              "paragraph": 3,
              "prompt": "Max replaced the name with a description they could check: colour, texture, and visible ______. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the evidence."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "evidence",
              "paragraph": 3,
              "prompt": "Max replaced the name with a description they could check: colour, texture, and visible grains. His note sounded less impressive, but it was more reliable. Ava added a careful drawing so they could return to the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "evidence"
            },
            {
              "id": "w2",
              "word": "grains"
            },
            {
              "id": "w1",
              "word": "name"
            },
            {
              "id": "w0",
              "word": "dry"
            }
          ]
        }
      },
      {
        "text": [
          "Max made colour groups; Ava rearranged the stones according to texture. When the red group broke apart, Max wondered whether one of them had sorted incorrectly.",
          "Jo asked whether they had changed the stones or changed the question. The same sample could belong in both a red group and a rough group.",
          "She showed them a quartz crystal from a separate teaching collection. Mineral and rock were related terms, but were not interchangeable names for the same thing.",
          "The children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already knew. Their notes were becoming a record of learning."
        ],
        "mc": [
          {
            "prompt": "What does Jo mean by “changed the question”?",
            "choices": [
              "Only the colour groups can be useful.",
              "Each arrangement compares a different characteristic.",
              "The stones have physically changed into new rocks.",
              "Ava must copy Max’s groups."
            ],
            "answer": 1,
            "skill": "Interpret an explanation",
            "evidence": "changed the question"
          },
          {
            "prompt": "Why does the story include the quartz crystal?",
            "choices": [
              "To show that mineral and rock are related but different terms",
              "To prove every garden stone is quartz",
              "To reveal a hidden race prize",
              "To show that all crystals are red"
            ],
            "answer": 0,
            "skill": "Connect a detail to its purpose",
            "evidence": "were not interchangeable names"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The colour groups",
              "compared appearance"
            ],
            [
              "The texture groups",
              "compared surfaces"
            ],
            [
              "The ruler",
              "added size measurements"
            ]
          ],
          "options": [
            "added size measurements",
            "compared surfaces",
            "compared appearance"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The colour groups compared appearance",
            "The texture groups compared surfaces",
            "The ruler added size measurements"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max made colour groups; Ava rearranged the stones according to {{c0}}. When the red group broke apart, Max wondered whether one of them had sorted incorrectly.",
            "Jo asked whether they had changed the stones or changed the question. The same sample could belong in both a red group and a rough group.",
            "She showed them a quartz crystal from a separate teaching collection. Mineral and rock were related terms, but were not interchangeable names for the same {{c1}}.",
            "The children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already {{c2}}. Their notes were becoming a record of {{c3}}."
          ],
          "parts": [
            "Max made colour groups; Ava rearranged the stones according to {{c0}}. When the red group broke apart, Max wondered whether one of them had sorted incorrectly.\n\nJo asked whether they had changed the stones or changed the question. The same sample could belong in both a red group and a rough group.\n\nShe showed them a quartz crystal from a separate teaching collection. Mineral and rock were related terms, but were not interchangeable names for the same {{c1}}.\n\nThe children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already {{c2}}. Their notes were becoming a record of {{c3}}."
          ],
          "columns": [
            "Max made colour groups; Ava rearranged the stones according to {{c0}}. When the red group broke apart, Max wondered whether one of them had sorted incorrectly. Jo asked whether they had changed the stones or changed the question. The same sample could belong in both a red group and a rough group.",
            "She showed them a quartz crystal from a separate teaching collection. Mineral and rock were related terms, but were not interchangeable names for the same {{c1}}. The children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already {{c2}}. Their notes were becoming a record of {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "texture",
              "paragraph": 0,
              "prompt": "Max made colour groups; Ava rearranged the stones according to ______. When the red group broke apart, Max wondered whether one of them had sorted incorrectly."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "thing",
              "paragraph": 2,
              "prompt": "She showed them a quartz crystal from a separate teaching collection. Mineral and rock were related terms, but were not interchangeable names for the same ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "knew",
              "paragraph": 3,
              "prompt": "The children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already ______. Their notes were becoming a record of learning."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "learning",
              "paragraph": 3,
              "prompt": "The children added measurements with the ruler. They now had several features to compare, instead of expecting colour to answer every question. Max enjoyed finding another way to describe a sample he had thought he already knew. Their notes were becoming a record of ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "learning"
            },
            {
              "id": "w2",
              "word": "knew"
            },
            {
              "id": "w1",
              "word": "thing"
            },
            {
              "id": "w0",
              "word": "texture"
            }
          ]
        }
      },
      {
        "text": [
          "Their box would hold four rocks, two chosen by each child. Each numbered label had to match the right drawing, measurement, and description.",
          "Max chose the grey sample as well as a coloured stone. Its small grains had helped change his idea of what made a sample worth keeping. Ava selected contrasting textures to compare at home.",
          "Asked to name their collection, she suggested \"The beginning.\" Max added a question mark because there was so much they still wanted to discover.",
          "The number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the box. The collection now included what they had noticed and the ideas they were ready to revise."
        ],
        "mc": [
          {
            "prompt": "How has Max’s idea of a valuable sample changed?",
            "choices": [
              "He values what a stone helps him learn, as well as its appearance.",
              "He only wants the largest possible stones.",
              "He thinks labels make observations unnecessary.",
              "He no longer enjoys collecting rocks."
            ],
            "answer": 0,
            "skill": "Trace character development",
            "evidence": "change his idea of what made a sample worth keeping"
          },
          {
            "prompt": "Why does the collection feel larger although it contains four rocks?",
            "choices": [
              "The rocks have doubled in size.",
              "Jo secretly adds more stones to the box.",
              "The labels make the box physically heavier.",
              "Their observations, revised ideas, and questions have grown."
            ],
            "answer": 3,
            "skill": "Interpret figurative language",
            "evidence": "their knowledge and questions had"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The numbered labels",
              "connected samples with records"
            ],
            [
              "Max’s grey stone",
              "represented a new way of choosing"
            ],
            [
              "The notebook",
              "kept their discoveries and questions"
            ]
          ],
          "options": [
            "kept their discoveries and questions",
            "represented a new way of choosing",
            "connected samples with records"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The numbered labels connected samples with records",
            "Max’s grey stone represented a new way of choosing",
            "The notebook kept their discoveries and questions"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Their box would hold four rocks, two chosen by each child. Each numbered {{c0}} had to match the right drawing, measurement, and description.",
            "Max chose the grey sample as well as a coloured stone. Its small grains had helped change his idea of what made a sample worth keeping. Ava selected contrasting textures to compare at {{c1}}.",
            "Asked to name their collection, she suggested \"The beginning.\" Max added a question mark because there was so much they still wanted to discover.",
            "The number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the {{c2}}. The collection now included what they had noticed and the ideas they were ready to {{c3}}."
          ],
          "parts": [
            "Their box would hold four rocks, two chosen by each child. Each numbered {{c0}} had to match the right drawing, measurement, and description.\n\nMax chose the grey sample as well as a coloured stone. Its small grains had helped change his idea of what made a sample worth keeping. Ava selected contrasting textures to compare at {{c1}}.\n\nAsked to name their collection, she suggested \"The beginning.\" Max added a question mark because there was so much they still wanted to discover.\n\nThe number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the {{c2}}. The collection now included what they had noticed and the ideas they were ready to {{c3}}."
          ],
          "columns": [
            "Their box would hold four rocks, two chosen by each child. Each numbered {{c0}} had to match the right drawing, measurement, and description. Max chose the grey sample as well as a coloured stone. Its small grains had helped change his idea of what made a sample worth keeping. Ava selected contrasting textures to compare at {{c1}}.",
            "Asked to name their collection, she suggested \"The beginning.\" Max added a question mark because there was so much they still wanted to discover. The number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the {{c2}}. The collection now included what they had noticed and the ideas they were ready to {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "label",
              "paragraph": 0,
              "prompt": "Their box would hold four rocks, two chosen by each child. Each numbered ______ had to match the right drawing, measurement, and description."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "home",
              "paragraph": 1,
              "prompt": "Max chose the grey sample as well as a coloured stone. Its small grains had helped change his idea of what made a sample worth keeping. Ava selected contrasting textures to compare at ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "box",
              "paragraph": 3,
              "prompt": "The number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the ______. The collection now included what they had noticed and the ideas they were ready to revise."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "revise",
              "paragraph": 3,
              "prompt": "The number of stones had not grown, but their knowledge and questions had. Max packed the notebook beside the box. The collection now included what they had noticed and the ideas they were ready to ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "revise"
            },
            {
              "id": "w2",
              "word": "box"
            },
            {
              "id": "w1",
              "word": "home"
            },
            {
              "id": "w0",
              "word": "label"
            }
          ]
        }
      }
    ],
    "intro": "468 words · 4 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "P": {
    "grade": "F&P P target",
    "titles": [
      "More than the brightest stone",
      "Learning to use the tools",
      "Before giving it a name",
      "Observation before a name",
      "Checking the description again",
      "Questions that organise a collection",
      "Different questions, different groups",
      "A measurement someone can repeat",
      "The separated labels",
      "A collection that kept growing"
    ],
    "sections": [
      {
        "text": [
          "Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant expedition. They enjoyed collecting rocks for different reasons.",
          "Ava noticed rounded shapes and imagined the journeys a pebble might have taken. Max preferred dramatic colours and patterns. He hoped to find a stone that looked extraordinary before anyone even picked it up.",
          "Jo set a tray of loose garden stones on the table. The children could choose two small samples each after examining them. Beside the tray, she placed a hand lens, a soft brush, a ruler, and a notebook.",
          "Max reached for a red stone. Ava lifted an ordinary grey one. \"Let’s see what we haven’t noticed yet,\" she suggested. Max smiled, but kept the red stone close to his hand."
        ],
        "mc": [
          {
            "prompt": "What is the main difference between the children’s first interests?",
            "choices": [
              "Ava collects only minerals; Max collects only fossils.",
              "Max wants to stop collecting; Ava wants to begin.",
              "Both judge every stone only by its size.",
              "Shapes interest Ava; striking colours interest Max."
            ],
            "answer": 3,
            "skill": "Compare perspectives",
            "evidence": "preferred dramatic colours and patterns"
          },
          {
            "prompt": "What does Ava’s suggestion reveal about her?",
            "choices": [
              "She thinks grey rocks are always older.",
              "She wants Max to leave the table.",
              "She investigates details that are not obvious at first.",
              "She already knows the name of every stone."
            ],
            "answer": 2,
            "skill": "Infer a quality",
            "evidence": "what we haven’t noticed yet"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The Pocket Geologists",
              "was the children’s own name"
            ],
            [
              "Max’s first choice",
              "was a striking red stone"
            ],
            [
              "Jo’s tools",
              "supported close observation"
            ]
          ],
          "options": [
            "supported close observation",
            "was a striking red stone",
            "was the children’s own name"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The Pocket Geologists was the children’s own name",
            "Max’s first choice was a striking red stone",
            "Jo’s tools supported close observation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant expedition. They enjoyed collecting rocks for different {{c0}}.",
            "Ava noticed rounded shapes and imagined the journeys a pebble might have taken. Max preferred dramatic colours and patterns. He hoped to find a stone that looked extraordinary before anyone even picked it {{c1}}.",
            "Jo set a tray of loose garden stones on the table. The children could choose two small samples each after examining them. Beside the tray, she placed a hand lens, a soft brush, a ruler, and a {{c2}}.",
            "Max reached for a red stone. Ava lifted an ordinary grey one. \"Let’s see what we haven’t noticed yet,\" she suggested. Max smiled, but kept the red stone close to his {{c3}}."
          ],
          "parts": [
            "Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant expedition. They enjoyed collecting rocks for different {{c0}}.\n\nAva noticed rounded shapes and imagined the journeys a pebble might have taken. Max preferred dramatic colours and patterns. He hoped to find a stone that looked extraordinary before anyone even picked it {{c1}}.\n\nJo set a tray of loose garden stones on the table. The children could choose two small samples each after examining them. Beside the tray, she placed a hand lens, a soft brush, a ruler, and a {{c2}}.\n\nMax reached for a red stone. Ava lifted an ordinary grey one. \"Let’s see what we haven’t noticed yet,\" she suggested. Max smiled, but kept the red stone close to his {{c3}}."
          ],
          "columns": [
            "Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant expedition. They enjoyed collecting rocks for different {{c0}}. Ava noticed rounded shapes and imagined the journeys a pebble might have taken. Max preferred dramatic colours and patterns. He hoped to find a stone that looked extraordinary before anyone even picked it {{c1}}.",
            "Jo set a tray of loose garden stones on the table. The children could choose two small samples each after examining them. Beside the tray, she placed a hand lens, a soft brush, a ruler, and a {{c2}}. Max reached for a red stone. Ava lifted an ordinary grey one. \"Let’s see what we haven’t noticed yet,\" she suggested. Max smiled, but kept the red stone close to his {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "reasons",
              "paragraph": 0,
              "prompt": "Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant expedition. They enjoyed collecting rocks for different ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "up",
              "paragraph": 1,
              "prompt": "Ava noticed rounded shapes and imagined the journeys a pebble might have taken. Max preferred dramatic colours and patterns. He hoped to find a stone that looked extraordinary before anyone even picked it ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "notebook",
              "paragraph": 2,
              "prompt": "Jo set a tray of loose garden stones on the table. The children could choose two small samples each after examining them. Beside the tray, she placed a hand lens, a soft brush, a ruler, and a ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "hand",
              "paragraph": 3,
              "prompt": "Max reached for a red stone. Ava lifted an ordinary grey one. \"Let’s see what we haven’t noticed yet,\" she suggested. Max smiled, but kept the red stone close to his ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "hand"
            },
            {
              "id": "w2",
              "word": "notebook"
            },
            {
              "id": "w1",
              "word": "up"
            },
            {
              "id": "w0",
              "word": "reasons"
            }
          ]
        }
      },
      {
        "text": [
          "Jo asked the children to practise with the hand lens before choosing a sample. She placed a small drawing on the table and let them find a position where its lines looked clear.",
          "Max moved the lens quickly at first. The changing view made him feel as though the tool was refusing to work. Ava held hers still for a moment and adjusted the distance slowly.",
          "When both children could see the lines, they compared what helped. Jo reminded them that a useful tool still needed a thoughtful user.",
          "They set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good question and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking possibility."
        ],
        "mc": [
          {
            "prompt": "What helps Ava find a clear view through the lens?",
            "choices": [
              "Covering the drawing",
              "Guessing what the lines show",
              "Holding it still and adjusting the distance",
              "Shaking it quickly"
            ],
            "answer": 2,
            "skill": "Connect an action to its result",
            "evidence": "adjusted the distance slowly"
          },
          {
            "prompt": "What does Max begin to realise about tools?",
            "choices": [
              "They should only be used on red stones.",
              "They still require thoughtful use.",
              "They supply every answer instantly.",
              "They make observations unnecessary."
            ],
            "answer": 1,
            "skill": "Explain a changed expectation",
            "evidence": "needed a thoughtful user"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The drawing",
              "was used for practice"
            ],
            [
              "The hand lens",
              "needed a clear viewing position"
            ],
            [
              "The notebook",
              "was ready to record observations"
            ]
          ],
          "options": [
            "was ready to record observations",
            "needed a clear viewing position",
            "was used for practice"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The drawing was used for practice",
            "The hand lens needed a clear viewing position",
            "The notebook was ready to record observations"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Jo asked the children to practise with the hand {{c0}} before choosing a sample. She placed a small drawing on the table and let them find a position where its lines looked clear.",
            "Max moved the lens quickly at first. The changing view made him feel as though the tool was refusing to work. Ava held hers still for a moment and adjusted the distance slowly.",
            "When both children could see the lines, they compared what helped. Jo reminded them that a useful tool still needed a thoughtful {{c1}}.",
            "They set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good {{c2}} and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking {{c3}}."
          ],
          "parts": [
            "Jo asked the children to practise with the hand {{c0}} before choosing a sample. She placed a small drawing on the table and let them find a position where its lines looked clear.\n\nMax moved the lens quickly at first. The changing view made him feel as though the tool was refusing to work. Ava held hers still for a moment and adjusted the distance slowly.\n\nWhen both children could see the lines, they compared what helped. Jo reminded them that a useful tool still needed a thoughtful {{c1}}.\n\nThey set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good {{c2}} and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking {{c3}}."
          ],
          "columns": [
            "Jo asked the children to practise with the hand {{c0}} before choosing a sample. She placed a small drawing on the table and let them find a position where its lines looked clear. Max moved the lens quickly at first. The changing view made him feel as though the tool was refusing to work. Ava held hers still for a moment and adjusted the distance slowly.",
            "When both children could see the lines, they compared what helped. Jo reminded them that a useful tool still needed a thoughtful {{c1}}. They set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good {{c2}} and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "lens",
              "paragraph": 0,
              "prompt": "Jo asked the children to practise with the hand ______ before choosing a sample. She placed a small drawing on the table and let them find a position where its lines looked clear."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "user",
              "paragraph": 2,
              "prompt": "When both children could see the lines, they compared what helped. Jo reminded them that a useful tool still needed a thoughtful ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "question",
              "paragraph": 3,
              "prompt": "They set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good ______ and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking possibility."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "possibility",
              "paragraph": 3,
              "prompt": "They set out the soft brush and notebook beside the tray. Max had expected the equipment to give instant answers. Now he could see that observing would involve learning how to ask a good question and how to look carefully enough to investigate it. The grey stone remained an ordinary-looking ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "possibility"
            },
            {
              "id": "w2",
              "word": "question"
            },
            {
              "id": "w1",
              "word": "user"
            },
            {
              "id": "w0",
              "word": "lens"
            }
          ]
        }
      },
      {
        "text": [
          "Ava drew the outside shape of the grey stone. Max suggested that she add a name, but she asked what information they had that would justify one.",
          "They could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its surface. Those were things they could both check.",
          "Jo invited them to record a question as well as a description. Ava wondered what they might notice after cleaning the stone. Max wondered whether the lens would reveal a pattern.",
          "Their notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better evidence. They reached for the brush, ready to learn what a closer look might add."
        ],
        "mc": [
          {
            "prompt": "Why does Ava leave the name space empty?",
            "choices": [
              "The notebook has no room for writing.",
              "They do not yet have enough evidence for a name.",
              "She does not want to remember the stone.",
              "Every stone must have the same name."
            ],
            "answer": 1,
            "skill": "Explain a reason",
            "evidence": "waiting for better evidence"
          },
          {
            "prompt": "What makes the notebook page useful for an investigation?",
            "choices": [
              "It records observations and questions.",
              "It gives a final name without checking.",
              "It includes only the brightest colours.",
              "It replaces the need to examine the stone."
            ],
            "answer": 0,
            "skill": "Identify a useful practice",
            "evidence": "a question as well as a description"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Ava’s drawing",
              "recorded the outside shape"
            ],
            [
              "Both children",
              "could check the observations"
            ],
            [
              "The cleaning question",
              "suggested what to investigate next"
            ]
          ],
          "options": [
            "suggested what to investigate next",
            "could check the observations",
            "recorded the outside shape"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Ava’s drawing recorded the outside shape",
            "Both children could check the observations",
            "The cleaning question suggested what to investigate next"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Ava drew the outside shape of the grey {{c0}}. Max suggested that she add a name, but she asked what information they had that would justify one.",
            "They could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its surface. Those were things they could both {{c1}}.",
            "Jo invited them to record a question as well as a description. Ava wondered what they might notice after cleaning the stone. Max wondered whether the lens would reveal a pattern.",
            "Their notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better {{c2}}. They reached for the brush, ready to learn what a closer look might {{c3}}."
          ],
          "parts": [
            "Ava drew the outside shape of the grey {{c0}}. Max suggested that she add a name, but she asked what information they had that would justify one.\n\nThey could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its surface. Those were things they could both {{c1}}.\n\nJo invited them to record a question as well as a description. Ava wondered what they might notice after cleaning the stone. Max wondered whether the lens would reveal a pattern.\n\nTheir notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better {{c2}}. They reached for the brush, ready to learn what a closer look might {{c3}}."
          ],
          "columns": [
            "Ava drew the outside shape of the grey {{c0}}. Max suggested that she add a name, but she asked what information they had that would justify one. They could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its surface. Those were things they could both {{c1}}.",
            "Jo invited them to record a question as well as a description. Ava wondered what they might notice after cleaning the stone. Max wondered whether the lens would reveal a pattern. Their notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better {{c2}}. They reached for the brush, ready to learn what a closer look might {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "stone",
              "paragraph": 0,
              "prompt": "Ava drew the outside shape of the grey ______. Max suggested that she add a name, but she asked what information they had that would justify one."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "check",
              "paragraph": 1,
              "prompt": "They could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its surface. Those were things they could both ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "evidence",
              "paragraph": 3,
              "prompt": "Their notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better ______. They reached for the brush, ready to learn what a closer look might add."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "add",
              "paragraph": 3,
              "prompt": "Their notebook now held more than a picture of something they liked. It contained a starting point for an investigation. The empty name space did not mean the page was unfinished in a careless way; it showed that the children were waiting for better evidence. They reached for the brush, ready to learn what a closer look might ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "add"
            },
            {
              "id": "w2",
              "word": "evidence"
            },
            {
              "id": "w1",
              "word": "check"
            },
            {
              "id": "w0",
              "word": "stone"
            }
          ]
        }
      },
      {
        "text": [
          "After brushing off loose dirt, Ava washed the grey stone and allowed it to dry. Under the hand lens, its dull surface became a patchwork of tiny grains. Some reflected light; others remained dark.",
          "\"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching collection. Jo asked him to explain his evidence.",
          "Both stones contained visible grains, but their colours and arrangements were not identical. A shared feature could guide a comparison without settling an identification. Rocks can contain different minerals, Jo explained, and geologists consider several characteristics together.",
          "Max crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more reliable. Ava added a careful drawing."
        ],
        "mc": [
          {
            "prompt": "Why is Max’s first identification uncertain?",
            "choices": [
              "All shiny stones are the same mineral.",
              "The labelled granite sample has disappeared.",
              "A shared feature alone does not establish the rock’s identity.",
              "The hand lens cannot show grains."
            ],
            "answer": 2,
            "skill": "Evaluate evidence",
            "evidence": "without settling an identification"
          },
          {
            "prompt": "Why does the description make their notebook more reliable?",
            "choices": [
              "It proves their collection contains every rock type.",
              "It separates observed details from an unconfirmed name.",
              "It makes the grey stone look brighter.",
              "It removes the need for further study."
            ],
            "answer": 1,
            "skill": "Explain scientific reasoning",
            "evidence": "what they could actually observe"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The hand lens",
              "revealed small grains"
            ],
            [
              "The granite specimen",
              "provided a comparison"
            ],
            [
              "The revised note",
              "recorded observations"
            ]
          ],
          "options": [
            "recorded observations",
            "provided a comparison",
            "revealed small grains"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The hand lens revealed small grains",
            "The granite specimen provided a comparison",
            "The revised note recorded observations"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After brushing off loose dirt, Ava washed the grey stone and allowed it to dry. Under the hand lens, its dull surface became a patchwork of tiny {{c0}}. Some reflected light; others remained dark.",
            "\"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching collection. Jo asked him to explain his {{c1}}.",
            "Both stones contained visible grains, but their colours and arrangements were not identical. A shared feature could guide a comparison without settling an identification. Rocks can contain different minerals, Jo explained, and geologists consider several characteristics together.",
            "Max crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more {{c2}}. Ava added a careful {{c3}}."
          ],
          "parts": [
            "After brushing off loose dirt, Ava washed the grey stone and allowed it to dry. Under the hand lens, its dull surface became a patchwork of tiny {{c0}}. Some reflected light; others remained dark.\n\n\"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching collection. Jo asked him to explain his {{c1}}.\n\nBoth stones contained visible grains, but their colours and arrangements were not identical. A shared feature could guide a comparison without settling an identification. Rocks can contain different minerals, Jo explained, and geologists consider several characteristics together.\n\nMax crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more {{c2}}. Ava added a careful {{c3}}."
          ],
          "columns": [
            "After brushing off loose dirt, Ava washed the grey stone and allowed it to dry. Under the hand lens, its dull surface became a patchwork of tiny {{c0}}. Some reflected light; others remained dark. \"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching collection. Jo asked him to explain his {{c1}}.",
            "Both stones contained visible grains, but their colours and arrangements were not identical. A shared feature could guide a comparison without settling an identification. Rocks can contain different minerals, Jo explained, and geologists consider several characteristics together. Max crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more {{c2}}. Ava added a careful {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "grains",
              "paragraph": 0,
              "prompt": "After brushing off loose dirt, Ava washed the grey stone and allowed it to dry. Under the hand lens, its dull surface became a patchwork of tiny ______. Some reflected light; others remained dark."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "evidence",
              "paragraph": 1,
              "prompt": "\"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching collection. Jo asked him to explain his ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "reliable",
              "paragraph": 3,
              "prompt": "Max crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more ______. Ava added a careful drawing."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "drawing",
              "paragraph": 3,
              "prompt": "Max crossed out the name he had started writing. He replaced it with a description of what they could actually observe. The change felt less impressive, yet it made their notebook more reliable. Ava added a careful ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "drawing"
            },
            {
              "id": "w2",
              "word": "reliable"
            },
            {
              "id": "w1",
              "word": "evidence"
            },
            {
              "id": "w0",
              "word": "grains"
            }
          ]
        }
      },
      {
        "text": [
          "After examining the grey stone’s grains, the children returned to their first drawing. Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not noticed.",
          "She added those details instead of pretending her first picture had been complete. Max read the written description aloud while she checked it against the sample.",
          "They did not disagree about everything. Both could point to the rough surface and the grains that caught the light. Those shared observations gave them a useful place to begin.",
          "Jo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been revised. Ava dated the new detail, leaving the earlier outline visible as part of their learning."
        ],
        "mc": [
          {
            "prompt": "Why does Ava add details to her first drawing?",
            "choices": [
              "The stone has turned into a different object.",
              "Max has hidden the original sample.",
              "Jo says every drawing must look the same.",
              "A closer look has revealed things she missed."
            ],
            "answer": 3,
            "skill": "Connect evidence to revision",
            "evidence": "changes she had not noticed"
          },
          {
            "prompt": "Why keep the earlier outline visible?",
            "choices": [
              "It makes every label unnecessary.",
              "It tells them the exact name of the rock.",
              "It helps show how their understanding developed.",
              "It proves that new observations are not useful."
            ],
            "answer": 2,
            "skill": "Infer a purpose",
            "evidence": "part of their learning"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The written description",
              "was checked against the sample"
            ],
            [
              "Shared observations",
              "gave them a starting point"
            ],
            [
              "The dated detail",
              "recorded a revision"
            ]
          ],
          "options": [
            "recorded a revision",
            "gave them a starting point",
            "was checked against the sample"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The written description was checked against the sample",
            "Shared observations gave them a starting point",
            "The dated detail recorded a revision"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After examining the grey stone’s grains, the children returned to their first {{c0}}. Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not noticed.",
            "She added those details instead of pretending her first picture had been complete. Max read the written description aloud while she checked it against the sample.",
            "They did not disagree about everything. Both could point to the rough surface and the grains that caught the {{c1}}. Those shared observations gave them a useful place to begin.",
            "Jo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been {{c2}}. Ava dated the new detail, leaving the earlier outline visible as part of their {{c3}}."
          ],
          "parts": [
            "After examining the grey stone’s grains, the children returned to their first {{c0}}. Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not noticed.\n\nShe added those details instead of pretending her first picture had been complete. Max read the written description aloud while she checked it against the sample.\n\nThey did not disagree about everything. Both could point to the rough surface and the grains that caught the {{c1}}. Those shared observations gave them a useful place to begin.\n\nJo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been {{c2}}. Ava dated the new detail, leaving the earlier outline visible as part of their {{c3}}."
          ],
          "columns": [
            "After examining the grey stone’s grains, the children returned to their first {{c0}}. Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not noticed. She added those details instead of pretending her first picture had been complete. Max read the written description aloud while she checked it against the sample.",
            "They did not disagree about everything. Both could point to the rough surface and the grains that caught the {{c1}}. Those shared observations gave them a useful place to begin. Jo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been {{c2}}. Ava dated the new detail, leaving the earlier outline visible as part of their {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "drawing",
              "paragraph": 0,
              "prompt": "After examining the grey stone’s grains, the children returned to their first ______. Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not noticed."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "light",
              "paragraph": 2,
              "prompt": "They did not disagree about everything. Both could point to the rough surface and the grains that caught the ______. Those shared observations gave them a useful place to begin."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "revised",
              "paragraph": 3,
              "prompt": "Jo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been ______. Ava dated the new detail, leaving the earlier outline visible as part of their learning."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "learning",
              "paragraph": 3,
              "prompt": "Jo explained that revisiting a record could improve it. A notebook was not valuable because its first entry could never change. It was valuable because someone could follow the observations and understand why a description had been revised. Ava dated the new detail, leaving the earlier outline visible as part of their ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "learning"
            },
            {
              "id": "w2",
              "word": "revised"
            },
            {
              "id": "w1",
              "word": "light"
            },
            {
              "id": "w0",
              "word": "drawing"
            }
          ]
        }
      },
      {
        "text": [
          "Max wanted one perfect way to arrange the tray. He suggested putting the most attractive stones at the front, where visitors would notice them first.",
          "Ava suggested a different purpose: an arrangement that would help someone compare the stones. She asked which features a visitor might want to examine side by side.",
          "Jo gave them a simple challenge. They would explain the question behind each arrangement before moving the first sample. That would make their choices easier for someone else to understand.",
          "The children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to study. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same answer."
        ],
        "mc": [
          {
            "prompt": "How does Ava’s proposed purpose differ from Max’s first idea?",
            "choices": [
              "She wants to choose only red stones.",
              "She wants to stop keeping records.",
              "She wants to help people compare the stones.",
              "She wants to hide the whole collection."
            ],
            "answer": 2,
            "skill": "Compare purposes",
            "evidence": "help someone compare the stones"
          },
          {
            "prompt": "Why explain the question before arranging the tray?",
            "choices": [
              "It removes all differences between samples.",
              "It makes the reason for the grouping clear.",
              "It makes the stones change texture.",
              "It guarantees every stone has been identified."
            ],
            "answer": 1,
            "skill": "Connect a method to its purpose",
            "evidence": "make their choices easier for someone else to understand"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Max’s first arrangement",
              "focused on an attractive display"
            ],
            [
              "Ava’s suggestion",
              "focused on comparison"
            ],
            [
              "Jo’s challenge",
              "was to explain the question first"
            ]
          ],
          "options": [
            "was to explain the question first",
            "focused on comparison",
            "focused on an attractive display"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Max’s first arrangement focused on an attractive display",
            "Ava’s suggestion focused on comparison",
            "Jo’s challenge was to explain the question first"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max wanted one perfect way to arrange the {{c0}}. He suggested putting the most attractive stones at the front, where visitors would notice them first.",
            "Ava suggested a different purpose: an arrangement that would help someone compare the stones. She asked which features a visitor might want to examine side by side.",
            "Jo gave them a simple challenge. They would explain the question behind each arrangement before moving the first {{c1}}. That would make their choices easier for someone else to understand.",
            "The children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to {{c2}}. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same {{c3}}."
          ],
          "parts": [
            "Max wanted one perfect way to arrange the {{c0}}. He suggested putting the most attractive stones at the front, where visitors would notice them first.\n\nAva suggested a different purpose: an arrangement that would help someone compare the stones. She asked which features a visitor might want to examine side by side.\n\nJo gave them a simple challenge. They would explain the question behind each arrangement before moving the first {{c1}}. That would make their choices easier for someone else to understand.\n\nThe children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to {{c2}}. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same {{c3}}."
          ],
          "columns": [
            "Max wanted one perfect way to arrange the {{c0}}. He suggested putting the most attractive stones at the front, where visitors would notice them first. Ava suggested a different purpose: an arrangement that would help someone compare the stones. She asked which features a visitor might want to examine side by side.",
            "Jo gave them a simple challenge. They would explain the question behind each arrangement before moving the first {{c1}}. That would make their choices easier for someone else to understand. The children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to {{c2}}. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tray",
              "paragraph": 0,
              "prompt": "Max wanted one perfect way to arrange the ______. He suggested putting the most attractive stones at the front, where visitors would notice them first."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sample",
              "paragraph": 2,
              "prompt": "Jo gave them a simple challenge. They would explain the question behind each arrangement before moving the first ______. That would make their choices easier for someone else to understand."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "study",
              "paragraph": 3,
              "prompt": "The children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to ______. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same answer."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "answer",
              "paragraph": 3,
              "prompt": "The children looked at colour, shape, and surface without yet deciding that one feature should always come first. Max discovered that a collection could be enjoyable to display and useful to study. The challenge was choosing an arrangement that matched the question, rather than expecting every question to fit the same ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "answer"
            },
            {
              "id": "w2",
              "word": "study"
            },
            {
              "id": "w1",
              "word": "sample"
            },
            {
              "id": "w0",
              "word": "tray"
            }
          ]
        }
      },
      {
        "text": [
          "Max sorted the stones into colour groups. Ava rearranged them by texture, placing smooth stones together and rough stones together. Max frowned when his neat red group disappeared.",
          "Jo asked whether they had changed the rocks or changed the question. The children looked again. The same red stone could belong to a colour group and a texture group without either arrangement being wrong.",
          "Jo showed them a separate quartz crystal and explained the difference between a mineral specimen and a rock sample. They added the terms to their notebook rather than using them as interchangeable names.",
          "Then they measured each chosen sample with the ruler. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already knew."
        ],
        "mc": [
          {
            "prompt": "What does Jo mean by “changed the question”?",
            "choices": [
              "Only the colour groups can be useful.",
              "Each arrangement compares a different characteristic.",
              "The stones have physically changed into new rocks.",
              "Ava must copy Max’s groups."
            ],
            "answer": 1,
            "skill": "Interpret an explanation",
            "evidence": "changed the question"
          },
          {
            "prompt": "Why does the story include the quartz crystal?",
            "choices": [
              "To show that mineral and rock are related but different terms",
              "To prove every garden stone is quartz",
              "To reveal a hidden race prize",
              "To show that all crystals are red"
            ],
            "answer": 0,
            "skill": "Connect a detail to its purpose",
            "evidence": "rather than using them as interchangeable names"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The colour groups",
              "compared appearance"
            ],
            [
              "The texture groups",
              "compared surfaces"
            ],
            [
              "The ruler",
              "added size measurements"
            ]
          ],
          "options": [
            "added size measurements",
            "compared surfaces",
            "compared appearance"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The colour groups compared appearance",
            "The texture groups compared surfaces",
            "The ruler added size measurements"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max sorted the stones into colour groups. Ava rearranged them by texture, placing smooth stones together and rough stones together. Max frowned when his neat red group {{c0}}.",
            "Jo asked whether they had changed the rocks or changed the question. The children looked again. The same red stone could belong to a colour group and a texture group without either arrangement being {{c1}}.",
            "Jo showed them a separate quartz crystal and explained the difference between a mineral specimen and a rock sample. They added the terms to their notebook rather than using them as interchangeable names.",
            "Then they measured each chosen sample with the {{c2}}. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already {{c3}}."
          ],
          "parts": [
            "Max sorted the stones into colour groups. Ava rearranged them by texture, placing smooth stones together and rough stones together. Max frowned when his neat red group {{c0}}.\n\nJo asked whether they had changed the rocks or changed the question. The children looked again. The same red stone could belong to a colour group and a texture group without either arrangement being {{c1}}.\n\nJo showed them a separate quartz crystal and explained the difference between a mineral specimen and a rock sample. They added the terms to their notebook rather than using them as interchangeable names.\n\nThen they measured each chosen sample with the {{c2}}. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already {{c3}}."
          ],
          "columns": [
            "Max sorted the stones into colour groups. Ava rearranged them by texture, placing smooth stones together and rough stones together. Max frowned when his neat red group {{c0}}. Jo asked whether they had changed the rocks or changed the question. The children looked again. The same red stone could belong to a colour group and a texture group without either arrangement being {{c1}}.",
            "Jo showed them a separate quartz crystal and explained the difference between a mineral specimen and a rock sample. They added the terms to their notebook rather than using them as interchangeable names. Then they measured each chosen sample with the {{c2}}. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "disappeared",
              "paragraph": 0,
              "prompt": "Max sorted the stones into colour groups. Ava rearranged them by texture, placing smooth stones together and rough stones together. Max frowned when his neat red group ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wrong",
              "paragraph": 1,
              "prompt": "Jo asked whether they had changed the rocks or changed the question. The children looked again. The same red stone could belong to a colour group and a texture group without either arrangement being ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "ruler",
              "paragraph": 3,
              "prompt": "Then they measured each chosen sample with the ______. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already knew."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "knew",
              "paragraph": 3,
              "prompt": "Then they measured each chosen sample with the ruler. Size, colour, texture, and visible grains gave them several ways to compare their collection. Max began to enjoy finding a second way to describe a stone he thought he already ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "knew"
            },
            {
              "id": "w2",
              "word": "ruler"
            },
            {
              "id": "w1",
              "word": "wrong"
            },
            {
              "id": "w0",
              "word": "disappeared"
            }
          ]
        }
      },
      {
        "text": [
          "The children placed a ruler beside a chosen sample. Max began reading from the ruler’s edge, until Ava noticed that the numbered scale started a little farther along.",
          "Jo showed them where the zero mark was. They lined up one end of the sample carefully and agreed which direction across it they were measuring.",
          "Ava recorded the result with its unit and drew a small line on her sketch to show the measured length. Max repeated the process, using the same starting point and direction.",
          "Their purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the drawing. The number became more useful when its meaning was clear."
        ],
        "mc": [
          {
            "prompt": "Why do the children check the zero mark?",
            "choices": [
              "The scale does not begin at the ruler’s outer edge.",
              "The sample has no length.",
              "They want a larger number.",
              "The notebook cannot hold units."
            ],
            "answer": 0,
            "skill": "Find a reason",
            "evidence": "numbered scale started a little farther along"
          },
          {
            "prompt": "What makes the measurement record useful?",
            "choices": [
              "It uses the largest possible number.",
              "It replaces every written observation.",
              "It gives the rock a name automatically.",
              "Someone else can understand and repeat the method."
            ],
            "answer": 3,
            "skill": "Explain a purpose",
            "evidence": "understand and check"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The zero mark",
              "gave a shared starting point"
            ],
            [
              "The line on the drawing",
              "showed which length was measured"
            ],
            [
              "The recorded unit",
              "helped explain the number"
            ]
          ],
          "options": [
            "helped explain the number",
            "showed which length was measured",
            "gave a shared starting point"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The zero mark gave a shared starting point",
            "The line on the drawing showed which length was measured",
            "The recorded unit helped explain the number"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The children placed a ruler beside a chosen {{c0}}. Max began reading from the ruler’s edge, until Ava noticed that the numbered scale started a little farther along.",
            "Jo showed them where the zero mark was. They lined up one end of the sample carefully and agreed which direction across it they were measuring.",
            "Ava recorded the result with its unit and drew a small line on her sketch to show the measured {{c1}}. Max repeated the process, using the same starting point and direction.",
            "Their purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the {{c2}}. The number became more useful when its meaning was {{c3}}."
          ],
          "parts": [
            "The children placed a ruler beside a chosen {{c0}}. Max began reading from the ruler’s edge, until Ava noticed that the numbered scale started a little farther along.\n\nJo showed them where the zero mark was. They lined up one end of the sample carefully and agreed which direction across it they were measuring.\n\nAva recorded the result with its unit and drew a small line on her sketch to show the measured {{c1}}. Max repeated the process, using the same starting point and direction.\n\nTheir purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the {{c2}}. The number became more useful when its meaning was {{c3}}."
          ],
          "columns": [
            "The children placed a ruler beside a chosen {{c0}}. Max began reading from the ruler’s edge, until Ava noticed that the numbered scale started a little farther along. Jo showed them where the zero mark was. They lined up one end of the sample carefully and agreed which direction across it they were measuring.",
            "Ava recorded the result with its unit and drew a small line on her sketch to show the measured {{c1}}. Max repeated the process, using the same starting point and direction. Their purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the {{c2}}. The number became more useful when its meaning was {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "sample",
              "paragraph": 0,
              "prompt": "The children placed a ruler beside a chosen ______. Max began reading from the ruler’s edge, until Ava noticed that the numbered scale started a little farther along."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "length",
              "paragraph": 2,
              "prompt": "Ava recorded the result with its unit and drew a small line on her sketch to show the measured ______. Max repeated the process, using the same starting point and direction."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "drawing",
              "paragraph": 3,
              "prompt": "Their purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the ______. The number became more useful when its meaning was clear."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "clear",
              "paragraph": 3,
              "prompt": "Their purpose was not to make the collection look scientific by adding numbers. It was to leave a record another person could understand and check. Jo asked what they would need to explain to a visitor. Max pointed to the zero mark, the unit, and the line on the drawing. The number became more useful when its meaning was ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "clear"
            },
            {
              "id": "w2",
              "word": "drawing"
            },
            {
              "id": "w1",
              "word": "length"
            },
            {
              "id": "w0",
              "word": "sample"
            }
          ]
        }
      },
      {
        "text": [
          "A small gust moved the loose paper labels while the children were preparing their box. One slid away from its sample and came to rest beside another stone.",
          "Max was ready to move it back from memory. Ava suggested checking the notebook first. If their records were useful, the descriptions should help them connect each number to the right sample.",
          "The notes about colour alone left them uncertain about two stones. Details of shape, texture, and the position of a dark mark helped them make a more careful comparison.",
          "They matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of confusion. Max added one last note before they packed away."
        ],
        "mc": [
          {
            "prompt": "Why does Ava suggest using the notebook?",
            "choices": [
              "She wants to change every number.",
              "She thinks memory is always useless.",
              "The children have lost all their rocks.",
              "The records should help match labels to samples."
            ],
            "answer": 3,
            "skill": "Explain a strategy",
            "evidence": "connect each number to the right sample"
          },
          {
            "prompt": "What does the mix-up show about their notes?",
            "choices": [
              "Every grey stone is the same sample.",
              "A measurement can replace every other detail.",
              "Several details can be more useful than colour alone.",
              "Descriptions cannot help a collection."
            ],
            "answer": 2,
            "skill": "Draw a supported conclusion",
            "evidence": "shape, texture, and the position of a dark mark"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The gust",
              "moved the loose labels"
            ],
            [
              "The notebook",
              "helped restore the connections"
            ],
            [
              "The detailed descriptions",
              "reduced uncertainty"
            ]
          ],
          "options": [
            "reduced uncertainty",
            "helped restore the connections",
            "moved the loose labels"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The gust moved the loose labels",
            "The notebook helped restore the connections",
            "The detailed descriptions reduced uncertainty"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A small gust moved the loose paper labels while the children were preparing their {{c0}}. One slid away from its sample and came to rest beside another stone.",
            "Max was ready to move it back from memory. Ava suggested checking the notebook first. If their records were useful, the descriptions should help them connect each number to the right {{c1}}.",
            "The notes about colour alone left them uncertain about two stones. Details of shape, texture, and the position of a dark mark helped them make a more careful comparison.",
            "They matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of {{c2}}. Max added one last note before they packed {{c3}}."
          ],
          "parts": [
            "A small gust moved the loose paper labels while the children were preparing their {{c0}}. One slid away from its sample and came to rest beside another stone.\n\nMax was ready to move it back from memory. Ava suggested checking the notebook first. If their records were useful, the descriptions should help them connect each number to the right {{c1}}.\n\nThe notes about colour alone left them uncertain about two stones. Details of shape, texture, and the position of a dark mark helped them make a more careful comparison.\n\nThey matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of {{c2}}. Max added one last note before they packed {{c3}}."
          ],
          "columns": [
            "A small gust moved the loose paper labels while the children were preparing their {{c0}}. One slid away from its sample and came to rest beside another stone. Max was ready to move it back from memory. Ava suggested checking the notebook first. If their records were useful, the descriptions should help them connect each number to the right {{c1}}.",
            "The notes about colour alone left them uncertain about two stones. Details of shape, texture, and the position of a dark mark helped them make a more careful comparison. They matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of {{c2}}. Max added one last note before they packed {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "box",
              "paragraph": 0,
              "prompt": "A small gust moved the loose paper labels while the children were preparing their ______. One slid away from its sample and came to rest beside another stone."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sample",
              "paragraph": 1,
              "prompt": "Max was ready to move it back from memory. Ava suggested checking the notebook first. If their records were useful, the descriptions should help them connect each number to the right ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "confusion",
              "paragraph": 3,
              "prompt": "They matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of ______. Max added one last note before they packed away."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "away",
              "paragraph": 3,
              "prompt": "They matched the labels, then found a way to keep each one with its stone. The small mix-up had shown them why detailed records mattered. Their collection was becoming more than a group of interesting objects. It was a set of objects linked to observations that could survive a moment of confusion. Max added one last note before they packed ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "away"
            },
            {
              "id": "w2",
              "word": "confusion"
            },
            {
              "id": "w1",
              "word": "sample"
            },
            {
              "id": "w0",
              "word": "box"
            }
          ]
        }
      },
      {
        "text": [
          "Their box held only four chosen rocks, but labelling them took longer than Max expected. Each numbered label needed to match a drawing, a measurement, and a description in the notebook.",
          "He chose the ordinary grey stone as one of his two samples. Its small grains had taught him more than the red stone’s bright colour had promised. Ava chose two contrasting surfaces so she could keep testing her descriptions.",
          "Before they packed away, Jo asked what they would call their collection. \"The beginning,\" Ava said. Max added a question mark after it.",
          "Their rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to investigate. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their stories."
        ],
        "mc": [
          {
            "prompt": "How has Max’s idea of a valuable sample changed?",
            "choices": [
              "He values what a stone helps him learn, as well as its appearance.",
              "He only wants the largest possible stones.",
              "He thinks labels make observations unnecessary.",
              "He no longer enjoys collecting rocks."
            ],
            "answer": 0,
            "skill": "Trace character development",
            "evidence": "small grains had taught him more"
          },
          {
            "prompt": "Why does the collection feel larger although it contains four rocks?",
            "choices": [
              "The rocks have doubled in size.",
              "Jo secretly adds more stones to the box.",
              "The labels make the box physically heavier.",
              "Their observations, revised ideas, and questions have grown."
            ],
            "answer": 3,
            "skill": "Interpret figurative language",
            "evidence": "questions they wanted to investigate"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The numbered labels",
              "connected samples with records"
            ],
            [
              "Max’s grey stone",
              "represented a new way of choosing"
            ],
            [
              "The notebook",
              "kept their discoveries and questions"
            ]
          ],
          "options": [
            "kept their discoveries and questions",
            "represented a new way of choosing",
            "connected samples with records"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The numbered labels connected samples with records",
            "Max’s grey stone represented a new way of choosing",
            "The notebook kept their discoveries and questions"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Their box held only four chosen rocks, but labelling them took longer than Max expected. Each numbered {{c0}} needed to match a drawing, a measurement, and a description in the notebook.",
            "He chose the ordinary grey stone as one of his two samples. Its small grains had taught him more than the red stone’s bright colour had promised. Ava chose two contrasting surfaces so she could keep testing her {{c1}}.",
            "Before they packed away, Jo asked what they would call their collection. \"The beginning,\" Ava said. Max added a question mark after it.",
            "Their rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to {{c2}}. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their {{c3}}."
          ],
          "parts": [
            "Their box held only four chosen rocks, but labelling them took longer than Max expected. Each numbered {{c0}} needed to match a drawing, a measurement, and a description in the notebook.\n\nHe chose the ordinary grey stone as one of his two samples. Its small grains had taught him more than the red stone’s bright colour had promised. Ava chose two contrasting surfaces so she could keep testing her {{c1}}.\n\nBefore they packed away, Jo asked what they would call their collection. \"The beginning,\" Ava said. Max added a question mark after it.\n\nTheir rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to {{c2}}. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their {{c3}}."
          ],
          "columns": [
            "Their box held only four chosen rocks, but labelling them took longer than Max expected. Each numbered {{c0}} needed to match a drawing, a measurement, and a description in the notebook. He chose the ordinary grey stone as one of his two samples. Its small grains had taught him more than the red stone’s bright colour had promised. Ava chose two contrasting surfaces so she could keep testing her {{c1}}.",
            "Before they packed away, Jo asked what they would call their collection. \"The beginning,\" Ava said. Max added a question mark after it. Their rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to {{c2}}. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "label",
              "paragraph": 0,
              "prompt": "Their box held only four chosen rocks, but labelling them took longer than Max expected. Each numbered ______ needed to match a drawing, a measurement, and a description in the notebook."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "descriptions",
              "paragraph": 1,
              "prompt": "He chose the ordinary grey stone as one of his two samples. Its small grains had taught him more than the red stone’s bright colour had promised. Ava chose two contrasting surfaces so she could keep testing her ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "investigate",
              "paragraph": 3,
              "prompt": "Their rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to ______. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their stories."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "stories",
              "paragraph": 3,
              "prompt": "Their rocks would not multiply on the walk home, yet the collection felt larger than it had that morning. It now included things they had noticed, ideas they had revised, and questions they wanted to investigate. Max tucked the notebook beside the box; this time, he made sure there was room for both the stones and their ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "stories"
            },
            {
              "id": "w2",
              "word": "investigate"
            },
            {
              "id": "w1",
              "word": "descriptions"
            },
            {
              "id": "w0",
              "word": "label"
            }
          ]
        }
      }
    ],
    "intro": "1414 words · 10 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "R": {
    "grade": "F&P R target",
    "titles": [
      "More than the brightest stone",
      "Observation before a name",
      "Different questions, different groups",
      "A collection that kept growing"
    ],
    "sections": [
      {
        "text": [
          "To Ava and Max, a tray of garden stones was an invitation. They called their club the Pocket Geologists, although their pockets were rarely large enough for the notebook in which their most interesting discoveries eventually belonged.",
          "Ava enjoyed the curves and worn edges of pebbles. They prompted questions about where a stone might have been. Max preferred immediate surprises: a red surface, a sharp stripe, or a pattern that suggested a tiny landscape. Neither kind of interest was wrong, but each directed the children’s attention differently.",
          "Jo supplied loose stones they were allowed to examine and keep, limiting the collection to two samples each. Beside the tray she set a brush, a hand lens, a ruler, and numbered labels.",
          "Max reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer look? Max kept the red stone beside him, willing to investigate without yet surrendering his first preference."
        ],
        "mc": [
          {
            "prompt": "How are the children’s different preferences presented?",
            "choices": [
              "Only Ava’s interest is worthwhile.",
              "Max has no interest in learning.",
              "Both use the tools before noticing appearances.",
              "Both encourage curiosity but focus attention differently."
            ],
            "answer": 3,
            "skill": "Compare nuanced viewpoints",
            "evidence": "each directed the children’s attention differently"
          },
          {
            "prompt": "What question does Ava’s suggestion introduce?",
            "choices": [
              "Why should every grey stone be called granite?",
              "How can the children avoid recording observations?",
              "What might be missed when choices depend only on first appearances?",
              "Which child can carry the greatest number of stones?"
            ],
            "answer": 2,
            "skill": "Interpret an implied question",
            "evidence": "anything that required a closer look"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The Pocket Geologists",
              "was the children’s own name"
            ],
            [
              "Max’s first choice",
              "was a striking red stone"
            ],
            [
              "Jo’s tools",
              "supported close observation"
            ]
          ],
          "options": [
            "supported close observation",
            "was a striking red stone",
            "was the children’s own name"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The Pocket Geologists was the children’s own name",
            "Max’s first choice was a striking red stone",
            "Jo’s tools supported close observation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "To Ava and Max, a tray of garden stones was an invitation. They called their club the Pocket Geologists, although their pockets were rarely large enough for the notebook in which their most interesting discoveries eventually {{c0}}.",
            "Ava enjoyed the curves and worn edges of pebbles. They prompted questions about where a stone might have been. Max preferred immediate surprises: a red surface, a sharp stripe, or a pattern that suggested a tiny {{c1}}. Neither kind of interest was wrong, but each directed the children’s attention differently.",
            "Jo supplied loose stones they were allowed to examine and keep, limiting the collection to two samples each. Beside the tray she set a brush, a hand lens, a ruler, and numbered {{c2}}.",
            "Max reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer {{c3}}? Max kept the red stone beside him, willing to investigate without yet surrendering his first {{c4}}."
          ],
          "parts": [
            "To Ava and Max, a tray of garden stones was an invitation. They called their club the Pocket Geologists, although their pockets were rarely large enough for the notebook in which their most interesting discoveries eventually {{c0}}.\n\nAva enjoyed the curves and worn edges of pebbles. They prompted questions about where a stone might have been. Max preferred immediate surprises: a red surface, a sharp stripe, or a pattern that suggested a tiny {{c1}}. Neither kind of interest was wrong, but each directed the children’s attention differently.\n\nJo supplied loose stones they were allowed to examine and keep, limiting the collection to two samples each. Beside the tray she set a brush, a hand lens, a ruler, and numbered {{c2}}.\n\nMax reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer {{c3}}? Max kept the red stone beside him, willing to investigate without yet surrendering his first {{c4}}."
          ],
          "columns": [
            "To Ava and Max, a tray of garden stones was an invitation. They called their club the Pocket Geologists, although their pockets were rarely large enough for the notebook in which their most interesting discoveries eventually {{c0}}. Ava enjoyed the curves and worn edges of pebbles. They prompted questions about where a stone might have been. Max preferred immediate surprises: a red surface, a sharp stripe, or a pattern that suggested a tiny {{c1}}. Neither kind of interest was wrong, but each directed the children’s attention differently.",
            "Jo supplied loose stones they were allowed to examine and keep, limiting the collection to two samples each. Beside the tray she set a brush, a hand lens, a ruler, and numbered {{c2}}. Max reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer {{c3}}? Max kept the red stone beside him, willing to investigate without yet surrendering his first {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "belonged",
              "paragraph": 0,
              "prompt": "To Ava and Max, a tray of garden stones was an invitation. They called their club the Pocket Geologists, although their pockets were rarely large enough for the notebook in which their most interesting discoveries eventually ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "landscape",
              "paragraph": 1,
              "prompt": "Ava enjoyed the curves and worn edges of pebbles. They prompted questions about where a stone might have been. Max preferred immediate surprises: a red surface, a sharp stripe, or a pattern that suggested a tiny ______. Neither kind of interest was wrong, but each directed the children’s attention differently."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "labels",
              "paragraph": 2,
              "prompt": "Jo supplied loose stones they were allowed to examine and keep, limiting the collection to two samples each. Beside the tray she set a brush, a hand lens, a ruler, and numbered ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "look",
              "paragraph": 3,
              "prompt": "Max reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer ______? Max kept the red stone beside him, willing to investigate without yet surrendering his first preference."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "preference",
              "paragraph": 3,
              "prompt": "Max reached for the most colourful specimen before using any of the tools. Ava suggested beginning with an ordinary grey one. If they chose only what already looked remarkable, she wondered, how would they discover anything that required a closer look? Max kept the red stone beside him, willing to investigate without yet surrendering his first ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "preference"
            },
            {
              "id": "w3",
              "word": "look"
            },
            {
              "id": "w2",
              "word": "labels"
            },
            {
              "id": "w1",
              "word": "landscape"
            },
            {
              "id": "w0",
              "word": "belonged"
            }
          ]
        }
      },
      {
        "text": [
          "After loose dirt was brushed away and the washed sample had dried, the hand lens revealed a mosaic of grains. Some reflected light; others appeared darker or less sharply defined.",
          "Max compared the stone with Jo’s labelled granite specimen. He began copying the name, pleased by the possibility of turning an interesting object into an identified sample.",
          "Jo asked him to separate the evidence from the conclusion. Both specimens had visible grains, but the colours and arrangements were not identical. Rocks can contain different minerals, and one similarity does not settle every question about their identity.",
          "Max left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label provisional, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of knowledge."
        ],
        "mc": [
          {
            "prompt": "Why is the blank name space a useful part of the record?",
            "choices": [
              "It proves that the specimen has no possible name.",
              "It allows the children to avoid comparing the samples.",
              "It distinguishes observations from an unconfirmed conclusion.",
              "It shows that no observations have been made."
            ],
            "answer": 2,
            "skill": "Evaluate scientific reasoning",
            "evidence": "the boundary between what they had observed"
          },
          {
            "prompt": "What does “provisional” mean in this context?",
            "choices": [
              "Too valuable to examine closely",
              "Open to revision when further evidence is available",
              "Correct because it was written first",
              "Unrelated to the sample being studied"
            ],
            "answer": 1,
            "skill": "Use vocabulary in context",
            "evidence": "further evidence could change it"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The hand lens",
              "revealed small grains"
            ],
            [
              "The granite specimen",
              "provided a comparison"
            ],
            [
              "The revised note",
              "recorded observations"
            ]
          ],
          "options": [
            "recorded observations",
            "provided a comparison",
            "revealed small grains"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The hand lens revealed small grains",
            "The granite specimen provided a comparison",
            "The revised note recorded observations"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After loose dirt was brushed away and the washed sample had dried, the hand lens revealed a mosaic of {{c0}}. Some reflected light; others appeared darker or less sharply defined.",
            "Max compared the stone with Jo’s labelled granite specimen. He began copying the name, pleased by the possibility of turning an interesting object into an identified {{c1}}.",
            "Jo asked him to separate the evidence from the conclusion. Both specimens had visible grains, but the colours and arrangements were not identical. Rocks can contain different minerals, and one similarity does not settle every question about their {{c2}}.",
            "Max left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label {{c3}}, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of {{c4}}."
          ],
          "parts": [
            "After loose dirt was brushed away and the washed sample had dried, the hand lens revealed a mosaic of {{c0}}. Some reflected light; others appeared darker or less sharply defined.\n\nMax compared the stone with Jo’s labelled granite specimen. He began copying the name, pleased by the possibility of turning an interesting object into an identified {{c1}}.\n\nJo asked him to separate the evidence from the conclusion. Both specimens had visible grains, but the colours and arrangements were not identical. Rocks can contain different minerals, and one similarity does not settle every question about their {{c2}}.\n\nMax left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label {{c3}}, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of {{c4}}."
          ],
          "columns": [
            "After loose dirt was brushed away and the washed sample had dried, the hand lens revealed a mosaic of {{c0}}. Some reflected light; others appeared darker or less sharply defined. Max compared the stone with Jo’s labelled granite specimen. He began copying the name, pleased by the possibility of turning an interesting object into an identified {{c1}}.",
            "Jo asked him to separate the evidence from the conclusion. Both specimens had visible grains, but the colours and arrangements were not identical. Rocks can contain different minerals, and one similarity does not settle every question about their {{c2}}. Max left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label {{c3}}, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "grains",
              "paragraph": 0,
              "prompt": "After loose dirt was brushed away and the washed sample had dried, the hand lens revealed a mosaic of ______. Some reflected light; others appeared darker or less sharply defined."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "sample",
              "paragraph": 1,
              "prompt": "Max compared the stone with Jo’s labelled granite specimen. He began copying the name, pleased by the possibility of turning an interesting object into an identified ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "identity",
              "paragraph": 2,
              "prompt": "Jo asked him to separate the evidence from the conclusion. Both specimens had visible grains, but the colours and arrangements were not identical. Rocks can contain different minerals, and one similarity does not settle every question about their ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "provisional",
              "paragraph": 3,
              "prompt": "Max left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label ______, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of knowledge."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "knowledge",
              "paragraph": 3,
              "prompt": "Max left space where the name had been and recorded what they could check again: colour, texture, grain appearance, and a drawing. The blank was not proof that their investigation had failed. It showed the boundary between what they had observed and what they had not yet established. Ava called their label provisional, meaning that further evidence could change it. Max was beginning to see uncertainty as information rather than merely an absence of ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "knowledge"
            },
            {
              "id": "w3",
              "word": "provisional"
            },
            {
              "id": "w2",
              "word": "identity"
            },
            {
              "id": "w1",
              "word": "sample"
            },
            {
              "id": "w0",
              "word": "grains"
            }
          ]
        }
      },
      {
        "text": [
          "Max sorted the rocks by colour and admired the clear red, grey, and pale groups. Ava rearranged them by texture, and his red group disappeared into several new ones.",
          "His first response was to defend the original arrangement. Jo asked whether they were trying to identify a rock or organise observations about a particular feature. Those were related tasks, but they were not identical.",
          "A rough red sample could belong to a red group in one investigation and a rough group in another. Neither arrangement changed the sample itself. The usefulness of the groups depended on the question being asked.",
          "Jo showed them a quartz crystal as a mineral specimen and compared it with the rock samples. They recorded the terms carefully, resisting the temptation to use them as interchangeable labels. Then they added measurements with the ruler.",
          "Their notebook now held several ways to describe the same small collection. Max found that a second useful description did not destroy the first one. It revealed a different part of what there was to notice."
        ],
        "mc": [
          {
            "prompt": "Why does Jo distinguish identification from grouping observations?",
            "choices": [
              "Measurements make descriptions unnecessary.",
              "A useful grouping does not by itself establish a rock’s identity.",
              "Colour groups are never useful for observation.",
              "A mineral specimen changes whenever it is moved."
            ],
            "answer": 1,
            "skill": "Distinguish related scientific tasks",
            "evidence": "Those were related tasks, but they were not identical"
          },
          {
            "prompt": "What idea is developed by the changing groups?",
            "choices": [
              "The question guides which similarities are useful.",
              "An object can have only one observable feature.",
              "Ava must accept Max’s arrangement in every investigation.",
              "Changing a description physically changes a rock."
            ],
            "answer": 0,
            "skill": "Explain a conceptual insight",
            "evidence": "depended on the question being asked"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "The colour groups",
              "compared appearance"
            ],
            [
              "The texture groups",
              "compared surfaces"
            ],
            [
              "The ruler",
              "added size measurements"
            ]
          ],
          "options": [
            "added size measurements",
            "compared surfaces",
            "compared appearance"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The colour groups compared appearance",
            "The texture groups compared surfaces",
            "The ruler added size measurements"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Max sorted the rocks by colour and admired the clear red, grey, and pale {{c0}}. Ava rearranged them by texture, and his red group disappeared into several new ones.",
            "His first response was to defend the original arrangement. Jo asked whether they were trying to identify a rock or organise observations about a particular {{c1}}. Those were related tasks, but they were not identical.",
            "A rough red sample could belong to a red group in one investigation and a rough group in another. Neither arrangement changed the sample itself. The usefulness of the groups depended on the question being {{c2}}.",
            "Jo showed them a quartz crystal as a mineral specimen and compared it with the rock samples. They recorded the terms carefully, resisting the temptation to use them as interchangeable labels. Then they added measurements with the {{c3}}.",
            "Their notebook now held several ways to describe the same small collection. Max found that a second useful description did not destroy the first one. It revealed a different part of what there was to {{c4}}."
          ],
          "parts": [
            "Max sorted the rocks by colour and admired the clear red, grey, and pale {{c0}}. Ava rearranged them by texture, and his red group disappeared into several new ones.\n\nHis first response was to defend the original arrangement. Jo asked whether they were trying to identify a rock or organise observations about a particular {{c1}}. Those were related tasks, but they were not identical.\n\nA rough red sample could belong to a red group in one investigation and a rough group in another. Neither arrangement changed the sample itself. The usefulness of the groups depended on the question being {{c2}}.\n\nJo showed them a quartz crystal as a mineral specimen and compared it with the rock samples. They recorded the terms carefully, resisting the temptation to use them as interchangeable labels. Then they added measurements with the {{c3}}.\n\nTheir notebook now held several ways to describe the same small collection. Max found that a second useful description did not destroy the first one. It revealed a different part of what there was to {{c4}}."
          ],
          "columns": [
            "Max sorted the rocks by colour and admired the clear red, grey, and pale {{c0}}. Ava rearranged them by texture, and his red group disappeared into several new ones. His first response was to defend the original arrangement. Jo asked whether they were trying to identify a rock or organise observations about a particular {{c1}}. Those were related tasks, but they were not identical.",
            "A rough red sample could belong to a red group in one investigation and a rough group in another. Neither arrangement changed the sample itself. The usefulness of the groups depended on the question being {{c2}}. Jo showed them a quartz crystal as a mineral specimen and compared it with the rock samples. They recorded the terms carefully, resisting the temptation to use them as interchangeable labels. Then they added measurements with the {{c3}}. Their notebook now held several ways to describe the same small collection. Max found that a second useful description did not destroy the first one. It revealed a different part of what there was to {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "groups",
              "paragraph": 0,
              "prompt": "Max sorted the rocks by colour and admired the clear red, grey, and pale ______. Ava rearranged them by texture, and his red group disappeared into several new ones."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "feature",
              "paragraph": 1,
              "prompt": "His first response was to defend the original arrangement. Jo asked whether they were trying to identify a rock or organise observations about a particular ______. Those were related tasks, but they were not identical."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "asked",
              "paragraph": 2,
              "prompt": "A rough red sample could belong to a red group in one investigation and a rough group in another. Neither arrangement changed the sample itself. The usefulness of the groups depended on the question being ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "ruler",
              "paragraph": 3,
              "prompt": "Jo showed them a quartz crystal as a mineral specimen and compared it with the rock samples. They recorded the terms carefully, resisting the temptation to use them as interchangeable labels. Then they added measurements with the ______."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "notice",
              "paragraph": 4,
              "prompt": "Their notebook now held several ways to describe the same small collection. Max found that a second useful description did not destroy the first one. It revealed a different part of what there was to ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "notice"
            },
            {
              "id": "w3",
              "word": "ruler"
            },
            {
              "id": "w2",
              "word": "asked"
            },
            {
              "id": "w1",
              "word": "feature"
            },
            {
              "id": "w0",
              "word": "groups"
            }
          ]
        }
      },
      {
        "text": [
          "Only four rocks would leave Jo’s table, but preparing the collection required more than putting them into a box. Each numbered label needed a matching drawing, measurement, and description. Notes that became separated from their samples would be difficult to use later.",
          "Max chose the ordinary grey specimen as one of his two. Its grains had taught him to question a quick identification and to look beyond immediate appearance. Ava chose contrasting textures so she could continue comparing her descriptions at home.",
          "When Jo asked for the collection’s name, Ava suggested \"The beginning.\" Max added a question mark. The punctuation did not mean they had learned nothing certain. It recognised that some observations were secure while other questions remained open.",
          "Their collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of thinking that would help the children understand what they found next."
        ],
        "mc": [
          {
            "prompt": "What does the question mark suggest about the children’s learning?",
            "choices": [
              "They distinguish established observations from questions still open.",
              "They believe that every observation is useless.",
              "They have forgotten which rocks they chose.",
              "They want to replace the notebook with more stones."
            ],
            "answer": 0,
            "skill": "Interpret a symbolic detail",
            "evidence": "some observations were secure"
          },
          {
            "prompt": "Why does the ending give the notebook equal importance to the rocks?",
            "choices": [
              "The notebook can identify every future sample automatically.",
              "The drawings are more accurate than any observation.",
              "The children no longer enjoy examining real objects.",
              "The record preserves the reasoning that makes the collection useful."
            ],
            "answer": 3,
            "skill": "Analyse the significance of an ending",
            "evidence": "the trail of thinking"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The numbered labels",
              "connected samples with records"
            ],
            [
              "Max’s grey stone",
              "represented a new way of choosing"
            ],
            [
              "The notebook",
              "kept their discoveries and questions"
            ]
          ],
          "options": [
            "kept their discoveries and questions",
            "represented a new way of choosing",
            "connected samples with records"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The numbered labels connected samples with records",
            "Max’s grey stone represented a new way of choosing",
            "The notebook kept their discoveries and questions"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Only four rocks would leave Jo’s table, but preparing the collection required more than putting them into a {{c0}}. Each numbered label needed a matching drawing, measurement, and description. Notes that became separated from their samples would be difficult to use later.",
            "Max chose the ordinary grey specimen as one of his two. Its grains had taught him to question a quick identification and to look beyond immediate {{c1}}. Ava chose contrasting textures so she could continue comparing her descriptions at home.",
            "When Jo asked for the collection’s name, Ava suggested \"The beginning.\" Max added a question mark. The punctuation did not mean they had learned nothing certain. It recognised that some observations were secure while other questions remained {{c2}}.",
            "Their collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of {{c3}} that would help the children understand what they found {{c4}}."
          ],
          "parts": [
            "Only four rocks would leave Jo’s table, but preparing the collection required more than putting them into a {{c0}}. Each numbered label needed a matching drawing, measurement, and description. Notes that became separated from their samples would be difficult to use later.\n\nMax chose the ordinary grey specimen as one of his two. Its grains had taught him to question a quick identification and to look beyond immediate {{c1}}. Ava chose contrasting textures so she could continue comparing her descriptions at home.\n\nWhen Jo asked for the collection’s name, Ava suggested \"The beginning.\" Max added a question mark. The punctuation did not mean they had learned nothing certain. It recognised that some observations were secure while other questions remained {{c2}}.\n\nTheir collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of {{c3}} that would help the children understand what they found {{c4}}."
          ],
          "columns": [
            "Only four rocks would leave Jo’s table, but preparing the collection required more than putting them into a {{c0}}. Each numbered label needed a matching drawing, measurement, and description. Notes that became separated from their samples would be difficult to use later. Max chose the ordinary grey specimen as one of his two. Its grains had taught him to question a quick identification and to look beyond immediate {{c1}}. Ava chose contrasting textures so she could continue comparing her descriptions at home.",
            "When Jo asked for the collection’s name, Ava suggested \"The beginning.\" Max added a question mark. The punctuation did not mean they had learned nothing certain. It recognised that some observations were secure while other questions remained {{c2}}. Their collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of {{c3}} that would help the children understand what they found {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "box",
              "paragraph": 0,
              "prompt": "Only four rocks would leave Jo’s table, but preparing the collection required more than putting them into a ______. Each numbered label needed a matching drawing, measurement, and description. Notes that became separated from their samples would be difficult to use later."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "appearance",
              "paragraph": 1,
              "prompt": "Max chose the ordinary grey specimen as one of his two. Its grains had taught him to question a quick identification and to look beyond immediate ______. Ava chose contrasting textures so she could continue comparing her descriptions at home."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "open",
              "paragraph": 2,
              "prompt": "When Jo asked for the collection’s name, Ava suggested \"The beginning.\" Max added a question mark. The punctuation did not mean they had learned nothing certain. It recognised that some observations were secure while other questions remained ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "thinking",
              "paragraph": 3,
              "prompt": "Their collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of ______ that would help the children understand what they found next."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "next",
              "paragraph": 3,
              "prompt": "Their collection had grown without gaining another stone. It contained records they could revisit, ideas they had revised, and new investigations they could plan. Max made room for the notebook beside the box. The objects mattered, but so did the trail of thinking that would help the children understand what they found ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "next"
            },
            {
              "id": "w3",
              "word": "thinking"
            },
            {
              "id": "w2",
              "word": "open"
            },
            {
              "id": "w1",
              "word": "appearance"
            },
            {
              "id": "w0",
              "word": "box"
            }
          ]
        }
      }
    ],
    "intro": "695 words · 4 reading pages · 5 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  }
};
const TITLES=["A big rock","Get the rock wet","Look at each rock","A rock in a box"];
const SCENE_ALTS=["Rock Collecting cover","Rock Collecting: A big rock","Rock Collecting: Get the rock wet","Rock Collecting: Look at each rock","Rock Collecting: A rock in a box"];
window.CAMP_ART=["assets/illustrations/page-1-pixar.png","assets/illustrations/page-1-pixar.png","assets/illustrations/page-2-pixar.png","assets/illustrations/page-3-pixar.png","assets/illustrations/page-4-pixar.png"];
window.CAMP_REPORT_ART_VERSION="1ed3090586ce";
window.LOWER_PICTURE_SETS={"groups":[["big rock","red rock","bag","tray"],["brush","lens","wet rock","sun"],["flat rock","bumpy rock","box","hand"],["notebook","pencil","label","collection"]],"atlas":"assets/illustrations/chapter-picture-groups-v1.png"};
window.EXTRA_TASKS={"E":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A small red rock.","A big white rock.","A big grey rock."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A flat red rock.","A rough red rock.","A smooth polished red rock."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A bag with a string.","A bag with a zip.","A bag with two straps."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A tray full of rocks.","A tray with a lid.","An empty wooden tray."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A brush with a long blue handle.","A brush with a wooden handle.","A brush with a metal handle."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A round lens with a handle.","A square lens with a handle.","A round lens with no handle."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A dry rock with dust.","A rock with snow on it.","A wet rock with drops."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A red sun with no rays.","A sun with yellow rays.","A sun behind a cloud."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A flat grey rock.","A tall grey rock.","A round grey rock."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A grey rock with a flat top.","A grey rock with a smooth round top.","A grey rock with big bumps."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A box full of rocks.","An open box.","A closed box."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["An open hand.","A hand in a fist.","A hand holding a rope."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A closed book.","A book with drawings on its pages.","An open book with blank pages."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A yellow pencil with no rubber.","A yellow pencil with a pink rubber.","A blue pencil with a pink rubber."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A blank label on a string.","A label with a number.","A blank label with no string."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["One large rock.","Four red rocks.","Four different rocks."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"rockdescriptions":{"label":"Rock descriptions","prefix":"r","items":[{"prompt":"Choose three words for rock 1.","choices":["round, rough, red","flat, shiny, red","round, shiny, red"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,2,33.3,34],"index":0}},{"prompt":"Choose three words for rock 2.","choices":["rough, flat, yellow","rough, tall, yellow","smooth, tall, yellow"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,0,33.5,36.5],"index":1}},{"prompt":"Choose three words for rock 3.","choices":["flat, smooth, grey","round, smooth, grey","flat, shiny, grey"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67,5,33,31],"index":2}},{"prompt":"Choose three words for rock 4.","choices":["pointed, rough, brown","round, shiny, brown","round, rough, brown"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,36,33.5,36],"index":3}},{"prompt":"Choose three words for rock 5.","choices":["long, rough, black","long, shiny, black","short, shiny, black"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,36.5,34,32],"index":4}},{"prompt":"Choose three words for rock 6.","choices":["pointed, rough, white","round, rough, white","pointed, smooth, white"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67.5,34,32.5,38],"index":5}}]}}],"F":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a big white rock.","I can see a big grey rock.","I can see a small red rock."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a rough red rock.","I can see a smooth polished red rock.","I can see a flat red rock."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a bag with a zip.","I can see a bag with two straps.","I can see a bag with a string."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a tray with a lid.","I can see an empty wooden tray.","I can see a tray full of rocks."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a brush with a wooden handle.","I can see a brush with a metal handle.","I can see a brush with a long blue handle."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a square lens with a handle.","I can see a round lens with no handle.","I can see a round lens with a handle."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a rock with snow on it.","I can see a wet rock with drops.","I can see a dry rock with dust."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a sun with yellow rays.","I can see a sun behind a cloud.","I can see a red sun with no rays."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a tall grey rock.","I can see a round grey rock.","I can see a flat grey rock."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a grey rock with a smooth round top.","I can see a grey rock with big bumps.","I can see a grey rock with a flat top."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see an open box.","I can see a closed box.","I can see a box full of rocks."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a hand in a fist.","I can see a hand holding a rope.","I can see an open hand."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a book with drawings on its pages.","I can see an open book with blank pages.","I can see a closed book."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a yellow pencil with a pink rubber.","I can see a blue pencil with a pink rubber.","I can see a yellow pencil with no rubber."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a label with a number.","I can see a blank label with no string.","I can see a blank label on a string."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see four red rocks.","I can see four different rocks.","I can see one large rock."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"rockdescriptions":{"label":"Rock descriptions","prefix":"r","items":[{"prompt":"Choose three words for rock 1.","choices":["round, rough, red","flat, shiny, red","round, shiny, red"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,2,33.3,34],"index":0}},{"prompt":"Choose three words for rock 2.","choices":["rough, flat, yellow","rough, tall, yellow","smooth, tall, yellow"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,0,33.5,36.5],"index":1}},{"prompt":"Choose three words for rock 3.","choices":["flat, smooth, grey","round, smooth, grey","flat, shiny, grey"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67,5,33,31],"index":2}},{"prompt":"Choose three words for rock 4.","choices":["pointed, rough, brown","round, shiny, brown","round, rough, brown"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,36,33.5,36],"index":3}},{"prompt":"Choose three words for rock 5.","choices":["long, rough, black","long, shiny, black","short, shiny, black"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,36.5,34,32],"index":4}},{"prompt":"Choose three words for rock 6.","choices":["pointed, rough, white","round, rough, white","pointed, smooth, white"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67.5,34,32.5,38],"index":5}}]}}],"G":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a big grey rock.","The picture shows a small red rock.","The picture shows a big white rock."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a smooth polished red rock.","The picture shows a flat red rock.","The picture shows a rough red rock."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a bag with two straps.","The picture shows a bag with a string.","The picture shows a bag with a zip."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows an empty wooden tray.","The picture shows a tray full of rocks.","The picture shows a tray with a lid."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a brush with a metal handle.","The picture shows a brush with a long blue handle.","The picture shows a brush with a wooden handle."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a round lens with no handle.","The picture shows a round lens with a handle.","The picture shows a square lens with a handle."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a wet rock with drops.","The picture shows a dry rock with dust.","The picture shows a rock with snow on it."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a sun behind a cloud.","The picture shows a red sun with no rays.","The picture shows a sun with yellow rays."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a round grey rock.","The picture shows a flat grey rock.","The picture shows a tall grey rock."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a grey rock with big bumps.","The picture shows a grey rock with a flat top.","The picture shows a grey rock with a smooth round top."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a closed box.","The picture shows a box full of rocks.","The picture shows an open box."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a hand holding a rope.","The picture shows an open hand.","The picture shows a hand in a fist."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows an open book with blank pages.","The picture shows a closed book.","The picture shows a book with drawings on its pages."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a blue pencil with a pink rubber.","The picture shows a yellow pencil with no rubber.","The picture shows a yellow pencil with a pink rubber."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a blank label with no string.","The picture shows a blank label on a string.","The picture shows a label with a number."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows four different rocks.","The picture shows one large rock.","The picture shows four red rocks."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"rockdescriptions":{"label":"Rock descriptions","prefix":"r","items":[{"prompt":"Choose three words for rock 1.","choices":["round, rough, red","flat, shiny, red","round, shiny, red"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,2,33.3,34],"index":0}},{"prompt":"Choose three words for rock 2.","choices":["rough, flat, yellow","rough, tall, yellow","smooth, tall, yellow"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,0,33.5,36.5],"index":1}},{"prompt":"Choose three words for rock 3.","choices":["flat, smooth, grey","round, smooth, grey","flat, shiny, grey"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67,5,33,31],"index":2}},{"prompt":"Choose three words for rock 4.","choices":["pointed, rough, brown","round, shiny, brown","round, rough, brown"],"answer":2,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[0,36,33.5,36],"index":3}},{"prompt":"Choose three words for rock 5.","choices":["long, rough, black","long, shiny, black","short, shiny, black"],"answer":1,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[33.5,36.5,34,32],"index":4}},{"prompt":"Choose three words for rock 6.","choices":["pointed, rough, white","round, rough, white","pointed, smooth, white"],"answer":0,"skill":"Describe shape, texture and colour","picture":{"atlas":"assets/illustrations/six-rock-descriptions-v1.png","columns":3,"row":null,"crop":[67.5,34,32.5,38],"index":5}}]}}],"L":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ava and Max could turn almost any walk into a ______ about rocks.","choices":["rock","stone","tray","conversation"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ava liked rounded pebbles; Max searched for patterns that ______ like tiny maps.","choices":["checked","waited","looked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Today, Jo brought a tray of loose garden ______ for them to examine.","choices":["label","stones","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They could each choose two small ______ to keep.","choices":["samples","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Before choosing, the children spread a cloth over the table and set out a brush, a hand lens, and a ______.","choices":["sample","lens","grain","notebook"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max reached for the brightest ______.","choices":["grain","surface","stone","lens"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will sort","sorted","are sorting"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ava loosened dirt from a grey ______ with the soft brush.","choices":["notebook","label","stone","tray"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"After washing it and letting it dry, she ______ it to Max.","choices":["waited","passed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo showed them a labelled ______ of granite.","choices":["sample","notebook","label","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She explained that ______ can contain different minerals and that a lens helps reveal their grains.","choices":["label","sample","lens","rocks"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The children did not give their garden stone a name just because it ______.","choices":["checked","waited","sparkled","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"It was a ______ they could check again.","choices":["surface","description","lens","grain"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["sorted","are sorting","will sort"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max arranged the ______ by colour.","choices":["label","stones","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava ______ the same stones by how smooth or rough they felt.","choices":["arranged","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"At first, Max thought one ______ must be wrong.","choices":["label","sample","lens","arrangement"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked which ______ each arrangement answered.","choices":["lens","grain","question","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Colour groups showed which stones ______ alike in one way.","choices":["waited","looked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Texture groups showed how their ______ felt.","choices":["surfaces","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are sorting","will sort","sorted"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The children chose two small samples each and put a numbered label beside every ______.","choices":["rock","label","sample","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Their notebook matched each number to a drawing and a ______.","choices":["label","sample","lens","description"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max had wanted the brightest ______ at the start.","choices":["grain","surface","stone","lens"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Now he chose a plain grey one because its tiny ______ had surprised him.","choices":["surface","grains","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava selected a smooth pebble and a rough ______ stone so she could compare them again at home.","choices":["red","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They packed their ______ carefully.","choices":["surface","texture","colour","collection"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will sort","sorted","are sorting"],"answer":0,"skill":"Use the future tense"}]}}],"M":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ava and Max enjoyed finding ______ that made them stop and look again.","choices":["rock","stone","tray","stones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ava liked rounded pebbles, while Max searched for patterns and bright ______.","choices":["tray","notebook","colours","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo brought a tray of loose garden ______ for them to study.","choices":["label","rocks","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Each child could choose two small samples to keep after looking at the whole ______.","choices":["collection","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They spread a cloth on the table and arranged a soft brush, a hand lens, and a ______ beside it.","choices":["sample","lens","grain","notebook"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max reached immediately for a red ______.","choices":["grain","surface","stone","lens"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will sort","sorted","are sorting"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ava brushed loose dirt from the grey stone, ______ it, and let it dry.","choices":["checked","waited","washed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Max then studied its ______ through their hand lens.","choices":["label","surface","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Some reflected light, while others ______ dark.","choices":["looked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo showed them a labelled granite specimen from her teaching ______.","choices":["label","sample","lens","collection"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She explained that ______ can contain different minerals, whose grains can be useful to observe.","choices":["lens","grain","rocks","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ava recorded the ______, rough surface, and shiny grains.","choices":["surface","colour","lens","grain"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["sorted","are sorting","will sort"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max’s first groups were ______ on colour.","choices":["waited","based","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava used the same stones to make groups of smooth and rough ______.","choices":["surfaces","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The two arrangements ______ quite different.","choices":["noticed","checked","waited","looked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max ______ which one was correct.","choices":["checked","waited","wondered","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo asked what feature they were ______ each time, and the children began to see why both arrangements could be useful.","choices":["checking","comparing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Texture described how a ______ felt.","choices":["surface","grain","texture","colour"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are sorting","will sort","sorted"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Each chosen ______ received a numbered label.","choices":["sample","notebook","label","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The children matched that number to a drawing and a description so their observations would stay connected to the right ______.","choices":["sample","lens","grain","rock"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max selected the grey stone whose ______ had surprised him.","choices":["lens","grain","grains","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"It looked less dramatic than the ______ one, but it gave him more to wonder about.","choices":["waited","red","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava chose contrasting ______: a smooth pebble and a rough red stone.","choices":["textures","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She wanted to compare their ______ again at home.","choices":["surface","texture","colour","surfaces"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will sort","sorted","are sorting"],"answer":0,"skill":"Use the future tense"}]}}],"N":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The Pocket Geologists was the name Ava and Max had given their ______-collecting club.","choices":["stone","tray","notebook","rock"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Most of their investigations began in Jo’s garden rather than on an ______.","choices":["tray","notebook","expedition","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ava noticed rounded shapes and wondered where a pebble might have ______.","choices":["waited","travelled","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Max preferred stones with strong ______ or unusual patterns.","choices":["colours","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo brought a tray of loose garden ______ and gave each child permission to choose two.","choices":["label","sample","lens","samples"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They set a lens, brush, ruler, and notebook beside the ______ before starting.","choices":["grain","surface","tray","lens"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After brushing and washing the grey ______, Ava let it dry.","choices":["tray","notebook","sample","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Max ______ through the lens and found a patchwork of tiny grains, some bright and others dark.","choices":["waited","looked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He compared it with Jo’s labelled granite specimen and began ______ the same name.","choices":["writing","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo asked which observations ______ that decision.","choices":["noticed","checked","waited","supported"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Visible grains were a useful similarity, but their ______ and arrangement differed.","choices":["lens","grain","colours","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"______ can contain different minerals, and an identification needs more than one shared feature.","choices":["surface","Rocks","lens","grain"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["will sort","are sorting","had sorted"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max made colour groups; Ava rearranged the ______ according to texture.","choices":["label","stones","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"When the red group broke apart, Max wondered whether one of them had ______ incorrectly.","choices":["sorted","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo asked whether they had changed the stones or changed the ______.","choices":["label","sample","lens","question"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The same ______ could belong in both a red group and a rough group.","choices":["grain","surface","sample","lens"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She showed them a quartz crystal from a separate teaching ______.","choices":["surface","collection","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Mineral and ______ were related terms, but were not interchangeable names for the same thing.","choices":["rock","surface","texture","colour"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["are sorting","had sorted","will sort"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Their box would hold four ______, two chosen by each child.","choices":["rocks","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Each numbered label had to match the right drawing, measurement, and ______.","choices":["label","sample","lens","description"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Max chose the grey sample as well as a coloured ______.","choices":["grain","surface","stone","lens"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Its small grains had helped change his idea of what made a ______ worth keeping.","choices":["texture","sample","grain","surface"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava selected contrasting ______ to compare at home.","choices":["textures","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Asked to name their ______, she suggested \"The beginning.\"","choices":["surface","texture","colour","collection"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}}],"P":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Ava and Max called themselves the Pocket Geologists, although their discoveries usually began in Jo’s garden rather than on a distant ______.","choices":["rock","stone","tray","expedition"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They enjoyed collecting ______ for different reasons.","choices":["tray","notebook","rocks","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ava noticed rounded shapes and ______ the journeys a pebble might have taken.","choices":["waited","imagined","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Max preferred dramatic ______ and patterns.","choices":["colours","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He hoped to find a ______ that looked extraordinary before anyone even picked it up.","choices":["sample","lens","grain","stone"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo set a tray of loose garden ______ on the table.","choices":["lens","grain","stones","sample"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Jo asked the children to practise with the hand lens before choosing a ______.","choices":["tray","notebook","sample","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She placed a small drawing on the table and let them find a position where its lines ______ clear.","choices":["waited","looked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Max ______ the lens quickly at first.","choices":["moved","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The changing view made him feel as though the tool was ______ to work.","choices":["waiting","looking","checking","refusing"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ava held hers still for a moment and ______ the distance slowly.","choices":["checked","waited","adjusted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"When both children could see the lines, they compared what ______.","choices":["waited","helped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["will sort","are sorting","had sorted"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max suggested that she add a name, but she asked what ______ they had that would justify one.","choices":["label","information","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They could describe its size compared with the red sample, the rounded corner on one side, and the dirt covering part of its ______.","choices":["surface","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo invited them to record a question as well as a ______.","choices":["label","sample","lens","description"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ava wondered what they might notice after ______ the stone.","choices":["looking","checking","cleaning","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Max ______ whether the lens would reveal a pattern.","choices":["waited","wondered","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Their ______ now held more than a picture of something they liked.","choices":["notebook","surface","texture","colour"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["are sorting","had sorted","will sort"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After brushing off loose dirt, Ava washed the grey ______ and allowed it to dry.","choices":["stone","label","sample","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Under the hand lens, its dull ______ became a patchwork of tiny grains.","choices":["label","sample","lens","surface"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Some reflected light; others ______ dark.","choices":["checked","waited","remained","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"\"It must be the same as that granite,\" Max said, pointing to a labelled specimen in Jo’s teaching ______.","choices":["surface","collection","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ him to explain his evidence.","choices":["asked","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Both stones contained visible grains, but their ______ and arrangements were not identical.","choices":["surface","texture","colour","colours"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After examining the grey stone’s ______, the children returned to their first drawing.","choices":["label","sample","lens","grains"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Some details were missing, and a shaded area Ava had drawn as smooth contained small changes she had not ______.","choices":["waited","guided","noticed","checked"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She added those details instead of ______ her first picture had been complete.","choices":["checking","pretending","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Max read the written description aloud while she checked it against the ______.","choices":["sample","surface","texture","colour"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They did not disagree about ______.","choices":["waiting","looking","checking","everything"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Both could point to the rough ______ and the grains that caught the light.","choices":["crystal","collection","surface","colour"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["will sort","are sorting","had sorted"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max ______ one perfect way to arrange the tray.","choices":["checked","waited","wanted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He suggested putting the most attractive ______ at the front, where visitors would notice them first.","choices":["surface","stones","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava suggested a different purpose: an ______ that would help someone compare the stones.","choices":["arrangement","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She ______ which features a visitor might want to examine side by side.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They would explain the ______ behind each arrangement before moving the first sample.","choices":["colour","crystal","question","texture"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The children looked at colour, shape, and ______ without yet deciding that one feature should always come first.","choices":["question","surface","crystal","collection"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["are sorting","had sorted","will sort"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max sorted the stones into ______ groups.","choices":["surface","colour","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava rearranged them by texture, placing smooth stones together and rough ______ together.","choices":["stones","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Max frowned when his neat ______ group disappeared.","choices":["noticed","checked","waited","red"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked whether they had changed the rocks or changed the ______.","choices":["colour","crystal","question","texture"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The children ______ again.","choices":["waited","looked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The same red stone could belong to a colour group and a ______ group without either arrangement being wrong.","choices":["texture","collection","question","evidence"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The children ______ a ruler beside a chosen sample.","choices":["placed","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Max began reading from the ruler’s edge, until Ava noticed that the numbered scale ______ a little farther along.","choices":["noticed","checked","waited","started"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ them where the zero mark was.","choices":["checked","waited","showed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They lined up one end of the sample carefully and agreed which direction across it they were ______.","choices":["checking","measuring","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava recorded the result with its unit and drew a small line on her sketch to show the ______ length.","choices":["measured","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Max repeated the process, using the same starting point and ______.","choices":["collection","question","evidence","direction"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["will sort","are sorting","had sorted"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A small gust moved the loose paper ______ while the children were preparing their box.","choices":["surface","texture","colour","labels"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"One slid away from its sample and came to rest beside another ______.","choices":["crystal","collection","stone","colour"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ava suggested checking the ______ first.","choices":["question","notebook","crystal","collection"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"If their records were useful, the ______ should help them connect each number to the right sample.","choices":["descriptions","crystal","collection","question"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The notes about colour alone left them uncertain about two ______.","choices":["collection","question","evidence","stones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Details of shape, ______, and the position of a dark mark helped them make a more careful comparison.","choices":["stone","tray","texture","rock"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["are sorting","had sorted","will sort"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Their box held only four chosen ______, but labelling them took longer than Max expected.","choices":["colour","crystal","rocks","texture"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Each numbered label needed to match a drawing, a measurement, and a description in the ______.","choices":["question","notebook","crystal","collection"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He chose the ordinary grey stone as one of his two ______.","choices":["samples","crystal","collection","question"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Its small grains had taught him more than the red stone’s bright ______ had promised.","choices":["question","evidence","description","colour"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Ava chose two contrasting ______ so she could keep testing her descriptions.","choices":["evidence","description","surfaces","question"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Before they packed away, Jo asked what they would call their ______.","choices":["notebook","collection","stone","tray"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}}],"R":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"To Ava and Max, a tray of garden ______ was an invitation.","choices":["rock","stone","tray","stones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They called their club the Pocket Geologists, although their pockets were rarely large enough for the ______ in which their most interesting discoveries eventually belonged.","choices":["tray","label","notebook","stone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Ava ______ the curves and worn edges of pebbles.","choices":["waited","enjoyed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They prompted questions about where a ______ might have been.","choices":["stone","label","sample","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Max preferred immediate surprises: a red ______, a sharp stripe, or a pattern that suggested a tiny landscape.","choices":["label","sample","lens","surface"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Neither kind of interest was wrong, but each directed the children’s ______ differently.","choices":["lens","grain","attention","sample"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After loose dirt was brushed away and the washed sample had dried, the hand lens ______ a mosaic of grains.","choices":["checked","waited","revealed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Some reflected light; others appeared darker or less sharply ______.","choices":["waited","defined","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Max compared the ______ with Jo’s labelled granite specimen.","choices":["stone","label","sample","lens"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He began copying the name, pleased by the possibility of turning an interesting object into an ______ sample.","choices":["noticed","checked","waited","identified"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked him to separate the ______ from the conclusion.","choices":["lens","grain","evidence","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Both specimens had visible grains, but the ______ and arrangements were not identical.","choices":["surface","colours","lens","grain"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorting carefully.","Ava and Max sort carefully.","Ava and Max sorts carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will sort","sorted","sorts"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are sorting","sorted","will sort"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["will sort","are sorting","had sorted"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Max sorted the rocks by ______ and admired the clear red, grey, and pale groups.","choices":["label","colour","tray","notebook"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava rearranged them by ______, and his red group disappeared into several new ones.","choices":["texture","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"His first response was to defend the original ______.","choices":["label","sample","lens","arrangement"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked whether they were trying to identify a ______ or organise observations about a particular feature.","choices":["grain","surface","rock","lens"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Those were ______ tasks, but they were not identical.","choices":["waited","related","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"A rough red ______ could belong to a red group in one investigation and a rough group in another.","choices":["sample","surface","texture","colour"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sort carefully.","Ava and Max sorts carefully.","Ava and Max sorting carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains\" Jo said.","\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorted","sorts","will sort"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["sorted","will sort","are sorting"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["are sorting","had sorted","will sort"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Only four rocks would leave Jo’s table, but preparing the ______ required more than putting them into a box.","choices":["collection","notebook","label","sample"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Each numbered label needed a matching drawing, measurement, and ______.","choices":["label","sample","lens","description"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Notes that became separated from their ______ would be difficult to use later.","choices":["lens","grain","samples","sample"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Its grains had taught him to ______ a quick identification and to look beyond immediate appearance.","choices":["surface","question","lens","grain"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Ava chose contrasting textures so she could continue comparing her ______ at home.","choices":["descriptions","grain","surface","texture"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"When Jo asked for the collection’s name, Ava suggested \"The ______.\"","choices":["waiting","looking","checking","beginning"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Ava and Max sorts carefully.","Ava and Max sorting carefully.","Ava and Max sort carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Look at the grains, Jo said.\"","\"Look at the grains,\" Jo said.","\"Look at the grains\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Ava and Max checked the rocks. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["sorts","will sort","sorted"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will sort","are sorting","sorted"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the rocks.","choices":["had sorted","will sort","are sorting"],"answer":0,"skill":"Use the past perfect tense"}]}}]};
