import { cn } from "@/lib/utils";

interface AppCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function AppCard({
  children,
  className,
  ...props
}: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-linear-to-b from-white to-slate-50 shadow-sm dark:from-card dark:to-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}