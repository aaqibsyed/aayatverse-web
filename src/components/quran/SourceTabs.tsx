"use client";

interface Source {
  id: number;
  label: string;
}

interface Props {
  items: Source[];
  activeId: number;
  onChange: (
    id: number
  ) => void;
}

export default function SourceTabs({
  items,
  activeId,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active =
          item.id === activeId;

        return (
          <button
            key={item.id}
            onClick={() =>
              onChange(item.id)
            }
            className={`
              rounded-full
              px-4
              py-2

              text-xs
              font-medium

              transition-all
              duration-300

              ${
                active
                  ? `
                      scale-105

                      bg-gradient-to-r
                      from-emerald-600
                      to-teal-600

                      text-white

                      shadow-lg
                      shadow-emerald-500/20
                    `
                  : `
                      border

                      border-slate-200
                      bg-slate-100

                      text-slate-700

                      hover:bg-slate-200

                      dark:border-slate-800
                      dark:bg-slate-900/60
                      dark:text-slate-300

                      dark:hover:bg-slate-800
                    `
              }
            `}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}