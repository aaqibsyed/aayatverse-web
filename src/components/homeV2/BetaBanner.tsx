export default function BetaBanner() {
  return (
    <div
      className="
      sticky
      top-16
      z-50

      flex
      items-center
      justify-center

      gap-2

      bg-gradient-to-r
      from-emerald-600
      via-emerald-500
      to-teal-500

      px-4
      py-2

      text-xs
      font-medium
      text-white
      "
    >
      ✨ Beta Preview

      <span className="opacity-90">
        New features are being added regularly
      </span>
    </div>
  );
}