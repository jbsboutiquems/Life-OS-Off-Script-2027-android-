import React, { useState, useEffect, useRef } from 'react';
import {
  DailyEntry,
  UserProfile,
  ChaosHoliday,
  RefinedPrioritiesResult,
  Goal,
  GoalDailyContribution,
  CompanionCheckInResult
} from '../types';
import { getHolidayForDate, ExtendedChaosHoliday } from '../data/holidays';
import {
  Sun,
  Compass,
  Moon,
  Sparkles,
  CheckCircle2,
  Circle,
  Flame,
  AlertCircle,
  Save,
  ArrowLeft,
  ArrowRight,
  Wand2,
  Mic,
  MicOff,
  Radio,
  Volume2,
  Printer,
  Share2,
  Upload,
  FileAudio,
  Loader2,
  BookOpen,
  RefreshCw,
  CheckSquare,
  Square,
  MessageSquare,
  Clock,
  Send,
  Zap,
  Target,
  Bot,
  User as UserIcon,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MorningMantraGenerator } from './MorningMantraGenerator';
import { HolidayAlmanacModal } from './HolidayAlmanacModal';
import { api } from '../services/api';

interface DailyOSViewProps {
  entry: DailyEntry;
  onSaveEntry: (entry: Partial<DailyEntry>) => void;
  onRunDiagnostic: () => void;
  isDiagnosing: boolean;
  user: UserProfile;
  currentDate: string;
  onDateChange: (date: string) => void;
  onOpenStickers: () => void;
  onOpenShare?: (context?: 'daily' | 'identity' | 'mantra' | 'antigoals' | 'diagnostic') => void;
  goals?: Goal[];
  onNavigateToGoals?: () => void;
  allEntries?: DailyEntry[];
  currentTheme?: 'cream' | 'midnight';
  onToggleTheme?: () => void;
}

export const DailyOSView: React.FC<DailyOSViewProps> = ({
  entry,
  onSaveEntry,
  onRunDiagnostic,
  isDiagnosing,
  user,
  currentDate,
  onDateChange,
  onOpenStickers,
  onOpenShare,
  goals = [],
  onNavigateToGoals,
  allEntries = [],
  currentTheme = 'cream',
  onToggleTheme
}) => {
  const [morningIntention, setMorningIntention] = useState(entry.morning_intention || '');
  const [todayIAm, setTodayIAm] = useState(entry.today_i_am || '');
  const [anchorAnswer, setAnchorAnswer] = useState(entry.anchor_question_answer || '');
  const [priority0, setPriority0] = useState(entry.priorities?.[0] || '');
  const [priority1, setPriority1] = useState(entry.priorities?.[1] || '');
  const [priority2, setPriority2] = useState(entry.priorities?.[2] || '');
  const [middayCheckin, setMiddayCheckin] = useState(entry.midday_checkin || '');
  const [microDareCompleted, setMicroDareCompleted] = useState(entry.micro_dare_completed || false);
  const [microDareNotes, setMicroDareNotes] = useState(entry.micro_dare_notes || '');
  const [eveningNotes, setEveningNotes] = useState(entry.evening_notes || '');
  const [chaosScore, setChaosScore] = useState(entry.chaos_score || 5);
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  // Big 6 Goals Daily Contributions State
  const [goalContributions, setGoalContributions] = useState<Record<string, { completed: boolean; note: string }>>(() => {
    const map: Record<string, { completed: boolean; note: string }> = {};
    if (entry.goal_progress && Array.isArray(entry.goal_progress)) {
      entry.goal_progress.forEach(gp => {
        map[gp.goal_id] = { completed: Boolean(gp.completed), note: gp.note || '' };
      });
    }
    return map;
  });

  const fallbackGoalsList: Goal[] = [
    {
      id: "goal_01",
      title: "Write the Unfiltered Essay Collection",
      quarter: "Q1" as const,
      why_statement: "Because staying inside polite sentences is suffocating my brain.",
      success_metric: "5 essays bound",
      first_step: "Draft 500 words",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "goal_02",
      title: "Establish 'No After-Hours Performance' Boundary",
      quarter: "Q1" as const,
      why_statement: "Nervous system cannot heal if evenings are overtime.",
      success_metric: "Phone away at 8 PM for 30 days",
      first_step: "Buy analog clock",
      is_completed: false,
      created_at: new Date().toISOString()
    },
    {
      id: "goal_03",
      title: "Solo 48-Hour Off-Grid Road Trip",
      quarter: "Q2" as const,
      why_statement: "To remember who I am when nobody is asking me for anything.",
      success_metric: "Book cabin without laptop",
      first_step: "Mark calendar dates",
      is_completed: false,
      created_at: new Date().toISOString()
    }
  ];

  const activeGoalsList = goals && goals.length > 0 ? goals : fallbackGoalsList;

  // Streak & Big 6 Completed Calculations
  const completedGoalsCount = activeGoalsList.filter(g => goalContributions[g.id]?.completed).length;
  const isBig6Completed = activeGoalsList.length > 0 && completedGoalsCount === activeGoalsList.length;

  // Compute prior consecutive days streak for Big 6 task completion
  const computePriorStreak = (targetDate: string, entriesList: DailyEntry[]): number => {
    let count = 0;
    const curr = new Date(targetDate + "T00:00:00");
    if (isNaN(curr.getTime())) return 0;

    for (let i = 0; i < 365; i++) {
      curr.setDate(curr.getDate() - 1);
      const dateStr = curr.toISOString().split("T")[0];
      const prevEntry = entriesList.find(e => e.entry_date === dateStr);
      if (!prevEntry) break;

      const wasCompleted = Boolean(
        prevEntry.big6_completed ||
        (prevEntry.habit_streak && prevEntry.habit_streak > 0) ||
        (prevEntry.goal_progress &&
          prevEntry.goal_progress.length > 0 &&
          prevEntry.goal_progress.every(gp => gp.completed))
      );

      if (wasCompleted) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  const priorStreak = computePriorStreak(currentDate, allEntries);
  const habitStreak = isBig6Completed ? priorStreak + 1 : 0;

  // Calculate Inactivity Duration (> 12 hours logic)
  const calculateInactivityHours = () => {
    if (!entry.updated_at) return 14;
    const lastDate = new Date(entry.updated_at);
    if (isNaN(lastDate.getTime())) return 14;
    const diffHours = (Date.now() - lastDate.getTime()) / (1000 * 60 * 60);
    return Math.max(0, diffHours);
  };

  const hoursInactive = calculateInactivityHours();
  const isOver12Hours = hoursInactive >= 12;

  // Companion Persona AI State
  const [companionActive, setCompanionActive] = useState(false);
  const [companionResult, setCompanionResult] = useState<CompanionCheckInResult | null>(null);
  const [isCompanionLoading, setIsCompanionLoading] = useState(false);
  const [companionDialogue, setCompanionDialogue] = useState<Array<{ role: 'mei' | 'user'; text: string }>>([]);
  const [companionInputText, setCompanionInputText] = useState('');

  // AI Priority Reality Check State
  const [isRefiningPriorities, setIsRefiningPriorities] = useState(false);
  const [priorityRefinement, setPriorityRefinement] = useState<RefinedPrioritiesResult | null>(null);

  // Gemini Audio Transcription & Voice Memo State
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [isTranscribingAudio, setIsTranscribingAudio] = useState(false);
  const [geminiAudioError, setGeminiAudioError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Web Speech API Voice-to-Text State
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const isSpeechSupported = typeof window !== 'undefined' &&
    Boolean((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  // Cleanup speech recognition on unmount or date shift
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  useEffect(() => {
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsListening(false);
      setInterimTranscript('');
    }
  }, [currentDate]);

  const toggleVoiceToText = () => {
    if (!isSpeechSupported) {
      setSpeechError('Web Speech API is not supported in this browser. Please try Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.warn('Error stopping speech recognition:', e);
        }
      }
      setIsListening(false);
      setInterimTranscript('');
      return;
    }

    setSpeechError(null);
    setInterimTranscript('');

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = navigator.language || 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let finalChunk = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            finalChunk += item[0].transcript;
          } else {
            interim += item[0].transcript;
          }
        }

        if (finalChunk) {
          setEveningNotes((prev) => {
            const trimmed = prev.trim();
            const chunk = finalChunk.trim();
            if (!trimmed) return chunk;
            return `${trimmed} ${chunk}`;
          });
        }

        setInterimTranscript(interim);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event);
        if (event.error === 'not-allowed') {
          setSpeechError('Microphone permission denied. Please allow microphone access in your browser settings.');
        } else if (event.error === 'no-speech') {
          return;
        } else if (event.error === 'audio-capture') {
          setSpeechError('No microphone detected. Please check your audio hardware.');
        } else if (event.error === 'network') {
          setSpeechError('Speech recognition network communication error.');
        } else {
          setSpeechError(`Voice error: ${event.error}`);
        }
        setIsListening(false);
        setInterimTranscript('');
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setSpeechError(err.message || 'Could not initiate microphone.');
      setIsListening(false);
    }
  };

  // AI Priority Refinement Handlers
  const handleRefinePriorities = async () => {
    setIsRefiningPriorities(true);
    try {
      const rawList = [priority0, priority1, priority2].filter(Boolean);
      const result = await api.refinePriorities({
        priorities: rawList,
        morning_intention: morningIntention,
        today_i_am: todayIAm
      });
      setPriorityRefinement(result);
    } catch (e) {
      console.error('Failed to refine priorities:', e);
    } finally {
      setIsRefiningPriorities(false);
    }
  };

  const handleApplyRefinedPriorities = () => {
    if (priorityRefinement?.refined_priorities) {
      setPriority0(priorityRefinement.refined_priorities[0] || '');
      setPriority1(priorityRefinement.refined_priorities[1] || '');
      setPriority2(priorityRefinement.refined_priorities[2] || '');
      setPriorityRefinement(null);
    }
  };

  // Gemini Audio Transcription Handlers
  const startRecordingAudio = async () => {
    setGeminiAudioError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        stream.getTracks().forEach((track) => track.stop());
        await processAudioBlob(audioBlob, mimeType);
      };

      mediaRecorder.start();
      setIsRecordingAudio(true);
    } catch (err: any) {
      console.error('Error accessing microphone:', err);
      setGeminiAudioError(err.message || 'Microphone access denied.');
    }
  };

  const stopRecordingAudio = () => {
    if (mediaRecorderRef.current && isRecordingAudio) {
      mediaRecorderRef.current.stop();
      setIsRecordingAudio(false);
    }
  };

  const processAudioBlob = async (blob: Blob, mimeType: string) => {
    setIsTranscribingAudio(true);
    setGeminiAudioError(null);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const resultStr = reader.result as string;
        const base64data = resultStr.split(',')[1];
        try {
          const { transcript } = await api.transcribeAudio(base64data, mimeType);
          if (transcript) {
            setEveningNotes((prev) => {
              const trimmed = prev.trim();
              return trimmed ? `${trimmed}\n\n[Gemini Audio Note]: ${transcript}` : `[Gemini Audio Note]: ${transcript}`;
            });
          }
        } catch (err: any) {
          setGeminiAudioError(err.message || 'Gemini audio transcription failed.');
        } finally {
          setIsTranscribingAudio(false);
        }
      };
    } catch (err: any) {
      setGeminiAudioError(err.message || 'Failed to process audio.');
      setIsTranscribingAudio(false);
    }
  };

  const handleAudioFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processAudioBlob(file, file.type || 'audio/webm');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Sync state when entry changes (e.g. user toggled date)
  useEffect(() => {
    setMorningIntention(entry.morning_intention || '');
    setTodayIAm(entry.today_i_am || '');
    setAnchorAnswer(entry.anchor_question_answer || '');
    setPriority0(entry.priorities?.[0] || '');
    setPriority1(entry.priorities?.[1] || '');
    setPriority2(entry.priorities?.[2] || '');
    setMiddayCheckin(entry.midday_checkin || '');
    setMicroDareCompleted(entry.micro_dare_completed || false);
    setMicroDareNotes(entry.micro_dare_notes || '');
    setEveningNotes(entry.evening_notes || '');
    setChaosScore(entry.chaos_score || 5);

    const map: Record<string, { completed: boolean; note: string }> = {};
    if (entry.goal_progress && Array.isArray(entry.goal_progress)) {
      entry.goal_progress.forEach(gp => {
        map[gp.goal_id] = { completed: Boolean(gp.completed), note: gp.note || '' };
      });
    }
    setGoalContributions(map);
  }, [entry]);

  // Goal Progress Toggles
  const handleToggleGoalContribution = (goalId: string) => {
    setGoalContributions(prev => {
      const cur = prev[goalId] || { completed: false, note: '' };
      const nextCompleted = !cur.completed;
      const nextMap = {
        ...prev,
        [goalId]: {
          ...cur,
          completed: nextCompleted
        }
      };

      const nowCompletedCount = activeGoalsList.filter(g => nextMap[g.id]?.completed).length;
      const nowAllDone = activeGoalsList.length > 0 && nowCompletedCount === activeGoalsList.length;

      if (nowAllDone) {
        confetti({
          particleCount: 70,
          spread: 85,
          origin: { y: 0.6 }
        });
      } else if (nextCompleted) {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.7 }
        });
      }

      const goalProgressArray: GoalDailyContribution[] = Object.entries(nextMap).map(([id, item]) => ({
        goal_id: id,
        completed: item.completed,
        note: item.note
      }));
      const nextStreak = nowAllDone ? priorStreak + 1 : 0;
      onSaveEntry({
        goal_progress: goalProgressArray,
        big6_completed: nowAllDone,
        habit_streak: nextStreak
      });

      return nextMap;
    });
  };

  const handleToggleAllGoals = () => {
    const willCompleteAll = !isBig6Completed;
    const nextMap: Record<string, { completed: boolean; note: string }> = {};
    activeGoalsList.forEach(g => {
      const cur = goalContributions[g.id] || { completed: false, note: '' };
      nextMap[g.id] = {
        ...cur,
        completed: willCompleteAll
      };
    });
    setGoalContributions(nextMap);

    if (willCompleteAll) {
      confetti({
        particleCount: 85,
        spread: 95,
        origin: { y: 0.55 }
      });
    }

    const goalProgressArray: GoalDailyContribution[] = Object.entries(nextMap).map(([id, item]) => ({
      goal_id: id,
      completed: item.completed,
      note: item.note
    }));
    const nextStreak = willCompleteAll ? priorStreak + 1 : 0;
    onSaveEntry({
      goal_progress: goalProgressArray,
      big6_completed: willCompleteAll,
      habit_streak: nextStreak
    });
  };

  const handleGoalNoteChange = (goalId: string, note: string) => {
    setGoalContributions(prev => {
      const cur = prev[goalId] || { completed: false, note: '' };
      return {
        ...prev,
        [goalId]: {
          ...cur,
          note
        }
      };
    });
  };

  // Companion Persona AI Trigger & Interaction
  const handleTriggerCompanion = async (forceType?: 'field_notes_followup' | 'inactivity_checkin') => {
    setCompanionActive(true);
    setIsCompanionLoading(true);
    try {
      const res = await api.getCompanionCheckIn({
        evening_notes: eveningNotes,
        hours_since_last_entry: isOver12Hours ? hoursInactive : 14,
        last_entry_date: currentDate,
        user_profile: user,
        force_type: forceType
      });
      setCompanionResult(res);
      setCompanionDialogue([
        {
          role: 'mei',
          text: `${res.message}\n\n👉 ${res.follow_up_question}`
        }
      ]);
    } catch (err) {
      console.error('Companion error:', err);
    } finally {
      setIsCompanionLoading(false);
    }
  };

  const handleReplyToCompanion = async (replyText: string) => {
    if (!replyText.trim()) return;
    const nextHistory = [...companionDialogue, { role: 'user' as const, text: replyText }];
    setCompanionDialogue(nextHistory);
    setCompanionInputText('');
    setIsCompanionLoading(true);

    try {
      const aiRes = await api.askMei({
        message: replyText,
        conversation_history: nextHistory.map(m => ({ role: m.role, content: m.text })),
        user_profile: user,
        daily_entry: { ...entry, evening_notes: eveningNotes }
      });
      setCompanionDialogue([...nextHistory, { role: 'mei' as const, text: aiRes.reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsCompanionLoading(false);
    }
  };

  const handleAppendToEveningNotes = (text: string) => {
    setEveningNotes(prev => {
      const clean = prev.trim();
      const addition = `\n\n[Mei Follow-Up Reflection]: ${text}`;
      return clean ? `${clean}${addition}` : addition.trim();
    });
  };

  const holiday: ExtendedChaosHoliday = getHolidayForDate(currentDate);
  const [almanacOpen, setAlmanacOpen] = useState(false);
  const [dareIndex, setDareIndex] = useState(0);

  useEffect(() => {
    setDareIndex(0);
  }, [currentDate]);

  const activeDare = holiday.adventures[dareIndex % holiday.adventures.length] || holiday.adventures[0] || '';

  const handleSave = () => {
    const goalProgressArray: GoalDailyContribution[] = Object.entries(goalContributions).map(([goal_id, item]) => ({
      goal_id,
      completed: item.completed,
      note: item.note
    }));

    onSaveEntry({
      morning_intention: morningIntention,
      today_i_am: todayIAm,
      anchor_question_answer: anchorAnswer,
      priorities: [priority0, priority1, priority2],
      midday_checkin: middayCheckin,
      micro_dare_completed: microDareCompleted,
      micro_dare_notes: microDareNotes,
      evening_notes: eveningNotes,
      chaos_score: chaosScore,
      holiday_title: holiday.title,
      holiday_adventure: activeDare,
      goal_progress: goalProgressArray,
      habit_streak: habitStreak,
      big6_completed: isBig6Completed
    });
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 2000);
  };

  const handleToggleMicroDare = () => {
    const nextVal = !microDareCompleted;
    setMicroDareCompleted(nextVal);
    if (nextVal) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const shiftDate = (days: number) => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + days);
    onDateChange(d.toISOString().split('T')[0]);
  };

  const wordCount = eveningNotes.trim().split(/\s+/).filter(Boolean).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 print:space-y-4">
      {/* Print-Only Document Header */}
      <div className="hidden print:block pb-3 mb-2 border-b-2 border-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-rose-700">
              LIFE OS · OFF*SCRIPT 2027 · DAILY LIVING FLIGHT LOG
            </span>
            <h1 className="text-2xl font-bold font-serif-display text-slate-900 mt-0.5">
              {new Date(currentDate + "T00:00:00").toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </h1>
            <p className="text-xs text-stone-600 font-mono-code">
              Pilot: {user.chaos_name} · Word of the Year: "{user.word_of_the_year}"
            </p>
          </div>
          <div className="text-right font-mono-code text-xs space-y-1">
            <div className="font-bold text-slate-900 px-2.5 py-0.5 bg-amber-100 border border-amber-300 rounded inline-block">
              SLOGAN: "{user.slogan || 'Boredom=Death'}"
            </div>
            <div className="text-[11px] text-stone-600">
              Chaos Rating: <strong className="text-rose-700">{chaosScore} / 10</strong> · Unofficial Holiday: {holiday.title}
              {isBig6Completed && habitStreak > 0 && (
                <span className="ml-2 font-bold text-amber-800">· Habit Streak: {habitStreak} Day(s) 🔥</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Date & Holiday Banner */}
      <div className="bg-[#faf7f0] border-2 border-stone-800 rounded-2xl p-5 shadow-sm relative overflow-hidden print:p-4 print:border">
        {/* Background watermark */}
        <div className="absolute -right-6 -bottom-8 select-none pointer-events-none opacity-5 font-display-punch text-8xl font-black print:hidden">
          OFF SCRIPT
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center flex-wrap gap-2">
              <span className="bg-rose-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                Daily Living Flight Log
              </span>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                SLOGAN: "{user.slogan || 'Boredom=Death'}"
              </span>
              <span className="text-xs text-stone-500 font-mono-code">
                Day {holiday.dayOfYear || 1} of 366 · Theme: {holiday.theme}
              </span>

              {/* Habit Streak Badge with Flame Icon and Counter on Daily OS Card */}
              {isBig6Completed && habitStreak > 0 ? (
                <div
                  id="daily-os-habit-streak-badge"
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-rose-500/20 border border-amber-500/60 text-amber-950 font-mono-code font-bold text-xs shadow-2xs animate-pulse"
                  title={`${habitStreak} consecutive day${habitStreak > 1 ? 's' : ''} Big 6 tasks completed!`}
                >
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-bounce" />
                  <span className="font-extrabold">{habitStreak}</span>
                  <span className="text-[10px] uppercase tracking-wider text-amber-900 font-bold">
                    {habitStreak === 1 ? 'Day Streak' : 'Days Streak'}
                  </span>
                </div>
              ) : priorStreak > 0 ? (
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 border border-stone-300 text-stone-600 font-mono-code text-[11px]"
                  title={`Prior streak: ${priorStreak} days. Complete today's Big 6 tasks to reach ${priorStreak + 1}!`}
                >
                  <Flame className="w-3.5 h-3.5 text-stone-400" />
                  <span>{priorStreak}d streak ({completedGoalsCount}/{activeGoalsList.length} Big 6 done)</span>
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-3 flex-wrap mt-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-slate-900">
                {new Date(currentDate + "T00:00:00").toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </h2>
              {isBig6Completed && habitStreak > 0 && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-950 font-mono-code text-xs font-bold shadow-2xs animate-in zoom-in-95">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>{habitStreak} {habitStreak === 1 ? 'Day' : 'Days'} Streak 🔥</span>
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                ✦ Unofficial Holiday: {holiday.title}
              </span>
              <span className="text-xs text-stone-600 hidden md:inline">"{holiday.tagline}"</span>
            </div>
          </div>

          {/* Quick Date Stepper & Save & Print */}
          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
            {isBig6Completed && habitStreak > 0 && (
              <div
                id="daily-os-streak-counter-pill"
                className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300/90 text-amber-950 font-mono-code shadow-2xs"
              >
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                <div className="text-left text-xs leading-none">
                  <span className="font-extrabold text-amber-950 text-sm">{habitStreak}</span>
                  <span className="text-[10px] text-amber-700 block font-bold uppercase tracking-wider">
                    {habitStreak === 1 ? 'Day Streak' : 'Days Streak'}
                  </span>
                </div>
              </div>
            )}
            <button
              onClick={() => shiftDate(-1)}
              className="p-2 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg text-stone-700 transition-colors print:hidden cursor-pointer"
              title="Previous Day"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => shiftDate(1)}
              className="p-2 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg text-stone-700 transition-colors print:hidden cursor-pointer"
              title="Next Day"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="open-almanac-btn"
              onClick={() => setAlmanacOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-black text-white text-xs font-bold font-mono-code rounded-lg shadow-xs transition-colors print:hidden cursor-pointer"
              title="Browse all 366 unique unofficial holidays, search themes, or jump to any day"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>366 Almanac</span>
            </button>
            <button
              type="button"
              id="print-daily-os-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 text-xs font-bold font-mono-code rounded-lg shadow-xs transition-colors print:hidden cursor-pointer"
              title="Print Daily Flight Log & Diagnostic Insights to structured PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print / PDF</span>
            </button>
            {onOpenShare && (
              <button
                type="button"
                id="share-daily-os-btn"
                onClick={() => onOpenShare('daily')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-rose-50 border border-rose-300 text-rose-700 text-xs font-bold font-mono-code rounded-lg shadow-xs transition-colors print:hidden"
                title="Share Today's Flight Log & Chaos Rating to Social Media"
              >
                <Share2 className="w-3.5 h-3.5 text-rose-600" />
                <span>Share Spread</span>
              </button>
            )}
            {onToggleTheme && (
              <button
                type="button"
                id="daily-os-theme-toggle-btn"
                onClick={onToggleTheme}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 border rounded-lg text-xs font-bold font-mono-code shadow-xs transition-all print:hidden cursor-pointer ${
                  currentTheme === 'midnight'
                    ? 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border-amber-400/60 ring-1 ring-amber-400/40'
                    : 'bg-white hover:bg-stone-100 text-stone-800 border-stone-300'
                }`}
                title={
                  currentTheme === 'midnight'
                    ? "Active: Midnight Focus (High-contrast dark mode). Click to switch to Cream Canvas."
                    : "Active: Cream Canvas (Default warm paper mode). Click to switch to Midnight Focus for late-night journaling."
                }
              >
                {currentTheme === 'midnight' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>Midnight Focus</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-600" />
                    <span>Cream Canvas</span>
                  </>
                )}
              </button>
            )}
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-lg shadow-xs transition-colors print:hidden"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{isSavedNotice ? 'Saved!' : 'Save Day'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 12-Hour Radio Silence Check-In Alert Banner from Companion Mei */}
      {isOver12Hours && (
        <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-600 p-0.5 rounded-2xl shadow-sm print:hidden">
          <div className="bg-white rounded-[14px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-rose-600 text-white text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
                    RADIO SILENCE DETECTED ({Math.round(hoursInactive)}H)
                  </span>
                  <span className="text-xs font-mono-code font-bold text-slate-800">Companion Persona Alert</span>
                </div>
                <p className="text-xs text-stone-700 mt-0.5">
                  Over 12 hours since your last flight transmission. Did you slip into domestic autopilot, or are you actually off-grid living in 3D?
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
              <button
                type="button"
                onClick={() => handleTriggerCompanion('inactivity_checkin')}
                disabled={isCompanionLoading}
                className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold font-mono-code rounded-xl shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-rose-400" />
                <span>{isCompanionLoading ? 'Connecting...' : 'Mei Pulse Check'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3-PART FLIGHT SYSTEM: LAUNCH, ORBIT, LANDING */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 1. LAUNCH (MORNING INTENTION & STANCE) */}
        <div className="bg-white rounded-2xl border border-stone-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-display-punch tracking-tight uppercase">
                    01 · The Launch
                  </h3>
                  <p className="text-[11px] text-stone-500 font-mono-code">Morning Stance & Priorities</p>
                </div>
              </div>
              <span className="text-[10px] font-mono-code bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold border border-amber-200">
                A.M.
              </span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Morning Mantra Generator (Edgy, Non-toxic Affirmation Engine) */}
              <MorningMantraGenerator
                onAdoptAsIntention={(text) => setMorningIntention(text)}
                onShare={() => onOpenShare?.('mantra')}
                wordOfTheYear={user.word_of_the_year}
              />

              {/* Morning Intention */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-stone-700 font-bold">
                    Morning Intention <span className="font-normal text-stone-500 font-mono-code">(one sentence energy)</span>:
                  </label>
                  {holiday.suggestedIntention && (
                    <button
                      type="button"
                      onClick={() => setMorningIntention(holiday.suggestedIntention!)}
                      className="text-[10px] font-mono-code font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2 py-0.5 rounded cursor-pointer transition-colors"
                      title="Adopt today's unique holiday intention"
                    >
                      ✦ Use Holiday Intention
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={morningIntention}
                  onChange={(e) => setMorningIntention(e.target.value)}
                  placeholder={holiday.suggestedIntention || "e.g. Today I am choosing steadiness over optimization."}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-rose-500 bg-stone-50/50"
                />
              </div>

              {/* Today I Am */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-stone-700 font-bold">
                    Today I Am <span className="font-normal text-stone-500 font-mono-code">(stance/persona)</span>:
                  </label>
                  {holiday.recommendedStance && (
                    <button
                      type="button"
                      onClick={() => setTodayIAm(holiday.recommendedStance!)}
                      className="text-[10px] font-mono-code font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2 py-0.5 rounded cursor-pointer transition-colors"
                      title="Adopt today's unique persona stance"
                    >
                      ✦ Adopt Stance
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={todayIAm}
                  onChange={(e) => setTodayIAm(e.target.value)}
                  placeholder={holiday.recommendedStance ? `e.g. ${holiday.recommendedStance}` : "e.g. An unhurried architect of my own space."}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-rose-500 bg-stone-50/50"
                />
              </div>

              {/* Anchor Question from Holiday */}
              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3 rounded-r-lg">
                <span className="text-[10px] uppercase font-mono-code font-bold text-amber-900 block mb-0.5">
                  Daily Anchor Question:
                </span>
                <p className="text-xs font-semibold text-amber-950 mb-1.5 font-serif-display">
                  "{holiday.anchorQuestion}"
                </p>
                <div className="hidden print:block p-2 text-xs border border-amber-300 rounded bg-white font-mono-code text-amber-950 whitespace-pre-wrap min-h-[36px]">
                  {anchorAnswer || '—'}
                </div>
                <textarea
                  value={anchorAnswer}
                  onChange={(e) => setAnchorAnswer(e.target.value)}
                  placeholder="Sit with it. Let it follow you through the day..."
                  rows={2}
                  className="w-full p-2 text-xs border border-amber-300 rounded bg-white focus:outline-amber-600 print:hidden"
                />
              </div>

              {/* Strict Top 3 Priorities */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-stone-700 font-bold">
                    The Focus (Top 3 Priorities strictly):
                  </label>
                  <button
                    type="button"
                    onClick={handleRefinePriorities}
                    disabled={isRefiningPriorities || (!priority0 && !priority1 && !priority2)}
                    className="px-2 py-0.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded text-[10px] font-mono-code font-bold flex items-center space-x-1 disabled:opacity-40 transition-colors print:hidden"
                    title="Gemini analyzes your list to prune performative busywork and clarify the true anchors"
                  >
                    {isRefiningPriorities ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin text-rose-600" />
                        <span>Checking Reality...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-rose-600" />
                        <span>AI Reality Check</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Priority Refinement Result Card */}
                {priorityRefinement && (
                  <div className="mb-2 p-2.5 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 rounded-xl space-y-2 text-xs font-mono-code print:hidden">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-rose-800 uppercase tracking-wider">
                        ⚡ Anti-Optimization Reality Check
                      </span>
                      <button
                        type="button"
                        onClick={() => setPriorityRefinement(null)}
                        className="text-stone-400 hover:text-stone-700 text-xs font-bold"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-stone-800 text-[11px] font-sans">
                      {priorityRefinement.reality_check_note}
                    </p>

                    <div className="bg-white/80 border border-rose-100 rounded-lg p-2 text-[10px] text-amber-900 italic">
                      "{priorityRefinement.de_optimization_callout}"
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] text-stone-500 font-bold uppercase">Proposed 3 Anchors:</span>
                      {priorityRefinement.refined_priorities.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-slate-800">
                          <span className="text-rose-600 font-bold">{idx + 1}.</span>
                          <span className="font-sans font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={handleApplyRefinedPriorities}
                        className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[10px] font-bold shadow-2xs flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Adopt Refined Anchors</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono-code font-bold text-stone-400 w-4">1.</span>
                    <input
                      type="text"
                      value={priority0}
                      onChange={(e) => setPriority0(e.target.value)}
                      placeholder="Priority 1"
                      className="w-full px-2.5 py-1.5 text-xs border border-stone-200 rounded-md bg-stone-50/40 focus:outline-rose-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono-code font-bold text-stone-400 w-4">2.</span>
                    <input
                      type="text"
                      value={priority1}
                      onChange={(e) => setPriority1(e.target.value)}
                      placeholder="Priority 2"
                      className="w-full px-2.5 py-1.5 text-xs border border-stone-200 rounded-md bg-stone-50/40 focus:outline-rose-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono-code font-bold text-stone-400 w-4">3.</span>
                    <input
                      type="text"
                      value={priority2}
                      onChange={(e) => setPriority2(e.target.value)}
                      placeholder="Priority 3"
                      className="w-full px-2.5 py-1.5 text-xs border border-stone-200 rounded-md bg-stone-50/40 focus:outline-rose-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
            <span>Morning anchor locked</span>
            <span className="font-mono-code text-amber-700">08:00 AM READY</span>
          </div>
        </div>

        {/* 2. ORBIT (MIDDAY CHECK-IN & MICRO-DARE ADVENTURE) */}
        <div className="bg-white rounded-2xl border border-stone-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-display-punch tracking-tight uppercase">
                    02 · The Orbit
                  </h3>
                  <p className="text-[11px] text-stone-500 font-mono-code">Midday Check-In & Adventure</p>
                </div>
              </div>
              <span className="text-[10px] font-mono-code bg-sky-50 text-sky-800 px-2 py-0.5 rounded font-bold border border-sky-200">
                NOON
              </span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Midday Check-in prompt */}
              <div>
                <label className="block text-stone-700 font-bold mb-1">
                  Midday Check-in <span className="font-normal text-stone-500 font-mono-code">(How's it actually going, right now?)</span>:
                </label>
                <div className="hidden print:block p-2 text-xs border border-stone-300 rounded-lg bg-stone-50 font-mono-code text-slate-900 whitespace-pre-wrap min-h-[40px]">
                  {middayCheckin || '—'}
                </div>
                <textarea
                  value={middayCheckin}
                  onChange={(e) => setMiddayCheckin(e.target.value)}
                  placeholder="Not how should it be going. Not how you'll report it later. How is it actually going?"
                  rows={3}
                  className="w-full p-2.5 text-xs border border-stone-300 rounded-lg focus:outline-sky-500 bg-stone-50/50 print:hidden"
                />
              </div>

              {/* Unofficial Holiday Daily Adventure / Micro-Dare */}
              <div className="border border-sky-200 bg-sky-50/60 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-mono-code font-bold text-sky-800">
                      Daily Living Adventure
                    </span>
                    <span className="text-[9px] font-mono-code bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                      "Boredom=Death" Antidote
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-code text-stone-500">Law-Abiding · Free to $20 Max</span>
                    {holiday.adventures.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDareIndex((prev) => (prev + 1) % holiday.adventures.length);
                        }}
                        className="text-[10px] font-mono-code font-bold text-sky-800 bg-sky-100 hover:bg-sky-200 px-1.5 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1"
                        title="View alternate micro-dare for today"
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        <span>Alt Dare</span>
                      </button>
                    )}
                  </div>
                </div>

                <div 
                  onClick={handleToggleMicroDare}
                  className="flex items-start space-x-2.5 p-2 rounded-lg bg-white border border-sky-200 cursor-pointer hover:border-sky-400 transition-colors"
                >
                  <button type="button" className="mt-0.5 text-sky-600 focus:outline-none">
                    {microDareCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-stone-400" />
                    )}
                  </button>
                  <div className="text-xs">
                    <p className={`font-semibold ${microDareCompleted ? 'line-through text-stone-500' : 'text-slate-900'}`}>
                      {activeDare || "Take an unscripted detour and notice three unexpected things."}
                    </p>
                  </div>
                </div>

                {holiday.whoIsThisSoul[0] && (
                  <p className="text-[11px] text-sky-950 italic pt-1">
                    "{holiday.whoIsThisSoul[0]}"
                  </p>
                )}

                <div>
                  <input
                    type="text"
                    value={microDareNotes}
                    onChange={(e) => setMicroDareNotes(e.target.value)}
                    placeholder="Adventure debrief or artifact note..."
                    className="w-full px-2.5 py-1.5 text-xs border border-sky-200 rounded-md bg-white focus:outline-sky-500"
                  />
                </div>
              </div>

              {/* Quick Stickers Button */}
              <div className="pt-2 flex items-center justify-between print:hidden">
                <span className="text-stone-500 text-[11px]">Decorate your spread:</span>
                <button
                  onClick={onOpenStickers}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold font-mono-code underline"
                >
                  + Open Digital Stickers Sheet
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
            <span>Midday pause taken</span>
            <span className="font-mono-code text-sky-700">1:00 PM CHECK</span>
          </div>
        </div>

        {/* 3. LANDING (EVENING FIELD NOTES / RANT BOX -> MEI ENGINE FEEDER) */}
        <div className="bg-[#fffdf9] rounded-2xl border-2 border-rose-300 p-5 shadow-xs flex flex-col justify-between relative">
          <div className="absolute top-0 right-0 bg-rose-600 text-white font-mono-code text-[10px] tracking-widest px-3 py-1 font-bold rounded-bl-xl uppercase">
            MEI ENGINE INPUT
          </div>

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-display-punch tracking-tight uppercase">
                    03 · The Landing
                  </h3>
                  <p className="text-[11px] text-rose-700 font-mono-code">Evening Field Notes & Rant Box</p>
                </div>
              </div>

              {/* Late-Night Journaling Theme Toggle */}
              {onToggleTheme && (
                <button
                  type="button"
                  id="landing-night-theme-toggle-btn"
                  onClick={onToggleTheme}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all border print:hidden cursor-pointer ${
                    currentTheme === 'midnight'
                      ? 'bg-amber-400/20 text-amber-200 border-amber-400/60 ring-1 ring-amber-400/40 shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  }`}
                  title={
                    currentTheme === 'midnight'
                      ? "Midnight Focus is ACTIVE for late-night journaling. Click to switch to Cream Canvas."
                      : "Late-night journaling session? Click to activate Midnight Focus high-contrast dark theme."
                  }
                >
                  {currentTheme === 'midnight' ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-pulse" />
                      <span>Midnight Focus ON</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
                      <span>Midnight Mode</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <label className="text-stone-800 font-bold flex items-center gap-1.5">
                    <span>Field Notes / The Rant Box:</span>
                    <span className="text-[10px] font-mono-code font-normal text-stone-400">
                      ({wordCount} words)
                    </span>
                  </label>
                  <div className="flex flex-wrap items-center gap-1.5 print:hidden">
                    {/* Gemini Audio Memo Record Button */}
                    <button
                      type="button"
                      id="gemini-record-rant-btn"
                      onClick={isRecordingAudio ? stopRecordingAudio : startRecordingAudio}
                      disabled={isTranscribingAudio}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold flex items-center space-x-1.5 transition-all shadow-2xs border ${
                        isRecordingAudio
                          ? 'bg-rose-700 text-white border-rose-800 animate-pulse ring-2 ring-rose-400'
                          : 'bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-200'
                      }`}
                      title="Record your rant using Gemini 3.5 Transcribe audio model"
                    >
                      {isRecordingAudio ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                          <MicOff className="w-3 h-3 text-white" />
                          <span>Stop Gemini Memo</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-3 h-3 text-purple-700" />
                          <span>Gemini Voice Memo</span>
                        </>
                      )}
                    </button>

                    {/* Gemini Audio File Upload Button */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="audio/*"
                      onChange={handleAudioFileUpload}
                      className="hidden"
                      id="audio-file-upload-input"
                    />
                    <button
                      type="button"
                      id="upload-rant-audio-btn"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isTranscribingAudio || isRecordingAudio}
                      className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 rounded-lg text-[10px] font-mono-code font-bold flex items-center space-x-1 disabled:opacity-40"
                      title="Upload an audio rant file (.mp3, .wav, .m4a, .webm) for Gemini to transcribe"
                    >
                      <Upload className="w-3 h-3 text-stone-600" />
                      <span>Audio File</span>
                    </button>

                    {/* Browser Web Speech API */}
                    <button
                      type="button"
                      id="voice-to-text-rant-btn"
                      onClick={toggleVoiceToText}
                      disabled={isRecordingAudio || isTranscribingAudio}
                      className={`px-2 py-1 rounded-lg text-[10px] font-mono-code font-bold flex items-center space-x-1 transition-all border ${
                        isListening
                          ? 'bg-rose-600 text-white border-rose-700 animate-pulse'
                          : 'bg-white hover:bg-rose-50 text-rose-700 border-rose-200'
                      }`}
                      title={
                        isListening
                          ? 'Click to stop dictation'
                          : isSpeechSupported
                          ? 'Dictate live via browser speech'
                          : 'Web Speech not supported'
                      }
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-3 h-3 text-white" />
                          <span>Dictating...</span>
                        </>
                      ) : (
                        <>
                          <Radio className="w-3 h-3 text-rose-600" />
                          <span>Browser Dictate</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 italic mb-2">
                  Write, draw, spiral, rant, dream, map. Where the armor comes off. Feeds directly into the personality diagnostic engine.
                </p>

                {/* Gemini Audio Transcribing Notice */}
                {isTranscribingAudio && (
                  <div className="mb-2 p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-xs font-mono-code flex items-center space-x-2 text-purple-900 shadow-2xs print:hidden">
                    <Loader2 className="w-4 h-4 text-purple-600 animate-spin shrink-0" />
                    <span>Gemini 3.5 is analyzing and transcribing your voice memo...</span>
                  </div>
                )}

                {/* Gemini Audio Error Notice */}
                {geminiAudioError && (
                  <div className="mb-2 p-2 bg-rose-50 border border-rose-300 rounded-xl text-[11px] text-rose-900 flex items-center justify-between print:hidden">
                    <div className="flex items-center space-x-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{geminiAudioError}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGeminiAudioError(null)}
                      className="text-rose-500 hover:text-rose-800 font-bold px-1.5 py-0.5 text-xs font-mono-code"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Real-time Voice Transcription Banner */}
                {isListening && (
                  <div className="mb-2 p-2.5 bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-300 rounded-xl text-xs font-mono-code flex items-start space-x-2 shadow-2xs print:hidden">
                    <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-rose-700 tracking-wider">
                          Listening to your rant...
                        </span>
                        <span className="text-[9px] text-rose-500 font-bold animate-pulse">
                          ● REC LIVE
                        </span>
                      </div>
                      {interimTranscript ? (
                        <p className="text-stone-800 text-[11px] mt-0.5 italic break-words">
                          "{interimTranscript}..."
                        </p>
                      ) : (
                        <p className="text-stone-400 text-[11px] mt-0.5 italic">
                          Speak naturally. Words will stream directly into the rant box...
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Speech Error Notice */}
                {speechError && (
                  <div className="mb-2 p-2 bg-amber-50 border border-amber-300 rounded-xl text-[11px] text-amber-900 flex items-center justify-between print:hidden">
                    <div className="flex items-center space-x-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{speechError}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSpeechError(null)}
                      className="text-stone-500 hover:text-stone-800 font-bold px-1.5 py-0.5 text-xs font-mono-code"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Print-friendly expanded Evening Notes */}
                <div className="hidden print:block p-3 text-xs border border-rose-200 rounded-xl bg-white font-mono-code text-slate-800 leading-relaxed whitespace-pre-wrap min-h-[120px]">
                  {eveningNotes || '—'}
                </div>

                <textarea
                  value={eveningNotes}
                  onChange={(e) => setEveningNotes(e.target.value)}
                  placeholder="Dump everything here. Contradictions, frustrations, secret wins, things you resented doing, where you felt fake, what you're actually tired of..."
                  rows={6}
                  className="w-full p-3 text-xs border border-rose-200 rounded-xl focus:outline-rose-500 bg-white font-mono-code text-slate-800 leading-relaxed shadow-inner print:hidden"
                />
              </div>

              {/* ================= COMPANION PERSONA AI SECTION ================= */}
              <div className="pt-3 border-t border-rose-200/80 space-y-2.5 print:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <Bot className="w-3.5 h-3.5 text-rose-600" />
                    <span className="font-bold text-slate-900 text-xs font-serif-display">
                      Companion Persona AI (Mei)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Sovereign Mirror
                  </span>
                </div>

                <p className="text-[11px] text-stone-600 leading-snug">
                  Mei asks piercing follow-ups on your field notes or pings you if you've been off-grid for over 12 hours.
                </p>

                {/* Companion Action Buttons */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleTriggerCompanion('field_notes_followup')}
                    disabled={isCompanionLoading || wordCount < 3}
                    className="flex-1 min-w-[140px] px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 rounded-lg text-[10px] font-mono-code font-bold flex items-center justify-center space-x-1 disabled:opacity-40 transition-colors cursor-pointer"
                    title={wordCount < 3 ? "Type a few words in field notes first" : "Ask Mei for a penetrating follow-up question on today's evening notes"}
                  >
                    <MessageSquare className="w-3 h-3 text-rose-600" />
                    <span>Follow-Up on Notes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTriggerCompanion('inactivity_checkin')}
                    disabled={isCompanionLoading}
                    className="flex-1 min-w-[140px] px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg text-[10px] font-mono-code font-bold flex items-center justify-center space-x-1 disabled:opacity-40 transition-colors cursor-pointer"
                    title="Initiate Mei's witty check-in on 12+ hour inactivity"
                  >
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>12h Inactivity Ping</span>
                  </button>
                </div>

                {/* Companion Loading */}
                {isCompanionLoading && (
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center space-x-2 text-stone-600 text-xs font-mono-code">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-600" />
                    <span>Mei is reviewing your flight log...</span>
                  </div>
                )}

                {/* Companion Dialogue Box */}
                {companionDialogue.length > 0 && !isCompanionLoading && (
                  <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-2.5 shadow-2xs">
                    {companionDialogue.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex space-x-2 text-xs ${
                          msg.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {msg.role === 'mei' && (
                          <div className="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            M
                          </div>
                        )}
                        <div
                          className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-slate-900 text-white font-sans text-right'
                              : 'bg-rose-50 text-slate-900 border border-rose-100 font-sans'
                          }`}
                        >
                          <p className="whitespace-pre-line">{msg.text}</p>
                        </div>
                      </div>
                    ))}

                    {/* Suggested Quick Replies */}
                    {companionResult?.suggested_replies && companionResult.suggested_replies.length > 0 && (
                      <div className="space-y-1 pt-1 border-t border-stone-100">
                        <span className="text-[10px] font-mono-code font-bold text-stone-400 block uppercase">
                          Quick Replies:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {companionResult.suggested_replies.map((reply, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleReplyToCompanion(reply)}
                              className="text-[10px] font-mono-code bg-stone-100 hover:bg-stone-200 text-stone-800 px-2 py-1 rounded-md transition-colors text-left cursor-pointer"
                            >
                              "{reply}"
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Custom Reply Input */}
                    <div className="flex items-center space-x-1.5 pt-1">
                      <input
                        type="text"
                        value={companionInputText}
                        onChange={(e) => setCompanionInputText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleReplyToCompanion(companionInputText);
                          }
                        }}
                        placeholder="Reply to Mei..."
                        className="flex-1 px-2.5 py-1.5 text-xs border border-stone-300 rounded-lg focus:outline-rose-500 bg-stone-50"
                      />
                      <button
                        type="button"
                        onClick={() => handleReplyToCompanion(companionInputText)}
                        disabled={!companionInputText.trim()}
                        className="p-1.5 bg-slate-900 hover:bg-black text-white rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
                        title="Send reply"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Append reflection button */}
                    {companionDialogue.some(d => d.role === 'user') && (
                      <div className="pt-1 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            const lastUser = [...companionDialogue].reverse().find(d => d.role === 'user');
                            if (lastUser) {
                              handleAppendToEveningNotes(lastUser.text);
                            }
                          }}
                          className="text-[10px] font-mono-code font-bold text-rose-700 hover:text-rose-900 underline cursor-pointer"
                        >
                          + Append to Field Notes
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Chaos Level Scale Slider (1-10) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-stone-800 font-bold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>Daily Chaos Level (1–10):</span>
                  </label>
                  <span className="font-mono-code font-bold text-sm text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    {chaosScore} / 10
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={chaosScore}
                  onChange={(e) => setChaosScore(Number(e.target.value))}
                  className="w-full accent-rose-600 cursor-pointer print:hidden"
                />
                <div className="hidden print:block w-full bg-stone-100 rounded-full h-2.5 border border-stone-300 overflow-hidden mt-1">
                  <div
                    className="bg-rose-600 h-full rounded-full"
                    style={{ width: `${chaosScore * 10}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-stone-400 font-mono-code mt-0.5 print:hidden">
                  <span>1: Running on fumes</span>
                  <span>5: Balanced chaos</span>
                  <span>10: Truly unhinged</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trigger Mei Diagnostic Button */}
          <div className="mt-5 pt-3 border-t border-rose-200 print:hidden">
            <button
              onClick={() => {
                handleSave();
                onRunDiagnostic();
              }}
              disabled={isDiagnosing || wordCount < 3}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isDiagnosing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Extracting Big 5 & Contradictions...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Analyze Relationship With Self (Mei Engine)</span>
                </>
              )}
            </button>
            {wordCount < 3 && (
              <p className="text-[10px] text-stone-400 text-center mt-1">
                Type a few thoughts in the Rant Box to activate the honest mirror.
              </p>
            )}
          </div>
        </div>

      </div>

      {/* ================= BIG 6 GOALS — TODAY'S FLIGHT CONTRIBUTION ================= */}
      <div className="bg-white border-2 border-stone-800 rounded-3xl p-6 shadow-sm print:p-4 print:border space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 text-white flex items-center justify-center font-bold shadow-2xs">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono-code font-bold uppercase px-2 py-0.5 rounded">
                  ANNUAL VECTORS
                </span>
                <span className="text-xs font-mono-code text-stone-500 font-bold">
                  DAILY PROGRESS LOG
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif-display text-slate-900 mt-0.5">
                Big 6 Goals — Today's Flight Contribution
              </h3>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            {/* Today's Goals Touched Progress Badge */}
            {(() => {
              const touchedCount = activeGoalsList.filter(g => goalContributions[g.id]?.completed || Boolean(goalContributions[g.id]?.note?.trim())).length;
              const percent = Math.round((touchedCount / activeGoalsList.length) * 100);

              return (
                <div className="flex items-center space-x-2 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-300">
                  <div className="w-20 bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-rose-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-slate-800">
                    {touchedCount}/{activeGoalsList.length} Touched
                  </span>
                </div>
              );
            })()}

            {/* Habit Streak Badge with Flame Icon and Counter */}
            {isBig6Completed && habitStreak > 0 ? (
              <div
                id="big6-habit-streak-pill"
                className="flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white px-3 py-1.5 rounded-xl shadow-2xs font-mono-code font-bold text-xs animate-in zoom-in-95"
                title={`${habitStreak} consecutive days completing all Big 6 goals!`}
              >
                <Flame className="w-4 h-4 text-amber-200 fill-amber-200 animate-bounce" />
                <span>{habitStreak} {habitStreak === 1 ? 'Day' : 'Days'} Streak</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-bold uppercase">
                  Active
                </span>
              </div>
            ) : priorStreak > 0 ? (
              <div
                className="flex items-center space-x-1.5 bg-amber-50 border border-amber-300 text-amber-950 px-2.5 py-1.5 rounded-xl font-mono-code text-xs"
                title={`Previous streak of ${priorStreak} days! Complete all today to reach ${priorStreak + 1}.`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold">{priorStreak}d Streak</span>
                <span className="text-[10px] text-amber-800 font-medium">({activeGoalsList.length - completedGoalsCount} left)</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5 bg-stone-100 border border-stone-200 text-stone-600 px-2.5 py-1.5 rounded-xl font-mono-code text-xs">
                <Flame className="w-3.5 h-3.5 text-stone-400" />
                <span>0d Streak</span>
              </div>
            )}

            {/* Quick 1-Click Complete / Toggle All Button */}
            <button
              type="button"
              onClick={handleToggleAllGoals}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center space-x-1.5 shadow-2xs cursor-pointer border ${
                isBig6Completed
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white border-transparent'
              }`}
              title={isBig6Completed ? "Uncheck all Big 6 goals for today" : "Complete all Big 6 daily goals in 1-click"}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{isBig6Completed ? 'Uncheck All' : '✦ Complete All Big 6 Today'}</span>
            </button>

            {onNavigateToGoals && (
              <button
                type="button"
                onClick={onNavigateToGoals}
                className="text-xs font-mono-code font-bold text-rose-700 hover:text-rose-900 underline whitespace-nowrap print:hidden cursor-pointer"
              >
                Manage Goals OS →
              </button>
            )}
          </div>
        </div>

        {/* Habit Streak Announcement Banner */}
        {isBig6Completed && habitStreak > 0 && (
          <div className="p-3 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-400/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-950 shadow-2xs animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center space-x-2">
              <Flame className="w-4 h-4 text-amber-600 fill-amber-500 animate-pulse shrink-0" />
              <div>
                <span className="font-bold font-mono-code mr-1.5">Consecutive Habit Streak:</span>
                <span className="font-serif-display italic">
                  {habitStreak === 1
                    ? "Day 1 locked in! You completed all daily Big 6 vectors. Tomorrow keeps the flame alive."
                    : `${habitStreak} consecutive days completing all daily Big 6 tasks! Sovereign momentum unlocked.`}
                </span>
              </div>
            </div>
            <span className="font-mono-code text-[11px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-lg shrink-0">
              🔥 {habitStreak}x Momentum
            </span>
          </div>
        )}

        <p className="text-xs text-stone-600">
          Check off goals you moved forward today and jot a quick micro-contribution note (e.g. drafted 300 words, set a boundary, 15-minute execution). Complete all Big 6 tasks daily to build consecutive flame streaks.
        </p>

        {/* Goals Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {activeGoalsList.map((goal, idx) => {
              const currentCont = goalContributions[goal.id] || { completed: false, note: '' };
              const isChecked = currentCont.completed;

              return (
                <div
                  key={goal.id}
                  className={`p-4 rounded-2xl border transition-all space-y-2.5 ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      {/* Checkbox for today's contribution */}
                      <button
                        type="button"
                        onClick={() => handleToggleGoalContribution(goal.id)}
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer border ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-700 text-white shadow-2xs scale-105'
                            : 'bg-stone-100 border-stone-300 hover:bg-stone-200 text-transparent'
                        }`}
                        title={isChecked ? "Mark goal not contributed today" : "Mark goal contributed today"}
                      >
                        <CheckSquare className="w-4 h-4" />
                      </button>

                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                            {goal.quarter || `G${idx + 1}`}
                          </span>
                          <span className={`text-xs font-bold font-serif-display ${
                            isChecked ? 'text-emerald-950 line-through decoration-emerald-500/70' : 'text-slate-900'
                          }`}>
                            {goal.title}
                          </span>
                        </div>
                        {goal.why_statement && (
                          <p className="text-[11px] text-stone-500 italic mt-0.5 line-clamp-1">
                            "{goal.why_statement}"
                          </p>
                        )}
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded ${
                      isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {isChecked ? '✓ Contributed' : '○ Unticked'}
                    </span>
                  </div>

                  {/* Quick input field for today's micro-contribution */}
                  <div className="pt-1">
                    <input
                      type="text"
                      value={currentCont.note || ''}
                      onChange={(e) => handleGoalNoteChange(goal.id, e.target.value)}
                      placeholder="Today's micro-step contribution (e.g. 400 words written, blocked calendar)..."
                      className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-xl bg-stone-50/70 focus:bg-white focus:outline-rose-500 font-sans"
                    />
                  </div>
                </div>
              );
            })}
        </div>

        {/* Bottom Save Bar for Goal Progress */}
        <div className="pt-2 flex items-center justify-between text-xs text-stone-500 print:hidden">
          <span className="font-mono-code text-[11px]">
            Goal progress automatically bundles into today's flight log save.
          </span>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-1.5 bg-slate-900 hover:bg-black text-white font-mono-code font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Goal Progress</span>
          </button>
        </div>
      </div>
      <div className="bg-[#f0ece1] border border-stone-300 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-700 print:hidden">
        <div className="flex items-center space-x-2">
          <span className="font-mono-code font-bold text-rose-700 uppercase tracking-widest text-[11px]">
            THE MANIFESTO:
          </span>
          <span className="italic font-serif-display text-slate-800">
            "Build it for who you actually are. Not who you planned to be in January. Not who the algorithm wants you to be."
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold font-mono-code text-stone-700 hover:text-stone-900 underline whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>
          <button
            onClick={handleSave}
            className="text-xs font-bold text-stone-900 underline hover:text-rose-600 whitespace-nowrap"
          >
            Save All Sections
          </button>
        </div>
      </div>

      {/* 366-Day Holiday Almanac Modal */}
      <HolidayAlmanacModal
        isOpen={almanacOpen}
        onClose={() => setAlmanacOpen(false)}
        currentDate={currentDate}
        onSelectDate={(newDate) => {
          onDateChange(newDate);
          setAlmanacOpen(false);
        }}
      />
    </div>
  );
};
