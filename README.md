# zoziologie.raphaelnussbaumer.com

This repository serves a minimal GitHub Pages site that redirects only the root path.

- Redirected: `https://zoziologie.raphaelnussbaumer.com/` -> `https://raphaelnussbaumer.com/`
- Not redirected: any non-root path (for example `/global-rare-ebird/`)

To change the destination, edit `ROOT_REDIRECT_TARGET` in `index.html`.

## Shared app policies

Draft policy pages for My eBird Map and eBird Trip Planner are in `privacy/index.html` and `terms/index.html`, using `policies.css`. After publication they will be available at:

- https://zoziologie.raphaelnussbaumer.com/privacy/
- https://zoziologie.raphaelnussbaumer.com/terms/

Contact: rafnuss@gmail.com. Content was checked against the two local app repositories on 26 October 2026; recheck against deployed versions before publication. Publishing these pages does not itself establish regulatory compliance or Google verification.

Before publishing:

- Trip Planner currently loads Google Analytics immediately, without a consent control. Decide whether to remove analytics or implement the consent behavior required for the intended audience, then update the analytics disclosure to match. A privacy notice does not supply tracking consent.
- Confirm the proposed terms and privacy commitments, including purposes and legal bases, with the operator. Confirm provider processing agreements and international-transfer safeguards for the actual account configurations; the draft does not assert that a specific safeguard has already been checked.
- Set and document actual retention periods for Firebase account records, capacity requests, support correspondence, analytics and server logs; replace the general retention criteria with the confirmed settings where available. Review cleanup of temporary uploads and recovery copies when handling deletion requests.
- The Storage and Firestore locations were verified in the live consoles below. Authentication and provider-internal processing locations were not independently verified.
- Verify the domain in Search Console and configure the policy URLs in each app's OAuth branding. Add visible links to both pages in each app's interface and public homepage. These drafts do not modify either app.

The root redirect remains unchanged. These pages have no scripts, analytics or external assets. They are not published until the repository's Pages deployment runs.

Sources used when drafting:

- https://support.google.com/cloud/answer/13464321?hl=en
- https://developers.google.com/terms/api-services-user-data-policy
- https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en


## Live Firebase checks — 26 October 2026

Read-only inspection in the signed-in Chrome session, project `ebird-trip-planner`. No cloud settings were changed.

| Setting | Observed value |
| --- | --- |
| Cloud Storage bucket | `ebird-trip-planner.firebasestorage.app` |
| Bucket location | `us-east1` — South Carolina, United States |
| Soft-delete retention | 7 days, effective 5 October 2026 |
| Object versioning | Off |
| Bucket retention policy | Not configured |
| Object retention and default event-based hold | Not enabled / disabled |
| Storage lifecycle cleanup | No rules |
| Firestore `(default)` location | `nam5` — US multi-region |
| Firestore point-in-time recovery | Disabled |
| Scheduled Firestore backups | No daily or weekly retention configured |
| Firestore TTL | No policies |
| Authentication providers | Google enabled; no other enabled providers listed |
| Firebase-linked Google Analytics | Not enabled; separate website tag remains in Trip Planner source |
| Optional Firebase Service Data use for non-Firebase services | Enabled |

Firebase Authentication authorised domains currently list `localhost`, `127.0.0.1`, `ebird-trip-planner.firebaseapp.com`, `ebird-trip-planner.web.app` and `zoziologie.github.io`. The production custom domain `zoziologie.raphaelnussbaumer.com` is missing; add it in Authentication → Settings → Authorised domains before relying on production sign-in. This is separate from the OAuth consent screen's authorised root domain.

The absence of lifecycle and TTL policies means these services do not implement the six-month inactivity cleanup automatically. That remains an administrator process as described in the Trip Planner documentation. Account, request, support and analytics retention periods still need operator decisions or separate configuration checks. The Analytics property, processing agreements and international-transfer safeguards were not verified by these Firebase settings checks.
