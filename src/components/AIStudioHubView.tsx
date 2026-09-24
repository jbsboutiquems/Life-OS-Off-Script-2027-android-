import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Music,
  Image as ImageIcon,
  Video,
  Mic,
  Volume2,
  VolumeX,
  Search,
  MapPin,
  MessageSquare,
  Play,
  Pause,
  Download,
  Upload,
  RefreshCw,
  Send,
  Trash2,
  CheckCircle,
  AlertCircle,
  Copy,
  Zap,
  Globe,
  Radio,
  FileAudio
} from 'lucide-react';
import { api } from '../services/api';
import { UserProfile, DailyEntry } from '../types';
import {
  saveMediaItemToFirestore,
  fetchMediaItemsFromFirestore,
  SavedMediaItem,
  saveChatMessageToFirestore,
  fetchChatMessagesFromFirestore,
  SavedChatMessage
} from '../lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';

interface AIStudioHubViewProps {
  user: UserProfile;
  dailyEntry: DailyEntry;
  onUpdateDailyEntry: (updates: Partial<DailyEntry>) => void;
  currentUser: FirebaseUser | null;
  onShowToast: (msg: string) => void;
}

type StudioToolTab = 'music' | 'image' | 'video' | 'live' | 'transcribe' | 'grounding' | 'chat';

export const AIStudioHubView: React.FC<AIStudioHubViewProps> = ({
  user,
  dailyEntry,
  onUpdateDailyEntry,
  currentUser,
  onShowToast
}) => {
  const [activeTool, setActiveTool] = useState<StudioToolTab>('chat');

  // ================= 1. MUSIC (Lyria 3) STATE =================
  const [musicPrompt, setMusicPrompt] = useState('Warm analog synth pad with distant rain and vinyl dust, calming lo-fi tempo for unhurried journaling.');
  const [musicModel, setMusicModel] = useState<'lyria-3-clip-preview' | 'lyria-3-pro-preview'>('lyria-3-clip-preview');
  const [musicImage, setMusicImage] = useState<string | null>(null);
  const [isGeneratingMusic, setIsGeneratingMusic] = useState(false);
  const [generatedAudioUrl, setGeneratedAudioUrl] = useState<string | null>(null);
  const [generatedMusicInfo, setGeneratedMusicInfo] = useState<string | null>(null);

  // ================= 2. IMAGE (gemini-3.1-flash-image-preview) STATE =================
  const [imageMode, setImageMode] = useState<'create' | 'edit'>('create');
  const [imagePrompt, setImagePrompt] = useState('Risograph print of a bold geometric lightning bolt surrounded by abstract retro botanical patterns, deep rose and amber tones, gritty paper grain.');
  const [imageAspectRatio, setImageAspectRatio] = useState<'1:1' | '16:9' | '9:16' | '4:3' | '3:4'>('1:1');
  const [editSourceImage, setEditSourceImage] = useState<string | null>(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);

  // ================= 3. VEO 3 VIDEO (veo-3.1-fast-generate-preview) STATE =================
  const [videoPrompt, setVideoPrompt] = useState('Cinematic aerial shot skimming over a misty pine forest into golden morning sunlight, slow motion 4k feel.');
  const [videoAspectRatio, setVideoAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [videoSourcePhoto, setVideoSourcePhoto] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [videoStatusText, setVideoStatusText] = useState<string>('');
  const [generatedVideoBlobUrl, setGeneratedVideoBlobUrl] = useState<string | null>(null);

  // ================= 4. LIVE API VOICE (gemini-3.8-live) STATE =================
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [isLiveSpeaking, setIsLiveSpeaking] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState<string[]>([]);
  const liveWsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const nextPlayTimeRef = useRef<number>(0);

  // ================= 5. AUDIO TRANSCRIBE (gemini-3.5-transcribe) STATE =================
  const [isRecordingTranscribe, setIsRecordingTranscribe] = useState(false);
  const [transcribeResult, setTranscribeResult] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // ================= 6. SEARCH & MAPS GROUNDING (gemini-3.5-flash) STATE =================
  const [groundingMode, setGroundingMode] = useState<'search' | 'maps'>('search');
  const [searchQuery, setSearchQuery] = useState('What are the cultural origins and psychology behind anti-productivity and slow living movements?');
  const [mapsQuery, setMapsQuery] = useState('Quiet independent coffee shop with natural light and bookstore sanctuary');
  const [mapsLocation, setMapsLocation] = useState('Downtown or Arts District');
  const [isGroundingLoading, setIsGroundingLoading] = useState(false);
  const [groundingText, setGroundingText] = useState('');
  const [groundingMetadata, setGroundingMetadata] = useState<any>(null);

  // ================= 7. CHAT (Gemini Multi-Turn) STATE =================
  const [chatModelType, setChatModelType] = useState<'complex' | 'general' | 'fast'>('general');
  const [chatRole, setChatRole] = useState<'Mei Sassy Mirror' | 'Chaos Alchemist' | 'Anti-Hustle Strategist' | 'Financial Realist'>('Mei Sassy Mirror');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; role: 'user' | 'model'; content: string; timestamp: string }>>([
    {
      id: 'init_1',
      role: 'model',
      content: `Welcome to the Operator Sanctuary. I am Mei. We operate under one rule here: "Boredom=Death". What performative obligation are you ready to burn today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isSendingChat, setIsSendingChat] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Load saved chat from Firestore if signed in
  useEffect(() => {
    if (currentUser) {
      fetchChatMessagesFromFirestore(currentUser.uid).then((msgs) => {
        if (msgs && msgs.length > 0) {
          setChatMessages(
            msgs.map((m) => ({
              id: m.id,
              role: m.role,
              content: m.content,
              timestamp: new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }))
          );
        }
      });
    }
  }, [currentUser]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Clean up Live API on unmount
  useEffect(() => {
    return () => {
      stopLiveSession();
    };
  }, []);

  // ================= HANDLERS =================

  // 1. Music Handlers
  const handleGenerateMusic = async () => {
    setIsGeneratingMusic(true);
    setGeneratedAudioUrl(null);
    setGeneratedMusicInfo(null);
    try {
      const res = await api.generateMusic({
        prompt: musicPrompt,
        model: musicModel,
        imageBase64: musicImage || undefined
      });
      if (res.audioUrl) {
        setGeneratedAudioUrl(res.audioUrl);
        setGeneratedMusicInfo(`Generated with ${res.modelUsed} (${musicModel === 'lyria-3-clip-preview' ? 'Clip ≤30s' : 'Full Track'})`);
        onShowToast('Music track generated successfully!');

        if (currentUser) {
          saveMediaItemToFirestore(currentUser.uid, {
            id: `music_${Date.now()}`,
            userId: currentUser.uid,
            type: 'music',
            prompt: musicPrompt,
            resultUrl: res.audioUrl,
            createdAt: new Date().toISOString()
          });
        }
      } else {
        setGeneratedMusicInfo(res.text || 'Composition ready.');
        onShowToast('Music composition structured.');
      }
    } catch (err: any) {
      onShowToast(`Music Error: ${err.message}`);
    } finally {
      setIsGeneratingMusic(false);
    }
  };

  // 2. Image Handlers
  const handleCreateOrEditImage = async () => {
    setIsProcessingImage(true);
    setResultImageUrl(null);
    try {
      if (imageMode === 'create') {
        const res = await api.generateImage({
          prompt: imagePrompt,
          aspectRatio: imageAspectRatio
        });
        setResultImageUrl(res.imageUrl);
        onShowToast('Image generated via gemini-3.1-flash-image-preview!');
        if (currentUser) {
          saveMediaItemToFirestore(currentUser.uid, {
            id: `img_${Date.now()}`,
            userId: currentUser.uid,
            type: 'image',
            prompt: imagePrompt,
            resultUrl: res.imageUrl,
            aspectRatio: imageAspectRatio,
            createdAt: new Date().toISOString()
          });
        }
      } else {
        if (!editSourceImage) {
          onShowToast('Please upload a source image to edit.');
          setIsProcessingImage(false);
          return;
        }
        const res = await api.editImage({
          imageBase64: editSourceImage,
          prompt: imagePrompt
        });
        setResultImageUrl(res.imageUrl);
        onShowToast('Image edited via gemini-3.1-flash-image-preview!');
      }
    } catch (err: any) {
      onShowToast(`Image Error: ${err.message}`);
    } finally {
      setIsProcessingImage(false);
    }
  };

  // 3. Veo Video Handlers
  const handleGenerateVideo = async () => {
    setIsGeneratingVideo(true);
    setGeneratedVideoBlobUrl(null);
    setVideoStatusText('Initiating Veo 3 generation pipeline (veo-3.1-fast-generate-preview)...');
    try {
      const res = await api.generateVideo({
        prompt: videoPrompt,
        imageBase64: videoSourcePhoto || undefined,
        aspectRatio: videoAspectRatio
      });

      const opName = res.operationName;
      setVideoStatusText('Generating video frames... (this typically takes 30-90s, please keep this tab open)');

      // Poll until done
      let completed = false;
      let attempts = 0;
      while (!completed && attempts < 40) {
        attempts++;
        await new Promise((r) => setTimeout(r, 4000));
        setVideoStatusText(`Rendering cinematic motion... Step ${attempts}/40`);
        const status = await api.checkVideoStatus(opName);
        if (status.done) {
          completed = true;
          setVideoStatusText('Downloading generated video...');
          const blob = await api.downloadVideoBlob(opName);
          const blobUrl = URL.createObjectURL(blob);
          setGeneratedVideoBlobUrl(blobUrl);
          onShowToast('Veo video generation complete!');
          break;
        }
      }

      if (!completed) {
        setVideoStatusText('Video is taking longer than usual to render. Please retry shortly.');
      }
    } catch (err: any) {
      setVideoStatusText(`Error: ${err.message}`);
      onShowToast(`Video Error: ${err.message}`);
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  // 4. Live API Voice Handlers
  const startLiveSession = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${wsProtocol}//${window.location.host}/live`;
      const ws = new WebSocket(wsUrl);
      liveWsRef.current = ws;

      const inputAudioCtx = new AudioContext({ sampleRate: 16000 });
      const outputAudioCtx = new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = outputAudioCtx;
      nextPlayTimeRef.current = outputAudioCtx.currentTime;

      ws.onopen = () => {
        setIsLiveConnected(true);
        onShowToast('Connected to Gemini Live voice channel!');

        const source = inputAudioCtx.createMediaStreamSource(stream);
        const processor = inputAudioCtx.createScriptProcessor(4096, 1, 1);
        source.connect(processor);
        processor.connect(inputAudioCtx.destination);

        processor.onaudioprocess = (e) => {
          if (ws.readyState === WebSocket.OPEN) {
            const channelData = e.inputBuffer.getChannelData(0);
            // Convert Float32Array to 16-bit PCM
            const pcm16 = new Int16Array(channelData.length);
            for (let i = 0; i < channelData.length; i++) {
              const s = Math.max(-1, Math.min(1, channelData[i]));
              pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
            }
            const base64 = btoa(String.fromCharCode(...new Uint8Array(pcm16.buffer)));
            ws.send(JSON.stringify({ audio: base64 }));
          }
        };
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.text) {
            setLiveTranscript((prev) => [...prev, `Mei: ${msg.text}`]);
          }
          if (msg.audio) {
            setIsLiveSpeaking(true);
            playAudioPcmChunk(outputAudioCtx, msg.audio);
          }
          if (msg.interrupted) {
            nextPlayTimeRef.current = outputAudioCtx.currentTime;
            setIsLiveSpeaking(false);
          }
        } catch (e) {
          console.error('Live WS message error:', e);
        }
      };

      ws.onerror = (err) => {
        console.error('Live WS error:', err);
        onShowToast('Live voice connection error');
      };

      ws.onclose = () => {
        setIsLiveConnected(false);
        setIsLiveSpeaking(false);
      };
    } catch (err: any) {
      onShowToast(`Microphone Access Error: ${err.message}`);
    }
  };

  const playAudioPcmChunk = (ctx: AudioContext, base64Pcm: string) => {
    try {
      const binaryString = atob(base64Pcm);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const int16 = new Int16Array(bytes.buffer);
      const float32 = new Float32Array(int16.length);
      for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768.0;
      }

      const audioBuffer = ctx.createBuffer(1, float32.length, 24000);
      audioBuffer.getChannelData(0).set(float32);

      const sourceNode = ctx.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.connect(ctx.destination);

      const startTime = Math.max(ctx.currentTime, nextPlayTimeRef.current);
      sourceNode.start(startTime);
      nextPlayTimeRef.current = startTime + audioBuffer.duration;

      sourceNode.onended = () => {
        if (ctx.currentTime >= nextPlayTimeRef.current) {
          setIsLiveSpeaking(false);
        }
      };
    } catch (e) {
      console.error('Audio play chunk error:', e);
    }
  };

  const stopLiveSession = () => {
    if (liveWsRef.current) {
      liveWsRef.current.close();
      liveWsRef.current = null;
    }
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach((t) => t.stop());
      micStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setIsLiveConnected(false);
    setIsLiveSpeaking(false);
  };

  // 5. Audio Transcribe Handlers
  const handleStartTranscribeRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setIsTranscribing(true);
        try {
          const reader = new FileReader();
          reader.onloadend = async () => {
            const base64Data = (reader.result as string).split(',')[1];
            const res = await api.transcribeAudio({
              audioBase64: base64Data,
              mimeType: 'audio/webm'
            });
            setTranscribeResult(res.transcription);
            onShowToast('Audio transcribed verbatim with gemini-3.5-transcribe!');
          };
          reader.readAsDataURL(audioBlob);
        } catch (err: any) {
          onShowToast(`Transcription error: ${err.message}`);
        } finally {
          setIsTranscribing(false);
        }
      };

      mediaRecorder.start();
      setIsRecordingTranscribe(true);
    } catch (err: any) {
      onShowToast(`Microphone permission error: ${err.message}`);
    }
  };

  const handleStopTranscribeRecord = () => {
    if (mediaRecorderRef.current && isRecordingTranscribe) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());
      setIsRecordingTranscribe(false);
    }
  };

  // 6. Grounding Handlers
  const handleExecuteGrounding = async () => {
    setIsGroundingLoading(true);
    setGroundingText('');
    setGroundingMetadata(null);
    try {
      if (groundingMode === 'search') {
        const res = await api.searchGrounding({
          query: searchQuery,
          context: `Word of Year: ${user.word_of_the_year}, Slogan: ${user.slogan}`
        });
        setGroundingText(res.text);
        setGroundingMetadata(res.groundingMetadata);
        onShowToast('Search grounding retrieved live sources!');
      } else {
        const res = await api.mapsGrounding({
          query: mapsQuery,
          location: mapsLocation
        });
        setGroundingText(res.text);
        setGroundingMetadata(res.groundingMetadata);
        onShowToast('Google Maps sanctuary coordinates retrieved!');
      }
    } catch (err: any) {
      onShowToast(`Grounding error: ${err.message}`);
    } finally {
      setIsGroundingLoading(false);
    }
  };

  // 7. Multi-Turn Chat Handlers
  const handleSendChat = async () => {
    if (!chatInput.trim() || isSendingChat) return;

    const userMsg = {
      id: `chat_${Date.now()}`,
      role: 'user' as const,
      content: chatInput.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...chatMessages, userMsg];
    setChatMessages(newHistory);
    setChatInput('');
    setIsSendingChat(true);

    try {
      const res = await api.sendChatMessage({
        messages: newHistory.map((m) => ({ role: m.role, content: m.content })),
        modelType: chatModelType,
        role: chatRole
      });

      const modelMsg = {
        id: `chat_${Date.now()}_resp`,
        role: 'model' as const,
        content: res.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages((prev) => [...prev, modelMsg]);

      if (currentUser) {
        saveChatMessageToFirestore(currentUser.uid, {
          id: userMsg.id,
          userId: currentUser.uid,
          role: 'user',
          modelUsed: res.modelUsed,
          content: userMsg.content,
          persona: chatRole,
          createdAt: new Date().toISOString()
        });
        saveChatMessageToFirestore(currentUser.uid, {
          id: modelMsg.id,
          userId: currentUser.uid,
          role: 'model',
          modelUsed: res.modelUsed,
          content: modelMsg.content,
          persona: chatRole,
          createdAt: new Date().toISOString()
        });
      }
    } catch (err: any) {
      onShowToast(`Chat error: ${err.message}`);
    } finally {
      setIsSendingChat(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Studio Header Banner */}
      <div className="bg-slate-900 border-2 border-stone-800 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rose-600/20 via-amber-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-code font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Multimodal AI Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display-punch tracking-tight text-white">
              Creative & Telemetry <span className="text-rose-500 italic font-serif-display font-normal">Command Center</span>
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl font-sans">
              Music (Lyria 3) · Live Voice (gemini-3.8-live) · Image Gen & Editing (gemini-3.1-flash-image) · Veo 3 Video · Google Search & Maps Grounding · Gemini Chatbot.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            {currentUser ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono-code">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Firestore Synced</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-300 text-xs font-mono-code">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Local Session</span>
              </span>
            )}
          </div>
        </div>

        {/* Studio Tool Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none border-t border-stone-800 pt-4">
          <button
            onClick={() => setActiveTool('chat')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'chat'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Gemini Chatbot</span>
          </button>

          <button
            onClick={() => setActiveTool('live')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'live'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>Voice Conversations (Live API)</span>
          </button>

          <button
            onClick={() => setActiveTool('music')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'music'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Music className="w-3.5 h-3.5 text-emerald-400" />
            <span>Music (Lyria 3)</span>
          </button>

          <button
            onClick={() => setActiveTool('image')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'image'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
            <span>Create & Edit Images</span>
          </button>

          <button
            onClick={() => setActiveTool('video')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'video'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-purple-400" />
            <span>Veo 3 Video</span>
          </button>

          <button
            onClick={() => setActiveTool('grounding')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'grounding'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-yellow-400" />
            <span>Search & Maps Grounding</span>
          </button>

          <button
            onClick={() => setActiveTool('transcribe')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTool === 'transcribe'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-rose-400" />
            <span>Audio Transcribe</span>
          </button>
        </div>
      </div>

      {/* ================= PANEL 1: GEMINI MULTI-TURN CHAT ================= */}
      {activeTool === 'chat' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-rose-600" />
                <span>Gemini Conversational Co-Pilot</span>
              </h3>
              <p className="text-xs text-stone-600">
                Multi-turn conversation engine with model and persona selection.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Model Selector */}
              <div className="flex items-center text-xs font-mono-code bg-stone-100 p-1 rounded-lg border border-stone-300">
                <span className="text-stone-500 px-1 text-[11px]">Model:</span>
                <button
                  onClick={() => setChatModelType('fast')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    chatModelType === 'fast' ? 'bg-amber-400 text-black shadow-xs' : 'text-stone-600'
                  }`}
                  title="gemini-3.1-flash-lite: Ultra fast"
                >
                  Fast (3.1 Lite)
                </button>
                <button
                  onClick={() => setChatModelType('general')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    chatModelType === 'general' ? 'bg-rose-600 text-white shadow-xs' : 'text-stone-600'
                  }`}
                  title="gemini-3.5-flash: Balanced general tasks"
                >
                  General (3.5 Flash)
                </button>
                <button
                  onClick={() => setChatModelType('complex')}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    chatModelType === 'complex' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600'
                  }`}
                  title="gemini-3.1-pro-preview: Deep strategic reasoning"
                >
                  Complex (3.1 Pro)
                </button>
              </div>

              {/* Persona Selector */}
              <select
                value={chatRole}
                onChange={(e) => setChatRole(e.target.value as any)}
                className="text-xs font-medium border border-stone-300 rounded-lg px-2.5 py-1.5 bg-white text-slate-800 outline-none"
              >
                <option value="Mei Sassy Mirror">Mei · Sassy Mirror</option>
                <option value="Chaos Alchemist">Chaos Alchemist</option>
                <option value="Anti-Hustle Strategist">Anti-Hustle Strategist</option>
                <option value="Financial Realist">Financial Realist</option>
              </select>

              <button
                onClick={() => setChatMessages([])}
                className="p-1.5 text-stone-400 hover:text-rose-600 rounded border border-stone-200"
                title="Clear thread"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Thread */}
          <div className="h-96 overflow-y-auto space-y-3 p-4 bg-[#faf7f0] rounded-xl border border-stone-200 font-sans">
            {chatMessages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono-code text-stone-500">
                  <span className="font-bold">{m.role === 'user' ? user.chaos_name : chatRole}</span>
                  <span>·</span>
                  <span>{m.timestamp}</span>
                </div>
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    m.role === 'user'
                      ? 'bg-rose-600 text-white rounded-tr-none'
                      : 'bg-white border border-stone-300 text-slate-900 rounded-tl-none font-serif-display'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isSendingChat && (
              <div className="flex items-center space-x-2 text-xs text-stone-500 italic p-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>{chatRole} is evaluating your paradoxes...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendChat();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask for an unhurried reframe, reality check, or boundary defense..."
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 border-2 border-stone-300 focus:border-stone-800 rounded-xl outline-none"
            />
            <button
              type="submit"
              disabled={isSendingChat || !chatInput.trim()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 hover:bg-black disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </form>
        </div>
      )}

      {/* ================= PANEL 2: LIVE API VOICE CONVERSATIONS ================= */}
      {activeTool === 'live' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-mono-code font-bold uppercase mb-1">
                Model: gemini-3.8-live
              </div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <Radio className="w-5 h-5 text-rose-600 animate-pulse" />
                <span>Live Real-Time Voice Conversation</span>
              </h3>
              <p className="text-xs text-stone-600">
                Low-latency, bidirectional audio streaming with Mei using the official Gemini Live API.
              </p>
            </div>
            <div>
              {!isLiveConnected ? (
                <button
                  onClick={startLiveSession}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Mic className="w-4 h-4" />
                  <span>Start Live Session</span>
                </button>
              ) : (
                <button
                  onClick={stopLiveSession}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <VolumeX className="w-4 h-4" />
                  <span>Disconnect Live Voice</span>
                </button>
              )}
            </div>
          </div>

          {/* Visualizer & Status */}
          <div className="bg-slate-950 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px]">
            {isLiveConnected ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-1.5">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-rose-500 to-amber-400 rounded-full animate-pulse"
                      style={{
                        height: isLiveSpeaking ? `${20 + Math.random() * 50}px` : '12px',
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                <div className="text-emerald-400 font-mono-code text-xs font-bold flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE CHANNEL ACTIVE · 16kHz IN / 24kHz OUT</span>
                </div>
                <p className="text-stone-300 text-xs max-w-md">
                  {isLiveSpeaking
                    ? 'Mei is speaking... You can interrupt at any moment by talking.'
                    : 'Listening to your microphone. Speak freely.'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-rose-500 mx-auto">
                  <Mic className="w-6 h-6" />
                </div>
                <div className="text-stone-300 text-sm font-semibold">
                  Live voice conversation is disconnected.
                </div>
                <p className="text-stone-500 text-xs max-w-sm">
                  Click "Start Live Session" to connect your microphone directly to Gemini 3.8 Live.
                </p>
              </div>
            )}
          </div>

          {/* Live Audio Transcript Log */}
          {liveTranscript.length > 0 && (
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2 text-xs font-mono-code max-h-48 overflow-y-auto">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Session Transcript</div>
              {liveTranscript.map((t, idx) => (
                <div key={idx} className="text-slate-800">{t}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= PANEL 3: MUSIC GENERATION (Lyria 3) ================= */}
      {activeTool === 'music' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono-code font-bold uppercase mb-1">
                Lyria 3 Audio Models
              </div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <Music className="w-5 h-5 text-emerald-600" />
                <span>Atmospheric Music Generation</span>
              </h3>
              <p className="text-xs text-stone-600">
                Compose custom ambient soundtracks, rebellion loops, and focus tracks.
              </p>
            </div>
            {/* Model switcher */}
            <div className="flex items-center text-xs font-mono-code bg-stone-100 p-1 rounded-lg border border-stone-300">
              <button
                onClick={() => setMusicModel('lyria-3-clip-preview')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  musicModel === 'lyria-3-clip-preview' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                Clip (≤30s) · lyria-3-clip-preview
              </button>
              <button
                onClick={() => setMusicModel('lyria-3-pro-preview')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  musicModel === 'lyria-3-pro-preview' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                Full Track · lyria-3-pro-preview
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code">
              Track Prompt / Acoustic Description:
            </label>
            <textarea
              rows={3}
              value={musicPrompt}
              onChange={(e) => setMusicPrompt(e.target.value)}
              className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
              placeholder="e.g. Heavy rain outside an old attic window, deep rhythmic cello bassline, gentle vintage electric piano"
            />

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-mono-code text-stone-500 self-center">Presets:</span>
              {[
                '4 AM Deep Writing Lo-Fi with Analog Tape Flutter',
                'Chaotic Glitch Drone for Creative Rebellion Hour',
                'Subtle Japanese Koto and Ambient Wind for Afternoon De-escalation',
                'Heavy Synthwave Pulse for Final 20-Minute Shipping Sprint'
              ].map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setMusicPrompt(preset)}
                  className="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1 rounded-md border border-stone-300 transition-colors"
                >
                  {preset.split(' for ')[0]}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleGenerateMusic}
                disabled={isGeneratingMusic || !musicPrompt.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
              >
                <Music className={`w-4 h-4 ${isGeneratingMusic ? 'animate-spin' : ''}`} />
                <span>{isGeneratingMusic ? 'Synthesizing Audio with Lyria 3...' : 'Generate Music Track'}</span>
              </button>
            </div>
          </div>

          {/* Generated Audio Player */}
          {generatedAudioUrl && (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-bold text-emerald-950 text-xs font-mono-code uppercase flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Audio Ready · {generatedMusicInfo}</span>
                </div>
                <a
                  href={generatedAudioUrl}
                  download="lifeos-lyria-track.mp3"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 underline font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Audio</span>
                </a>
              </div>
              <audio controls src={generatedAudioUrl} className="w-full" autoPlay />
            </div>
          )}
        </div>
      )}

      {/* ================= PANEL 4: CREATE & EDIT IMAGES ================= */}
      {activeTool === 'image' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-mono-code font-bold uppercase mb-1">
                Model: gemini-3.1-flash-image-preview
              </div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-sky-600" />
                <span>Image Creation & Transformation Studio</span>
              </h3>
              <p className="text-xs text-stone-600">
                Generate new artwork, stickers, cover art, or edit existing images with natural language.
              </p>
            </div>
            {/* Mode toggle */}
            <div className="flex items-center text-xs font-mono-code bg-stone-100 p-1 rounded-lg border border-stone-300">
              <button
                onClick={() => setImageMode('create')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  imageMode === 'create' ? 'bg-sky-600 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                Create New Image
              </button>
              <button
                onClick={() => setImageMode('edit')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  imageMode === 'edit' ? 'bg-sky-600 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                Edit Existing Image
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {imageMode === 'edit' && (
              <div className="bg-stone-50 border border-stone-300 rounded-xl p-4 space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code">
                  Upload Image to Edit:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setEditSourceImage(reader.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="text-xs text-stone-600"
                />
                {editSourceImage && (
                  <div className="mt-2">
                    <img src={editSourceImage} alt="Source" className="w-32 h-32 object-cover rounded-lg border border-stone-300 shadow-xs" />
                  </div>
                )}
              </div>
            )}

            {imageMode === 'create' && (
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code mb-1">
                  Aspect Ratio:
                </label>
                <div className="flex items-center gap-2">
                  {(['1:1', '16:9', '9:16', '4:3', '3:4'] as const).map((ar) => (
                    <button
                      key={ar}
                      onClick={() => setImageAspectRatio(ar)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-mono-code font-bold border ${
                        imageAspectRatio === ar
                          ? 'bg-sky-600 text-white border-sky-600'
                          : 'bg-white text-stone-700 border-stone-300'
                      }`}
                    >
                      {ar}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code mb-1">
                {imageMode === 'create' ? 'Image Generation Prompt:' : 'Edit Instructions / Modifications:'}
              </label>
              <textarea
                rows={3}
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
                placeholder={imageMode === 'create' ? 'Describe the visual composition...' : 'e.g. Add bold red spray paint dripping over the letters, high-contrast dark mood'}
              />
            </div>

            <div>
              <button
                onClick={handleCreateOrEditImage}
                disabled={isProcessingImage || !imagePrompt.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
              >
                <ImageIcon className={`w-4 h-4 ${isProcessingImage ? 'animate-spin' : ''}`} />
                <span>{isProcessingImage ? 'Rendering Image with Gemini 3.1...' : imageMode === 'create' ? 'Generate Image' : 'Apply Edits to Image'}</span>
              </button>
            </div>

            {/* Image Preview */}
            {resultImageUrl && (
              <div className="bg-stone-50 border-2 border-stone-300 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 font-mono-code">Generated Result</span>
                  <a
                    href={resultImageUrl}
                    download="lifeos-artwork.png"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-700 hover:text-sky-900 font-bold underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PNG</span>
                  </a>
                </div>
                <div className="flex justify-center bg-black/5 p-2 rounded-lg">
                  <img
                    src={resultImageUrl}
                    alt="Result"
                    className="max-h-96 rounded-lg object-contain shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= PANEL 5: VEO 3 VIDEO STUDIO ================= */}
      {activeTool === 'video' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-mono-code font-bold uppercase mb-1">
                Model: veo-3.1-fast-generate-preview
              </div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-600" />
                <span>Veo 3 Video Generation & Photo Animation</span>
              </h3>
              <p className="text-xs text-stone-600">
                Generate cinematic motion sequences from text prompts or animate your uploaded photos with Veo 3.
              </p>
            </div>
            {/* Aspect ratio */}
            <div className="flex items-center text-xs font-mono-code bg-stone-100 p-1 rounded-lg border border-stone-300">
              <button
                onClick={() => setVideoAspectRatio('16:9')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  videoAspectRatio === '16:9' ? 'bg-purple-600 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                16:9 Landscape
              </button>
              <button
                onClick={() => setVideoAspectRatio('9:16')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  videoAspectRatio === '9:16' ? 'bg-purple-600 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                9:16 Portrait
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Optional Photo Upload */}
            <div className="bg-stone-50 border border-stone-300 rounded-xl p-4 space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code">
                Optional Starting Photo to Animate:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => setVideoSourcePhoto(reader.result as string);
                    reader.readAsDataURL(file);
                  }
                }}
                className="text-xs text-stone-600"
              />
              {videoSourcePhoto && (
                <div className="flex items-center gap-3 mt-2">
                  <img src={videoSourcePhoto} alt="Source" className="w-24 h-24 object-cover rounded-lg border border-stone-300" />
                  <button
                    onClick={() => setVideoSourcePhoto(null)}
                    className="text-xs text-rose-600 underline font-semibold"
                  >
                    Remove Photo
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code mb-1">
                Video Motion Prompt:
              </label>
              <textarea
                rows={3}
                value={videoPrompt}
                onChange={(e) => setVideoPrompt(e.target.value)}
                className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
                placeholder="e.g. Glowing neon rain falling on dark asphalt, slow cinematic push-in shot"
              />
            </div>

            <div>
              <button
                onClick={handleGenerateVideo}
                disabled={isGeneratingVideo || !videoPrompt.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
              >
                <Video className={`w-4 h-4 ${isGeneratingVideo ? 'animate-spin' : ''}`} />
                <span>{isGeneratingVideo ? 'Generating Video with Veo 3...' : 'Generate Veo Video'}</span>
              </button>
            </div>

            {videoStatusText && (
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-xs font-mono-code text-purple-900 flex items-center gap-2">
                <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingVideo ? 'animate-spin' : ''}`} />
                <span>{videoStatusText}</span>
              </div>
            )}

            {generatedVideoBlobUrl && (
              <div className="bg-stone-900 rounded-xl p-4 space-y-3 text-white">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-emerald-400 font-bold">Veo Video Ready</span>
                  <a
                    href={generatedVideoBlobUrl}
                    download="lifeos-veo-video.mp4"
                    className="text-purple-300 underline font-semibold flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download MP4</span>
                  </a>
                </div>
                <video
                  controls
                  autoPlay
                  loop
                  src={generatedVideoBlobUrl}
                  className="w-full max-h-[400px] rounded-lg mx-auto bg-black"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= PANEL 6: SEARCH & MAPS GROUNDING ================= */}
      {activeTool === 'grounding' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-[10px] font-mono-code font-bold uppercase mb-1">
                Model: gemini-3.5-flash with Grounding Tools
              </div>
              <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-yellow-600" />
                <span>Real-World Grounding & Sanctuary Radar</span>
              </h3>
              <p className="text-xs text-stone-600">
                Ground your daily planning in verified Google Search data or discover real-world local sanctuaries via Google Maps.
              </p>
            </div>
            {/* Mode switch */}
            <div className="flex items-center text-xs font-mono-code bg-stone-100 p-1 rounded-lg border border-stone-300">
              <button
                onClick={() => setGroundingMode('search')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  groundingMode === 'search' ? 'bg-yellow-500 text-black shadow-xs' : 'text-stone-600'
                }`}
              >
                Google Search Grounding
              </button>
              <button
                onClick={() => setGroundingMode('maps')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  groundingMode === 'maps' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600'
                }`}
              >
                Google Maps Grounding
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {groundingMode === 'search' ? (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code">
                  Live Search Reality Check / Cultural Lore Question:
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
                  placeholder="e.g. Latest science on cognitive recharge from unplugged walks in nature"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code mb-1">
                    Sanctuary / Micro-Adventure Search:
                  </label>
                  <input
                    type="text"
                    value={mapsQuery}
                    onChange={(e) => setMapsQuery(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
                    placeholder="e.g. Silent independent bookstore, botanical garden greenhouse"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block font-mono-code mb-1">
                    City or Neighborhood:
                  </label>
                  <input
                    type="text"
                    value={mapsLocation}
                    onChange={(e) => setMapsLocation(e.target.value)}
                    className="w-full text-xs sm:text-sm p-3 border border-stone-300 rounded-xl outline-none focus:border-stone-800"
                    placeholder="e.g. Portland Arts District or Tokyo Shimokitazawa"
                  />
                </div>
              </div>
            )}

            <div>
              <button
                onClick={handleExecuteGrounding}
                disabled={isGroundingLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-stone-950 font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
              >
                <Search className={`w-4 h-4 ${isGroundingLoading ? 'animate-spin' : ''}`} />
                <span>{isGroundingLoading ? 'Retrieving Grounded Data...' : groundingMode === 'search' ? 'Execute Search Grounding' : 'Locate Grounded Sanctuaries'}</span>
              </button>
            </div>

            {/* Results display */}
            {groundingText && (
              <div className="bg-stone-50 border border-stone-300 rounded-xl p-5 space-y-3 font-sans">
                <div className="flex items-center justify-between text-xs font-mono-code font-bold text-stone-600">
                  <span>GROUNDED INTELLIGENCE RESULT</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(groundingText);
                      onShowToast('Copied to clipboard!');
                    }}
                    className="inline-flex items-center gap-1 text-slate-900 hover:text-rose-600"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>
                <div className="text-xs sm:text-sm text-slate-900 leading-relaxed whitespace-pre-wrap">
                  {groundingText}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= PANEL 7: AUDIO TRANSCRIBE ================= */}
      {activeTool === 'transcribe' && (
        <div className="bg-white border-2 border-stone-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-mono-code font-bold uppercase mb-1">
              Model: gemini-3.5-transcribe
            </div>
            <h3 className="font-bold text-slate-900 font-display-punch text-lg flex items-center gap-2">
              <Mic className="w-5 h-5 text-rose-600" />
              <span>Verbatim Audio Dictation & Transcription</span>
            </h3>
            <p className="text-xs text-stone-600">
              Speak your raw thoughts and let gemini-3.5-transcribe transcribe every word with precision into your daily flight log.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-[#faf7f0] border-2 border-dashed border-stone-300 rounded-2xl text-center space-y-4">
            {!isRecordingTranscribe ? (
              <button
                onClick={handleStartTranscribeRecord}
                className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <Mic className="w-7 h-7" />
              </button>
            ) : (
              <button
                onClick={handleStopTranscribeRecord}
                className="w-16 h-16 rounded-full bg-stone-900 hover:bg-black text-rose-500 flex items-center justify-center shadow-lg animate-pulse transition-transform cursor-pointer"
              >
                <div className="w-6 h-6 rounded bg-rose-500" />
              </button>
            )}

            <div>
              <div className="font-bold text-slate-900 text-sm">
                {isRecordingTranscribe ? 'Recording Audio... Tap to Transcribe' : 'Tap Microphone to Speak'}
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {isRecordingTranscribe ? 'Audio stream capturing in real time...' : 'Transcribes verbatim with gemini-3.5-transcribe.'}
              </p>
            </div>
          </div>

          {isTranscribing && (
            <div className="p-3 bg-stone-100 rounded-xl text-xs font-mono-code text-stone-700 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Transcribing audio with gemini-3.5-transcribe...</span>
            </div>
          )}

          {transcribeResult && (
            <div className="bg-stone-50 border border-stone-300 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code font-bold">
                <span className="text-stone-700">VERBATIM TRANSCRIPT:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onUpdateDailyEntry({
                        evening_notes: `${dailyEntry.evening_notes ? dailyEntry.evening_notes + '\n\n' : ''}[Spoken Reflection]: ${transcribeResult}`
                      });
                      onShowToast('Inserted transcript into Evening Notes!');
                    }}
                    className="text-xs bg-stone-900 hover:bg-black text-white px-2.5 py-1 rounded-md font-semibold"
                  >
                    Insert to Evening Notes
                  </button>
                  <button
                    onClick={() => {
                      onUpdateDailyEntry({
                        morning_intention: transcribeResult
                      });
                      onShowToast('Inserted transcript into Morning Intention!');
                    }}
                    className="text-xs bg-rose-600 hover:bg-rose-500 text-white px-2.5 py-1 rounded-md font-semibold"
                  >
                    Set as Morning Intention
                  </button>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 font-serif-display leading-relaxed italic bg-white p-3 rounded-lg border border-stone-200">
                "{transcribeResult}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
