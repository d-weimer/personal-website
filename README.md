# Personal Portfolio Website

A responsive single-page web application showcasing my background, interactive work history timeline, software engineering projects, and contact details. Built with React, Vite, and React Router.

## Features

- **Persistent Sidebar Navigation**: Fast, client-side routing using React Router without full page reloads.
- **Interactive Timeline & Work History**: Browse career milestones and project releases by year, complete with active year highlighting, thumbnail previews, and external project links.
- **Categorized Color-Coding**: Visual badges identifying different event types (e.g., study, work, hobbies).
- **Interactive Software Showcase**: Interactive grid of software projects featuring direct live demo links and pop-up slide panels with custom image carousels.
- **Smart Card Interactivity**: Cards with slideshow media open detailed image viewers on click, while media-less projects remain clean and non-interactive with direct links.
- **Clean Responsive Layout**: Dual-panel design separating static navigation from dynamic content views.

## Component Structure

- **`Navigation`**: Persistent sidebar with active-link indicators for seamless page navigation.
- **`About`**: Developer intro summary, background highlights, and core skills breakdown.
- **`Timeline`**: Vertical year selector featuring dynamic route-matching indicators.
- **`WorkHistory`**: Dynamic view rendering detailed event cards, thumbnail media, descriptions, and color-coded badges based on the selected year parameter.
- **`SEProjects`**: Interactive project gallery rendering software development project cards.
- **`SEProjectCard`**: Individual project card with thumbnail preview, title, description, live links, and conditional modal triggers based on media availability.
- **`SEProjectPanel`**: Detailed overlay modal featuring an interactive image slideshow, counter, and keyboard/backdrop navigation controls.

## Tech Stack

- **Frontend**: React 18, HTML5, CSS3
- **Build Tooling**: Vite
- **Routing**: React Router DOM (`v6+`)
- **Icons**: React Icons / Custom SVG assets
