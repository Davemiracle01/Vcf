# WhatsApp Contacts Collector (Next.js + Vercel KV + Tailwind)

Public site where visitors submit **name + phone**, the **total count** updates live, and anyone can **download all contacts as a `.vcf`**. Includes an `/info` page with your group/channel details.

## Deploy on Vercel

1. **Create a new KV store** in Vercel (Dashboard → Storage → KV).  
2. **Link the KV** to this project when deploying. Vercel will inject the required environment variables automatically.  
   If you want to run locally, create a `.env.local` file with:
   ```env
   KV_REST_API_URL=your_kv_rest_url
   KV_REST_API_TOKEN=your_kv_rest_token
   KV_URL=your_kv_url
   ```
3. Push this repo to GitHub and import to Vercel, or upload the ZIP directly in the Vercel dashboard.

## Scripts
- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — run the production server

## Notes
- API routes:
  - `POST /api/add` — body: `{ name, phone }`
  - `GET /api/count` — returns `{ count }`
  - `GET /api/contacts.vcf` — downloads consolidated vCard
- Styling: TailwindCSS
- Framework: Next.js App Router
