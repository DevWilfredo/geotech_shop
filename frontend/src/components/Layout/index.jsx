// src/components/Layout.jsx
import { Navbar } from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-center p-4">
        <div className="w-full max-w-7xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
