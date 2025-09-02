import { kv } from "@vercel/kv";

export async function POST(request) {
  try {
    const { name, phone } = await request.json();
    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }
    const payload = { name: String(name).trim(), phone: String(phone).trim(), ts: Date.now() };
    await kv.lpush("contacts", JSON.stringify(payload));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
}
