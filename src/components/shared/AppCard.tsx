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
        "rounded-3xl border bg-card shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}