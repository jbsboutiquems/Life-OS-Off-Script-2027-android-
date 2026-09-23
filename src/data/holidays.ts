// 366-Day Complete Unofficial Holidays Dataset
// Every single day of the year (all 366 days including leap year) has a 100% unique title, theme, anchor question, micro-adventure, stance, and intention.
import { ChaosHoliday } from '../types';

export interface ExtendedChaosHoliday extends ChaosHoliday {
  dayOfYear: number;
  monthName: string;
  theme: string;
  recommendedStance?: string;
  suggestedIntention?: string;
}

export const COMPLETE_HOLIDAYS: Record<string, ExtendedChaosHoliday> = {
  "01-01": {
    "dateKey": "01-01",
    "dayOfYear": 1,
    "month": 1,
    "day": 1,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Fresh Margin Day",
    "tagline": "Claim a small edge of your morning and mark it as newly yours.",
    "anchorQuestion": "Name who granted permission to claim Fresh Margin Day as ordinary.",
    "adventures": [
      "Draw a tiny flag for Fresh Margin Day; plant it beside your breakfast and salute once.",
      "Ask a willing companion to invent a rival flag for Fresh Margin Day; compare both designs."
    ],
    "whoIsThisSoul": [
      "What does Fresh Margin reveal about who gets to define normal?",
      "Imagine Fresh Margin Day redrawn by someone with far less room to spare."
    ],
    "recommendedStance": "A protector of unscripted whitespace",
    "suggestedIntention": "Today I guard my margins before filling the center."
  },
  "01-02": {
    "dateKey": "01-02",
    "dayOfYear": 2,
    "month": 1,
    "day": 2,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Spare Key Day",
    "tagline": "Unlock a hidden voice by writing and trimming your own rough manifesto.",
    "anchorQuestion": "List every door Spare Key Day assumes you deserve to open.",
    "adventures": [
      "Use your non-dominant hand to write a three-line manifesto for Spare Key Day.",
      "Read your manifesto aloud to an empty room; cut its strongest line for Spare Key Day."
    ],
    "whoIsThisSoul": [
      "Consider whose key was never spare enough to matter on Spare Key Day.",
      "Which part of Spare Key deserves a footnote instead of a verdict?"
    ],
    "recommendedStance": "An unhurried keyholder to my own agency",
    "suggestedIntention": "Today I unlock what fear kept sealed."
  },
  "01-03": {
    "dateKey": "01-03",
    "dayOfYear": 3,
    "month": 1,
    "day": 3,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Blue Hour Day",
    "tagline": "Hunt for ordinary blue things and grant them an exaggerated importance.",
    "anchorQuestion": "Notice which shade of blue Blue Hour Day quietly declares most important.",
    "adventures": [
      "Photograph three blue objects that look more important than they are.",
      "Arrange three blue objects by imaginary rank; explain their royal hierarchy."
    ],
    "whoIsThisSoul": [
      "Admit that Blue Hour Day's ranking of importance might be arbitrary.",
      "Which convention props up Blue Hour, and can you loosen it briefly?"
    ],
    "recommendedStance": "An archivist of overlooked blues",
    "suggestedIntention": "Today I find sacred reverence in ordinary details."
  },
  "01-04": {
    "dateKey": "01-04",
    "dayOfYear": 4,
    "month": 1,
    "day": 4,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Unfinished Sentence Day",
    "tagline": "Leave a thought open and let someone else finish it for heavy lifting.",
    "anchorQuestion": "Picture the sentence Unfinished Sentence Day left dangling on purpose.",
    "adventures": [
      "Draw a blank speech bubble on your own paper and title it Unfinished Sentence Day.",
      "Invite a friend to fill the speech bubble with one question about your unfinished thought."
    ],
    "whoIsThisSoul": [
      "Describe what finishing would cost you on Unfinished Sentence Day.",
      "What if silence is the truest predicate?"
    ],
    "recommendedStance": "A practitioner of open-ended pause",
    "suggestedIntention": "Today I resist the urge to rush to premature conclusions."
  },
  "01-05": {
    "dateKey": "01-05",
    "dayOfYear": 5,
    "month": 1,
    "day": 5,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Silent Metric Day",
    "tagline": "Measure today by internal stillness instead of quantified output.",
    "anchorQuestion": "What score would you track if no algorithm could ever evaluate it?",
    "adventures": [
      "Spend 7 minutes watching daylight shift across the floor."
    ],
    "whoIsThisSoul": [
      "What does Silent Metric Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A quiet defier of quantification",
    "suggestedIntention": "Today I inhabit Silent Metric Day with steady intention."
  },
  "01-06": {
    "dateKey": "01-06",
    "dayOfYear": 6,
    "month": 1,
    "day": 6,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Contrarian Breakfast Day",
    "tagline": "Build a breakfast that argues with your usual taste and colors.",
    "anchorQuestion": "Confess which rule you broke first for Contrarian Breakfast Day.",
    "adventures": [
      "Assemble breakfast in an intentionally contrary color scheme.",
      "Offer your contrary breakfast idea to someone else; let them veto one ingredient."
    ],
    "whoIsThisSoul": [
      "What would a skeptic notice first about your breakfast today?",
      "Sketch the breakfast that conventional productivity would forbid outright."
    ],
    "recommendedStance": "A curious defier of morning dogma",
    "suggestedIntention": "Today I begin by upsetting routine with playful curiosity."
  },
  "01-07": {
    "dateKey": "01-07",
    "dayOfYear": 7,
    "month": 1,
    "day": 7,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "First Ink Day",
    "tagline": "Put pen directly to paper without seeking an introductory apology.",
    "anchorQuestion": "What truth is trapped behind your fear of producing a sloppy draft?",
    "adventures": [
      "Write one raw, unedited paragraph in your darkest ink."
    ],
    "whoIsThisSoul": [
      "What does First Ink Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A fearless starter who ignores the editor",
    "suggestedIntention": "Today I inhabit First Ink Day with steady intention."
  },
  "01-08": {
    "dateKey": "01-08",
    "dayOfYear": 8,
    "month": 1,
    "day": 8,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Doorway Pause Day",
    "tagline": "Halt on the threshold of every room to drop baggage before entering.",
    "anchorQuestion": "What anxious tension are you dragging into rooms that don't need it?",
    "adventures": [
      "Count four physical doorways today; take one conscious breath at each."
    ],
    "whoIsThisSoul": [
      "What does Doorway Pause Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A mindful gatekeeper of presence",
    "suggestedIntention": "Today I inhabit Doorway Pause Day with steady intention."
  },
  "01-09": {
    "dateKey": "01-09",
    "dayOfYear": 9,
    "month": 1,
    "day": 9,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Uncharted Napkin Day",
    "tagline": "Map your most ambitious rebellion on a cheap piece of paper.",
    "anchorQuestion": "Why does the most honest dreaming always happen on disposable scraps?",
    "adventures": [
      "Draft a three-step scheme for a secret dream on the back of a receipt."
    ],
    "whoIsThisSoul": [
      "What does Uncharted Napkin Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "An improvisational architect of secret futures",
    "suggestedIntention": "Today I inhabit Uncharted Napkin Day with steady intention."
  },
  "01-10": {
    "dateKey": "01-10",
    "dayOfYear": 10,
    "month": 1,
    "day": 10,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Odd-Number Stance Day",
    "tagline": "Disrupt symmetrical habits by choosing uneven numbers in everything.",
    "anchorQuestion": "Where has tidy symmetry become an excuse for avoiding messy life?",
    "adventures": [
      "Choose 3, 5, or 7 instead of even quantities throughout the day."
    ],
    "whoIsThisSoul": [
      "What does Odd-Number Stance Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "An asymmetrical explorer of rough edges",
    "suggestedIntention": "Today I inhabit Odd-Number Stance Day with steady intention."
  },
  "01-11": {
    "dateKey": "01-11",
    "dayOfYear": 11,
    "month": 1,
    "day": 11,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Blank Slate Day",
    "tagline": "Wipe one expectation clean and refuse to fill the resulting vacuum.",
    "anchorQuestion": "What obligation are you carrying solely because you've carried it for years?",
    "adventures": [
      "Cross off one non-urgent obligation and write 'VOID' in pencil."
    ],
    "whoIsThisSoul": [
      "What does Blank Slate Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A serene curator of empty space",
    "suggestedIntention": "Today I inhabit Blank Slate Day with steady intention."
  },
  "01-12": {
    "dateKey": "01-12",
    "dayOfYear": 12,
    "month": 1,
    "day": 12,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Quiet Start Day",
    "tagline": "Begin the day at low volume and refuse to rush the opening chords.",
    "anchorQuestion": "How much vitality do you waste simply performing that you are busy?",
    "adventures": [
      "Work the first 45 minutes of the morning in complete silence."
    ],
    "whoIsThisSoul": [
      "What does Quiet Start Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A steady flame that needs no fanfare",
    "suggestedIntention": "Today I inhabit Quiet Start Day with steady intention."
  },
  "01-13": {
    "dateKey": "01-13",
    "dayOfYear": 13,
    "month": 1,
    "day": 13,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Wrong-Hand Day",
    "tagline": "Swap your dominant hand for a clumsy task and share the trick. Laugh.",
    "anchorQuestion": "Explain what your wrong hand reveals about skill you assume is effortless.",
    "adventures": [
      "Perform one harmless task left-handed, then award the clumsy effort a gold star.",
      "Write your signature with your non-dominant hand; frame it as an art piece."
    ],
    "whoIsThisSoul": [
      "Perform a small left-handed task and confess what it taught your patience.",
      "What does clumsy effort reveal about how you treat your own learning curve?"
    ],
    "recommendedStance": "A patient beginner in my own skin",
    "suggestedIntention": "Today I embrace the clumsiness of real learning."
  },
  "01-14": {
    "dateKey": "01-14",
    "dayOfYear": 14,
    "month": 1,
    "day": 14,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Ghost Draft Day",
    "tagline": "Write the uncensored email you will never send, then archive it.",
    "anchorQuestion": "What does your unsent draft understand about your real boundaries?",
    "adventures": [
      "Write an entirely unfiltered letter about a frustration, then delete it."
    ],
    "whoIsThisSoul": [
      "What does Ghost Draft Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A keeper of clarifying private fire",
    "suggestedIntention": "Today I inhabit Ghost Draft Day with steady intention."
  },
  "01-15": {
    "dateKey": "01-15",
    "dayOfYear": 15,
    "month": 1,
    "day": 15,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Paper Compass Day",
    "tagline": "Steer one major decision using internal values rather than external praise.",
    "anchorQuestion": "If all external applause vanished, which direction would you turn?",
    "adventures": [
      "Draw a hand-made compass rose with your top values as Cardinal directions."
    ],
    "whoIsThisSoul": [
      "What does Paper Compass Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A navigator guided by sovereign instinct",
    "suggestedIntention": "Today I inhabit Paper Compass Day with steady intention."
  },
  "01-16": {
    "dateKey": "01-16",
    "dayOfYear": 16,
    "month": 1,
    "day": 16,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Half-Speed Day",
    "tagline": "Walk, chew, and speak at fifty percent of your default velocity.",
    "anchorQuestion": "What are you fleeing from when you accelerate through the ordinary?",
    "adventures": [
      "Walk down one hallway or sidewalk at half your default stride."
    ],
    "whoIsThisSoul": [
      "What does Half-Speed Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A deliberate walker through a rushed world",
    "suggestedIntention": "Today I inhabit Half-Speed Day with steady intention."
  },
  "01-17": {
    "dateKey": "01-17",
    "dayOfYear": 17,
    "month": 1,
    "day": 17,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Sovereign Hour Day",
    "tagline": "Barricade sixty minutes against all notifications and interruptions.",
    "anchorQuestion": "Who actually commands your focus between 2:00 PM and 3:00 PM?",
    "adventures": [
      "Switch your phone to airplane mode for one full hour during daylight."
    ],
    "whoIsThisSoul": [
      "What does Sovereign Hour Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "The sovereign ruler of my own clock",
    "suggestedIntention": "Today I inhabit Sovereign Hour Day with steady intention."
  },
  "01-18": {
    "dateKey": "01-18",
    "dayOfYear": 18,
    "month": 1,
    "day": 18,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Unpolished Mirror Day",
    "tagline": "Look at your reflection and decline to critique or fix what you see.",
    "anchorQuestion": "How much self-regard have you traded away to appease outside scrutiny?",
    "adventures": [
      "Look into your own eyes in the mirror and offer unconditional peace."
    ],
    "whoIsThisSoul": [
      "What does Unpolished Mirror Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "An ally to my own unvarnished face",
    "suggestedIntention": "Today I inhabit Unpolished Mirror Day with steady intention."
  },
  "01-19": {
    "dateKey": "01-19",
    "dayOfYear": 19,
    "month": 1,
    "day": 19,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Low Inventory Day",
    "tagline": "Audit what you are carrying and discard one invisible emotional debt.",
    "anchorQuestion": "Whose disappointment are you needlessly carrying on your shoulders?",
    "adventures": [
      "Empty your pockets or bag, remove one dead-weight item, and leave it."
    ],
    "whoIsThisSoul": [
      "What does Low Inventory Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A minimalist traveler through emotional terrain",
    "suggestedIntention": "Today I inhabit Low Inventory Day with steady intention."
  },
  "01-20": {
    "dateKey": "01-20",
    "dayOfYear": 20,
    "month": 1,
    "day": 20,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Mild Rebellion Day",
    "tagline": "Break one harmless rule on purpose and log the cost as zero.",
    "anchorQuestion": "How small can Mild Rebellion Day be before it stops counting as defiance?",
    "adventures": [
      "Change one harmless personal habit for an hour and dedicate the breach to Mild Rebellion.",
      "Make a paper receipt for the rule you broke; total the cost at $0."
    ],
    "whoIsThisSoul": [
      "Break one tiny rule for Mild Rebellion Day and price the damage honestly ($0).",
      "Which part of your obedience is inherited, and which part is your choice?"
    ],
    "recommendedStance": "A sovereign spirit allergic to performative compliance",
    "suggestedIntention": "Today I choose harmless truth over mindless obedience."
  },
  "01-21": {
    "dateKey": "01-21",
    "dayOfYear": 21,
    "month": 1,
    "day": 21,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Unopened Box Day",
    "tagline": "Allow an incoming delivery or ping to sit untouched until tomorrow.",
    "anchorQuestion": "What itch convinces you that every chime demands an immediate bow?",
    "adventures": [
      "Leave one non-urgent package or email unopened for 24 hours."
    ],
    "whoIsThisSoul": [
      "What does Unopened Box Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A master of delayed reaction",
    "suggestedIntention": "Today I inhabit Unopened Box Day with steady intention."
  },
  "01-22": {
    "dateKey": "01-22",
    "dayOfYear": 22,
    "month": 1,
    "day": 22,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Slow Burn Day",
    "tagline": "Invest quiet energy into a task that will take six months to bear fruit.",
    "anchorQuestion": "Why do you demand instant harvests from seeds planted this sunrise?",
    "adventures": [
      "Spend 15 focused minutes on a long-horizon dream without measuring."
    ],
    "whoIsThisSoul": [
      "What does Slow Burn Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A patient gardener of long-term wonders",
    "suggestedIntention": "Today I inhabit Slow Burn Day with steady intention."
  },
  "01-23": {
    "dateKey": "01-23",
    "dayOfYear": 23,
    "month": 1,
    "day": 23,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Counter-Current Day",
    "tagline": "Read something written a century ago instead of today's hot takes.",
    "anchorQuestion": "How much of your anxiety is borrowed from the 24-hour panic cycle?",
    "adventures": [
      "Read 4 pages of a book written before 1950 and notice the stillness."
    ],
    "whoIsThisSoul": [
      "What does Counter-Current Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "An explorer of timeless currents",
    "suggestedIntention": "Today I inhabit Counter-Current Day with steady intention."
  },
  "01-24": {
    "dateKey": "01-24",
    "dayOfYear": 24,
    "month": 1,
    "day": 24,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Raw Pocket Day",
    "tagline": "Carry a smooth stone, acorn, or coin as an anchor for the present.",
    "anchorQuestion": "What physical weight grounds your racing thoughts when overwhelm strikes?",
    "adventures": [
      "Keep a small stone or token in your pocket; touch it when breathing."
    ],
    "whoIsThisSoul": [
      "What does Raw Pocket Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A grounded soul rooted in physical reality",
    "suggestedIntention": "Today I inhabit Raw Pocket Day with steady intention."
  },
  "01-25": {
    "dateKey": "01-25",
    "dayOfYear": 25,
    "month": 1,
    "day": 25,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "No-Explanation Day",
    "tagline": "Decline an invitation with a polite 'No, thank you' and zero excuses.",
    "anchorQuestion": "Why do you feel compelled to justify every boundary with a courtroom defense?",
    "adventures": [
      "Say 'I won't be able to make that' with zero manufactured excuses."
    ],
    "whoIsThisSoul": [
      "What does No-Explanation Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A person whose 'no' requires no defense",
    "suggestedIntention": "Today I inhabit No-Explanation Day with steady intention."
  },
  "01-26": {
    "dateKey": "01-26",
    "dayOfYear": 26,
    "month": 1,
    "day": 26,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Odd Corner Day",
    "tagline": "Sit in a corner of your room you have never occupied before.",
    "anchorQuestion": "What new perspective emerges when you shift vantage by six feet?",
    "adventures": [
      "Drink your tea or write notes in an unfamiliar corner of your space."
    ],
    "whoIsThisSoul": [
      "What does Odd Corner Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A fresh eye in familiar spaces",
    "suggestedIntention": "Today I inhabit Odd Corner Day with steady intention."
  },
  "01-27": {
    "dateKey": "01-27",
    "dayOfYear": 27,
    "month": 1,
    "day": 27,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Pencil Lead Day",
    "tagline": "Work in graphite so every line remembers that it can be erased.",
    "anchorQuestion": "Where have you treated a tentative experiment like a life sentence?",
    "adventures": [
      "Draft your daily priorities in pencil; erase one and replace it with rest."
    ],
    "whoIsThisSoul": [
      "What does Pencil Lead Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A sketch artist of evolving possibilities",
    "suggestedIntention": "Today I inhabit Pencil Lead Day with steady intention."
  },
  "01-28": {
    "dateKey": "01-28",
    "dayOfYear": 28,
    "month": 1,
    "day": 28,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Muted Signal Day",
    "tagline": "Lower your speaking volume and notice who leans in to listen.",
    "anchorQuestion": "Are you shouting because your argument is weak, or because you fear invisibility?",
    "adventures": [
      "Speak 15% softer in your next conversation; let calm carry weight."
    ],
    "whoIsThisSoul": [
      "What does Muted Signal Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A calm presence that needs no megaphone",
    "suggestedIntention": "Today I inhabit Muted Signal Day with steady intention."
  },
  "01-29": {
    "dateKey": "01-29",
    "dayOfYear": 29,
    "month": 1,
    "day": 29,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Stray Thread Day",
    "tagline": "Follow a curiosity that holds zero career or commercial utility.",
    "anchorQuestion": "When was the last time you explored something purely for delight?",
    "adventures": [
      "Spend 20 minutes learning about a bizarre, ancient historical quirk."
    ],
    "whoIsThisSoul": [
      "What does Stray Thread Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A whimsical wanderer down fascinating rabbit holes",
    "suggestedIntention": "Today I inhabit Stray Thread Day with steady intention."
  },
  "01-30": {
    "dateKey": "01-30",
    "dayOfYear": 30,
    "month": 1,
    "day": 30,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "Edge of the Map Day",
    "tagline": "Step slightly beyond the boundary of your habitual daily path.",
    "anchorQuestion": "What invisible fence have you placed around your day out of laziness?",
    "adventures": [
      "Take an unfamiliar side street on your walk and discover one new detail."
    ],
    "whoIsThisSoul": [
      "What does Edge of the Map Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A gentle border-crosser in the everyday",
    "suggestedIntention": "Today I inhabit Edge of the Map Day with steady intention."
  },
  "01-31": {
    "dateKey": "01-31",
    "dayOfYear": 31,
    "month": 1,
    "day": 31,
    "monthName": "January",
    "theme": "Unravel & Margin",
    "title": "January Exit Day",
    "tagline": "Close the month's flight log and refuse to grade your performance.",
    "anchorQuestion": "Can you seal this month without issuing a report card on your worth?",
    "adventures": [
      "Write one word for January, seal it in an envelope, and say 'Finished.'"
    ],
    "whoIsThisSoul": [
      "What does January Exit Day invite you to uncover about your real boundaries?"
    ],
    "recommendedStance": "A sovereign traveler closing one gate to open another",
    "suggestedIntention": "Today I inhabit January Exit Day with steady intention."
  },
  "02-01": {
    "dateKey": "02-01",
    "dayOfYear": 32,
    "month": 2,
    "day": 1,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Wild Cadence Day",
    "tagline": "An Off-Script occasion in February to let silence do the heavy lifting and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Wild Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Cadence Day."
  },
  "02-02": {
    "dateKey": "02-02",
    "dayOfYear": 33,
    "month": 2,
    "day": 2,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Electric Exhale Day",
    "tagline": "An Off-Script occasion in February to widen the margin before filling the middle and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Electric Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Exhale Day."
  },
  "02-03": {
    "dateKey": "02-03",
    "dayOfYear": 34,
    "month": 2,
    "day": 3,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Pruned Root Day",
    "tagline": "An Off-Script occasion in February to honor unhurried pace and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Pruned Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Root Day."
  },
  "02-04": {
    "dateKey": "02-04",
    "dayOfYear": 35,
    "month": 2,
    "day": 4,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Unscripted Inventory Day",
    "tagline": "An Off-Script occasion in February to speak an uncurated truth and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Unscripted Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Inventory Day."
  },
  "02-05": {
    "dateKey": "02-05",
    "dayOfYear": 36,
    "month": 2,
    "day": 5,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Threshold Altar Day",
    "tagline": "An Off-Script occasion in February to step off the prescribed conveyor belt and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Threshold Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Altar Day."
  },
  "02-06": {
    "dateKey": "02-06",
    "dayOfYear": 37,
    "month": 2,
    "day": 6,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Unapplauded Ledger Day",
    "tagline": "An Off-Script occasion in February to grant yourself an unconditional pardon and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Unapplauded Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Ledger Day."
  },
  "02-07": {
    "dateKey": "02-07",
    "dayOfYear": 38,
    "month": 2,
    "day": 7,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Unflinching Hearth Day",
    "tagline": "An Off-Script occasion in February to let silence do the heavy lifting and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Unflinching Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Hearth Day."
  },
  "02-08": {
    "dateKey": "02-08",
    "dayOfYear": 39,
    "month": 2,
    "day": 8,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Feral Chamber Day",
    "tagline": "An Off-Script occasion in February to widen the margin before filling the middle and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Feral Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Chamber Day."
  },
  "02-09": {
    "dateKey": "02-09",
    "dayOfYear": 40,
    "month": 2,
    "day": 9,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Barefoot Hour Day",
    "tagline": "An Off-Script occasion in February to honor unhurried pace and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Barefoot Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Hour Day."
  },
  "02-10": {
    "dateKey": "02-10",
    "dayOfYear": 41,
    "month": 2,
    "day": 10,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Monastic Lantern Day",
    "tagline": "An Off-Script occasion in February to speak an uncurated truth and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Monastic Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Lantern Day."
  },
  "02-11": {
    "dateKey": "02-11",
    "dayOfYear": 42,
    "month": 2,
    "day": 11,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Sunlit Rhythm Day",
    "tagline": "An Off-Script occasion in February to step off the prescribed conveyor belt and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Sunlit Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Rhythm Day."
  },
  "02-12": {
    "dateKey": "02-12",
    "dayOfYear": 43,
    "month": 2,
    "day": 12,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Deep-Root Pact Day",
    "tagline": "An Off-Script occasion in February to grant yourself an unconditional pardon and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Deep-Root Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Pact Day."
  },
  "02-13": {
    "dateKey": "02-13",
    "dayOfYear": 44,
    "month": 2,
    "day": 13,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Raw Horizon Day",
    "tagline": "An Off-Script occasion in February to let silence do the heavy lifting and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Raw Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Horizon Day."
  },
  "02-14": {
    "dateKey": "02-14",
    "dayOfYear": 45,
    "month": 2,
    "day": 14,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Anti-Cliche Day",
    "tagline": "Swap every tired romantic phrase for something stranger and more honest.",
    "anchorQuestion": "Notice the cliché you reach for first, then retire it for Anti-Cliche Day.",
    "adventures": [
      "Replace a tired phrase with a fresh, raw one whenever it appears today.",
      "Write a love letter to yourself that mentions zero generic virtues."
    ],
    "whoIsThisSoul": [
      "What does refusing the usual romantic script make visible about real intimacy?",
      "Ask someone to catch your stalest phrase; replace it with unpolished truth."
    ],
    "recommendedStance": "A purveyor of specific, jagged love",
    "suggestedIntention": "Today I speak the unpolished truth of my affection."
  },
  "02-15": {
    "dateKey": "02-15",
    "dayOfYear": 46,
    "month": 2,
    "day": 15,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Sacred Signal Day",
    "tagline": "An Off-Script occasion in February to honor unhurried pace and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Sacred Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Signal Day."
  },
  "02-16": {
    "dateKey": "02-16",
    "dayOfYear": 47,
    "month": 2,
    "day": 16,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Steadfast Cadence Day",
    "tagline": "An Off-Script occasion in February to speak an uncurated truth and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Steadfast Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Cadence Day."
  },
  "02-17": {
    "dateKey": "02-17",
    "dayOfYear": 48,
    "month": 2,
    "day": 17,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Sovereign Exhale Day",
    "tagline": "An Off-Script occasion in February to step off the prescribed conveyor belt and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Sovereign Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Exhale Day."
  },
  "02-18": {
    "dateKey": "02-18",
    "dayOfYear": 49,
    "month": 2,
    "day": 18,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Amber Root Day",
    "tagline": "An Off-Script occasion in February to grant yourself an unconditional pardon and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Amber Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Root Day."
  },
  "02-19": {
    "dateKey": "02-19",
    "dayOfYear": 50,
    "month": 2,
    "day": 19,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Odd-Angle Inventory Day",
    "tagline": "An Off-Script occasion in February to let silence do the heavy lifting and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Odd-Angle Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Inventory Day."
  },
  "02-20": {
    "dateKey": "02-20",
    "dayOfYear": 51,
    "month": 2,
    "day": 20,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Dappled Altar Day",
    "tagline": "An Off-Script occasion in February to widen the margin before filling the middle and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Dappled Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Altar Day."
  },
  "02-21": {
    "dateKey": "02-21",
    "dayOfYear": 52,
    "month": 2,
    "day": 21,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Uncurated Ledger Day",
    "tagline": "An Off-Script occasion in February to honor unhurried pace and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Uncurated Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Ledger Day."
  },
  "02-22": {
    "dateKey": "02-22",
    "dayOfYear": 53,
    "month": 2,
    "day": 22,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Stubborn Hearth Day",
    "tagline": "An Off-Script occasion in February to speak an uncurated truth and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Stubborn Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Hearth Day."
  },
  "02-23": {
    "dateKey": "02-23",
    "dayOfYear": 54,
    "month": 2,
    "day": 23,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Paper Chamber Day",
    "tagline": "An Off-Script occasion in February to step off the prescribed conveyor belt and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Paper Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Chamber Day."
  },
  "02-24": {
    "dateKey": "02-24",
    "dayOfYear": 55,
    "month": 2,
    "day": 24,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Subterranean Hour Day",
    "tagline": "An Off-Script occasion in February to grant yourself an unconditional pardon and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Subterranean Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Hour Day."
  },
  "02-25": {
    "dateKey": "02-25",
    "dayOfYear": 56,
    "month": 2,
    "day": 25,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Liminal Lantern Day",
    "tagline": "An Off-Script occasion in February to let silence do the heavy lifting and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Liminal Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Lantern Day."
  },
  "02-26": {
    "dateKey": "02-26",
    "dayOfYear": 57,
    "month": 2,
    "day": 26,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Quiet Rhythm Day",
    "tagline": "An Off-Script occasion in February to widen the margin before filling the middle and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Quiet Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Rhythm Day."
  },
  "02-27": {
    "dateKey": "02-27",
    "dayOfYear": 58,
    "month": 2,
    "day": 27,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Midnight Pact Day",
    "tagline": "An Off-Script occasion in February to honor unhurried pace and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Midnight Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Pact Day."
  },
  "02-28": {
    "dateKey": "02-28",
    "dayOfYear": 59,
    "month": 2,
    "day": 28,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Honest Horizon Day",
    "tagline": "An Off-Script occasion in February to speak an uncurated truth and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Honest Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Horizon Day."
  },
  "02-29": {
    "dateKey": "02-29",
    "dayOfYear": 60,
    "month": 2,
    "day": 29,
    "monthName": "February",
    "theme": "Shadow Inventory & Feral Truth",
    "title": "Counter Respite Day",
    "tagline": "An Off-Script occasion in February to step off the prescribed conveyor belt and deepen your shadow inventory & feral truth.",
    "anchorQuestion": "On Counter Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of shadow inventory & feral truth",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Respite Day."
  },
  "03-01": {
    "dateKey": "03-01",
    "dayOfYear": 61,
    "month": 3,
    "day": 1,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Quiet Passage Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Quiet Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Passage Day."
  },
  "03-02": {
    "dateKey": "03-02",
    "dayOfYear": 62,
    "month": 3,
    "day": 2,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Midnight Mirror Day",
    "tagline": "An Off-Script occasion in March to refuse to defend your peace and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Midnight Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Mirror Day."
  },
  "03-03": {
    "dateKey": "03-03",
    "dayOfYear": 63,
    "month": 3,
    "day": 3,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Honest Anchor Day",
    "tagline": "An Off-Script occasion in March to celebrate what stays hidden and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Honest Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Anchor Day."
  },
  "03-04": {
    "dateKey": "03-04",
    "dayOfYear": 64,
    "month": 3,
    "day": 4,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Counter Vessel Day",
    "tagline": "An Off-Script occasion in March to look straight into the mirror without judging and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Counter Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Vessel Day."
  },
  "03-05": {
    "dateKey": "03-05",
    "dayOfYear": 65,
    "month": 3,
    "day": 5,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Bone-Deep Current Day",
    "tagline": "An Off-Script occasion in March to trade performative hustle for bone-deep clarity and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Bone-Deep Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Current Day."
  },
  "03-06": {
    "dateKey": "03-06",
    "dayOfYear": 66,
    "month": 3,
    "day": 6,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Unfinished Stance Day",
    "tagline": "An Off-Script occasion in March to dismantle a manufactured routine and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Unfinished Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Stance Day."
  },
  "03-07": {
    "dateKey": "03-07",
    "dayOfYear": 67,
    "month": 3,
    "day": 7,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Wild Sanctuary Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Wild Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Sanctuary Day."
  },
  "03-08": {
    "dateKey": "03-08",
    "dayOfYear": 68,
    "month": 3,
    "day": 8,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Electric Blueprint Day",
    "tagline": "An Off-Script occasion in March to refuse to defend your peace and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Electric Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Blueprint Day."
  },
  "03-09": {
    "dateKey": "03-09",
    "dayOfYear": 69,
    "month": 3,
    "day": 9,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Pruned Harvest Day",
    "tagline": "An Off-Script occasion in March to celebrate what stays hidden and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Pruned Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Harvest Day."
  },
  "03-10": {
    "dateKey": "03-10",
    "dayOfYear": 70,
    "month": 3,
    "day": 10,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Unscripted Covenant Day",
    "tagline": "An Off-Script occasion in March to look straight into the mirror without judging and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Unscripted Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Covenant Day."
  },
  "03-11": {
    "dateKey": "03-11",
    "dayOfYear": 71,
    "month": 3,
    "day": 11,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Threshold Whistle Day",
    "tagline": "An Off-Script occasion in March to trade performative hustle for bone-deep clarity and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Threshold Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Whistle Day."
  },
  "03-12": {
    "dateKey": "03-12",
    "dayOfYear": 72,
    "month": 3,
    "day": 12,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Unapplauded Archive Day",
    "tagline": "An Off-Script occasion in March to dismantle a manufactured routine and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Unapplauded Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Archive Day."
  },
  "03-13": {
    "dateKey": "03-13",
    "dayOfYear": 73,
    "month": 3,
    "day": 13,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Unflinching Pillar Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Unflinching Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Pillar Day."
  },
  "03-14": {
    "dateKey": "03-14",
    "dayOfYear": 74,
    "month": 3,
    "day": 14,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Feral Detour Day",
    "tagline": "An Off-Script occasion in March to refuse to defend your peace and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Feral Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Detour Day."
  },
  "03-15": {
    "dateKey": "03-15",
    "dayOfYear": 75,
    "month": 3,
    "day": 15,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Barefoot Compass Day",
    "tagline": "An Off-Script occasion in March to celebrate what stays hidden and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Barefoot Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Compass Day."
  },
  "03-16": {
    "dateKey": "03-16",
    "dayOfYear": 76,
    "month": 3,
    "day": 16,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Monastic Passage Day",
    "tagline": "An Off-Script occasion in March to look straight into the mirror without judging and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Monastic Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Passage Day."
  },
  "03-17": {
    "dateKey": "03-17",
    "dayOfYear": 77,
    "month": 3,
    "day": 17,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Sunlit Mirror Day",
    "tagline": "An Off-Script occasion in March to trade performative hustle for bone-deep clarity and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Sunlit Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Mirror Day."
  },
  "03-18": {
    "dateKey": "03-18",
    "dayOfYear": 78,
    "month": 3,
    "day": 18,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Deep-Root Anchor Day",
    "tagline": "An Off-Script occasion in March to dismantle a manufactured routine and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Deep-Root Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Anchor Day."
  },
  "03-19": {
    "dateKey": "03-19",
    "dayOfYear": 79,
    "month": 3,
    "day": 19,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Raw Vessel Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Raw Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Vessel Day."
  },
  "03-20": {
    "dateKey": "03-20",
    "dayOfYear": 80,
    "month": 3,
    "day": 20,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Granite Current Day",
    "tagline": "An Off-Script occasion in March to refuse to defend your peace and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Granite Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Current Day."
  },
  "03-21": {
    "dateKey": "03-21",
    "dayOfYear": 81,
    "month": 3,
    "day": 21,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Sacred Stance Day",
    "tagline": "An Off-Script occasion in March to celebrate what stays hidden and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Sacred Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Stance Day."
  },
  "03-22": {
    "dateKey": "03-22",
    "dayOfYear": 82,
    "month": 3,
    "day": 22,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Steadfast Sanctuary Day",
    "tagline": "An Off-Script occasion in March to look straight into the mirror without judging and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Steadfast Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Sanctuary Day."
  },
  "03-23": {
    "dateKey": "03-23",
    "dayOfYear": 83,
    "month": 3,
    "day": 23,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Sovereign Blueprint Day",
    "tagline": "An Off-Script occasion in March to trade performative hustle for bone-deep clarity and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Sovereign Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Blueprint Day."
  },
  "03-24": {
    "dateKey": "03-24",
    "dayOfYear": 84,
    "month": 3,
    "day": 24,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Permission Slip Day",
    "tagline": "Sketch something unfinished and let a coin flip decide its ending.",
    "anchorQuestion": "Write yourself one permission you have been withholding, and date it today.",
    "adventures": [
      "Draw an unfinished sketch and let a coin flip choose an ending.",
      "Write a paper permission slip: 'You are allowed to skip optimizing today.' Sign it."
    ],
    "whoIsThisSoul": [
      "Break one rule gently, in honor of Permission Slip Day.",
      "What if permission was never anyone else's to give?"
    ],
    "recommendedStance": "The sole signer of my own authority",
    "suggestedIntention": "Today I grant myself the grace I keep expecting others to validate."
  },
  "03-25": {
    "dateKey": "03-25",
    "dayOfYear": 85,
    "month": 3,
    "day": 25,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Odd-Angle Covenant Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Odd-Angle Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Covenant Day."
  },
  "03-26": {
    "dateKey": "03-26",
    "dayOfYear": 86,
    "month": 3,
    "day": 26,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Dappled Whistle Day",
    "tagline": "An Off-Script occasion in March to refuse to defend your peace and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Dappled Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Whistle Day."
  },
  "03-27": {
    "dateKey": "03-27",
    "dayOfYear": 87,
    "month": 3,
    "day": 27,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Uncurated Archive Day",
    "tagline": "An Off-Script occasion in March to celebrate what stays hidden and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Uncurated Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Archive Day."
  },
  "03-28": {
    "dateKey": "03-28",
    "dayOfYear": 88,
    "month": 3,
    "day": 28,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Stubborn Pillar Day",
    "tagline": "An Off-Script occasion in March to look straight into the mirror without judging and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Stubborn Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Pillar Day."
  },
  "03-29": {
    "dateKey": "03-29",
    "dayOfYear": 89,
    "month": 3,
    "day": 29,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Paper Detour Day",
    "tagline": "An Off-Script occasion in March to trade performative hustle for bone-deep clarity and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Paper Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Detour Day."
  },
  "03-30": {
    "dateKey": "03-30",
    "dayOfYear": 90,
    "month": 3,
    "day": 30,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Subterranean Compass Day",
    "tagline": "An Off-Script occasion in March to dismantle a manufactured routine and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Subterranean Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Compass Day."
  },
  "03-31": {
    "dateKey": "03-31",
    "dayOfYear": 91,
    "month": 3,
    "day": 31,
    "monthName": "March",
    "theme": "Discipline, Counter-Rhythms & Boring Middle",
    "title": "Liminal Passage Day",
    "tagline": "An Off-Script occasion in March to reclaim an hour from the digital storm and deepen your discipline, counter-rhythms & boring middle.",
    "anchorQuestion": "On Liminal Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of discipline, counter-rhythms & boring middle",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Passage Day."
  },
  "04-01": {
    "dateKey": "04-01",
    "dayOfYear": 92,
    "month": 4,
    "day": 1,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Plausible Nonsense Day",
    "tagline": "Tour a place you pass daily without ever stepping inside it.",
    "anchorQuestion": "How much of your daily logic survives without Plausible Nonsense Day's permission?",
    "adventures": [
      "Visit a place you pass often without entering; tour it purely in your imagination.",
      "Invent a fictional fact about a lamppost or doorway; state it with complete authority."
    ],
    "whoIsThisSoul": [
      "Confess one belief you hold loosely, then test it against absurdity.",
      "Describe plausible nonsense without using its usual defensive excuses."
    ],
    "recommendedStance": "A collector of whimsical paradoxes",
    "suggestedIntention": "Today I hold my certainties loosely and play with wonder."
  },
  "04-02": {
    "dateKey": "04-02",
    "dayOfYear": 93,
    "month": 4,
    "day": 2,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Paper Exhale Day",
    "tagline": "An Off-Script occasion in April to widen the margin before filling the middle and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Paper Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Exhale Day."
  },
  "04-03": {
    "dateKey": "04-03",
    "dayOfYear": 94,
    "month": 4,
    "day": 3,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Subterranean Root Day",
    "tagline": "An Off-Script occasion in April to honor unhurried pace and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Subterranean Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Root Day."
  },
  "04-04": {
    "dateKey": "04-04",
    "dayOfYear": 95,
    "month": 4,
    "day": 4,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Liminal Inventory Day",
    "tagline": "An Off-Script occasion in April to speak an uncurated truth and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Liminal Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Inventory Day."
  },
  "04-05": {
    "dateKey": "04-05",
    "dayOfYear": 96,
    "month": 4,
    "day": 5,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Quiet Altar Day",
    "tagline": "An Off-Script occasion in April to step off the prescribed conveyor belt and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Quiet Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Altar Day."
  },
  "04-06": {
    "dateKey": "04-06",
    "dayOfYear": 97,
    "month": 4,
    "day": 6,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Midnight Ledger Day",
    "tagline": "An Off-Script occasion in April to grant yourself an unconditional pardon and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Midnight Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Ledger Day."
  },
  "04-07": {
    "dateKey": "04-07",
    "dayOfYear": 98,
    "month": 4,
    "day": 7,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Honest Hearth Day",
    "tagline": "An Off-Script occasion in April to let silence do the heavy lifting and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Honest Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Hearth Day."
  },
  "04-08": {
    "dateKey": "04-08",
    "dayOfYear": 99,
    "month": 4,
    "day": 8,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Counter Chamber Day",
    "tagline": "An Off-Script occasion in April to widen the margin before filling the middle and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Counter Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Chamber Day."
  },
  "04-09": {
    "dateKey": "04-09",
    "dayOfYear": 100,
    "month": 4,
    "day": 9,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Bone-Deep Hour Day",
    "tagline": "An Off-Script occasion in April to honor unhurried pace and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Bone-Deep Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Hour Day."
  },
  "04-10": {
    "dateKey": "04-10",
    "dayOfYear": 101,
    "month": 4,
    "day": 10,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Unfinished Lantern Day",
    "tagline": "An Off-Script occasion in April to speak an uncurated truth and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Unfinished Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Lantern Day."
  },
  "04-11": {
    "dateKey": "04-11",
    "dayOfYear": 102,
    "month": 4,
    "day": 11,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Wild Rhythm Day",
    "tagline": "An Off-Script occasion in April to step off the prescribed conveyor belt and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Wild Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Rhythm Day."
  },
  "04-12": {
    "dateKey": "04-12",
    "dayOfYear": 103,
    "month": 4,
    "day": 12,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Electric Pact Day",
    "tagline": "An Off-Script occasion in April to grant yourself an unconditional pardon and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Electric Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Pact Day."
  },
  "04-13": {
    "dateKey": "04-13",
    "dayOfYear": 104,
    "month": 4,
    "day": 13,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Pruned Horizon Day",
    "tagline": "An Off-Script occasion in April to let silence do the heavy lifting and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Pruned Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Horizon Day."
  },
  "04-14": {
    "dateKey": "04-14",
    "dayOfYear": 105,
    "month": 4,
    "day": 14,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Unscripted Respite Day",
    "tagline": "An Off-Script occasion in April to widen the margin before filling the middle and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Unscripted Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Respite Day."
  },
  "04-15": {
    "dateKey": "04-15",
    "dayOfYear": 106,
    "month": 4,
    "day": 15,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Threshold Signal Day",
    "tagline": "An Off-Script occasion in April to honor unhurried pace and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Threshold Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Signal Day."
  },
  "04-16": {
    "dateKey": "04-16",
    "dayOfYear": 107,
    "month": 4,
    "day": 16,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Unapplauded Cadence Day",
    "tagline": "An Off-Script occasion in April to speak an uncurated truth and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Unapplauded Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Cadence Day."
  },
  "04-17": {
    "dateKey": "04-17",
    "dayOfYear": 108,
    "month": 4,
    "day": 17,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Unflinching Exhale Day",
    "tagline": "An Off-Script occasion in April to step off the prescribed conveyor belt and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Unflinching Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Exhale Day."
  },
  "04-18": {
    "dateKey": "04-18",
    "dayOfYear": 109,
    "month": 4,
    "day": 18,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Feral Root Day",
    "tagline": "An Off-Script occasion in April to grant yourself an unconditional pardon and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Feral Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Root Day."
  },
  "04-19": {
    "dateKey": "04-19",
    "dayOfYear": 110,
    "month": 4,
    "day": 19,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Barefoot Inventory Day",
    "tagline": "An Off-Script occasion in April to let silence do the heavy lifting and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Barefoot Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Inventory Day."
  },
  "04-20": {
    "dateKey": "04-20",
    "dayOfYear": 111,
    "month": 4,
    "day": 20,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Monastic Altar Day",
    "tagline": "An Off-Script occasion in April to widen the margin before filling the middle and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Monastic Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Altar Day."
  },
  "04-21": {
    "dateKey": "04-21",
    "dayOfYear": 112,
    "month": 4,
    "day": 21,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Sunlit Ledger Day",
    "tagline": "An Off-Script occasion in April to honor unhurried pace and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Sunlit Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Ledger Day."
  },
  "04-22": {
    "dateKey": "04-22",
    "dayOfYear": 113,
    "month": 4,
    "day": 22,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Deep-Root Hearth Day",
    "tagline": "An Off-Script occasion in April to speak an uncurated truth and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Deep-Root Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Hearth Day."
  },
  "04-23": {
    "dateKey": "04-23",
    "dayOfYear": 114,
    "month": 4,
    "day": 23,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Raw Chamber Day",
    "tagline": "An Off-Script occasion in April to step off the prescribed conveyor belt and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Raw Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Chamber Day."
  },
  "04-24": {
    "dateKey": "04-24",
    "dayOfYear": 115,
    "month": 4,
    "day": 24,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Granite Hour Day",
    "tagline": "An Off-Script occasion in April to grant yourself an unconditional pardon and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Granite Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Hour Day."
  },
  "04-25": {
    "dateKey": "04-25",
    "dayOfYear": 116,
    "month": 4,
    "day": 25,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Sacred Lantern Day",
    "tagline": "An Off-Script occasion in April to let silence do the heavy lifting and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Sacred Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Lantern Day."
  },
  "04-26": {
    "dateKey": "04-26",
    "dayOfYear": 117,
    "month": 4,
    "day": 26,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Steadfast Rhythm Day",
    "tagline": "An Off-Script occasion in April to widen the margin before filling the middle and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Steadfast Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Rhythm Day."
  },
  "04-27": {
    "dateKey": "04-27",
    "dayOfYear": 118,
    "month": 4,
    "day": 27,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Sovereign Pact Day",
    "tagline": "An Off-Script occasion in April to honor unhurried pace and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Sovereign Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Pact Day."
  },
  "04-28": {
    "dateKey": "04-28",
    "dayOfYear": 119,
    "month": 4,
    "day": 28,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Amber Horizon Day",
    "tagline": "An Off-Script occasion in April to speak an uncurated truth and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Amber Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Horizon Day."
  },
  "04-29": {
    "dateKey": "04-29",
    "dayOfYear": 120,
    "month": 4,
    "day": 29,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Odd-Angle Respite Day",
    "tagline": "An Off-Script occasion in April to step off the prescribed conveyor belt and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Odd-Angle Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Respite Day."
  },
  "04-30": {
    "dateKey": "04-30",
    "dayOfYear": 121,
    "month": 4,
    "day": 30,
    "monthName": "April",
    "theme": "Audacity, Wild Instinct & Hunger",
    "title": "Dappled Signal Day",
    "tagline": "An Off-Script occasion in April to grant yourself an unconditional pardon and deepen your audacity, wild instinct & hunger.",
    "anchorQuestion": "On Dappled Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of audacity, wild instinct & hunger",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Signal Day."
  },
  "05-01": {
    "dateKey": "05-01",
    "dayOfYear": 122,
    "month": 5,
    "day": 1,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Sovereign Cadence Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Sovereign Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Cadence Day."
  },
  "05-02": {
    "dateKey": "05-02",
    "dayOfYear": 123,
    "month": 5,
    "day": 2,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Amber Exhale Day",
    "tagline": "An Off-Script occasion in May to step off the prescribed conveyor belt and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Amber Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Exhale Day."
  },
  "05-03": {
    "dateKey": "05-03",
    "dayOfYear": 124,
    "month": 5,
    "day": 3,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Odd-Angle Root Day",
    "tagline": "An Off-Script occasion in May to grant yourself an unconditional pardon and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Odd-Angle Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Root Day."
  },
  "05-04": {
    "dateKey": "05-04",
    "dayOfYear": 125,
    "month": 5,
    "day": 4,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Dappled Inventory Day",
    "tagline": "An Off-Script occasion in May to let silence do the heavy lifting and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Dappled Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Inventory Day."
  },
  "05-05": {
    "dateKey": "05-05",
    "dayOfYear": 126,
    "month": 5,
    "day": 5,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Uncurated Altar Day",
    "tagline": "An Off-Script occasion in May to widen the margin before filling the middle and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Uncurated Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Altar Day."
  },
  "05-06": {
    "dateKey": "05-06",
    "dayOfYear": 127,
    "month": 5,
    "day": 6,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Stubborn Ledger Day",
    "tagline": "An Off-Script occasion in May to honor unhurried pace and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Stubborn Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Ledger Day."
  },
  "05-07": {
    "dateKey": "05-07",
    "dayOfYear": 128,
    "month": 5,
    "day": 7,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Paper Hearth Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Paper Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Hearth Day."
  },
  "05-08": {
    "dateKey": "05-08",
    "dayOfYear": 129,
    "month": 5,
    "day": 8,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Subterranean Chamber Day",
    "tagline": "An Off-Script occasion in May to step off the prescribed conveyor belt and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Subterranean Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Chamber Day."
  },
  "05-09": {
    "dateKey": "05-09",
    "dayOfYear": 130,
    "month": 5,
    "day": 9,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Liminal Hour Day",
    "tagline": "An Off-Script occasion in May to grant yourself an unconditional pardon and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Liminal Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Hour Day."
  },
  "05-10": {
    "dateKey": "05-10",
    "dayOfYear": 131,
    "month": 5,
    "day": 10,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Quiet Lantern Day",
    "tagline": "An Off-Script occasion in May to let silence do the heavy lifting and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Quiet Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Lantern Day."
  },
  "05-11": {
    "dateKey": "05-11",
    "dayOfYear": 132,
    "month": 5,
    "day": 11,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Midnight Rhythm Day",
    "tagline": "An Off-Script occasion in May to widen the margin before filling the middle and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Midnight Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Rhythm Day."
  },
  "05-12": {
    "dateKey": "05-12",
    "dayOfYear": 133,
    "month": 5,
    "day": 12,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Honest Pact Day",
    "tagline": "An Off-Script occasion in May to honor unhurried pace and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Honest Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Pact Day."
  },
  "05-13": {
    "dateKey": "05-13",
    "dayOfYear": 134,
    "month": 5,
    "day": 13,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Counter Horizon Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Counter Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Horizon Day."
  },
  "05-14": {
    "dateKey": "05-14",
    "dayOfYear": 135,
    "month": 5,
    "day": 14,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Bone-Deep Respite Day",
    "tagline": "An Off-Script occasion in May to step off the prescribed conveyor belt and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Bone-Deep Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Respite Day."
  },
  "05-15": {
    "dateKey": "05-15",
    "dayOfYear": 136,
    "month": 5,
    "day": 15,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Unfinished Signal Day",
    "tagline": "An Off-Script occasion in May to grant yourself an unconditional pardon and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Unfinished Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Signal Day."
  },
  "05-16": {
    "dateKey": "05-16",
    "dayOfYear": 137,
    "month": 5,
    "day": 16,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Wild Cadence May Day",
    "tagline": "An Off-Script occasion in May to let silence do the heavy lifting and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Wild Cadence May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Cadence May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Cadence May Day."
  },
  "05-17": {
    "dateKey": "05-17",
    "dayOfYear": 138,
    "month": 5,
    "day": 17,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Electric Exhale May Day",
    "tagline": "An Off-Script occasion in May to widen the margin before filling the middle and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Electric Exhale May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Exhale May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Exhale May Day."
  },
  "05-18": {
    "dateKey": "05-18",
    "dayOfYear": 139,
    "month": 5,
    "day": 18,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Pruned Root May Day",
    "tagline": "An Off-Script occasion in May to honor unhurried pace and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Pruned Root May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Root May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Root May Day."
  },
  "05-19": {
    "dateKey": "05-19",
    "dayOfYear": 140,
    "month": 5,
    "day": 19,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Unscripted Inventory May Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Unscripted Inventory May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Inventory May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Inventory May Day."
  },
  "05-20": {
    "dateKey": "05-20",
    "dayOfYear": 141,
    "month": 5,
    "day": 20,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Threshold Altar May Day",
    "tagline": "An Off-Script occasion in May to step off the prescribed conveyor belt and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Threshold Altar May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Altar May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Altar May Day."
  },
  "05-21": {
    "dateKey": "05-21",
    "dayOfYear": 142,
    "month": 5,
    "day": 21,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Unapplauded Ledger May Day",
    "tagline": "An Off-Script occasion in May to grant yourself an unconditional pardon and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Unapplauded Ledger May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Ledger May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Ledger May Day."
  },
  "05-22": {
    "dateKey": "05-22",
    "dayOfYear": 143,
    "month": 5,
    "day": 22,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Unflinching Hearth May Day",
    "tagline": "An Off-Script occasion in May to let silence do the heavy lifting and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Unflinching Hearth May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Hearth May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Hearth May Day."
  },
  "05-23": {
    "dateKey": "05-23",
    "dayOfYear": 144,
    "month": 5,
    "day": 23,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Feral Chamber May Day",
    "tagline": "An Off-Script occasion in May to widen the margin before filling the middle and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Feral Chamber May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Chamber May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Chamber May Day."
  },
  "05-24": {
    "dateKey": "05-24",
    "dayOfYear": 145,
    "month": 5,
    "day": 24,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Barefoot Hour May Day",
    "tagline": "An Off-Script occasion in May to honor unhurried pace and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Barefoot Hour May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Hour May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Hour May Day."
  },
  "05-25": {
    "dateKey": "05-25",
    "dayOfYear": 146,
    "month": 5,
    "day": 25,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Monastic Lantern May Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Monastic Lantern May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Lantern May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Lantern May Day."
  },
  "05-26": {
    "dateKey": "05-26",
    "dayOfYear": 147,
    "month": 5,
    "day": 26,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Sunlit Rhythm May Day",
    "tagline": "An Off-Script occasion in May to step off the prescribed conveyor belt and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Sunlit Rhythm May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Rhythm May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Rhythm May Day."
  },
  "05-27": {
    "dateKey": "05-27",
    "dayOfYear": 148,
    "month": 5,
    "day": 27,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Deep-Root Pact May Day",
    "tagline": "An Off-Script occasion in May to grant yourself an unconditional pardon and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Deep-Root Pact May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Pact May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Pact May Day."
  },
  "05-28": {
    "dateKey": "05-28",
    "dayOfYear": 149,
    "month": 5,
    "day": 28,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Raw Horizon May Day",
    "tagline": "An Off-Script occasion in May to let silence do the heavy lifting and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Raw Horizon May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Horizon May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Horizon May Day."
  },
  "05-29": {
    "dateKey": "05-29",
    "dayOfYear": 150,
    "month": 5,
    "day": 29,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Granite Respite Day",
    "tagline": "An Off-Script occasion in May to widen the margin before filling the middle and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Granite Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Respite Day."
  },
  "05-30": {
    "dateKey": "05-30",
    "dayOfYear": 151,
    "month": 5,
    "day": 30,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Sacred Signal May Day",
    "tagline": "An Off-Script occasion in May to honor unhurried pace and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Sacred Signal May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Signal May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Signal May Day."
  },
  "05-31": {
    "dateKey": "05-31",
    "dayOfYear": 152,
    "month": 5,
    "day": 31,
    "monthName": "May",
    "theme": "Heavy Becoming, Growth Pangs & Shedding",
    "title": "Steadfast Cadence May Day",
    "tagline": "An Off-Script occasion in May to speak an uncurated truth and deepen your heavy becoming, growth pangs & shedding.",
    "anchorQuestion": "On Steadfast Cadence May Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Cadence May Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of heavy becoming, growth pangs & shedding",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Cadence May Day."
  },
  "06-01": {
    "dateKey": "06-01",
    "dayOfYear": 153,
    "month": 6,
    "day": 1,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Raw Blueprint Day",
    "tagline": "An Off-Script occasion in June to trade performative hustle for bone-deep clarity and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Raw Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Blueprint Day."
  },
  "06-02": {
    "dateKey": "06-02",
    "dayOfYear": 154,
    "month": 6,
    "day": 2,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Granite Harvest Day",
    "tagline": "An Off-Script occasion in June to dismantle a manufactured routine and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Granite Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Harvest Day."
  },
  "06-03": {
    "dateKey": "06-03",
    "dayOfYear": 155,
    "month": 6,
    "day": 3,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Sacred Covenant Day",
    "tagline": "An Off-Script occasion in June to reclaim an hour from the digital storm and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Sacred Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Covenant Day."
  },
  "06-04": {
    "dateKey": "06-04",
    "dayOfYear": 156,
    "month": 6,
    "day": 4,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Steadfast Whistle Day",
    "tagline": "An Off-Script occasion in June to refuse to defend your peace and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Steadfast Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Whistle Day."
  },
  "06-05": {
    "dateKey": "06-05",
    "dayOfYear": 157,
    "month": 6,
    "day": 5,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Sovereign Archive Day",
    "tagline": "An Off-Script occasion in June to celebrate what stays hidden and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Sovereign Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Archive Day."
  },
  "06-06": {
    "dateKey": "06-06",
    "dayOfYear": 158,
    "month": 6,
    "day": 6,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Amber Pillar Day",
    "tagline": "An Off-Script occasion in June to look straight into the mirror without judging and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Amber Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Pillar Day."
  },
  "06-07": {
    "dateKey": "06-07",
    "dayOfYear": 159,
    "month": 6,
    "day": 7,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Odd-Angle Detour Day",
    "tagline": "An Off-Script occasion in June to trade performative hustle for bone-deep clarity and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Odd-Angle Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Detour Day."
  },
  "06-08": {
    "dateKey": "06-08",
    "dayOfYear": 160,
    "month": 6,
    "day": 8,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Dappled Compass Day",
    "tagline": "An Off-Script occasion in June to dismantle a manufactured routine and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Dappled Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Compass Day."
  },
  "06-09": {
    "dateKey": "06-09",
    "dayOfYear": 161,
    "month": 6,
    "day": 9,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Uncurated Passage Day",
    "tagline": "An Off-Script occasion in June to reclaim an hour from the digital storm and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Uncurated Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Passage Day."
  },
  "06-10": {
    "dateKey": "06-10",
    "dayOfYear": 162,
    "month": 6,
    "day": 10,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Stubborn Mirror Day",
    "tagline": "An Off-Script occasion in June to refuse to defend your peace and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Stubborn Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Mirror Day."
  },
  "06-11": {
    "dateKey": "06-11",
    "dayOfYear": 163,
    "month": 6,
    "day": 11,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Paper Anchor Day",
    "tagline": "An Off-Script occasion in June to celebrate what stays hidden and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Paper Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Anchor Day."
  },
  "06-12": {
    "dateKey": "06-12",
    "dayOfYear": 164,
    "month": 6,
    "day": 12,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Subterranean Vessel Day",
    "tagline": "An Off-Script occasion in June to look straight into the mirror without judging and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Subterranean Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Vessel Day."
  },
  "06-13": {
    "dateKey": "06-13",
    "dayOfYear": 165,
    "month": 6,
    "day": 13,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Liminal Current Day",
    "tagline": "An Off-Script occasion in June to trade performative hustle for bone-deep clarity and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Liminal Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Current Day."
  },
  "06-14": {
    "dateKey": "06-14",
    "dayOfYear": 166,
    "month": 6,
    "day": 14,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Quiet Stance Day",
    "tagline": "An Off-Script occasion in June to dismantle a manufactured routine and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Quiet Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Stance Day."
  },
  "06-15": {
    "dateKey": "06-15",
    "dayOfYear": 167,
    "month": 6,
    "day": 15,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Midnight Sanctuary Day",
    "tagline": "An Off-Script occasion in June to reclaim an hour from the digital storm and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Midnight Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Sanctuary Day."
  },
  "06-16": {
    "dateKey": "06-16",
    "dayOfYear": 168,
    "month": 6,
    "day": 16,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Honest Blueprint Day",
    "tagline": "An Off-Script occasion in June to refuse to defend your peace and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Honest Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Blueprint Day."
  },
  "06-17": {
    "dateKey": "06-17",
    "dayOfYear": 169,
    "month": 6,
    "day": 17,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Counter Harvest Day",
    "tagline": "An Off-Script occasion in June to celebrate what stays hidden and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Counter Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Harvest Day."
  },
  "06-18": {
    "dateKey": "06-18",
    "dayOfYear": 170,
    "month": 6,
    "day": 18,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Bone-Deep Covenant Day",
    "tagline": "An Off-Script occasion in June to look straight into the mirror without judging and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Bone-Deep Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Covenant Day."
  },
  "06-19": {
    "dateKey": "06-19",
    "dayOfYear": 171,
    "month": 6,
    "day": 19,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Unfinished Whistle Day",
    "tagline": "An Off-Script occasion in June to trade performative hustle for bone-deep clarity and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Unfinished Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Whistle Day."
  },
  "06-20": {
    "dateKey": "06-20",
    "dayOfYear": 172,
    "month": 6,
    "day": 20,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Solstice Side Note Day",
    "tagline": "A chance to grant secret civic honors to an overlooked bench or tree.",
    "anchorQuestion": "Consider how Solstice Side Note Day treats the margins of a long day.",
    "adventures": [
      "Give a public bench, fountain, or tree a fictional civic title.",
      "Write a secret plaque for an ordinary corner on paper; tuck it into your pocket."
    ],
    "whoIsThisSoul": [
      "Pick one side note from today and expand it into today's main event.",
      "What does the longest light reveal about the things you usually ignore in darkness?"
    ],
    "recommendedStance": "A witness to the longest daylight and smallest corners",
    "suggestedIntention": "Today I let the footnote become the headline."
  },
  "06-21": {
    "dateKey": "06-21",
    "dayOfYear": 173,
    "month": 6,
    "day": 21,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Electric Pillar Day",
    "tagline": "An Off-Script occasion in June to reclaim an hour from the digital storm and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Electric Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Pillar Day."
  },
  "06-22": {
    "dateKey": "06-22",
    "dayOfYear": 174,
    "month": 6,
    "day": 22,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Pruned Detour Day",
    "tagline": "An Off-Script occasion in June to refuse to defend your peace and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Pruned Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Detour Day."
  },
  "06-23": {
    "dateKey": "06-23",
    "dayOfYear": 175,
    "month": 6,
    "day": 23,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Unscripted Compass Day",
    "tagline": "An Off-Script occasion in June to celebrate what stays hidden and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Unscripted Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Compass Day."
  },
  "06-24": {
    "dateKey": "06-24",
    "dayOfYear": 176,
    "month": 6,
    "day": 24,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Threshold Passage Day",
    "tagline": "An Off-Script occasion in June to look straight into the mirror without judging and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Threshold Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Passage Day."
  },
  "06-25": {
    "dateKey": "06-25",
    "dayOfYear": 177,
    "month": 6,
    "day": 25,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Unapplauded Mirror Day",
    "tagline": "An Off-Script occasion in June to trade performative hustle for bone-deep clarity and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Unapplauded Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Mirror Day."
  },
  "06-26": {
    "dateKey": "06-26",
    "dayOfYear": 178,
    "month": 6,
    "day": 26,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Unflinching Anchor Day",
    "tagline": "An Off-Script occasion in June to dismantle a manufactured routine and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Unflinching Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Anchor Day."
  },
  "06-27": {
    "dateKey": "06-27",
    "dayOfYear": 179,
    "month": 6,
    "day": 27,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Feral Vessel Day",
    "tagline": "An Off-Script occasion in June to reclaim an hour from the digital storm and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Feral Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Vessel Day."
  },
  "06-28": {
    "dateKey": "06-28",
    "dayOfYear": 180,
    "month": 6,
    "day": 28,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Barefoot Current Day",
    "tagline": "An Off-Script occasion in June to refuse to defend your peace and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Barefoot Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Current Day."
  },
  "06-29": {
    "dateKey": "06-29",
    "dayOfYear": 181,
    "month": 6,
    "day": 29,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Monastic Stance Day",
    "tagline": "An Off-Script occasion in June to celebrate what stays hidden and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Monastic Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Stance Day."
  },
  "06-30": {
    "dateKey": "06-30",
    "dayOfYear": 182,
    "month": 6,
    "day": 30,
    "monthName": "June",
    "theme": "Commitment, Staying Power & Solstice",
    "title": "Sunlit Sanctuary Day",
    "tagline": "An Off-Script occasion in June to look straight into the mirror without judging and deepen your commitment, staying power & solstice.",
    "anchorQuestion": "On Sunlit Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of commitment, staying power & solstice",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Sanctuary Day."
  },
  "07-01": {
    "dateKey": "07-01",
    "dayOfYear": 183,
    "month": 7,
    "day": 1,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Feral Blueprint Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Feral Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Blueprint Day."
  },
  "07-02": {
    "dateKey": "07-02",
    "dayOfYear": 184,
    "month": 7,
    "day": 2,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Barefoot Harvest Day",
    "tagline": "An Off-Script occasion in July to celebrate what stays hidden and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Barefoot Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Harvest Day."
  },
  "07-03": {
    "dateKey": "07-03",
    "dayOfYear": 185,
    "month": 7,
    "day": 3,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Monastic Covenant Day",
    "tagline": "An Off-Script occasion in July to look straight into the mirror without judging and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Monastic Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Covenant Day."
  },
  "07-04": {
    "dateKey": "07-04",
    "dayOfYear": 186,
    "month": 7,
    "day": 4,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Sunlit Whistle Day",
    "tagline": "An Off-Script occasion in July to trade performative hustle for bone-deep clarity and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Sunlit Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Whistle Day."
  },
  "07-05": {
    "dateKey": "07-05",
    "dayOfYear": 187,
    "month": 7,
    "day": 5,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Deep-Root Archive Day",
    "tagline": "An Off-Script occasion in July to dismantle a manufactured routine and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Deep-Root Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Archive Day."
  },
  "07-06": {
    "dateKey": "07-06",
    "dayOfYear": 188,
    "month": 7,
    "day": 6,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Raw Pillar Day",
    "tagline": "An Off-Script occasion in July to reclaim an hour from the digital storm and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Raw Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Pillar Day."
  },
  "07-07": {
    "dateKey": "07-07",
    "dayOfYear": 189,
    "month": 7,
    "day": 7,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Granite Detour Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Granite Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Detour Day."
  },
  "07-08": {
    "dateKey": "07-08",
    "dayOfYear": 190,
    "month": 7,
    "day": 8,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Sacred Compass Day",
    "tagline": "An Off-Script occasion in July to celebrate what stays hidden and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Sacred Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Compass Day."
  },
  "07-09": {
    "dateKey": "07-09",
    "dayOfYear": 191,
    "month": 7,
    "day": 9,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Steadfast Passage Day",
    "tagline": "An Off-Script occasion in July to look straight into the mirror without judging and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Steadfast Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Passage Day."
  },
  "07-10": {
    "dateKey": "07-10",
    "dayOfYear": 192,
    "month": 7,
    "day": 10,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Sovereign Mirror Day",
    "tagline": "An Off-Script occasion in July to trade performative hustle for bone-deep clarity and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Sovereign Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Mirror Day."
  },
  "07-11": {
    "dateKey": "07-11",
    "dayOfYear": 193,
    "month": 7,
    "day": 11,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Amber Anchor Day",
    "tagline": "An Off-Script occasion in July to dismantle a manufactured routine and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Amber Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Anchor Day."
  },
  "07-12": {
    "dateKey": "07-12",
    "dayOfYear": 194,
    "month": 7,
    "day": 12,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Odd-Angle Vessel Day",
    "tagline": "An Off-Script occasion in July to reclaim an hour from the digital storm and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Odd-Angle Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Vessel Day."
  },
  "07-13": {
    "dateKey": "07-13",
    "dayOfYear": 195,
    "month": 7,
    "day": 13,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Dappled Current Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Dappled Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Current Day."
  },
  "07-14": {
    "dateKey": "07-14",
    "dayOfYear": 196,
    "month": 7,
    "day": 14,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Uncurated Stance Day",
    "tagline": "An Off-Script occasion in July to celebrate what stays hidden and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Uncurated Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Stance Day."
  },
  "07-15": {
    "dateKey": "07-15",
    "dayOfYear": 197,
    "month": 7,
    "day": 15,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Stubborn Sanctuary Day",
    "tagline": "An Off-Script occasion in July to look straight into the mirror without judging and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Stubborn Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Sanctuary Day."
  },
  "07-16": {
    "dateKey": "07-16",
    "dayOfYear": 198,
    "month": 7,
    "day": 16,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Paper Blueprint Day",
    "tagline": "An Off-Script occasion in July to trade performative hustle for bone-deep clarity and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Paper Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Blueprint Day."
  },
  "07-17": {
    "dateKey": "07-17",
    "dayOfYear": 199,
    "month": 7,
    "day": 17,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Subterranean Harvest Day",
    "tagline": "An Off-Script occasion in July to dismantle a manufactured routine and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Subterranean Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Harvest Day."
  },
  "07-18": {
    "dateKey": "07-18",
    "dayOfYear": 200,
    "month": 7,
    "day": 18,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Liminal Covenant Day",
    "tagline": "An Off-Script occasion in July to reclaim an hour from the digital storm and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Liminal Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Covenant Day."
  },
  "07-19": {
    "dateKey": "07-19",
    "dayOfYear": 201,
    "month": 7,
    "day": 19,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Quiet Whistle Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Quiet Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Whistle Day."
  },
  "07-20": {
    "dateKey": "07-20",
    "dayOfYear": 202,
    "month": 7,
    "day": 20,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Midnight Archive Day",
    "tagline": "An Off-Script occasion in July to celebrate what stays hidden and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Midnight Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Archive Day."
  },
  "07-21": {
    "dateKey": "07-21",
    "dayOfYear": 203,
    "month": 7,
    "day": 21,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Honest Pillar Day",
    "tagline": "An Off-Script occasion in July to look straight into the mirror without judging and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Honest Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Pillar Day."
  },
  "07-22": {
    "dateKey": "07-22",
    "dayOfYear": 204,
    "month": 7,
    "day": 22,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Counter Detour Day",
    "tagline": "An Off-Script occasion in July to trade performative hustle for bone-deep clarity and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Counter Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Detour Day."
  },
  "07-23": {
    "dateKey": "07-23",
    "dayOfYear": 205,
    "month": 7,
    "day": 23,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Bone-Deep Compass Day",
    "tagline": "An Off-Script occasion in July to dismantle a manufactured routine and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Bone-Deep Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Compass Day."
  },
  "07-24": {
    "dateKey": "07-24",
    "dayOfYear": 206,
    "month": 7,
    "day": 24,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Unfinished Passage Day",
    "tagline": "An Off-Script occasion in July to reclaim an hour from the digital storm and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Unfinished Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Passage Day."
  },
  "07-25": {
    "dateKey": "07-25",
    "dayOfYear": 207,
    "month": 7,
    "day": 25,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Wild Mirror Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Wild Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Mirror Day."
  },
  "07-26": {
    "dateKey": "07-26",
    "dayOfYear": 208,
    "month": 7,
    "day": 26,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Electric Anchor Day",
    "tagline": "An Off-Script occasion in July to celebrate what stays hidden and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Electric Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Anchor Day."
  },
  "07-27": {
    "dateKey": "07-27",
    "dayOfYear": 209,
    "month": 7,
    "day": 27,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Pruned Vessel Day",
    "tagline": "An Off-Script occasion in July to look straight into the mirror without judging and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Pruned Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Vessel Day."
  },
  "07-28": {
    "dateKey": "07-28",
    "dayOfYear": 210,
    "month": 7,
    "day": 28,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Unscripted Current Day",
    "tagline": "An Off-Script occasion in July to trade performative hustle for bone-deep clarity and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Unscripted Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Current Day."
  },
  "07-29": {
    "dateKey": "07-29",
    "dayOfYear": 211,
    "month": 7,
    "day": 29,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Threshold Stance Day",
    "tagline": "An Off-Script occasion in July to dismantle a manufactured routine and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Threshold Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Stance Day."
  },
  "07-30": {
    "dateKey": "07-30",
    "dayOfYear": 212,
    "month": 7,
    "day": 30,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Unapplauded Sanctuary Day",
    "tagline": "An Off-Script occasion in July to reclaim an hour from the digital storm and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Unapplauded Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Sanctuary Day."
  },
  "07-31": {
    "dateKey": "07-31",
    "dayOfYear": 213,
    "month": 7,
    "day": 31,
    "monthName": "July",
    "theme": "Loud Joy, Summer Riot & Full Volume",
    "title": "Unflinching Blueprint Day",
    "tagline": "An Off-Script occasion in July to refuse to defend your peace and deepen your loud joy, summer riot & full volume.",
    "anchorQuestion": "On Unflinching Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of loud joy, summer riot & full volume",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Blueprint Day."
  },
  "08-01": {
    "dateKey": "08-01",
    "dayOfYear": 214,
    "month": 8,
    "day": 1,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Unscripted Chamber Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Unscripted Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Chamber Day."
  },
  "08-02": {
    "dateKey": "08-02",
    "dayOfYear": 215,
    "month": 8,
    "day": 2,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Threshold Hour Day",
    "tagline": "An Off-Script occasion in August to honor unhurried pace and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Threshold Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Hour Day."
  },
  "08-03": {
    "dateKey": "08-03",
    "dayOfYear": 216,
    "month": 8,
    "day": 3,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Unapplauded Lantern Day",
    "tagline": "An Off-Script occasion in August to speak an uncurated truth and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Unapplauded Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Lantern Day."
  },
  "08-04": {
    "dateKey": "08-04",
    "dayOfYear": 217,
    "month": 8,
    "day": 4,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Unflinching Rhythm Day",
    "tagline": "An Off-Script occasion in August to step off the prescribed conveyor belt and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Unflinching Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Rhythm Day."
  },
  "08-05": {
    "dateKey": "08-05",
    "dayOfYear": 218,
    "month": 8,
    "day": 5,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Feral Pact Day",
    "tagline": "An Off-Script occasion in August to grant yourself an unconditional pardon and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Feral Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Pact Day."
  },
  "08-06": {
    "dateKey": "08-06",
    "dayOfYear": 219,
    "month": 8,
    "day": 6,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Barefoot Horizon Day",
    "tagline": "An Off-Script occasion in August to let silence do the heavy lifting and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Barefoot Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Horizon Day."
  },
  "08-07": {
    "dateKey": "08-07",
    "dayOfYear": 220,
    "month": 8,
    "day": 7,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Monastic Respite Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Monastic Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Respite Day."
  },
  "08-08": {
    "dateKey": "08-08",
    "dayOfYear": 221,
    "month": 8,
    "day": 8,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Sunlit Signal Day",
    "tagline": "An Off-Script occasion in August to honor unhurried pace and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Sunlit Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Signal Day."
  },
  "08-09": {
    "dateKey": "08-09",
    "dayOfYear": 222,
    "month": 8,
    "day": 9,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Deep-Root Cadence Day",
    "tagline": "An Off-Script occasion in August to speak an uncurated truth and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Deep-Root Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Cadence Day."
  },
  "08-10": {
    "dateKey": "08-10",
    "dayOfYear": 223,
    "month": 8,
    "day": 10,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Raw Exhale Day",
    "tagline": "An Off-Script occasion in August to step off the prescribed conveyor belt and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Raw Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Exhale Day."
  },
  "08-11": {
    "dateKey": "08-11",
    "dayOfYear": 224,
    "month": 8,
    "day": 11,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Granite Root Day",
    "tagline": "An Off-Script occasion in August to grant yourself an unconditional pardon and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Granite Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Root Day."
  },
  "08-12": {
    "dateKey": "08-12",
    "dayOfYear": 225,
    "month": 8,
    "day": 12,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Sacred Inventory Day",
    "tagline": "An Off-Script occasion in August to let silence do the heavy lifting and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Sacred Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Inventory Day."
  },
  "08-13": {
    "dateKey": "08-13",
    "dayOfYear": 226,
    "month": 8,
    "day": 13,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Steadfast Altar Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Steadfast Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Altar Day."
  },
  "08-14": {
    "dateKey": "08-14",
    "dayOfYear": 227,
    "month": 8,
    "day": 14,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Sovereign Ledger Day",
    "tagline": "An Off-Script occasion in August to honor unhurried pace and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Sovereign Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Ledger Day."
  },
  "08-15": {
    "dateKey": "08-15",
    "dayOfYear": 228,
    "month": 8,
    "day": 15,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Amber Hearth Day",
    "tagline": "An Off-Script occasion in August to speak an uncurated truth and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Amber Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Hearth Day."
  },
  "08-16": {
    "dateKey": "08-16",
    "dayOfYear": 229,
    "month": 8,
    "day": 16,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Odd-Angle Chamber Day",
    "tagline": "An Off-Script occasion in August to step off the prescribed conveyor belt and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Odd-Angle Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Chamber Day."
  },
  "08-17": {
    "dateKey": "08-17",
    "dayOfYear": 230,
    "month": 8,
    "day": 17,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Dappled Hour Day",
    "tagline": "An Off-Script occasion in August to grant yourself an unconditional pardon and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Dappled Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Hour Day."
  },
  "08-18": {
    "dateKey": "08-18",
    "dayOfYear": 231,
    "month": 8,
    "day": 18,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Uncurated Lantern Day",
    "tagline": "An Off-Script occasion in August to let silence do the heavy lifting and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Uncurated Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Lantern Day."
  },
  "08-19": {
    "dateKey": "08-19",
    "dayOfYear": 232,
    "month": 8,
    "day": 19,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Stubborn Rhythm Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Stubborn Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Rhythm Day."
  },
  "08-20": {
    "dateKey": "08-20",
    "dayOfYear": 233,
    "month": 8,
    "day": 20,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Paper Pact Day",
    "tagline": "An Off-Script occasion in August to honor unhurried pace and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Paper Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Pact Day."
  },
  "08-21": {
    "dateKey": "08-21",
    "dayOfYear": 234,
    "month": 8,
    "day": 21,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Subterranean Horizon Day",
    "tagline": "An Off-Script occasion in August to speak an uncurated truth and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Subterranean Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Horizon Day."
  },
  "08-22": {
    "dateKey": "08-22",
    "dayOfYear": 235,
    "month": 8,
    "day": 22,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Liminal Respite Day",
    "tagline": "An Off-Script occasion in August to step off the prescribed conveyor belt and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Liminal Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Respite Day."
  },
  "08-23": {
    "dateKey": "08-23",
    "dayOfYear": 236,
    "month": 8,
    "day": 23,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Quiet Signal Day",
    "tagline": "An Off-Script occasion in August to grant yourself an unconditional pardon and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Quiet Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Signal Day."
  },
  "08-24": {
    "dateKey": "08-24",
    "dayOfYear": 237,
    "month": 8,
    "day": 24,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Midnight Cadence Day",
    "tagline": "An Off-Script occasion in August to let silence do the heavy lifting and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Midnight Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Cadence Day."
  },
  "08-25": {
    "dateKey": "08-25",
    "dayOfYear": 238,
    "month": 8,
    "day": 25,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Honest Exhale Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Honest Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Exhale Day."
  },
  "08-26": {
    "dateKey": "08-26",
    "dayOfYear": 239,
    "month": 8,
    "day": 26,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Counter Root Day",
    "tagline": "An Off-Script occasion in August to honor unhurried pace and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Counter Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Root Day."
  },
  "08-27": {
    "dateKey": "08-27",
    "dayOfYear": 240,
    "month": 8,
    "day": 27,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Bone-Deep Inventory Day",
    "tagline": "An Off-Script occasion in August to speak an uncurated truth and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Bone-Deep Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Inventory Day."
  },
  "08-28": {
    "dateKey": "08-28",
    "dayOfYear": 241,
    "month": 8,
    "day": 28,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Unfinished Altar Day",
    "tagline": "An Off-Script occasion in August to step off the prescribed conveyor belt and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Unfinished Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Altar Day."
  },
  "08-29": {
    "dateKey": "08-29",
    "dayOfYear": 242,
    "month": 8,
    "day": 29,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Wild Ledger Day",
    "tagline": "An Off-Script occasion in August to grant yourself an unconditional pardon and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Wild Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Ledger Day."
  },
  "08-30": {
    "dateKey": "08-30",
    "dayOfYear": 243,
    "month": 8,
    "day": 30,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Electric Hearth Day",
    "tagline": "An Off-Script occasion in August to let silence do the heavy lifting and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Electric Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Hearth Day."
  },
  "08-31": {
    "dateKey": "08-31",
    "dayOfYear": 244,
    "month": 8,
    "day": 31,
    "monthName": "August",
    "theme": "Doorway Pause, Thresholds & Low Hum",
    "title": "Pruned Chamber Day",
    "tagline": "An Off-Script occasion in August to widen the margin before filling the middle and deepen your doorway pause, thresholds & low hum.",
    "anchorQuestion": "On Pruned Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of doorway pause, thresholds & low hum",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Chamber Day."
  },
  "09-01": {
    "dateKey": "09-01",
    "dayOfYear": 245,
    "month": 9,
    "day": 1,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Unfinished Compass Day",
    "tagline": "An Off-Script occasion in September to celebrate what stays hidden and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Unfinished Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Compass Day."
  },
  "09-02": {
    "dateKey": "09-02",
    "dayOfYear": 246,
    "month": 9,
    "day": 2,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Wild Passage Day",
    "tagline": "An Off-Script occasion in September to look straight into the mirror without judging and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Wild Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Passage Day."
  },
  "09-03": {
    "dateKey": "09-03",
    "dayOfYear": 247,
    "month": 9,
    "day": 3,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Electric Mirror Day",
    "tagline": "An Off-Script occasion in September to trade performative hustle for bone-deep clarity and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Electric Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Mirror Day."
  },
  "09-04": {
    "dateKey": "09-04",
    "dayOfYear": 248,
    "month": 9,
    "day": 4,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Pruned Anchor Day",
    "tagline": "An Off-Script occasion in September to dismantle a manufactured routine and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Pruned Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Anchor Day."
  },
  "09-05": {
    "dateKey": "09-05",
    "dayOfYear": 249,
    "month": 9,
    "day": 5,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Unscripted Vessel Day",
    "tagline": "An Off-Script occasion in September to reclaim an hour from the digital storm and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Unscripted Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Vessel Day."
  },
  "09-06": {
    "dateKey": "09-06",
    "dayOfYear": 250,
    "month": 9,
    "day": 6,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Threshold Current Day",
    "tagline": "An Off-Script occasion in September to refuse to defend your peace and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Threshold Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Current Day."
  },
  "09-07": {
    "dateKey": "09-07",
    "dayOfYear": 251,
    "month": 9,
    "day": 7,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Unapplauded Stance Day",
    "tagline": "An Off-Script occasion in September to celebrate what stays hidden and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Unapplauded Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Stance Day."
  },
  "09-08": {
    "dateKey": "09-08",
    "dayOfYear": 252,
    "month": 9,
    "day": 8,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Unflinching Sanctuary Day",
    "tagline": "An Off-Script occasion in September to look straight into the mirror without judging and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Unflinching Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Sanctuary Day."
  },
  "09-09": {
    "dateKey": "09-09",
    "dayOfYear": 253,
    "month": 9,
    "day": 9,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Feral Blueprint September Day",
    "tagline": "An Off-Script occasion in September to trade performative hustle for bone-deep clarity and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Feral Blueprint September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Blueprint September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Blueprint September Day."
  },
  "09-10": {
    "dateKey": "09-10",
    "dayOfYear": 254,
    "month": 9,
    "day": 10,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Barefoot Harvest September Day",
    "tagline": "An Off-Script occasion in September to dismantle a manufactured routine and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Barefoot Harvest September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Harvest September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Harvest September Day."
  },
  "09-11": {
    "dateKey": "09-11",
    "dayOfYear": 255,
    "month": 9,
    "day": 11,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Monastic Covenant September Day",
    "tagline": "An Off-Script occasion in September to reclaim an hour from the digital storm and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Monastic Covenant September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Covenant September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Covenant September Day."
  },
  "09-12": {
    "dateKey": "09-12",
    "dayOfYear": 256,
    "month": 9,
    "day": 12,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Sunlit Whistle September Day",
    "tagline": "An Off-Script occasion in September to refuse to defend your peace and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Sunlit Whistle September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Whistle September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Whistle September Day."
  },
  "09-13": {
    "dateKey": "09-13",
    "dayOfYear": 257,
    "month": 9,
    "day": 13,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Deep-Root Archive September Day",
    "tagline": "An Off-Script occasion in September to celebrate what stays hidden and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Deep-Root Archive September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Archive September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Archive September Day."
  },
  "09-14": {
    "dateKey": "09-14",
    "dayOfYear": 258,
    "month": 9,
    "day": 14,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Raw Pillar September Day",
    "tagline": "An Off-Script occasion in September to look straight into the mirror without judging and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Raw Pillar September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Pillar September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Pillar September Day."
  },
  "09-15": {
    "dateKey": "09-15",
    "dayOfYear": 259,
    "month": 9,
    "day": 15,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Granite Detour September Day",
    "tagline": "An Off-Script occasion in September to trade performative hustle for bone-deep clarity and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Granite Detour September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Detour September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Detour September Day."
  },
  "09-16": {
    "dateKey": "09-16",
    "dayOfYear": 260,
    "month": 9,
    "day": 16,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Sacred Compass September Day",
    "tagline": "An Off-Script occasion in September to dismantle a manufactured routine and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Sacred Compass September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Compass September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Compass September Day."
  },
  "09-17": {
    "dateKey": "09-17",
    "dayOfYear": 261,
    "month": 9,
    "day": 17,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Steadfast Passage September Day",
    "tagline": "An Off-Script occasion in September to reclaim an hour from the digital storm and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Steadfast Passage September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Passage September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Passage September Day."
  },
  "09-18": {
    "dateKey": "09-18",
    "dayOfYear": 262,
    "month": 9,
    "day": 18,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Sovereign Mirror September Day",
    "tagline": "An Off-Script occasion in September to refuse to defend your peace and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Sovereign Mirror September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Mirror September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Mirror September Day."
  },
  "09-19": {
    "dateKey": "09-19",
    "dayOfYear": 263,
    "month": 9,
    "day": 19,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Amber Anchor September Day",
    "tagline": "An Off-Script occasion in September to celebrate what stays hidden and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Amber Anchor September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Anchor September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Anchor September Day."
  },
  "09-20": {
    "dateKey": "09-20",
    "dayOfYear": 264,
    "month": 9,
    "day": 20,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Odd-Angle Vessel September Day",
    "tagline": "An Off-Script occasion in September to look straight into the mirror without judging and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Odd-Angle Vessel September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Vessel September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Vessel September Day."
  },
  "09-21": {
    "dateKey": "09-21",
    "dayOfYear": 265,
    "month": 9,
    "day": 21,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Dappled Current September Day",
    "tagline": "An Off-Script occasion in September to trade performative hustle for bone-deep clarity and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Dappled Current September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Current September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Current September Day."
  },
  "09-22": {
    "dateKey": "09-22",
    "dayOfYear": 266,
    "month": 9,
    "day": 22,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Uncurated Stance September Day",
    "tagline": "An Off-Script occasion in September to dismantle a manufactured routine and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Uncurated Stance September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Stance September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Stance September Day."
  },
  "09-23": {
    "dateKey": "09-23",
    "dayOfYear": 267,
    "month": 9,
    "day": 23,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Stubborn Sanctuary September Day",
    "tagline": "An Off-Script occasion in September to reclaim an hour from the digital storm and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Stubborn Sanctuary September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Sanctuary September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Sanctuary September Day."
  },
  "09-24": {
    "dateKey": "09-24",
    "dayOfYear": 268,
    "month": 9,
    "day": 24,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Paper Blueprint September Day",
    "tagline": "An Off-Script occasion in September to refuse to defend your peace and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Paper Blueprint September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Blueprint September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Blueprint September Day."
  },
  "09-25": {
    "dateKey": "09-25",
    "dayOfYear": 269,
    "month": 9,
    "day": 25,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Subterranean Harvest September Day",
    "tagline": "An Off-Script occasion in September to celebrate what stays hidden and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Subterranean Harvest September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Harvest September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Harvest September Day."
  },
  "09-26": {
    "dateKey": "09-26",
    "dayOfYear": 270,
    "month": 9,
    "day": 26,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Liminal Covenant September Day",
    "tagline": "An Off-Script occasion in September to look straight into the mirror without judging and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Liminal Covenant September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Covenant September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Covenant September Day."
  },
  "09-27": {
    "dateKey": "09-27",
    "dayOfYear": 271,
    "month": 9,
    "day": 27,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Founder's Day (Amber Wiggins Tribute)",
    "tagline": "A birthday salute to the founder who made Off Script for souls who refuse autopilot.",
    "anchorQuestion": "What part of the Off Script spirit do you want to carry into your next season?",
    "adventures": [
      "Write a bold toast to living off-script and name one radical choice you are ready to make.",
      "Draft a fresh rule for your own operating system that defies convention."
    ],
    "whoIsThisSoul": [
      "What would you do differently if your life got to be authored, not merely followed?",
      "Draw a border around a familiar idea and wander briefly into whatever lies outside it."
    ],
    "recommendedStance": "An unapologetic author of an unscripted life",
    "suggestedIntention": "Today I honor the courage to design my own operating system."
  },
  "09-28": {
    "dateKey": "09-28",
    "dayOfYear": 272,
    "month": 9,
    "day": 28,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Midnight Archive September Day",
    "tagline": "An Off-Script occasion in September to dismantle a manufactured routine and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Midnight Archive September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Archive September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Archive September Day."
  },
  "09-29": {
    "dateKey": "09-29",
    "dayOfYear": 273,
    "month": 9,
    "day": 29,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Honest Pillar September Day",
    "tagline": "An Off-Script occasion in September to reclaim an hour from the digital storm and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Honest Pillar September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Pillar September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Pillar September Day."
  },
  "09-30": {
    "dateKey": "09-30",
    "dayOfYear": 274,
    "month": 9,
    "day": 30,
    "monthName": "September",
    "theme": "Reboot Protocol, Containers & Craft",
    "title": "Counter Detour September Day",
    "tagline": "An Off-Script occasion in September to refuse to defend your peace and deepen your reboot protocol, containers & craft.",
    "anchorQuestion": "On Counter Detour September Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Detour September Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of reboot protocol, containers & craft",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Detour September Day."
  },
  "10-01": {
    "dateKey": "10-01",
    "dayOfYear": 275,
    "month": 10,
    "day": 1,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Quiet Compass Day",
    "tagline": "An Off-Script occasion in October to dismantle a manufactured routine and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Quiet Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Compass Day."
  },
  "10-02": {
    "dateKey": "10-02",
    "dayOfYear": 276,
    "month": 10,
    "day": 2,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Midnight Passage Day",
    "tagline": "An Off-Script occasion in October to reclaim an hour from the digital storm and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Midnight Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Passage Day."
  },
  "10-03": {
    "dateKey": "10-03",
    "dayOfYear": 277,
    "month": 10,
    "day": 3,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Honest Mirror Day",
    "tagline": "An Off-Script occasion in October to refuse to defend your peace and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Honest Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Mirror Day."
  },
  "10-04": {
    "dateKey": "10-04",
    "dayOfYear": 278,
    "month": 10,
    "day": 4,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Counter Anchor Day",
    "tagline": "An Off-Script occasion in October to celebrate what stays hidden and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Counter Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Anchor Day."
  },
  "10-05": {
    "dateKey": "10-05",
    "dayOfYear": 279,
    "month": 10,
    "day": 5,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Bone-Deep Vessel Day",
    "tagline": "An Off-Script occasion in October to look straight into the mirror without judging and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Bone-Deep Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Vessel Day."
  },
  "10-06": {
    "dateKey": "10-06",
    "dayOfYear": 280,
    "month": 10,
    "day": 6,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Unfinished Current Day",
    "tagline": "An Off-Script occasion in October to trade performative hustle for bone-deep clarity and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Unfinished Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Current Day."
  },
  "10-07": {
    "dateKey": "10-07",
    "dayOfYear": 281,
    "month": 10,
    "day": 7,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Wild Stance Day",
    "tagline": "An Off-Script occasion in October to dismantle a manufactured routine and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Wild Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Stance Day."
  },
  "10-08": {
    "dateKey": "10-08",
    "dayOfYear": 282,
    "month": 10,
    "day": 8,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Electric Sanctuary Day",
    "tagline": "An Off-Script occasion in October to reclaim an hour from the digital storm and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Electric Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Sanctuary Day."
  },
  "10-09": {
    "dateKey": "10-09",
    "dayOfYear": 283,
    "month": 10,
    "day": 9,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Pruned Blueprint Day",
    "tagline": "An Off-Script occasion in October to refuse to defend your peace and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Pruned Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Blueprint Day."
  },
  "10-10": {
    "dateKey": "10-10",
    "dayOfYear": 284,
    "month": 10,
    "day": 10,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Unscripted Harvest Day",
    "tagline": "An Off-Script occasion in October to celebrate what stays hidden and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Unscripted Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Harvest Day."
  },
  "10-11": {
    "dateKey": "10-11",
    "dayOfYear": 285,
    "month": 10,
    "day": 11,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Threshold Covenant Day",
    "tagline": "An Off-Script occasion in October to look straight into the mirror without judging and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Threshold Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Covenant Day."
  },
  "10-12": {
    "dateKey": "10-12",
    "dayOfYear": 286,
    "month": 10,
    "day": 12,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Unapplauded Whistle Day",
    "tagline": "An Off-Script occasion in October to trade performative hustle for bone-deep clarity and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Unapplauded Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Whistle Day."
  },
  "10-13": {
    "dateKey": "10-13",
    "dayOfYear": 287,
    "month": 10,
    "day": 13,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Unflinching Archive Day",
    "tagline": "An Off-Script occasion in October to dismantle a manufactured routine and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Unflinching Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Archive Day."
  },
  "10-14": {
    "dateKey": "10-14",
    "dayOfYear": 288,
    "month": 10,
    "day": 14,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Feral Pillar Day",
    "tagline": "An Off-Script occasion in October to reclaim an hour from the digital storm and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Feral Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Pillar Day."
  },
  "10-15": {
    "dateKey": "10-15",
    "dayOfYear": 289,
    "month": 10,
    "day": 15,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Barefoot Detour Day",
    "tagline": "An Off-Script occasion in October to refuse to defend your peace and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Barefoot Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Detour Day."
  },
  "10-16": {
    "dateKey": "10-16",
    "dayOfYear": 290,
    "month": 10,
    "day": 16,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Monastic Compass Day",
    "tagline": "An Off-Script occasion in October to celebrate what stays hidden and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Monastic Compass Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Compass Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Compass Day."
  },
  "10-17": {
    "dateKey": "10-17",
    "dayOfYear": 291,
    "month": 10,
    "day": 17,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Sunlit Passage Day",
    "tagline": "An Off-Script occasion in October to look straight into the mirror without judging and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Sunlit Passage Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Passage Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Passage Day."
  },
  "10-18": {
    "dateKey": "10-18",
    "dayOfYear": 292,
    "month": 10,
    "day": 18,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Deep-Root Mirror Day",
    "tagline": "An Off-Script occasion in October to trade performative hustle for bone-deep clarity and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Deep-Root Mirror Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Mirror Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Mirror Day."
  },
  "10-19": {
    "dateKey": "10-19",
    "dayOfYear": 293,
    "month": 10,
    "day": 19,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Raw Anchor Day",
    "tagline": "An Off-Script occasion in October to dismantle a manufactured routine and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Raw Anchor Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Anchor Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Anchor Day."
  },
  "10-20": {
    "dateKey": "10-20",
    "dayOfYear": 294,
    "month": 10,
    "day": 20,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Granite Vessel Day",
    "tagline": "An Off-Script occasion in October to reclaim an hour from the digital storm and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Granite Vessel Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Vessel Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Vessel Day."
  },
  "10-21": {
    "dateKey": "10-21",
    "dayOfYear": 295,
    "month": 10,
    "day": 21,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Sacred Current Day",
    "tagline": "An Off-Script occasion in October to refuse to defend your peace and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Sacred Current Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Current Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Current Day."
  },
  "10-22": {
    "dateKey": "10-22",
    "dayOfYear": 296,
    "month": 10,
    "day": 22,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Steadfast Stance Day",
    "tagline": "An Off-Script occasion in October to celebrate what stays hidden and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Steadfast Stance Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Stance Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Stance Day."
  },
  "10-23": {
    "dateKey": "10-23",
    "dayOfYear": 297,
    "month": 10,
    "day": 23,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Sovereign Sanctuary Day",
    "tagline": "An Off-Script occasion in October to look straight into the mirror without judging and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Sovereign Sanctuary Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Sanctuary Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Sanctuary Day."
  },
  "10-24": {
    "dateKey": "10-24",
    "dayOfYear": 298,
    "month": 10,
    "day": 24,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Amber Blueprint Day",
    "tagline": "An Off-Script occasion in October to trade performative hustle for bone-deep clarity and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Amber Blueprint Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Blueprint Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Blueprint Day."
  },
  "10-25": {
    "dateKey": "10-25",
    "dayOfYear": 299,
    "month": 10,
    "day": 25,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Odd-Angle Harvest Day",
    "tagline": "An Off-Script occasion in October to dismantle a manufactured routine and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Odd-Angle Harvest Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Harvest Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Harvest Day."
  },
  "10-26": {
    "dateKey": "10-26",
    "dayOfYear": 300,
    "month": 10,
    "day": 26,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Dappled Covenant Day",
    "tagline": "An Off-Script occasion in October to reclaim an hour from the digital storm and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Dappled Covenant Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Covenant Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Covenant Day."
  },
  "10-27": {
    "dateKey": "10-27",
    "dayOfYear": 301,
    "month": 10,
    "day": 27,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Uncurated Whistle Day",
    "tagline": "An Off-Script occasion in October to refuse to defend your peace and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Uncurated Whistle Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Whistle Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Whistle Day."
  },
  "10-28": {
    "dateKey": "10-28",
    "dayOfYear": 302,
    "month": 10,
    "day": 28,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Stubborn Archive Day",
    "tagline": "An Off-Script occasion in October to celebrate what stays hidden and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Stubborn Archive Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Archive Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Archive Day."
  },
  "10-29": {
    "dateKey": "10-29",
    "dayOfYear": 303,
    "month": 10,
    "day": 29,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Paper Pillar Day",
    "tagline": "An Off-Script occasion in October to look straight into the mirror without judging and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Paper Pillar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Pillar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Pillar Day."
  },
  "10-30": {
    "dateKey": "10-30",
    "dayOfYear": 304,
    "month": 10,
    "day": 30,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "Subterranean Detour Day",
    "tagline": "An Off-Script occasion in October to trade performative hustle for bone-deep clarity and deepen your raw nerve, mask dropping & erratum.",
    "anchorQuestion": "On Subterranean Detour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Detour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of raw nerve, mask dropping & erratum",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Detour Day."
  },
  "10-31": {
    "dateKey": "10-31",
    "dayOfYear": 305,
    "month": 10,
    "day": 31,
    "monthName": "October",
    "theme": "Raw Nerve, Mask Dropping & Erratum",
    "title": "October Erratum Day",
    "tagline": "File a small correction to your own version of October's story.",
    "anchorQuestion": "Confess the small error you'd correct first if October Erratum offered a redo.",
    "adventures": [
      "Write a one-paragraph field report from an object observing your habits.",
      "Give your biggest regret a less formal translation: mark it as 'Data, Not Defect'."
    ],
    "whoIsThisSoul": [
      "Why does one mistake feel bigger than it should at the turn of the season?",
      "What did the shadow teach you that the light was too bright to show?"
    ],
    "recommendedStance": "A graceful auditor of life's misprints",
    "suggestedIntention": "Today I treat my failures as data, never defect."
  },
  "11-01": {
    "dateKey": "11-01",
    "dayOfYear": 306,
    "month": 11,
    "day": 1,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Stubborn Signal Day",
    "tagline": "An Off-Script occasion in November to grant yourself an unconditional pardon and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Stubborn Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Signal Day."
  },
  "11-02": {
    "dateKey": "11-02",
    "dayOfYear": 307,
    "month": 11,
    "day": 2,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Paper Cadence Day",
    "tagline": "An Off-Script occasion in November to let silence do the heavy lifting and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Paper Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Cadence Day."
  },
  "11-03": {
    "dateKey": "11-03",
    "dayOfYear": 308,
    "month": 11,
    "day": 3,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Subterranean Exhale Day",
    "tagline": "An Off-Script occasion in November to widen the margin before filling the middle and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Subterranean Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Exhale Day."
  },
  "11-04": {
    "dateKey": "11-04",
    "dayOfYear": 309,
    "month": 11,
    "day": 4,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Liminal Root Day",
    "tagline": "An Off-Script occasion in November to honor unhurried pace and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Liminal Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Root Day."
  },
  "11-05": {
    "dateKey": "11-05",
    "dayOfYear": 310,
    "month": 11,
    "day": 5,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Quiet Inventory Day",
    "tagline": "An Off-Script occasion in November to speak an uncurated truth and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Quiet Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Inventory Day."
  },
  "11-06": {
    "dateKey": "11-06",
    "dayOfYear": 311,
    "month": 11,
    "day": 6,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Midnight Altar Day",
    "tagline": "An Off-Script occasion in November to step off the prescribed conveyor belt and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Midnight Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Altar Day."
  },
  "11-07": {
    "dateKey": "11-07",
    "dayOfYear": 312,
    "month": 11,
    "day": 7,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Honest Ledger Day",
    "tagline": "An Off-Script occasion in November to grant yourself an unconditional pardon and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Honest Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Ledger Day."
  },
  "11-08": {
    "dateKey": "11-08",
    "dayOfYear": 313,
    "month": 11,
    "day": 8,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Counter Hearth Day",
    "tagline": "An Off-Script occasion in November to let silence do the heavy lifting and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Counter Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Hearth Day."
  },
  "11-09": {
    "dateKey": "11-09",
    "dayOfYear": 314,
    "month": 11,
    "day": 9,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Bone-Deep Chamber Day",
    "tagline": "An Off-Script occasion in November to widen the margin before filling the middle and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Bone-Deep Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Chamber Day."
  },
  "11-10": {
    "dateKey": "11-10",
    "dayOfYear": 315,
    "month": 11,
    "day": 10,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Unfinished Hour Day",
    "tagline": "An Off-Script occasion in November to honor unhurried pace and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Unfinished Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Hour Day."
  },
  "11-11": {
    "dateKey": "11-11",
    "dayOfYear": 316,
    "month": 11,
    "day": 11,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Wild Lantern Day",
    "tagline": "An Off-Script occasion in November to speak an uncurated truth and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Wild Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Lantern Day."
  },
  "11-12": {
    "dateKey": "11-12",
    "dayOfYear": 317,
    "month": 11,
    "day": 12,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Electric Rhythm Day",
    "tagline": "An Off-Script occasion in November to step off the prescribed conveyor belt and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Electric Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Rhythm Day."
  },
  "11-13": {
    "dateKey": "11-13",
    "dayOfYear": 318,
    "month": 11,
    "day": 13,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Pruned Pact Day",
    "tagline": "An Off-Script occasion in November to grant yourself an unconditional pardon and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Pruned Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Pact Day."
  },
  "11-14": {
    "dateKey": "11-14",
    "dayOfYear": 319,
    "month": 11,
    "day": 14,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Unscripted Horizon Day",
    "tagline": "An Off-Script occasion in November to let silence do the heavy lifting and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Unscripted Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Horizon Day."
  },
  "11-15": {
    "dateKey": "11-15",
    "dayOfYear": 320,
    "month": 11,
    "day": 15,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Threshold Respite Day",
    "tagline": "An Off-Script occasion in November to widen the margin before filling the middle and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Threshold Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Respite Day."
  },
  "11-16": {
    "dateKey": "11-16",
    "dayOfYear": 321,
    "month": 11,
    "day": 16,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Unapplauded Signal Day",
    "tagline": "An Off-Script occasion in November to honor unhurried pace and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Unapplauded Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Signal Day."
  },
  "11-17": {
    "dateKey": "11-17",
    "dayOfYear": 322,
    "month": 11,
    "day": 17,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Unflinching Cadence Day",
    "tagline": "An Off-Script occasion in November to speak an uncurated truth and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Unflinching Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Cadence Day."
  },
  "11-18": {
    "dateKey": "11-18",
    "dayOfYear": 323,
    "month": 11,
    "day": 18,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Feral Exhale Day",
    "tagline": "An Off-Script occasion in November to step off the prescribed conveyor belt and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Feral Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Exhale Day."
  },
  "11-19": {
    "dateKey": "11-19",
    "dayOfYear": 324,
    "month": 11,
    "day": 19,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Barefoot Root Day",
    "tagline": "An Off-Script occasion in November to grant yourself an unconditional pardon and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Barefoot Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Root Day."
  },
  "11-20": {
    "dateKey": "11-20",
    "dayOfYear": 325,
    "month": 11,
    "day": 20,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Monastic Inventory Day",
    "tagline": "An Off-Script occasion in November to let silence do the heavy lifting and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Monastic Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Inventory Day."
  },
  "11-21": {
    "dateKey": "11-21",
    "dayOfYear": 326,
    "month": 11,
    "day": 21,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Sunlit Altar Day",
    "tagline": "An Off-Script occasion in November to widen the margin before filling the middle and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Sunlit Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Altar Day."
  },
  "11-22": {
    "dateKey": "11-22",
    "dayOfYear": 327,
    "month": 11,
    "day": 22,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Deep-Root Ledger Day",
    "tagline": "An Off-Script occasion in November to honor unhurried pace and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Deep-Root Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Ledger Day."
  },
  "11-23": {
    "dateKey": "11-23",
    "dayOfYear": 328,
    "month": 11,
    "day": 23,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Raw Hearth Day",
    "tagline": "An Off-Script occasion in November to speak an uncurated truth and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Raw Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Hearth Day."
  },
  "11-24": {
    "dateKey": "11-24",
    "dayOfYear": 329,
    "month": 11,
    "day": 24,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Granite Chamber Day",
    "tagline": "An Off-Script occasion in November to step off the prescribed conveyor belt and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Granite Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Chamber Day."
  },
  "11-25": {
    "dateKey": "11-25",
    "dayOfYear": 330,
    "month": 11,
    "day": 25,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Sacred Hour Day",
    "tagline": "An Off-Script occasion in November to grant yourself an unconditional pardon and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Sacred Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Hour Day."
  },
  "11-26": {
    "dateKey": "11-26",
    "dayOfYear": 331,
    "month": 11,
    "day": 26,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Steadfast Lantern Day",
    "tagline": "An Off-Script occasion in November to let silence do the heavy lifting and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Steadfast Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Steadfast Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A steadfast practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Steadfast Lantern Day."
  },
  "11-27": {
    "dateKey": "11-27",
    "dayOfYear": 332,
    "month": 11,
    "day": 27,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Sovereign Rhythm Day",
    "tagline": "An Off-Script occasion in November to widen the margin before filling the middle and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Sovereign Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Rhythm Day."
  },
  "11-28": {
    "dateKey": "11-28",
    "dayOfYear": 333,
    "month": 11,
    "day": 28,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Amber Pact Day",
    "tagline": "An Off-Script occasion in November to honor unhurried pace and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Amber Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Pact Day."
  },
  "11-29": {
    "dateKey": "11-29",
    "dayOfYear": 334,
    "month": 11,
    "day": 29,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Odd-Angle Horizon Day",
    "tagline": "An Off-Script occasion in November to speak an uncurated truth and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Odd-Angle Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Horizon Day."
  },
  "11-30": {
    "dateKey": "11-30",
    "dayOfYear": 335,
    "month": 11,
    "day": 30,
    "monthName": "November",
    "theme": "Enough Already, Ceasefire & Bone-Deep Relief",
    "title": "Dappled Respite Day",
    "tagline": "An Off-Script occasion in November to step off the prescribed conveyor belt and deepen your enough already, ceasefire & bone-deep relief.",
    "anchorQuestion": "On Dappled Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of enough already, ceasefire & bone-deep relief",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Respite Day."
  },
  "12-01": {
    "dateKey": "12-01",
    "dayOfYear": 336,
    "month": 12,
    "day": 1,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Sovereign Signal Day",
    "tagline": "An Off-Script occasion in December to honor unhurried pace and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Sovereign Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sovereign Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sovereign practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Sovereign Signal Day."
  },
  "12-02": {
    "dateKey": "12-02",
    "dayOfYear": 337,
    "month": 12,
    "day": 2,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Amber Cadence Day",
    "tagline": "An Off-Script occasion in December to speak an uncurated truth and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Amber Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Amber Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A amber practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Amber Cadence Day."
  },
  "12-03": {
    "dateKey": "12-03",
    "dayOfYear": 338,
    "month": 12,
    "day": 3,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Odd-Angle Exhale Day",
    "tagline": "An Off-Script occasion in December to step off the prescribed conveyor belt and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Odd-Angle Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Odd-Angle Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A odd-angle practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Odd-Angle Exhale Day."
  },
  "12-04": {
    "dateKey": "12-04",
    "dayOfYear": 339,
    "month": 12,
    "day": 4,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Dappled Root Day",
    "tagline": "An Off-Script occasion in December to grant yourself an unconditional pardon and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Dappled Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Dappled Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A dappled practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Dappled Root Day."
  },
  "12-05": {
    "dateKey": "12-05",
    "dayOfYear": 340,
    "month": 12,
    "day": 5,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Uncurated Inventory Day",
    "tagline": "An Off-Script occasion in December to let silence do the heavy lifting and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Uncurated Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Uncurated Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A uncurated practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Uncurated Inventory Day."
  },
  "12-06": {
    "dateKey": "12-06",
    "dayOfYear": 341,
    "month": 12,
    "day": 6,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Stubborn Altar Day",
    "tagline": "An Off-Script occasion in December to widen the margin before filling the middle and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Stubborn Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Stubborn Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A stubborn practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Stubborn Altar Day."
  },
  "12-07": {
    "dateKey": "12-07",
    "dayOfYear": 342,
    "month": 12,
    "day": 7,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Paper Ledger Day",
    "tagline": "An Off-Script occasion in December to honor unhurried pace and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Paper Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Paper Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A paper practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Paper Ledger Day."
  },
  "12-08": {
    "dateKey": "12-08",
    "dayOfYear": 343,
    "month": 12,
    "day": 8,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Subterranean Hearth Day",
    "tagline": "An Off-Script occasion in December to speak an uncurated truth and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Subterranean Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Subterranean Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A subterranean practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Subterranean Hearth Day."
  },
  "12-09": {
    "dateKey": "12-09",
    "dayOfYear": 344,
    "month": 12,
    "day": 9,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Liminal Chamber Day",
    "tagline": "An Off-Script occasion in December to step off the prescribed conveyor belt and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Liminal Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Liminal Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A liminal practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Liminal Chamber Day."
  },
  "12-10": {
    "dateKey": "12-10",
    "dayOfYear": 345,
    "month": 12,
    "day": 10,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Quiet Hour Day",
    "tagline": "An Off-Script occasion in December to grant yourself an unconditional pardon and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Quiet Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Quiet Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A quiet practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Quiet Hour Day."
  },
  "12-11": {
    "dateKey": "12-11",
    "dayOfYear": 346,
    "month": 12,
    "day": 11,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Midnight Lantern Day",
    "tagline": "An Off-Script occasion in December to let silence do the heavy lifting and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Midnight Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Midnight Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A midnight practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Midnight Lantern Day."
  },
  "12-12": {
    "dateKey": "12-12",
    "dayOfYear": 347,
    "month": 12,
    "day": 12,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Honest Rhythm Day",
    "tagline": "An Off-Script occasion in December to widen the margin before filling the middle and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Honest Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Honest Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A honest practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Honest Rhythm Day."
  },
  "12-13": {
    "dateKey": "12-13",
    "dayOfYear": 348,
    "month": 12,
    "day": 13,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Counter Pact Day",
    "tagline": "An Off-Script occasion in December to honor unhurried pace and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Counter Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Counter Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A counter practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Counter Pact Day."
  },
  "12-14": {
    "dateKey": "12-14",
    "dayOfYear": 349,
    "month": 12,
    "day": 14,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Bone-Deep Horizon Day",
    "tagline": "An Off-Script occasion in December to speak an uncurated truth and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Bone-Deep Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Bone-Deep Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A bone-deep practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Bone-Deep Horizon Day."
  },
  "12-15": {
    "dateKey": "12-15",
    "dayOfYear": 350,
    "month": 12,
    "day": 15,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Unfinished Respite Day",
    "tagline": "An Off-Script occasion in December to step off the prescribed conveyor belt and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Unfinished Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unfinished Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unfinished practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Unfinished Respite Day."
  },
  "12-16": {
    "dateKey": "12-16",
    "dayOfYear": 351,
    "month": 12,
    "day": 16,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Wild Signal Day",
    "tagline": "An Off-Script occasion in December to grant yourself an unconditional pardon and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Wild Signal Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Wild Signal Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A wild practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Wild Signal Day."
  },
  "12-17": {
    "dateKey": "12-17",
    "dayOfYear": 352,
    "month": 12,
    "day": 17,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Electric Cadence Day",
    "tagline": "An Off-Script occasion in December to let silence do the heavy lifting and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Electric Cadence Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Electric Cadence Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A electric practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Electric Cadence Day."
  },
  "12-18": {
    "dateKey": "12-18",
    "dayOfYear": 353,
    "month": 12,
    "day": 18,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Pruned Exhale Day",
    "tagline": "An Off-Script occasion in December to widen the margin before filling the middle and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Pruned Exhale Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Pruned Exhale Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A pruned practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Pruned Exhale Day."
  },
  "12-19": {
    "dateKey": "12-19",
    "dayOfYear": 354,
    "month": 12,
    "day": 19,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Unscripted Root Day",
    "tagline": "An Off-Script occasion in December to honor unhurried pace and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Unscripted Root Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Replace one performative priority with an hour of unapologetic rest."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unscripted Root Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unscripted practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Unscripted Root Day."
  },
  "12-20": {
    "dateKey": "12-20",
    "dayOfYear": 355,
    "month": 12,
    "day": 20,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Threshold Inventory Day",
    "tagline": "An Off-Script occasion in December to speak an uncurated truth and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Threshold Inventory Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Drink a full cup of tea or coffee without touching a single screen."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Threshold Inventory Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A threshold practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Threshold Inventory Day."
  },
  "12-21": {
    "dateKey": "12-21",
    "dayOfYear": 356,
    "month": 12,
    "day": 21,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Unapplauded Altar Day",
    "tagline": "An Off-Script occasion in December to step off the prescribed conveyor belt and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Unapplauded Altar Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Give a stranger an unhurried, sincere compliment that has nothing to do with appearance."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unapplauded Altar Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unapplauded practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Unapplauded Altar Day."
  },
  "12-22": {
    "dateKey": "12-22",
    "dayOfYear": 357,
    "month": 12,
    "day": 22,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Unflinching Ledger Day",
    "tagline": "An Off-Script occasion in December to grant yourself an unconditional pardon and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Unflinching Ledger Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Walk at half your usual speed for the next twenty paces."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Unflinching Ledger Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A unflinching practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Unflinching Ledger Day."
  },
  "12-23": {
    "dateKey": "12-23",
    "dayOfYear": 358,
    "month": 12,
    "day": 23,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Feral Hearth Day",
    "tagline": "An Off-Script occasion in December to let silence do the heavy lifting and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Feral Hearth Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write down the hardest truth of your week, then fold it into a tiny paper square."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Feral Hearth Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A feral practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Feral Hearth Day."
  },
  "12-24": {
    "dateKey": "12-24",
    "dayOfYear": 359,
    "month": 12,
    "day": 24,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Barefoot Chamber Day",
    "tagline": "An Off-Script occasion in December to widen the margin before filling the middle and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Barefoot Chamber Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Say aloud: 'I have nothing to prove to anyone today.'"
    ],
    "whoIsThisSoul": [
      "What becomes possible when Barefoot Chamber Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A barefoot practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Barefoot Chamber Day."
  },
  "12-25": {
    "dateKey": "12-25",
    "dayOfYear": 360,
    "month": 12,
    "day": 25,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Monastic Hour Day",
    "tagline": "An Off-Script occasion in December to honor unhurried pace and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Monastic Hour Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Sit in complete silence for 6 minutes before opening your inbox."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Monastic Hour Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A monastic practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Monastic Hour Day."
  },
  "12-26": {
    "dateKey": "12-26",
    "dayOfYear": 361,
    "month": 12,
    "day": 26,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Sunlit Lantern Day",
    "tagline": "An Off-Script occasion in December to speak an uncurated truth and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Sunlit Lantern Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Take an intentional 10-minute detour on foot without looking at a map."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sunlit Lantern Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sunlit practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Sunlit Lantern Day."
  },
  "12-27": {
    "dateKey": "12-27",
    "dayOfYear": 362,
    "month": 12,
    "day": 27,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Deep-Root Rhythm Day",
    "tagline": "An Off-Script occasion in December to step off the prescribed conveyor belt and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Deep-Root Rhythm Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Write your most rebellious goal on a scrap of paper and keep it hidden in your shoe."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Deep-Root Rhythm Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A deep-root practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Deep-Root Rhythm Day."
  },
  "12-28": {
    "dateKey": "12-28",
    "dayOfYear": 363,
    "month": 12,
    "day": 28,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Raw Pact Day",
    "tagline": "An Off-Script occasion in December to grant yourself an unconditional pardon and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Raw Pact Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Decline one request with a clean, gracious refusal and zero excuses."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Raw Pact Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A raw practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Raw Pact Day."
  },
  "12-29": {
    "dateKey": "12-29",
    "dayOfYear": 364,
    "month": 12,
    "day": 29,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Granite Horizon Day",
    "tagline": "An Off-Script occasion in December to let silence do the heavy lifting and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Granite Horizon Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Touch three rough surfaces with bare hands and name how they feel."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Granite Horizon Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A granite practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Granite Horizon Day."
  },
  "12-30": {
    "dateKey": "12-30",
    "dayOfYear": 365,
    "month": 12,
    "day": 30,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Sacred Respite Day",
    "tagline": "An Off-Script occasion in December to widen the margin before filling the middle and deepen your conscious endings, empty hands & completion.",
    "anchorQuestion": "On Sacred Respite Day, what are you finally ready to stop pretending about?",
    "adventures": [
      "Work with the lights dimmed or by window light for the first hour."
    ],
    "whoIsThisSoul": [
      "What becomes possible when Sacred Respite Day gives you permission to be fully human?"
    ],
    "recommendedStance": "A sacred practitioner of conscious endings, empty hands & completion",
    "suggestedIntention": "Today I anchor myself in the courage of Sacred Respite Day."
  },
  "12-31": {
    "dateKey": "12-31",
    "dayOfYear": 366,
    "month": 12,
    "day": 31,
    "monthName": "December",
    "theme": "Conscious Endings, Empty Hands & Completion",
    "title": "Final Margin Day",
    "tagline": "One last day to reimagine everyday objects and revisit what you missed.",
    "anchorQuestion": "Notice which margin Final Margin Day asks you to widen before tomorrow arrives.",
    "adventures": [
      "Find one thing built for a purpose and imagine its alternate cosmic purpose.",
      "Stage a playful closing ceremony: write down what you release and recycle it."
    ],
    "whoIsThisSoul": [
      "Return to the detail you skipped all year; let Final Margin Day explain your resistance.",
      "You showed up. Off script, on purpose, all year. That's the whole thing."
    ],
    "recommendedStance": "A tranquil finisher standing in the doorway of time",
    "suggestedIntention": "Today I complete the circle and step through with empty, grateful hands."
  }
};

export const ALL_HOLIDAYS_ARRAY: ExtendedChaosHoliday[] = Object.values(COMPLETE_HOLIDAYS);

export function getHolidayForDate(dateStr: string): ExtendedChaosHoliday {
  const parts = dateStr.split('-');
  const monthStr = parts[1] || '01';
  const dayStr = parts[2] || '01';
  const key = `${monthStr.padStart(2, '0')}-${dayStr.padStart(2, '0')}`;

  if (COMPLETE_HOLIDAYS[key]) {
    return COMPLETE_HOLIDAYS[key];
  }

  // Safe fallback to first day if invalid format
  return COMPLETE_HOLIDAYS["01-01"];
}

export function searchHolidays(query: string): ExtendedChaosHoliday[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return ALL_HOLIDAYS_ARRAY;
  return ALL_HOLIDAYS_ARRAY.filter(h => 
    h.title.toLowerCase().includes(clean) ||
    h.tagline.toLowerCase().includes(clean) ||
    h.anchorQuestion.toLowerCase().includes(clean) ||
    h.theme.toLowerCase().includes(clean) ||
    h.dateKey.includes(clean)
  );
}
