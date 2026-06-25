# Maxim Construction DNS Backup — `maximconstruction.net`

> Backup created from pasted cPanel Zone Editor records.  
> This is a preservation/restore reference, not a recommendation that every record is correct.

## Zone metadata

| Item | Value |
|---|---|
| Domain | `maximconstruction.net` |
| Source | cPanel Zone Editor |
| Displayed record count | 57 records |
| Configured nameserver 1 | `tangons1.cybercon.com` |
| Configured nameserver 2 | `tangons2.cybercon.com` |
| cPanel version shown | `136.0.24` |

## Important restoration notes

- The zone contains both **Squarespace A records** and **cPanel/server A records** for the root domain.
- The root domain, `maximconstruction.net.`, has multiple A records, including a duplicate `142.214.201.26` entry.
- `www.maximconstruction.net.` points to Squarespace via `ext-cust.squarespace.com`.
- Email appears to be handled by **Microsoft 365 / Outlook**, based on the MX, SPF, DKIM, DMARC, and `autodiscover.outlook.com` records.
- The Google site verification TXT record appears malformed or duplicated in the pasted cPanel output. It is preserved exactly as shown below.
- When restoring DNS, first confirm which provider is authoritative by checking the domain's active nameservers.

---

# Web / Squarespace Routing Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `maximconstruction.net.` | 600 | A | `198.185.159.144` |
| `maximconstruction.net.` | 600 | A | `198.185.159.145` |
| `maximconstruction.net.` | 600 | A | `198.49.23.144` |
| `maximconstruction.net.` | 600 | A | `198.49.23.145` |
| `www.maximconstruction.net.` | 600 | CNAME | `ext-cust.squarespace.com` |
| `73c5m68z4czb5dt5d6r7.maximconstruction.net.` | 600 | CNAME | `verify.squarespace.com` |

# Additional Root / Server A Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `localhost.maximconstruction.net.` | 600 | A | `142.214.201.26` |

# cPanel Service Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `cpanel.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `whm.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `webmail.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `webdisk.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `cpcalendars.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `cpcontacts.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| `autoconfig.maximconstruction.net.` | 14400 | A | `142.214.201.26` |
| `ftp.maximconstruction.net.` | 3600 | CNAME | `maximconstruction.net` |

# Mail / Microsoft 365 Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `mail.maximconstruction.net.` | 3600 | CNAME | `maximconstruction.net` |
| `maximconstruction.net.` | 600 | MX | Priority: `0`; Destination: `maximconstruction-net.mail.protection.outlook.com` |
| `maximconstruction.net.` | 600 | TXT | `MS=ms54816646` |
| `maximconstruction.net.` | 600 | TXT | `v=spf1 include:spf.protection.outlook.com -all` |
| `autodiscover.maximconstruction.net.` | 14400 | CNAME | `autodiscover.outlook.com` |
| `_dmarc.maximconstruction.net.` | 600 | TXT | `v=DMARC1; p=quarantine; pct=100` |
| `selector1._domainkey.maximconstruction.net.` | 600 | CNAME | `selector1-maximconstruction-net._domainkey.maximconstructioninc.onmicrosoft.com` |
| `selector2._domainkey.maximconstruction.net.` | 600 | CNAME | `selector2-maximconstruction-net._domainkey.maximconstructioninc.onmicrosoft.com` |

# Other Verification TXT Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `maximconstruction.net.` | 600 | TXT | `0ed1fe018a85e52c0ccf414c6b9e2c8959aa1915d1` |
| `maximconstruction.net.` | 600 | TXT | `google-site-verificgoogle-site-verification=a4C7mPHkkIFD_pXayfGuRFCdjbKTqvf7zoArhtbBKREation=a4C7mPHkkIFD_pXayfGuRFCdjbKTqvf7zoArhtbBKRE` |

# CAA Records

| Name | TTL | Type | Flags | Tag | Value |
|---|---:|---|---:|---|---|
| `maximconstruction.net.` | 14400 | CAA | 0 | `issue` | `comodoca.com` |
| `maximconstruction.net.` | 14400 | CAA | 0 | `issue` | `letsencrypt.org` |

# ACME / SSL Challenge TXT Records

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `_cpanel-dcv-test-record.maximconstruction.net.` | 14400 | TXT | `_cpanel-dcv-test-record=DokkhhiwgoBu_hfMF4gpLjTs7Hyj0IO0b3Ci4_TAgGGEnofR2ZkNj8DC5AfkCb1f` |
| `_acme-challenge.maximconstruction.net.` | 14400 | TXT | `5_-bIxhLR5ttdFvsAplUZWPmajYr4_KzcAofa7M78YM` |
| `_acme-challenge.mail.maximconstruction.net.` | 14400 | TXT | `i997G7TkWduzJHlX_mfUCC4WnJJF_PjjkmuVEsuSrHs` |
| `_acme-challenge.www.maximconstruction.net.` | 14400 | TXT | `TiujjEYVVuqK14WbsYIhg2Dkb4AZ_VegOpneKaxEstI` |
| `_acme-challenge.autodiscover.maximconstruction.net.` | 14400 | TXT | `b71uBgbEYL8QC34X_EBs1L_L73ANmmsoM7clLwjaPic` |

# Comodo DCV CNAME Records for `mail.maximconstruction.net`

| Name | TTL | Type | Record / Value |
|---|---:|---|---|
| `_8b1e210ebee8508fdc75a89ade4e9f1f.mail.maximconstruction.net.` | 14400 | CNAME | `c1ff503430adb756fe5bc0132f0ff182.c352b3da60f988bb5ae80962577aa814.comodoca.com` |
| `_57c9936c8394443d2ce591769e7f6cf9.mail.maximconstruction.net.` | 14400 | CNAME | `ada87de87293ddf85e71024004409dff.1ea78119660acb2fc3a4d3fb08651242.comodoca.com` |
| `_c62fba62767e44726b85fdf6f2dfa1c5.mail.maximconstruction.net.` | 14400 | CNAME | `44165ee68f0092ddd5197e2c53c28ea4.81de08d5ac3ec4780959f910b00c62fa.comodoca.com` |
| `_31ff50e934601528a1980f42ddfcb937.mail.maximconstruction.net.` | 14400 | CNAME | `645d2b379d34e61b41c163df98b716aa.3a633a679ddb5c87e15b3a0be083dde9.comodoca.com` |
| `_c71f04897a9ceb6bb5323ed94d0a50e1.mail.maximconstruction.net.` | 14400 | CNAME | `1eca407a521353fd49774c496b9256f8.cd78ab16b7444607d0e1079d61ad8f32.comodoca.com` |
| `_72e5c7b8a6e50e944d13518ea3d53d4d.mail.maximconstruction.net.` | 14400 | CNAME | `62c80adb48f2b99d56a158a0f74ee68b.f6913ac8a9f71c0efc4a70c9dadd2168.comodoca.com` |
| `_b5512fad91d959c47e3535ac4e7c7657.mail.maximconstruction.net.` | 14400 | CNAME | `ef7c1ce8c398c98c96548ac53dda876a.83b076e672b1d6efadb1b221f1f06fa2.comodoca.com` |
| `_6165f8e8c70070554333acf9822670bb.mail.maximconstruction.net.` | 14400 | CNAME | `589dd5f4bb84e0e9c2188b8d9714b591.0f94239d398fb5cb0e401a6c894dfc91.comodoca.com` |
| `_629e00cd958cfeade7b83bbff9970fe1.mail.maximconstruction.net.` | 14400 | CNAME | `9b946b9c037c4b058bd5025e8fe58f0b.9fd7eca9ce87f31d6bc8a554e7252e67.comodoca.com` |
| `_e41fd4a1d733317071ac1fd6eb3a0cba.mail.maximconstruction.net.` | 14400 | CNAME | `da19de1688727504f64c838118509c43.4397b6dbe29b485b475ba6b3f6877116.comodoca.com` |
| `_a4cf1da747132e8f238c0510c93cf78c.mail.maximconstruction.net.` | 14400 | CNAME | `b5653a69c9cfc60e9ac340b2215b1e72.a7bfbf03bd368ffff1bb027aa48ef272.comodoca.com` |
| `_2ffe4d690449740bc2ccc26ec8a1ccad.mail.maximconstruction.net.` | 14400 | CNAME | `8485f5a070381b1359e5e0ceba774fcb.ce2ed4cd283cc589ae939d93be77fc73.comodoca.com` |
| `_0992ce98be4c7dc646a6bbd1ec3dc2e5.mail.maximconstruction.net.` | 14400 | CNAME | `9f5edabd1d3dbdeda9eca4c04281f2e3.3175b3c365b63fd8b7f3a095abe84953.comodoca.com` |
| `_afd11035f620e42ffdbcc162e703bc8b.mail.maximconstruction.net.` | 14400 | CNAME | `e8c9c1d157c11cd484da229d358346d1.a72ff268120fecbaa400e59261e544d2.comodoca.com` |

# CalDAV / CardDAV / Autodiscovery Records

| Name | TTL | Type | Details |
|---|---:|---|---|
| `_carddavs._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2080`; Target: `142-214-201-250.cprapid.com` |
| `_carddavs._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| `_carddav._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2079`; Target: `142-214-201-250.cprapid.com` |
| `_carddav._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| `_autodiscover._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `443`; Target: `cpanelemaildiscovery.cpanel.net` |
| `_caldavs._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2080`; Target: `142-214-201-250.cprapid.com` |
| `_caldavs._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| `_caldav._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2079`; Target: `142-214-201-250.cprapid.com` |
| `_caldav._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |

---

# Flat Record List

This section preserves the same data as a single flat table for quick searching.

| # | Name | TTL | Type | Record / Value |
|---:|---|---:|---|---|
| 1 | `mail.maximconstruction.net.` | 3600 | CNAME | `maximconstruction.net` |
| 2 | `maximconstruction.net.` | 600 | A | `198.185.159.144` |
| 3 | `localhost.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 4 | `www.maximconstruction.net.` | 600 | CNAME | `ext-cust.squarespace.com` |
| 5 | `ftp.maximconstruction.net.` | 3600 | CNAME | `maximconstruction.net` |
| 6 | `cpanel.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 7 | `whm.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 8 | `webmail.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 9 | `webdisk.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 10 | `cpcalendars.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 11 | `cpcontacts.maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 12 | `maximconstruction.net.` | 600 | TXT | `MS=ms54816646` |
| 13 | `maximconstruction.net.` | 600 | TXT | `v=spf1 include:spf.protection.outlook.com -all` |
| 14 | `autodiscover.maximconstruction.net.` | 14400 | CNAME | `autodiscover.outlook.com` |
| 15 | `maximconstruction.net.` | 14400 | CAA | Flags: `0`; Tag: `issue`; Value: `comodoca.com` |
| 16 | `_cpanel-dcv-test-record.maximconstruction.net.` | 14400 | TXT | `_cpanel-dcv-test-record=DokkhhiwgoBu_hfMF4gpLjTs7Hyj0IO0b3Ci4_TAgGGEnofR2ZkNj8DC5AfkCb1f` |
| 17 | `_8b1e210ebee8508fdc75a89ade4e9f1f.mail.maximconstruction.net.` | 14400 | CNAME | `c1ff503430adb756fe5bc0132f0ff182.c352b3da60f988bb5ae80962577aa814.comodoca.com` |
| 18 | `_57c9936c8394443d2ce591769e7f6cf9.mail.maximconstruction.net.` | 14400 | CNAME | `ada87de87293ddf85e71024004409dff.1ea78119660acb2fc3a4d3fb08651242.comodoca.com` |
| 19 | `_c62fba62767e44726b85fdf6f2dfa1c5.mail.maximconstruction.net.` | 14400 | CNAME | `44165ee68f0092ddd5197e2c53c28ea4.81de08d5ac3ec4780959f910b00c62fa.comodoca.com` |
| 20 | `_31ff50e934601528a1980f42ddfcb937.mail.maximconstruction.net.` | 14400 | CNAME | `645d2b379d34e61b41c163df98b716aa.3a633a679ddb5c87e15b3a0be083dde9.comodoca.com` |
| 21 | `_c71f04897a9ceb6bb5323ed94d0a50e1.mail.maximconstruction.net.` | 14400 | CNAME | `1eca407a521353fd49774c496b9256f8.cd78ab16b7444607d0e1079d61ad8f32.comodoca.com` |
| 22 | `_72e5c7b8a6e50e944d13518ea3d53d4d.mail.maximconstruction.net.` | 14400 | CNAME | `62c80adb48f2b99d56a158a0f74ee68b.f6913ac8a9f71c0efc4a70c9dadd2168.comodoca.com` |
| 23 | `_b5512fad91d959c47e3535ac4e7c7657.mail.maximconstruction.net.` | 14400 | CNAME | `ef7c1ce8c398c98c96548ac53dda876a.83b076e672b1d6efadb1b221f1f06fa2.comodoca.com` |
| 24 | `_6165f8e8c70070554333acf9822670bb.mail.maximconstruction.net.` | 14400 | CNAME | `589dd5f4bb84e0e9c2188b8d9714b591.0f94239d398fb5cb0e401a6c894dfc91.comodoca.com` |
| 25 | `_629e00cd958cfeade7b83bbff9970fe1.mail.maximconstruction.net.` | 14400 | CNAME | `9b946b9c037c4b058bd5025e8fe58f0b.9fd7eca9ce87f31d6bc8a554e7252e67.comodoca.com` |
| 26 | `_e41fd4a1d733317071ac1fd6eb3a0cba.mail.maximconstruction.net.` | 14400 | CNAME | `da19de1688727504f64c838118509c43.4397b6dbe29b485b475ba6b3f6877116.comodoca.com` |
| 27 | `_a4cf1da747132e8f238c0510c93cf78c.mail.maximconstruction.net.` | 14400 | CNAME | `b5653a69c9cfc60e9ac340b2215b1e72.a7bfbf03bd368ffff1bb027aa48ef272.comodoca.com` |
| 28 | `_2ffe4d690449740bc2ccc26ec8a1ccad.mail.maximconstruction.net.` | 14400 | CNAME | `8485f5a070381b1359e5e0ceba774fcb.ce2ed4cd283cc589ae939d93be77fc73.comodoca.com` |
| 29 | `_0992ce98be4c7dc646a6bbd1ec3dc2e5.mail.maximconstruction.net.` | 14400 | CNAME | `9f5edabd1d3dbdeda9eca4c04281f2e3.3175b3c365b63fd8b7f3a095abe84953.comodoca.com` |
| 30 | `_afd11035f620e42ffdbcc162e703bc8b.mail.maximconstruction.net.` | 14400 | CNAME | `e8c9c1d157c11cd484da229d358346d1.a72ff268120fecbaa400e59261e544d2.comodoca.com` |
| 31 | `_carddavs._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2080`; Target: `142-214-201-250.cprapid.com` |
| 32 | `_carddavs._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| 33 | `_carddav._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2079`; Target: `142-214-201-250.cprapid.com` |
| 34 | `_carddav._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| 35 | `_autodiscover._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `443`; Target: `cpanelemaildiscovery.cpanel.net` |
| 36 | `autoconfig.maximconstruction.net.` | 14400 | A | `142.214.201.26` |
| 37 | `_caldavs._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2080`; Target: `142-214-201-250.cprapid.com` |
| 38 | `_caldavs._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| 39 | `_caldav._tcp.maximconstruction.net.` | 14400 | SRV | Priority: `0`; Weight: `0`; Port: `2079`; Target: `142-214-201-250.cprapid.com` |
| 40 | `_caldav._tcp.maximconstruction.net.` | 14400 | TXT | `path=/` |
| 41 | `maximconstruction.net.` | 14400 | CAA | Flags: `0`; Tag: `issue`; Value: `letsencrypt.org` |
| 42 | `_acme-challenge.maximconstruction.net.` | 14400 | TXT | `5_-bIxhLR5ttdFvsAplUZWPmajYr4_KzcAofa7M78YM` |
| 43 | `maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 44 | `maximconstruction.net.` | 600 | A | `142.214.201.26` |
| 45 | `maximconstruction.net.` | 600 | TXT | `0ed1fe018a85e52c0ccf414c6b9e2c8959aa1915d1` |
| 46 | `maximconstruction.net.` | 600 | MX | Priority: `0`; Destination: `maximconstruction-net.mail.protection.outlook.com` |
| 47 | `73c5m68z4czb5dt5d6r7.maximconstruction.net.` | 600 | CNAME | `verify.squarespace.com` |
| 48 | `maximconstruction.net.` | 600 | A | `198.185.159.145` |
| 49 | `maximconstruction.net.` | 600 | A | `198.49.23.144` |
| 50 | `maximconstruction.net.` | 600 | A | `198.49.23.145` |
| 51 | `maximconstruction.net.` | 600 | TXT | `google-site-verificgoogle-site-verification=a4C7mPHkkIFD_pXayfGuRFCdjbKTqvf7zoArhtbBKREation=a4C7mPHkkIFD_pXayfGuRFCdjbKTqvf7zoArhtbBKRE` |
| 52 | `_acme-challenge.mail.maximconstruction.net.` | 14400 | TXT | `i997G7TkWduzJHlX_mfUCC4WnJJF_PjjkmuVEsuSrHs` |
| 53 | `_acme-challenge.www.maximconstruction.net.` | 14400 | TXT | `TiujjEYVVuqK14WbsYIhg2Dkb4AZ_VegOpneKaxEstI` |
| 54 | `_acme-challenge.autodiscover.maximconstruction.net.` | 14400 | TXT | `b71uBgbEYL8QC34X_EBs1L_L73ANmmsoM7clLwjaPic` |
| 55 | `_dmarc.maximconstruction.net.` | 600 | TXT | `v=DMARC1; p=quarantine; pct=100` |
| 56 | `selector1._domainkey.maximconstruction.net.` | 600 | CNAME | `selector1-maximconstruction-net._domainkey.maximconstructioninc.onmicrosoft.com` |
| 57 | `selector2._domainkey.maximconstruction.net.` | 600 | CNAME | `selector2-maximconstruction-net._domainkey.maximconstructioninc.onmicrosoft.com` |
