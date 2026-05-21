const BASE_URL = "https://api.quran.com/api/v4";

export async function getChapters() {
  const response = await fetch(
    `${BASE_URL}/chapters`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch chapters");
  }

  return response.json();
}