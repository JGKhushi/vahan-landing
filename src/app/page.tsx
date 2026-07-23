import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Advisory } from "@/components/sections/Advisory";
import { ServicePanel } from "@/components/sections/ServicePanel";
import { StatsSection } from "@/components/sections/StatsSection";
import { MobileUpdate } from "@/components/sections/MobileUpdate";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
        <div className="space-y-6">
          <Advisory />
          {/* Two-column layout on large screens, stacked on mobile */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ServicePanel />
            <StatsSection />
          </div>
          <MobileUpdate />
        </div>
      </main>

      <Footer />
    </div>
  );
}
