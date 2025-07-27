# Dr. Joyal S – Personal Medical Website

This repository contains a lightweight React‐powered personal website for **Dr. Joyal S**, a physician specialising in diabetes, lifestyle disorders and metabolic health. The site is optimised for fast, mobile‑friendly browsing and includes a simple blog, contact form, appointment links and WhatsApp chat widget.

## Features

- **React & Tailwind**: Built using React and styled with TailwindCSS via CDN. There are no heavy build tools; the code runs in the browser with Babel.
- **Responsive design**: Works across desktops, tablets and smartphones.
- **SEO friendly**: Each page updates the document title and meta description for search engines.
- **Blog**: Ten placeholder articles stored in `posts.js`. Update or add posts easily.
- **Appointment booking**: Easily embed your Calendly booking page or link to another scheduling tool.
- **Contact form**: Integrates with Formspree (replace the action URL with your own form ID).
- **WhatsApp widget**: A floating button links visitors directly to your WhatsApp for instant chat.
- **Map embed**: Shows the location of Sivagangai, Tamil Nadu on Google Maps (no API key required).

## Directory structure

```
dr-joyal-website/
├── index.html      # Main HTML page containing meta tags and script includes
├── app.js          # React code for pages, routing and components
├── posts.js        # Blog post data (array of objects)
└── README.md       # This file
```

## Customisation

### Blog Posts

Open **`posts.js`** and modify the `blogPosts` array. Each entry has a `slug`, `title`, `date`, `excerpt` and `content`. Use Markdown‑like HTML in the `content` field. When you add a new post, ensure the `slug` is unique and URL‑friendly (use hyphens instead of spaces).

### Contact Form

The contact form uses Formspree. To connect it to your email:

1. Sign up at [Formspree](https://formspree.io/) and create a new form.
2. Copy the form’s **endpoint URL** (looks like `https://formspree.io/f/xyzabc`).
3. In **`app.js`**, search for `your-form-id` and replace the entire action URL with your own.

### WhatsApp Widget

Replace the `phoneNumber` variable in the `WhatsAppWidget` component with your WhatsApp number (e.g., `+919876543210`). Update the default message if desired.

### Calendly Integration

Currently the site does not include an inline Calendly widget. To add one:

1. Create a Calendly link at [calendly.com](https://calendly.com/) and copy your scheduling page URL.
2. Inside `app.js`, you can embed the widget using an `<iframe>` similar to the Google Maps embed or add a dedicated page/component. For example:

```jsx
<div className="w-full h-96">
  <iframe
    src="https://calendly.com/your-username/appointment"
    style={{ width: '100%', height: '100%', border: 0 }}
    frameBorder="0"
    scrolling="no"
    title="Book appointment"
  ></iframe>
</div>
```

3. Create a new route (e.g., `/appointments`) and render the widget there, or place it on the home or services page.

### Favicon and Photo

The favicon is currently an emoji. You can replace it with a custom icon by updating the `<link rel="icon">` element in `index.html`. For the homepage hero image, swap the `src` attribute of the `<img>` tag in the `Home` component with your own photograph or illustration.

## Development

This project does not require any build steps or npm packages. To preview the site locally:

1. Ensure you have Python installed.
2. Run a simple HTTP server from the project directory:

```bash
python3 -m http.server 8000 --directory dr-joyal-website
```

3. Open `http://localhost:8000` in your browser.

## Deployment (Vercel)

You can deploy this static site for free using [Vercel](https://vercel.com/):

1. Sign in to Vercel and create a new project.
2. Import this repository from GitHub or upload the folder directly using the “Import Git Repository” option.
3. Vercel will detect it as a **static site**. When asked for a framework, choose **Other** or **Static**.
4. Set the `build` command to `none` (empty) and the output directory to the root (`/`). Vercel will serve the files as they are.
5. Once deployed, you’ll receive a live URL. You can assign a custom domain if desired.

Alternatively, use the Vercel CLI:

```bash
npx vercel --prod
```

Follow the prompts to log in and select a scope. When asked for a project name and directory, specify the path to `dr-joyal-website` and choose “static” for the framework. Vercel will then upload and deploy your site.

## Updating Content

Because the site is completely static, updating content is as simple as editing the files (`index.html`, `app.js`, `posts.js`) and redeploying. No build step is needed.

## License

This project is provided as‑is for educational and personal use. Feel free to customise it for your own practice. Do not resell or redistribute without permission.