"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface Props {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export default function AyahActionsDrawer({
  open,
  onOpenChange,
}: Props) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Ayah Actions
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-4">
          Coming Soon
        </div>
      </DrawerContent>
    </Drawer>
  );
}