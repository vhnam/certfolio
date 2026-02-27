---
title: "Interview: Visual Bias e.g. Maps"
---

## Mobile App Accessibility

### Visual Paradigm Limitations

- Visual bias: Apps like Google Maps are designed primarily for sighted users relying on visual maps.
- Map-heavy interfaces: Large interactive map regions are often unusable with screen readers.
- Image fragmentation issue: Desktop maps may appear as non-navigable “chopped-up images.”

### Driving vs Walking Accessibility

#### Driving Mode (More Accessible)

- Turn-by-turn voice guidance: Works well for blind users when driving.
- Audio-first interaction: Reduces reliance on visual interface.

#### Walking Mode (Less Accessible)

- Insufficient detail: Directions like “continue straight for half a mile” lack granular context.
- Missing intermediate cues: No reinforcement during long stretches.
- Delayed rerouting: Only after significant deviation.
- Lack of crossing guidance: Does not clarify when to cross streets.

Result: User got lost due to missing directional detail.

## Specialized GPS Apps

### Blind-Optimized Navigation Apps

- Designed specifically for blind users.
- Provide richer contextual navigation data.
- More frequent guidance cues.
- However:
  - App updates can interrupt usability.
  - Time-sensitive scenarios expose dependency risk.

## Restaurant & Store Locator Maps

### Desktop Map Accessibility Issues

- Map containers: Often non-semantic, non-navigable.
- Screen reader experience: Feels like interacting with meaningless image fragments.
- No structured search-first prioritization.

### Design Problem Identified

- Over-prioritization of visual maps.
- Under-prioritization of accessible search results.
- Assumption that all users interact visually.

## Key Accessibility Lessons

### Avoid Visual Bias

- Do not default to “big map first” layout.
- Prioritize structured search results before map.
- Provide text-based location lists.

### Improve Navigation Feedback

1. Provide frequent reinforcement cues.
2. Announce intersections clearly.
3. Indicate when to cross streets.
4. Offer orientation context (landmarks, direction).

### Structure Over Visual Design

- Present location results as structured lists.
- Make search primary, map secondary.
- Ensure mobile and desktop parity in accessibility.

## Core Takeaway

Mobile apps like Google Maps illustrate how:

- Visual-first design excludes non-visual users.
- Audio navigation must provide sufficient detail.
- Maps alone are not accessible — structured, contextual guidance is essential.
- Designers must actively counter visual bias in location-based interfaces.
