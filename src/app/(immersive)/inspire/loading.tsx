import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        {/* Logo pulse */}
        <Image
          src="/aayatverse-logo.png"
          alt="AayatVerse"
          width={80}
          height={80}
          className="animate-pulse"
          priority
        />

        {/* Spinner */}
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />

        <p className="text-white/70 text-sm">
          Loading Inspire...
        </p>
      </div>
    </div>
  );
}