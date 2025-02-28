"use client";

interface TranslationBoxProps {
  value: string;
  onChange?: (value: string) => void;
  onTranslate?: () => void;
  placeholder?: string;
  isInput?: boolean;
  isLoading?: boolean;
}

export default function TranslationBox({
  value,
  onChange,
  onTranslate,
  placeholder,
  isInput = false,
  isLoading = false,
}: TranslationBoxProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-200 focus-within:border-blue-400 focus-within:bg-white/10 focus-within:ring focus-within:ring-blue-400/20">
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={!isInput}
        className="min-h-[200px] w-full resize-none bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none"
      />
      {isInput && onTranslate && (
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <div className="text-sm text-gray-400">{value.length} characters</div>
          <button
            onClick={onTranslate}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-medium text-white transition duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-2">
              {isLoading ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Translating...</span>
                </>
              ) : (
                <span>Translate</span>
              )}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
