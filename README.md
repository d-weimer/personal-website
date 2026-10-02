# Personal Portfolio Website

A responsive single-page web application showcasing my background, interactive work history timeline, software engineering projects, game development portfolio, and contact details. Built with React, Vite, and React Router.

## Features

- **Folder Tab UI Architecture**: Seamless dual-panel visual aesthetic mimicking physical folder tabs. The active navigation tab dynamically merges into the main content card using pure CSS `z-index` layering, negative margin overlaps, and background matching.
- **Persistent Sidebar Navigation & State Preservation**: Dynamic routing powered by React Router's `NavLink`. The `Navigation` component tracks route context via `useRef`, maintaining the active tab state and preserving the user's last-selected timeline year when switching between tabs.
- **Magnifying Lens Timeline Architecture**: Vertical timeline featuring a dual-layer JS/CSS clipping architecture (`clip-path: inset(...)`). As the active selection box slides smoothly over year items, text inside the box dynamically boldens like a magnifying lens.
- **Slot Machine Work History Scrolling**: Smooth, vertical reel/slot-machine scrolling transition in the `WorkHistory` container whenever a new year is selected, sliding past content out while bringing the selected year's milestones seamlessly into view.
- **Work History & Default Routing**: Career milestones default to the current year (`/work-history/2026`) via automatic route redirection (``), rendering detailed event cards, thumbnail previews, external links, and badge categories.
- **Categorized Color-Coding**: Visual badges identifying different event types (e.g., study, work, hobbies).
- **Interactive Software Showcase**: Interactive grid of software projects featuring direct live demo links and pop-up slide panels with custom image carousels.
- **Game Development Gallery & Carousel**: Filterable game showcase categorized by project type (Featured, Prototypes, Studies, Card Games, Professional Work) featuring numerical `gameId` sorting and interactive horizontal carousel controls with dynamic scroll-boundary detection.
- **Smart Card Interactivity**: Cards with slideshow media open detailed image viewers on click, while media-less projects remain clean and non-interactive with direct links.
- **Clean Responsive Layout**: Dual-panel design separating static navigation from dynamic content views.

## Component Structure

- **`Navigation`**: Persistent sidebar with active folder-tab indicators (`getLinkClass`), URL pattern matching (`location.pathname`), and year state preservation (`lastYearRef`) across tab switches.
- **`About`**: Developer intro summary, background highlights, and core skills breakdown.
- **`Timeline`**: Dual-layer pure JS (`React.createElement`) vertical year selector utilizing synchronous CSS `clip-path` inset clipping and `translateY` transitions for a sliding magnifying font-weight effect.
- **`WorkHistory`**: Dynamic reel-scrolling container rendering detailed event cards, thumbnail media, descriptions, and color-coded badges, animating smoothly vertically like a slot machine as the active year parameter changes.
- **`SEProjects`**: Interactive project gallery rendering software development project cards.
- **`SEProjectCard`**: Individual project card with thumbnail preview, title, description, live links, and conditional modal triggers based on media availability.
- **`SEProjectPanel`**: Detailed overlay modal featuring an interactive image slideshow, counter, backdrop dismissal, and embedded dots overlay navigation.
- **`GameDev`**: Main container for the game development section handling tab filtering, item sorting, and horizontal track scrolling.
- **`GameNavigation`**: Filter bar providing category navigation across game project types.
- **`GameCard`**: Uniformly-sized card component rendering game thumbnails, titles, multi-line truncated descriptions, and direct external project links.

## Tech Stack

- **Frontend**: React 18, HTML5, CSS3
- **Build Tooling**: Vite
- **Routing**: React Router DOM (`v6+`)
- **Icons**: React Icons / Custom SVG assets
- **Deployment**: GCP Compute Engine, Nginx, Certbot SSL, PM2
