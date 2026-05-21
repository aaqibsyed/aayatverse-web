export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Everything A Muslim Needs
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border p-6">
            📖 Quran
          </div>

          <div className="rounded-xl border p-6">
            📚 Hadith
          </div>

          <div className="rounded-xl border p-6">
            🤲 Duas
          </div>

          <div className="rounded-xl border p-6">
            🕌 Prayer Times
          </div>
        </div>
      </div>
    </section>
  );
}