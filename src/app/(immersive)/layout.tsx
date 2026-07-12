import FloatingBottomNav from "@/components/navigation/FloatingBottomNav";

export default function ImmersiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children};
      <FloatingBottomNav />
    </>
  )
}