import Translator from "../components/Translator";

export default function Home() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            AI Translator
          </h1>
          <p className="text-md mx-auto max-w-2xl text-gray-300 md:text-lg">
            Experience seamless translation powered by advanced artificial
            intelligence
          </p>
        </div>
        <div className="mx-auto max-w-4xl rounded-2xl backdrop-blur-lg bg-white/10 p-6 shadow-2xl ring-1 ring-white/20">
          <Translator />
        </div>
      </div>
    </main>
  );
}
