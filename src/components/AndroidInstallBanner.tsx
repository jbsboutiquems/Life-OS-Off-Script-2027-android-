import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, X, Sparkles, CheckCircle2 } from 'lucide-react';

export const AndroidInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isAndroid, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('offscript_pwa_banner_dismissed');
    if (isDismissed) {
      setDismissed(true);
    }
  }, []);

  // Suppress banner if already installed, dismissed by user, or not installable on current platform
  if (isInstalled || dismissed || !isInstallable) {
    return null;
  }

  const handleInstall = async () => {
    setIsInstalling(true);
    try {
      await install();
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('offscript_pwa_banner_dismissed', 'true');
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white px-4 py-3 border-b border-rose-500/30 shadow-md relative z-40 print:hidden animate-fade-in">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 p-0.5 shadow-md flex-shrink-0 flex items-center justify-center">
            <img src="/pwa-192x192.png" alt="Life OS" className="w-full h-full rounded-[10px] object-cover" onError={(e) => {
              // fallback if not yet loaded
              (e.target as HTMLElement).style.display = 'none';
            }} />
            <Smartphone className="w-5 h-5 text-white" style={{ display: 'none' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xs sm:text-sm tracking-tight truncate">
                {isAndroid ? 'Life OS: Off*Script for Android' : 'Life OS: Off*Script App'}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono-code font-bold bg-rose-500/30 text-rose-300 border border-rose-500/40 uppercase">
                {isAndroid ? 'Android PWA' : 'Installable'}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 truncate">
              Install to home screen for full-screen standalone mode and instant offline logging.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleInstall}
            disabled={isInstalling}
            className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold font-mono-code transition-all shadow-sm active:scale-95 flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isInstalling ? 'Installing...' : (isAndroid ? 'Add to Android' : 'Install App')}</span>
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            title="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
