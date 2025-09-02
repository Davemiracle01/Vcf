
import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await kv.llen("contacts");
    return new Response(JSON.stringify({ count: count ?? 0 }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
}
