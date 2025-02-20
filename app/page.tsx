import ParticlesBackground from "./components/ParticlesBackground";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Normeno Rest Area!",
  description: "Personal website and links collection",
};

export default function Home() {
  return (
    <main className="relative text-center min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl" />
      </div>

      <div
        className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-xl rounded-2xl p-8 
        shadow-[0_0_15px_rgba(0,0,0,0.7)] 
        shadow-red-900/20
        border border-gray-800/50 
        hover:border-red-900/50 
        hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]
        hover:shadow-red-900/30
        transition-all"
      >
        <div className="flex flex-col items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/193685648?v=4"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full mb-4 border-2 border-red-800"
            priority
          />
          <h1 className="text-white text-2xl font-bold mb-4">@Normeno</h1>
          <p className="text-white mb-2 uppercase tracking-wider text-lg font-extrabold">
            MY INFO
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://normeno.vercel.app"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              My Website
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://steamcommunity.com/profiles/76561199511484776/"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.5 7.6 11.2l2.4-3.6c-2.4-1-4-3.3-4-6 0-3.6 2.9-6.6 6.6-6.6 3.6 0 6.6 2.9 6.6 6.6 0 2.7-1.6 5-4 6l2.4 3.6C21.8 21.5 24 17.1 24 12 24 5.4 18.6 0 12 0zm0 7.2c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8-2.2-4.8-4.8-4.8z" />
              </svg>
              Steam Profile
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://discord.gg/uT4eWnsAfY"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord Server
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://instagram.com/normeno_"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://github.com/Normeno-ID"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://osu.ppy.sh/users/37135445"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <Image
                src="https://cdn2.steamgriddb.com/logo/b99d4175007b73c0d56ee15cb121ea93.png"
                alt="osu!"
                width={24}
                height={24}
                className="mr-3"
              />
              Osu! Profile
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="https://wakatime.com/@Norm"
            className="flex items-center justify-between w-full p-3 rounded-full bg-gradient-to-r from-gray-900 to-red-900 hover:from-gray-800 hover:to-red-800 backdrop-blur-sm hover:opacity-90 transition-all hover:scale-[1.02] transform group font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm.6 4.8h-1.2v6l5.1 3.06.6-.96-4.5-2.64V7.2z" />
              </svg>
              WakaTime Stats
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <p className="text-white/60 text-sm mt-8 font-medium">
          @2025 Made by Normeno with ❤️
        </p>
      </div>
    </main>
  );
}
