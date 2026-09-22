# Personal Portfolio Website

A responsive single-page web application showcasing my background, interactive work history timeline, software engineering projects, game development portfolio, and contact details. Built with React, Vite, and React Router.

## Features

- **Persistent Sidebar Navigation**: Fast, client-side routing using React Router without full page reloads.
- **Interactive Timeline & Work History**: Browse career milestones and project releases by year, complete with active year highlighting, thumbnail previews, and external project links.
- **Categorized Color-Coding**: Visual badges identifying different event types (e.g., study, work, hobbies).
- **Interactive Software Showcase**: Interactive grid of software projects featuring direct live demo links and pop-up slide panels with custom image carousels.
- **Game Development Gallery & Carousel**: Filterable game showcase categorized by project type (Featured, Prototypes, Studies, Card Games, Professional Work) featuring numerical `gameId` sorting and interactive horizontal carousel controls with dynamic scroll-boundary detection.
- **Smart Card Interactivity**: Cards with slideshow media open detailed image viewers on click, while media-less projects remain clean and non-interactive with direct links.
- **Clean Responsive Layout**: Dual-panel design separating static navigation from dynamic content views.

## Component Structure

- **`Navigation`**: Persistent sidebar with active-link indicators for seamless page navigation.
- **`About`**: Developer intro summary, background highlights, and core skills breakdown.
- **`Timeline`**: Vertical year selector featuring dynamic route-matching indicators.
- **`WorkHistory`**: Dynamic view rendering detailed event cards, thumbnail media, descriptions, and color-coded badges based on the selected year parameter.
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
