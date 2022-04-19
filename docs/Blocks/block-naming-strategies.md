---
title: Block Naming Strategies
sidebar_position: 4
---

API -> Kebab Case
ADMIN -> Pascal Case
SITE -> Pascal Case

Name blocks more like what they are rather than what they contain. This excepts basic blocks like "LinkBlock" or "HeadlineBlock."

Naming should end with ".block" in API with Kebab Case or "Block" in Pascal Case.

#### Headline Example

API:
headline.block.ts

ADMIN:
HeadlineBlock.tsx

SITE:
HeadlineBlock.tsx

——

#### LinkList Example

API:
feature-list.block.ts
feature-list-item.block.ts

ADMIN:
FeatureListBlock.tsx
FeatureListItemBlock.tsx

SITE:
FeatureListBlock.tsx
FeatureListItemBlock.tsx

## Folder Structure:

### API

Every block in API should be in his specific folder. This prevents endless nesting. In this folder, there is just the API block and an optional migration folder with a counted number in name at first (example: 1-add-configurable-image-settings.migration.ts).

The folder naming is Camel Case.

#### Example (Blocks Folder)

headingSection (heading-section.block.ts)
imageSlider (image-slider.block.ts)
imageSliderItem (image-slider-item.block.ts)
media (media.block.ts)
fullWidthImage (full-width-image.block.ts)
fullWidthImageContent (full-width-image-content.block.ts)

### ADMIN

No folders necessary.

#### Example (Blocks Folder)

HeadingSectionBlock.tsx
ImageSliderBlock.tsx
ImageSliderItemBlock.tsx
MediaBlock.tsx
FullWidthImageBlock.tsx
FulWidthImageContentBlock.tsx

### SITE (Same as ADMIN)

No folders necessary.

#### Example (Blocks Folder)

HeadingSectionBlock.tsx
ImageSliderBlock.tsx
ImageSliderItemBlock.tsx
MediaBlock.tsx
FullWidthImageBlock.tsx
FulWidthImageContentBlock.tsx