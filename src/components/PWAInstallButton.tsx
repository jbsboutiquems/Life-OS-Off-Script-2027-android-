import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check, HelpCircle } from 'lucide-react';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'compact'
}) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

  // If already running as standalone PWA, suppress button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setInstalling(true);
      try {
        await install();
      } finally {
        setInstalling(false);
      }
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        type="button"
        id="pwa-install-btn"
        onClick={handleInstallClick}
        disabled={installing}
        className={`flex items-center gap-1.5 rounded-xl font-mono-code font-bold transition-all shadow-xs active:scale-95 ${
          variant === 'full'
            ? 'px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm'
            : 'px-2.5 py-1.5 bg-stone-900 hover:bg-black text-white text-[11px] border border-stone-700'
        } ${className}`}
        title={isAndroid ? 'Install on Android Home Screen' : 'Install Life OS App'}
      >
        <Smartphone className="w-3.5 h-3.5 text-rose-400" />
        <span>{isInstallable ? (isAndroid ? 'Install on Android' : 'Install App') : 'Get App'}</span>
      </button>

      {/* Manual Installation Guide Modal (for iOS or browsers without direct prompt) */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in print:hidden">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border-2 border-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center text-white">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-bold font-serif-display text-slate-900 text-base">
                  {isAndroid ? 'Install on Android' : isIOS ? 'Install on iPhone' : 'Install Life OS'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-stone-600 space-y-3 font-sans">
              {isAndroid ? (
                <>
                  <p className="font-medium text-slate-900">
                    To install directly on your Android device:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-1 text-stone-700">
                    <li>Tap the <strong>three dots menu (⋮)</strong> in Chrome / your browser bar.</li>
                    <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                    <li>Tap <strong>Install</strong> to add the icon to your app drawer and launcher.</li>
                  </ol>
                </>
              ) : isIOS ? (
                <>
                  <p className="font-medium text-slate-900">
                    To install on iPhone or iPad:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-1 text-stone-700">
                    <li>Tap the <strong>Share</strong> button (box with upward arrow) in Safari.</li>
                    <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                    <li>Tap <strong>Add</strong> in the top right corner.</li>
                  </ol>
                </>
              ) : (
                <>
                  <p className="font-medium text-slate-900">
                    To install on your desktop or laptop:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-1 text-stone-700">
                    <li>Look for the <strong>Install icon (⊕)</strong> in your browser's address bar.</li>
                    <li>Click <strong>Install</strong> to run Life OS in standalone windowed mode.</li>
                  </ol>
                </>
              )}

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-[11px] text-rose-950">
                <span className="font-bold block mb-0.5">Offline-Ready &amp; Full Screen:</span>
                Enjoy zero browser clutter, fast launches, and full diagnostic capabilities on mobile.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="w-full py-2.5 bg-stone-900 hover:bg-black text-white rounded-xl font-mono-code font-bold text-xs transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
