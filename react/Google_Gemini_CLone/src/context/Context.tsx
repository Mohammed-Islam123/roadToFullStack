import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext({});
type ContextProps = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: ContextProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isNewChat, setIsNewChat] = useState(true);
  const [previousPrompts, setPreviousPrompts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(matchDarkMode.matches);
  const formatResponce = (responce: string): string => {
    let arr = responce.split("**");
    let formattedResponce = "";
    arr.forEach((word, index) => {
      if (index === 0 || index % 2 != 1) {
        formattedResponce += word;
      } else {
        formattedResponce += `<b>${word}</b>`;
      }
    });
    return formattedResponce.split("*").join("</br>");
  };
  const getResponce = async (prompt: string) => {
    setLoading(true);

    setIsNewChat(false);
    setRecentPrompt(prompt);
    const responce = await run(prompt);
    const formattedResponce = formatResponce(responce);
    setResult(formattedResponce);
    setLoading(false);
  };

  const contextValue = {
    darkMode,
    setDarkMode,
    getResponce,
    input,
    setInput,
    result,
    setResult,
    isNewChat,
    setIsNewChat,
    previousPrompts,
    setPreviousPrompts,
    loading,
    setLoading,
    recentPrompt,
    setRecentPrompt,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
