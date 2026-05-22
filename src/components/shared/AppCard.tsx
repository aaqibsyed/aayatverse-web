import { cn } from "@/lib/utils";

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className,
}: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-linear-to-b from-white to-slate-50 shadow-sm dark:from-card dark:to-card",
        className
      )}
    >
      {children}
    </div>
  );
}