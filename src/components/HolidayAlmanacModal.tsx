import React, { useState, useMemo } from 'react';
import { ALL_HOLIDAYS_ARRAY, ExtendedChaosHoliday } from '../data/holidays';
import { X, Search, Calendar, Compass, Sparkles, Check, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface HolidayAlmanacModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDate: string;
  onSelectDate: (dateStr: string) => void;
  onToast?: (message: string) => void;
}

const MONTH_TABS = [
  { m: 0, label: 'All 366 Days' },
  { m: 1, label: 'Jan' },
  { m: 2, label: 'Feb' },
  { m: 3, label: 'Mar' },
  { m: 4, label: 'Apr' },
  { m: 5, label: 'May' },
  { m: 6, label: 'Jun' },
  { m: 7, label: 'Jul' },
  { m: 8, label: 'Aug' },
  { m: 9, label: 'Sep' },
  { m: 10, label: 'Oct' },
  { m: 11, label: 'Nov' },
  { m: 12, label: 'Dec' },
];

export const HolidayAlmanacModal: React.FC<HolidayAlmanacModalProps> = ({
  isOpen,
  onClose,
  currentDate,
  onSelectDate,
  onToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filteredHolidays = useMemo(() => {
    return ALL_HOLIDAYS_ARRAY.filter(item => {
      const matchesMonth = selectedMonth === 0 || item.month === selectedMonth;
      if (!matchesMonth) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.title.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.anchorQuestion.toLowerCase().includes(q) ||
        item.theme.toLowerCase().includes(q) ||
        item.dateKey.includes(q) ||
        (item.adventures[0] && item.adventures[0].toLowerCase().includes(q))
      );
    });
  }, [selectedMonth, searchQuery]);

  if (!isOpen) return null;

  const currentYear = currentDate.split('-')[0] || '2027';

  const handleJumpToDate = (holiday: ExtendedChaosHoliday) => {
    const targetDate = `${currentYear}-${holiday.dateKey}`;
    onSelectDate(targetDate);
    if (onToast) {
      onToast(`Loaded ${holiday.title} for ${targetDate}`);
    }
    onClose();
  };

  const handleCopyCard = (holiday: ExtendedChaosHoliday) => {
    const text = `✦ ${holiday.title} (${holiday.monthName} ${holiday.day} · Day ${holiday.dayOfYear} of 366)\n"${holiday.tagline}"\n\nAnchor Question: "${holiday.anchorQuestion}"\nMicro-Dare: ${holiday.adventures[0]}\nPersona Stance: ${holiday.recommendedStance || 'Off-Script Pilot'}`;
    navigator.clipboard.writeText(text);
    setCopiedKey(holiday.dateKey);
    if (onToast) {
      onToast(`Copied ${holiday.title} to clipboard!`);
    }
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#faf7f0] border-2 border-stone-800 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-stone-300 pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono-code bg-rose-600 text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                366-DAY CHAOS ALMANAC
              </span>
              <span className="text-[11px] font-mono-code font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded">
                100% UNIQUE DAILY ROSTER
              </span>
              <span className="text-xs font-mono-code text-stone-500">
                {ALL_HOLIDAYS_ARRAY.length} Holidays Loaded
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-slate-900 mt-1">
              Almanac of Unofficial Holidays
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Every day of the year is an unscripted occasion with its own unique title, anchor inquiry, and law-abiding micro-dare.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Search + Month Filter */}
        <div className="py-3 space-y-2.5 border-b border-stone-200">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by holiday name, theme, date (e.g. '01-01'), or keyword..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono-code text-slate-900 placeholder:text-stone-400 focus:outline-rose-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Month selector tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none text-xs font-mono-code">
            {MONTH_TABS.map((tab) => (
              <button
                key={tab.m}
                onClick={() => setSelectedMonth(tab.m)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedMonth === tab.m
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Holiday Cards Grid */}
        <div className="flex-1 overflow-y-auto py-3 pr-1 space-y-3">
          {filteredHolidays.length === 0 ? (
            <div className="text-center py-12 text-stone-500 font-mono-code text-xs">
              No unofficial holidays found matching "{searchQuery}".
            </div>
          ) : (
            filteredHolidays.map((holiday) => {
              const isCurrent = currentDate.endsWith(holiday.dateKey);
              return (
                <div
                  key={holiday.dateKey}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-300 shadow-sm'
                      : 'bg-white border-stone-200 hover:border-stone-400 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono-code font-bold bg-rose-100 text-rose-800 border border-rose-200 px-2 py-0.5 rounded">
                          {holiday.monthName} {holiday.day} · Day {holiday.dayOfYear} of 366
                        </span>
                        <span className="text-[10px] font-mono-code bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                          Theme: {holiday.theme}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono-code bg-emerald-600 text-white font-bold px-2 py-0.5 rounded animate-pulse">
                            TODAY'S FLIGHT LOG
                          </span>
                        )}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-serif-display text-slate-900 mt-1">
                        ✦ {holiday.title}
                      </h4>
                      <p className="text-xs text-stone-600 italic">
                        "{holiday.tagline}"
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 self-start shrink-0">
                      <button
                        onClick={() => handleCopyCard(holiday)}
                        className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-mono-code flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy holiday prompt and adventure"
                      >
                        {copiedKey === holiday.dateKey ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleJumpToDate(holiday)}
                        className="px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-mono-code font-bold flex items-center gap-1 shadow-2xs transition-all cursor-pointer"
                        title="Open this date in the Daily OS Flight Log"
                      >
                        <span>Open Day</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 text-xs border-t border-stone-100">
                    <div className="bg-[#faf7f0] p-2.5 rounded-xl border border-stone-200">
                      <span className="text-[10px] uppercase font-mono-code font-bold text-amber-900 block mb-0.5">
                        Daily Anchor Inquiry:
                      </span>
                      <p className="font-serif-display text-slate-800 text-xs italic">
                        "{holiday.anchorQuestion}"
                      </p>
                    </div>

                    <div className="bg-sky-50/60 p-2.5 rounded-xl border border-sky-200">
                      <span className="text-[10px] uppercase font-mono-code font-bold text-sky-900 block mb-0.5">
                        Daily Living Adventure / Micro-Dare:
                      </span>
                      <p className="font-sans text-slate-800 text-xs font-medium">
                        {holiday.adventures[0]}
                      </p>
                    </div>
                  </div>

                  {holiday.recommendedStance && (
                    <div className="mt-2 text-[11px] font-mono-code text-stone-500 flex items-center gap-1">
                      <span className="font-bold text-stone-700">Recommended Stance:</span>
                      <span>"{holiday.recommendedStance}"</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-stone-300 flex items-center justify-between text-xs font-mono-code text-stone-500">
          <span>Showing {filteredHolidays.length} of {ALL_HOLIDAYS_ARRAY.length} unique holidays</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
