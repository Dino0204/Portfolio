# Portfolio — AI Context

## Important Rule

Always respond in Korean.

## Figma Rule

Always use the Figma MCP (`mcp__figma-remote-mcp__*`) to access file `EVEBsKeLqq6Ry9gOgywJFO` (김준혁 포트폴리오).

- **포트폴리오 - pdf** (node `0:1`): Source of truth for personal info/content — read-only reference
- **포트폴리오 - web** (node `594:27`): Target canvas — all web design work goes here
  - **SG section**: Design system style guide lives inside the `포트폴리오 - web` page

Pull personal content from `포트폴리오 - pdf`. Design system lives in `포트폴리오 - web` → SG section.

---

## About Dino

- **Name**: 김준혁 (Kim Joonhyeok) — "Dino"
- **Role**: Frontend Developer, job seeker
- **School**: 광주소프트웨어마이스터고등학교 (graduating ~Jan 2027)
- **Born**: 2008.02.04 (17 years old)
- **Contact**: kimjoonhyeok.dino@gmail.com | 010-8217-6450
- **GitHub**: https://github.com/Dino0204
- **Tistory**: https://dino0204.tistory.com/
- **Velog**: https://velog.io/@dino0204/posts
- **Military**: 산업기능요원으로 복무 가능

---

## Design Context

### Brand Personality

Minimal & clean personal portfolio for a 17-year-old Korean frontend developer who codes at a professional level. The site itself must signal engineering quality — restrained, typography-first, with purposeful motion. Not a resume template; a demonstration of craft.

**References**: bokoko33.me (technical execution, scroll-driven motion), endfield.gryphline.com (cinematic art direction)
**Anti-references**: Generic resume templates, Bootstrap grids, overcrowded layouts, heavy gradients, decoration-for-its-own-sake

---

### Design Principles

1. **Craft through restraint** — every element earns its place; nothing gratuitous
2. **The site IS the portfolio** — technical execution signals engineering quality
3. **Typography-first hierarchy** — type scale and weight carry the design
4. **Motion is purposeful** — scroll-driven, considered interactions; never showy
5. **Both modes feel native** — light and dark designed in parallel, not as an afterthought

---

### Color Tokens

#### Neutral Scale

| Token              | Light     | Dark      |
| ------------------ | --------- | --------- |
| `background`       | `#F9F9F8` | `#0C0C0B` |
| `surface`          | `#FFFFFF` | `#161614` |
| `foreground`       | `#0C0C0B` | `#F9F9F8` |
| `muted-foreground` | `#71716A` | `#9B9B93` |
| `border`           | `#E5E5E1` | `#262624` |

#### Accent

| Token               | Light     | Dark      |
| ------------------- | --------- | --------- |
| `accent`            | `#1E3A8A` | `#60A5FA` |
| `accent-foreground` | `#FFFFFF` | `#0C0C0B` |

#### Brand Links

| Token     | Value     |
| --------- | --------- |
| `github`  | `#24292E` |
| `tistory` | `#EB531F` |
| `velog`   | `#20C997` |

---

### Typography

**Primary font**: SUIT Variable (Korean-first, weights 100–900)
**Secondary font**: Pretendard Variable (UI chrome, labels)

| Token       | Size | Weight | Line Height | Usage                        |
| ----------- | ---- | ------ | ----------- | ---------------------------- |
| `display`   | 80px | 700    | 0.95        | Hero name, large impact text |
| `heading-1` | 48px | 700    | 1.1         | Page section titles          |
| `heading-2` | 32px | 600    | 1.2         | Subsection headers           |
| `heading-3` | 24px | 600    | 1.3         | Card titles                  |
| `body-lg`   | 18px | 400    | 1.6         | Lead paragraph               |
| `body`      | 16px | 400    | 1.6         | Body text                    |
| `body-sm`   | 14px | 400    | 1.5         | Secondary info               |
| `caption`   | 12px | 400    | 1.5         | Labels, tags                 |
| `micro`     | 11px | 400    | 1.4         | Fine print, timestamps       |

---

### Spacing (4px base unit)

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`

---

### Border Radius

| Token         | Value  | Usage                  |
| ------------- | ------ | ---------------------- |
| `radius-sm`   | 4px    | Tags, chips            |
| `radius-md`   | 8px    | Cards, inputs          |
| `radius-lg`   | 12px   | Modals, large surfaces |
| `radius-full` | 9999px | Pills, avatars         |

---

### Shadows (light mode)

| Token       | Value                          |
| ----------- | ------------------------------ |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)`   |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.08)`  |
| `shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` |

---

## Key Content (from Figma PDF)

### Skills

Next.js, React, React Native, TypeScript, Tanstack Query, Axios, Tailwind CSS, React Three Fiber, Zod, React Hook Form, Vercel

### Projects

| Project | Description                                                    |
| ------- | -------------------------------------------------------------- |
| GSMC    | School certification platform — 160+ users, 92% time reduction |
| 돈돈이  | Youth financial literacy with gamification — 80+ users         |
| DARAM   | Integrated school management system — CPO + Frontend           |
| SSD     | IoT elderly isolation prevention — React Native + Raspberry Pi |

### Awards

과학기술정보통신부 장관상, 우수상 × 2, 장려상 × 2
