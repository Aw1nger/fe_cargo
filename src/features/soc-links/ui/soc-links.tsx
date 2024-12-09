import { Mail, Phone } from "lucide-react";

export const SocLinks = () => {
  return (
    <div className="flex justify-center gap-3">
      <a href="tel: +79307837738" target="_blank" rel="noopener noreferrer">
        <Phone />
      </a>
      <a
        href="mailto: tomff1821gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail />
      </a>
    </div>
  );
};
