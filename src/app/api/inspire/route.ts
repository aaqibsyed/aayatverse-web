import { NextResponse } from "next/server";
import { getPublishedInspires } from "@/services/inspire/inspire.service";

export async function GET() {
  try {
    const data = await getPublishedInspires();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch inspires" },
      { status: 500 }
    );
  }
}