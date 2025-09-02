
import { kv } from "@vercel/kv";

function escapeText(s) {
  return String(s).replace(/\n/g, "\\n");
}

export async function GET() {
  try {
    const items = await kv.lrange("contacts", 0, -1);
    const contacts = (items || []).map((x) => {
      try { return JSON.parse(x); } catch { return null; }
    }).filter(Boolean);

    let vcf = "";
    for (const { name, phone } of contacts) {
      vcf += BEGIN:VCARD\nVERSION:3.0\nFN:${escapeText(name)}\nTEL;TYPE=CELL:${escapeText(phone)}\nEND:VCARD\n\n;
    }

    return new Response(vcf, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": "attachment; filename=contacts.vcf"
      }
    });
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
