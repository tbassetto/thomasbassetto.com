---
target: AI-authorship critique
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-24T05-02-30Z
slug: src-pages-index-astro
---

Method: dual-agent (A: ai_authorship_review · B: ai_detector_evidence)

## Design Health Score

| #         | Heuristic                       |     Score | Key issue                                                                   |
| --------- | ------------------------------- | --------: | --------------------------------------------------------------------------- |
| 1         | Visibility of system status     |         3 | Theme and dialog states are clear; no active-section cue                    |
| 2         | Match system / real world       |         3 | Plain language, but “Explore my work” leads to biography rather than work   |
| 3         | User control and freedom        |         3 | Strong anchor navigation and dialog exits                                   |
| 4         | Consistency and standards       |         4 | Cohesive, but over-systematized                                             |
| 5         | Error prevention                |         1 | Nine controls invite users into unavailable photo content                   |
| 6         | Recognition rather than recall  |         3 | Labeled controls; mobile navigation remains dense                           |
| 7         | Flexibility and efficiency      |       n/a | Static portfolio surface                                                    |
| 8         | Aesthetic and minimalist design |         2 | Repeated cards, pills, lists and placeholders feel like a component catalog |
| 9         | Error recovery                  |       n/a | No meaningful error-producing task                                          |
| 10        | Help and documentation          |       n/a | Portfolio surface                                                           |
| **Total** |                                 | **19/28** | **Acceptable (68%)**                                                        |

## Design Specificity Verdict

The interface is polished, but authorship stops at “Norway + engineer.” Its strongest AI tell is **premature systemization**: the component system feels complete before the personal evidence is real.

Five details create that impression together: generic perfect Norwegian scenery; literal Day/Night image swapping; three repeated pastel cards; nine synthetic photo mosaics; and empty placeholders that open larger empty placeholders. Copy comprehensively inventories identity, but rarely tells one concrete story.

The deterministic scan returned zero findings for `src/pages/index.astro`. No markup-rule violations or false positives were reported. That clean result does not contradict the critique: the problem is authorship and content truth, not mechanical HTML defects.

No visual overlay was produced. Mutable injection was blocked by the Browser URL security policy; the page title and marker remained unchanged. Screenshot, DOM and computed-theme evidence were used instead.

## Overall Impression

The aurora hero is dramatic and technically excellent. Then the first card reveals a template waiting for content. The page feels AI-made because it confidently simulates a finished portfolio instead of honestly presenting the smaller amount of evidence currently available.

## What’s Working

- Hero hierarchy is decisive and responsive in both themes.
- Day/night color systems feel coherent; dark mode has real emotional force.
- Accessibility work is unusually thoughtful: skip link, visible focus, 44px controls, labeled theme state, external-link announcements and robust dialog behavior.

## Priority Issues

### [P1] Fake gallery interaction breaks trust

**Why it matters:** Nine “Photo coming soon” buttons advertise missing evidence. Opening one only enlarges the absence. That is more damaging than showing no gallery.

**Fix:** Remove the grid and lightboxes until media exists. Replace each with a quiet, non-interactive “Photos will be added” note—or show only the few real artifacts currently available.

**Suggested command:** `$impeccable distill`

### [P1] The visual identity is scenic shorthand, not Thomas

**Why it matters:** Perfect generated fjord and aurora vistas say “Norway portfolio.” They do not say engineer, obstacle racer, elected representative, French Tech board member or LaNorvege author. Their synthetic perfection also makes AI authorship easier to detect.

**Fix:** Move toward documentary material only Thomas could own: a muddy race detail, whiteboard or shipped interface, community gathering, article excerpt, handwriting or field note. If generated scenery remains, reduce it from identity to atmosphere.

**Suggested command:** `$impeccable bolder`

### [P2] Three lives are normalized into one card recipe

**Why it matters:** Every section uses heading, summary, bullets, pills and the same mosaic. Pastel tint is the only structural difference. Unrelated facets feel like CMS records.

**Fix:** Give each facet its native form: engineering as selected systems or case notes; racing as a result/training sequence; community as organizations, dates and concrete impact. Vary scale and rhythm deliberately.

**Suggested command:** `$impeccable layout`

### [P2] Copy inventories identity instead of proving it

**Why it matters:** “Explore my work” reveals another biography. Most copy lists domains rather than outcomes, artifacts, dates, writing or lived detail.

**Fix:** Add one specific proof point per facet. Rename the CTA to its actual destination. Replace “anything between those categories” with the conversations Thomas genuinely wants.

**Suggested command:** `$impeccable clarify`

### [P2] Mobile navigation is overpacked

**Why it matters:** Four equal links plus the theme toggle compete before visitors understand the story. The layout fits, but leaves little resilience for narrower screens or longer localized labels.

**Fix:** Reduce to two or three meaningful destinations, allow a clean wrap, or use a labeled compact menu. Keep theme control secondary.

**Suggested command:** `$impeccable adapt`

## Persona Red Flags

- **Jordan, first-timer:** “Explore my work” promises projects but lands on another biography. The photo controls imply usable content, then reveal empty gray panels.
- **Riley, stress tester:** Every gallery action leads to the same non-content state. This is the clearest sign that an incomplete component shipped as functionality.
- **Casey, mobile:** The header consumes two interaction rows; long stacked cards put outbound actions above large empty galleries, creating length without additional evidence.

## Minor Observations

- “Principal Engineer” repeats between hero and first card with little information gain.
- Blue, green and lilac card tints feel automatically assigned rather than meaningful.
- One heavy system sans everywhere is competent but anonymous.
- The rotated photo grid is a stock “handmade” gesture.
- Dark mode is emotionally stronger; light mode has less decisive hero/card separation.
- Repeated pills and external-link arrows add interface noise.

## Questions to Consider

- If every placeholder vanished, would the page feel unfinished—or more confident?
- What can someone learn here that is absent from Thomas’s LinkedIn headline?
- Which single artifact best connects engineering, mud and civic community?
- Does the site need two cinematic Norway fantasies, or one honest image with a personal reason to exist?
