# Overview

This is a static website for the TCE Research Conclave 2026, a National Level Research Conclave focusing on Digital Transformation and Sustainable Innovation in Engineering and Science. The event is hosted by Thiagarajar College of Engineering (TCE) in Madurai and is scheduled for March 26-27, 2026. The website serves as an information portal and registration platform for the academic conference.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Single Page Application (SPA)**: Built as a static HTML website with smooth scrolling navigation between sections
- **Responsive Design**: Uses Bootstrap 5.3.0 framework for mobile-first responsive layout
- **CSS Architecture**: Custom CSS with CSS custom properties (variables) for consistent theming and maintainability
- **Icon System**: Bootstrap Icons library for consistent iconography throughout the interface

## Design System
- **Color Palette**: Defined through CSS custom properties with primary blue (#0d6efd), secondary gray, and semantic colors for different UI states
- **Typography**: System font stack using Segoe UI with fallbacks for cross-platform compatibility
- **Spacing & Layout**: Bootstrap's grid system and utility classes for consistent spacing
- **Visual Effects**: CSS gradients for hero sections and interactive elements with smooth transitions

## Component Structure
- **Navigation Bar**: Fixed-top responsive navbar with brand logo and smooth-scroll menu links
- **Hero Section**: Full-viewport hero with background image/gradient overlay and centered content
- **Content Sections**: Modular sections for About, Call for Papers, Speakers, Important Dates, and Registration
- **Asset Management**: Organized asset structure with dedicated images directory

## Styling Approach
- **Custom Properties**: Centralized theme management through CSS variables for colors, fonts, spacing, and effects
- **Component-based CSS**: Modular styling approach with section-specific classes
- **Responsive Design**: Mobile-first approach using Bootstrap's breakpoint system
- **Performance**: Minimal external dependencies, optimized for fast loading

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework for responsive design and UI components
- **Bootstrap Icons**: Icon library for consistent iconography across the interface

## CDN Services
- **Bootstrap CDN**: Hosted CSS and JavaScript files for Bootstrap framework
- **Bootstrap Icons CDN**: Hosted icon font files for UI icons

## Asset Requirements
- **TCE Logo**: SVG format logo file expected at `assets/images/tce-logo.svg`
- **Hero Background**: Background image or gradient system for hero section visual appeal

## Browser Compatibility
- Modern browser support through CSS Grid, Flexbox, and CSS Custom Properties
- Progressive enhancement approach for older browser fallbacks