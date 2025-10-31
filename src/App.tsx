import React,{ ReactNode, createContext, useContext, useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalProfile from './PersonalProfile';
import TerminalPage from "./terminal";
import Blogs from './Blogs';
import {Terminal, User, BookOpen} from "lucide-react";


import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: "light" | "dark"; // optional, defaults to "light"
};

const ThemeContext = createContext<{
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} | null>(null);

export const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="theme-context" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};

// Main App component
function App() {
  const [activeView, setActiveView] = useState("profile");

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"></div>
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300/30 dark:bg-yellow-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
        </div>

        {/* Enhanced Navigation */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <Tabs value={activeView} onValueChange={setActiveView}>
            <TabsList className="bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-1 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-slate-900/50 dark:hover:bg-slate-950/50">
              <TabsTrigger
                value="profile"
                className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 text-white/70 data-[state=active]:text-white data-[state=active]:bg-blue-500/90 data-[state=active]:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:text-white/90 flex items-center gap-2 relative"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </TabsTrigger>
                
              <TabsTrigger
                value="blogs"
                className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 text-white/70 data-[state=active]:text-white data-[state=active]:bg-purple-500/90 data-[state=active]:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:text-white/90 flex items-center gap-2 relative"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blogs</span>
              </TabsTrigger>
                
              <TabsTrigger
                value="terminal"
                className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 text-white/70 data-[state=active]:text-white data-[state=active]:bg-green-500/90 data-[state=active]:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:text-white/90 flex items-center gap-2 relative"
              >
                <Terminal className="w-4 h-4" />
                <span>Terminal</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>




        <div className="pt-8 pb-32">
          <div className="transition-all duration-500 ease-in-out">
            {activeView === "profile" && <PersonalProfile />}
            {activeView === "blogs" && <Blogs />}
            {activeView === "terminal" && <TerminalPage />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;