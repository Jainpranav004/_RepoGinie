"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, ArrowRight, Database, Zap, Brain } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const router = useRouter();

  const handleAnalyzeRepository = () => {
    if (!repoUrl.trim()) {
      toast.warning("Please enter a repository URL");
      return;
    }

    // Parse GitHub URL to extract owner and repo
    // Supports: https://github.com/owner/repo or github.com/owner/repo
    const match = repoUrl.match(
      /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)/,
    );

    if (!match) {
      toast.error(
        "Invalid GitHub URL. Use format: https://github.com/owner/repo",
      );
      return;
    }

    const owner = match[1];
    const repo = match[2].replace(/\.git$/, ""); // Remove .git suffix if present

    // Navigate to chat page with repo info
    router.push(`/chat?owner=${owner}&repo=${repo}`);
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 font-sans text-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 pt-32 pb-20 max-w-7xl mx-auto gap-12">
        <div className="max-w-3xl space-y-10 flex-1">
          {/* Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-[5rem] font-bold text-zinc-950 tracking-tighter leading-[1.05]">
              Understand any codebase<br />in seconds.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-light font-heading">
              RepoGinie uses AI to index, analyze, and answer questions about public GitHub repositories instantly.
            </p>
          </div>

          {/* Input Section */}
          <div className="max-w-2xl pt-6 animate-fade-in-up animation-delay-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="Paste GitHub URL context (e.g. facebook/react)"
                className="flex-1 px-6 py-4 bg-white border border-black-400 text-zinc-900 placeholder-zinc-400 text-lg rounded-2xl shadow-sm focus:outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all font-sans"
              />
              <button
                onClick={handleAnalyzeRepository}
                className="group px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white text-lg font-medium rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <span>Analyze</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Help Text */}
            <p className="text-sm text-zinc-500 mt-4 font-medium px-2">
              Free to use. No sign up required for public repositories.
            </p>
          </div>
        </div>

        {/* Animated Hero Logo */}
        <div className="hidden lg:flex flex-1 justify-center items-center animate-fade-in-up animation-delay-300 w-full max-w-md lg:-translate-y-12 xl:-translate-y-20">
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-700 ease-out group overflow-hidden border-8 border-white animate-float">
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-700 z-10 rounded-full" />
            <Image
              src="/logo2.jpg"
              alt="RepoGinie Hero Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-zinc-950 text-zinc-100 relative rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              How it works
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              We process the repository and build an intelligent search index so you can start asking questions immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors group">
              <div className="w-12 h-12 bg-white text-zinc-950 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight text-white">
                Fetch & Parse
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                We clone the repository and extract text, code components, and architecture details instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors group">
              <div className="w-12 h-12 bg-zinc-800 text-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight text-white">
                Vector Indexing
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                Code is chunked and stored in a high-speed vector database for semantic search.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors group">
              <div className="w-12 h-12 bg-zinc-800 text-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight text-white">
                AI Intelligence
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                Ask anything. Our LLMs retrieve the exact context and give you highly accurate technical answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
