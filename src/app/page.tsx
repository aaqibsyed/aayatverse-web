import Hero from "@/components/home/Hero";
import VerseCard from "@/components/home/VerseCard";
import PrayerPreview from "@/components/home/PrayerPreview";
import Features from "@/components/home/Features";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <VerseCard />
          <PrayerPreview />
        </div>
      </section>

      <Features />
    </>
  );
}