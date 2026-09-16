# Personal Portfolio Website

A responsive single-page web application showcasing my background, interactive work history timeline, projects, and contact details. Built with React, Vite, and React Router.

## Features

- **Interactive Timeline & Work History**: Browse career milestones and project releases by year, complete with active year highlighting, thumbnail previews, and external project links.
- **Categorized Color-Coding**: Visual badges identifying different event types (e.g., study, work, hobbies).
- **Persistent Sidebar Navigation**: Fast, client-side routing using React Router without full page reloads.
- **Clean Responsive Layout**: Dual-panel design separating static navigation from dynamic content views.

## Component Structure

- **`Navigation`**: Persistent sidebar with active-link indicators for seamless page navigation.
- **`About`**: Developer intro summary, background highlights, and core skills breakdown.
- **`Timeline`**: Vertical year selector (2014–2026) featuring dynamic route-matching indicators.
- **`WorkHistory`**: Dynamic view rendering detailed event cards, thumbnail media, descriptions, and color-coded badges based on the selected year parameter.

## Tech Stack

- **Frontend**: React 18, HTML5, CSS3
- **Build Tooling**: Vite
- **Routing**: React Router DOM (`v6+`)
- **Icons**: React Icons / Custom SVG assets
