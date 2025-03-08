
# Aetheria Salon - React Website

This repository contains the source code for the Aetheria Salon website, built with React. It features a modern and interactive design with smooth transitions, responsive layouts, and various user-friendly components.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Styling](#styling)
- [Animations and Transitions](#animations-and-transitions)
- [Responsive Design](#responsive-design)
- [Contact Form](#contact-form)
- [Social Media Icons](#social-media-icons)
- [Image Carousel](#image-carousel)
- [Animated Icons](#animated-icons)
- [Scroll-Based Header](#scroll-based-header)
- [Footer](#footer)
- [Contributing](#contributing)
- #(Thnak You!)

## Project Overview

The Aetheria Salon website is designed to provide a visually appealing and user-friendly online presence for a beauty salon. It showcases services, galleries, team members, and contact information, enhancing user engagement and interactivity.

## Features

- **Modern and Interactive Design:** Smooth transitions, hover effects, and animated icons.
- **Responsive Layout:** Adapts seamlessly to different screen sizes.
- **Interactive Services Page:** Expandable service details with animated icons.
- **Image Carousel:** Displays gallery images with autoplay and smooth transitions.
- **Contact Form:** Allows users to send messages with form validation and success/error messages.
- **Social Media Integration:** Links to social media profiles with animated icons.
- **Scroll-Based Header:** Hides on scroll down, shows on scroll up.
- **Dynamic Footer:** Displays the current year in the copyright notice.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** For navigation and routing.
- **React Transition Group:** For CSS transitions.
- **Framer Motion:** For declarative animations.
- **React Responsive Carousel:** For the image carousel.
- **Font Awesome:** For icons.
- **CSS:** For styling and animations.

## Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]


2.  Navigate to the project directory:

    ```bash
    cd [project-directory]
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## Component Structure

  - `App.js`: Main application component with routing and layout.
  - `components/`:
      - `Header.js`: Navigation header with scroll-based visibility.
      - `Home.js`: Home page with hero section, services, testimonials, and gallery slider.
      - `Services.js`: Services page with interactive service details and animated icons.
      - `Gallery.js`: Gallery page (implementation may vary).
      - `About.js`: About page with salon information.
      - `Contact.js`: Contact page with a form and social media icons.
      - `Footer.js` (or in App.js): Dynamic footer with copyright notice.

## Styling

  - **CSS:** Styles are organized in separate `.css` files for each component.
  - **Responsive Design:** Media queries are used to ensure responsiveness.
  - **Animations:** CSS animations and transitions are used for interactive effects.

## Animations and Transitions

  - **Page Transitions:** Implemented using `react-transition-group` or `framer-motion`.
  - **Animated Icons:** CSS animations are used to rotate, pulse, bounce, and spin icons.
  - **Hover Effects:** CSS transitions are used for smooth hover effects.

## Responsive Design

  - **Media Queries:** Used extensively to adjust layouts and styles for different screen sizes.
  - **Flexible Widths:** Percentage widths and `max-width` are used for responsive elements.
  - **Grid Layouts:** Used for responsive grids of services, team members, and gallery images.

## Contact Form

  - **Form Validation:** Basic client-side validation is implemented.
  - **Form Submission:** Simulates sending data to a server (replace with your actual API call).
  - **Success/Error Messages:** Displays appropriate messages after form submission.

## Social Media Icons

  - **Animated Icons:** Animated GIF or WebP icons are used for social media links.
  - **Links:** Links to social media profiles with `target="_blank"` and `rel="noopener noreferrer"`.
  - **Hover Effects:** Icons scale up slightly on hover.

## Image Carousel

  - **`react-responsive-carousel`:** Used to create an image slider on the home page.
  - **Autoplay and Navigation:** Carousel includes autoplay, arrows, and infinite loop.
  - **Responsive Images:** Images are styled to maintain aspect ratio and fit within the carousel.

## Animated Icons

  - **CSS Animations:** `@keyframes` are used to define animations.
  - **Icon Variety:** Different animations are applied to various icons.
  - **Hover Effects:** Icon colors change on hover.

## Scroll-Based Header

  - **Visibility Toggle:** Header hides when scrolling down and shows when scrolling up.
  - **Smooth Transitions:** CSS transitions are used for smooth visibility changes.
  - **Hamburger Menu:** Responsive hamburger menu for small screens.

## Footer

  - **Dynamic Year:** Displays the current year in the copyright notice.
  - **Bottom Placement:** Uses Flexbox or Grid to ensure the footer sticks to the bottom of the page.
  - **Consistent Styling:** Matches the overall design aesthetic.

## Contributing

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes.
4.  Push to the branch.
5.  Submit a pull request.

#Thank You!
