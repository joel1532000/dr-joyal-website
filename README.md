# Dr. Joyal S – Personal Medical Website

This repository contains a fully static website for **Dr. Joyal S**, a licensed medical doctor specialising in diabetes, lifestyle disorders and metabolic health. The site is built with plain HTML and CSS to ensure fast load times and easy deployment on any static hosting service such as Vercel.

## Features

- **Mobile‑friendly design** – The layout uses flexible grids and a warm beige colour palette reminiscent of a welcoming clinic. It looks great on phones, tablets and desktops.
- **Simple navigation** – Pages include Home, About, Services, Blog and Contact. A floating WhatsApp button appears on every page for instant messaging.
- **SEO‑optimised pages** – Each page has its own descriptive title and meta description to improve search engine visibility.
- **Blog** – Ten educational articles about diabetes and lifestyle health are included in the `blog/` directory.
- **Contact form & map** – The contact page features a Formspree form (replace the action URL with your own form ID) and an embedded Google Map showing Sivagangai, Tamil Nadu.
- **No external dependencies** – All styling is contained in a single `styles.css` file. There are no external JavaScript frameworks or CDN links, so the site loads quickly even on limited networks.

## Directory structure

```
dr-joyal-website/
├── index.html        # Home page
├── about.html        # Biography and education
├── services.html     # Detailed description of services
├── blog.html         # Blog listing
├── contact.html      # Contact form and map
├── styles.css        # Global styles
├── placeholder.png   # Placeholder image for hero section
├── blog/             # Blog posts
│   ├── post1.html
│   ├── post2.html
│   ├── post3.html
│   ├── post4.html
│   ├── post5.html
│   ├── post6.html
│   ├── post7.html
│   ├── post8.html
│   ├── post9.html
│   └── post10.html
└── README.md         # This file
```

## Customisation

### Hero image

The home page uses `placeholder.png` as a temporary photograph. Replace it with your own image by overwriting the file with a `400×300` pixel image or adjusting the dimensions in `index.html` accordingly.

### Contact form

The contact form on `contact.html` posts to Formspree. To receive form submissions via email, create a form at [Formspree](https://formspree.io/) and replace the `action` URL in the form tag:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

Replace `your-form-id` with the ID provided by Formspree.

### WhatsApp button

Each page includes a floating WhatsApp button linking to `https://wa.me/919876543210`. Update the phone number to your own and customise the prefilled message as desired.

### Blog posts

Blog articles reside in the `blog/` directory. To edit a post, open the corresponding HTML file and modify the content. To add a new post, create a new file (e.g., `post11.html`) following the structure of the existing posts and add a corresponding card to `blog.html`.

## Running locally

Since there are no build steps, you can preview the site by starting a simple HTTP server. For example, using Python 3:

```bash
cd dr-joyal-website
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

## Deployment

Deploy the site on any static hosting platform (Vercel, Netlify, GitHub Pages, etc.) by pointing it to the root of this repository. On Vercel, choose **Other** or **Static** for the framework preset, leave the build command empty and set the output directory to the root (`/`). Vercel will automatically serve the files.

## Licence

This project is provided as‑is for educational and personal use. You are free to customise and deploy it for your own practice. Commercial redistribution or resale is not permitted without permission.