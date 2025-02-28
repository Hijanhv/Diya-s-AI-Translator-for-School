"use client";

import { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import TranslationBox from "./TranslationBox";

export default function Translator() {
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Spanish");
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setInputText(translation);
    setTranslation(inputText);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          fromLang,
          toLang,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setTranslation(data.translation);
      } else {
        console.error("Translation failed:", data.error);
        setTranslation("Translation failed. Please try again.");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setTranslation("Translation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-[1fr,auto,1fr] items-center mb-2">
          <div className="text-sm font-medium text-white/80">From</div>
          <div className="w-12"></div>
          <div className="text-sm font-medium text-white/80">To</div>
        </div>

        <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-4">
          <div className="w-full">
            <LanguageSelect value={fromLang} onChange={setFromLang} label="" />
          </div>

          <button
            onClick={handleSwapLanguages}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Swap languages"
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 17h-7m7 0l-3-3m3 3l-3 3M4 7h7m-7 0l3-3M4 7l3 3" />
            </svg>
          </button>

          <div className="w-full">
            <LanguageSelect value={toLang} onChange={setToLang} label="" />
          </div>
        </div>
      </div>

      <div className="space-y-3 max-w-4xl mx-auto w-full px-4">
        <TranslationBox
          value={inputText}
          onChange={setInputText}
          onTranslate={handleTranslate}
          placeholder="Enter text to translate..."
          isInput
          isLoading={isLoading}
        />
        <div className="relative">
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl"
            style={{ opacity: isLoading ? 1 : 0, transition: "opacity 0.3s" }}
          ></div>
          <TranslationBox
            value={translation}
            isLoading={isLoading}
            placeholder="Translation will appear here..."
          />
        </div>
      </div>
    </div>
  );
}
