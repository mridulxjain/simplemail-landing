import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaShieldAlt,
  FaBullhorn,
  FaSmile,
  FaRobot,
  FaSyncAlt,
  FaInbox,
} from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";

export default function Hero() {
  const notif = [
    { text: "5 New Mails", icon: <FaEnvelope /> },
    { text: "Spam Blocked", icon: <FaShieldAlt /> },
    { text: "Promotion Blocked", icon: <FaBullhorn /> },
    { text: "Welcome Back!", icon: <FaSmile /> },
    { text: "Syncing Mail...", icon: <FaSyncAlt /> },
    { text: "Inbox 100% Cleaned", icon: <FaInbox /> },
    { text: "Auto Reply Enabled", icon: <MdAutoFixHigh /> },
  ];

  const keywords = ["...smart...", "...seamless...", "...smooth...", "...secure...", "...sleek..."];
  const [wordIndex, setWordIndex] = useState(0);
  const [animateWord, setAnimateWord] = useState(true);
  const [currentNotif, setCurrentNotif] = useState(0);
  const [fade, setFade] = useState(true);
  const [mailCount, setMailCount] = useState(0);

  // Rotating keywords
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateWord(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % keywords.length);
        setAnimateWord(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotating notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentNotif((prev) => (prev + 1) % notif.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mail count animation
  useEffect(() => {
    let count = 0;
    const target = 25513;
    const interval = setInterval(() => {
      count += Math.floor((target - count) / 10) + 1;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setMailCount(count);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-white text-center relative">
      {/* Mail Count Badge */}
      <div className="absolute top-4 sm:top-8 w-full flex justify-center z-10">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 text-sm px-6 py-2 rounded-full shadow font-mono">
          {mailCount.toLocaleString()} mails filtered
        </div>
      </div>

      {/* Notification Bubble */}
      <div className="mt-24 sm:mt-32 mb-6 relative bg-black border border-yellow-500 rounded-full px-6 py-2 shadow-lg w-[280px] h-[45px] flex items-center justify-center overflow-hidden">
        <div className={`absolute left-5 text-white text-lg transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          {notif[currentNotif].icon}
        </div>
        <div className={`pl-8 font-mono text-sm transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
          {notif[currentNotif].text}
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold leading-tight relative">
        Welcome to{" "}
        <span className="text-yellow-400 relative inline-block">
          Simple<span className="text-white">Mail</span>
          <svg
            className="absolute bottom-0 left-0 w-full h-4"
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 15 C50 25, 150 5, 200 15"
              stroke="#facc15"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </span>
      </h1>

      <p className="text-2xl sm:text-3xl mt-4 text-gray-200">but not so simple</p>

      {/* Animated keyword */}
      <div className="relative h-10 mt-4 overflow-hidden w-full">
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <span
            key={wordIndex}
            className={`text-white text-lg sm:text-xl font-mono transition-all duration-500 ease-in-out delay-[50ms]
            ${animateWord ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm -translate-y-5"}`}
          >
            {keywords[wordIndex]}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button className="px-6 py-2 rounded-full border-2 border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-2 rounded-full border-2 border-white text-yellow-400 hover:bg-white hover:text-black transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}