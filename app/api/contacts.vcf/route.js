import { kv } from "@vercel/kv";

// Gojo style: Make sure text is escaped properly in vCard
function escapeText(s) {
  return String(s).replace(/\n/g, "\\n");
}

export async function GET() {
  try {
    // Fetch all contacts stored in Vercel KV under "contacts"
    const items = await kv.lrange("contacts", 0, -1);
    const contacts = (items || []).map((x) => {
      try { 
        return JSON.parse(x); 
      } catch { 
        return null; 
      }
    }).filter(Boolean);

    // Build the vCard output - smooth as Gojo’s Infinite Void
    let vcf = "";
    for (const { name, phone } of contacts) {
      vcf += `BEGIN:VCARD
VERSION:3.0
FN:${escapeText(name)}
TEL;TYPE=CELL:${escapeText(phone)}
END:VCARD

`;
    }

    // Return the vCard file response
    return new Response(vcf, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": "attachment; filename=contacts.vcf"
      }
    });
  } catch (e) {
    // If things go sideways, unleash the domain and report error
    return new Response(String(e), { status: 500 });
  }
}
