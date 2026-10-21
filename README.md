# SooWooLife Holdings

Static holding-company page for swltrust.com. The supplied 2026 logo is preserved unchanged.

Published on 21/10/2026 at https://bigdrako1.github.io/swl-holdings/ using GitHub Pages.
The owner authorised making this holding-page repository public; no application code or
private company documents are included. The default and sole permitted deployment branch
is `main`. The supplied logo and founder's note are the only visible page content.

## Preview

Run `python3 -m http.server 3180 --bind 127.0.0.1` in this directory.

## Publishing

The included GitHub Actions workflow publishes only index.html, style.css, and assets.
Pages uses GitHub Actions as its source. This is an organisational showcase; transaction
and subscription applications use their own application hosting.

Before changing DNS, verify control of swltrust.com and GitHub’s domain-verification challenge. Its current apex points at a different server, and www is configured as an APEX application alias. Preserve app.swltrust.com, drako.swltrust.com, and all unrelated services. Confirm the intended replacement for www before reassigning it.

Add the custom domain in Pages settings before changing its website DNS. GitHub also
recommends account-level domain verification. Preserve existing MX/TXT and all unrelated
subdomains. Once access is available, the intended website-only records are:

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | bigdrako1.github.io. |

Replace any old apex AAAA records with GitHub's published IPv6 values, or omit apex AAAA
until IPv6 is configured. Do not leave them pointing to the old website. `www` is deliberately
moving from its previous application alias to this holding page; `app` and `drako` stay as-is.
Enable HTTPS after certificate issuance. Do not bypass the existing apex certificate mismatch.

Source: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Browser checks at 1440px and 390px confirm the original logo loads, the note and signature
render and there is no horizontal overflow. The logo SVG is byte-identical to the supplied
2026 original. Successful workflow: https://github.com/bigdrako1/swl-holdings/actions/runs/39666762481

Custom-domain DNS and TLS cutover remain pending authenticated access. Do not include
personal BRS records, secrets, or private profiles in this repository.
