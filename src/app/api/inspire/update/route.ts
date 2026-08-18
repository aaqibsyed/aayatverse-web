import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

type Body = {
  id: string;
  action: "approve" | "reject" | "edit";
  title?: string;
  caption?: string;
};

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("inspires")
    .select("*")
    .eq("status", "pending") // ✅ admin only
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    if (!body.id || !body.action) {
      return NextResponse.json(
        { error: "Missing id or action" },
        { status: 400 }
      );
    }

    let updateData: Record<string, unknown> = {};

    if (body.action === "approve") {
      updateData = {
        is_published: true,
        status: "approved",
        ...(body.title && { title: body.title }),
        ...(body.caption && { caption: body.caption }),
      };
    }

    if (body.action === "reject") {
      updateData = {
        is_published: false,
        status: "rejected",
      };
    }

    // if (body.action === "edit") {
    //   updateData = {
    //     title: body.title,
    //     caption: body.caption,
    //   };
    // }

    const { error } = await supabaseAdmin
      .from("inspires")
      .update(updateData)
      .eq("id", body.id);

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown error";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}