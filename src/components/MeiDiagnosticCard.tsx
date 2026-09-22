import React, { useState } from 'react';
import { PersonalitySnapshot, SubTrait } from '../types';
import { Sparkles, AlertTriangle, Zap, Eye, ChevronDown, ChevronUp, RefreshCw, Quote, ArrowRight, Activity, MessageSquare, Send, X, Bot, Loader2, Share2 } from 'lucide-react';
import { api } from '../services/api';

interface MeiDiagnosticCardProps {
  snapshot: PersonalitySnapshot | null;
  onTriggerDiagnosis?: () => void;
  isLoading?: boolean;
  hasLatestEntryContent?: boolean;
  onOpenShare?: () => void;
}

export const MeiDiagnosticCard: React.FC<MeiDiagnosticCardProps> = ({
  snapshot,
  onTriggerDiagnosis,
  isLoading = false,
  hasLatestEntryContent = true,
  onOpenShare
}) => {
  const [showSubTraits, setShowSubTraits] = useState(false);
  const [selectedDimension, setSelectedDimension] = useState<string>('All');

  // Live "Ask Mei" dialogue state
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'mei'; content: string }>>([
    {
      role: 'mei',
      content: "I'm holding the mirror. No corporate jargon, no fake praise, no hand-waving. What contradiction are you trying to defend right now?"
    }
  ]);
  const [userChatInput, setUserChatInput] = useState('');
  const [isAskingMei, setIsAskingMei] = useState(false);

  if (!snapshot) {
    return (
      <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-stone-300 text-center shadow-xs">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
          <Sparkles className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold font-serif-display text-slate-900 mb-2">
          Mei Self-Relationship Engine Idle
        </h3>
        <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
          Write your Evening Field Notes / Rant Box in the Daily Landing section below, then ask the Mei engine to hold up the honest mirror.
        </p>
        {onTriggerDiagnosis && (
          <button
            onClick={onTriggerDiagnosis}
            disabled={isLoading || !hasLatestEntryContent}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Scanning NLP Patterns...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Run Diagnostic on Today's Notes</span>
              </>
            )}
          </button>
        )}
      </div>
    );
  }

  // Dimension color tokens
  const bigFiveConfig = [
    {
      key: 'openness',
      name: 'Openness to Experience',
      short: 'Openness',
      letter: 'O',
      val: snapshot.openness,
      color: 'bg-sky-500',
      textColor: 'text-sky-700',
      bgLight: 'bg-sky-50',
      borderColor: 'border-sky-200',
      definition: 'Curiosity, imaginative depth, defiance of conventional scripts, tolerance of ambiguity.'
    },
    {
      key: 'conscientiousness',
      name: 'Conscientiousness',
      short: 'Conscientiousness',
      letter: 'C',
      val: snapshot.conscientiousness,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      definition: 'Self-discipline, execution power, structural order, recovery from broken streaks.'
    },
    {
      key: 'extraversion',
      name: 'Extraversion / Energy',
      short: 'Extraversion',
      letter: 'E',
      val: snapshot.extraversion,
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-200',
      definition: 'Social bandwidth, assertiveness in taking up space, vocal presence without apologies.'
    },
    {
      key: 'agreeableness',
      name: 'Agreeableness / Honesty',
      short: 'Agreeableness',
      letter: 'A',
      val: snapshot.agreeableness,
      color: 'bg-purple-500',
      textColor: 'text-purple-700',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-200',
      definition: 'Compassion balance, refusal of performative politeness, uncurated truth-telling.'
    },
    {
      key: 'neuroticism',
      name: 'Neuroticism / Stress Spikes',
      short: 'Neuroticism',
      letter: 'N',
      val: snapshot.neuroticism,
      color: 'bg-rose-500',
      textColor: 'text-rose-700',
      bgLight: 'bg-rose-50',
      borderColor: 'border-rose-200',
      definition: 'Vulnerability to anxiety, latency in emotional resets, over-thinking friction.'
    }
  ];

  // Burnout status styling
  const burnoutColors = {
    Low: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    Moderate: 'bg-amber-100 text-amber-800 border-amber-300',
    High: 'bg-orange-100 text-orange-800 border-orange-300',
    Critical: 'bg-rose-100 text-rose-800 border-rose-400 font-bold animate-pulse'
  };

  const filteredSubTraits = selectedDimension === 'All'
    ? snapshot.sub_traits
    : snapshot.sub_traits.filter(st => st.dimension.toLowerCase() === selectedDimension.toLowerCase());

  const handleSendChatMessage = async (presetText?: string) => {
    const textToSend = presetText || userChatInput.trim();
    if (!textToSend || isAskingMei) return;

    const newHistory = [...chatMessages, { role: 'user' as const, content: textToSend }];
    setChatMessages(newHistory);
    setUserChatInput('');
    setIsAskingMei(true);

    try {
      const response = await api.askMei({
        message: textToSend,
        conversation_history: newHistory,
        snapshot
      });
      setChatMessages([...newHistory, { role: 'mei', content: response.reply }]);
    } catch (e) {
      console.error(e);
      setChatMessages([
        ...newHistory,
        { role: 'mei', content: "You're intellectualizing to avoid the friction. Go execute the boundary you're dreading." }
      ]);
    } finally {
      setIsAskingMei(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl border border-stone-300 shadow-sm overflow-hidden mb-8">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-stone-900 to-rose-950 text-white p-5 sm:p-6 border-b border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[11px] font-mono-code tracking-widest text-rose-300 uppercase font-bold">
                MEI-STYLE DIAGNOSTIC ENGINE · ACTIVE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-display mt-1 text-cream-canvas">
              Self-Relationship Snapshot
            </h2>
            <p className="text-xs text-stone-300 mt-0.5">
              NLP analysis of your latest Field Notes & Rants · Snapshot date: <span className="font-mono-code font-bold text-amber-300">{snapshot.snapshot_date}</span>
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Ask Mei Live Dialogue Button */}
            <button
              type="button"
              id="open-ask-mei-dialogue-btn"
              onClick={() => setShowChatModal(true)}
              className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center space-x-1.5"
              title="Open direct honest mirror dialogue with Mei"
            >
              <MessageSquare className="w-3.5 h-3.5 text-purple-200" />
              <span>Interrogate Mei</span>
            </button>

            {onOpenShare && (
              <button
                type="button"
                id="share-mei-mirror-btn"
                onClick={onOpenShare}
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center space-x-1.5 border border-white/20"
                title="Share this diagnostic snapshot card"
              >
                <Share2 className="w-3.5 h-3.5 text-rose-300" />
                <span>Share Mirror</span>
              </button>
            )}

            {onTriggerDiagnosis && (
              <button
                onClick={onTriggerDiagnosis}
                disabled={isLoading || !hasLatestEntryContent}
                className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center space-x-1.5 disabled:opacity-50"
                title="Re-run diagnostic analysis using current entry notes"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>{isLoading ? 'Diagnosing...' : 'Re-Diagnose'}</span>
              </button>
            )}

            <div className="flex items-center space-x-2 bg-stone-800/80 px-3 py-1.5 rounded-xl border border-stone-700">
              <span className="text-[11px] text-stone-400 font-mono-code">Mood:</span>
              <span className="text-xs font-bold text-amber-300 font-mono-code">
                {snapshot.detected_mood}
              </span>
            </div>
          </div>
        </div>

        {/* Burnout & Stress Radar Bar */}
        <div className="mt-4 pt-3 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-stone-900/60 p-2.5 rounded-lg border border-stone-800 flex items-center justify-between">
            <span className="text-stone-400">Burnout Indicator:</span>
            <span className={`px-2 py-0.5 rounded text-[11px] border font-bold ${burnoutColors[snapshot.burnout_risk] || burnoutColors.Moderate}`}>
              {snapshot.burnout_risk} Risk
            </span>
          </div>

          <div className="bg-stone-900/60 p-2.5 rounded-lg border border-stone-800 flex items-center justify-between">
            <span className="text-stone-400">Self-Sabotage Alert:</span>
            <span className="text-rose-300 font-semibold truncate max-w-[170px]" title={snapshot.self_sabotage_alert}>
              {snapshot.self_sabotage_alert ? 'Detected' : 'Clear'}
            </span>
          </div>

          <div className="bg-stone-900/60 p-2.5 rounded-lg border border-stone-800 flex items-center justify-between">
            <span className="text-stone-400">Diagnostic Persona:</span>
            <span className="text-amber-400 font-bold font-mono-code">
              Sassy Mirror (Zero BS)
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-7">
        
        {/* SASSY HONEST MIRROR FEEDBACK (The Centerpiece) */}
        <div className="bg-[#fffdfa] border-2 border-rose-300/80 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-600 text-white font-mono-code text-[10px] tracking-widest px-3 py-1 font-bold rounded-bl-xl uppercase">
            THE HONEST MIRROR · CALLOUT
          </div>

          <div className="flex items-start space-x-3.5 mb-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex-shrink-0 flex items-center justify-center font-bold text-lg">
              🪞
            </div>
            <div>
              <h4 className="font-bold text-slate-900 font-serif-display text-base sm:text-lg">
                What You're Saying vs. What You're Actually Doing
              </h4>
              <p className="text-xs text-rose-800/80 font-mono-code">
                No toxic positivity. Calling out your cognitive contradictions.
              </p>
            </div>
          </div>

          {/* Contradiction Callout Box */}
          {snapshot.contradiction_callout && (
            <div className="bg-rose-50/70 border-l-4 border-rose-600 p-3 rounded-r-lg my-3 text-xs text-rose-950 font-medium">
              <span className="font-bold text-rose-900 uppercase font-mono-code text-[10px] block mb-0.5">Contradiction Detected:</span>
              "{snapshot.contradiction_callout}"
            </div>
          )}

          {/* AI Feedback paragraphs */}
          <div className="text-sm text-slate-800 leading-relaxed space-y-2.5 whitespace-pre-line font-sans border-t border-stone-200/80 pt-3">
            {snapshot.ai_feedback}
          </div>

          {/* Prescribed Micro-Dare */}
          {snapshot.micro_dare && (
            <div className="mt-4 pt-3 border-t border-dashed border-rose-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/60 p-3.5 rounded-xl border border-amber-200">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-white font-mono-code font-bold text-[10px] uppercase tracking-wider">
                  Prescribed Micro-Dare
                </span>
                <span className="text-xs font-semibold text-amber-950">
                  {snapshot.micro_dare}
                </span>
              </div>
              <span className="text-[11px] text-amber-800 italic flex items-center gap-1 font-mono-code">
                Monotony = Death <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          )}
        </div>

        {/* BIG 5 OCEAN METERS */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold font-serif-display text-slate-900">
                Big 5 (OCEAN) Personality Trait Meters
              </h3>
              <p className="text-xs text-stone-600">
                Calculated dynamically from linguistics, emotional valence, and response latency.
              </p>
            </div>
            <button
              onClick={() => setShowSubTraits(!showSubTraits)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold text-slate-700 hover:bg-stone-100 transition-colors"
            >
              <span>{showSubTraits ? 'Hide 30 Sub-Traits' : 'Inspect 30 Sub-Traits'}</span>
              {showSubTraits ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            {bigFiveConfig.map((item) => (
              <div
                key={item.key}
                className={`p-4 rounded-xl border ${item.borderColor} ${item.bgLight} transition-all hover:shadow-xs`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-white shadow-2xs flex items-center justify-center font-display-punch font-bold text-xs text-slate-900 border border-stone-200">
                    {item.letter}
                  </span>
                  <span className="text-sm font-bold font-mono-code text-slate-900">
                    {item.val}%
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900 truncate mb-1" title={item.name}>
                  {item.short}
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-stone-200 mb-2">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${item.val}%` }}
                  />
                </div>
                <p className="text-[11px] text-stone-600 leading-tight line-clamp-2" title={item.definition}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 30 SUB-TRAITS EXPANSION DRAWER */}
        {showSubTraits && (
          <div className="bg-stone-50 border border-stone-300 rounded-xl p-5 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-serif-display">
                  Detailed Sub-Trait Breakdown (30 Dimensions)
                </h4>
                <p className="text-xs text-stone-600">
                  Granular facets modeled after the Mei psychological natural language framework.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code">
                {['All', 'Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'].map((dim) => (
                  <button
                    key={dim}
                    onClick={() => setSelectedDimension(dim)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      selectedDimension === dim
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {dim}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSubTraits.map((trait, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-stone-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900">{trait.name}</span>
                    <span className="font-mono-code font-semibold px-1.5 py-0.5 rounded bg-stone-100 text-stone-800 text-[11px]">
                      {trait.score}%
                    </span>
                  </div>
                  <div className="text-[10px] font-mono-code text-stone-400 mb-1.5 uppercase tracking-wider">
                    {trait.dimension}
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mb-1.5">
                    <div
                      className={`h-full rounded-full ${
                        trait.dimension === 'Openness' ? 'bg-sky-500' :
                        trait.dimension === 'Conscientiousness' ? 'bg-emerald-500' :
                        trait.dimension === 'Extraversion' ? 'bg-amber-500' :
                        trait.dimension === 'Agreeableness' ? 'bg-purple-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${trait.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug">
                    {trait.trait_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Ask Mei Live Dialogue Modal / Drawer */}
      {showChatModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-rose-500/80 rounded-2xl max-w-xl w-full h-[620px] max-h-[90vh] flex flex-col text-stone-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950/80 rounded-t-2xl">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-bold font-serif-display text-white">
                      Mei Honest Mirror Dialogue
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-[10px] font-mono-code text-stone-400">
                    Direct · Sassy · Anti-Toxic-Positivity · Zero Corporate BS
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowChatModal(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Starter Chips */}
            <div className="p-2.5 bg-stone-950 border-b border-stone-800/80 flex flex-wrap gap-1.5 overflow-x-auto text-[11px] font-mono-code">
              {[
                "Why am I self-sabotaging my rest?",
                "Call out my biggest blind spot today",
                "Give me an unscripted micro-dare",
                "Am I over-optimizing or making progress?"
              ].map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendChatMessage(chip)}
                  disabled={isAskingMei}
                  className="px-2 py-1 rounded bg-stone-800 hover:bg-rose-900/60 hover:border-rose-700 text-stone-300 hover:text-white border border-stone-700 transition-colors shrink-0 disabled:opacity-50"
                >
                  "{chip}"
                </button>
              ))}
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-stone-900/50">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-rose-600 text-white rounded-br-none shadow-xs'
                        : 'bg-stone-950 border border-stone-800 text-stone-200 rounded-bl-none font-sans'
                    }`}
                  >
                    {msg.role === 'mei' && (
                      <div className="text-[9px] font-mono-code uppercase font-bold text-amber-400 mb-1 tracking-wider flex items-center space-x-1">
                        <span>MEI</span>
                        <span className="text-stone-500">·</span>
                        <span className="text-stone-400 font-normal">Sovereignty Mirror</span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}

              {isAskingMei && (
                <div className="flex justify-start">
                  <div className="bg-stone-950 border border-stone-800 text-stone-300 rounded-2xl p-3 text-xs rounded-bl-none flex items-center space-x-2 font-mono-code">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-500" />
                    <span>Mei is cutting through your excuses...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-stone-800 bg-stone-950/80 rounded-b-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendChatMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={userChatInput}
                  onChange={(e) => setUserChatInput(e.target.value)}
                  placeholder="Ask Mei anything or defend your excuses..."
                  className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-rose-500"
                  disabled={isAskingMei}
                />
                <button
                  type="submit"
                  disabled={!userChatInput.trim() || isAskingMei}
                  className="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center space-x-1 disabled:opacity-40"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
