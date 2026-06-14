# SEO Keyword Integration Plan

## Summary

- Integrate the approved keyword strategy across the landing page using natural, editorial SEO copy.
- Include every target phrase or a clean close variant across visible copy, metadata, image alt text, FAQs, and structured content.
- Correct the malformed Como Italy planner keyword to `Como Italy wedding planner`.
- Use `€80,000+` as the public starting point in the Lake Como cost FAQ.

## Key Changes

- Update `app/layout.tsx` metadata around luxury Lake Como, destination wedding, and exclusive Italy planning terms.
- Strengthen visible page copy in the hero, client profile, destinations, process, founder story, portfolio, FAQ, inquiry, and footer sections.
- Add SEO-focused FAQ questions for Lake Como wedding cost, Villa Balbianello weddings, and choosing a destination wedding planner in Italy.
- Restore linked sections by rendering the existing `Commissions` and `Testimonials` sections on the home page.
- Keep the page as a single landing page with no new routes.

## Keyword Map

- Primary hero/meta terms: `luxury wedding planner Lake Como`, `destination wedding planner Italy`, `exclusive wedding planner Italy`.
- Lake Como service terms: `wedding planning Lake Como`, `Lake Como wedding planner`, `wedding planner Lake Como`, `destination wedding planner Lake Como`, `wedding planner Lake Como Italy`, `wedding planning Lake Como Italy`, `wedding organiser Lake Como`.
- Italy-wide service terms: `best wedding planners in Italy`, `wedding planners Italy`, `luxury wedding planner Italy`.
- Villa and venue terms: `Italian villa wedding planner`, `Villa Balbianello wedding`.
- FAQ query term: `how much is it to get married at Lake Como`.
- Corrected typo term: `Como Italy wedding planner`.

## Test Plan

- Run `npm run lint`.
- Run `npm run build`.
- Search final source with `rg -in` for all approved keyword phrases or planned variants.
- Review the landing page at desktop and mobile widths to confirm copy looks natural, no text overflows, and CTA/header links scroll to real sections.
- Verify FAQ accordion content includes the new cost and Villa Balbianello questions.

## Assumptions

- The SEO style is natural and editorial, not exact-match-heavy.
- The public Lake Como wedding cost answer uses `€80,000+`.
- The typo keyword is corrected and not published.
- No new routes are required.
