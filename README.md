# RUSCA - Rutgers University Supply Chain Association

A modern, responsive one-page site for the Rutgers University Supply Chain Association (RUSCA). This version emphasizes the club’s mission, flagship programming, leadership, and a flexible content hub for supply chain news.

## 🚀 Highlights

- **Mission-first homepage** with goals, pillars, and contact shortcuts
- **Signature Events showcase** ready for high-quality photos from your event PDFs
- **Meet the Team** grid tailored for E-Board and committee directors
- **Insights Hub** with filterable cards for news, podcasts, and blogs
- **Enhanced contact experience** featuring newsletter signup and committee directory
- **Accessible & responsive** design with keyboard-friendly navigation and animations

## 📁 Project Structure

```
rusca/
├── assets/
│   └── images/
│       ├── events/          # Add event photos from the “Best Pictures” PDF
│       ├── team/            # Add executive board headshots here
│       └── logos/           # Store approved RUSCA branding assets
├── index.html               # Primary markup for the single-page site
├── styles.css               # Tailored theme, layout, and responsive styling
├── script.js                # Navigation, filtering, animation helpers
├── README.md                # Documentation and customization tips
├── Copy of Pictures Involvement Fair  .pdf
├── Copy of Copy of RUSCA_RBS Club Website Information Update Document.docx.pdf
└── Linktree QR.pdf
```

## 🎨 Section Overview

- **Hero** – Logo, mission statement, core pillars, and quick contact links
- **What We Do** – Summaries of professional development, corporate engagement, and leadership initiatives
- **Events** – Cards for GIM, Corporate Spotlights, Externships, Site Visits, and Annual Banquet with image slots
- **Meet the Team** – Editable cards for leadership roles, bios, and emails
- **Insights Hub** – Filterable area for news, podcasts, and blog posts (highly malleable)
- **Contact & Partnerships** – Newsletter form, committee directory, Linktree CTA, and highlights for membership/partners/location
- **Footer** – Brand statement plus quick navigation and follow links

> **Tip:** Each card or call-to-action includes inline comments and helper text so you know where to swap in real content.

## 🖼️ Working with Assets

1. Export photos from the PDFs provided by the club (PNG or JPG recommended).
2. Save files into the appropriate folders inside `assets/images/`.
3. Update the `<img>` `src` attributes in `index.html` to match the filenames you add.
4. Provide descriptive `alt` text for accessibility.

```
assets/images/
├── events/
│   ├── gim.jpg
│   ├── corporate-spotlight.jpg
│   └── ...
├── team/
│   ├── president.jpg
│   └── ...
└── logos/
    └── rusca-logo.png
```

## 🛠️ Customization Guide

### Text & Content
- Update copy directly in `index.html`
- Replace placeholder names/emails in the **Meet the Team** section
- Swap in real links for news/podcast/blog cards within the **Insights Hub**

### Colors & Theme
- Global color tokens live near the top of `styles.css` under the `:root` selector
- Adjust gradients, shadows, or border radii to align with updated brand guidelines

### Layout Tweaks
- Sections use CSS Grid for easy reordering of cards
- Media queries at 1024px, 860px, 768px, and 520px fine-tune responsiveness
- Animations can be disabled by removing the `.animation` block near the end of `styles.css`

## ⚙️ Development Workflow

### Requirements
- Modern browser (Chrome, Firefox, Safari, Edge)
- Optional: local web server for live reload or form testing

### Run Locally
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

## 🔁 Updating Dynamic Sections

- **Newsletter form** – Currently shows a thank-you alert; connect to a backend or Google Form as needed.
- **Insights Hub filters** – Buttons are wired via `script.js`; duplicate an existing `.news-card` and adjust the `data-category` attribute.
- **Navigation** – Links automatically highlight based on scroll position and close the mobile menu after selection.

## 📱 Responsive Experience

Tested breakpoints:
- **Large screens**: 1200px+
- **Tablets / small laptops**: 768–1199px
- **Mobile**: 320–767px

## 🤝 Contributing

1. Fork the repository or create a feature branch
2. Commit changes with clear messages
3. Run through responsive and accessibility checks
4. Submit a pull request for review

## 📧 Key Contacts

- **General**: rusca@rutgers.edu
- **Corporate**: corporate@rusca.rutgers.edu
- **Operations**: operations@rusca.rutgers.edu
- **Finance**: finance@rusca.rutgers.edu
- **Engagement**: engagement@rusca.rutgers.edu

## 📌 Future Enhancements

- CMS integration for news & events
- Automated photo gallery or carousel
- Embedded calendar for meetings and deadlines
- Podcast RSS feed integration
- Dark mode toggle

---

**Built with ❤️ for the Rutgers University Supply Chain Association**  
*Last updated: October 2025*


