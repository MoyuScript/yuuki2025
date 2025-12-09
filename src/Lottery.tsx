import confetti from "canvas-confetti";
import { Loader2, Play, Sparkles, Square } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import BLESS_DATA from './bless.json'

const Lottery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [initial, setInitial] = useState(true);
  const intervalRef = useRef<number>(undefined);

  // Masking helper
  const maskText = (text: string) => text.replace(/./g, "*");

  const startRolling = () => {
    if (isRunning) return;
    setInitial(false);
    setHasWon(false);
    setIsRunning(true);
    setIsStopping(false);

    // Fast interval for rolling effect
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BLESS_DATA.length);
    }, 80); // 80ms for fast slot machine feel
  };

  const stopRolling = () => {
    if (!isRunning || isStopping) return;

    setIsStopping(true);

    // Random delay between 1 and 3 seconds
    const randomDelay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setIsStopping(false);
      setHasWon(true);

      // Select a random winner final index to ensure it doesn't just stop on the current sequential one
      // (Optional logic: purely relying on timing is also random enough, but this is explicit)
      const winnerIndex = Math.floor(Math.random() * BLESS_DATA.length);
      setCurrentIndex(winnerIndex);

      triggerConfetti();
    }, randomDelay);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 1000,
      spread: 360,
      origin: { y: 0.2 },
      colors: ["#FFD700", "#FFA500", "#FF4500", "#800080"],
    });
  };

  const currentUser = BLESS_DATA[currentIndex];

  // Decide what to display
  const displayName = hasWon ? currentUser.name : maskText(currentUser.name);
  const displayContent = hasWon
    ? currentUser.content
    : maskText(currentUser.content);

  // Button State Logic
  const getButtonConfig = () => {
    if (isStopping)
      return {
        text: "停止中...",
        icon: <Loader2 className="animate-spin w-8 h-8" />,
        color: "bg-yellow-500",
        action: null,
        disabled: true,
      };
    if (isRunning)
      return {
        text: "停止抽奖",
        icon: <Square className="fill-current w-8 h-8" />,
        color: "bg-red-500 hover:bg-red-600",
        action: stopRolling,
        disabled: false,
      };
    return {
      text: hasWon ? "再次抽奖" : "开始抽奖",
      icon: <Play className="fill-current w-8 h-8" />,
      color: "bg-yuki-pink hover:bg-yuki-pink/80",
      action: startRolling,
      disabled: false,
    };
  };

  const btnConfig = getButtonConfig();

  return (
    <div
      className={`h-screen overflow-hidden bg-white/80 flex items-center flex-col p-16 font-sans text-slate-100 gap-8 ${
        initial ? "justify-center" : ""
      }`}
    >
      {/* Header */}
      <motion.div className=" text-center" layout>
        <h1
          className={`text-6xl font-bold flex items-center justify-center gap-2 text-yuki-pink ${
            initial ? "text-9xl" : ""
          }`}
        >
          <Sparkles
            className={`w-16 h-16 text-yellow-400 ${
              initial ? "w-32 h-32" : ""
            }`}
          />
          雪雪的幸运抽奖魔法
          <Sparkles
            className={`w-16 h-16 text-yellow-400 ${
              initial ? "w-32 h-32" : ""
            }`}
          />
        </h1>
        <p
          className={`text-yuki-cyan font-bold text-3xl mt-8 ${
            initial ? "text-5xl" : ""
          }`}
        >
          随机叭咕叭咕一位幸运 FP~
        </p>
      </motion.div>

      {!initial && (
        <motion.div
          className="flex flex-col items-center justify-center grow overflow-hidden w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            key={hasWon ? "winner" : currentIndex}
            className="flex flex-col items-center h-full gap-4 w-full"
          >
            {/* Avatar Ring */}
            <div className={`relative rounded-full`}>
              <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 border-4 border-yuki-pink relative">
                <img
                  src={currentUser.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                {/* Overlay while rolling to add motion blur effect visually */}
                {isRunning && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                )}
              </div>
            </div>

            {/* Name */}
            <a
              href={`https://space.bilibili.com/${currentUser.uid}`}
              target="_blank"
              className={`text-6xl font-bold tracking-tight ${
                hasWon
                  ? "text-yuki-pink"
                  : "text-slate-500 font-mono tracking-widest"
              }`}
            >
              {displayName}
            </a>

            {/* Text Info */}
            <div
              className={`p-8 text-3xl leading-loose font-medium text-black text-center bg-white/60 rounded-[4rem] whitespace-pre-line break-all overflow-y-auto grow w-full`}
            >
              {displayContent}
            </div>
          </div>
        </motion.div>
      )}
      {/* Controls */}
      <motion.div className="flex flex-col items-center gap-4" layout>
        <button
          onClick={btnConfig.action ?? undefined}
          disabled={btnConfig.disabled}
          className={`py-6 rounded-full px-16 flex items-center justify-center gap-3 font-bold text-3xl transition-all transform active:scale-[0.98] shadow-lg ${
            btnConfig.color
          } ${btnConfig.disabled ? "opacity-75 cursor-not-allowed" : ""}`}
        >
          {btnConfig.icon}
          {btnConfig.text}
        </button>
        {initial && (
          <div className="bg-white/80 rounded-3xl py-4 px-8 text-center">
            <p className="text-black text-lg">
              页面链接：{window.location.href}
            </p>
            <p className="text-black text-lg">
              抽奖代码开源地址：
              <a
                href="https://github.com/MoyuScript/yuuki2025"
                className="text-yuki-cyan underline"
              >
                https://github.com/MoyuScript/yuuki2025
              </a>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Lottery;
