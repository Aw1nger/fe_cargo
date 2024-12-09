import { navbarLinks } from "@/widgets/header/config/config";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          {navbarLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white"
              prefetch={false}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <p className="text-center text-white">© All Rights Reserved.</p>
      </div>
    </footer>
  );
};
