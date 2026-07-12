import Hero from "@/components/home/Hero";
import VerseCard from "@/components/home/VerseCard";
import PrayerPreview from "@/components/home/PrayerPreview";
import Features from "@/components/home/Features";
import ContinueReading from "@/components/home/ContinueReading";
import BetaBanner from "@/components/homeV2/BetaBanner";
import ContinueReadingCard from "@/components/homeV2/ContinueReadingV2";
import VerseOfTheDayCard from "@/components/homeV2/VerseOfTheDayCard";
import QuickAccessGrid from "@/components/homeV2/QuickAccessGrid";
import RecentlyReadSection from "@/components/homeV2/RecentlyReadSection";
import VerseOfTheDaySection from "@/components/homeV2/VerseOfTheDaySection";


export default function HomePage() {
  return (
    <>
      {/* HomePage Version one V1 */}
      {/* <Hero />
      <ContinueReading />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <VerseCard />
          <PrayerPreview />
        </div>
      </section>
      <Features /> */}
      {/* HomePage Version two V2 */}

      <main>
        <BetaBanner />
        <section
          className="
          mx-auto
          max-w-7xl
          px-4
          py-6
        "
        >
          <ContinueReadingCard />
          <section className="mt-4">
            <VerseOfTheDaySection />
          </section>
          <section className="mt-4">
            <QuickAccessGrid />
          </section>
          <section className="mt-4">
            <RecentlyReadSection />
          </section>
        </section>
      </main>
    </>
  );
}