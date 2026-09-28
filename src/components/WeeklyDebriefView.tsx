import React, { useState, useEffect } from 'react';
import { WeeklyFlightDebrief, ForensicDebriefResult } from '../types';
import {
  BookOpen,
  Save,
  Flame,
  Printer,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  AlertCircle,
  Eye,
  Edit3,
  Sparkles,
  Compass,
  Zap,
  Target,
  Quote,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { api } from '../services/api';

interface WeeklyDebriefViewProps {
  onSaveDebrief?: (debrief: WeeklyFlightDebrief) => void;
  initialWeek?: number;
}

interface PromptMeta {
  key: string;
  number: number;
  title: string;
  subPrompt: string;
  badge: string;
  badgeColor: string;
  placeholder: string;
}

const PROMPT_METAS: PromptMeta[] = [
  {
    key: 'q1',
    number: 1,
    title: 'Script Disapproval & Deviation',
    subPrompt: 'Where did you deviate from the script and feel disapproval?',
    badge: 'Boundary & Friction',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    placeholder: 'e.g. Refused to attend an optional meeting that had no agenda...'
  },
  {
    key: 'q2',
    number: 2,
    title: 'Most Honest Moment',
    subPrompt: 'What was your most honest moment this week?',
    badge: 'Uncurated Truth',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    placeholder: 'e.g. Admitted I was pretending to be enthusiastic when I was actually bored...'
  },
  {
    key: 'q3',
    number: 3,
    title: 'Useful Surprise',
    subPrompt: 'What surprise turned out to be useful?',
    badge: 'Raw Material',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    placeholder: 'e.g. An unexpected cancellation opened 3 hours of quiet deep focus...'
  },
  {
    key: 'q4',
    number: 4,
    title: 'Refusal to Perform',
    subPrompt: 'Where did you refuse to perform?',
    badge: 'Sovereignty',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    placeholder: 'e.g. Stopped nodding along in the group chat and said no to extra scope...'
  },
  {
    key: 'q5',
    number: 5,
    title: 'One-Word Vibe',
    subPrompt: 'One word for how this week actually felt:',
    badge: 'Visceral Core',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    placeholder: 'e.g. FERAL, GROUNDED, RECLAIMED, UNRULY'
  },
  {
    key: 'q6',
    number: 6,
    title: 'More Oxygen Next Week',
    subPrompt: 'What needs more oxygen next week?',
    badge: 'Sanctuary',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    placeholder: 'e.g. Silent morning walks with zero podcasts or inputs...'
  },
  {
    key: 'q7',
    number: 7,
    title: 'Less of Your Attention',
    subPrompt: 'What deserves less of your attention?',
    badge: 'Disinvestment',
    badgeColor: 'bg-slate-100 text-slate-800 border-stone-300',
    placeholder: 'e.g. Secondary Slack notifications and other people’s manufactured urgency...'
  },
  {
    key: 'q8',
    number: 8,
    title: 'Single Non-Negotiable Next Move',
    subPrompt: 'The single non-negotiable next move:',
    badge: 'Direct Vector',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    placeholder: 'e.g. Ship the prototype before Thursday and turn off the laptop...'
  }
];

export const WeeklyDebriefView: React.FC<WeeklyDebriefViewProps> = ({
  onSaveDebrief,
  initialWeek = 1
}) => {
  const [weekNumber, setWeekNumber] = useState(initialWeek);
  const [chaosLevel, setChaosLevel] = useState(6);
  const [viewMode, setViewMode] = useState<'display' | 'edit'>('display');

  // Answers State
  const [q1, setQ1] = useState("Felt pressure to follow a rigid routine that collapsed by Wednesday, and chose not to apologize for recalibrating.");
  const [q2, setQ2] = useState("Admitting out loud that I didn't want to attend the quarterly committee sync.");
  const [q3, setQ3] = useState("A 20-minute unscheduled walk completely resolved a sticky architecture bottleneck that hours of typing couldn't crack.");
  const [q4, setQ4] = useState("Refused to apologize for not answering non-urgent messages immediately outside studio hours.");
  const [q5, setQ5] = useState("FERAL");
  const [q6, setQ6] = useState("Quiet mornings with zero screens and hot coffee in natural light.");
  const [q7, setQ7] = useState("Other people's projected urgency and performative email responses.");
  const [q8, setQ8] = useState("Ship the core prototype architecture and refuse to second-guess the foundation.");

  const [isSaved, setIsSaved] = useState(false);
  const [isLoadingWeek, setIsLoadingWeek] = useState(false);

  // AI Synthesis State
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisResult, setSynthesisResult] = useState<ForensicDebriefResult | null>(null);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);

  // Load debrief for selected week
  useEffect(() => {
    let isMounted = true;
    const loadWeekDebrief = async () => {
      setIsLoadingWeek(true);
      try {
        const debrief = await api.getWeeklyDebrief(weekNumber);
        if (debrief && isMounted) {
          setChaosLevel(debrief.chaos_level || 6);
          if (debrief.q1_script_disapproval !== undefined) setQ1(debrief.q1_script_disapproval);
          if (debrief.q2_honest_moment !== undefined) setQ2(debrief.q2_honest_moment);
          if (debrief.q3_useful_surprise !== undefined) setQ3(debrief.q3_useful_surprise);
          if (debrief.q4_refusal_to_perform !== undefined) setQ4(debrief.q4_refusal_to_perform);
          if (debrief.q5_one_word !== undefined) setQ5(debrief.q5_one_word);
          if (debrief.q6_more_oxygen !== undefined) setQ6(debrief.q6_more_oxygen);
          if (debrief.q7_less_attention !== undefined) setQ7(debrief.q7_less_attention);
          if (debrief.q8_next_move !== undefined) setQ8(debrief.q8_next_move);
        }
      } catch (err) {
        console.warn('Could not fetch saved debrief', err);
      } finally {
        if (isMounted) setIsLoadingWeek(false);
      }
    };
    loadWeekDebrief();
    return () => { isMounted = false; };
  }, [weekNumber]);

  // Answers Map
  const answersMap: Record<string, string> = {
    q1, q2, q3, q4, q5, q6, q7, q8
  };

  const setAnswerByKey = (key: string, val: string) => {
    switch (key) {
      case 'q1': setQ1(val); break;
      case 'q2': setQ2(val); break;
      case 'q3': setQ3(val); break;
      case 'q4': setQ4(val); break;
      case 'q5': setQ5(val); break;
      case 'q6': setQ6(val); break;
      case 'q7': setQ7(val); break;
      case 'q8': setQ8(val); break;
    }
  };

  const handleRunAiSynthesis = async () => {
    setIsSynthesizing(true);
    setSynthesisError(null);
    try {
      const fullMap = {
        q1, q2, q3, q4, q5, q6, q7, q8,
        q1_script_disapproval: q1,
        q2_honest_moment: q2,
        q3_useful_surprise: q3,
        q4_refusal_to_perform: q4,
        q5_one_word: q5,
        q6_more_oxygen: q6,
        q7_less_attention: q7,
        q8_next_move: q8,
        chaos_level: chaosLevel
      };
      const result = await api.synthesizeDebrief({
        week_number: weekNumber,
        answers: fullMap
      });
      setSynthesisResult(result);
    } catch (e: any) {
      console.error(e);
      setSynthesisError(e?.message || 'Failed to synthesize debrief with Gemini');
    } finally {
      setIsSynthesizing(false);
    }
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const debriefPayload: WeeklyFlightDebrief = {
      id: `debrief_w${weekNumber}`,
      week_number: weekNumber,
      date_range: `Week ${weekNumber} (2027)`,
      chaos_level: chaosLevel,
      q1_script_disapproval: q1,
      q2_honest_moment: q2,
      q3_useful_surprise: q3,
      q4_refusal_to_perform: q4,
      q5_one_word: q5,
      q6_more_oxygen: q6,
      q7_less_attention: q7,
      q8_next_move: q8,
      updated_at: new Date().toISOString()
    };

    if (onSaveDebrief) {
      onSaveDebrief(debriefPayload);
    } else {
      api.saveWeeklyDebrief(debriefPayload);
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  // Chaos Zone Evaluation
  const getChaosZone = (level: number) => {
    if (level <= 3) {
      return {
        label: 'Preservation Zone (1–3)',
        tone: 'Calm & Recovery',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        barColor: 'from-emerald-400 to-teal-500',
        desc: 'Low turbulence. Ample energy reserves, minimal friction, protective boundary shields holding tight.'
      };
    } else if (level <= 7) {
      return {
        label: 'Sovereign Friction Zone (4–7)',
        tone: 'Optimal Orbit Sweet Spot',
        color: 'text-amber-800 bg-amber-50 border-amber-300',
        barColor: 'from-amber-400 to-orange-500',
        desc: 'The target sweet spot. Just enough friction and surprise to avoid boredom, with intact psychological autonomy.'
      };
    } else {
      return {
        label: 'Spillover Zone (8–10)',
        tone: 'High Reactionary Turbulence',
        color: 'text-rose-800 bg-rose-50 border-rose-300',
        barColor: 'from-rose-500 to-red-600',
        desc: 'Heavy chaotic interference. High risk of performative firefighting, urgent distractions, and depleted sovereignty.'
      };
    }
  };

  const chaosZone = getChaosZone(chaosLevel);

  // Completed answers count
  const completedCount = PROMPT_METAS.filter(m => Boolean(answersMap[m.key]?.trim())).length;

  return (
    <section aria-label="Weekly Flight Debrief" className="max-w-5xl mx-auto space-y-6">
      {/* Print-Only Formal Document Header */}
      <div className="hidden print:block pb-3 mb-2 border-b-2 border-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-sky-700">
              LIFE OS · OFF*SCRIPT 2027 · WEEKLY FLIGHT DEBRIEF
            </span>
            <h1 className="text-2xl font-bold font-serif-display text-slate-900 mt-0.5">
              Weekly Flight Debrief — Week {weekNumber} of 52
            </h1>
            <p className="text-xs text-stone-600 font-mono-code">
              Forensic non-productivity examination: Where you showed up vs. where you refused to perform.
            </p>
          </div>
          <div className="text-right font-mono-code text-xs space-y-1">
            <div className="font-bold text-slate-900 px-2 py-0.5 bg-sky-50 border border-sky-300 rounded inline-block">
              WEEK {weekNumber} / 52
            </div>
            <div className="text-[11px] text-stone-600">
              Chaos Level: <strong className="text-rose-700">{chaosLevel} / 10</strong> ({chaosZone.tone})
            </div>
          </div>
        </div>
      </div>

      {/* Main Dedicated Header & Controls Card */}
      <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 shadow-sm print:p-4 print:border">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center flex-wrap gap-2">
              <span className="bg-sky-600 text-white text-[10px] font-mono-code font-bold uppercase px-2.5 py-0.5 rounded tracking-wider">
                ORBITAL REVIEW
              </span>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
                8 REFLECTION PROMPTS
              </span>
              <span className="text-xs text-stone-500 font-mono-code">
                {completedCount}/8 Answered
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900 mt-1">
              Weekly Flight Debrief
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              A forensic examination of where you navigated off-script, where you refused to perform, and what demands your non-negotiable next move.
            </p>
          </div>

          {/* Week Selector & Top Action Buttons */}
          <div className="flex items-center flex-wrap gap-2 print:hidden">
            {/* Week Stepper */}
            <div className="flex items-center bg-stone-100 border border-stone-300 rounded-xl p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setWeekNumber(prev => Math.max(1, prev - 1))}
                disabled={weekNumber <= 1}
                className="p-1.5 hover:bg-white rounded-lg text-stone-700 transition-colors disabled:opacity-30 cursor-pointer"
                title="Previous Week"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <select
                value={weekNumber}
                onChange={(e) => setWeekNumber(Number(e.target.value))}
                className="px-2 py-1 bg-transparent text-xs font-mono-code font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 52 }).map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Week {i + 1} of 52
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setWeekNumber(prev => Math.min(52, prev + 1))}
                disabled={weekNumber >= 52}
                className="p-1.5 hover:bg-white rounded-lg text-stone-700 transition-colors disabled:opacity-30 cursor-pointer"
                title="Next Week"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* View Mode Toggle: Display Deck vs Edit Mode */}
            <div className="flex items-center bg-stone-100 p-1 border border-stone-300 rounded-xl">
              <button
                type="button"
                onClick={() => setViewMode('display')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'display'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Answers</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('edit')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all cursor-pointer ${
                  viewMode === 'edit'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Prompts</span>
              </button>
            </div>

            {/* AI Forensic Synthesis */}
            <button
              type="button"
              id="ai-synthesize-debrief-btn"
              onClick={handleRunAiSynthesis}
              disabled={isSynthesizing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold font-mono-code rounded-xl shadow-xs transition-all disabled:opacity-50 cursor-pointer"
              title="Run Mei forensic synthesis on this week's 8 questions"
            >
              {isSynthesizing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <BrainCircuit className="w-3.5 h-3.5 text-sky-200" />
                  <span>AI Forensic Review</span>
                </>
              )}
            </button>

            {/* Print / PDF */}
            <button
              type="button"
              id="print-weekly-debrief-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 text-xs font-bold font-mono-code rounded-xl shadow-xs transition-colors cursor-pointer"
              title="Print debrief or save to structured PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* ================= VISUAL SLIDER & GAUGE SECTION ================= */}
        <div className="mt-6 pt-6 border-t-2 border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Arc Gauge (SVG) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-stone-50 border border-stone-200 rounded-2xl relative">
              <span className="text-[10px] font-mono-code uppercase font-bold text-stone-500 tracking-wider mb-1">
                CHAOS INTENSITY GAUGE
              </span>
              
              <div className="relative w-44 h-24 flex items-end justify-center overflow-hidden">
                <svg viewBox="0 0 100 55" className="w-44 h-24">
                  <defs>
                    <linearGradient id="chaosGaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="35%" stopColor="#06b6d4" />
                      <stop offset="65%" stopColor="#f59e0b" />
                      <stop offset="85%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                  </defs>

                  {/* Semicircle track background */}
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Semicircle active colored path */}
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="url(#chaosGaugeGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="125.6"
                    strokeDashoffset={125.6 - (125.6 * ((chaosLevel - 1) / 9))}
                    className="transition-all duration-300 ease-out"
                  />

                  {/* Center needle pivot */}
                  {(() => {
                    // Needle angle: -90deg (level 1) to +90deg (level 10)
                    const angleDeg = -90 + ((chaosLevel - 1) / 9) * 180;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const needleLen = 32;
                    const nx = 50 + needleLen * Math.cos(angleRad);
                    const ny = 50 + needleLen * Math.sin(angleRad);
                    return (
                      <g className="transition-all duration-300 ease-out">
                        <line
                          x1="50"
                          y1="50"
                          x2={nx}
                          y2={ny}
                          stroke="#1f2937"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="50" cy="50" r="4.5" fill="#1f2937" />
                        <circle cx="50" cy="50" r="2" fill="#ffffff" />
                      </g>
                    );
                  })()}
                </svg>

                {/* Gauge readout numeric pill */}
                <div className="absolute bottom-0 inset-x-0 text-center">
                  <span className="font-display-punch text-2xl font-black text-slate-900 tracking-tight">
                    {chaosLevel}
                  </span>
                  <span className="text-xs font-mono-code font-bold text-stone-500"> / 10</span>
                </div>
              </div>

              {/* Ticks representation */}
              <div className="w-full flex justify-between px-2 text-[10px] font-mono-code font-bold text-stone-500 mt-2">
                <span className="text-emerald-700">1 (Calm)</span>
                <span className="text-amber-700">5 (Orbit)</span>
                <span className="text-rose-700">10 (Storm)</span>
              </div>
            </div>

            {/* Slider & Description Controls */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="text-xs font-mono-code font-bold uppercase text-stone-800">
                    Week Chaos Level Spectrum:
                  </span>
                </div>
                <span className={`inline-block text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-md border ${chaosZone.color}`}>
                  {chaosZone.label} · {chaosZone.tone}
                </span>
              </div>

              {/* Interactive Range Slider */}
              <div className="space-y-1.5 print:hidden">
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={chaosLevel}
                  onChange={(e) => setChaosLevel(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-rose-600 transition-all focus:outline-none"
                  aria-label="Chaos Level Slider 1 to 10"
                />

                {/* Clickable Quick-Select Buttons 1 to 10 */}
                <div className="grid grid-cols-10 gap-1 pt-1">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const val = i + 1;
                    const isSelected = val === chaosLevel;
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setChaosLevel(val)}
                        className={`py-1 text-[11px] font-mono-code font-bold rounded transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-2xs scale-105 ring-1 ring-slate-900'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Zone context readout */}
              <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-200/80">
                <strong className="text-slate-900 font-serif">Assessment: </strong>
                {chaosZone.desc}
              </p>
            </div>

          </div>
        </div>

        {/* Synthesis Error Banner */}
        {synthesisError && (
          <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center justify-between print:hidden">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{synthesisError}</span>
            </div>
            <button
              type="button"
              onClick={() => setSynthesisError(null)}
              className="text-rose-500 hover:text-rose-800 font-mono-code text-xs px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* AI Synthesis Verdict Card */}
        {synthesisResult && (
          <div className="mt-6 pt-5 border-t-2 border-indigo-200/80 bg-indigo-50/50 rounded-2xl p-5 text-xs space-y-4 print:bg-white print:border-stone-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-200 pb-2.5">
              <div className="flex items-center space-x-2">
                <BrainCircuit className="w-4 h-4 text-indigo-600" />
                <span className="font-bold text-indigo-950 font-serif-display text-sm sm:text-base">
                  Forensic Examination Verdict
                </span>
                <span className="px-2.5 py-0.5 rounded-md font-mono-code font-bold text-[11px] bg-indigo-600 text-white">
                  Week {weekNumber} Forensic Review
                </span>
              </div>
              <span className="text-[10px] font-mono-code text-indigo-700 font-semibold">
                Mei Relationship-to-Self Mirror
              </span>
            </div>

            <p className="text-stone-800 leading-relaxed italic font-serif text-sm">
              "{synthesisResult.forensic_recap}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {synthesisResult.core_contradiction && (
                <div className="bg-white p-3.5 rounded-xl border border-indigo-100 shadow-2xs space-y-1">
                  <span className="font-bold text-indigo-900 font-mono-code text-[11px] uppercase tracking-wider block">
                    Core Contradiction Exposed:
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {synthesisResult.core_contradiction}
                  </p>
                </div>
              )}

              {synthesisResult.heroic_refusal && (
                <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-900 font-mono-code text-[11px] uppercase tracking-wider block">
                    Heroic Refusal To Perform:
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {synthesisResult.heroic_refusal}
                  </p>
                </div>
              )}
            </div>

            {synthesisResult.numbness_alert && (
              <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-2xs space-y-1">
                <span className="font-bold text-rose-900 font-mono-code text-[11px] uppercase tracking-wider block">
                  Numbness &amp; Avoidance Warning:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {synthesisResult.numbness_alert}
                </p>
              </div>
            )}

            {synthesisResult.strategic_micro_dare && (
              <div className="pt-2 border-t border-indigo-200">
                <span className="font-bold text-amber-900 font-mono-code text-[11px] uppercase tracking-wider block mb-1.5">
                  Strategic Micro-Dare for Next Week:
                </span>
                <div className="p-3 bg-white border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs text-stone-800">
                  <span className="text-xs font-semibold leading-relaxed">
                    {synthesisResult.strategic_micro_dare}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setQ8(synthesisResult.strategic_micro_dare);
                      setViewMode('display');
                    }}
                    className="text-[11px] font-mono-code font-bold px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 whitespace-nowrap transition-colors print:hidden self-end sm:self-auto cursor-pointer"
                    title="Adopt this strategic dare into Question 8"
                  >
                    Adopt as Q8 Non-Negotiable
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ================= 8 REFLECTION PROMPTS: DISPLAY DECK OR EDIT FORM ================= */}
      {viewMode === 'display' ? (
        /* READABLE DISPLAY FORMAT */
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <h3 className="font-serif-display font-bold text-lg text-slate-900">
                8 Reflection Prompts — Reading Deck
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('edit')}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 transition-colors print:hidden cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit All Prompts</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROMPT_METAS.map((meta) => {
              const val = answersMap[meta.key] || '';
              const isFilled = Boolean(val.trim());
              const isWordPrompt = meta.key === 'q5';
              const isNextMovePrompt = meta.key === 'q8';

              return (
                <div
                  key={meta.key}
                  className={`bg-white rounded-2xl p-5 border shadow-2xs transition-all relative flex flex-col justify-between ${
                    isNextMovePrompt
                      ? 'border-amber-400/90 ring-1 ring-amber-300/50 bg-gradient-to-b from-white to-amber-50/20'
                      : isFilled
                      ? 'border-stone-300'
                      : 'border-dashed border-stone-300 bg-stone-50/60'
                  }`}
                >
                  <div>
                    {/* Header: Prompt Number + Tag Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-mono-code font-bold text-xs flex items-center justify-center">
                          {meta.number}
                        </span>
                        <span className="font-bold text-slate-900 text-xs font-serif-display">
                          {meta.title}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded border ${meta.badgeColor}`}>
                        {meta.badge}
                      </span>
                    </div>

                    {/* Question Statement */}
                    <p className="text-xs text-stone-600 mb-3 italic">
                      "{meta.subPrompt}"
                    </p>

                    {/* Formatted Answer Body */}
                    {isFilled ? (
                      isWordPrompt ? (
                        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center">
                          <span className="font-display-punch text-2xl font-black text-rose-700 tracking-wider uppercase block">
                            "{val}"
                          </span>
                          <span className="text-[10px] font-mono-code text-rose-500 uppercase mt-0.5 block font-bold">
                            Tone of Week {weekNumber}
                          </span>
                        </div>
                      ) : isNextMovePrompt ? (
                        <div className="p-3.5 bg-amber-50/80 border border-amber-300 rounded-xl text-stone-900">
                          <div className="flex items-center space-x-1.5 text-[11px] font-mono-code font-bold text-amber-900 uppercase mb-1">
                            <Target className="w-3.5 h-3.5 text-amber-600" />
                            <span>Actionable Mandate:</span>
                          </div>
                          <p className="text-xs font-semibold leading-relaxed text-slate-900 font-sans">
                            {val}
                          </p>
                        </div>
                      ) : (
                        <div className="p-3 bg-stone-50 border border-stone-200/90 rounded-xl text-xs text-slate-800 leading-relaxed font-sans min-h-[48px]">
                          {val}
                        </div>
                      )
                    ) : (
                      <div className="p-3 bg-stone-100/60 border border-dashed border-stone-300 rounded-xl text-xs text-stone-400 italic">
                        No entry logged yet for this prompt.
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Quick Edit trigger */}
                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] print:hidden">
                    <span className="font-mono-code text-stone-500 text-[10px]">
                      {isFilled ? '✓ Recorded' : '○ Empty'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setViewMode('edit')}
                      className="text-stone-500 hover:text-slate-900 font-mono-code font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Edit</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Commit / Save bar */}
          <div className="bg-white border-2 border-stone-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <div className="text-xs text-stone-600">
              <span className="font-bold text-slate-900 font-mono-code">Status: </span>
              {completedCount === 8
                ? 'All 8 forensic prompts answered for Week ' + weekNumber + '.'
                : `${completedCount} of 8 prompts answered. Click Edit Prompts to complete remaining.`}
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setViewMode('edit')}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono-code font-bold rounded-xl transition-all cursor-pointer"
              >
                Open Form Editor
              </button>
              <button
                type="button"
                onClick={() => handleSave()}
                className="inline-flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold font-mono-code rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>{isSaved ? 'Debrief Committed!' : 'Commit Week Debrief'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* EDIT FORM MODE */
        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center space-x-2">
              <Edit3 className="w-4 h-4 text-sky-600" />
              <h3 className="font-serif-display font-bold text-lg text-slate-900">
                Edit 8 Reflection Prompts (Week {weekNumber})
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('display')}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg border border-stone-300 transition-colors print:hidden cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Back to Reading Deck</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROMPT_METAS.map((meta) => {
              const val = answersMap[meta.key] || '';
              const isWord = meta.key === 'q5';

              return (
                <div
                  key={meta.key}
                  className="bg-white p-4.5 rounded-2xl border border-stone-300 shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-slate-900 font-bold text-xs flex items-center space-x-1.5">
                      <span className="w-5 h-5 rounded bg-slate-900 text-white font-mono-code text-[11px] flex items-center justify-center font-bold">
                        {meta.number}
                      </span>
                      <span>{meta.title}</span>
                    </label>
                    <span className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded border ${meta.badgeColor}`}>
                      {meta.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-600 leading-snug">
                    {meta.subPrompt}
                  </p>

                  {isWord ? (
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => setAnswerByKey(meta.key, e.target.value.toUpperCase())}
                      placeholder={meta.placeholder}
                      className="w-full px-3 py-2 border border-stone-300 rounded-xl font-mono-code uppercase font-bold text-rose-700 text-sm focus:outline-sky-600 bg-stone-50/50"
                    />
                  ) : (
                    <textarea
                      value={val}
                      onChange={(e) => setAnswerByKey(meta.key, e.target.value)}
                      placeholder={meta.placeholder}
                      rows={3}
                      className="w-full p-2.5 border border-stone-300 rounded-xl text-xs font-sans text-slate-900 leading-relaxed focus:outline-sky-600 bg-stone-50/50 resize-y"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-2 print:hidden">
            <button
              type="button"
              onClick={() => setViewMode('display')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-mono-code font-bold rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Cancel &amp; View Deck</span>
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-black text-white text-xs font-bold font-mono-code rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{isSaved ? 'Debrief Logged!' : 'Commit Week Debrief'}</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
