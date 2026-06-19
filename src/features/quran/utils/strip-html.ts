export default function stripHtml(text: string) {
  return text
    .replace(/<sup[^>]*>.*?<\/sup>/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
}