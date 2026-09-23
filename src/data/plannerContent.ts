/**
 * Comprehensive Content and Interactive Data from the 1273-Page
 * "2027 Life OS: Off Script Planner" by Amber Wiggins
 */

export interface LifeAuditArea {
  id: string;
  name: string;
  description: string;
}

export const LIFE_AUDIT_AREAS: LifeAuditArea[] = [
  { id: 'career', name: 'Career + Purpose', description: 'What you build and what moves the needle' },
  { id: 'money', name: 'Money + Finances', description: 'Information first, judgment never' },
  { id: 'health', name: 'Health + Energy', description: 'Fuel in the tank vs running on fumes' },
  { id: 'relationships', name: 'Relationships', description: 'The humans who actually matter' },
  { id: 'home', name: 'Home + Environment', description: 'Spaces that support your becoming' },
  { id: 'creativity', name: 'Creativity + Play', description: 'Useless, beautiful joy with no goal' },
  { id: 'growth', name: 'Personal Growth', description: 'Quiet, invisible roots taking hold' },
  { id: 'mental_health', name: 'Mental Health + Rest', description: 'Armor off, truth in, deep breath' }
];

export interface VisionDumpSection {
  id: string;
  title: string;
  prompt: string;
}

export const VISION_DUMP_AREAS: VisionDumpSection[] = [
  { id: 'career_income', title: 'Career + Income', prompt: 'Write what you WANT to feel, look, and earn without editing or filtering.' },
  { id: 'relationships', title: 'Relationships', prompt: 'Who do you want beside you? What does real intimacy look like?' },
  { id: 'health_body', title: 'Health + Body', prompt: 'How do you want your body to feel? Energy, sleep, movement.' },
  { id: 'home_space', title: 'Home + Space', prompt: 'Your environment, your sanctuary, what holds you at peace.' },
  { id: 'creativity', title: 'Creativity', prompt: 'What wild ideas want to come out when you stop optimizing?' },
  { id: 'finances', title: 'Finances', prompt: 'Numbers without shame. What does sovereignty look like?' },
  { id: 'learning', title: 'Learning', prompt: 'What curiosity rabbit holes are you claiming without asking permission?' },
  { id: 'fun_rest', title: 'Fun + Rest', prompt: 'What brings you alive purely for the sake of delight?' }
];

export interface MonthlyQuizData {
  month: number;
  monthName: string;
  title: string;
  subtitle: string;
  questions: {
    id: number;
    question: string;
    options: { key: 'A' | 'B' | 'C'; text: string }[];
  }[];
  results: {
    key: 'Mostly A' | 'Mostly B' | 'Mostly C';
    type: string;
    description: string;
  }[];
}

export const MONTHLY_QUIZZES: MonthlyQuizData[] = [
  {
    month: 1,
    monthName: "January",
    title: "What Kind of Beginner Are You?",
    subtitle: "January Self-Discovery Quiz · Knowing your style helps you work with yourself.",
    questions: [
      {
        id: 1,
        question: "When January 1st arrives, your first instinct is:",
        options: [
          { key: 'A', text: "Make a detailed plan immediately — I need a map or I'll spiral" },
          { key: 'B', text: "Jump in fast and figure it out as I go — plans slow me down" },
          { key: 'C', text: "Sit with it for a few days before deciding anything — I need to feel it first" }
        ]
      },
      {
        id: 2,
        question: "Your biggest obstacle when starting something new is:",
        options: [
          { key: 'A', text: "Perfectionism — I can't start until conditions are right" },
          { key: 'B', text: "Distraction — I start seventeen things at once and finish none" },
          { key: 'C', text: "Fear — what if I begin and then fail or change my mind?" }
        ]
      },
      {
        id: 3,
        question: "When you think about this planner, you feel:",
        options: [
          { key: 'A', text: "Excited and a little overwhelmed — there's a lot of pages" },
          { key: 'B', text: "Ready to dive in — I'll worry about doing it right later" },
          { key: 'C', text: "Cautiously hopeful — I've tried planners before and they didn't stick" }
        ]
      },
      {
        id: 4,
        question: "How do you handle it when a new beginning doesn't go the way you planned?",
        options: [
          { key: 'A', text: "I adjust the plan immediately and try again with structure" },
          { key: 'B', text: "I pivot to something else and come back to it later (maybe)" },
          { key: 'C', text: "I get frustrated, take a break, and need time to process before continuing" }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE ARCHITECT',
        description: "You begin with structure. You need a framework before you can move. This planner was built for you — use the calendar, the weekly recaps, the close-outs. They're your architecture."
      },
      {
        key: 'Mostly B',
        type: 'THE LAUNCHER',
        description: "You begin fast and loud. You'll love this planner in January and need a reminder to come back to it in March. Set a recurring check-in now before you need it."
      },
      {
        key: 'Mostly C',
        type: 'THE PROCESSOR',
        description: "You begin slowly and thoughtfully. Don't rush yourself. Use the brain dump pages first. Let yourself feel the moment before you try to organize it."
      }
    ]
  },
  {
    month: 2,
    monthName: "February",
    title: "Are You Actually Showing Up?",
    subtitle: "Showing up is not a feeling. It's a decision. No judgment, just honesty.",
    questions: [
      {
        id: 1,
        question: "When someone I care about needs me, my first honest reaction is:",
        options: [
          { key: 'A', text: "I show up even if I'm tired. That's just who I am." },
          { key: 'B', text: "I want to be there but I'm usually running on empty already." },
          { key: 'C', text: "Honestly, I look for a reason to make it someone else's problem." }
        ]
      },
      {
        id: 2,
        question: "How present am I during conversations — am I actually listening?",
        options: [
          { key: 'A', text: "Yes. I put my phone down. I make eye contact. I'm there." },
          { key: 'B', text: "I try, but my mind is usually somewhere else half the time." },
          { key: 'C', text: "I'm in the room. That's about it." }
        ]
      },
      {
        id: 3,
        question: "The way I show up for myself (rest, needs, feelings) right now is:",
        options: [
          { key: 'A', text: "I'm actually taking care of myself. It shows." },
          { key: 'B', text: "I put myself last most of the time and call it being strong." },
          { key: 'C', text: "I'm in survival mode. There's nothing left for me." }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE PRESENT ONE',
        description: "You're showing up. The work now is making sure you're not doing it at your own expense."
      },
      {
        key: 'Mostly B',
        type: 'THE STRETCHED ONE',
        description: "You want to show up. You're just spread across too many places. Something has to give."
      },
      {
        key: 'Mostly C',
        type: 'THE DEPLETED ONE',
        description: "You're not checked out on purpose. You're out of fuel. Showing up for yourself first is the only move."
      }
    ]
  },
  {
    month: 3,
    monthName: "March",
    title: "What's Your Discipline Style?",
    subtitle: "The Discipline of Growth · Chaos Year Edition · Circle who you actually are.",
    questions: [
      {
        id: 1,
        question: "When you're building a new habit, what actually works for you?",
        options: [
          { key: 'A', text: "I need a system. A schedule, a trigger, a specific time. Structure keeps me honest." },
          { key: 'B', text: "I need momentum. Once I'm going, I'm going. Starting is the hardest part." },
          { key: 'C', text: "I need to care deeply about it. If it matters to me, I'll do it slowly and steadily." }
        ]
      },
      {
        id: 2,
        question: "The 'boring middle' of building something — what do you do with it?",
        options: [
          { key: 'A', text: "Execute the plan. The boring is built into the plan. That's the point." },
          { key: 'B', text: "Struggle. I need a reason to keep going or I check out." },
          { key: 'C', text: "Live there. I actually don't mind slow. It's the pressure to go faster that gets me." }
        ]
      },
      {
        id: 3,
        question: "What does discipline actually feel like for you in your body?",
        options: [
          { key: 'A', text: "Neutral. It's just what I do. No drama." },
          { key: 'B', text: "Exciting when it's working. Painful when it's not." },
          { key: 'C', text: "Quiet. Heavy sometimes. But steady when I'm aligned with why I'm doing it." }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE SYSTEM BUILDER',
        description: "Structure is your discipline. You don't need to feel it — you need a plan. Build your systems tight and trust them."
      },
      {
        key: 'Mostly B',
        type: 'THE MOMENTUM RIDER',
        description: "You need a running start. Starts are hard, but once you're moving you're hard to stop. Learn to re-launch without a perfect moment."
      },
      {
        key: 'Mostly C',
        type: 'THE SLOW GROWER',
        description: "Depth over speed. You don't chase momentum — you build roots. Motivation is a guest; discipline is the host."
      }
    ]
  },
  {
    month: 4,
    monthName: "April",
    title: "How Do You Handle Change?",
    subtitle: "The Audacity of Change · It's not a test, it's a mirror.",
    questions: [
      {
        id: 1,
        question: "Your plans fall apart — completely, without warning. Your first move is:",
        options: [
          { key: 'A', text: "Immediately start building a new plan. Adjust and keep going." },
          { key: 'B', text: "Sit with the frustration for a while, then slowly figure out next steps." },
          { key: 'C', text: "Go quiet. Process it deeply before doing anything." }
        ]
      },
      {
        id: 2,
        question: "The unknown — that uncomfortable in-between space — feels like:",
        options: [
          { key: 'A', text: "An opening. Something new is about to happen." },
          { key: 'B', text: "Unsettling, but you can push through it if you have to." },
          { key: 'C', text: "Overwhelming. You need a lot of time to feel okay in uncertainty." }
        ]
      },
      {
        id: 3,
        question: "Honestly — when you think about who you want to become, your relationship with change is:",
        options: [
          { key: 'A', text: "An ally. You and change are on the same team." },
          { key: 'B', text: "Complicated. You want it, but it still scares you." },
          { key: 'C', text: "Difficult. You want to change — you just haven't quite started yet." }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE CHANGE AGENT',
        description: "You make change happen. You move before you're forced to, and you treat disruption as data. Lead from that place."
      },
      {
        key: 'Mostly B',
        type: 'THE RELUCTANT ADAPTER',
        description: "You adjust when you have to, and you always find your footing. The invitation is to start before the pressure builds."
      },
      {
        key: 'Mostly C',
        type: 'THE SLOW PROCESSOR',
        description: "You need time — and that's not a flaw. You always get there. The work is trusting that the process doesn't need to be fast to be real."
      }
    ]
  },
  {
    month: 7,
    monthName: "July",
    title: "How Loud Are You Living?",
    subtitle: "The Loudness of Summer · Stop shrinking to make other people comfortable.",
    questions: [
      {
        id: 1,
        question: "When you walk into a room full of people, what do you do?",
        options: [
          { key: 'A', text: "I find my people, speak up, and make myself known. I'm here and I act like it." },
          { key: 'B', text: "It depends on the room and who's in it. I adjust my energy to fit the crowd." },
          { key: 'C', text: "I stay quiet, find a corner, and wait to be included. I don't want to impose." }
        ]
      },
      {
        id: 2,
        question: "Someone tells you you're 'too much' or asks you to tone it down. You:",
        options: [
          { key: 'A', text: "Thank them for their feedback and keep being exactly who I am. Their comfort is not my job." },
          { key: 'B', text: "Laugh it off but quietly adjust. I don't want to cause friction." },
          { key: 'C', text: "Apologize immediately and stay smaller for the rest of the interaction." }
        ]
      },
      {
        id: 3,
        question: "When it comes to asking for what you want, you:",
        options: [
          { key: 'A', text: "Ask directly. If the answer is no, that's fine, but I'm always going to ask." },
          { key: 'B', text: "Drop hints and hope people pick up on it. Asking directly feels too vulnerable." },
          { key: 'C', text: "Rarely ask. I don't want to be a burden. I'll figure it out on my own." }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE ROOM FILLER',
        description: "You take up space and you know it. You don't apologize for your presence. Good. Keep going. Summer wants to see more of this."
      },
      {
        key: 'Mostly B',
        type: 'THE VOLUME ADJUSTER',
        description: "You turn yourself up and down based on who's watching. Your loudness is real — but it's conditional. Practice making it unconditional."
      },
      {
        key: 'Mostly C',
        type: 'THE SILENCER',
        description: "You make yourself small — in your words, your wants, your wins. Summer is specifically asking you to stop. Start here."
      }
    ]
  },
  {
    month: 10,
    monthName: "October",
    title: "How Honest Are You Really?",
    subtitle: "The Courage of Honesty · Raw, imperfect, no performance required.",
    questions: [
      {
        id: 1,
        question: "When someone asks how you're doing, you usually say:",
        options: [
          { key: 'A', text: "The real answer, even if it's awkward." },
          { key: 'B', text: "'Good' or 'fine' — something easy that ends the conversation." },
          { key: 'C', text: "Whatever keeps the peace and avoids a follow-up question." }
        ]
      },
      {
        id: 2,
        question: "When you tell yourself a story about why something went wrong, it's usually:",
        options: [
          { key: 'A', text: "The honest version — including your own part in it." },
          { key: 'B', text: "Mostly honest, but softened around the edges where it gets uncomfortable." },
          { key: 'C', text: "The version that makes you the least responsible." }
        ]
      },
      {
        id: 3,
        question: "When honesty would cost you something — comfort, approval, a relationship — you:",
        options: [
          { key: 'A', text: "Say it anyway. The cost of silence is higher." },
          { key: 'B', text: "Wait until the timing feels safer, which is sometimes never." },
          { key: 'C', text: "Find a way to avoid saying it at all and call it 'protecting the relationship'." }
        ]
      }
    ],
    results: [
      {
        key: 'Mostly A',
        type: 'THE TRUTH TELLER',
        description: "You say it. That's real courage. Just make sure the truth you're delivering is also landing with care."
      },
      {
        key: 'Mostly B',
        type: 'THE SELECTIVE HONEST',
        description: "You tell the truth when it's safe. The work is in saying it when it costs you something."
      },
      {
        key: 'Mostly C',
        type: 'THE AVOIDER',
        description: "The truth you keep skipping over is the one that matters most. It doesn't go away. It just waits."
      }
    ]
  }
];

export interface MonthlyWordSearchData {
  month: number;
  monthName: string;
  theme: string;
  words: string[];
  grid: string[][];
}

export const MONTHLY_WORD_SEARCHES: MonthlyWordSearchData[] = [
  {
    month: 1,
    monthName: "January",
    theme: "UNRAVEL",
    words: ["BEGIN", "START", "BRAVE", "SPARK", "CHAOS", "IGNITE", "FRESH", "FIRST", "LAUNCH", "LEAP", "BOLD", "DARE", "WILD", "RUSH", "OPEN", "PUSH"],
    grid: [
      ["Y", "E", "B", "O", "L", "D", "W", "B", "D", "J", "V", "Q"],
      ["U", "K", "W", "B", "L", "H", "J", "M", "H", "T", "R", "A"],
      ["I", "Y", "A", "P", "Y", "G", "A", "K", "Y", "B", "H", "J"],
      ["S", "Z", "O", "V", "D", "N", "R", "L", "K", "T", "I", "B"],
      ["P", "L", "R", "B", "F", "R", "H", "U", "A", "A", "M", "S"],
      ["D", "E", "X", "F", "I", "N", "B", "N", "P", "W", "O", "V"],
      ["I", "L", "X", "G", "R", "V", "T", "C", "S", "A", "J", "M"],
      ["Q", "V", "P", "E", "S", "I", "R", "H", "H", "E", "T", "I"],
      ["H", "N", "Q", "B", "T", "B", "Q", "C", "D", "N", "I", "G"],
      ["W", "A", "Y", "W", "P", "J", "O", "U", "L", "T", "J", "E"],
      ["Y", "E", "Y", "O", "X", "C", "M", "D", "T", "Y", "P", "D"],
      ["I", "L", "M", "F", "Y", "E", "T", "A", "E", "R", "C", "C"]
    ]
  },
  {
    month: 7,
    monthName: "July",
    theme: "LOUD",
    words: ["LOUD", "SHINE", "RADIANT", "ALIVE", "WILD", "JOY", "BOLD", "FREE", "SPARK", "RISE", "BRIGHT", "BLAZE"],
    grid: [
      ["G", "U", "Z", "X", "I", "G", "U", "D", "I", "B", "W", "X"],
      ["E", "E", "R", "F", "O", "I", "I", "Y", "D", "W", "O", "L"],
      ["R", "E", "G", "H", "M", "E", "Z", "A", "L", "B", "E", "K"],
      ["O", "E", "J", "K", "K", "N", "I", "Z", "Q", "T", "M", "S"],
      ["N", "O", "L", "I", "G", "H", "T", "P", "W", "H", "K", "R"],
      ["N", "Q", "E", "V", "I", "L", "A", "Z", "M", "G", "W", "K"],
      ["J", "J", "D", "B", "C", "E", "D", "R", "A", "I", "B", "W"],
      ["X", "D", "P", "L", "W", "S", "T", "A", "H", "R", "M", "O"],
      ["I", "F", "N", "Q", "E", "I", "B", "E", "M", "B", "S", "K"],
      ["D", "P", "R", "Y", "R", "R", "B", "N", "N", "Q", "H", "D"],
      ["F", "G", "W", "M", "A", "V", "T", "B", "E", "W", "I", "K"],
      ["E", "F", "W", "I", "L", "D", "A", "L", "Y", "W", "C", "Q"]
    ]
  },
  {
    month: 10,
    monthName: "October",
    theme: "RAW",
    words: ["HONEST", "TRUTH", "BRAVE", "REAL", "RAW", "DIRECT", "CLEAR", "ADMIT", "FACE", "OPEN", "BOLD", "SPEAK"],
    grid: [
      ["H", "O", "N", "E", "S", "T", "W", "R", "A", "W", "C", "A"],
      ["I", "T", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "N"],
      ["V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "H", "D"],
      ["O", "P", "E", "Q", "R", "S", "T", "U", "L", "U", "P", "I"],
      ["O", "P", "Q", "R", "S", "S", "T", "T", "U", "V", "W", "D"],
      ["Q", "R", "S", "T", "O", "W", "N", "U", "V", "W", "X", "I"],
      ["W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "R"],
      ["A", "B", "O", "P", "E", "N", "C", "D", "E", "F", "G", "E"],
      ["T", "W", "H", "O", "L", "E", "C", "D", "E", "F", "G", "C"],
      ["R", "E", "A", "L", "T", "R", "U", "T", "H", "X", "Y", "T"],
      ["B", "O", "L", "D", "S", "P", "E", "A", "K", "A", "B", "C"],
      ["A", "D", "M", "I", "T", "F", "A", "C", "E", "P", "Q", "R"]
    ]
  }
];

export interface AddressBookContact {
  id: string;
  name: string;
  phone: string;
  email: string;
  category: 'Inner Circle' | 'Creative Ally' | 'Grounding Anchor' | 'Co-Conspirator';
  notes?: string;
}
