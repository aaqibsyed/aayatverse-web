import { Card } from "@/components/ui/card";

export default function VerseCard() {
  return (
    <Card className="mt-20 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Verse of the Day
      </h2>

      <p
        dir="rtl"
        className="text-right text-4xl leading-loose font-semibold border-l-4 border-emerald-600"
      >
        فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
      </p>

      <p className="mt-6 text-lg">
        Indeed, with hardship comes ease.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        Surah Ash-Sharh 94:6
      </p>
    </Card>
  );
}