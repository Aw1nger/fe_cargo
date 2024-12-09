import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
