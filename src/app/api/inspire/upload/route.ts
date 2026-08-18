// import { supabaseAdmin } from "@/lib/supabase/admin";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { title, caption, videoUrl } = body;

//     const { error } = await supabaseAdmin
//       .from("inspires")
//       .insert([
//         {
//           title,
//           caption,
//           video_path: videoUrl,
//           status: "pending",
//           created_by: "user",
//         },
//       ]);

//     if (error) throw error;

//     return NextResponse.json({ message: "Sent for approval" });
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Upload failed" },
//       { status: 500 }
//     );
//   }
// }

import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

function generateSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")   // remove special chars
        .replace(/\s+/g, "-")       // spaces → hyphen
        .trim() + "-" + Date.now(); // uniqueness
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { title, caption, videoUrl } = body;

        const slug = generateSlug(title);
        const isAdmin = body.isAdmin === true;

        const { data, error } = await supabaseAdmin
            .from("inspires")
            .insert([
                {
                    title,
                    caption,
                    slug,
                    video_path: videoUrl,
                    is_published: isAdmin,
                    status: isAdmin ? "approved" : "pending",
                },
            ])
            .select();

        if (error) {
            console.error("❌ DB ERROR:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (err: unknown) {
        console.error("❌ API ERROR:", err);

        const errorMessage = err instanceof Error ? err.message : "Upload failed";

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}