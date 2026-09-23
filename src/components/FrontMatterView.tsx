import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { LIFE_AUDIT_AREAS, VISION_DUMP_AREAS, AddressBookContact } from '../data/plannerContent';
import {
  Sparkles,
  Heart,
  ShieldAlert,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  UserPlus,
  Trash2,
  Save,
  PenTool,
  Bookmark,
  Check,
  FileCheck2,
  Calendar,
  Layers,
  HelpCircle,
  Award
} from 'lucide-react';

interface FrontMatterViewProps {
  user: UserProfile;
  onSaveProfile: (profile: Partial<UserProfile>) => void;
  onNavigateToGoals: () => void;
  onNavigateToDaily: () => void;
  onToast?: (msg: string) => void;
}

export const FrontMatterView: React.FC<FrontMatterViewProps> = ({
  user,
  onSaveProfile,
  onNavigateToGoals,
  onNavigateToDaily,
  onToast
}) => {
  const [activeSection, setActiveSection] = useState<'manifesto' | 'tour_guide' | 'manual' | 'word' | 'vision' | 'values' | 'audit' | 'permission' | 'people'>('manifesto');

  // Word of the year reflections
  const [wordReflections, setWordReflections] = useState({
    why: '',
    unlocks: '',
    protects: '',
    soundAt2am: ''
  });

  // Vision Dump states
  const [visionItems, setVisionItems] = useState<Record<string, string>>({
    career_income: '',
    relationships: '',
    health_body: '',
    home_space: '',
    creativity: '',
    finances: '',
    learning: '',
    fun_rest: '',
    one_sentence: ''
  });

  // Life Audit ratings (1-10)
  const [auditScores, setAuditScores] = useState<Record<string, number>>({
    career: 7,
    money: 6,
    health: 5,
    relationships: 8,
    home: 7,
    creativity: 9,
    growth: 8,
    mental_health: 6
  });
  const [lowestScoreShift, setLowestScoreShift] = useState('');
  const [highestScoreProtection, setHighestScoreProtection] = useState('');

  // Permission Slip
  const [permissionSignature, setPermissionSignature] = useState(user.chaos_name || '');
  const [permissionDate, setPermissionDate] = useState('2027-01-01');
  const [permissionCommitted, setPermissionCommitted] = useState(false);

  // Address Book / My People
  const [contacts, setContacts] = useState<AddressBookContact[]>([
    { id: '1', name: 'Emergency Ally (Doctor / Therapist)', phone: '555-0199', email: 'care@office.org', category: 'Grounding Anchor', notes: 'Emergency support contact' }
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newContactCategory, setNewContactCategory] = useState<AddressBookContact['category']>('Inner Circle');

  useEffect(() => {
    try {
      const savedWord = localStorage.getItem('offscript_word_reflections');
      if (savedWord) setWordReflections(JSON.parse(savedWord));

      const savedVision = localStorage.getItem('offscript_vision_dump');
      if (savedVision) setVisionItems(JSON.parse(savedVision));

      const savedAudit = localStorage.getItem('offscript_life_audit');
      if (savedAudit) {
        const parsed = JSON.parse(savedAudit);
        if (parsed.scores) setAuditScores(parsed.scores);
        if (parsed.lowestShift) setLowestScoreShift(parsed.lowestShift);
        if (parsed.highestProtection) setHighestScoreProtection(parsed.highestProtection);
      }

      const savedPermission = localStorage.getItem('offscript_permission_slip');
      if (savedPermission) {
        const parsed = JSON.parse(savedPermission);
        setPermissionSignature(parsed.sig || user.chaos_name || '');
        setPermissionDate(parsed.date || '2027-01-01');
        setPermissionCommitted(parsed.committed || false);
      }

      const savedContacts = localStorage.getItem('offscript_contacts');
      if (savedContacts) setContacts(JSON.parse(savedContacts));
    } catch {
      // ignore
    }
  }, [user.chaos_name]);

  const handleSaveWord = () => {
    localStorage.setItem('offscript_word_reflections', JSON.stringify(wordReflections));
    if (onToast) onToast("One Word reflections preserved.");
  };

  const handleSaveVision = () => {
    localStorage.setItem('offscript_vision_dump', JSON.stringify(visionItems));
    if (onToast) onToast("Vision Dump saved to Life OS.");
  };

  const handleSaveAudit = () => {
    localStorage.setItem('offscript_life_audit', JSON.stringify({
      scores: auditScores,
      lowestShift: lowestScoreShift,
      highestProtection: highestScoreProtection
    }));
    if (onToast) onToast("Life Audit ratings logged.");
  };

  const handleCommitPermission = () => {
    setPermissionCommitted(true);
    localStorage.setItem('offscript_permission_slip', JSON.stringify({
      sig: permissionSignature,
      date: permissionDate,
      committed: true
    }));
    if (onToast) onToast("Permission Slip officially signed and granted!");
  };

  const handleAddContact = () => {
    if (!newContactName.trim()) return;
    const updated = [
      ...contacts,
      {
        id: Date.now().toString(),
        name: newContactName.trim(),
        phone: newContactPhone.trim(),
        email: newContactEmail.trim(),
        category: newContactCategory
      }
    ];
    setContacts(updated);
    localStorage.setItem('offscript_contacts', JSON.stringify(updated));
    setNewContactName('');
    setNewContactPhone('');
    setNewContactEmail('');
    if (onToast) onToast("Contact added to My People.");
  };

  const handleDeleteContact = (id: string) => {
    const updated = contacts.filter(c => c.id !== id);
    setContacts(updated);
    localStorage.setItem('offscript_contacts', JSON.stringify(updated));
  };

  const averageAuditScore = (
    Object.values(auditScores).reduce((a, b) => a + b, 0) / Object.values(auditScores).length
  ).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Front Matter Navigation Pills */}
      <div className="bg-white border-2 border-stone-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-stone-100">
          <div>
            <span className="bg-rose-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded tracking-wider">
              OFFICIAL PLANNER CODEX
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-display text-slate-900 mt-1">
              Front Matter &amp; Operating Manual
            </h2>
          </div>
          <span className="text-xs font-mono-code text-stone-500">
            Pages 01–14 · Chaos Year Edition
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none text-xs font-mono-code">
          {[
            { id: 'manifesto' as const, label: '01 Manifesto' },
            { id: 'tour_guide' as const, label: 'Tour Guide' },
            { id: 'manual' as const, label: '02 Manual' },
            { id: 'word' as const, label: '03 One Word' },
            { id: 'vision' as const, label: '04 Vision Dump' },
            { id: 'audit' as const, label: '06 Life Audit' },
            { id: 'permission' as const, label: '09 Permission' },
            { id: 'people' as const, label: '10 My People' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSection(tab.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold transition-all cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: THE MANIFESTO */}
      {activeSection === 'manifesto' && (
        <div className="bg-[#fffdf9] border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-stone-900 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              01 — THE MANIFESTO
            </span>
            <span className="text-xs font-mono-code text-rose-600 font-bold">NOT A VIBE BOARD</span>
          </div>

          <div className="space-y-4 border-l-4 border-rose-500 pl-4 sm:pl-6">
            <h1 className="text-3xl sm:text-5xl font-black font-serif-display text-slate-900 tracking-tight leading-none">
              This Is Not That Kind of Planner.
            </h1>
            <p className="text-sm sm:text-base font-bold text-rose-600 font-mono-code">
              Stop performing productivity. Start designing your life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="text-base text-rose-500 block mb-1">✦</span>
              <p className="font-bold font-serif-display text-slate-900 text-sm">
                Build it for who you actually are.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                A whole adult with a beautifully irregular brain, not a robotic assembly line.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-base text-amber-500 block mb-1">■</span>
              <p className="font-bold font-serif-display text-slate-900 text-sm">
                Not who you planned to be in January.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                You are allowed to evolve mid-month and discard what no longer fits.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <span className="text-base text-indigo-500 block mb-1">✧</span>
              <p className="font-bold font-serif-display text-slate-900 text-sm">
                Not who the algorithm wants you to be.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                Zero gold stars for burnout. Zero sticker packs for feeling behind.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-300 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-sans">
            <p>
              There are no sticker packs for being behind. No gold stars for burnout. No shame spirals
              built into the margins — we already have enough of those living rent-free in our heads.
            </p>
            <p className="font-semibold text-slate-900">
              This is the 2027 Life OS. A system, not a sentence. It bends. It resets. It survives the weeks you forget it.
            </p>
            <p className="italic text-stone-600">
              You don’t have to optimize. You have to keep going. Different. Honest. Off Script.
            </p>
          </div>
        </div>
      )}

      {/* SECTION: MEET YOUR TOUR GUIDE */}
      {activeSection === 'tour_guide' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              THE HUMAN BEHIND THE CHAOS
            </span>
            <span className="text-xs font-mono-code text-stone-500">AUTHOR INTRO</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-56 h-64 rounded-2xl border-2 border-stone-800 bg-gradient-to-br from-pink-400 via-rose-500 to-indigo-500 p-1 flex-shrink-0 shadow-md flex items-center justify-center text-white text-center">
              <div className="w-full h-full bg-slate-900/80 rounded-xl p-4 flex flex-col items-center justify-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-sky-400 border-2 border-white flex items-center justify-center font-black text-2xl">
                  AW
                </div>
                <h4 className="font-bold font-serif-display text-white text-base">Amber Wiggins</h4>
                <span className="text-[10px] font-mono-code text-rose-300">Creator of Life OS</span>
                <span className="text-[10px] font-mono-code text-stone-400">Libra · Question Asker</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
                Meet Your Tour Guide
              </h3>
              <p>
                I'm Amber — creator of Life OS: Off Script, professional question-asker, and the reason this planner has zero gold stars for burnout.
              </p>
              <p>
                I built the planner I couldn't find: one that assumes you're a whole adult with a beautifully irregular brain, not a productivity robot. No shame spirals. No "just try harder." Just structure without the cage.
              </p>
              <p className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-mono-code text-stone-800">
                By day I run Snoopy's Closet, write a book, and design systems for people who hate systems. Off-duty I'm deep-conditioning this pink-and-blue hair, pulling tarot, and reading natal charts. I'm a Libra — I'll charm you, then absolutely call you out.
              </p>
              <p>
                This isn't a planner that hands you habits. It asks the questions only your soul can answer, then gets out of your way. Let's make 2027 the year we stop performing and start actually living.
              </p>
              <div className="pt-2 border-t border-stone-200">
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-rose-600 block">
                  YOUR SLIGHTLY REBELLIOUS, LIGHT-HEARTED TOUR GUIDE
                </span>
                <span className="font-serif-display italic text-base text-slate-900 font-bold">
                  with love, Amber
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: OPERATING MANUAL */}
      {activeSection === 'manual' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <span className="bg-emerald-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              02 — THE OPERATING MANUAL
            </span>
            <span className="text-xs font-mono-code font-bold text-emerald-800">
              THE SYSTEM BENDS SO YOU DON'T BREAK
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
            How This Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            {[
              { num: '01', title: 'START WITH FRONT MATTER', text: "These 10 pages are your foundation. Don't skip them. Don't rush them. A half-answer is still an answer." },
              { num: '02', title: 'FILL IN YOUR BIG 6 GOALS', text: "Six goals. That's it. Not 22 wishes on a vision board. Six things you are actually moving toward." },
              { num: '03', title: 'MAP YOUR QUARTERS', text: "Each quarter is its own chapter. Your Q3 might look nothing like Q1. That's not failure. That's data." },
              { num: '04', title: 'USE THE DAILY SPREAD', text: "Brain dump, prioritize, build your day. Structured chaos — use every section or none of them." },
              { num: '05', title: 'REVIEW + RESET', text: "Monthly and weekly debriefs are non-negotiable. Growth lives in the reflecting, not just the doing." },
              { num: '06', title: 'BREAK THE FORMAT', text: "Cross things out. Write sideways. Skip pages. This planner works because you make it YOURS." }
            ].map((rule) => (
              <div key={rule.num} className="p-4 rounded-2xl border border-stone-300 bg-[#faf8f4] flex gap-3">
                <span className="w-8 h-8 rounded-xl bg-stone-900 text-white font-mono-code font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  {rule.num}
                </span>
                <div>
                  <h4 className="font-mono-code font-bold text-slate-900 text-xs uppercase">{rule.title}</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onNavigateToGoals}
              className="px-4 py-2.5 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-mono-code font-bold transition-all shadow-sm flex items-center space-x-1.5"
            >
              <span>Go to Big 6 Goals</span>
            </button>
            <button
              type="button"
              onClick={onNavigateToDaily}
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-mono-code font-bold transition-all shadow-sm flex items-center space-x-1.5"
            >
              <span>Go to Today's Log</span>
            </button>
          </div>
        </div>
      )}

      {/* SECTION 3: ONE WORD ALL YEAR */}
      {activeSection === 'word' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-rose-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              03 — WORD
            </span>
            <span className="text-xs font-mono-code text-stone-500">ONE WORD. ONE YEAR. PICK IT. MEAN IT.</span>
          </div>

          <div className="border-b border-stone-200 pb-4">
            <h3 className="text-3xl font-black font-serif-display text-slate-900">
              One Word. All Year.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Not a resolution. Not a rebrand. One word that becomes your compass when everything else is noise. Pick it. Mean it. Live it.
            </p>
          </div>

          <div className="bg-rose-50 border-2 border-rose-300 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono-code uppercase font-bold text-rose-800 block">
                MY WORD FOR 2027:
              </span>
              <span className="text-3xl sm:text-4xl font-black font-serif-display text-rose-950 tracking-wider">
                {user.word_of_the_year || 'SOVEREIGN'}
              </span>
            </div>
            <span className="text-xs font-mono-code text-rose-700 italic">
              Monotony = Death
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold font-mono-code text-slate-800 mb-1">
                Why this word?
              </label>
              <textarea
                value={wordReflections.why}
                onChange={(e) => setWordReflections({ ...wordReflections, why: e.target.value })}
                placeholder="What made you choose this word over every other possibility?"
                className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-hidden bg-[#faf8f4]"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono-code text-slate-800 mb-1">
                What does it unlock for you?
              </label>
              <textarea
                value={wordReflections.unlocks}
                onChange={(e) => setWordReflections({ ...wordReflections, unlocks: e.target.value })}
                placeholder="What permission does this word grant that you didn't have before?"
                className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-hidden bg-[#faf8f4]"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono-code text-slate-800 mb-1">
                What does it protect you from?
              </label>
              <textarea
                value={wordReflections.protects}
                onChange={(e) => setWordReflections({ ...wordReflections, protects: e.target.value })}
                placeholder="What bad habits, performative tasks, or distractions does it shield you from?"
                className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-hidden bg-[#faf8f4]"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono-code text-slate-800 mb-1">
                What does it sound like in your head at 2am?
              </label>
              <input
                type="text"
                value={wordReflections.soundAt2am}
                onChange={(e) => setWordReflections({ ...wordReflections, soundAt2am: e.target.value })}
                placeholder="The unvarnished whisper when doubts surface..."
                className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-hidden bg-[#faf8f4]"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveWord}
            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-mono-code font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Word Reflections</span>
          </button>
        </div>
      )}

      {/* SECTION 4: THE VISION DUMP */}
      {activeSection === 'vision' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              04 — THE VISION DUMP
            </span>
            <span className="text-xs font-mono-code text-stone-500">WHAT 2027 LOOKS LIKE FROM HERE</span>
          </div>

          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
              Unfiltered Vision
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Don't edit. Don't filter. Don't ask if it's realistic. Write what you WANT to feel, look, and be.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VISION_DUMP_AREAS.map((area) => (
              <div key={area.id} className="p-4 rounded-2xl border border-stone-200 bg-[#fdfbf7] space-y-2">
                <div className="flex items-center space-x-1.5">
                  <span className="text-rose-500 text-xs">✦</span>
                  <h4 className="text-xs font-mono-code font-bold uppercase text-slate-900">{area.title}</h4>
                </div>
                <p className="text-[11px] text-stone-500 italic">{area.prompt}</p>
                <textarea
                  value={visionItems[area.id] || ''}
                  onChange={(e) => setVisionItems({ ...visionItems, [area.id]: e.target.value })}
                  placeholder={`Write your raw ${area.title} vision...`}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-purple-500 focus:outline-hidden bg-white"
                  rows={3}
                />
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
            <label className="text-xs font-mono-code font-bold uppercase text-purple-950 block">
              ◆ ONE SENTENCE THAT CAPTURES 2027:
            </label>
            <input
              type="text"
              value={visionItems.one_sentence || ''}
              onChange={(e) => setVisionItems({ ...visionItems, one_sentence: e.target.value })}
              placeholder="e.g. 2027 is the year I stopped performing and started living."
              className="w-full p-3 rounded-xl border border-purple-300 text-xs font-medium focus:ring-2 focus:ring-purple-600 focus:outline-hidden bg-white"
            />
          </div>

          <button
            type="button"
            onClick={handleSaveVision}
            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-mono-code font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Vision Dump</span>
          </button>
        </div>
      )}

      {/* SECTION 6: LIFE AUDIT */}
      {activeSection === 'audit' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <span className="bg-sky-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              06 — LIFE AUDIT
            </span>
            <span className="text-xs font-mono-code font-bold text-sky-800">
              RADICAL HONESTY · SCORE: {averageAuditScore}/10
            </span>
          </div>

          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
              Where Are You Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Rate each area 1–10. No judgment. Pure honesty. (1 = Running on fumes · 10 = Thriving, no notes).
            </p>
          </div>

          <div className="space-y-3">
            {LIFE_AUDIT_AREAS.map((area) => {
              const currentScore = auditScores[area.id] || 5;
              return (
                <div key={area.id} className="p-3.5 rounded-xl border border-stone-200 bg-[#fdfbf7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono-code font-bold uppercase text-slate-900 block">
                      ✦ {area.name}
                    </span>
                    <span className="text-[11px] text-stone-500">{area.description}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setAuditScores({ ...auditScores, [area.id]: num })}
                        className={`w-7 h-7 rounded-lg text-xs font-mono-code font-bold transition-all ${
                          currentScore === num
                            ? 'bg-rose-600 text-white scale-110 shadow-xs'
                            : 'bg-white border border-stone-300 text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
              <label className="text-xs font-mono-code font-bold uppercase text-rose-950 block">
                ◆ LOWEST SCORE — one micro-shift you can make:
              </label>
              <textarea
                value={lowestScoreShift}
                onChange={(e) => setLowestScoreShift(e.target.value)}
                placeholder="What small, tiny habit can shift this needle?"
                className="w-full p-2.5 rounded-xl border border-rose-300 text-xs bg-white focus:outline-hidden"
                rows={2}
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 space-y-1.5">
              <label className="text-xs font-mono-code font-bold uppercase text-slate-900 block">
                ✦ HIGHEST SCORE — what are you protecting?
              </label>
              <textarea
                value={highestScoreProtection}
                onChange={(e) => setHighestScoreProtection(e.target.value)}
                placeholder="What boundaries maintain this high score?"
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-hidden"
                rows={2}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSaveAudit}
            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-mono-code font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Life Audit</span>
          </button>
        </div>
      )}

      {/* SECTION 9: THE PERMISSION SLIP */}
      {activeSection === 'permission' && (
        <div className="bg-[#fffdf9] border-2 border-rose-600 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
          <div className="flex items-center space-x-2">
            <span className="bg-rose-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              09 — THE PERMISSION SLIP
            </span>
            <span className="text-xs font-mono-code text-rose-800 font-bold">CHAOS YEAR 2027</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black font-serif-display text-slate-900">
            The Permission Slip.
          </h3>

          <div className="space-y-2 text-xs sm:text-sm text-stone-700 font-sans border-y border-stone-200 py-4">
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">✦</span> You have permission to change your goals mid-year.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">✦</span> You have permission to rest without earning it first.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">■</span> You have permission to skip a week and come back.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">■</span> You have permission to redefine what success means.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">✧</span> You have permission to stop chasing things that don't fit.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-rose-600 font-bold">✧</span> You have permission to be messy and still moving forward.
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono-code font-bold uppercase text-slate-900 block">
              MY COMMITMENT TO MYSELF IN 2027:
            </label>
            <textarea
              defaultValue={user.permission_granted || "I commit to honoring my human rhythms, showing up with honest intent, and dropping performative pressure."}
              onChange={(e) => onSaveProfile({ permission_granted: e.target.value })}
              className="w-full p-3.5 rounded-xl border border-stone-300 text-xs bg-white focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div>
              <label className="text-[11px] font-mono-code uppercase font-bold text-stone-500 block mb-1">
                SIGNED:
              </label>
              <input
                type="text"
                value={permissionSignature}
                onChange={(e) => setPermissionSignature(e.target.value)}
                placeholder="Your Sovereign Signature"
                className="w-full p-2.5 rounded-xl border border-stone-300 text-sm font-serif-display font-bold italic bg-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono-code uppercase font-bold text-stone-500 block mb-1">
                DATE:
              </label>
              <input
                type="date"
                value={permissionDate}
                onChange={(e) => setPermissionDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono-code bg-white"
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-600 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold font-serif-display">
              Off Script. On Purpose. All 2027.
            </span>
            <button
              type="button"
              onClick={handleCommitPermission}
              className="px-4 py-2 bg-white text-rose-900 rounded-xl text-xs font-mono-code font-bold shadow-md hover:bg-stone-100 transition-all cursor-pointer"
            >
              {permissionCommitted ? '✓ Permission Granted' : 'Stamp & Grant'}
            </button>
          </div>
        </div>
      )}

      {/* SECTION 10: MY PEOPLE / ADDRESS BOOK */}
      {activeSection === 'people' && (
        <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <span className="bg-indigo-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
              10 — MY PEOPLE
            </span>
            <span className="text-xs font-mono-code text-stone-500">KEEP YOUR PEOPLE CLOSE</span>
          </div>

          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
              Address Book &amp; Anchors
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Names. Numbers. The humans who actually matter. Your support system and co-conspirators.
            </p>
          </div>

          {/* Add New Contact Form */}
          <div className="p-4 rounded-2xl bg-[#faf8f4] border border-stone-300 space-y-3">
            <span className="text-xs font-mono-code font-bold text-slate-900 uppercase block">
              + Add Key Contact or Emergency Anchor
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Name / Role"
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                className="p-2.5 rounded-xl border border-stone-300 text-xs bg-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newContactPhone}
                onChange={(e) => setNewContactPhone(e.target.value)}
                className="p-2.5 rounded-xl border border-stone-300 text-xs bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={newContactEmail}
                onChange={(e) => setNewContactEmail(e.target.value)}
                className="p-2.5 rounded-xl border border-stone-300 text-xs bg-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <select
                value={newContactCategory}
                onChange={(e) => setNewContactCategory(e.target.value as any)}
                className="p-2 rounded-xl border border-stone-300 text-xs bg-white font-mono-code"
              >
                <option value="Inner Circle">Inner Circle</option>
                <option value="Grounding Anchor">Grounding Anchor</option>
                <option value="Creative Ally">Creative Ally</option>
                <option value="Co-Conspirator">Co-Conspirator</option>
              </select>
              <button
                type="button"
                onClick={handleAddContact}
                className="px-4 py-2 bg-stone-900 hover:bg-black text-white text-xs font-mono-code font-bold rounded-xl flex items-center space-x-1.5 cursor-pointer shadow-xs"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Save Contact</span>
              </button>
            </div>
          </div>

          {/* Contact List */}
          <div className="space-y-2">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="p-3.5 rounded-xl border border-stone-200 bg-[#fdfbf7] flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xs text-slate-900">{c.name}</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {c.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-[11px] text-stone-500 font-mono-code mt-1">
                    {c.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-stone-400" /> {c.phone}
                      </span>
                    )}
                    {c.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-stone-400" /> {c.email}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(c.id)}
                  className="text-stone-400 hover:text-rose-600 p-1.5 rounded-lg transition-colors cursor-pointer"
                  title="Remove contact"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
