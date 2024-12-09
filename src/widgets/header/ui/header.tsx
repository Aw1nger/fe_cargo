import { SocLinks } from "@/features/soc-links/ui/soc-links";
import Navbar from "./navbar";
import { ThemeBtn } from "./theme-btn";

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-[100] flex w-full border-b border-border/40 bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <Navbar />
      <div className="ml-auto flex items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {children}
        <SocLinks />
        <ThemeBtn />
      </div>
    </header>
  );
};
