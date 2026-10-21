# SooWooLife Holdings

Static holding-company page for swltrust.com. The supplied 2026 logo is preserved unchanged. The founder’s note is proposed copy for review.

## Preview

Run `python3 -m http.server 3180 --bind 127.0.0.1` in this directory.

## Publishing

The included GitHub Actions workflow publishes only index.html, style.css, and assets. It requires GitHub Pages enabled with GitHub Actions as the source. A private repository requires a Pages-eligible GitHub plan. This is an organisational showcase; transaction and subscription applications use their own application hosting.

Before changing DNS, verify control of swltrust.com and GitHub’s domain-verification challenge. Its current apex points at a different server, and www is configured as an APEX application alias. Preserve app.swltrust.com, drako.swltrust.com, and all unrelated services. Confirm the intended replacement for www before reassigning it.

Add the custom domain in Pages settings, complete domain verification, then use the DNS records shown by GitHub. Enable HTTPS after certificate issuance. Do not bypass the existing apex certificate mismatch.

No deployment or DNS changes have been made. Do not include personal BRS records, secrets, or private profiles in this repository.
