# SooWooLife Holdings

Static holding-company page for swltrust.com. The supplied 2026 logo is preserved unchanged.

Published on 21/10/2026 using GitHub Pages. Custom domain `swltrust.com` was attached
and its authoritative DNS updated on 22/10/2026; HTTPS issuance is still pending.
The owner authorised making this holding-page repository public; no application code or
private company documents are included. The default and sole permitted deployment branch
is `main`. The supplied logo, founder's note and user-confirmed contact details are the visible content.

## Preview

Run `python3 -m http.server 3180 --bind 127.0.0.1` in this directory.

## Publishing

The included GitHub Actions workflow publishes only index.html, style.css, and assets.
Pages uses GitHub Actions as its source. This is an organisational showcase; transaction
and subscription applications use their own application hosting.

The custom domain was added in Pages settings before DNS was changed. The authoritative
Hetzner zone now points the apex to GitHub Pages with a 300-second TTL:

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | bigdrako1.github.io. |

The old apex and www website addresses were replaced. Existing MX, SRV, verification
TXT, DMARC, autoconfig, and app/drako/game/hub/msanii records were preserved. SPF's `a`
mechanism was replaced with the former apex IPv4/IPv6 addresses, retaining the same mail
sender authorization without authorizing GitHub's website addresses. Its `mx` mechanism
is unchanged. A full pre-change zone copy is stored privately outside this repository.

Authoritative DNS and Cloudflare's public resolver returned the new website records.
Some resolvers still cache the former 7200-second records. GitHub's HTTPS certificate
was not ready at the last check. Enable HTTPS when issuance completes; never bypass a
certificate mismatch. Account-level GitHub domain verification remains recommended.

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Browser checks at 1440px and 390px confirm the original logo loads, the note and signature
render and there is no horizontal overflow. The logo SVG is byte-identical to the supplied
2026 original. Successful workflow: https://github.com/bigdrako1/swl-holdings/actions/runs/39666762481

DNS cutover is saved; secure custom-domain browser verification is pending TLS issuance. Do not include
personal BRS records, secrets, or private profiles in this repository.

## Black centred redesign — 22/10/2026

The page uses the supplied white SVG (`assets/soowoolife-white.svg`) unchanged on black,
with centred hierarchy, the exact revised founder copy signed Drako, and user-confirmed
`info@swltrust.com` / +254 713 599 320 email, phone and WhatsApp links. Typography uses
DM Sans, identical to Kadi Yangu, self-hosted with its SIL Open Font License in assets/fonts.
No unlicensed Foundation Sans demo files are bundled. The default font is DM Sans throughout.

Browser verification: actual 1440x1000 desktop and 480x844 mobile viewports; no horizontal
overflow, logo loaded, font loaded. The preview browser's viewport override was reset.
The supplied SVG SHA-256 is d84bef6a901e62cf0a8f175dacda4a4d4f6ea1f67a2146dd189e7e337f7d0ad7.
The Pages metadata source branch was aligned to main; build type remains workflow.
TLS remains a separate release check; do not bypass certificate warnings.
