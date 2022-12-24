import { FC, ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2 mb-20">
        <Navbar />
        <main className="my-4">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
