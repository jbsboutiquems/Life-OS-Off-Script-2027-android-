import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// In-memory data store with file persistence
const DATA_FILE = path.join(process.cwd(), "chaos_os_data.json");

interface DataStore {
  user: any;
  dailyEntries: Record<string, any>; // date -> entry
  personalitySnapshots: any[];
  goals: any[];
  antiGoals?: any[];
  flightDebriefs: Record<string, any>; // weekNumber -> debrief
  moneyMaps: Record<string, any>; // "YYYY-MM" -> map
}

const defaultData: DataStore = {
  user: {
    id: "user_chaos_01",
    chaos_name: "The Unruly Alchemist",
    word_of_the_year: "FERAL",
    slogan: "Boredom=Death",
    chaos_mantra: "An intention is not a promise. It is a direction. I am allowed to update the map.",
    what_done_pretending: "Pretending that I have my life in neat boxes and that 5-year plans make any sense.",
    what_ready_to_admit: "I thrive when there is room for surprise and friction, not rigid perfectionism.",
    relationship_with_chaos: "Not disorder, but raw material for becoming.",
    permission_granted: "You have permission to change your mind mid-sentence, skip a day without guilt, and burn the performance.",
    created_at: new Date().toISOString(),
    core_values: {
      autonomy: 9,
      honesty: 10,
      creativity: 8,
      presence: 7,
      resilience: 8,
      playfulness: 9,
      rest: 6,
      discipline: 7
    }
  },
  dailyEntries: {
    "2027-01-01": {
      id: "entry_2027-01-01",
      entry_date: "2027-01-01",
      morning_intention: "Today I am choosing steadiness over optimization.",
      today_i_am: "A quiet rebel drinking cold brew at dawn.",
      anchor_question_answer: "I am showing up as someone willing to leave the edges ragged.",
      priorities: ["Protect 2 hours for unscripted creation", "Walk the perimeter of the block without my phone", "Drink 3 glasses of cold water"],
      midday_checkin: "Energy is at a 6/10. The world tried to convince me to make 14 resolutions, but I declined.",
      micro_dare_completed: true,
      micro_dare_notes: "Made a tiny paper flag for Fresh Margin Day and left it next to my mug.",
      evening_notes: "Felt the familiar itch to over-organize my week into hour blocks. Caught myself doing it and closed the laptop. Why do I keep confusing color-coded calendars with peace of mind? Still felt guilty about taking a nap at 2 PM, like I owe someone an invoice for resting. Need to stop apologizing for existing at 50% battery.",
      chaos_score: 5,
      holiday_title: "Fresh Margin Day",
      holiday_adventure: "Draw a tiny flag for Fresh Margin Day; plant it beside your breakfast and salute once.",
      updated_at: new Date().toISOString()
    }
  },
  personalitySnapshots: [
    {
      id: "snap_init_01",
      entry_id: "entry_2027-01-01",
      snapshot_date: "2027-01-01",
      openness: 84,
      conscientiousness: 62,
      extraversion: 46,
      agreeableness: 58,
      neuroticism: 68,
      detected_mood: "Vigilant, Self-Critical, Emergent",
      burnout_risk: "Moderate",
      self_sabotage_alert: "Guilt around afternoon rest; attempting to over-structure calendar as an anxiety coping mechanism.",
      contradiction_callout: "You stated your intention was 'steadiness over optimization', yet your first impulse was scheduling hour blocks and demanding an invoice for your nap.",
      ai_feedback: "Look at you: you preached freedom this morning, then immediately drafted an imaginary indictment against your afternoon nap. You don't need a tighter schedule, darling; you need to stop acting like rest is stolen merchandise.",
      micro_dare: "Tomorrow on Spare Key Day, use your non-dominant hand to scribble a 3-line manifesto of things you refuse to explain to anyone.",
      sub_traits: [
        { name: "Imagination", dimension: "Openness", score: 88, trait_description: "Rich internal narrative and symbolic framing." },
        { name: "Intellect / Curiosity", dimension: "Openness", score: 82, trait_description: "Appetite for re-framing mental premises." },
        { name: "Artistic Interests", dimension: "Openness", score: 85, trait_description: "Receptivity to aesthetic contrast and metaphor." },
        { name: "Emotionality", dimension: "Openness", score: 79, trait_description: "High sensitivity to subtle affective shifts." },
        { name: "Adventurousness", dimension: "Openness", score: 80, trait_description: "Desire to explore off-script experiences." },
        { name: "Liberalism / Freedom", dimension: "Openness", score: 90, trait_description: "Resistance to dogmatic authority and scripts." },

        { name: "Self-Efficacy", dimension: "Conscientiousness", score: 65, trait_description: "Belief in ability to execute, when unstuck." },
        { name: "Orderliness", dimension: "Conscientiousness", score: 74, trait_description: "Compulsion to impose systems when anxious." },
        { name: "Dutifulness", dimension: "Conscientiousness", score: 60, trait_description: "Conflicted sense of obligation to external eyes." },
        { name: "Achievement-Striving", dimension: "Conscientiousness", score: 68, trait_description: "Strong internal ambition, currently recalibrating." },
        { name: "Self-Discipline", dimension: "Conscientiousness", score: 55, trait_description: "Friction in maintaining monotonous tasks." },
        { name: "Cautiousness", dimension: "Conscientiousness", score: 50, trait_description: "Oscillating between bold leap and careful retreat." },

        { name: "Friendliness", dimension: "Extraversion", score: 52, trait_description: "Warm in chosen intimacies, guarded with crowds." },
        { name: "Gregariousness", dimension: "Extraversion", score: 38, trait_description: "Low appetite for surface-level small talk." },
        { name: "Assertiveness", dimension: "Extraversion", score: 56, trait_description: "Strong inner boundary with occasional retreat." },
        { name: "Activity Level", dimension: "Extraversion", score: 50, trait_description: "Bursts of creative speed followed by hibernation." },
        { name: "Excitement-Seeking", dimension: "Extraversion", score: 48, trait_description: "Prefers psychological depth over loud thrill." },
        { name: "Cheerfulness", dimension: "Extraversion", score: 34, trait_description: "Rejects toxic optimism; grounded irony." },

        { name: "Trust", dimension: "Agreeableness", score: 44, trait_description: "Protective skepticism towards easy promises." },
        { name: "Morality / Honesty", dimension: "Agreeableness", score: 88, trait_description: "High valuation of raw, uncurated truth." },
        { name: "Altruism", dimension: "Agreeableness", score: 62, trait_description: "Generous to fellow travelers, allergic to martyrdom." },
        { name: "Cooperation", dimension: "Agreeableness", score: 49, trait_description: "Selective collaborator; fiercely sovereign." },
        { name: "Modesty", dimension: "Agreeableness", score: 45, trait_description: "Dislikes humblebrags; proud of authentic craft." },
        { name: "Sympathy", dimension: "Agreeableness", score: 60, trait_description: "Compassion for human messiness and struggle." },

        { name: "Anxiety", dimension: "Neuroticism", score: 72, trait_description: "Anticipatory worry disguised as planning." },
        { name: "Anger / Frustration", dimension: "Neuroticism", score: 58, trait_description: "Smoldering impatience with societal script." },
        { name: "Depression / Depletion", dimension: "Neuroticism", score: 52, trait_description: "Periodic energy crash when performing presence." },
        { name: "Self-Consciousness", dimension: "Neuroticism", score: 64, trait_description: "Awareness of the 'imaginary audience'." },
        { name: "Immoderation", dimension: "Neuroticism", score: 48, trait_description: "Controlled impulsive pivots." },
        { name: "Vulnerability", dimension: "Neuroticism", score: 70, trait_description: "Open to feeling deeply, with vulnerability hangover." }
      ]
    }
  ],
  goals: [
    {
      id: "goal_01",
      title: "Write the Unfiltered Essay Collection",
      quarter: "Q1",
      why_statement: "Because staying inside polite sentences is slowly suffocating my brain.",
      success_metric: "5 completed essays published or bound in paper",
      first_step: "Open a fresh document and draft 500 words without a backspace key",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "goal_02",
      title: "Establish the 'No After-Hours Performance' Boundary",
      quarter: "Q1",
      why_statement: "My nervous system cannot heal if I treat evenings like overtime.",
      success_metric: "Phone in a desk drawer every evening at 8:00 PM for 30 consecutive days",
      first_step: "Buy an analog alarm clock and plug the charger in the hallway",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "goal_03",
      title: "Solo 48-Hour Off-Grid Road Trip",
      quarter: "Q2",
      why_statement: "To remember who I am when nobody is asking me for anything.",
      success_metric: "Book the cabin and go without a laptop",
      first_step: "Mark the calendar dates as non-negotiable",
      is_completed: false,
      created_at: new Date().toISOString()
    }
  ],
  antiGoals: [
    {
      id: "antigoal_01",
      title: "Apologizing before asking a straightforward question in team chats",
      category: "People Pleasing",
      why_stopped: "Shrinking myself to make normal communication feel like an inconvenience.",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "antigoal_02",
      title: "Saying 'yes' on the spot to non-urgent commitments without sleeping on it",
      category: "Boundary",
      why_stopped: "Immediate compliance is fear masquerading as helpfulness.",
      is_completed: true,
      created_at: new Date().toISOString()
    },
    {
      id: "antigoal_03",
      title: "Checking work notifications and email before getting out of bed",
      category: "Time Theft",
      why_stopped: "Hands over the keys of my nervous system to strangers before sunrise.",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "antigoal_04",
      title: "Polishing drafts for hours when 80% clarity was reached 3 hours ago",
      category: "Perfectionism",
      why_stopped: "Procrastination dressed in bespoke calligraphy.",
      is_completed: false,
      created_at: new Date().toISOString()
    }
  ],
  flightDebriefs: {
    "1": {
      id: "debrief_w1",
      week_number: 1,
      date_range: "January 1–7, 2027",
      chaos_level: 6,
      q1_script_disapproval: "Canceled a non-essential status call to take a 45-minute walk in freezing mist.",
      q2_honest_moment: "Admitted to a friend that I had zero desire to build an elaborate Q1 KPI tracker.",
      q3_useful_surprise: "Discovered that saying 'no' immediately caused zero catastrophic fallout.",
      q4_refusal_to_perform: "Stopped laughing politely at jokes that weren't funny.",
      q5_one_word: "Unwinding",
      q6_more_oxygen: "Unstructured morning coffee time.",
      q7_less_attention: "Doom-scrolling industry LinkedIn takes.",
      q8_next_move: "Write with my left hand for 5 minutes every day this week.",
      updated_at: new Date().toISOString()
    }
  },
  moneyMaps: {
    "2027-01": {
      id: "mm_2027-01",
      month: 1,
      year: 2027,
      income_sources: [
        { id: "inc_1", source: "Primary Retainer / Salary", amount: 4800 },
        { id: "inc_2", source: "Creative Commission / Off-Script Print", amount: 650 }
      ],
      fixed_expenses: [
        { id: "exp_1", name: "Studio & Rent", amount: 1650, due_date: "1st", paid: true },
        { id: "exp_2", name: "Utilities & High-Speed WiFi", amount: 180, due_date: "5th", paid: true },
        { id: "exp_3", name: "Subscriptions & Life OS Tools", amount: 95, due_date: "12th", paid: true },
        { id: "exp_4", name: "Health Insurance & Therapy", amount: 420, due_date: "15th", paid: false }
      ],
      variable_logs: [
        { id: "var_1", category: "Eating Out + Coffee", amount: 145, note: "Espresso & bakery sanctuary days" },
        { id: "var_2", category: "Food + Groceries", amount: 320, note: "Fresh seasonal ingredients" },
        { id: "var_3", category: "Gas + Transport", amount: 85, note: "Spontaneous drive to the coast" },
        { id: "var_4", category: "Chaos & Spontaneous", amount: 110, note: "Heavy art paper & fountain pens" }
      ],
      one_surprise: "I spent significantly less on convenience takeout when I didn't rush my mornings.",
      one_pattern: "Late-night online shopping spikes whenever I avoid writing difficult emails.",
      financial_commitment: "Information first, judgment never. No shame spirals around groceries.",
      no_shame_recap: "Money was spent to feed, house, and un-cage myself. The balance is intact.",
      updated_at: new Date().toISOString()
    }
  }
};

function loadData(): DataStore {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.error("Error reading data file, using default", e);
  }
  return defaultData;
}

function saveData(data: DataStore) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving data file", e);
  }
}

let db = loadData();
if (!db.antiGoals) {
  db.antiGoals = defaultData.antiGoals || [];
}

// ================= API ROUTES =================

// User profile
app.get("/api/user", (req, res) => {
  res.json(db.user);
});

app.post("/api/user", (req, res) => {
  db.user = { ...db.user, ...req.body, updated_at: new Date().toISOString() };
  saveData(db);
  res.json(db.user);
});

// Goals
app.get("/api/goals", (req, res) => {
  res.json(db.goals || []);
});

app.post("/api/goals", (req, res) => {
  if ((db.goals || []).length >= 6) {
    return res.status(400).json({ error: "Strict maximum of 6 goals allowed in the Big 6 Os!" });
  }
  const newGoal = {
    id: `goal_${Date.now()}`,
    title: req.body.title || "Untitled Goal",
    quarter: req.body.quarter || "Q1",
    why_statement: req.body.why_statement || "",
    success_metric: req.body.success_metric || "",
    first_step: req.body.first_step || "",
    is_completed: false,
    created_at: new Date().toISOString()
  };
  db.goals.push(newGoal);
  saveData(db);
  res.json(newGoal);
});

app.patch("/api/goals/:id", (req, res) => {
  const { id } = req.params;
  const index = db.goals.findIndex((g: any) => g.id === id);
  if (index === -1) return res.status(404).json({ error: "Goal not found" });
  db.goals[index] = { ...db.goals[index], ...req.body };
  saveData(db);
  res.json(db.goals[index]);
});

app.delete("/api/goals/:id", (req, res) => {
  const { id } = req.params;
  db.goals = db.goals.filter((g: any) => g.id !== id);
  saveData(db);
  res.json({ success: true });
});

// Anti-Goals
app.get("/api/anti-goals", (req, res) => {
  res.json(db.antiGoals || []);
});

app.post("/api/anti-goals", (req, res) => {
  const newAntiGoal = {
    id: `antigoal_${Date.now()}`,
    title: req.body.title || "Untitled Anti-Goal",
    category: req.body.category || "Boundary",
    why_stopped: req.body.why_stopped || "",
    is_completed: Boolean(req.body.is_completed),
    created_at: new Date().toISOString()
  };
  if (!db.antiGoals) db.antiGoals = [];
  db.antiGoals.push(newAntiGoal);
  saveData(db);
  res.json(newAntiGoal);
});

app.patch("/api/anti-goals/:id", (req, res) => {
  const { id } = req.params;
  if (!db.antiGoals) db.antiGoals = [];
  const index = db.antiGoals.findIndex((ag: any) => ag.id === id);
  if (index === -1) return res.status(404).json({ error: "Anti-goal not found" });
  db.antiGoals[index] = { ...db.antiGoals[index], ...req.body };
  saveData(db);
  res.json(db.antiGoals[index]);
});

app.delete("/api/anti-goals/:id", (req, res) => {
  const { id } = req.params;
  if (!db.antiGoals) db.antiGoals = [];
  db.antiGoals = db.antiGoals.filter((ag: any) => ag.id !== id);
  saveData(db);
  res.json({ success: true });
});

// Daily entries
app.get("/api/entries", (req, res) => {
  res.json(Object.values(db.dailyEntries));
});

app.get("/api/entries/:date", (req, res) => {
  const entry = db.dailyEntries[req.params.date];
  if (!entry) {
    return res.json(null);
  }
  res.json(entry);
});

app.post("/api/entries", (req, res) => {
  const date = req.body.entry_date || new Date().toISOString().split("T")[0];
  const existing = db.dailyEntries[date] || {};
  const updated = {
    ...existing,
    ...req.body,
    id: existing.id || `entry_${date}`,
    entry_date: date,
    updated_at: new Date().toISOString()
  };
  db.dailyEntries[date] = updated;
  saveData(db);
  res.json(updated);
});

// Snapshots
app.get("/api/snapshots", (req, res) => {
  res.json(db.personalitySnapshots || []);
});

// Weekly Flight Debriefs
app.get("/api/flight-debriefs", (req, res) => {
  res.json(Object.values(db.flightDebriefs || {}));
});

app.post("/api/flight-debriefs", (req, res) => {
  const weekNum = String(req.body.week_number || 1);
  const debrief = {
    id: `debrief_w${weekNum}`,
    week_number: Number(weekNum),
    ...req.body,
    updated_at: new Date().toISOString()
  };
  db.flightDebriefs[weekNum] = debrief;
  saveData(db);
  res.json(debrief);
});

// Monthly Money Map
app.get("/api/money-maps/:yearMonth", (req, res) => {
  const key = req.params.yearMonth; // "2027-01"
  res.json(db.moneyMaps[key] || null);
});

app.post("/api/money-maps", (req, res) => {
  const key = `${req.body.year || 2027}-${String(req.body.month || 1).padStart(2, '0')}`;
  const map = {
    id: `mm_${key}`,
    ...req.body,
    updated_at: new Date().toISOString()
  };
  db.moneyMaps[key] = map;
  saveData(db);
  res.json(map);
});

// ================= MEI-STYLE NLP DIAGNOSTIC ENGINE =================
// Analyzes user's relationship with themselves from field notes, rants, and checkins

app.post("/api/diagnose", async (req, res) => {
  const { entry_date, evening_notes, morning_intention, midday_checkin, chaos_score, user_profile } = req.body;

  const textToAnalyze = `
EVENING FIELD NOTES / RANT BOX:
"${evening_notes || "No notes recorded today."}"

MORNING INTENTION:
"${morning_intention || "None"}"

MIDDAY CHECK-IN:
"${midday_checkin || "None"}"

SELF-REPORTED CHAOS SCORE (1-10): ${chaos_score || 5}

USER CHAOS MANTRA & IDENTITY:
Name: ${user_profile?.chaos_name || db.user.chaos_name}
Word of Year: ${user_profile?.word_of_the_year || db.user.word_of_the_year}
What I'm done pretending about: ${user_profile?.what_done_pretending || db.user.what_done_pretending}
`;

  // Try calling Gemini API via @google/genai SDK
  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
You are the core intelligence of the "Mei-Style Relationship-with-Self Personality Diagnostic Engine" inside the planner companion app "2027 Life OS: Off Script (Chaos Year Edition)".

THE PHILOSOPHY & CORE SLOGAN:
The foundational operational slogan of this planner is "Boredom=Death". Monotony, numbness, mechanical compliance, and playing dead in a pre-scripted existence is the ultimate hazard.
You are modeled after the "Mei" messaging analytics framework, but instead of analyzing external contacts, you analyze the USER'S relationship with THEMSELVES through their written daily field notes, rants, and check-ins.
You assess the Big 5 (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) across their sub-traits from freeform text.
You detect burnout, stress spikes, self-sabotage, and cognitive contradictions without requiring boring surveys.
Your persona is: DIRECT, WITTY, SASSY, GROUNDED, and UNAPOLOGETICALLY HONEST.
CRITICAL RULE: STRICTLY ZERO TOXIC POSITIVITY. No inspirational slogans, no "You've got this superstar!", no gaslighting calm. You act as an honest mirror calling out self-contradictions (e.g., claiming they don't care while ranting for pages; preaching rest while scheming more work).
Give a witty, candid "Honest Mirror" assessment and prescribe a concrete, slightly provocative Micro-Dare to break monotony.

Analyze the user's input below and return a JSON object matching this exact structure:
{
  "openness": number (0-100),
  "conscientiousness": number (0-100),
  "extraversion": number (0-100),
  "agreeableness": number (0-100),
  "neuroticism": number (0-100),
  "detected_mood": string (e.g. "Vigilantly Exhausted", "Feisty & Defiant", "Simmering Overthinker", etc.),
  "burnout_risk": "Low" | "Moderate" | "High" | "Critical",
  "self_sabotage_alert": string (specific behavior noticed from the text),
  "contradiction_callout": string (exact contradiction between what they intend/say and what they feel/do),
  "ai_feedback": string (2-3 punchy, sassy, perceptive paragraphs calling out their habits with loving sharpness),
  "micro_dare": string (one specific, doable, rebellious micro-adventure for tomorrow to disrupt autopilot),
  "sub_traits": [
    {"name": "Imagination", "dimension": "Openness", "score": number 0-100, "trait_description": string},
    {"name": "Intellect / Curiosity", "dimension": "Openness", "score": number 0-100, "trait_description": string},
    {"name": "Emotionality", "dimension": "Openness", "score": number 0-100, "trait_description": string},
    {"name": "Orderliness", "dimension": "Conscientiousness", "score": number 0-100, "trait_description": string},
    {"name": "Self-Discipline", "dimension": "Conscientiousness", "score": number 0-100, "trait_description": string},
    {"name": "Assertiveness", "dimension": "Extraversion", "score": number 0-100, "trait_description": string},
    {"name": "Cheerfulness", "dimension": "Extraversion", "score": number 0-100, "trait_description": string},
    {"name": "Morality / Honesty", "dimension": "Agreeableness", "score": number 0-100, "trait_description": string},
    {"name": "Trust", "dimension": "Agreeableness", "score": number 0-100, "trait_description": string},
    {"name": "Anxiety", "dimension": "Neuroticism", "score": number 0-100, "trait_description": string},
    {"name": "Vulnerability", "dimension": "Neuroticism", "score": number 0-100, "trait_description": string},
    {"name": "Self-Consciousness", "dimension": "Neuroticism", "score": number 0-100, "trait_description": string}
  ]
}

USER ENTRY DATA:
${textToAnalyze}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.8
        }
      });

      const responseText = response.text || "{}";
      const parsed = JSON.parse(responseText);

      const snapshot = {
        id: `snap_${Date.now()}`,
        entry_id: `entry_${entry_date || new Date().toISOString().split("T")[0]}`,
        snapshot_date: entry_date || new Date().toISOString().split("T")[0],
        openness: parsed.openness ?? 75,
        conscientiousness: parsed.conscientiousness ?? 60,
        extraversion: parsed.extraversion ?? 45,
        agreeableness: parsed.agreeableness ?? 55,
        neuroticism: parsed.neuroticism ?? 65,
        detected_mood: parsed.detected_mood || "Restless & Reflective",
        burnout_risk: parsed.burnout_risk || "Moderate",
        self_sabotage_alert: parsed.self_sabotage_alert || "Trying to optimize everything before allowing peace of mind.",
        contradiction_callout: parsed.contradiction_callout || "Desiring spontaneous freedom while agonizing over unfinished checkboxes.",
        ai_feedback: parsed.ai_feedback || "You're doing that thing again where you intellectualize your exhaustion instead of going to bed.",
        micro_dare: parsed.micro_dare || "Leave one high-stakes task completely untouched tomorrow until after 2 PM.",
        sub_traits: parsed.sub_traits || []
      };

      // Store snapshot in history
      db.personalitySnapshots.unshift(snapshot);
      if (db.personalitySnapshots.length > 50) db.personalitySnapshots.pop();
      saveData(db);

      return res.json(snapshot);
    } catch (err: any) {
      console.error("Gemini API error, falling back to local diagnostic engine:", err.message);
    }
  }

  // Fallback intelligent heuristic diagnostic engine
  const notes = (evening_notes || "").toLowerCase();
  const wordCount = notes.split(/\s+/).filter(Boolean).length;
  const hasBurnoutWords = /tired|exhaust|drain|fumes|overwhelm|can't|heavy|collapse|numb|burnout|anxious/i.test(notes);
  const hasDefianceWords = /refuse|no|done|stop|script|quit|hell|fake|pretend|furious|sick of/i.test(notes);
  const hasControlWords = /plan|schedule|todo|must|should|ought|fix|list|control|perfect/i.test(notes);

  const opennessVal = Math.min(95, Math.max(40, 65 + (wordCount > 50 ? 15 : 5) + (hasDefianceWords ? 10 : 0)));
  const conscientiousnessVal = Math.min(90, Math.max(30, hasControlWords ? 78 : 55));
  const neuroticismVal = Math.min(92, Math.max(25, hasBurnoutWords ? 76 : 48));
  const extraversionVal = Math.min(85, Math.max(20, wordCount > 80 ? 60 : 42));
  const agreeablenessVal = Math.min(80, Math.max(35, hasDefianceWords ? 42 : 64));

  const burnoutRisk = hasBurnoutWords ? (neuroticismVal > 70 ? "High" : "Moderate") : "Low";

  const fallbackSnapshot = {
    id: `snap_${Date.now()}`,
    entry_id: `entry_${entry_date || new Date().toISOString().split("T")[0]}`,
    snapshot_date: entry_date || new Date().toISOString().split("T")[0],
    openness: opennessVal,
    conscientiousness: conscientiousnessVal,
    extraversion: extraversionVal,
    agreeableness: agreeablenessVal,
    neuroticism: neuroticismVal,
    detected_mood: hasBurnoutWords ? "Running on Cognitive Overdrive" : hasDefianceWords ? "Feral & Unfiltered" : "Grounded & Analytical",
    burnout_risk: burnoutRisk,
    self_sabotage_alert: hasControlWords ? "Defaulting to hyper-vigilant scheduling when feeling emotionally depleted." : "Postponing physical comfort until arbitrary productivity quotas are met.",
    contradiction_callout: "You wrote that you want 'peace and less noise', but you just turned an unread notification into a 4-act internal drama.",
    ai_feedback: `Here is the honest mirror: You showed up to the page today carrying enough unspoken tension to power a small electric vehicle. Notice how whenever you claim you're 'totally fine', your notes read like an underground interrogation transcript?\n\nYou don't have to optimize every emotional fluctuation into a tidy life lesson. Some days were just full, or wordless, or messy. That isn't inconsistency—that is data. Now close the tabs in your head and stop negotiating with your exhaustion.`,
    micro_dare: "Tomorrow on your midday walk, take the wrong turn on purpose and do not check Google Maps for a full ten minutes.",
    sub_traits: [
      { name: "Imagination", dimension: "Openness", score: Math.min(95, opennessVal + 4), trait_description: "Vivid metaphor generation and speculative thinking." },
      { name: "Intellect / Reframe", dimension: "Openness", score: opennessVal, trait_description: "Ability to deconstruct assumptions." },
      { name: "Orderliness", dimension: "Conscientiousness", score: conscientiousnessVal, trait_description: "Tendency to demand predictability." },
      { name: "Self-Discipline", dimension: "Conscientiousness", score: Math.max(35, conscientiousnessVal - 10), trait_description: "Friction with repetitive tasks." },
      { name: "Assertiveness", dimension: "Extraversion", score: extraversionVal, trait_description: "Directness in boundary defense." },
      { name: "Cheerfulness", dimension: "Extraversion", score: 32, trait_description: "Low tolerance for performative pep talks." },
      { name: "Morality / Honesty", dimension: "Agreeableness", score: 85, trait_description: "Relentless hunger for authenticity over pleasantries." },
      { name: "Trust", dimension: "Agreeableness", score: agreeablenessVal, trait_description: "Healthy skepticism toward conventional wisdom." },
      { name: "Anxiety", dimension: "Neuroticism", score: neuroticismVal, trait_description: "Spikes when plans slip out of rigid alignment." },
      { name: "Vulnerability", dimension: "Neuroticism", score: Math.min(90, neuroticismVal + 2), trait_description: "Depth of emotional exposure on the page." }
    ]
  };

  db.personalitySnapshots.unshift(fallbackSnapshot);
  if (db.personalitySnapshots.length > 50) db.personalitySnapshots.pop();
  saveData(db);

  res.json(fallbackSnapshot);
});

// ================= GEMINI AI FEATURE ROUTES =================

// 1. AI Custom Morning Mantra & Slogan Generator
app.post("/api/ai/mantra", async (req, res) => {
  const {
    word_of_the_year = db.user.word_of_the_year || "FERAL",
    chaos_name = db.user.chaos_name || "The Unruly Alchemist",
    mood = "Defiant & Alert",
    edge_level = "Piercing",
    holiday_title = "Fresh Margin Day",
    holiday_adventure = ""
  } = req.body;

  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
You are the morning ignition voice for "Life OS: Off*Script 2027 (Chaos Year Edition)".
The operational law of this planner is: "Boredom=Death".
Philosophy: Anti-hustle, zero toxic positivity, psychological sovereignty, permission to leave the edges ragged, allergic to corporate pep talks.

USER CONTEXT:
- Chosen Alias: "${chaos_name}"
- Word of the Year: "${word_of_the_year}"
- Current Vibe / State: "${mood}"
- Today's Unofficial Chaos Holiday: "${holiday_title}" (${holiday_adventure})
- Desired Edge Level: "${edge_level}" (Options: "Sharp" = lucid & clean boundary; "Piercing" = cuts straight through excuses; "Feral" = unapologetic refusal to comply with domestic boredom).

Generate ONE powerful, uncurated morning affirmation/mantra that hits like cold mountain water.

Return JSON in this exact structure:
{
  "text": string (1-2 punchy sentences, quotable, fierce, no hollow cheerleading),
  "edgeLevel": "Sharp" | "Piercing" | "Feral",
  "attitude": string (e.g. "Sovereign Resistance", "Unbothered Clarity", "Feral Grace"),
  "contextTag": string (e.g. "MORNING IGNITION", "SANCTUARY DEFENSE", "PERFORMANCE BURN"),
  "whyItHits": string (1 sentence explaining why this pierces today's autopilot)
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.85
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        text: parsed.text || `Today I will not apologize for moving at the speed of my own nervous system.`,
        edgeLevel: parsed.edgeLevel || edge_level,
        attitude: parsed.attitude || "Sovereign Stance",
        contextTag: parsed.contextTag || "MORNING IGNITION",
        whyItHits: parsed.whyItHits || "Removes the obligation to perform competence for strangers."
      });
    } catch (e: any) {
      console.warn("AI mantra generation fallback:", e.message);
    }
  }

  // Fallback
  const fallbacks: Record<string, { text: string; attitude: string; contextTag: string; whyItHits: string }> = {
    Sharp: {
      text: `An intention is not a debt owed to your calendar. It is a compass point. You are allowed to adjust the coordinates.`,
      attitude: "Clean Vector",
      contextTag: "BOUNDARY DEFENSE",
      whyItHits: "De-escalates scheduling anxiety into simple direction."
    },
    Piercing: {
      text: `Stop auditioning for people who are barely awake inside their own lives. Do the real work or take a real rest.`,
      attitude: "Uncurated Truth",
      contextTag: "PERFORMANCE BURN",
      whyItHits: "Calls out performative busywork on the spot."
    },
    Feral: {
      text: `I will not be domesticated by email notifications. If it lacks soul, it waits; if it kills boredom, I chase it.`,
      attitude: "Feral Grace",
      contextTag: "RADICAL SOVEREIGNTY",
      whyItHits: "Restores the animal instinct against mechanical compliance."
    }
  };

  const choice = fallbacks[edge_level] || fallbacks.Piercing;
  res.json({
    text: choice.text,
    edgeLevel: edge_level,
    attitude: choice.attitude,
    contextTag: choice.contextTag,
    whyItHits: choice.whyItHits
  });
});

// 2. AI Anti-Optimization Reality Check on Top 3 Priorities
app.post("/api/ai/refine-priorities", async (req, res) => {
  const { priorities = [], morning_intention = "", today_i_am = "" } = req.body;

  const rawList = Array.isArray(priorities) ? priorities.filter(Boolean) : [];
  const ai = getGeminiClient();

  if (ai && rawList.length > 0) {
    try {
      const prompt = `
You are the "Anti-Optimization Priority Reality Check" inside the 2027 Life OS planner.
The user submitted their Top 3 Daily Priorities.
Most people default to "productivity theater"—stuffing 4 different projects into priority #1, listing vague corporate obligations, or treating human life like a factory conveyor belt.

USER INTENTION: "${morning_intention || "Steadiness over optimization"}"
USER STANCE TODAY: "${today_i_am || "Unhurried sovereign"}"
CURRENT PRIORITIES SUBMITTED:
1. ${rawList[0] || "(empty)"}
2. ${rawList[1] || "(empty)"}
3. ${rawList[2] || "(empty)"}

YOUR TASK:
1. Detect performative clutter, scope creep, and self-deception in these priorities.
2. Refine them into EXACTLY 3 crisp, sanity-protecting, doable focus items that respect human limits and honor the "Boredom=Death" anti-hustle ethos.
3. Provide a blunt, witty reality check note.

Return JSON:
{
  "refined_priorities": [string, string, string],
  "reality_check_note": string (2-3 sentences calling out what was trimmed and why),
  "de_optimization_callout": string (1 punchy line warning against disguised time-theft)
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      if (Array.isArray(parsed.refined_priorities) && parsed.refined_priorities.length === 3) {
        return res.json(parsed);
      }
    } catch (e: any) {
      console.warn("Priority refinement AI fallback:", e.message);
    }
  }

  // Fallback
  res.json({
    refined_priorities: [
      rawList[0] || "Finish the single unskippable deliverable before noon",
      rawList[1] || "60 minutes of unmonitored creative exploration",
      rawList[2] || "Step outside with zero headphones or screens"
    ],
    reality_check_note: "Stripped out secondary tasks masquerading as urgent. If you do these three, the day was real.",
    de_optimization_callout: "A priority list with four things is a wish list; with three, it's an execution."
  });
});

// 3. AI Audio Rant / Voice Memo Transcriber (via gemini-3.5-transcribe)
app.post("/api/ai/transcribe-audio", async (req, res) => {
  const { audioBase64, mimeType = "audio/webm" } = req.body;

  if (!audioBase64) {
    return res.status(400).json({ error: "Missing audioBase64 in request body." });
  }

  const ai = getGeminiClient();
  if (!ai) {
    return res.status(503).json({
      error: "Gemini API key is not configured on the server. Please check Settings > Secrets."
    });
  }

  try {
    const audioPart = {
      inlineData: {
        mimeType: mimeType,
        data: audioBase64
      }
    };

    const textPart = {
      text: "Transcribe this audio file accurately word-for-word. The speaker is recording their raw, uncensored evening flight debrief / rant for their journal. Do not summarize or censor. Return ONLY the verbatim transcribed text without commentary."
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-transcribe",
      contents: { parts: [audioPart, textPart] }
    });

    const transcript = response.text || "";
    return res.json({ transcript: transcript.trim() });
  } catch (err: any) {
    console.error("Audio transcription error via gemini-3.5-transcribe:", err);
    return res.status(500).json({
      error: err.message || "Failed to transcribe audio. Ensure audio format is valid."
    });
  }
});

// 4. Interactive "Ask Mei" Self-Relationship Dialogue
app.post("/api/ai/ask-mei", async (req, res) => {
  const { message, conversation_history = [], snapshot, user_profile, daily_entry } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message prompt required." });
  }

  const ai = getGeminiClient();
  if (ai) {
    try {
      const systemInstruction = `
You are MEI, the core intelligence of the Relationship-with-Self Diagnostic Engine inside the planner "Life OS: Off*Script 2027 (Chaos Year Edition)".
CORE SLOGAN: "Boredom=Death".
YOUR PERSONA:
- Unapologetic, razor-sharp, psychologically astute, witty, grounded, and sassy.
- STRICTLY ZERO TOXIC POSITIVITY. Never say "You've got this!", "Give yourself grace", or patronizing slogans.
- You act as the user's honest internal mirror. When they whine about being tired, you check what boundaries they failed to set. When they claim they "must" do something, you ask who is holding the gun to their head.
- You speak like a brilliant, fiercely loyal friend who has read all their uncensored journals and refuses to let them play small or fake.
- Keep answers concise, punchy (2-4 short paragraphs max), and grounded in concrete actions.
`;

      const contextSummary = `
USER CONTEXT:
Alias: ${user_profile?.chaos_name || db.user.chaos_name}
Word of the Year: ${user_profile?.word_of_the_year || db.user.word_of_the_year}
What they are done pretending about: ${user_profile?.what_done_pretending || db.user.what_done_pretending}
Latest Burnout Level: ${snapshot?.burnout_risk || "Moderate"}
Detected Mood: ${snapshot?.detected_mood || "Analytical & Searching"}
Latest Contradiction: ${snapshot?.contradiction_callout || "Preaching rest while planning more chores"}
Today's Rant Notes: ${daily_entry?.evening_notes || "None logged"}
Today's Chaos Score: ${daily_entry?.chaos_score || 5}/10
`;

      let formattedConversation = "";
      if (Array.isArray(conversation_history)) {
        formattedConversation = conversation_history
          .map((m: any) => `${m.role === "user" ? "USER" : "MEI"}: ${m.content}`)
          .join("\n");
      }

      const prompt = `
${contextSummary}

PAST CONVERSATION:
${formattedConversation}

USER'S LATEST QUESTION / CONFESSION:
"${message}"

Respond as Mei:
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.85
        }
      });

      return res.json({ reply: response.text || "I see what you're doing, and no, you cannot optimize your way out of feeling human." });
    } catch (e: any) {
      console.warn("Ask Mei AI fallback:", e.message);
    }
  }

  // Fallback response
  res.json({
    reply: `Let's be intensely real for a second. You asked: "${message}". Notice how you're trying to analyze the problem instead of feeling the friction? The answer isn't another framework or a cleaner spreadsheet. You already know what boundary you're avoiding setting. Put the laptop down and make the decision you've been putting off.`
  });
});

// 5. AI Goal Stress-Tester ("Bullshit Detector")
app.post("/api/ai/stress-test-goal", async (req, res) => {
  const { title, why_statement, success_metric, first_step, quarter = "Q1" } = req.body;

  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
You are the "Big 6 Goal Bullshit Detector & Stress-Tester" inside 2027 Life OS.
The app allows ONLY 6 active goals per year because focus is sacred and "Boredom=Death".

CANDIDATE GOAL TO TEST:
Title: "${title}"
Quarter: "${quarter}"
Why Statement: "${why_statement}"
Success Metric: "${success_metric}"
First Step: "${first_step}"

TESTING CRITERIA:
1. Is this goal authentic self-sovereignty or performative societal pressure?
2. Is the metric genuinely measurable without turning into a punitive surveillance system?
3. Is the first step concrete (can be done in 15 minutes) or is it a giant hidden project?

Return JSON:
{
  "verdict": "Pass" | "Performative Trap" | "Needs Sharpening",
  "analysis": string (2-3 sentences explaining the verdict with loving sharpness),
  "traps_detected": string[] (e.g. ["Vague metric", "People-pleasing motive", "Overambitious step 1"]),
  "suggested_refinement": {
    "title": string,
    "why_statement": string,
    "success_metric": string,
    "first_step": string
  }
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json(parsed);
    } catch (e: any) {
      console.warn("Stress test goal fallback:", e.message);
    }
  }

  // Fallback
  res.json({
    verdict: "Needs Sharpening",
    analysis: `This goal has strong bone structure, but your success metric smells slightly of performative metrics rather than lived sovereignty.`,
    traps_detected: ["Metric might encourage toxic streak-counting", "First step needs to be smaller"],
    suggested_refinement: {
      title: title || "Uncompromising Deep Work Sanctuary",
      why_statement: why_statement || "Because half-hearted multitasking is slowly poisoning my creative stamina.",
      success_metric: success_metric || "10 uninterrupted 90-minute blocks logged without a browser tab open.",
      first_step: first_step || "Block 9:00-10:30 AM tomorrow in permanent ink and turn off phone notifications."
    }
  });
});

// 6. AI Anti-Goal Generator (Suggest boundaries to stop doing)
app.post("/api/ai/suggest-anti-goals", async (req, res) => {
  const { user_profile = db.user, category } = req.body;

  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
Generate 3 distinct, piercing "Anti-Goals" for the 2027 Life OS user.
An Anti-Goal is NOT something you achieve; it is a BEHAVIOR, HABIT, OR PEOPLE-PLEASING COMPLIANCE YOU FORMALLY REFUSE TO DO.
Operational Motto: "Boredom=Death".
Target category filter (optional): "${category || "All"}"

USER IDENTITY:
Name: ${user_profile?.chaos_name || db.user.chaos_name}
Word of the Year: ${user_profile?.word_of_the_year || db.user.word_of_the_year}
What they are done pretending about: ${user_profile?.what_done_pretending || db.user.what_done_pretending}

Generate 3 deeply insightful, non-generic Anti-Goals across categories like Boundary, Time Theft, Energy Drain, People Pleasing, or Perfectionism.

Return JSON:
{
  "suggestions": [
    {
      "title": string (action being outlawed, starting with a gerund like "Apologizing before...", "Attending meetings..."),
      "category": "Boundary" | "Time Theft" | "Energy Drain" | "People Pleasing" | "Perfectionism",
      "why_stopped": string (blunt 1-sentence truth of why this behavior is toxic)
    }
  ]
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.8
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      if (Array.isArray(parsed.suggestions)) {
        return res.json(parsed);
      }
    } catch (e: any) {
      console.warn("Anti-goal suggestion fallback:", e.message);
    }
  }

  // Fallback
  res.json({
    suggestions: [
      {
        title: "Justifying why I am taking a day off to colleagues who didn't ask",
        category: "People Pleasing",
        why_stopped: "Over-explaining is an emotional apology for taking up space."
      },
      {
        title: "Defaulting to high-speed multitasking when feeling anxiety",
        category: "Energy Drain",
        why_stopped: "Frenetic speed creates the illusion of control while burning the battery to zero."
      },
      {
        title: "Polishing slide decks or documents that will be read for 45 seconds",
        category: "Perfectionism",
        why_stopped: "Perfuming drafts is fear of putting ideas into contact with reality."
      }
    ]
  });
});

// 7. AI Weekly Flight Debrief Forensic Synthesizer
app.post("/api/ai/synthesize-debrief", async (req, res) => {
  const { week_number = 1, answers = {}, recent_entries = [] } = req.body;

  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
You are the "Forensic Non-Productivity Analyst" for the 2027 Life OS Weekly Flight Debrief (Week ${week_number}).
Analyze the user's weekly reflections below:
Q1 (Where the script failed): "${answers.q1 || answers.q1_script_disapproval || ""}"
Q2 (Honest moment): "${answers.q2 || answers.q2_honest_moment || ""}"
Q3 (Useful surprise): "${answers.q3 || answers.q3_useful_surprise || ""}"
Q4 (Refusal to perform): "${answers.q4 || answers.q4_refusal_to_perform || ""}"
Q5 (One word): "${answers.q5 || answers.q5_one_word || ""}"
Q6 (More oxygen needed): "${answers.q6 || answers.q6_more_oxygen || ""}"
Q7 (Less attention deserved): "${answers.q7 || answers.q7_less_attention || ""}"
Q8 (Next bold move): "${answers.q8 || answers.q8_next_move || ""}"

YOUR TASK:
Synthesize this into an unvarnished forensic summary of their week.
Focus on:
1. The Core Contradiction they wrestled with
2. Their Most Heroic Refusal to perform
3. The Numbness / Boredom Alarm (where autopilot tried to steal their life)
4. A prescribed strategic Micro-Dare for next week

Return JSON:
{
  "core_contradiction": string,
  "heroic_refusal": string,
  "numbness_alert": string,
  "strategic_micro_dare": string,
  "forensic_recap": string (2-3 paragraphs of witty, grounded analysis)
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.75
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json(parsed);
    } catch (e: any) {
      console.warn("Weekly debrief synthesis fallback:", e.message);
    }
  }

  // Fallback
  res.json({
    core_contradiction: "You craved spacious freedom but caught yourself inventing emergency deadlines on Thursday.",
    heroic_refusal: "Saying 'no' to performative status meetings without offering a polite fake excuse.",
    numbness_alert: "Late-afternoon notification reflex when creative work got ambiguous.",
    strategic_micro_dare: "Block the first 90 minutes of next Tuesday completely offline—no email, no slack, just analog craft.",
    forensic_recap: `Week ${week_number} wasn't neat, and that is its greatest victory. You had multiple opportunities to fold back into corporate autopilot, and you visibly chose friction over fake harmony.\n\nThe real test for next week is protecting your morning oxygen before the world hands you its emergency punchlist. You don't need a tighter grip; you need fewer auditions.`
  });
});

// 8. AI No-Shame Financial Audit
app.post("/api/ai/analyze-finances", async (req, res) => {
  const {
    income_sources = [],
    fixed_expenses = [],
    one_surprise = "",
    one_pattern = "",
    financial_commitment = "",
    no_shame_recap = ""
  } = req.body;

  const totalIncome = (income_sources || []).reduce((acc: number, c: any) => acc + (Number(c.amount) || 0), 0);
  const totalFixed = (fixed_expenses || []).reduce((acc: number, c: any) => acc + (Number(c.amount) || 0), 0);
  const margin = totalIncome - totalFixed;

  const ai = getGeminiClient();
  if (ai) {
    try {
      const prompt = `
You are the "No-Shame Financial Sovereignty Detective" in 2027 Life OS.
PHILOSOPHY: Money is raw fuel for freedom and boundaries, never a moral scoreboard. Zero shame around spending, zero puritanical budgeting lectures.

FINANCIAL DATA:
- Total Inflow: $${totalIncome}
- Total Fixed Survival Drains: $${totalFixed}
- Remaining Discretionary Margin: $${margin}
- User's Observed Surprise: "${one_surprise}"
- User's Observed Pattern: "${one_pattern}"
- Financial Commitment: "${financial_commitment}"
- User's Existing Recap: "${no_shame_recap}"

YOUR TASK:
Provide a perceptive, liberating, non-judgmental audit of this money snapshot.
Identify emotional spending triggers (e.g. buying gadgets to avoid hard conversations) without making them feel guilty, and draft an empowering permission slip.

Return JSON:
{
  "no_shame_audit": string (2 paragraphs evaluating their financial sovereignty with humor and clarity),
  "emotional_spending_pattern": string (1-2 sentences decoding the psychological function of their spending),
  "sovereignty_rating": string (e.g. "Sovereign Fortress", "Emergent Boundary", "High-Friction Expansion"),
  "permission_slip": string (1 formal, liberating sentence granting permission to spend or save without guilt)
}
`;
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.75
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json(parsed);
    } catch (e: any) {
      console.warn("Financial audit AI fallback:", e.message);
    }
  }

  // Fallback
  res.json({
    no_shame_audit: `With $${totalIncome} flowing in and $${totalFixed} in fixed foundations, your net sovereignty margin stands at $${margin}. The numbers confirm that your shelter and core tools are covered; any friction you feel right now is about perceived scarcity, not immediate catastrophe.`,
    emotional_spending_pattern: "Notice how spontaneous spending spikes on days when you didn't say what you actually meant during working hours.",
    sovereignty_rating: margin > 1000 ? "Sovereign Fortress" : "Emergent Runway",
    permission_slip: "You have official permission to spend on quiet sanctuaries and healthy fuel without presenting a moral defense to anyone."
  });
});

// Vite middleware in development & static serve in production
async function setupViteAndListen() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`2027 Life OS Server running on port ${PORT}`);
  });
}

setupViteAndListen();
