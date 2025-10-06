# Dr. K Mametse – Website

A fast, modern, responsive single-page site built with plain HTML, CSS, and JavaScript.

## Preview
Open `index.html` directly in your browser, or serve the folder with any static server.

## Customize
- Update text in `index.html` (About, Services, Contact).
- Replace links (tel/email) in the Contact sections.
- Configure the contact form `action` with your Formspree endpoint or your backend.
- Update colors in `styles.css` by adjusting the `:root` CSS variables.
- Swap branding in the header (emoji/logo) and hero initials.

## Deploy
Any static hosting works:
- GitHub Pages
- Netlify (drag-and-drop)
- Vercel (New Project → import)
- Your cPanel/host (upload files)

## Assets
Create a folder named `assets` in the project root, then add your images:
- `assets/portrait.jpg` – main portrait on the home page
- `assets/clinic.jpg` – banner image on the services page (optional)
- `assets/office.jpg` – image on the contact page (optional)
You can use different filenames; if so, update the `src` paths in the HTML files.

### Gallery filenames
Place your images with these filenames to match the gallery placeholders:
- `assets/portrait-1.jpg`
- `assets/working-1.jpg`
- `assets/portrait-2.jpg`
- `assets/portrait-3.jpg`
- `assets/working-2.jpg`
- `assets/location-1.jpg`
- `assets/location-2.jpg`

## Contact Form
The form points to Formspree as a placeholder. Create a Formspree form and replace `https://formspree.io/f/your-id` with your endpoint. The JS also enhances UX with fetch and a status message.

## Tech
- No frameworks. Accessible, semantic HTML.
- Responsive CSS with a dark, professional aesthetic.
- Small JS for mobile menu, smooth scroll, and form enhancement.

## License
You may use and modify these files for Dr. K Mametse's website.
