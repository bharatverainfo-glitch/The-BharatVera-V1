# BharatVera

Static website + demo ordering app. Works on any phone, tablet or desktop browser.

## Upload everything in this folder to the root of your GitHub repo
index.html, app.html, faq.html, contact.html, privacy.html, thank-you.html, 404.html,
site.css, site.js, config.js, testimonials.json, robots.txt, sitemap.xml,
logo.png, og-image.png, icon-192.png, favicon.png, supabase-setup.sql (optional), README.md

## Before launch (5 minutes)
1. Find and replace `https://YOUR-USERNAME.github.io/YOUR-REPO` with your real site address in: all .html files, robots.txt, sitemap.xml. (If you use a custom domain, use that.)
2. Repo > Settings > Pages > deploy from `main` / root. Then tick **Enforce HTTPS**.
3. Google Search Console: add your site, then submit `sitemap.xml`.
4. Google Analytics: put your `G-XXXXXXXXXX` ID in `config.js` (`GA_ID`). Analytics stays off while it is empty.
5. Contact form: create a free Formspree (or similar) form and put its URL in `config.js` (`FORM_URL`). Add its CAPTCHA option for stronger spam protection. The form already has a hidden honeypot field and a minimum-fill-time check.
6. Review `privacy.html` and replace the wording with text suited to your legal situation.
7. Testimonials: add only real, permitted reviews to `testimonials.json`, e.g. `[{"name":"Asha","quote":"Fast delivery","rating":5}]`. It starts empty.

## Demo vs real mode
Leave SUPABASE_URL empty for demo mode (data stays in each visitor's browser; admin: admin@bharatvera.in / admin123).
For shared data: run `supabase-setup.sql` in Supabase, turn off "Confirm email", paste the URL and anon key into `config.js`, sign up, then make yourself admin with the SQL line at the bottom of that file.
Email/push: set `NOTIFY_URL` to an endpoint that accepts POST {to, subject, body}.
