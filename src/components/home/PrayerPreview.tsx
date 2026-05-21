import { Card } from "@/components/ui/card";

const prayers = [
  ["Fajr", "4:25 AM"],
  ["Dhuhr", "12:18 PM"],
  ["Asr", "4:47 PM"],
  ["Maghrib", "6:51 PM"],
  ["Isha", "8:10 PM"],
];

export default function PrayerPreview() {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-bold">
        Prayer Times
      </h2>

      <div className="space-y-3">
        {prayers.map(([name, time]) => (
          <div
            key={name}
            className="flex justify-between"
          >
            <span>{name}</span>
            <span>{time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}