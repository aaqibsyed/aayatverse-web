import { cn } from "@/lib/utils";

export default function AppCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
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