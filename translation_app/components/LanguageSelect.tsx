"use client";

interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const languages = [
  "Arabic",
  "Chinese",
  "English",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Korean",
  "Portuguese",
  "Russian",
  "Sanskrit",
  "Spanish",
];

export default function LanguageSelect({
  value,
  onChange,
  label,
}: LanguageSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/10 focus:outline-none focus:ring focus:ring-blue-400/20"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang} className="bg-gray-800">
              {lang}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
