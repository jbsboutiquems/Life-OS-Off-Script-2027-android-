import React, { useState } from 'react';
import { CHAOS_THEMES, ChaosMonthTheme } from '../data/themes';
import { MONTHLY_QUIZZES, MONTHLY_WORD_SEARCHES, MonthlyQuizData, MonthlyWordSearchData } from '../data/plannerContent';
import {
  Sparkles,
  Compass,
  CheckCircle2,
  HelpCircle,
  Puzzle,
  Sliders,
  PenTool,
  Bookmark,
  Check,
  RotateCcw,
  Volume2,
  Thermometer,
  Layers,
  Flame,
  Award
} from 'lucide-react';

export const ThemesGalleryView: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [activeSubTab, setActiveSubTab] = useState<'theme' | 'quiz' | 'wordsearch' | 'game' | 'braindump'>('theme');

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});

  // Word Search state
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);

  // Volume Game dials (July)
  const [volumeDials, setVolumeDials] = useState({
    voice: 6,
    joy: 8,
    visibility: 5,
    ambition: 7,
    boundaries: 6,
    authenticity: 9
  });

  // Presence Mapping (February)
  const [presenceLevels, setPresenceLevels] = useState({
    myself: 60,
    people_i_love: 85,
    work_school: 70,
    body: 50,
    creative: 80,
    goals: 65
  });

  // Brain dump text
  const [brainDumpText, setBrainDumpText] = useState('');

  const activeTheme: ChaosMonthTheme = CHAOS_THEMES.find(t => t.month === selectedMonth) || CHAOS_THEMES[0];
  const activeQuiz: MonthlyQuizData | undefined = MONTHLY_QUIZZES.find(q => q.month === selectedMonth) || MONTHLY_QUIZZES[0];
  const activeWordSearch: MonthlyWordSearchData | undefined = MONTHLY_WORD_SEARCHES.find(w => w.month === selectedMonth) || MONTHLY_WORD_SEARCHES[0];

  const handleCellClick = (r: number, c: number) => {
    const key = `${r}-${c}`;
    if (selectedCells.includes(key)) {
      setSelectedCells(selectedCells.filter(k => k !== key));
    } else {
      setSelectedCells([...selectedCells, key]);
    }
  };

  const handleResetWordSearch = () => {
    setSelectedCells([]);
    setFoundWords([]);
  };

  const handleAnswerSelect = (qId: number, optionKey: 'A' | 'B' | 'C') => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionKey }));
  };

  // Calculate Quiz outcome
  const getQuizResult = () => {
    const counts = { A: 0, B: 0, C: 0 };
    Object.values(userAnswers).forEach(val => {
      counts[val]++;
    });

    if (counts.A >= counts.B && counts.A >= counts.C) return activeQuiz.results.find(r => r.key === 'Mostly A');
    if (counts.B >= counts.A && counts.B >= counts.C) return activeQuiz.results.find(r => r.key === 'Mostly B');
    return activeQuiz.results.find(r => r.key === 'Mostly C');
  };

  const quizResult = Object.keys(userAnswers).length > 0 ? getQuizResult() : null;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-purple-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                12 ARCS OF CHAOS
              </span>
              <span className="text-xs text-stone-500 font-mono-code">2027 ANNUAL CODEX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900 mt-1">
              Monthly Arc Themes &amp; Self-Discovery Hub
            </h2>
          </div>
          <span className="text-xs font-mono-code text-stone-500">
            Themes · Quizzes · Word Searches · Brain Dumps
          </span>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">
          Explore all 12 monthly chapters from the 1273-page physical Life OS binder. Every month features an unvarnished arc, self-discovery audit, and low-pressure brain-break game.
        </p>
      </div>

      {/* Month Selector Carousel / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {CHAOS_THEMES.map((theme) => (
          <button
            key={theme.month}
            type="button"
            onClick={() => {
              setSelectedMonth(theme.month);
              setUserAnswers({});
              setSelectedCells([]);
            }}
            className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
              selectedMonth === theme.month
                ? 'bg-slate-900 text-white border-stone-900 shadow-md font-bold'
                : 'bg-white text-stone-700 border-stone-200 hover:border-purple-300 hover:bg-purple-50/40'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono-code uppercase opacity-80">
              <span>M{String(theme.month).padStart(2, '0')}</span>
              <span className="text-[9px] px-1 rounded bg-rose-500/20 text-rose-300 font-bold">{theme.keyword}</span>
            </div>
            <div className="text-xs font-serif-display font-bold truncate mt-0.5">
              {theme.name}
            </div>
            <div className={`text-[11px] truncate mt-0.5 ${selectedMonth === theme.month ? 'text-purple-200' : 'text-stone-500'}`}>
              {theme.themeTitle}
            </div>
          </button>
        ))}
      </div>

      {/* Month Navigation Tabs (Theme / Quiz / Word Search / Game / Brain Dump) */}
      <div className="bg-[#fffdf9] rounded-3xl border-2 border-stone-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-mono-code font-bold ${activeTheme.badgeBg} ${activeTheme.badgeText} px-2 py-0.5 rounded`}>
                MONTH {activeTheme.month} · {activeTheme.name.toUpperCase()} · KEYWORD: {activeTheme.keyword}
              </span>
              <span className="text-xs text-stone-400 font-mono-code">2027 LIFE OS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900 mt-1">
              "{activeTheme.themeTitle}"
            </h3>
            <p className="text-sm font-semibold text-purple-900 italic mt-0.5 font-serif-display">
              "{activeTheme.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono-code font-bold">
            <button
              type="button"
              onClick={() => setActiveSubTab('theme')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'theme' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Arc Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('quiz')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'quiz' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Self-Discovery Quiz
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('wordsearch')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'wordsearch' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Word Search Break
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('game')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'game' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Interactive Game
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('braindump')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSubTab === 'braindump' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Chaos Dump
            </button>
          </div>
        </div>

        {/* SUBTAB 1: THEME OVERVIEW */}
        {activeSubTab === 'theme' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
            <div className="space-y-3">
              <h4 className="font-mono-code text-xs uppercase font-bold text-slate-900">
                The Monthly Arc Description
              </h4>
              <p className="text-stone-700 leading-relaxed bg-white p-5 rounded-2xl border border-stone-200 text-sm">
                {activeTheme.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl">
                <span className="text-[10px] uppercase font-mono-code font-bold text-amber-800 block mb-0.5">
                  Monthly Chaos Question:
                </span>
                <p className="text-sm font-bold text-amber-950 font-serif-display">
                  "{activeTheme.monthlyQuestion}"
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl">
                <span className="text-[10px] uppercase font-mono-code font-bold text-purple-800 block mb-1">
                  Life OS Sovereignty Stance:
                </span>
                <p className="text-xs text-purple-950 font-medium leading-relaxed">
                  Hold this theme as a loose compass heading for your Daily Launch intentions and Weekly Flight Debriefs. You are not a machine; you are allowed to evolve.
                </p>
              </div>

              {[3, 6, 9, 12].includes(activeTheme.month) && (
                <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-code font-bold uppercase block">
                      QUARTER POCKET ACTIVE
                    </span>
                    <span className="text-xs font-serif-display font-bold">
                      Q{activeTheme.month / 3} Closing &amp; Paper Trail Vault
                    </span>
                  </div>
                  <Bookmark className="w-5 h-5 text-rose-600" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* SUBTAB 2: SELF-DISCOVERY QUIZ */}
        {activeSubTab === 'quiz' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-rose-100 text-rose-900 uppercase">
                  MONTHLY AUDIT
                </span>
                <h4 className="text-xl font-bold font-serif-display text-slate-900">
                  {activeQuiz.title}
                </h4>
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {activeQuiz.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {activeQuiz.questions.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                  <h5 className="font-bold text-xs text-slate-900">
                    {q.id}. {q.question}
                  </h5>
                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = userAnswers[q.id] === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleAnswerSelect(q.id, opt.key)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-start space-x-2 cursor-pointer ${
                            isSelected
                              ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-2xs'
                              : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono-code font-bold flex-shrink-0 ${
                            isSelected ? 'bg-rose-600 text-white' : 'bg-stone-200 text-stone-700'
                          }`}>
                            {opt.key}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Quiz Result Reveal */}
            {quizResult && (
              <div className="p-5 rounded-2xl bg-slate-900 text-white border-2 border-stone-800 space-y-2 animate-fade-in">
                <span className="text-[10px] font-mono-code font-bold uppercase text-rose-400">
                  YOUR DIAGNOSTIC RESULT
                </span>
                <h4 className="text-lg font-bold font-serif-display text-white">
                  {quizResult.type}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {quizResult.description}
                </p>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 3: NEURODIVERGENT WORD SEARCH */}
        {activeSubTab === 'wordsearch' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
              <div>
                <span className="text-[10px] font-mono-code font-bold text-rose-600 uppercase">
                  BRAIN BREAK · NO TIMER · NO PRESSURE
                </span>
                <h4 className="text-xl font-bold font-serif-display text-slate-900">
                  {activeWordSearch.monthName} Chaos Word Search
                </h4>
                <p className="text-xs text-stone-500">
                  Designed for neurodivergent minds. Tap letters to highlight words.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetWordSearch}
                className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-mono-code font-bold flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Grid</span>
              </button>
            </div>

            {/* Word Bank */}
            <div className="p-3.5 rounded-2xl bg-[#faf8f4] border border-stone-200">
              <span className="text-[11px] font-mono-code font-bold uppercase text-stone-500 block mb-2">
                Words to Spot:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeWordSearch.words.map((w) => (
                  <span
                    key={w}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono-code font-bold bg-white border border-stone-300 text-slate-900 shadow-2xs"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Grid */}
            <div className="flex justify-center overflow-x-auto py-2">
              <div className="inline-grid grid-cols-12 gap-1 p-3 bg-slate-900 rounded-2xl border-2 border-stone-800 shadow-lg">
                {activeWordSearch.grid.map((row, rIdx) =>
                  row.map((char, cIdx) => {
                    const key = `${rIdx}-${cIdx}`;
                    const isSelected = selectedCells.includes(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleCellClick(rIdx, cIdx)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-mono-code font-bold text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-500 text-white scale-105 shadow-xs'
                            : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        {char}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: INTERACTIVE GAME */}
        {activeSubTab === 'game' && (
          <div className="space-y-6">
            {activeTheme.month === 7 ? (
              /* THE VOLUME GAME (July) */
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <span className="text-[10px] font-mono-code font-bold text-rose-600 uppercase">
                    ND ACTIVITY · PAGE 748 OF THE PLANNER
                  </span>
                  <h4 className="text-xl font-bold font-serif-display text-slate-900">
                    The Volume Game
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Each dial goes from 0 (completely silent) to 10 (full volume). Where are you right now — for real?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'voice', label: 'My Voice', desc: 'Speaking truth without apologizing' },
                    { id: 'joy', label: 'My Joy', desc: 'Experiencing pleasure without guilt' },
                    { id: 'visibility', label: 'My Visibility', desc: 'Taking up space in the room' },
                    { id: 'ambition', label: 'My Ambition', desc: 'Owning what I actually want' },
                    { id: 'boundaries', label: 'My Boundaries', desc: 'Enforcing limits kindly and firmly' },
                    { id: 'authenticity', label: 'My Authenticity', desc: 'Dropping the curated mask' }
                  ].map((item) => {
                    const currentVal = volumeDials[item.id as keyof typeof volumeDials];
                    return (
                      <div key={item.id} className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono-code font-bold text-xs uppercase text-slate-900">
                            {item.label}
                          </span>
                          <span className="font-mono-code font-bold text-sm text-rose-600 px-2 py-0.5 rounded bg-rose-50 border border-rose-200">
                            {currentVal}/10
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500">{item.desc}</p>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={currentVal}
                          onChange={(e) => setVolumeDials({ ...volumeDials, [item.id]: Number(e.target.value) })}
                          className="w-full accent-rose-600 cursor-pointer"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* THE PRESENCE MAPPING GAME (Default / February) */
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <span className="text-[10px] font-mono-code font-bold text-emerald-600 uppercase">
                    ND ACTIVITY · PAGE 244 OF THE PLANNER
                  </span>
                  <h4 className="text-xl font-bold font-serif-display text-slate-900">
                    The Presence Mapping Game
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    "You can't show up everywhere at once." Shade each thermometer to reflect how present you actually are right now.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'myself', label: 'With Myself' },
                    { id: 'people_i_love', label: 'People I Love' },
                    { id: 'work_school', label: 'Work / Craft' },
                    { id: 'body', label: 'In My Body' },
                    { id: 'creative', label: 'Creative Life' },
                    { id: 'goals', label: 'My Goals' }
                  ].map((item) => {
                    const currentPct = presenceLevels[item.id as keyof typeof presenceLevels];
                    return (
                      <div key={item.id} className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2 text-center">
                        <span className="font-mono-code font-bold text-xs uppercase text-slate-900 block truncate">
                          {item.label}
                        </span>
                        <div className="h-32 w-10 mx-auto bg-stone-100 rounded-full p-1 border-2 border-stone-300 relative flex flex-col justify-end overflow-hidden">
                          <div
                            className="bg-gradient-to-t from-emerald-600 to-teal-400 rounded-full transition-all duration-300 w-full"
                            style={{ height: `${currentPct}%` }}
                          />
                        </div>
                        <span className="font-mono-code font-bold text-xs text-emerald-700 block">
                          {currentPct}%
                        </span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          value={currentPct}
                          onChange={(e) => setPresenceLevels({ ...presenceLevels, [item.id]: Number(e.target.value) })}
                          className="w-full accent-emerald-600 cursor-pointer"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 5: CHAOS DUMP */}
        {activeSubTab === 'braindump' && (
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-[10px] font-mono-code font-bold text-rose-600 uppercase">
                OPEN BRAIN DUMP · UNFILTERED
              </span>
              <h4 className="text-xl font-bold font-serif-display text-slate-900">
                {activeTheme.name} Chaos Dump
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                "Write whatever is in your head. Sentences, fragments, grocery lists, fears, hopes, stuff you keep forgetting. It doesn't have to make sense. It just has to come out."
              </p>
            </div>

            <textarea
              value={brainDumpText}
              onChange={(e) => setBrainDumpText(e.target.value)}
              placeholder="All of it. Right now. Go..."
              className="w-full p-4 rounded-2xl border border-stone-300 text-xs sm:text-sm font-mono-code bg-white focus:ring-2 focus:ring-purple-500 focus:outline-hidden min-h-[220px]"
            />

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 italic">
              "Your head is lighter now. Good. That's what this space is for."
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
