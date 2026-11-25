/* Original fiction; F&P letters are instructional targets for teacher review. */
const LEVELS={
  "E": {
    "grade": "F&P E target",
    "titles": [
      "At the park",
      "On the log",
      "A big hoop",
      "At the flag"
    ],
    "sections": [
      {
        "text": [
          "It is a sunny day. Jo has a map on a table.",
          "Sam sees a red cone.",
          "Leila has a big hoop.",
          "Jo has a low log.",
          "Sam can have a go."
        ],
        "mc": [
          {
            "prompt": "What colour is the cone?",
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
              "Leila has a…",
              "big hoop"
            ]
          ],
          "options": [
            "big hoop",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila has a… big hoop"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It is a sunny day. Jo has a map on a table.",
            "Sam sees a {{c0}} cone.",
            "Leila has a big hoop.",
            "Jo has a low {{c1}}.",
            "Sam can have a go."
          ],
          "parts": [
            "It is a sunny day. Jo has a map on a table.\n\nSam sees a {{c0}} cone.\n\nLeila has a big hoop.\n\nJo has a low {{c1}}.\n\nSam can have a go."
          ],
          "columns": [
            "It is a sunny day. Jo has a map on a table. Sam sees a {{c0}} cone.",
            "Leila has a big hoop. Jo has a low {{c1}}. Sam can have a go."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "red",
              "paragraph": 1,
              "prompt": "Sam sees a ______ cone."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "log",
              "paragraph": 3,
              "prompt": "Jo has a low ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "log"
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
          "Sam is on the log.",
          "His leg can wobble.",
          "He can put his arms out.",
          "Sam can get to the end.",
          "They look at the log."
        ],
        "mc": [
          {
            "prompt": "What does Sam put out?",
            "choices": [
              "His arms",
              "His hat"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "His arms"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam is on the…",
              "log"
            ]
          ],
          "options": [
            "log",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam is on the… log"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam is on the {{c0}}.",
            "His leg can wobble.",
            "He can put his arms out.",
            "Sam can get to the {{c1}}.",
            "They look at the log."
          ],
          "parts": [
            "Sam is on the {{c0}}.\n\nHis leg can wobble.\n\nHe can put his arms out.\n\nSam can get to the {{c1}}.\n\nThey look at the log."
          ],
          "columns": [
            "Sam is on the {{c0}}. His leg can wobble.",
            "He can put his arms out. Sam can get to the {{c1}}. They look at the log."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam is on the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 3,
              "prompt": "Sam can get to the ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila has a big hoop.",
          "Sam can duck.",
          "He can step in it.",
          "Then he can help his pal."
        ],
        "mc": [
          {
            "prompt": "What can Sam do?",
            "choices": [
              "Dig",
              "Duck"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "Duck"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam can help his…",
              "pal"
            ]
          ],
          "options": [
            "pal",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam can help his… pal"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila has a {{c0}} hoop.",
            "Sam can duck.",
            "He can step in it.",
            "Then he can help his {{c1}}."
          ],
          "parts": [
            "Leila has a {{c0}} hoop.\n\nSam can duck.\n\nHe can step in it.\n\nThen he can help his {{c1}}."
          ],
          "columns": [
            "Leila has a {{c0}} hoop. Sam can duck.",
            "He can step in it. Then he can help his {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "big",
              "paragraph": 0,
              "prompt": "Leila has a ______ hoop."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "pal",
              "paragraph": 3,
              "prompt": "Then he can help his ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "pal"
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
          "Sam and Leila see the flag.",
          "They can get to it.",
          "Jo has a big grin.",
          "\"We had fun!\" says Sam.",
          "They sort the cones."
        ],
        "mc": [
          {
            "prompt": "Who has a big grin?",
            "choices": [
              "Jo",
              "Sam"
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
              "Sam had…",
              "fun"
            ]
          ],
          "options": [
            "fun",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam had… fun"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam and Leila see the {{c0}}.",
            "They can get to it.",
            "Jo has a big grin.",
            "\"We had {{c1}}!\" says Sam.",
            "They sort the cones."
          ],
          "parts": [
            "Sam and Leila see the {{c0}}.\n\nThey can get to it.\n\nJo has a big grin.\n\n\"We had {{c1}}!\" says Sam.\n\nThey sort the cones."
          ],
          "columns": [
            "Sam and Leila see the {{c0}}. They can get to it.",
            "Jo has a big grin. \"We had {{c1}}!\" says Sam. They sort the cones."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Sam and Leila see the ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "fun",
              "paragraph": 3,
              "prompt": "\"We had ______!\" says Sam."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "fun"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      }
    ],
    "intro": "102 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "F": {
    "grade": "F&P F target",
    "titles": [
      "A new course",
      "Steady steps",
      "A hoop for a friend",
      "Finish together"
    ],
    "sections": [
      {
        "text": [
          "It was sunny, and Jo put the course map on a table.",
          "Sam and Leila went to the park with Jo.",
          "Red cones showed the way around a short course.",
          "There was a low log, a hoop, and a tunnel.",
          "Jo asked them to leave a space and wait for their turn."
        ],
        "mc": [
          {
            "prompt": "What showed the way around the course?",
            "choices": [
              "Blue bags",
              "Tall trees",
              "Red cones"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "Red cones showed the way"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The course had",
              "a low log"
            ],
            [
              "Jo asked them",
              "to wait their turn"
            ]
          ],
          "options": [
            "to wait their turn",
            "a low log"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The course had a low log",
            "Jo asked them to wait their turn"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny, and Jo put the course map on a table.",
            "Sam and Leila went to the park with {{c0}}.",
            "Red cones showed the way around a short course.",
            "There was a low log, a hoop, and a tunnel.",
            "Jo asked them to leave a space and wait for their {{c1}}."
          ],
          "parts": [
            "It was sunny, and Jo put the course map on a table.\n\nSam and Leila went to the park with {{c0}}.\n\nRed cones showed the way around a short course.\n\nThere was a low log, a hoop, and a tunnel.\n\nJo asked them to leave a space and wait for their {{c1}}."
          ],
          "columns": [
            "It was sunny, and Jo put the course map on a table. Sam and Leila went to the park with {{c0}}.",
            "Red cones showed the way around a short course. There was a low log, a hoop, and a tunnel. Jo asked them to leave a space and wait for their {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "Jo",
              "paragraph": 1,
              "prompt": "Sam and Leila went to the park with ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "turn",
              "paragraph": 4,
              "prompt": "Jo asked them to leave a space and wait for their ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "turn"
            },
            {
              "id": "w0",
              "word": "Jo"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped onto the low log.",
          "He hurried, and his foot slipped to the ground.",
          "Jo asked him to try short, slow steps.",
          "Sam held out his arms and got to the other end.",
          "Leila said, \"Look at the log.\""
        ],
        "mc": [
          {
            "prompt": "What helped Sam cross the log?",
            "choices": [
              "Running fast",
              "Short, slow steps",
              "Closing his eyes"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "short, slow steps"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam held out",
              "his arms"
            ],
            [
              "His foot slipped",
              "when he hurried"
            ]
          ],
          "options": [
            "when he hurried",
            "his arms"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam held out his arms",
            "His foot slipped when he hurried"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped onto the low {{c0}}.",
            "He hurried, and his foot slipped to the ground.",
            "Jo asked him to try short, slow steps.",
            "Sam held out his arms and got to the other {{c1}}.",
            "Leila said, \"Look at the log.\""
          ],
          "parts": [
            "Sam stepped onto the low {{c0}}.\n\nHe hurried, and his foot slipped to the ground.\n\nJo asked him to try short, slow steps.\n\nSam held out his arms and got to the other {{c1}}.\n\nLeila said, \"Look at the log.\""
          ],
          "columns": [
            "Sam stepped onto the low {{c0}}. He hurried, and his foot slipped to the ground.",
            "Jo asked him to try short, slow steps. Sam held out his arms and got to the other {{c1}}. Leila said, \"Look at the log.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam stepped onto the low ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 3,
              "prompt": "Sam held out his arms and got to the other ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held up the yellow hoop.",
          "Sam ducked his head and stepped through.",
          "He wanted to run to the tunnel, but Leila was still waiting.",
          "Sam came back and held the hoop for his friend."
        ],
        "mc": [
          {
            "prompt": "Why did Sam come back?",
            "choices": [
              "To hold the hoop for Leila",
              "To move the tunnel",
              "To find his shoes"
            ],
            "answer": 0,
            "skill": "Infer a motive",
            "evidence": "held the hoop for his friend"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila held",
              "the yellow hoop"
            ],
            [
              "Sam ducked",
              "his head"
            ]
          ],
          "options": [
            "his head",
            "the yellow hoop"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila held the yellow hoop",
            "Sam ducked his head"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held up the yellow {{c0}}.",
            "Sam ducked his head and stepped through.",
            "He wanted to run to the tunnel, but Leila was still waiting.",
            "Sam came back and held the hoop for his {{c1}}."
          ],
          "parts": [
            "Leila held up the yellow {{c0}}.\n\nSam ducked his head and stepped through.\n\nHe wanted to run to the tunnel, but Leila was still waiting.\n\nSam came back and held the hoop for his {{c1}}."
          ],
          "columns": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through.",
            "He wanted to run to the tunnel, but Leila was still waiting. Sam came back and held the hoop for his {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held up the yellow ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "friend",
              "paragraph": 3,
              "prompt": "Sam came back and held the hoop for his ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "friend"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila crawled through the short tunnel.",
          "Sam waited at the far end and cheered.",
          "They walked to the yellow flag side by side.",
          "Jo said the best part was how they had helped each other.",
          "After the course, they helped Jo sort the cones."
        ],
        "mc": [
          {
            "prompt": "What did Jo like best?",
            "choices": [
              "They moved the flag.",
              "They ran in the tunnel.",
              "They helped each other."
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "helped each other"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila crawled",
              "through the tunnel"
            ],
            [
              "Sam waited",
              "at the far end"
            ]
          ],
          "options": [
            "at the far end",
            "through the tunnel"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila crawled through the tunnel",
            "Sam waited at the far end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila crawled through the short {{c0}}.",
            "Sam waited at the far end and cheered.",
            "They walked to the yellow flag side by side.",
            "Jo said the best part was how they had helped each {{c1}}.",
            "After the course, they helped Jo sort the cones."
          ],
          "parts": [
            "Leila crawled through the short {{c0}}.\n\nSam waited at the far end and cheered.\n\nThey walked to the yellow flag side by side.\n\nJo said the best part was how they had helped each {{c1}}.\n\nAfter the course, they helped Jo sort the cones."
          ],
          "columns": [
            "Leila crawled through the short {{c0}}. Sam waited at the far end and cheered.",
            "They walked to the yellow flag side by side. Jo said the best part was how they had helped each {{c1}}. After the course, they helped Jo sort the cones."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "Leila crawled through the short ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "other",
              "paragraph": 3,
              "prompt": "Jo said the best part was how they had helped each ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "other"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "171 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "G": {
    "grade": "F&P G target",
    "titles": [
      "A new course",
      "Steady steps",
      "A hoop for a friend",
      "Finish together"
    ],
    "sections": [
      {
        "text": [
          "It was sunny, and Jo put the course map on a table.",
          "Sam and Leila went to the park with Jo. They found a short obstacle course on the grass.",
          "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.",
          "Jo asked them to leave a space and wait for their turn. They would try the course one at a time."
        ],
        "mc": [
          {
            "prompt": "What showed the way around the course?",
            "choices": [
              "Blue bags",
              "Tall trees",
              "Red cones"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "Red cones showed the way"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The course had",
              "a low log"
            ],
            [
              "Jo asked them",
              "to wait their turn"
            ]
          ],
          "options": [
            "to wait their turn",
            "a low log"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The course had a low log",
            "Jo asked them to wait their turn"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It was sunny, and Jo put the course map on a table.",
            "Sam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.",
            "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.",
            "Jo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "parts": [
            "It was sunny, and Jo put the course map on a table.\n\nSam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.\n\nRed cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.\n\nJo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "columns": [
            "It was sunny, and Jo put the course map on a table. Sam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.",
            "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting. Jo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "Jo",
              "paragraph": 1,
              "prompt": "Sam and Leila went to the park with ______. They found a short obstacle course on the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "turn",
              "paragraph": 3,
              "prompt": "Jo asked them to leave a space and wait for their ______. They would try the course one at a time."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "turn"
            },
            {
              "id": "w0",
              "word": "Jo"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped onto the low log and began to hurry. His foot slipped, so he stepped onto the grass.",
          "Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
          "This time, he reached the other end. He waited there while Leila had her turn.",
          "Leila said, \"Look at the log.\""
        ],
        "mc": [
          {
            "prompt": "What helped Sam cross the log?",
            "choices": [
              "Running fast",
              "Short, slow steps",
              "Closing his eyes"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "short, slow steps"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam held out",
              "his arms"
            ],
            [
              "His foot slipped",
              "when he hurried"
            ]
          ],
          "options": [
            "when he hurried",
            "his arms"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam held out his arms",
            "His foot slipped when he hurried"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass.",
            "Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
            "This time, he reached the other {{c1}}. He waited there while Leila had her turn.",
            "Leila said, \"Look at the log.\""
          ],
          "parts": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass.\n\nJo asked him to try again with short, slow steps. Sam held out his arms to help him balance.\n\nThis time, he reached the other {{c1}}. He waited there while Leila had her turn.\n\nLeila said, \"Look at the log.\""
          ],
          "columns": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass. Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
            "This time, he reached the other {{c1}}. He waited there while Leila had her turn. Leila said, \"Look at the log.\""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam stepped onto the low ______ and began to hurry. His foot slipped, so he stepped onto the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 2,
              "prompt": "This time, he reached the other ______. He waited there while Leila had her turn."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held up the yellow hoop. Sam ducked his head and stepped through the middle.",
          "He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
          "Sam came back and held the hoop for his friend. Leila smiled as she stepped through."
        ],
        "mc": [
          {
            "prompt": "Why did Sam come back?",
            "choices": [
              "To hold the hoop for Leila",
              "To move the tunnel",
              "To find his shoes"
            ],
            "answer": 0,
            "skill": "Infer a motive",
            "evidence": "held the hoop for his friend"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila held",
              "the yellow hoop"
            ],
            [
              "Sam ducked",
              "his head"
            ]
          ],
          "options": [
            "his head",
            "the yellow hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila held the yellow hoop",
            "Sam ducked his head"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle.",
            "He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
            "Sam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through."
          ],
          "parts": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle.\n\nHe turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.\n\nSam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through."
          ],
          "columns": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle. He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
            "Sam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held up the yellow ______. Sam ducked his head and stepped through the middle."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "friend",
              "paragraph": 2,
              "prompt": "Sam came back and held the hoop for his ______. Leila smiled as she stepped through."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "friend"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila crawled through the short tunnel. Sam waited at the far end and cheered when she came out.",
          "Then the children walked to the yellow flag side by side. They were pleased to finish together.",
          "Jo said the best part was how they had helped each other. Sam and Leila wanted to try the course again.",
          "After the course, they helped Jo sort the cones."
        ],
        "mc": [
          {
            "prompt": "What did Jo like best?",
            "choices": [
              "They moved the flag.",
              "They ran in the tunnel.",
              "They helped each other."
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "helped each other"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila crawled",
              "through the tunnel"
            ],
            [
              "Sam waited",
              "at the far end"
            ]
          ],
          "options": [
            "at the far end",
            "through the tunnel"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila crawled through the tunnel",
            "Sam waited at the far end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out.",
            "Then the children walked to the yellow flag side by side. They were pleased to finish together.",
            "Jo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again.",
            "After the course, they helped Jo sort the cones."
          ],
          "parts": [
            "Leila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out.\n\nThen the children walked to the yellow flag side by side. They were pleased to finish together.\n\nJo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again.\n\nAfter the course, they helped Jo sort the cones."
          ],
          "columns": [
            "Leila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out. Then the children walked to the yellow flag side by side. They were pleased to finish together.",
            "Jo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again. After the course, they helped Jo sort the cones."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "Leila crawled through the short ______. Sam waited at the far end and cheered when she came out."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "other",
              "paragraph": 2,
              "prompt": "Jo said the best part was how they had helped each ______. Sam and Leila wanted to try the course again."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "other"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "246 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "L": {
    "grade": "F&P L target",
    "titles": [
      "The course on the map",
      "Slow feet, steady arms",
      "The hoop problem",
      "A finish for two"
    ],
    "sections": [
      {
        "text": [
          "Sam traced the obstacle course on Jo’s map. Red cones led to a low log, a hoop, a short tunnel, and a yellow finish flag.",
          "He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.",
          "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe space between each person.",
          "Sam nodded, but his feet kept making little running steps. Leila pointed to the first obstacle. \"Let’s learn that one first,\" she said."
        ],
        "mc": [
          {
            "prompt": "How do the children’s plans differ?",
            "choices": [
              "Both want to skip the log.",
              "Leila wants a timed race; Sam wants to wait.",
              "Both want to move the flag.",
              "Sam wants speed; Leila wants to learn each obstacle."
            ],
            "answer": 3,
            "skill": "Compare viewpoints",
            "evidence": "finish before Leila"
          },
          {
            "prompt": "Why does Jo ask for space between people?",
            "choices": [
              "So the course looks longer",
              "So the cones can fall over",
              "So each person has room to practise safely",
              "So no one can see the map"
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "leave a safe space"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "marked the route"
            ],
            [
              "The yellow flag",
              "marked the finish"
            ]
          ],
          "options": [
            "marked the finish",
            "marked the route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones marked the route",
            "The yellow flag marked the finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag.",
            "He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.",
            "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person.",
            "Sam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "parts": [
            "Sam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag.\n\nHe planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.\n\nJo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person.\n\nSam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "columns": [
            "Sam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag. He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.",
            "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person. Sam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "cones",
              "paragraph": 0,
              "prompt": "Sam traced the obstacle course on Jo’s map. Red ______ led to a low log, a hoop, a short tunnel, and a yellow finish flag."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "space",
              "paragraph": 2,
              "prompt": "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe ______ between each person."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "obstacle",
              "paragraph": 3,
              "prompt": "Sam nodded, but his feet kept making little running steps. Leila pointed to the first ______. \"Let’s learn that one first,\" she said."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "obstacle"
            },
            {
              "id": "w1",
              "word": "space"
            },
            {
              "id": "w0",
              "word": "cones"
            }
          ]
        }
      },
      {
        "text": [
          "Sam took three quick steps along the low log. His foot slipped, and he stepped onto the grass beside it.",
          "Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.",
          "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his arms to help himself balance.",
          "This time he reached the other end. The log had not become easier, but Sam had changed his approach. He waited while Leila took her turn."
        ],
        "mc": [
          {
            "prompt": "What changes on Sam’s second attempt?",
            "choices": [
              "Leila removes the flag.",
              "The log becomes shorter.",
              "He changes his way of moving and looking.",
              "Jo makes the log wider."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "took shorter steps"
          },
          {
            "prompt": "What does “approach” mean here?",
            "choices": [
              "A sound in the park",
              "Way of doing something",
              "A place to sit",
              "A bright colour"
            ],
            "answer": 1,
            "skill": "Use vocabulary in context",
            "evidence": "changed his approach"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Looking along the log",
              "helped Sam focus"
            ],
            [
              "Spreading his arms",
              "helped him balance"
            ]
          ],
          "options": [
            "helped him balance",
            "helped Sam focus"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Looking along the log helped Sam focus",
            "Spreading his arms helped him balance"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it.",
            "Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.",
            "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance.",
            "This time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "parts": [
            "Sam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it.\n\nLeila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.\n\nWith Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance.\n\nThis time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "columns": [
            "Sam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it. Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.",
            "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance. This time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam took three quick steps along the low ______. His foot slipped, and he stepped onto the grass beside it."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "arms",
              "paragraph": 2,
              "prompt": "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his ______ to help himself balance."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "approach",
              "paragraph": 3,
              "prompt": "This time he reached the other end. The log had not become easier, but Sam had changed his ______. He waited while Leila took her turn."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "approach"
            },
            {
              "id": "w1",
              "word": "arms"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held the hoop while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.",
          "He returned, but held the hoop too high. Leila could not step through without catching her foot on the rim.",
          "\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.",
          "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant listening."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask Sam to lower the hoop?",
            "choices": [
              "Jo has asked her to stop.",
              "The rim is too high for her to step over.",
              "She wants to hide the tunnel.",
              "The hoop has a loose wheel."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "held the hoop too high"
          },
          {
            "prompt": "What does Sam learn about helping?",
            "choices": [
              "He needs to listen to what his partner needs.",
              "He should always choose the fastest way.",
              "He must do every obstacle for Leila.",
              "He should avoid speaking."
            ],
            "answer": 0,
            "skill": "Explain a lesson",
            "evidence": "it also meant listening"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam returned",
              "so Leila could have a turn"
            ],
            [
              "Leila asked",
              "for the hoop to be lower"
            ]
          ],
          "options": [
            "for the hoop to be lower",
            "so Leila could have a turn"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam returned so Leila could have a turn",
            "Leila asked for the hoop to be lower"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.",
            "He returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim.",
            "\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.",
            "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "parts": [
            "Leila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.\n\nHe returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim.\n\n\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.\n\nAfter Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "columns": [
            "Leila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn. He returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim.",
            "\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands. After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held the ______ while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "foot",
              "paragraph": 1,
              "prompt": "He returned, but held the hoop too high. Leila could not step through without catching her ______ on the rim."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "listening",
              "paragraph": 3,
              "prompt": "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "listening"
            },
            {
              "id": "w1",
              "word": "foot"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila crawled through the tunnel, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.",
          "They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.",
          "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to wait. They laughed because both answers were true.",
          "On his map, Sam drew two small figures beside the finish flag. Next time, his plan would make room for both of them."
        ],
        "mc": [
          {
            "prompt": "Why is Sam’s answer about waiting important?",
            "choices": [
              "It shows that his challenge was also about teamwork.",
              "It proves the tunnel was broken.",
              "It means he did not try the log.",
              "It tells us he won a timed race."
            ],
            "answer": 0,
            "skill": "Explain a deeper meaning",
            "evidence": "Sam chose learning to wait"
          },
          {
            "prompt": "What does Sam’s drawing show?",
            "choices": [
              "He wants a longer map.",
              "He has lost the course.",
              "He wants to remove the flag.",
              "He now includes his partner in his goal."
            ],
            "answer": 3,
            "skill": "Infer from an action",
            "evidence": "make room for both of them"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila’s hardest part",
              "was the hoop"
            ],
            [
              "Sam’s hardest part",
              "was learning to wait"
            ]
          ],
          "options": [
            "was learning to wait",
            "was the hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s hardest part was the hoop",
            "Sam’s hardest part was learning to wait"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.",
            "They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.",
            "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true.",
            "On his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "parts": [
            "Leila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.\n\nThey walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.\n\nJo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true.\n\nOn his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "columns": [
            "Leila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch. They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.",
            "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true. On his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "Leila crawled through the ______, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wait",
              "paragraph": 2,
              "prompt": "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to ______. They laughed because both answers were true."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 3,
              "prompt": "On his map, Sam drew two small figures beside the finish ______. Next time, his plan would make room for both of them."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "wait"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "354 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "M": {
    "grade": "F&P M target",
    "titles": [
      "The course on the map",
      "Slow feet, steady arms",
      "The hoop problem",
      "A finish for two"
    ],
    "sections": [
      {
        "text": [
          "Sam studied the red cones on Jo’s course map and planned the quickest way between them. Leila wanted to examine the low log, hoop, and tunnel before she began.",
          "Jo explained that they would not be timed. The aim was to practise the obstacles and help a partner reach the yellow finish flag.",
          "They would leave a safe space for each person to try. Leila asked how they should take turns at the hoop.",
          "Sam said he understood, but was already shifting from one foot to the other. His head had heard the plan; his feet seemed to be preparing for a race."
        ],
        "mc": [
          {
            "prompt": "How do the children’s plans differ?",
            "choices": [
              "Both want to skip the log.",
              "Leila wants a timed race; Sam wants to wait.",
              "Both want to move the flag.",
              "Sam wants speed; Leila wants to learn each obstacle."
            ],
            "answer": 3,
            "skill": "Compare viewpoints",
            "evidence": "planned the quickest way"
          },
          {
            "prompt": "Why does Jo ask for space between people?",
            "choices": [
              "So the course looks longer",
              "So the cones can fall over",
              "So each person has room to practise safely",
              "So no one can see the map"
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "leave a safe space"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "marked the route"
            ],
            [
              "The yellow flag",
              "marked the finish"
            ]
          ],
          "options": [
            "marked the finish",
            "marked the route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones marked the route",
            "The yellow flag marked the finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam studied the red cones on Jo’s course map and planned the quickest way between them. Leila wanted to examine the low {{c0}}, hoop, and tunnel before she began.",
            "Jo explained that they would not be timed. The aim was to practise the obstacles and help a partner reach the yellow finish {{c1}}.",
            "They would leave a safe space for each person to try. Leila asked how they should take turns at the hoop.",
            "Sam said he understood, but was already shifting from one foot to the other. His head had heard the plan; his feet seemed to be preparing for a {{c2}}."
          ],
          "parts": [
            "Sam studied the red cones on Jo’s course map and planned the quickest way between them. Leila wanted to examine the low {{c0}}, hoop, and tunnel before she began.\n\nJo explained that they would not be timed. The aim was to practise the obstacles and help a partner reach the yellow finish {{c1}}.\n\nThey would leave a safe space for each person to try. Leila asked how they should take turns at the hoop.\n\nSam said he understood, but was already shifting from one foot to the other. His head had heard the plan; his feet seemed to be preparing for a {{c2}}."
          ],
          "columns": [
            "Sam studied the red cones on Jo’s course map and planned the quickest way between them. Leila wanted to examine the low {{c0}}, hoop, and tunnel before she began. Jo explained that they would not be timed. The aim was to practise the obstacles and help a partner reach the yellow finish {{c1}}.",
            "They would leave a safe space for each person to try. Leila asked how they should take turns at the hoop. Sam said he understood, but was already shifting from one foot to the other. His head had heard the plan; his feet seemed to be preparing for a {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam studied the red cones on Jo’s course map and planned the quickest way between them. Leila wanted to examine the low ______, hoop, and tunnel before she began."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "flag",
              "paragraph": 1,
              "prompt": "Jo explained that they would not be timed. The aim was to practise the obstacles and help a partner reach the yellow finish ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "race",
              "paragraph": 3,
              "prompt": "Sam said he understood, but was already shifting from one foot to the other. His head had heard the plan; his feet seemed to be preparing for a ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "race"
            },
            {
              "id": "w1",
              "word": "flag"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Sam hurried onto the log and looked towards the distant flag. His foot slipped sideways, and he stepped onto the grass.",
          "Leila suggested watching the next part of the log instead of watching the finish. Jo stood nearby while he tried again.",
          "This time Sam spread his arms, placed each foot carefully, and took shorter steps. He reached the far end without rushing.",
          "The obstacle itself had not changed. Changing his approach had made the difference. Sam waited for Leila to cross, noticing that steady movements could sometimes achieve more than speed."
        ],
        "mc": [
          {
            "prompt": "What changes on Sam’s second attempt?",
            "choices": [
              "Leila removes the flag.",
              "The log becomes shorter.",
              "He changes his way of moving and looking.",
              "Jo makes the log wider."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "took shorter steps"
          },
          {
            "prompt": "What does “approach” mean here?",
            "choices": [
              "A sound in the park",
              "Way of doing something",
              "A place to sit",
              "A bright colour"
            ],
            "answer": 1,
            "skill": "Use vocabulary in context",
            "evidence": "Changing his approach"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Looking along the log",
              "helped Sam focus"
            ],
            [
              "Spreading his arms",
              "helped him balance"
            ]
          ],
          "options": [
            "helped him balance",
            "helped Sam focus"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Looking along the log helped Sam focus",
            "Spreading his arms helped him balance"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam hurried onto the log and looked towards the distant {{c0}}. His foot slipped sideways, and he stepped onto the grass.",
            "Leila suggested watching the next part of the log instead of watching the finish. Jo stood nearby while he tried again.",
            "This time Sam spread his arms, placed each foot carefully, and took shorter {{c1}}. He reached the far end without rushing.",
            "The obstacle itself had not changed. Changing his approach had made the difference. Sam waited for Leila to cross, noticing that steady movements could sometimes achieve more than {{c2}}."
          ],
          "parts": [
            "Sam hurried onto the log and looked towards the distant {{c0}}. His foot slipped sideways, and he stepped onto the grass.\n\nLeila suggested watching the next part of the log instead of watching the finish. Jo stood nearby while he tried again.\n\nThis time Sam spread his arms, placed each foot carefully, and took shorter {{c1}}. He reached the far end without rushing.\n\nThe obstacle itself had not changed. Changing his approach had made the difference. Sam waited for Leila to cross, noticing that steady movements could sometimes achieve more than {{c2}}."
          ],
          "columns": [
            "Sam hurried onto the log and looked towards the distant {{c0}}. His foot slipped sideways, and he stepped onto the grass. Leila suggested watching the next part of the log instead of watching the finish. Jo stood nearby while he tried again.",
            "This time Sam spread his arms, placed each foot carefully, and took shorter {{c1}}. He reached the far end without rushing. The obstacle itself had not changed. Changing his approach had made the difference. Sam waited for Leila to cross, noticing that steady movements could sometimes achieve more than {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Sam hurried onto the log and looked towards the distant ______. His foot slipped sideways, and he stepped onto the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "steps",
              "paragraph": 2,
              "prompt": "This time Sam spread his arms, placed each foot carefully, and took shorter ______. He reached the far end without rushing."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "speed",
              "paragraph": 3,
              "prompt": "The obstacle itself had not changed. Changing his approach had made the difference. Sam waited for Leila to cross, noticing that steady movements could sometimes achieve more than ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "speed"
            },
            {
              "id": "w1",
              "word": "steps"
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
          "Leila held the hoop while Sam stepped through. He turned towards the tunnel, then stopped when he remembered that she was still waiting.",
          "Sam returned and held it at his own stepping height. Leila caught her foot on the lower rim and asked him to move it down.",
          "He lowered the hoop and held it with both hands until she was through. It was a small adjustment, but it changed what Leila could do.",
          "Sam realised that offering help and giving useful help were not always the same. He needed to listen to what his partner needed, rather than guess that everything which worked for him would work for her."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask Sam to lower the hoop?",
            "choices": [
              "Jo has asked her to stop.",
              "The rim is too high for her to step over.",
              "She wants to hide the tunnel.",
              "The hoop has a loose wheel."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "asked him to move it down"
          },
          {
            "prompt": "What does Sam learn about helping?",
            "choices": [
              "He needs to listen to what his partner needs.",
              "He should always choose the fastest way.",
              "He must do every obstacle for Leila.",
              "He should avoid speaking."
            ],
            "answer": 0,
            "skill": "Explain a lesson",
            "evidence": "listen to what his partner needed"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam returned",
              "so Leila could have a turn"
            ],
            [
              "Leila asked",
              "for the hoop to be lower"
            ]
          ],
          "options": [
            "for the hoop to be lower",
            "so Leila could have a turn"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam returned so Leila could have a turn",
            "Leila asked for the hoop to be lower"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held the {{c0}} while Sam stepped through. He turned towards the tunnel, then stopped when he remembered that she was still waiting.",
            "Sam returned and held it at his own stepping height. Leila caught her foot on the lower rim and asked him to move it {{c1}}.",
            "He lowered the hoop and held it with both hands until she was through. It was a small adjustment, but it changed what Leila could do.",
            "Sam realised that offering help and giving useful help were not always the same. He needed to listen to what his partner {{c2}}, rather than guess that everything which worked for him would work for her."
          ],
          "parts": [
            "Leila held the {{c0}} while Sam stepped through. He turned towards the tunnel, then stopped when he remembered that she was still waiting.\n\nSam returned and held it at his own stepping height. Leila caught her foot on the lower rim and asked him to move it {{c1}}.\n\nHe lowered the hoop and held it with both hands until she was through. It was a small adjustment, but it changed what Leila could do.\n\nSam realised that offering help and giving useful help were not always the same. He needed to listen to what his partner {{c2}}, rather than guess that everything which worked for him would work for her."
          ],
          "columns": [
            "Leila held the {{c0}} while Sam stepped through. He turned towards the tunnel, then stopped when he remembered that she was still waiting. Sam returned and held it at his own stepping height. Leila caught her foot on the lower rim and asked him to move it {{c1}}.",
            "He lowered the hoop and held it with both hands until she was through. It was a small adjustment, but it changed what Leila could do. Sam realised that offering help and giving useful help were not always the same. He needed to listen to what his partner {{c2}}, rather than guess that everything which worked for him would work for her."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held the ______ while Sam stepped through. He turned towards the tunnel, then stopped when he remembered that she was still waiting."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "down",
              "paragraph": 1,
              "prompt": "Sam returned and held it at his own stepping height. Leila caught her foot on the lower rim and asked him to move it ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "needed",
              "paragraph": 3,
              "prompt": "Sam realised that offering help and giving useful help were not always the same. He needed to listen to what his partner ______, rather than guess that everything which worked for him would work for her."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "needed"
            },
            {
              "id": "w1",
              "word": "down"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila crawled through the short tunnel. Sam waited where she could see him and asked whether she was ready for the final stretch.",
          "They followed the last cones and touched the yellow flag together. Sam had not remembered to count how many seconds they had taken.",
          "When Jo asked about their hardest part, Leila chose the hoop. Sam thought about the log, but decided that learning to wait had been harder.",
          "He drew two figures beside the flag on his map. A good plan, he discovered, included both people all the way to the finish. Next time he would begin with that idea instead of adding it at the end."
        ],
        "mc": [
          {
            "prompt": "Why is Sam’s answer about waiting important?",
            "choices": [
              "It shows that his challenge was also about teamwork.",
              "It proves the tunnel was broken.",
              "It means he did not try the log.",
              "It tells us he won a timed race."
            ],
            "answer": 0,
            "skill": "Explain a deeper meaning",
            "evidence": "learning to wait had been harder"
          },
          {
            "prompt": "What does Sam’s drawing show?",
            "choices": [
              "He wants a longer map.",
              "He has lost the course.",
              "He wants to remove the flag.",
              "He now includes his partner in his goal."
            ],
            "answer": 3,
            "skill": "Infer from an action",
            "evidence": "included both people"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila’s hardest part",
              "was the hoop"
            ],
            [
              "Sam’s hardest part",
              "was learning to wait"
            ]
          ],
          "options": [
            "was learning to wait",
            "was the hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s hardest part was the hoop",
            "Sam’s hardest part was learning to wait"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila crawled through the short {{c0}}. Sam waited where she could see him and asked whether she was ready for the final stretch.",
            "They followed the last cones and touched the yellow flag together. Sam had not remembered to count how many seconds they had taken.",
            "When Jo asked about their hardest part, Leila chose the {{c1}}. Sam thought about the log, but decided that learning to wait had been harder.",
            "He drew two figures beside the flag on his map. A good plan, he discovered, included both people all the way to the {{c2}}. Next time he would begin with that idea instead of adding it at the end."
          ],
          "parts": [
            "Leila crawled through the short {{c0}}. Sam waited where she could see him and asked whether she was ready for the final stretch.\n\nThey followed the last cones and touched the yellow flag together. Sam had not remembered to count how many seconds they had taken.\n\nWhen Jo asked about their hardest part, Leila chose the {{c1}}. Sam thought about the log, but decided that learning to wait had been harder.\n\nHe drew two figures beside the flag on his map. A good plan, he discovered, included both people all the way to the {{c2}}. Next time he would begin with that idea instead of adding it at the end."
          ],
          "columns": [
            "Leila crawled through the short {{c0}}. Sam waited where she could see him and asked whether she was ready for the final stretch. They followed the last cones and touched the yellow flag together. Sam had not remembered to count how many seconds they had taken.",
            "When Jo asked about their hardest part, Leila chose the {{c1}}. Sam thought about the log, but decided that learning to wait had been harder. He drew two figures beside the flag on his map. A good plan, he discovered, included both people all the way to the {{c2}}. Next time he would begin with that idea instead of adding it at the end."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "Leila crawled through the short ______. Sam waited where she could see him and asked whether she was ready for the final stretch."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "hoop",
              "paragraph": 2,
              "prompt": "When Jo asked about their hardest part, Leila chose the ______. Sam thought about the log, but decided that learning to wait had been harder."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "finish",
              "paragraph": 3,
              "prompt": "He drew two figures beside the flag on his map. A good plan, he discovered, included both people all the way to the ______. Next time he would begin with that idea instead of adding it at the end."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "finish"
            },
            {
              "id": "w1",
              "word": "hoop"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "415 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "N": {
    "grade": "F&P N target",
    "titles": [
      "An invisible stopwatch",
      "A different kind of balance",
      "Holding is not always helping",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "No stopwatch was visible, but Sam seemed to hear one ticking. He calculated how quickly he could cross the log and reach the yellow flag.",
          "Leila read the course card. She wanted to know how the obstacles worked and how they could take turns holding the hoop.",
          "Jo described a cooperative challenge, with red cones marking the route and a shared finish. There would be no first or second place.",
          "Sam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared beginning. The invisible stopwatch had not yet stopped in Sam’s head."
        ],
        "mc": [
          {
            "prompt": "What is the “invisible stopwatch”?",
            "choices": [
              "A hidden device on Jo’s clipboard",
              "A clock inside the hoop",
              "A rule printed on the course card",
              "Sam’s private focus on speed and winning"
            ],
            "answer": 3,
            "skill": "Interpret figurative language",
            "evidence": "seemed to hear one ticking"
          },
          {
            "prompt": "What contrast is established between Sam and Leila?",
            "choices": [
              "He wants to stop while she wants to race.",
              "He has practised while she has never visited a park.",
              "He considers speed while she considers how to participate.",
              "He likes maps while she refuses to read."
            ],
            "answer": 2,
            "skill": "Compare viewpoints",
            "evidence": "how they could take turns"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s calculations",
              "focused on gaining seconds"
            ],
            [
              "Leila’s questions",
              "considered practical details"
            ],
            [
              "Jo’s challenge",
              "required cooperation"
            ]
          ],
          "options": [
            "required cooperation",
            "considered practical details",
            "focused on gaining seconds"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s calculations focused on gaining seconds",
            "Leila’s questions considered practical details",
            "Jo’s challenge required cooperation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "No stopwatch was visible, but Sam seemed to hear one ticking. He calculated how quickly he could cross the log and reach the yellow {{c0}}.",
            "Leila read the course card. She wanted to know how the obstacles worked and how they could take turns holding the {{c1}}.",
            "Jo described a cooperative challenge, with red cones marking the route and a shared finish. There would be no first or second place.",
            "Sam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared {{c2}}. The invisible stopwatch had not yet stopped in Sam’s {{c3}}."
          ],
          "parts": [
            "No stopwatch was visible, but Sam seemed to hear one ticking. He calculated how quickly he could cross the log and reach the yellow {{c0}}.\n\nLeila read the course card. She wanted to know how the obstacles worked and how they could take turns holding the {{c1}}.\n\nJo described a cooperative challenge, with red cones marking the route and a shared finish. There would be no first or second place.\n\nSam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared {{c2}}. The invisible stopwatch had not yet stopped in Sam’s {{c3}}."
          ],
          "columns": [
            "No stopwatch was visible, but Sam seemed to hear one ticking. He calculated how quickly he could cross the log and reach the yellow {{c0}}. Leila read the course card. She wanted to know how the obstacles worked and how they could take turns holding the {{c1}}.",
            "Jo described a cooperative challenge, with red cones marking the route and a shared finish. There would be no first or second place. Sam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared {{c2}}. The invisible stopwatch had not yet stopped in Sam’s {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "No stopwatch was visible, but Sam seemed to hear one ticking. He calculated how quickly he could cross the log and reach the yellow ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "hoop",
              "paragraph": 1,
              "prompt": "Leila read the course card. She wanted to know how the obstacles worked and how they could take turns holding the ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "beginning",
              "paragraph": 3,
              "prompt": "Sam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared ______. The invisible stopwatch had not yet stopped in Sam’s head."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "head",
              "paragraph": 3,
              "prompt": "Sam agreed while stepping towards the start. He understood the words, but his private plan still involved being ahead. Leila carried the hoop after him, wondering whether a shared finish also required a shared beginning. The invisible stopwatch had not yet stopped in Sam’s ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "head"
            },
            {
              "id": "w2",
              "word": "beginning"
            },
            {
              "id": "w1",
              "word": "hoop"
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
          "Sam’s first attempt on the log ended quickly. Looking past the wood towards the flag, he placed a foot carelessly and stepped onto the grass.",
          "When Leila suggested looking at his next step, he almost told her that he already knew how to walk. Accepting advice felt harder than he had expected.",
          "He tried again with shorter steps and his arms spread. This time he noticed the uneven surface and crossed steadily while Jo stayed nearby.",
          "Leila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her steps. The course was beginning to test more than his balance."
        ],
        "mc": [
          {
            "prompt": "Why does Sam nearly reject Leila’s advice?",
            "choices": [
              "He has been asked to leave.",
              "He thinks she is describing a different course.",
              "He feels defensive about needing help.",
              "He cannot hear her over a motor."
            ],
            "answer": 2,
            "skill": "Infer an emotion",
            "evidence": "Accepting advice felt harder"
          },
          {
            "prompt": "What does Sam find harder than balancing?",
            "choices": [
              "Walking on the grass",
              "Giving up his imagined lead to wait for Leila",
              "Spreading his arms",
              "Finding the yellow flag"
            ],
            "answer": 1,
            "skill": "Explain an internal conflict",
            "evidence": "giving up the lead he had imagined"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "challenged Sam’s priorities"
            ]
          ],
          "options": [
            "challenged Sam’s priorities",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log challenged Sam’s priorities"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam’s first attempt on the {{c0}} ended quickly. Looking past the wood towards the flag, he placed a foot carelessly and stepped onto the grass.",
            "When Leila suggested looking at his next step, he almost told her that he already knew how to walk. Accepting advice felt harder than he had expected.",
            "He tried again with shorter steps and his arms spread. This time he noticed the uneven {{c1}} and crossed steadily while Jo stayed nearby.",
            "Leila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her {{c2}}. The course was beginning to test more than his {{c3}}."
          ],
          "parts": [
            "Sam’s first attempt on the {{c0}} ended quickly. Looking past the wood towards the flag, he placed a foot carelessly and stepped onto the grass.\n\nWhen Leila suggested looking at his next step, he almost told her that he already knew how to walk. Accepting advice felt harder than he had expected.\n\nHe tried again with shorter steps and his arms spread. This time he noticed the uneven {{c1}} and crossed steadily while Jo stayed nearby.\n\nLeila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her {{c2}}. The course was beginning to test more than his {{c3}}."
          ],
          "columns": [
            "Sam’s first attempt on the {{c0}} ended quickly. Looking past the wood towards the flag, he placed a foot carelessly and stepped onto the grass. When Leila suggested looking at his next step, he almost told her that he already knew how to walk. Accepting advice felt harder than he had expected.",
            "He tried again with shorter steps and his arms spread. This time he noticed the uneven {{c1}} and crossed steadily while Jo stayed nearby. Leila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her {{c2}}. The course was beginning to test more than his {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam’s first attempt on the ______ ended quickly. Looking past the wood towards the flag, he placed a foot carelessly and stepped onto the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "surface",
              "paragraph": 2,
              "prompt": "He tried again with shorter steps and his arms spread. This time he noticed the uneven ______ and crossed steadily while Jo stayed nearby."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "steps",
              "paragraph": 3,
              "prompt": "Leila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her ______. The course was beginning to test more than his balance."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "balance",
              "paragraph": 3,
              "prompt": "Leila waited for his signal before starting. Sam remained beside the log to watch her. Waiting meant giving up the lead he had imagined, but it also let him see the care behind each of her steps. The course was beginning to test more than his ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "balance"
            },
            {
              "id": "w2",
              "word": "steps"
            },
            {
              "id": "w1",
              "word": "surface"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "After stepping through Leila’s hoop, Sam turned towards the tunnel. Her quiet reminder brought him back to offer her a turn.",
          "He held it exactly where she had held it for him. The lower rim caught her foot, and she asked him to move it down.",
          "At first, Sam felt irritated: he was doing the same thing, wasn’t he? Then he noticed that Leila was shorter. The same height created a different problem for her.",
          "Sam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same action. He waited for her signal before they moved on."
        ],
        "mc": [
          {
            "prompt": "Why does the same hoop position not work for Leila?",
            "choices": [
              "Sam is standing inside the tunnel.",
              "She is shorter and needs a lower rim.",
              "She is carrying a heavy bag.",
              "The hoop changes shape."
            ],
            "answer": 1,
            "skill": "Use explicit evidence",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Which idea does Sam begin to understand?",
            "choices": [
              "Help should respond to another person’s needs.",
              "Fairness always means doing exactly the same thing.",
              "Only taller people can hold a hoop.",
              "It is better not to ask questions."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "Listening had made his help useful"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After stepping through Leila’s {{c0}}, Sam turned towards the tunnel. Her quiet reminder brought him back to offer her a turn.",
            "He held it exactly where she had held it for him. The lower rim caught her foot, and she asked him to move it down.",
            "At first, Sam felt irritated: he was doing the same thing, wasn’t he? Then he noticed that Leila was shorter. The same height created a different {{c1}} for her.",
            "Sam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same {{c2}}. He waited for her {{c3}} before they moved on."
          ],
          "parts": [
            "After stepping through Leila’s {{c0}}, Sam turned towards the tunnel. Her quiet reminder brought him back to offer her a turn.\n\nHe held it exactly where she had held it for him. The lower rim caught her foot, and she asked him to move it down.\n\nAt first, Sam felt irritated: he was doing the same thing, wasn’t he? Then he noticed that Leila was shorter. The same height created a different {{c1}} for her.\n\nSam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same {{c2}}. He waited for her {{c3}} before they moved on."
          ],
          "columns": [
            "After stepping through Leila’s {{c0}}, Sam turned towards the tunnel. Her quiet reminder brought him back to offer her a turn. He held it exactly where she had held it for him. The lower rim caught her foot, and she asked him to move it down.",
            "At first, Sam felt irritated: he was doing the same thing, wasn’t he? Then he noticed that Leila was shorter. The same height created a different {{c1}} for her. Sam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same {{c2}}. He waited for her {{c3}} before they moved on."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "After stepping through Leila’s ______, Sam turned towards the tunnel. Her quiet reminder brought him back to offer her a turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "problem",
              "paragraph": 2,
              "prompt": "At first, Sam felt irritated: he was doing the same thing, wasn’t he? Then he noticed that Leila was shorter. The same height created a different ______ for her."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "action",
              "paragraph": 3,
              "prompt": "Sam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same ______. He waited for her signal before they moved on."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 3,
              "prompt": "Sam lowered the hoop and steadied it with both hands. Leila crossed easily. Listening had made his help useful. Treating a partner fairly, he realised, might require changing what he did rather than simply repeating the same action. He waited for her ______ before they moved on."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "action"
            },
            {
              "id": "w1",
              "word": "problem"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Sam waited at the tunnel’s far end until Leila emerged. They walked the last stretch together and touched the yellow flag at the same time.",
          "Jo asked which obstacle had been hardest. Leila chose the hoop. Sam said his hardest part had been learning not to turn the activity into a race.",
          "The time box on Jo’s clipboard stayed empty. Below it she wrote the changes the children had made: slower steps, a lower hoop, and time to listen.",
          "Sam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the flag, and neither needed to be in front."
        ],
        "mc": [
          {
            "prompt": "Why does the empty time box matter?",
            "choices": [
              "It emphasises progress that cannot be described by speed alone.",
              "It shows that Jo forgot the whole activity.",
              "It proves that the children did not finish.",
              "It means the course will be cancelled."
            ],
            "answer": 0,
            "skill": "Interpret a significant detail",
            "evidence": "It no longer seemed to be missing anything"
          },
          {
            "prompt": "How has Sam changed by the end?",
            "choices": [
              "He believes he should do the course alone.",
              "He thinks Leila should always follow him.",
              "He decides that practice cannot help.",
              "He values listening and shared progress as well as finishing."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "time to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "represented a shared finish"
            ]
          ],
          "options": [
            "represented a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures represented a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam waited at the tunnel’s far end until Leila {{c0}}. They walked the last stretch together and touched the yellow flag at the same time.",
            "Jo asked which obstacle had been hardest. Leila chose the hoop. Sam said his hardest part had been learning not to turn the activity into a {{c1}}.",
            "The time box on Jo’s clipboard stayed empty. Below it she wrote the changes the children had made: slower steps, a lower hoop, and time to listen.",
            "Sam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the {{c2}}, and neither needed to be in {{c3}}."
          ],
          "parts": [
            "Sam waited at the tunnel’s far end until Leila {{c0}}. They walked the last stretch together and touched the yellow flag at the same time.\n\nJo asked which obstacle had been hardest. Leila chose the hoop. Sam said his hardest part had been learning not to turn the activity into a {{c1}}.\n\nThe time box on Jo’s clipboard stayed empty. Below it she wrote the changes the children had made: slower steps, a lower hoop, and time to listen.\n\nSam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the {{c2}}, and neither needed to be in {{c3}}."
          ],
          "columns": [
            "Sam waited at the tunnel’s far end until Leila {{c0}}. They walked the last stretch together and touched the yellow flag at the same time. Jo asked which obstacle had been hardest. Leila chose the hoop. Sam said his hardest part had been learning not to turn the activity into a {{c1}}.",
            "The time box on Jo’s clipboard stayed empty. Below it she wrote the changes the children had made: slower steps, a lower hoop, and time to listen. Sam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the {{c2}}, and neither needed to be in {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "emerged",
              "paragraph": 0,
              "prompt": "Sam waited at the tunnel’s far end until Leila ______. They walked the last stretch together and touched the yellow flag at the same time."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 1,
              "prompt": "Jo asked which obstacle had been hardest. Leila chose the hoop. Sam said his hardest part had been learning not to turn the activity into a ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 3,
              "prompt": "Sam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the ______, and neither needed to be in front."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "front",
              "paragraph": 3,
              "prompt": "Sam looked at the blank space where a number might have been. It no longer seemed to be missing anything important. He drew two figures at the end of his map. This time, both had enough room beside the flag, and neither needed to be in ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "front"
            },
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "emerged"
            }
          ]
        }
      }
    ],
    "intro": "486 words · 4 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "P": {
    "grade": "F&P P target",
    "titles": [
      "An invisible stopwatch",
      "Reading the course card",
      "A quick beginning",
      "A different kind of balance",
      "The view from beside the log",
      "Ready means ready for whom?",
      "Holding is not always helping",
      "Light at the far end",
      "The last few cones",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ticking. He studied the obstacle course, calculating where he might gain a few seconds.",
          "Leila studied the same course differently. She asked how firmly the balance beam was fixed and whether they should take turns holding the hoop.",
          "Jo explained that this was a cooperative challenge. Red cones marked the route, a low log tested balance, and the yellow flag marked a shared finish. Nobody would be ranked.",
          "Sam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might require of him. Leila folded the card and followed, carrying the hoop."
        ],
        "mc": [
          {
            "prompt": "What is the “invisible stopwatch”?",
            "choices": [
              "A hidden device on Jo’s clipboard",
              "A clock inside the hoop",
              "A rule printed on the course card",
              "Sam’s private focus on speed and winning"
            ],
            "answer": 3,
            "skill": "Interpret figurative language",
            "evidence": "behaved as if he could hear one ticking"
          },
          {
            "prompt": "What contrast is established between Sam and Leila?",
            "choices": [
              "He wants to stop while she wants to race.",
              "He has practised while she has never visited a park.",
              "He considers speed while she considers how to participate.",
              "He likes maps while she refuses to read."
            ],
            "answer": 2,
            "skill": "Compare viewpoints",
            "evidence": "studied the same course differently"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s calculations",
              "focused on gaining seconds"
            ],
            [
              "Leila’s questions",
              "considered practical details"
            ],
            [
              "Jo’s challenge",
              "required cooperation"
            ]
          ],
          "options": [
            "required cooperation",
            "considered practical details",
            "focused on gaining seconds"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s calculations focused on gaining seconds",
            "Leila’s questions considered practical details",
            "Jo’s challenge required cooperation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ticking. He studied the obstacle course, calculating where he might gain a few {{c0}}.",
            "Leila studied the same course differently. She asked how firmly the balance beam was fixed and whether they should take turns holding the hoop.",
            "Jo explained that this was a cooperative challenge. Red cones marked the route, a low log tested balance, and the yellow flag marked a shared {{c1}}. Nobody would be ranked.",
            "Sam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might {{c2}} of him. Leila folded the card and followed, carrying the {{c3}}."
          ],
          "parts": [
            "There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ticking. He studied the obstacle course, calculating where he might gain a few {{c0}}.\n\nLeila studied the same course differently. She asked how firmly the balance beam was fixed and whether they should take turns holding the hoop.\n\nJo explained that this was a cooperative challenge. Red cones marked the route, a low log tested balance, and the yellow flag marked a shared {{c1}}. Nobody would be ranked.\n\nSam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might {{c2}} of him. Leila folded the card and followed, carrying the {{c3}}."
          ],
          "columns": [
            "There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ticking. He studied the obstacle course, calculating where he might gain a few {{c0}}. Leila studied the same course differently. She asked how firmly the balance beam was fixed and whether they should take turns holding the hoop.",
            "Jo explained that this was a cooperative challenge. Red cones marked the route, a low log tested balance, and the yellow flag marked a shared {{c1}}. Nobody would be ranked. Sam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might {{c2}} of him. Leila folded the card and followed, carrying the {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "seconds",
              "paragraph": 0,
              "prompt": "There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ticking. He studied the obstacle course, calculating where he might gain a few ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "finish",
              "paragraph": 2,
              "prompt": "Jo explained that this was a cooperative challenge. Red cones marked the route, a low log tested balance, and the yellow flag marked a shared ______. Nobody would be ranked."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "require",
              "paragraph": 3,
              "prompt": "Sam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might ______ of him. Leila folded the card and followed, carrying the hoop."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "hoop",
              "paragraph": 3,
              "prompt": "Sam agreed quickly. Nevertheless, when Leila paused to read the course card, he was already several steps ahead. He could repeat the rule about cooperation; he had not yet worked out what it might require of him. Leila folded the card and followed, carrying the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "hoop"
            },
            {
              "id": "w2",
              "word": "require"
            },
            {
              "id": "w1",
              "word": "finish"
            },
            {
              "id": "w0",
              "word": "seconds"
            }
          ]
        }
      },
      {
        "text": [
          "Leila set the course card on a flat bench so both children could see it. Red cones connected a low log, a hoop station, a tunnel, and the yellow finish flag.",
          "Sam traced a direct line between the pictures. Leila traced the spaces where a partner might need to wait. They were looking at the same route but planning different kinds of progress.",
          "Jo asked each child to explain one part of the course. Sam could describe where to go. Leila could explain how they would leave room for the next person.",
          "The answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to hold it. For the moment, he thought that taking turns would be easy to remember."
        ],
        "mc": [
          {
            "prompt": "What does Leila notice that Sam first overlooks?",
            "choices": [
              "A hidden shortcut through a tree",
              "A missing racing clock",
              "Places where a partner may need to wait",
              "A second finish line"
            ],
            "answer": 2,
            "skill": "Compare observations",
            "evidence": "spaces where a partner might need to wait"
          },
          {
            "prompt": "Why are both explanations useful?",
            "choices": [
              "They prove the course is a race.",
              "They describe different parts of the shared task.",
              "They give two unrelated routes.",
              "They remove the need to practise."
            ],
            "answer": 1,
            "skill": "Combine ideas",
            "evidence": "neither was the whole plan"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "connected the stations"
            ],
            [
              "Sam explained",
              "where to go"
            ],
            [
              "Leila explained",
              "how to leave room"
            ]
          ],
          "options": [
            "how to leave room",
            "where to go",
            "connected the stations"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones connected the stations",
            "Sam explained where to go",
            "Leila explained how to leave room"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila set the course card on a flat bench so both children could see it. Red {{c0}} connected a low log, a hoop station, a tunnel, and the yellow finish flag.",
            "Sam traced a direct line between the pictures. Leila traced the spaces where a partner might need to wait. They were looking at the same route but planning different kinds of {{c1}}.",
            "Jo asked each child to explain one part of the course. Sam could describe where to go. Leila could explain how they would leave room for the next person.",
            "The answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to {{c2}} it. For the moment, he thought that taking turns would be easy to {{c3}}."
          ],
          "parts": [
            "Leila set the course card on a flat bench so both children could see it. Red {{c0}} connected a low log, a hoop station, a tunnel, and the yellow finish flag.\n\nSam traced a direct line between the pictures. Leila traced the spaces where a partner might need to wait. They were looking at the same route but planning different kinds of {{c1}}.\n\nJo asked each child to explain one part of the course. Sam could describe where to go. Leila could explain how they would leave room for the next person.\n\nThe answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to {{c2}} it. For the moment, he thought that taking turns would be easy to {{c3}}."
          ],
          "columns": [
            "Leila set the course card on a flat bench so both children could see it. Red {{c0}} connected a low log, a hoop station, a tunnel, and the yellow finish flag. Sam traced a direct line between the pictures. Leila traced the spaces where a partner might need to wait. They were looking at the same route but planning different kinds of {{c1}}.",
            "Jo asked each child to explain one part of the course. Sam could describe where to go. Leila could explain how they would leave room for the next person. The answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to {{c2}} it. For the moment, he thought that taking turns would be easy to {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "cones",
              "paragraph": 0,
              "prompt": "Leila set the course card on a flat bench so both children could see it. Red ______ connected a low log, a hoop station, a tunnel, and the yellow finish flag."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "progress",
              "paragraph": 1,
              "prompt": "Sam traced a direct line between the pictures. Leila traced the spaces where a partner might need to wait. They were looking at the same route but planning different kinds of ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "hold",
              "paragraph": 3,
              "prompt": "The answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to ______ it. For the moment, he thought that taking turns would be easy to remember."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "remember",
              "paragraph": 3,
              "prompt": "The answers were both useful, but neither was the whole plan. Sam looked at the card again. He added a small mark beside the hoop to remind himself that someone would need to hold it. For the moment, he thought that taking turns would be easy to ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "remember"
            },
            {
              "id": "w2",
              "word": "hold"
            },
            {
              "id": "w1",
              "word": "progress"
            },
            {
              "id": "w0",
              "word": "cones"
            }
          ]
        }
      },
      {
        "text": [
          "When Jo invited them to begin, Sam moved between the first cones in three quick steps. Leila followed at a steadier pace, checking the space ahead of her.",
          "At the log, Sam turned to ask why she was taking so long. The question sounded impatient even though he had meant it as a simple request for information.",
          "Leila said she wanted to see where she would place her feet. Sam looked at the log and decided that walking along a piece of wood could not require much planning.",
          "Jo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at closely. Leila stood clear and watched his first step."
        ],
        "mc": [
          {
            "prompt": "Why is Leila moving steadily?",
            "choices": [
              "She is waiting for a race to start.",
              "She is planning where to place her feet.",
              "She wants to hide the course card.",
              "She has already finished the activity."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "see where she would place her feet"
          },
          {
            "prompt": "What does Sam’s attention to the flag suggest?",
            "choices": [
              "He may overlook details of the log.",
              "He has checked every part carefully.",
              "He wants Leila to carry him.",
              "He thinks Jo has moved the finish."
            ],
            "answer": 0,
            "skill": "Infer from attention",
            "evidence": "had not yet looked at closely"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s question",
              "sounded impatient"
            ],
            [
              "The grass beside the log",
              "gave room to step off"
            ],
            [
              "Jo’s signal",
              "showed when to begin"
            ]
          ],
          "options": [
            "showed when to begin",
            "gave room to step off",
            "sounded impatient"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s question sounded impatient",
            "The grass beside the log gave room to step off",
            "Jo’s signal showed when to begin"
          ]
        },
        "cloze": {
          "paragraphs": [
            "When Jo invited them to begin, Sam moved between the first cones in three quick {{c0}}. Leila followed at a steadier pace, checking the space ahead of her.",
            "At the log, Sam turned to ask why she was taking so long. The question sounded impatient even though he had meant it as a simple request for information.",
            "Leila said she wanted to see where she would place her feet. Sam looked at the log and decided that walking along a piece of wood could not require much {{c1}}.",
            "Jo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at {{c2}}. Leila stood clear and watched his first {{c3}}."
          ],
          "parts": [
            "When Jo invited them to begin, Sam moved between the first cones in three quick {{c0}}. Leila followed at a steadier pace, checking the space ahead of her.\n\nAt the log, Sam turned to ask why she was taking so long. The question sounded impatient even though he had meant it as a simple request for information.\n\nLeila said she wanted to see where she would place her feet. Sam looked at the log and decided that walking along a piece of wood could not require much {{c1}}.\n\nJo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at {{c2}}. Leila stood clear and watched his first {{c3}}."
          ],
          "columns": [
            "When Jo invited them to begin, Sam moved between the first cones in three quick {{c0}}. Leila followed at a steadier pace, checking the space ahead of her. At the log, Sam turned to ask why she was taking so long. The question sounded impatient even though he had meant it as a simple request for information.",
            "Leila said she wanted to see where she would place her feet. Sam looked at the log and decided that walking along a piece of wood could not require much {{c1}}. Jo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at {{c2}}. Leila stood clear and watched his first {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "steps",
              "paragraph": 0,
              "prompt": "When Jo invited them to begin, Sam moved between the first cones in three quick ______. Leila followed at a steadier pace, checking the space ahead of her."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "planning",
              "paragraph": 2,
              "prompt": "Leila said she wanted to see where she would place her feet. Sam looked at the log and decided that walking along a piece of wood could not require much ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "closely",
              "paragraph": 3,
              "prompt": "Jo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at ______. Leila stood clear and watched his first step."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "step",
              "paragraph": 3,
              "prompt": "Jo reminded them to take turns, with room for each person to step off onto the grass. Sam waited for her signal, still thinking about the flag beyond the log. He was preparing to cross an obstacle he had not yet looked at closely. Leila stood clear and watched his first ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "step"
            },
            {
              "id": "w2",
              "word": "closely"
            },
            {
              "id": "w1",
              "word": "planning"
            },
            {
              "id": "w0",
              "word": "steps"
            }
          ]
        }
      },
      {
        "text": [
          "Sam hurried onto the low log, eyes fixed on the flag beyond it. Before he was halfway across, his foot slid sideways and he stepped safely onto the grass.",
          "\"Try watching where your next step goes,\" Leila suggested. Sam almost replied that he knew how to walk. Instead, he glanced back at the log and noticed its uneven surface.",
          "With Jo nearby, he tried again: shorter steps, arms spread, attention on the wood in front of him. He reached the end without rushing.",
          "Leila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined lead. For the first time, he noticed how carefully she placed each foot."
        ],
        "mc": [
          {
            "prompt": "Why does Sam nearly reject Leila’s advice?",
            "choices": [
              "He has been asked to leave.",
              "He thinks she is describing a different course.",
              "He feels defensive about needing help.",
              "He cannot hear her over a motor."
            ],
            "answer": 2,
            "skill": "Infer an emotion",
            "evidence": "almost replied that he knew how to walk"
          },
          {
            "prompt": "What does Sam find harder than balancing?",
            "choices": [
              "Walking on the grass",
              "Giving up his imagined lead to wait for Leila",
              "Spreading his arms",
              "Finding the yellow flag"
            ],
            "answer": 1,
            "skill": "Explain an internal conflict",
            "evidence": "setting aside his own imagined lead"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "challenged Sam’s priorities"
            ]
          ],
          "options": [
            "challenged Sam’s priorities",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log challenged Sam’s priorities"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam hurried onto the low {{c0}}, eyes fixed on the flag beyond it. Before he was halfway across, his foot slid sideways and he stepped safely onto the grass.",
            "\"Try watching where your next step goes,\" Leila suggested. Sam almost replied that he knew how to walk. Instead, he glanced back at the log and noticed its uneven {{c1}}.",
            "With Jo nearby, he tried again: shorter steps, arms spread, attention on the wood in front of him. He reached the end without rushing.",
            "Leila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined {{c2}}. For the first time, he noticed how carefully she placed each {{c3}}."
          ],
          "parts": [
            "Sam hurried onto the low {{c0}}, eyes fixed on the flag beyond it. Before he was halfway across, his foot slid sideways and he stepped safely onto the grass.\n\n\"Try watching where your next step goes,\" Leila suggested. Sam almost replied that he knew how to walk. Instead, he glanced back at the log and noticed its uneven {{c1}}.\n\nWith Jo nearby, he tried again: shorter steps, arms spread, attention on the wood in front of him. He reached the end without rushing.\n\nLeila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined {{c2}}. For the first time, he noticed how carefully she placed each {{c3}}."
          ],
          "columns": [
            "Sam hurried onto the low {{c0}}, eyes fixed on the flag beyond it. Before he was halfway across, his foot slid sideways and he stepped safely onto the grass. \"Try watching where your next step goes,\" Leila suggested. Sam almost replied that he knew how to walk. Instead, he glanced back at the log and noticed its uneven {{c1}}.",
            "With Jo nearby, he tried again: shorter steps, arms spread, attention on the wood in front of him. He reached the end without rushing. Leila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined {{c2}}. For the first time, he noticed how carefully she placed each {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam hurried onto the low ______, eyes fixed on the flag beyond it. Before he was halfway across, his foot slid sideways and he stepped safely onto the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "surface",
              "paragraph": 1,
              "prompt": "\"Try watching where your next step goes,\" Leila suggested. Sam almost replied that he knew how to walk. Instead, he glanced back at the log and noticed its uneven ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "lead",
              "paragraph": 3,
              "prompt": "Leila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined ______. For the first time, he noticed how carefully she placed each foot."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "foot",
              "paragraph": 3,
              "prompt": "Leila waited for his nod before starting. Sam remained beside the obstacle and watched her cross. Staying there felt strangely harder than balancing, because it meant setting aside his own imagined lead. For the first time, he noticed how carefully she placed each ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "foot"
            },
            {
              "id": "w2",
              "word": "lead"
            },
            {
              "id": "w1",
              "word": "surface"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "After crossing successfully, Sam stood where he could watch Leila’s feet. She moved slowly enough to adjust each step, pausing when the surface changed beneath her shoe.",
          "He nearly called out the advice she had given him. Then he stopped. Leila was already using careful steps, and another voice might distract her rather than help.",
          "When she reached the end, Sam asked which part had needed the most attention. Leila pointed to a raised patch near the middle. He had not noticed her pause there.",
          "The log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red cone and moved towards the hoop."
        ],
        "mc": [
          {
            "prompt": "Why does Sam decide not to call out advice?",
            "choices": [
              "He wants her to step off the log.",
              "He has forgotten where she is.",
              "Jo has cancelled the next station.",
              "It might distract Leila when she is already being careful."
            ],
            "answer": 3,
            "skill": "Infer a thoughtful choice",
            "evidence": "another voice might distract her"
          },
          {
            "prompt": "How does watching change Sam’s understanding?",
            "choices": [
              "He learns that the course has two finish flags.",
              "He thinks taking turns means staying silent forever.",
              "He notices the decisions behind Leila’s careful movement.",
              "He decides that the log is no longer useful."
            ],
            "answer": 2,
            "skill": "Explain a change in viewpoint",
            "evidence": "a partner making decisions"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Leila’s pause",
              "was near a raised patch"
            ],
            [
              "Sam’s question",
              "asked about attention"
            ],
            [
              "The next cone",
              "led towards the hoop"
            ]
          ],
          "options": [
            "led towards the hoop",
            "asked about attention",
            "was near a raised patch"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s pause was near a raised patch",
            "Sam’s question asked about attention",
            "The next cone led towards the hoop"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After crossing successfully, Sam stood where he could watch Leila’s {{c0}}. She moved slowly enough to adjust each step, pausing when the surface changed beneath her shoe.",
            "He nearly called out the advice she had given him. Then he stopped. Leila was already using careful steps, and another voice might distract her rather than help.",
            "When she reached the end, Sam asked which part had needed the most {{c1}}. Leila pointed to a raised patch near the middle. He had not noticed her pause there.",
            "The log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red {{c2}} and moved towards the {{c3}}."
          ],
          "parts": [
            "After crossing successfully, Sam stood where he could watch Leila’s {{c0}}. She moved slowly enough to adjust each step, pausing when the surface changed beneath her shoe.\n\nHe nearly called out the advice she had given him. Then he stopped. Leila was already using careful steps, and another voice might distract her rather than help.\n\nWhen she reached the end, Sam asked which part had needed the most {{c1}}. Leila pointed to a raised patch near the middle. He had not noticed her pause there.\n\nThe log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red {{c2}} and moved towards the {{c3}}."
          ],
          "columns": [
            "After crossing successfully, Sam stood where he could watch Leila’s {{c0}}. She moved slowly enough to adjust each step, pausing when the surface changed beneath her shoe. He nearly called out the advice she had given him. Then he stopped. Leila was already using careful steps, and another voice might distract her rather than help.",
            "When she reached the end, Sam asked which part had needed the most {{c1}}. Leila pointed to a raised patch near the middle. He had not noticed her pause there. The log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red {{c2}} and moved towards the {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "feet",
              "paragraph": 0,
              "prompt": "After crossing successfully, Sam stood where he could watch Leila’s ______. She moved slowly enough to adjust each step, pausing when the surface changed beneath her shoe."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "attention",
              "paragraph": 2,
              "prompt": "When she reached the end, Sam asked which part had needed the most ______. Leila pointed to a raised patch near the middle. He had not noticed her pause there."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "cone",
              "paragraph": 3,
              "prompt": "The log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red ______ and moved towards the hoop."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "hoop",
              "paragraph": 3,
              "prompt": "The log was the same object from either side, but watching it had given Sam a different kind of information. He could see a partner making decisions, not simply someone taking longer than he would. Together, they found the next red cone and moved towards the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "hoop"
            },
            {
              "id": "w2",
              "word": "cone"
            },
            {
              "id": "w1",
              "word": "attention"
            },
            {
              "id": "w0",
              "word": "feet"
            }
          ]
        }
      },
      {
        "text": [
          "Leila picked up the yellow hoop and held it steady while Sam stood beside the marked starting place. She asked whether he was ready before lifting it into position.",
          "Sam nodded at once. He had been thinking about how quickly he could pass through, not about the job Leila was doing to keep the hoop still.",
          "Jo asked them to keep the area clear and take one turn at a time. Leila checked her grip, and Sam moved to the centre of the opening. For a moment, both jobs needed to work together.",
          "Sam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next obstacle would require a different kind of attention."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask if Sam is ready?",
            "choices": [
              "She has finished the whole course.",
              "She is asking Sam to hold the flag.",
              "Their two jobs need to work together.",
              "She wants to change the route."
            ],
            "answer": 2,
            "skill": "Connect actions and purpose",
            "evidence": "both jobs needed to work together"
          },
          {
            "prompt": "What challenge does the ending suggest?",
            "choices": [
              "Jo will start timing the course.",
              "Sam may forget his promise when he moves on.",
              "The tunnel will change into a log.",
              "Leila will remove the finish flag."
            ],
            "answer": 1,
            "skill": "Use a clue to predict",
            "evidence": "already moving towards the next obstacle"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Leila’s job",
              "was to hold the hoop steady"
            ],
            [
              "Sam’s promise",
              "was to return for Leila’s turn"
            ],
            [
              "The tunnel",
              "was the next obstacle"
            ]
          ],
          "options": [
            "was the next obstacle",
            "was to return for Leila’s turn",
            "was to hold the hoop steady"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s job was to hold the hoop steady",
            "Sam’s promise was to return for Leila’s turn",
            "The tunnel was the next obstacle"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila picked up the yellow {{c0}} and held it steady while Sam stood beside the marked starting place. She asked whether he was ready before lifting it into position.",
            "Sam nodded at once. He had been thinking about how quickly he could pass through, not about the job Leila was doing to keep the hoop still.",
            "Jo asked them to keep the area clear and take one turn at a time. Leila checked her grip, and Sam moved to the centre of the opening. For a moment, both jobs needed to work {{c1}}.",
            "Sam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next {{c2}} would require a different kind of {{c3}}."
          ],
          "parts": [
            "Leila picked up the yellow {{c0}} and held it steady while Sam stood beside the marked starting place. She asked whether he was ready before lifting it into position.\n\nSam nodded at once. He had been thinking about how quickly he could pass through, not about the job Leila was doing to keep the hoop still.\n\nJo asked them to keep the area clear and take one turn at a time. Leila checked her grip, and Sam moved to the centre of the opening. For a moment, both jobs needed to work {{c1}}.\n\nSam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next {{c2}} would require a different kind of {{c3}}."
          ],
          "columns": [
            "Leila picked up the yellow {{c0}} and held it steady while Sam stood beside the marked starting place. She asked whether he was ready before lifting it into position. Sam nodded at once. He had been thinking about how quickly he could pass through, not about the job Leila was doing to keep the hoop still.",
            "Jo asked them to keep the area clear and take one turn at a time. Leila checked her grip, and Sam moved to the centre of the opening. For a moment, both jobs needed to work {{c1}}. Sam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next {{c2}} would require a different kind of {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila picked up the yellow ______ and held it steady while Sam stood beside the marked starting place. She asked whether he was ready before lifting it into position."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "together",
              "paragraph": 2,
              "prompt": "Jo asked them to keep the area clear and take one turn at a time. Leila checked her grip, and Sam moved to the centre of the opening. For a moment, both jobs needed to work ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "obstacle",
              "paragraph": 3,
              "prompt": "Sam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next ______ would require a different kind of attention."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "attention",
              "paragraph": 3,
              "prompt": "Sam could see the tunnel waiting beyond the station. He promised himself that he would come back to hold the hoop after his turn. Remembering a promise while standing still seemed easy. Remembering it while already moving towards the next obstacle would require a different kind of ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "attention"
            },
            {
              "id": "w2",
              "word": "obstacle"
            },
            {
              "id": "w1",
              "word": "together"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped through the hoop Leila held and immediately turned towards the tunnel. Her quiet \"My turn\" brought him back.",
          "He held the hoop at the same height she had used for him. Leila’s foot caught the lower rim. She stepped back, unhurt, and asked him to lower it.",
          "Sam felt a flash of impatience. He was holding it properly, wasn’t he? Then he noticed that Leila was shorter than he was. The same position did not give them the same opportunity.",
          "He lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own perspective. He waited for her signal before moving on."
        ],
        "mc": [
          {
            "prompt": "Why does the same hoop position not work for Leila?",
            "choices": [
              "Sam is standing inside the tunnel.",
              "She is shorter and needs a lower rim.",
              "She is carrying a heavy bag.",
              "The hoop changes shape."
            ],
            "answer": 1,
            "skill": "Use explicit evidence",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Which idea does Sam begin to understand?",
            "choices": [
              "Help should respond to another person’s needs.",
              "Fairness always means doing exactly the same thing.",
              "Only taller people can hold a hoop.",
              "It is better not to ask questions."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "fit the person receiving it"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped through the {{c0}} Leila held and immediately turned towards the tunnel. Her quiet \"My turn\" brought him back.",
            "He held the hoop at the same height she had used for him. Leila’s foot caught the lower rim. She stepped back, unhurt, and asked him to lower it.",
            "Sam felt a flash of {{c1}}. He was holding it properly, wasn’t he? Then he noticed that Leila was shorter than he was. The same position did not give them the same opportunity.",
            "He lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own {{c2}}. He waited for her {{c3}} before moving on."
          ],
          "parts": [
            "Sam stepped through the {{c0}} Leila held and immediately turned towards the tunnel. Her quiet \"My turn\" brought him back.\n\nHe held the hoop at the same height she had used for him. Leila’s foot caught the lower rim. She stepped back, unhurt, and asked him to lower it.\n\nSam felt a flash of {{c1}}. He was holding it properly, wasn’t he? Then he noticed that Leila was shorter than he was. The same position did not give them the same opportunity.\n\nHe lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own {{c2}}. He waited for her {{c3}} before moving on."
          ],
          "columns": [
            "Sam stepped through the {{c0}} Leila held and immediately turned towards the tunnel. Her quiet \"My turn\" brought him back. He held the hoop at the same height she had used for him. Leila’s foot caught the lower rim. She stepped back, unhurt, and asked him to lower it.",
            "Sam felt a flash of {{c1}}. He was holding it properly, wasn’t he? Then he noticed that Leila was shorter than he was. The same position did not give them the same opportunity. He lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own {{c2}}. He waited for her {{c3}} before moving on."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Sam stepped through the ______ Leila held and immediately turned towards the tunnel. Her quiet \"My turn\" brought him back."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "impatience",
              "paragraph": 2,
              "prompt": "Sam felt a flash of ______. He was holding it properly, wasn’t he? Then he noticed that Leila was shorter than he was. The same position did not give them the same opportunity."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "perspective",
              "paragraph": 3,
              "prompt": "He lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own ______. He waited for her signal before moving on."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 3,
              "prompt": "He lowered the hoop and steadied it with both hands. Leila passed through easily. \"Like that,\" she said. Sam realised that a helpful action had to fit the person receiving it, rather than merely look helpful from his own perspective. He waited for her ______ before moving on."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "perspective"
            },
            {
              "id": "w1",
              "word": "impatience"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "The tunnel was short, but its entrance looked darker than Leila had expected. Sam waited while she looked through the opening towards the light at the other end.",
          "He wanted to tell her that it was easy. Instead, he asked what would help her decide. Leila said she wanted to see where he would wait without blocking the exit.",
          "Jo checked that the tunnel was clear. Sam moved where Leila could see his shoes from the entrance, then stood to the side so there was room to come out.",
          "Leila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the end. He watched for her signal."
        ],
        "mc": [
          {
            "prompt": "What helps Leila prepare for the tunnel?",
            "choices": [
              "Knowing where Sam will wait and seeing the exit",
              "Being told to hurry",
              "Moving the finish flag closer",
              "Asking Sam to block the opening"
            ],
            "answer": 0,
            "skill": "Connect a need to a response",
            "evidence": "see where he would wait"
          },
          {
            "prompt": "What does Sam learn about helping here?",
            "choices": [
              "He must complete Leila’s turn for her.",
              "He should avoid asking what she needs.",
              "The quickest response is always the best.",
              "Doing the agreed job can be more useful than doing extra things."
            ],
            "answer": 3,
            "skill": "Explain a lesson",
            "evidence": "resisting the urge to do more"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Jo checked",
              "that the tunnel was clear"
            ],
            [
              "Sam stood",
              "to the side of the exit"
            ],
            [
              "Leila’s signal",
              "would show she had reached the end"
            ]
          ],
          "options": [
            "would show she had reached the end",
            "to the side of the exit",
            "that the tunnel was clear"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo checked that the tunnel was clear",
            "Sam stood to the side of the exit",
            "Leila’s signal would show she had reached the end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "The tunnel was short, but its entrance looked darker than Leila had expected. Sam waited while she looked through the opening towards the {{c0}} at the other end.",
            "He wanted to tell her that it was easy. Instead, he asked what would help her decide. Leila said she wanted to see where he would wait without blocking the exit.",
            "Jo checked that the tunnel was clear. Sam moved where Leila could see his shoes from the entrance, then stood to the side so there was room to come {{c1}}.",
            "Leila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the {{c2}}. He watched for her {{c3}}."
          ],
          "parts": [
            "The tunnel was short, but its entrance looked darker than Leila had expected. Sam waited while she looked through the opening towards the {{c0}} at the other end.\n\nHe wanted to tell her that it was easy. Instead, he asked what would help her decide. Leila said she wanted to see where he would wait without blocking the exit.\n\nJo checked that the tunnel was clear. Sam moved where Leila could see his shoes from the entrance, then stood to the side so there was room to come {{c1}}.\n\nLeila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the {{c2}}. He watched for her {{c3}}."
          ],
          "columns": [
            "The tunnel was short, but its entrance looked darker than Leila had expected. Sam waited while she looked through the opening towards the {{c0}} at the other end. He wanted to tell her that it was easy. Instead, he asked what would help her decide. Leila said she wanted to see where he would wait without blocking the exit.",
            "Jo checked that the tunnel was clear. Sam moved where Leila could see his shoes from the entrance, then stood to the side so there was room to come {{c1}}. Leila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the {{c2}}. He watched for her {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "light",
              "paragraph": 0,
              "prompt": "The tunnel was short, but its entrance looked darker than Leila had expected. Sam waited while she looked through the opening towards the ______ at the other end."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "out",
              "paragraph": 2,
              "prompt": "Jo checked that the tunnel was clear. Sam moved where Leila could see his shoes from the entrance, then stood to the side so there was room to come ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "end",
              "paragraph": 3,
              "prompt": "Leila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the ______. He watched for her signal."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 3,
              "prompt": "Leila knelt and began to crawl. Sam stayed in place, discovering that being useful could involve resisting the urge to do more. His job was not to hurry her through. It was to keep the agreed space clear and be there when she reached the end. He watched for her ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "end"
            },
            {
              "id": "w1",
              "word": "out"
            },
            {
              "id": "w0",
              "word": "light"
            }
          ]
        }
      },
      {
        "text": [
          "Beyond the tunnel, only a few cones separated the children from the yellow flag. Sam could have reached it in seconds if he had run ahead.",
          "Leila paused to brush grass from her knees. Sam shifted his weight, noticed the familiar urge to hurry, and waited until she was ready to continue.",
          "They followed the last part of the route side by side. Sam did not need to hold anything this time. His part was to match their shared pace, rather than decide that the last stretch belonged to him alone.",
          "Near the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and responded. They reached for the finish together, leaving the imaginary stopwatch without a final number."
        ],
        "mc": [
          {
            "prompt": "What shows Sam resisting his old habit?",
            "choices": [
              "He runs ahead to the flag.",
              "He moves all the cones.",
              "He asks Jo to choose a winner.",
              "He waits while Leila brushes off her knees."
            ],
            "answer": 3,
            "skill": "Find evidence of change",
            "evidence": "waited until she was ready"
          },
          {
            "prompt": "What has changed most during the course?",
            "choices": [
              "The shape of the finish flag",
              "The location of the tunnel",
              "How the children work with each other",
              "The number of stations"
            ],
            "answer": 2,
            "skill": "Identify a central idea",
            "evidence": "the way the two children noticed, listened, and responded"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The last cones",
              "led to the finish flag"
            ],
            [
              "Sam’s part",
              "was to match their shared pace"
            ],
            [
              "Most adjustments",
              "were in how they worked together"
            ]
          ],
          "options": [
            "were in how they worked together",
            "was to match their shared pace",
            "led to the finish flag"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The last cones led to the finish flag",
            "Sam’s part was to match their shared pace",
            "Most adjustments were in how they worked together"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Beyond the tunnel, only a few cones separated the children from the yellow {{c0}}. Sam could have reached it in seconds if he had run ahead.",
            "Leila paused to brush grass from her knees. Sam shifted his weight, noticed the familiar urge to hurry, and waited until she was ready to continue.",
            "They followed the last part of the route side by side. Sam did not need to hold anything this time. His part was to match their shared {{c1}}, rather than decide that the last stretch belonged to him alone.",
            "Near the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and {{c2}}. They reached for the finish together, leaving the imaginary stopwatch without a final {{c3}}."
          ],
          "parts": [
            "Beyond the tunnel, only a few cones separated the children from the yellow {{c0}}. Sam could have reached it in seconds if he had run ahead.\n\nLeila paused to brush grass from her knees. Sam shifted his weight, noticed the familiar urge to hurry, and waited until she was ready to continue.\n\nThey followed the last part of the route side by side. Sam did not need to hold anything this time. His part was to match their shared {{c1}}, rather than decide that the last stretch belonged to him alone.\n\nNear the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and {{c2}}. They reached for the finish together, leaving the imaginary stopwatch without a final {{c3}}."
          ],
          "columns": [
            "Beyond the tunnel, only a few cones separated the children from the yellow {{c0}}. Sam could have reached it in seconds if he had run ahead. Leila paused to brush grass from her knees. Sam shifted his weight, noticed the familiar urge to hurry, and waited until she was ready to continue.",
            "They followed the last part of the route side by side. Sam did not need to hold anything this time. His part was to match their shared {{c1}}, rather than decide that the last stretch belonged to him alone. Near the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and {{c2}}. They reached for the finish together, leaving the imaginary stopwatch without a final {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Beyond the tunnel, only a few cones separated the children from the yellow ______. Sam could have reached it in seconds if he had run ahead."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "pace",
              "paragraph": 2,
              "prompt": "They followed the last part of the route side by side. Sam did not need to hold anything this time. His part was to match their shared ______, rather than decide that the last stretch belonged to him alone."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "responded",
              "paragraph": 3,
              "prompt": "Near the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and ______. They reached for the finish together, leaving the imaginary stopwatch without a final number."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "number",
              "paragraph": 3,
              "prompt": "Near the flag, Leila pointed back towards the hoop and laughed about how much they had changed its height. Sam thought about how little the course itself had changed. Most of the adjustments had happened in the way the two children noticed, listened, and responded. They reached for the finish together, leaving the imaginary stopwatch without a final ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "number"
            },
            {
              "id": "w2",
              "word": "responded"
            },
            {
              "id": "w1",
              "word": "pace"
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
          "When Leila emerged from the tunnel, Sam was waiting where she could see him. He asked whether she was ready, and they walked the last stretch together.",
          "At the flag, Jo asked them to describe their most difficult obstacle. Leila chose the hoop. Sam glanced at the log, then said, \"The part where I had to stop making it a race.\"",
          "Jo left the time box on her clipboard empty. In the space below it, she wrote the changes they had made: smaller steps, a lower hoop, and time to listen.",
          "Sam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow flag on his map, leaving enough room for them to stand together."
        ],
        "mc": [
          {
            "prompt": "Why does the empty time box matter?",
            "choices": [
              "It emphasises progress that cannot be described by speed alone.",
              "It shows that Jo forgot the whole activity.",
              "It proves that the children did not finish.",
              "It means the course will be cancelled."
            ],
            "answer": 0,
            "skill": "Interpret a significant detail",
            "evidence": "he did not need a number there"
          },
          {
            "prompt": "How has Sam changed by the end?",
            "choices": [
              "He believes he should do the course alone.",
              "He thinks Leila should always follow him.",
              "He decides that practice cannot help.",
              "He values listening and shared progress as well as finishing."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "time to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "represented a shared finish"
            ]
          ],
          "options": [
            "represented a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures represented a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "When Leila emerged from the {{c0}}, Sam was waiting where she could see him. He asked whether she was ready, and they walked the last stretch together.",
            "At the flag, Jo asked them to describe their most difficult obstacle. Leila chose the hoop. Sam glanced at the log, then said, \"The part where I had to stop making it a {{c1}}.\"",
            "Jo left the time box on her clipboard empty. In the space below it, she wrote the changes they had made: smaller steps, a lower hoop, and time to listen.",
            "Sam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow {{c2}} on his map, leaving enough room for them to stand {{c3}}."
          ],
          "parts": [
            "When Leila emerged from the {{c0}}, Sam was waiting where she could see him. He asked whether she was ready, and they walked the last stretch together.\n\nAt the flag, Jo asked them to describe their most difficult obstacle. Leila chose the hoop. Sam glanced at the log, then said, \"The part where I had to stop making it a {{c1}}.\"\n\nJo left the time box on her clipboard empty. In the space below it, she wrote the changes they had made: smaller steps, a lower hoop, and time to listen.\n\nSam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow {{c2}} on his map, leaving enough room for them to stand {{c3}}."
          ],
          "columns": [
            "When Leila emerged from the {{c0}}, Sam was waiting where she could see him. He asked whether she was ready, and they walked the last stretch together. At the flag, Jo asked them to describe their most difficult obstacle. Leila chose the hoop. Sam glanced at the log, then said, \"The part where I had to stop making it a {{c1}}.\"",
            "Jo left the time box on her clipboard empty. In the space below it, she wrote the changes they had made: smaller steps, a lower hoop, and time to listen. Sam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow {{c2}} on his map, leaving enough room for them to stand {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "When Leila emerged from the ______, Sam was waiting where she could see him. He asked whether she was ready, and they walked the last stretch together."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 1,
              "prompt": "At the flag, Jo asked them to describe their most difficult obstacle. Leila chose the hoop. Sam glanced at the log, then said, \"The part where I had to stop making it a ______.\""
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 3,
              "prompt": "Sam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow ______ on his map, leaving enough room for them to stand together."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "together",
              "paragraph": 3,
              "prompt": "Sam looked at the blank box and discovered that he did not need a number there. The course had measured something after all, just not the thing he had first expected. He drew two figures beside the yellow flag on his map, leaving enough room for them to stand ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "together"
            },
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "1371 words · 10 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "R": {
    "grade": "F&P R target",
    "titles": [
      "An invisible stopwatch",
      "A different kind of balance",
      "Holding is not always helping",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "Sam read Jo’s course card as a list of opportunities to save time. The log could be crossed in a few strides, the hoop stepped through without pausing, and the tunnel taken at a quick crawl.",
          "Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
          "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the route.",
          "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red cones led them onward."
        ],
        "mc": [
          {
            "prompt": "Why does the author show both children reading the same card?",
            "choices": [
              "To suggest that the card contains two different routes",
              "To show that Leila cannot understand the instructions",
              "To establish that Sam has already completed the course",
              "To reveal how their priorities shape what they notice"
            ],
            "answer": 3,
            "skill": "Analyse contrasting perspectives",
            "evidence": "a list of questions"
          },
          {
            "prompt": "What distinction is introduced through Sam’s behaviour?",
            "choices": [
              "A shared activity needs no planning.",
              "Reading instructions prevents every difficulty.",
              "Understanding a rule is different from acting on it.",
              "Cooperation means always moving faster."
            ],
            "answer": 2,
            "skill": "Explain an implied idea",
            "evidence": "allowing it to change his own behaviour"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s calculations",
              "focused on gaining seconds"
            ],
            [
              "Leila’s questions",
              "considered practical details"
            ],
            [
              "Jo’s challenge",
              "required cooperation"
            ]
          ],
          "options": [
            "required cooperation",
            "considered practical details",
            "focused on gaining seconds"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s calculations focused on gaining seconds",
            "Leila’s questions considered practical details",
            "Jo’s challenge required cooperation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam read Jo’s course card as a list of opportunities to save time. The log could be crossed in a few strides, the hoop stepped through without pausing, and the tunnel taken at a quick {{c0}}.",
            "Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
            "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}.",
            "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "parts": [
            "Sam read Jo’s course card as a list of opportunities to save time. The log could be crossed in a few strides, the hoop stepped through without pausing, and the tunnel taken at a quick {{c0}}.\n\nLeila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?\n\nJo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}.\n\nNobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "columns": [
            "Sam read Jo’s course card as a list of opportunities to save time. The log could be crossed in a few strides, the hoop stepped through without pausing, and the tunnel taken at a quick {{c0}}. Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
            "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}. Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "crawl",
              "paragraph": 0,
              "prompt": "Sam read Jo’s course card as a list of opportunities to save time. The log could be crossed in a few strides, the hoop stepped through without pausing, and the tunnel taken at a quick ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "route",
              "paragraph": 2,
              "prompt": "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "behaviour",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own ______. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red cones led them onward."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "work",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would ______. The red cones led them onward."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "cones",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red ______ led them onward."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "cones"
            },
            {
              "id": "w3",
              "word": "work"
            },
            {
              "id": "w2",
              "word": "behaviour"
            },
            {
              "id": "w1",
              "word": "route"
            },
            {
              "id": "w0",
              "word": "crawl"
            }
          ]
        }
      },
      {
        "text": [
          "On the low log, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been easy.",
          "Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.",
          "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the surface. Leila waited for his nod before she began.",
          "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a time. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made invisible."
        ],
        "mc": [
          {
            "prompt": "Why does the author include the reply Sam decides not to make?",
            "choices": [
              "It explains why Sam must leave the park.",
              "It shows that Sam cannot hear Leila.",
              "It reveals defensiveness followed by a willingness to reconsider.",
              "It proves that Leila’s advice was incorrect."
            ],
            "answer": 2,
            "skill": "Interpret an internal response",
            "evidence": "He let the reply go"
          },
          {
            "prompt": "What does waiting allow Sam to recognise?",
            "choices": [
              "The exact time needed to win the activity",
              "Effort that he had overlooked while focusing on his own speed",
              "A shorter route that avoids the log",
              "A hidden stopwatch beside the tunnel"
            ],
            "answer": 1,
            "skill": "Connect viewpoint and understanding",
            "evidence": "work that his hurry had made invisible"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "challenged Sam’s priorities"
            ]
          ],
          "options": [
            "challenged Sam’s priorities",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log challenged Sam’s priorities"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}.",
            "Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.",
            "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began.",
            "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "parts": [
            "On the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}.\n\nLeila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.\n\nWith Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began.\n\nRemaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "columns": [
            "On the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}. Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.",
            "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began. Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "On the low ______, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been easy."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "easy",
              "paragraph": 0,
              "prompt": "On the low log, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "surface",
              "paragraph": 2,
              "prompt": "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the ______. Leila waited for his nod before she began."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "time",
              "paragraph": 3,
              "prompt": "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a ______. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made invisible."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "invisible",
              "paragraph": 3,
              "prompt": "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a time. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "invisible"
            },
            {
              "id": "w3",
              "word": "time"
            },
            {
              "id": "w2",
              "word": "surface"
            },
            {
              "id": "w1",
              "word": "easy"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped easily through the hoop Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair partner.",
          "Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?",
          "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different size for her.",
          "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving it. Leila’s request had not rejected his effort; it had shown him how to make that effort useful."
        ],
        "mc": [
          {
            "prompt": "What challenges Sam’s first idea of fairness?",
            "choices": [
              "Sam discovers that taking turns is forbidden.",
              "An identical arrangement affects the two children differently.",
              "The hoop changes size when Leila touches it.",
              "Jo gives one child a shorter route."
            ],
            "answer": 1,
            "skill": "Evaluate an assumption",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Why does the author resolve the problem through a small physical adjustment?",
            "choices": [
              "It makes the effect of listening clear in a concrete action.",
              "It suggests that every disagreement needs new equipment.",
              "It shows that words are never useful.",
              "It proves that Leila should complete the course alone."
            ],
            "answer": 0,
            "skill": "Analyse how a theme is developed",
            "evidence": "make that effort useful"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}.",
            "Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?",
            "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her.",
            "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "parts": [
            "Sam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}.\n\nLeila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?\n\nThe answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her.\n\nHe lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "columns": [
            "Sam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}. Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?",
            "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her. He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Sam stepped easily through the ______ Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair partner."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "partner",
              "paragraph": 0,
              "prompt": "Sam stepped easily through the hoop Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "size",
              "paragraph": 2,
              "prompt": "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different ______ for her."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "it",
              "paragraph": 3,
              "prompt": "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving ______. Leila’s request had not rejected his effort; it had shown him how to make that effort useful."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "useful",
              "paragraph": 3,
              "prompt": "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving it. Leila’s request had not rejected his effort; it had shown him how to make that effort ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "useful"
            },
            {
              "id": "w3",
              "word": "it"
            },
            {
              "id": "w2",
              "word": "size"
            },
            {
              "id": "w1",
              "word": "partner"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag together.",
          "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private race.",
          "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a result.",
          "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that measure. The blank time box had made space for a fuller story."
        ],
        "mc": [
          {
            "prompt": "What is the effect of saying that Sam still likes being quick?",
            "choices": [
              "His change seems specific and believable rather than complete.",
              "It cancels every lesson he has learned.",
              "It proves that Jo should have timed the course.",
              "It means Leila has failed the challenge."
            ],
            "answer": 0,
            "skill": "Interpret a nuanced character change",
            "evidence": "He did not suddenly become"
          },
          {
            "prompt": "How does Jo’s record support the story’s theme?",
            "choices": [
              "It identifies the fastest child through hidden numbers.",
              "It lists only the equipment that was broken.",
              "It shows that reaching the flag was unnecessary.",
              "It values the adjustments and listening that enabled shared progress."
            ],
            "answer": 3,
            "skill": "Analyse a significant detail",
            "evidence": "The record described learning"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "represented a shared finish"
            ]
          ],
          "options": [
            "represented a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures represented a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}.",
            "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}.",
            "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}.",
            "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "parts": [
            "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}.\n\nJo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}.\n\nOn the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}.\n\nSam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "columns": [
            "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}. Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}.",
            "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}. Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "together",
              "paragraph": 0,
              "prompt": "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 1,
              "prompt": "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "result",
              "paragraph": 2,
              "prompt": "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "measure",
              "paragraph": 3,
              "prompt": "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that ______. The blank time box had made space for a fuller story."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "story",
              "paragraph": 3,
              "prompt": "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that measure. The blank time box had made space for a fuller ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "story"
            },
            {
              "id": "w3",
              "word": "measure"
            },
            {
              "id": "w2",
              "word": "result"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "together"
            }
          ]
        }
      }
    ],
    "intro": "677 words · 4 reading pages · 5 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  }
};
const TITLES=["At the park","On the log","A big hoop","At the flag"];
const SCENE_ALTS=["Obstacle Course cover","Obstacle Course: At the park","Obstacle Course: On the log","Obstacle Course: A big hoop","Obstacle Course: At the flag"];
window.CAMP_ART=["assets/illustrations/page-1-pixar.png","assets/illustrations/page-1-pixar.png","assets/illustrations/page-2-pixar.png","assets/illustrations/page-3-pixar.png","assets/illustrations/page-4-pixar.png"];
window.CAMP_REPORT_ART_VERSION="641702b64e2c";
window.LOWER_PICTURE_SETS={"groups":[["cone","hoop","log","map"],["foot","arms","grass","beam"],["big hoop","tunnel","head","hand"],["flag","smile","pals","path"]],"atlas":"assets/illustrations/chapter-picture-groups-v1.png"};
window.EXTRA_TASKS={"E":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A blue cone.","A yellow cone.","A red cone."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A blue hoop.","A yellow hoop.","A red hoop."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A brown log with bark.","A brown log with no bark.","A log covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A map rolled up.","A map folded shut.","A map spread out."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A foot in a red shoe.","A foot in a blue shoe.","A bare foot."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A child with arms out to the sides.","A child with arms above the head.","A child with arms down by the sides."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A brown clump of dry grass.","Grass covered in snow.","A green clump of grass."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A low metal beam.","A low wooden beam.","A tall wooden beam."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A big yellow hoop.","A big red hoop.","A big blue hoop."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A short red tunnel.","A long yellow tunnel.","A short teal tunnel."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A child with short red hair.","A child with short black hair.","A child with long black hair."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["An open hand.","A hand in a fist.","A hand holding a rope."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A red flag on a pole.","A blue flag on a pole.","A yellow flag on a pole."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A mouth with a sad frown.","An open mouth with a big smile.","A closed mouth with a small smile."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["Two pals standing together.","One pal sitting alone.","Two pals walking away."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A straight path with grass beside it.","A winding path covered in snow.","A winding path with grass beside it."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"F":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a yellow cone.","I can see a red cone.","I can see a blue cone."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a yellow hoop.","I can see a red hoop.","I can see a blue hoop."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a brown log with no bark.","I can see a log covered in snow.","I can see a brown log with bark."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a map folded shut.","I can see a map spread out.","I can see a map rolled up."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a foot in a blue shoe.","I can see a bare foot.","I can see a foot in a red shoe."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a child with arms above the head.","I can see a child with arms down by the sides.","I can see a child with arms out to the sides."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see grass covered in snow.","I can see a green clump of grass.","I can see a brown clump of dry grass."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a low wooden beam.","I can see a tall wooden beam.","I can see a low metal beam."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a big red hoop.","I can see a big blue hoop.","I can see a big yellow hoop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a long yellow tunnel.","I can see a short teal tunnel.","I can see a short red tunnel."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a child with short black hair.","I can see a child with long black hair.","I can see a child with short red hair."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a hand in a fist.","I can see a hand holding a rope.","I can see an open hand."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a blue flag on a pole.","I can see a yellow flag on a pole.","I can see a red flag on a pole."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see an open mouth with a big smile.","I can see a closed mouth with a small smile.","I can see a mouth with a sad frown."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see one pal sitting alone.","I can see two pals walking away.","I can see two pals standing together."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a winding path covered in snow.","I can see a winding path with grass beside it.","I can see a straight path with grass beside it."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"G":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a red cone.","The picture shows a blue cone.","The picture shows a yellow cone."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a red hoop.","The picture shows a blue hoop.","The picture shows a yellow hoop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a log covered in snow.","The picture shows a brown log with bark.","The picture shows a brown log with no bark."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a map spread out.","The picture shows a map rolled up.","The picture shows a map folded shut."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a bare foot.","The picture shows a foot in a red shoe.","The picture shows a foot in a blue shoe."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a child with arms down by the sides.","The picture shows a child with arms out to the sides.","The picture shows a child with arms above the head."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a green clump of grass.","The picture shows a brown clump of dry grass.","The picture shows grass covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a tall wooden beam.","The picture shows a low metal beam.","The picture shows a low wooden beam."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a big blue hoop.","The picture shows a big yellow hoop.","The picture shows a big red hoop."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a short teal tunnel.","The picture shows a short red tunnel.","The picture shows a long yellow tunnel."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a child with long black hair.","The picture shows a child with short red hair.","The picture shows a child with short black hair."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a hand holding a rope.","The picture shows an open hand.","The picture shows a hand in a fist."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a yellow flag on a pole.","The picture shows a red flag on a pole.","The picture shows a blue flag on a pole."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a closed mouth with a small smile.","The picture shows a mouth with a sad frown.","The picture shows an open mouth with a big smile."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows two pals walking away.","The picture shows two pals standing together.","The picture shows one pal sitting alone."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a winding path with grass beside it.","The picture shows a straight path with grass beside it.","The picture shows a winding path covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]}}],"L":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam traced the obstacle course on Jo’s ______.","choices":["course","log","hoop","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Red cones led to a low log, a hoop, a short tunnel, and a yellow finish ______.","choices":["hoop","tunnel","flag","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He ______ to finish before Leila.","choices":["waited","planned","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She wanted to learn how each obstacle worked before she ______ it.","choices":["tried","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo reminded them that the ______ was a place to practise, not a timed race.","choices":["cone","beam","surface","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam nodded, but his feet kept making little ______ steps.","choices":["looking","checking","running","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"His foot slipped, and he ______ onto the grass beside it.","choices":["checked","waited","stepped","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila noticed that his eyes had been fixed on the finish ______.","choices":["cone","flag","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She suggested ______ along the log instead.","choices":["looking","waiting","checking","listening"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"With Jo beside the ______, Sam tried again.","choices":["flag","cone","beam","obstacle"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"This time he ______ the other end.","choices":["checked","waited","reached","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The log had not become easier, but Sam had ______ his approach.","choices":["waited","changed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["crossed","are crossing","will cross"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila held the hoop while Sam ______ through.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He was already facing the tunnel when he remembered that she had not had a ______.","choices":["turn","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He ______, but held the hoop too high.","choices":["noticed","checked","waited","returned"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Leila could not step through without ______ her foot on the rim.","choices":["looking","checking","catching","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"\"Lower it a little,\" she ______.","choices":["waited","asked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam listened and ______ the hoop with both hands.","choices":["steadied","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are crossing","will cross","crossed"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila crawled through the tunnel, while Sam ______ at the far end.","choices":["waited","noticed","checked","guided"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"When she emerged, he ______ if she was ready for the last stretch.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They walked between the final ______ and touched the yellow flag together.","choices":["beam","surface","cones","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam had forgotten to count how long the ______ took.","choices":["route","course","surface","partner"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila chose the ______; Sam chose learning to wait.","choices":["hoop","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They ______ because both answers were true.","choices":["noticed","checked","waited","laughed"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]}}],"M":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam studied the red cones on Jo’s course ______ and planned the quickest way between them.","choices":["course","log","hoop","map"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Leila wanted to examine the low log, hoop, and ______ before she began.","choices":["hoop","flag","tunnel","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that they would not be ______.","choices":["waited","timed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The aim was to practise the obstacles and help a ______ reach the yellow finish flag.","choices":["partner","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila asked how they should take turns at the ______.","choices":["cone","beam","surface","hoop"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam said he understood, but was already ______ from one foot to the other.","choices":["looking","checking","shifting","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam hurried onto the ______ and looked towards the distant flag.","choices":["tunnel","flag","log","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"His foot slipped sideways, and he ______ onto the grass.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila suggested watching the next part of the log instead of ______ the finish.","choices":["watching","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo stood nearby while he ______ again.","choices":["noticed","checked","waited","tried"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"This time Sam spread his arms, ______ each foot carefully, and took shorter steps.","choices":["checked","waited","placed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He reached the far end without ______.","choices":["checking","rushing","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["crossed","are crossing","will cross"],"answer":2,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila held the hoop while Sam ______ through.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He turned towards the ______, then stopped when he remembered that she was still waiting.","choices":["tunnel","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam returned and held it at his own ______ height.","choices":["waiting","looking","checking","stepping"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Leila caught her foot on the lower rim and ______ him to move it down.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He ______ the hoop and held it with both hands until she was through.","choices":["waited","lowered","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"It was a small adjustment, but it ______ what Leila could do.","choices":["changed","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are crossing","will cross","crossed"],"answer":1,"skill":"Use the future tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila ______ through the short tunnel.","choices":["crawled","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam waited where she could see him and ______ whether she was ready for the final stretch.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They followed the last cones and touched the yellow ______ together.","choices":["surface","partner","flag","beam"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam had not ______ to count how many seconds they had taken.","choices":["waited","remembered","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam thought about the ______, but decided that learning to wait had been harder.","choices":["log","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He drew two figures beside the flag on his ______.","choices":["partner","route","team","map"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]}}],"N":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"No stopwatch was visible, but Sam seemed to hear one ______.","choices":["waiting","looking","checking","ticking"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He calculated how quickly he could cross the ______ and reach the yellow flag.","choices":["tunnel","flag","log","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila read the ______ card.","choices":["cone","course","tunnel","flag"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She wanted to know how the obstacles worked and how they could take ______ holding the hoop.","choices":["turns","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo described a cooperative challenge, with red cones marking the ______ and a shared finish.","choices":["flag","cone","beam","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam agreed while ______ towards the start.","choices":["looking","checking","stepping","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam’s first attempt on the log ______ quickly.","choices":["checked","waited","ended","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Looking past the wood towards the ______, he placed a foot carelessly and stepped onto the grass.","choices":["cone","flag","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"When Leila suggested ______ at his next step, he almost told her that he already knew how to walk.","choices":["looking","waiting","checking","listening"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Accepting advice felt harder than he had ______.","choices":["noticed","checked","waited","expected"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He ______ again with shorter steps and his arms spread.","choices":["checked","waited","tried","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"This time he noticed the uneven surface and crossed steadily while Jo ______ nearby.","choices":["waited","stayed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After stepping through Leila’s hoop, Sam turned towards the ______.","choices":["cone","tunnel","hoop","flag"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Her quiet reminder brought him back to offer her a ______.","choices":["turn","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The lower rim caught her foot, and she ______ him to move it down.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"At first, Sam felt irritated: he was doing the same ______, wasn’t he?","choices":["looking","checking","thing","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Then he ______ that Leila was shorter.","choices":["guided","noticed","checked","waited"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The same height ______ a different problem for her.","choices":["created","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam waited at the ______’s far end until Leila emerged.","choices":["tunnel","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They walked the last stretch together and ______ the yellow flag at the same time.","choices":["noticed","checked","waited","touched"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked which ______ had been hardest.","choices":["beam","surface","obstacle","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila chose the ______.","choices":["route","hoop","surface","partner"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam said his hardest part had been learning not to ______ the activity into a race.","choices":["turn","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The time box on Jo’s clipboard ______ empty.","choices":["noticed","checked","waited","stayed"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}}],"P":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"There was no stopwatch on Jo’s clipboard, but Sam behaved as if he could hear one ______.","choices":["waiting","looking","checking","ticking"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He studied the obstacle ______, calculating where he might gain a few seconds.","choices":["tunnel","flag","course","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila ______ the same course differently.","choices":["waited","studied","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She asked how firmly the balance beam was fixed and whether they should take ______ holding the hoop.","choices":["turns","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that this was a cooperative ______.","choices":["flag","cone","beam","challenge"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Red cones marked the route, a low log tested balance, and the yellow ______ marked a shared finish.","choices":["surface","partner","flag","beam"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila set the ______ card on a flat bench so both children could see it.","choices":["tunnel","flag","course","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Red cones connected a low log, a hoop station, a tunnel, and the yellow finish ______.","choices":["cone","flag","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ a direct line between the pictures.","choices":["traced","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila traced the spaces where a ______ might need to wait.","choices":["flag","cone","beam","partner"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They were looking at the same ______ but planning different kinds of progress.","choices":["beam","surface","route","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ each child to explain one part of the course.","choices":["waited","asked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"When Jo invited them to begin, Sam moved between the first ______ in three quick steps.","choices":["flag","cones","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila followed at a steadier pace, ______ the space ahead of her.","choices":["checking","waiting","looking","listening"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"At the ______, Sam turned to ask why she was taking so long.","choices":["cone","beam","surface","log"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The question sounded impatient even though he had meant it as a simple request for ______.","choices":["beam","surface","information","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila said she ______ to see where she would place her feet.","choices":["waited","wanted","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam looked at the log and decided that ______ along a piece of wood could not require much planning.","choices":["walking","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam hurried onto the low log, eyes fixed on the ______ beyond it.","choices":["flag","tunnel","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Before he was halfway across, his foot slid sideways and he ______ safely onto the grass.","choices":["noticed","checked","waited","stepped"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"\"Try watching where your next step goes,\" Leila ______.","choices":["checked","waited","suggested","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam almost ______ that he knew how to walk.","choices":["waited","replied","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Instead, he glanced back at the log and ______ its uneven surface.","choices":["noticed","checked","waited","guided"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"With Jo nearby, he tried again: shorter steps, arms spread, ______ on the wood in front of him.","choices":["partner","route","team","attention"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After ______ successfully, Sam stood where he could watch Leila’s feet.","choices":["waiting","looking","checking","crossing"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She moved slowly enough to adjust each step, pausing when the ______ changed beneath her shoe.","choices":["beam","partner","surface","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He nearly ______ out the advice she had given him.","choices":["waited","called","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Then he ______.","choices":["stopped","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila was already ______ careful steps, and another voice might distract her rather than help.","choices":["waiting","looking","checking","using"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"When she reached the end, Sam asked which part had ______ the most attention.","choices":["checked","waited","needed","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila picked up the yellow hoop and held it steady while Sam stood beside the marked ______ place.","choices":["looking","checking","starting","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She asked whether he was ready before lifting it into ______.","choices":["partner","position","beam","surface"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ at once.","choices":["nodded","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He had been thinking about how quickly he could pass through, not about the job Leila was ______ to keep the hoop still.","choices":["waiting","looking","checking","doing"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo asked them to keep the area clear and take one ______ at a time.","choices":["team","map","turn","route"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila checked her grip, and Sam moved to the centre of the ______.","choices":["checking","opening","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam stepped through the hoop Leila held and immediately turned towards the ______.","choices":["route","tunnel","surface","partner"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Her quiet \"My ______\" brought him back.","choices":["turn","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He held the hoop at the same height she had ______ for him.","choices":["noticed","checked","waited","used"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She stepped back, unhurt, and ______ him to lower it.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He was ______ it properly, wasn’t he?","choices":["checking","holding","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Then he ______ that Leila was shorter than he was.","choices":["noticed","checked","waited","guided"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"The ______ was short, but its entrance looked darker than Leila had expected.","choices":["tunnel","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam waited while she looked through the ______ towards the light at the other end.","choices":["waiting","looking","checking","opening"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He ______ to tell her that it was easy.","choices":["checked","waited","wanted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Instead, he ______ what would help her decide.","choices":["waited","asked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila said she wanted to see where he would wait without ______ the exit.","choices":["blocking","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ that the tunnel was clear.","choices":["noticed","waited","guided","checked"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Beyond the tunnel, only a few ______ separated the children from the yellow flag.","choices":["partner","route","team","cones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam could have ______ it in seconds if he had run ahead.","choices":["checked","waited","reached","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila ______ to brush grass from her knees.","choices":["waited","paused","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam shifted his weight, noticed the familiar urge to hurry, and ______ until she was ready to continue.","choices":["waited","noticed","checked","guided"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They followed the last part of the ______ side by side.","choices":["log","hoop","tunnel","route"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam did not need to hold ______ this time.","choices":["looking","checking","anything","waiting"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"When Leila emerged from the tunnel, Sam was ______ where she could see him.","choices":["checking","listening","waiting","looking"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He asked whether she was ready, and they ______ the last stretch together.","choices":["waited","walked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"At the flag, Jo asked them to describe their most difficult ______.","choices":["obstacle","course","log","hoop"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila chose the ______.","choices":["log","tunnel","flag","hoop"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam glanced at the ______, then said, \"The part where I had to stop making it a race.\"","choices":["flag","cone","log","tunnel"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam looked at the blank box and discovered that he did not ______ a number there.","choices":["waited","need","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}}],"R":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam read Jo’s ______ card as a list of opportunities to save time.","choices":["log","hoop","tunnel","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"The log could be crossed in a few strides, the hoop stepped through without pausing, and the ______ taken at a quick crawl.","choices":["hoop","flag","tunnel","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Was the ______ secure?","choices":["cone","log","tunnel","flag"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Who would hold the ______ first?","choices":["hoop","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Where should a ______ wait without blocking the next person?","choices":["flag","cone","beam","partner"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo explained that the ______ was cooperative.","choices":["beam","surface","challenge","cone"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the low log, Sam ______ towards the finish rather than at the wood under his feet.","choices":["checked","waited","looked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"His foot slid sideways, and he ______ off onto the grass.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"______ hurt except his sense that this part ought to have been easy.","choices":["Nothing","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila ______ shorter steps and a closer focus.","choices":["noticed","checked","waited","suggested"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had ______ to see.","choices":["checked","waited","failed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"With Jo nearby, he spread his arms and ______ again, slowly enough to respond to each change in the surface.","choices":["waited","crossed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam ______ easily through the hoop Leila held.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was ______ a fair partner.","choices":["being","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She stepped back and asked for the hoop to be ______.","choices":["noticed","checked","waited","lowered"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for ______ different?","choices":["looking","checking","something","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"The answer was visible when he stopped defending the ______.","choices":["partner","arrangement","beam","surface"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"What had been a comfortable step for Sam was an ______ of a different size for her.","choices":["obstacle","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"At the ______’s exit, Sam waited until Leila could see him before asking whether she was ready.","choices":["tunnel","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They followed the final cones and reached the yellow ______ together.","choices":["cone","beam","surface","flag"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ about difficulty rather than time.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila described the ______.","choices":["route","hoop","surface","partner"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam considered the log, then chose a less visible ______: his habit of turning every shared task into a private race.","choices":["obstacle","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"On the clipboard, the time box ______ empty.","choices":["noticed","checked","waited","remained"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]}}]};
