
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import Activity from '../components/Activity'
import Experience from "@/components/Experience";
import Library from "@/components/Library";
import Nonprofit from "@/components/Nonprofit";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Hero />
        <Impact />
          <Activity />
          <Experience />
          <Library />
          <Nonprofit />
          <GetInTouch />
          <Footer />
      </main>
    </div>
  );
}
