import { getInspireFeed } from "@/services/inspire/inspire.service";

export async function GET() {
  return Response.json(
    getInspireFeed()
  );
}