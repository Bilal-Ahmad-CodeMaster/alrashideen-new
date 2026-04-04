"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONFIG } from "@/config";

type AppState = {
  themeConfig: any | null;
  refreshThemeConfig: () => Promise<void>;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [themeConfig, setThemeConfig] = useState<any>(null);

  const fetchThemeConfig = async () => {
    try {
      const response = await fetch(CONFIG.themeConfig, { cache: "no-store" });
      const responseBody = await response.json();
      setThemeConfig(responseBody.data);
    } catch (error) {
      console.error("Theme fetch error:", error);
    }
  };

  useEffect(() => {
    void fetchThemeConfig();
  }, []);

  const value = useMemo(
    () => ({
      themeConfig,
      refreshThemeConfig: fetchThemeConfig,
    }),
    [themeConfig],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}