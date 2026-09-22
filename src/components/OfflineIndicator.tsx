import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-slate-900 text-rose-300 border border-rose-500/40 px-3.5 py-2 text-xs font-mono-code font-semibold shadow-2xl animate-bounce print:hidden">
      <WifiOff className="w-4 h-4 text-rose-400 animate-pulse" />
      <span>Offline Mode — Cached reflections active.</span>
    </div>
  );
};
