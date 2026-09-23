import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { UserProfile, DailyEntry, PersonalitySnapshot, Goal, AntiGoal, WeeklyFlightDebrief, MonthlyMoneyMap } from '../types';
import {
  Smartphone,
  Download,
  Upload,
  Printer,
  Copy,
  Check,
  X,
  Layers,
  Terminal,
  FileCode,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  QrCode
} from 'lucide-react';

interface PackageAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  dailyEntry: DailyEntry;
  snapshot: PersonalitySnapshot | null;
  goals: Goal[];
  antiGoals: AntiGoal[];
  debriefs: WeeklyFlightDebrief[];
  moneyMaps: MonthlyMoneyMap[];
  onToast?: (msg: string) => void;
  onImportData?: (importedData: any) => void;
}

export const PackageAppModal: React.FC<PackageAppModalProps> = ({
  isOpen,
  onClose,
  user,
  dailyEntry,
  snapshot,
  goals,
  antiGoals,
  debriefs,
  moneyMaps,
  onToast,
  onImportData
}) => {
  const { isInstallable, isInstalled, isAndroid, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'android' | 'export_json' | 'print' | 'developer'>('android');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
    if (onToast) onToast("Copied to clipboard!");
  };

  // Export full planner data as JSON
  const handleExportJSON = () => {
    const backupData = {
      app: '2027 Life OS: Off Script',
      version: '1.0.0',
      exported_at: new Date().toISOString(),
      user,
      current_daily_entry: dailyEntry,
      latest_diagnostic: snapshot,
      goals,
      anti_goals: antiGoals,
      weekly_debriefs: debriefs,
      monthly_money_maps: moneyMaps,
      local_storage: {
        word_reflections: localStorage.getItem('offscript_word_reflections'),
        vision_dump: localStorage.getItem('offscript_vision_dump'),
        life_audit: localStorage.getItem('offscript_life_audit'),
        permission_slip: localStorage.getItem('offscript_permission_slip'),
        contacts: localStorage.getItem('offscript_contacts')
      }
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `life-os-offscript-backup-${user.chaos_name || 'operator'}-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (onToast) onToast("Complete Life OS backup downloaded!");
  };

  // Import JSON backup
  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.local_storage) {
          Object.entries(parsed.local_storage).forEach(([k, v]) => {
            if (v && typeof v === 'string') {
              localStorage.setItem(`offscript_${k}`, v);
            }
          });
        }
        if (onImportData) {
          onImportData(parsed);
        }
        if (onToast) onToast("Data imported successfully! Refreshing...");
        setTimeout(() => window.location.reload(), 1000);
      } catch (err) {
        if (onToast) onToast("Error parsing backup file.");
      }
    };
    reader.readAsText(file);
  };

  const bubblewrapCommand = `npx @bubblewrap/cli init --manifest="${window.location.origin}/manifest.webmanifest"
npx @bubblewrap/cli build`;

  const capacitorCommand = `npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Life OS: Off Script" "com.offscript.lifeos" --web-dir "dist"
npx cap add android
npx cap run android`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-fade-in print:hidden">
      <div className="w-full max-w-2xl bg-white border-2 border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 border-b border-stone-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold font-serif-display text-lg text-white">
                  Package &amp; Deploy App
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-rose-500/30 text-rose-300 border border-rose-500/40">
                  Android &amp; PWA
                </span>
              </div>
              <p className="text-xs text-stone-300">
                Install as a standalone Android app, export data backups, or prepare print spreads.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-4 pt-2 gap-2 text-xs font-mono-code font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('android')}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'android'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android Install</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('export_json')}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'export_json'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Backup &amp; Restore</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('print')}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'print'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Spreads</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('developer')}
            className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'developer'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>APK / TWA Commands</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-stone-700 text-xs font-sans">
          
          {/* TAB: ANDROID INSTALL */}
          {activeTab === 'android' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold font-serif-display text-emerald-950 text-sm">
                    {isInstalled ? 'App is Installed & Running Standalone' : 'Ready for Instant Android Installation'}
                  </h4>
                  <p className="text-emerald-800 mt-1">
                    {isInstalled
                      ? 'You are running Life OS in full-screen standalone mode. Offline caching, responsive touch gestures, and local state are active.'
                      : 'The Web App Manifest and Service Worker are configured with auto-updating offline cache. Install to your Android home screen in seconds.'}
                  </p>
                </div>
              </div>

              {!isInstalled && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div>
                      <span className="font-bold text-slate-900 text-sm block">
                        Install as Android PWA
                      </span>
                      <span className="text-[11px] text-stone-500 font-mono-code">
                        No app store account needed · Offline-first
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={install}
                      disabled={!isInstallable}
                      className={`px-4 py-2 rounded-xl font-mono-code font-bold text-xs flex items-center space-x-1.5 transition-all shadow-xs ${
                        isInstallable
                          ? 'bg-rose-600 hover:bg-rose-500 text-white cursor-pointer active:scale-95'
                          : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      <span>{isInstallable ? 'Install Now' : 'Menu ⋮ > Install'}</span>
                    </button>
                  </div>

                  <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-2">
                    <span className="font-mono-code font-bold text-[11px] uppercase text-slate-900 block">
                      Instructions for Android (Chrome / Brave / Edge):
                    </span>
                    <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
                      <li>Tap the <strong>three dots (⋮)</strong> in your mobile browser header.</li>
                      <li>Select <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong>.</li>
                      <li>Tap <strong>Install</strong> to get the standalone Off*Script icon in your app drawer.</li>
                    </ol>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-stone-500 block">
                    Launcher Icon Specs
                  </span>
                  <span className="font-bold text-slate-900 text-xs">
                    Adaptive Maskable 512x512 PNG
                  </span>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Safe-zone squircle formatted for Material You &amp; Android 14+
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-stone-500 block">
                    Theme Color
                  </span>
                  <span className="font-bold text-slate-900 text-xs">
                    #0f172a (Deep Midnight Slate)
                  </span>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Edge-to-edge status bar &amp; navigation bar styling
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: EXPORT JSON */}
          {activeTab === 'export_json' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
                <h4 className="font-bold font-serif-display text-indigo-950 text-sm">
                  Complete Sovereign Data Ownership
                </h4>
                <p className="text-indigo-800 mt-1">
                  Download your entire Life OS archive — daily reflections, Big 6 Goals, Anti-Goals, weekly debriefs, financial maps, and personality diagnostics — in a single JSON backup.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="flex-1 py-3 px-4 bg-stone-900 hover:bg-black text-white rounded-xl font-mono-code font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-rose-400" />
                  <span>Download Full JSON Backup</span>
                </button>

                <label className="flex-1 py-3 px-4 bg-white hover:bg-stone-50 border-2 border-stone-800 text-slate-900 rounded-xl font-mono-code font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-xs cursor-pointer">
                  <Upload className="w-4 h-4 text-rose-600" />
                  <span>Restore from Backup</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileImport}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-[11px] font-mono-code text-stone-600 space-y-1">
                <div>• Operator: {user.chaos_name || 'Sovereign Human'}</div>
                <div>• Word of the Year: {user.word_of_the_year}</div>
                <div>• Active Goals: {goals.length} · Anti-Goals: {antiGoals.length}</div>
                <div>• Weekly Debriefs Logged: {debriefs.length}</div>
                <div>• Financial Maps: {moneyMaps.length}</div>
              </div>
            </div>
          )}

          {/* TAB: PRINT SPREADS */}
          {activeTab === 'print' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <h4 className="font-bold font-serif-display text-amber-950 text-sm">
                  Physical Planner Print Spreads (Vervante Specs)
                </h4>
                <p className="text-amber-800 mt-1">
                  Format and print your daily flight logs and weekly debriefs as physical 8.5" × 11" pages, matching the physical 1273-page Life OS binder specifications.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-mono-code font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-xs cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Today's Spread (8.5" x 11")</span>
                </button>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-1.5 text-stone-600 text-xs">
                <span className="font-bold font-mono-code text-slate-900 block uppercase">
                  Vervante Print Specs:
                </span>
                <p>• Size: 8.5" × 11" US Letter</p>
                <p>• Margins: ½" top/bottom, ¼" left/right</p>
                <p>• Clean print styling: navigation bars, modal backdrops, and action buttons are automatically suppressed during browser print.</p>
              </div>
            </div>
          )}

          {/* TAB: DEVELOPER / TWA */}
          {activeTab === 'developer' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900 text-white border border-stone-700">
                <h4 className="font-bold font-serif-display text-white text-sm flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-rose-400" />
                  <span>Build Native Android APK with Bubblewrap</span>
                </h4>
                <p className="text-stone-300 mt-1 text-[11px]">
                  Google's official Bubblewrap CLI packages any PWA into a production-ready Android APK for sideloading or the Google Play Store.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono-code text-stone-500">
                  <span>Option 1: Bubblewrap CLI (TWA)</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(bubblewrapCommand, 'bw')}
                    className="flex items-center gap-1 text-rose-600 hover:text-rose-700 cursor-pointer"
                  >
                    {copiedCode === 'bw' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === 'bw' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-950 text-emerald-400 font-mono-code text-[11px] overflow-x-auto">
                  {bubblewrapCommand}
                </pre>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono-code text-stone-500">
                  <span>Option 2: Capacitor Android Shell</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(capacitorCommand, 'cap')}
                    className="flex items-center gap-1 text-rose-600 hover:text-rose-700 cursor-pointer"
                  >
                    {copiedCode === 'cap' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode === 'cap' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-slate-950 text-emerald-400 font-mono-code text-[11px] overflow-x-auto">
                  {capacitorCommand}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-[11px] font-mono-code text-stone-500">
            2027 Life OS · Sovereign Offline Applet
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-mono-code font-bold transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
