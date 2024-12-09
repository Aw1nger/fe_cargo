import { ComposeChildren } from "@/shared/lib/helpers";
import { QueryProvider } from "@/shared/providers/query-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import React from "react";

export const ProviderCompose = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ComposeChildren>
      <QueryProvider />
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
};
