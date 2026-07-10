import ScrollToTopButton from "../shared/ScrollToTopButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FloatingBottomNav from "@/components/navigation/FloatingBottomNav";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingBottomNav />
      <ScrollToTopButton />
    </div>
  );
}