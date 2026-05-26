"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { installGuides } from "@/data/install-guides";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function InstallAppModal({
  open,
  onClose,
}: Props) {
  const [platform, setPlatform] =
    useState<"android" | "iphone">("android");

  const [step, setStep] = useState(0);

  const guides = installGuides[platform];
  const current = guides[step];
  const isFirst = step === 0;
  const isLast = step === guides.length - 1;

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
    >
      <DialogContent
        className="
          w-[95vw]
          max-w-2xl
          max-h-[calc(100dvh-140px)]
          overflow-hidden
          rounded-3xl
          p-0
          flex
          flex-col
        "
      >
        {/* Inner wrapper */}
        <div className="flex flex-1 min-h-0 flex-col">

          {/* Header */}
          <DialogHeader
            className="
              shrink-0
              border-b
              px-6
              py-5
            "
          >
            <DialogTitle className="text-2xl font-bold mt-1">
              Install AayatVerse
            </DialogTitle>
            <DialogDescription className="mb-1">
              Add AayatVerse to your Home Screen for a faster,
              app-like experience.
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable Body */}
          <div
            className="
              flex-1
              min-h-0
              overflow-y-auto
            "
          >
            {/* Tabs */}
            <div className="flex gap-3 px-6 pt-5 mt-2">
              <button
                onClick={() => {
                  setPlatform("android");
                  setStep(0);
                }}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  ${
                    platform === "android"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "border bg-background hover:bg-muted"
                  }
                `}
              >
                Android
              </button>
              <button
                onClick={() => {
                  setPlatform("iphone");
                  setStep(0);
                }}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  ${
                    platform === "iphone"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "border bg-background hover:bg-muted"
                  }
                `}
              >
                iPhone
              </button>
            </div>

            <div className="p-6">
              {/* Step */}
              <div className="mb-5">
                <p className="text-sm text-muted-foreground">
                  Step {current.step} of {guides.length}
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  {current.title}
                </h3>
              </div>

              {/* Screenshot */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  h-[32vh]
                  max-h-[340px]
                  min-h-[220px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  bg-black/40
                  shadow-xl
                "
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  width={200}
                  height={600}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Description */}
              <p className="mt-2 text-center text-muted-foreground">
                {current.description}
              </p>

              {/* Navigation */}
              <div className="mt-2 flex items-center justify-between">
                <button
                  disabled={isFirst}
                  onClick={() => setStep((prev) => prev - 1)}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-5
                    py-2.5
                    transition-all
                    hover:bg-muted
                    disabled:pointer-events-none
                    disabled:opacity-40
                  "
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <button
                  disabled={isLast}
                  onClick={() => setStep((prev) => prev + 1)}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-600
                    px-6
                    py-2.5
                    text-white
                    transition-all
                    hover:bg-emerald-700
                    disabled:pointer-events-none
                    disabled:opacity-40
                  "
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}