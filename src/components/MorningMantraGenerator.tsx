import React, { useState } from 'react';
import { MORNING_MANTRAS, MorningMantra } from '../data/mantras';
import { Sparkles, RefreshCw, Copy, Check, ArrowRight, ShieldAlert, Flame, Zap, Share2, Wand2, X } from 'lucide-react';
import { api } from '../services/api';
import { GeneratedMantra } from '../types';

interface MorningMantraGeneratorProps {
  onAdoptAsIntention?: (mantraText: string) => void;
  onShare?: (mantraText: string) => void;
  wordOfTheYear?: string;
  chaosName?: string;
  holidayTitle?: string;
  holidayAdventure?: string;
  className?: string;
}

export const MorningMantraGenerator: React.FC<MorningMantraGeneratorProps> = ({
  onAdoptAsIntention,
  onShare,
  wordOfTheYear = "FERAL",
  chaosName = "The Unruly Alchemist",
  holidayTitle = "Fresh Margin Day",
  holidayAdventure = "",
  className = ""
}) => {
  // Initialize with a random sharp/piercing mantra
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * MORNING_MANTRAS.length));
  const [edgeFilter, setEdgeFilter] = useState<'All' | 'Sharp' | 'Piercing' | 'Feral'>('All');
  const [copied, setCopied] = useState(false);
  const [adopted, setAdopted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // AI Generator Drawer / Modal state
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiMood, setAiMood] = useState('Rebellious & Allergic to Busywork');
  const [aiEdgeLevel, setAiEdgeLevel] = useState<'Sharp' | 'Piercing' | 'Feral'>('Piercing');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [generatedMantra, setGeneratedMantra] = useState<GeneratedMantra | null>(null);

  // Filtered pool based on edge preference
  const availableMantras = edgeFilter === 'All'
    ? MORNING_MANTRAS
    : MORNING_MANTRAS.filter(m => m.edgeLevel === edgeFilter);

  const activePool = availableMantras.length > 0 ? availableMantras : MORNING_MANTRAS;
  const currentMantra: MorningMantra = activePool[currentIndex % activePool.length] || MORNING_MANTRAS[0];

  // Refresh to next mantra, optionally kicking up the edge
  const handleRefresh = (harder: boolean = false) => {
    setIsSpinning(true);
    setCopied(false);
    setAdopted(false);

    setTimeout(() => {
      if (harder) {
        // Specifically switch to Piercing or Feral
        const fierceMantras = MORNING_MANTRAS.filter(m => m.edgeLevel === 'Piercing' || m.edgeLevel === 'Feral');
        const nextPick = fierceMantras[Math.floor(Math.random() * fierceMantras.length)];
        const targetIdx = activePool.findIndex(m => m.id === nextPick.id);
        setCurrentIndex(targetIdx >= 0 ? targetIdx : Math.floor(Math.random() * activePool.length));
      } else {
        // Pick a different random index
        let nextIdx = Math.floor(Math.random() * activePool.length);
        if (nextIdx === currentIndex && activePool.length > 1) {
          nextIdx = (nextIdx + 1) % activePool.length;
        }
        setCurrentIndex(nextIdx);
      }
      setIsSpinning(false);
    }, 200);
  };

  const handleGenerateAiMantra = async () => {
    setIsAiGenerating(true);
    try {
      const result = await api.generateAiMantra({
        word_of_the_year: wordOfTheYear,
        chaos_name: chaosName,
        mood: aiMood,
        edge_level: aiEdgeLevel,
        holiday_title: holidayTitle,
        holiday_adventure: holidayAdventure
      });
      setGeneratedMantra(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAiGenerating(false);
    }
  };

  const handleCopy = (textToCopy: string = currentMantra.text) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAdopt = (textToAdopt: string = currentMantra.text) => {
    if (onAdoptAsIntention) {
      onAdoptAsIntention(textToAdopt);
      setAdopted(true);
      setTimeout(() => setAdopted(false), 2500);
    }
  };

  const getEdgeBadgeStyle = (level: string) => {
    switch (level) {
      case 'Feral':
        return 'bg-rose-900 text-rose-200 border-rose-700';
      case 'Piercing':
        return 'bg-amber-900 text-amber-200 border-amber-700';
      case 'Sharp':
      default:
        return 'bg-stone-800 text-stone-300 border-stone-600';
    }
  };

  return (
    <div
      id="morning-mantra-box"
      className={`bg-stone-900 text-stone-100 print:bg-white print:text-slate-900 rounded-2xl border-2 border-stone-800 print:border-stone-300 p-4 sm:p-5 shadow-sm space-y-3 relative overflow-hidden ${className}`}
    >
      {/* Accent edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 print:hidden" />

      {/* Header bar with attitude tag and edge selector */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse print:hidden" />
          <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
            LAUNCH MANTRA GENERATOR
          </span>
          <span className="text-stone-500 text-[10px]">·</span>
          <span className="text-[10px] font-mono-code text-stone-400 print:text-stone-600">ZERO TOXIC POSITIVITY</span>
        </div>

        {/* Edge level filter pills */}
        <div className="flex items-center space-x-1 bg-stone-950 p-0.5 rounded-lg border border-stone-800 text-[10px] font-mono-code print:hidden">
          {(['All', 'Sharp', 'Piercing', 'Feral'] as const).map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => {
                setEdgeFilter(tier);
                setCurrentIndex(0);
              }}
              className={`px-2 py-0.5 rounded transition-colors ${
                edgeFilter === tier
                  ? 'bg-rose-600 text-white font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Main Mantra Quote Display */}
      <div className="bg-stone-950/70 print:bg-stone-50 border border-stone-800 print:border-stone-300 rounded-xl p-3.5 sm:p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className={`text-[9px] font-mono-code uppercase font-bold px-2 py-0.5 rounded border ${getEdgeBadgeStyle(
                currentMantra.edgeLevel
              )} print:bg-stone-200 print:text-slate-800 print:border-stone-400`}
            >
              ⚡ {currentMantra.edgeLevel} Edge
            </span>
            <span className="text-[10px] font-mono-code text-stone-400 print:text-stone-600">
              [{currentMantra.attitude}]
            </span>
          </div>
          <span className="text-[10px] font-mono-code text-stone-500 print:text-stone-600 uppercase">
            {currentMantra.contextTag}
          </span>
        </div>

        <p className="text-sm sm:text-base font-serif-display font-medium text-stone-100 print:text-slate-900 leading-snug italic">
          "{currentMantra.text}"
        </p>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 print:hidden">
        {/* Left side: Refresh controls (Standard & "Too soft? Hit me harder") */}
        <div className="flex items-center flex-wrap gap-1.5">
          <button
            type="button"
            id="refresh-mantra-standard-btn"
            onClick={() => handleRefresh(false)}
            disabled={isSpinning}
            className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono-code rounded-lg border border-stone-700 transition-all flex items-center space-x-1.5 disabled:opacity-50"
            title="Cycle next affirmation"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-stone-400 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>Cycle</span>
          </button>

          {/* Core requested button: Too soft? */}
          <button
            type="button"
            id="refresh-mantra-harder-btn"
            onClick={() => handleRefresh(true)}
            disabled={isSpinning}
            className="px-3 py-1.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-mono-code font-bold rounded-lg shadow-xs transition-all flex items-center space-x-1.5 disabled:opacity-50"
            title="Too soft? Provide a sharper, non-toxic wake up call"
          >
            <Flame className="w-3.5 h-3.5 text-amber-200" />
            <span>Too Soft? Hit Me Harder</span>
          </button>

          {/* AI Custom Spark Button */}
          <button
            type="button"
            id="open-ai-mantra-modal-btn"
            onClick={() => {
              setShowAiModal(true);
              if (!generatedMantra) {
                handleGenerateAiMantra();
              }
            }}
            className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono-code font-bold rounded-lg shadow-xs transition-all flex items-center space-x-1.5"
            title="Generate a custom AI mantra tailored to your mood and word of the year"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>AI Custom Spark</span>
          </button>
        </div>

        {/* Right side: Adopt, Share, and Copy */}
        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            id="copy-mantra-btn"
            onClick={() => handleCopy(currentMantra.text)}
            className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg border border-stone-700 transition-colors"
            title="Copy mantra text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {onShare && (
            <button
              type="button"
              id="share-mantra-btn"
              onClick={() => onShare(currentMantra.text)}
              className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-amber-300 rounded-lg border border-stone-700 transition-colors"
              title="Share this mantra to Social Media"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          )}

          {onAdoptAsIntention && (
            <button
              type="button"
              id="adopt-morning-intention-btn"
              onClick={() => handleAdopt(currentMantra.text)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all flex items-center space-x-1 border ${
                adopted
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-amber-400 hover:bg-amber-300 text-stone-950 border-amber-300'
              }`}
            >
              {adopted ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Adopted!</span>
                </>
              ) : (
                <>
                  <span>Adopt as Intention</span>
                  <ArrowRight className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* AI Custom Spark Mantra Modal / Drawer */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-purple-500/80 rounded-2xl max-w-lg w-full p-6 text-stone-100 shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                <span className="text-xs font-mono-code uppercase font-bold text-purple-400 tracking-wider">
                  Gemini AI Morning Spark Generator
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowAiModal(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Parameter Selectors */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-300 font-mono-code font-bold mb-1">
                  How are you waking up right now? (Current state / friction):
                </label>
                <input
                  type="text"
                  value={aiMood}
                  onChange={(e) => setAiMood(e.target.value)}
                  placeholder="e.g. Brain fog, dreading meetings, restless, ready to rebel"
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-stone-200 text-xs focus:outline-purple-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-mono-code font-bold mb-1">
                  Desired Edge Tier:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Sharp', 'Piercing', 'Feral'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setAiEdgeLevel(tier)}
                      className={`py-1.5 px-3 rounded-lg border text-xs font-mono-code font-bold transition-all ${
                        aiEdgeLevel === tier
                          ? 'bg-purple-600 text-white border-purple-400 shadow-xs'
                          : 'bg-stone-950 text-stone-400 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {tier === 'Feral' ? '🔥 Feral' : tier === 'Piercing' ? '⚡ Piercing' : '✨ Sharp'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated AI Result Card */}
            {generatedMantra && (
              <div className="bg-stone-950 border border-purple-900/60 rounded-xl p-4 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono-code">
                  <span className="px-2 py-0.5 rounded bg-purple-900/80 text-purple-200 font-bold border border-purple-700 uppercase">
                    [{generatedMantra.attitude}]
                  </span>
                  <span className="text-purple-400 font-bold uppercase">
                    {generatedMantra.contextTag}
                  </span>
                </div>

                <p className="font-serif-display text-base text-stone-100 italic leading-relaxed">
                  "{generatedMantra.text}"
                </p>

                {generatedMantra.whyItHits && (
                  <div className="text-[11px] text-stone-400 border-t border-stone-800 pt-2 font-mono-code">
                    <span className="text-amber-400 font-bold">Why it hits: </span>
                    {generatedMantra.whyItHits}
                  </div>
                )}
              </div>
            )}

            {/* Modal Controls */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-stone-800">
              <button
                type="button"
                onClick={handleGenerateAiMantra}
                disabled={isAiGenerating}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono-code font-bold rounded-xl border border-stone-700 transition-all flex items-center space-x-2 disabled:opacity-50"
              >
                {isAiGenerating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-400" />
                    <span>Sparking Gemini...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-3.5 h-3.5 text-purple-300" />
                    <span>Re-Generate Spark</span>
                  </>
                )}
              </button>

              {generatedMantra && onAdoptAsIntention && (
                <button
                  type="button"
                  onClick={() => {
                    handleAdopt(generatedMantra.text);
                    setShowAiModal(false);
                  }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono-code font-bold rounded-xl shadow-sm transition-all flex items-center space-x-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Adopt as Morning Intention</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
