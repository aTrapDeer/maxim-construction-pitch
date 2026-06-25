# Quick Restore Notes

* Authoritative nameservers shown in cPanel: `tangons1.cybercon.com` and `tangons2.cybercon.com`.
* `www.maximconstruction.net` points to Squarespace via `ext-cust.squarespace.com`.
* The root domain has Squarespace A records plus duplicate `142.214.201.26` A records.
* Email appears to be Microsoft 365 / Outlook based on MX, SPF, DKIM, DMARC, and autodiscover records.
* Do not blindly remove or replace MX/TXT/CNAME email records when changing website routing.
* Confirm the active authoritative DNS provider before restoring or editing records.
