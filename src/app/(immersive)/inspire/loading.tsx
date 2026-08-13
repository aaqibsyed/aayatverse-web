export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        
        {/* Logo pulse */}
        <img
          src="/aayatverse-logo.png"
          className="w-20 h-20 animate-pulse"
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