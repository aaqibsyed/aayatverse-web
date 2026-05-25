interface Props {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">
      {badge && (
        <p
          className="
          mb-2
          text-sm
          font-medium
          text-emerald-600
          "
        >
          {badge}
        </p>
      )}

      <h2
        className="
        text-2xl
        font-bold
        tracking-tight

        text-slate-900
        dark:text-slate-50
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-2
          text-sm

          text-slate-600
          dark:text-slate-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}