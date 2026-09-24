import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Target,
  Compass,
  MoreHorizontal,
  DollarSign,
  User,
  Image as ImageIcon,
  Flame,
  Share2,
  Smile,
  X,
  Mic,
  Layers,
  Award,
  Download
} from 'lucide-react';

interface AndroidBottomNavProps {
  activeTab: 'cover' | 'daily' | 'trendline' | 'diagnostic' | 'goals' | 'identity' | 'weekly' | 'money' | 'themes' | 'frontmatter' | 'aistudio';
  setActiveTab: (tab: 'cover' | 'daily' | 'trendline' | 'diagnostic' | 'goals' | 'identity' | 'weekly' | 'money' | 'themes' | 'frontmatter' | 'aistudio') => void;
  onOpenStickers: () => void;
  onOpenShare: () => void;
  onOpenPackage?: () => void;
  onOpenAudioMemo?: () => void;
}

export const AndroidBottomNav: React.FC<AndroidBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenStickers,
  onOpenShare,
  onOpenPackage,
  onOpenAudioMemo,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleTabSelect = (tab: typeof activeTab) => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {
        // ignore
      }
    }
    setActiveTab(tab);
    setShowDrawer(false);
  };

  const navItems = [
    { id: 'daily' as const, label: 'Daily OS', icon: BookOpen },
    { id: 'diagnostic' as const, label: 'Diagnostic', icon: Sparkles },
    { id: 'goals' as const, label: 'Anti-Goals', icon: Target },
    { id: 'weekly' as const, label: 'Debrief', icon: Compass },
  ];

  return (
    <>
      {/* Quick Drawer for additional tabs / actions on Android */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs md:hidden animate-fade-in print:hidden">
          <div
            className="fixed inset-0"
            onClick={() => setShowDrawer(false)}
          />
          <div className="relative z-10 bg-white rounded-t-3xl border-t-2 border-stone-800 p-5 shadow-2xl pb-[max(env(safe-area-inset-bottom),1.5rem)] space-y-4">
            {/* Drawer Drag handle */}
            <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto mb-1" />

            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-stone-500">
                Life OS Navigation &amp; Tools
              </span>
              <button
                type="button"
                onClick={() => setShowDrawer(false)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => handleTabSelect('money')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'money'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="text-[11px] font-mono-code font-medium">Money Map</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('identity')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'identity'
                    ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <User className="w-5 h-5 text-rose-600" />
                <span className="text-[11px] font-mono-code font-medium">Identity</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('trendline')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'trendline'
                    ? 'bg-amber-50 border-amber-500 text-amber-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Flame className="w-5 h-5 text-amber-600" />
                <span className="text-[11px] font-mono-code font-medium">Chaos Radar</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('frontmatter')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'frontmatter'
                    ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Layers className="w-5 h-5 text-rose-600" />
                <span className="text-[11px] font-mono-code font-medium">Front Matter</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('themes')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'themes'
                    ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-[11px] font-mono-code font-medium">12 Themes</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('aistudio')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'aistudio'
                    ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Sparkles className="w-5 h-5 text-rose-600" />
                <span className="text-[11px] font-mono-code font-medium">AI Studio</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSelect('cover')}
                className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border transition-all text-center ${
                  activeTab === 'cover'
                    ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                <ImageIcon className="w-5 h-5 text-purple-600" />
                <span className="text-[11px] font-mono-code font-medium">Cover Art</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowDrawer(false);
                  onOpenStickers();
                }}
                className="p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border bg-amber-50/50 border-amber-200 text-amber-900 hover:bg-amber-100/50 transition-all text-center"
              >
                <Smile className="w-5 h-5 text-amber-600" />
                <span className="text-[11px] font-mono-code font-medium">Stickers</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowDrawer(false);
                  onOpenShare();
                }}
                className="p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border bg-indigo-50/50 border-indigo-200 text-indigo-900 hover:bg-indigo-100/50 transition-all text-center"
              >
                <Share2 className="w-5 h-5 text-indigo-600" />
                <span className="text-[11px] font-mono-code font-medium">Share Card</span>
              </button>

              {onOpenPackage && (
                <button
                  type="button"
                  onClick={() => {
                    setShowDrawer(false);
                    onOpenPackage();
                  }}
                  className="p-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 border bg-slate-900 border-stone-800 text-white hover:bg-black transition-all text-center"
                >
                  <Download className="w-5 h-5 text-rose-400" />
                  <span className="text-[11px] font-mono-code font-bold">Package App</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar on Mobile/Android */}
      <nav
        aria-label="Android Mobile Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-300/80 shadow-lg md:hidden print:hidden transition-all"
        style={{
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 0.5rem)'
        }}
      >
        <div className="grid grid-cols-5 h-14 items-center px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabSelect(item.id)}
                className={`flex flex-col items-center justify-center h-full relative py-1 transition-all active:scale-95 ${
                  isActive ? 'text-rose-600' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {isActive && (
                  <span className="absolute top-1 w-8 h-1 bg-rose-600 rounded-full" />
                )}
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 mt-0.5' : ''}`} />
                <span className={`text-[10px] tracking-tight font-mono-code mt-0.5 ${isActive ? 'font-bold' : 'font-normal'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* 5th button: Drawer trigger */}
          <button
            type="button"
            onClick={() => setShowDrawer(!showDrawer)}
            className={`flex flex-col items-center justify-center h-full relative py-1 transition-all active:scale-95 ${
              showDrawer || ['money', 'identity', 'trendline', 'cover'].includes(activeTab)
                ? 'text-rose-600 font-bold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            {['money', 'identity', 'trendline', 'cover'].includes(activeTab) && (
              <span className="absolute top-1 w-8 h-1 bg-rose-600 rounded-full" />
            )}
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-[10px] tracking-tight font-mono-code mt-0.5">
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
