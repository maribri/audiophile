
# Audiophile E-store Demo Project

## 🔗 [**Live Demo**](https://maribri.github.io/audiophile-temp/dist/index.html)

**TechStack:** HTML5, SCSS, Vanilla JS, Gulp.

This is the website of an online audio equipment store. It includes catalog and product pages, a shopping cart, and a checkout page. It's just static HTML pages with no backend.

**Note:** I intentionally didn’t use any JS frameworks in this project because my goal was to showcase my proficiency in HTML separately, as well as the skill of using Vanilla JS without relying on additional libraries. In a commercial environment, I'd typically use a framework for speed and convenience.

Below is a curated list of features and best practices that allows you to quickly appreciate the quality of the code.

## Features

### 1. 📱**Mobile-first**

- **Mobile-first workflow** ensuring optimal performance and usability across all devices.

### 2. 📐 Fully Scalable and Adaptive UI

- **Responsive mobile design** using viewport width (`vw`) units for seamless **scaling**.
- **Adaptive tablet and desktop layouts** using `rem` units.

### 3. 🏷️ Modular CSS with BEM

- Modular CSS structure adhering strictly to the Block, Element, Modifier (BEM) methodology.
- Using of classes [mixing](https://en.bem.info/forum/4/) to promote reusability and maintainability.

### 4. 📂 Organized SCSS Partials

- SCSS code structured into partials (_cart-list.scss, _scaffolding.scss, _button.scss, _gallery.scss, _field.scss) to enhance clarity and simplify maintenance.

### 5. ⚙️ Advanced SCSS Functions and Mixins

- Custom SCSS functions automatically convert pixel (`px`) values to scalable `vw` and `rem` units, boosting maintainability and readability.
- Use of Mixins and Functions in SCSS to promote code reusability.
- Implementation of `@extend` to keep the SCSS DRY (Don't Repeat Yourself).

### 6. 🎯 Accessibility from the Keyboard

- All interactive elements fully navigable via keyboard.
- Styled `:focus` states ensuring excellent UX for keyboard users.

### 7. 🔳 Modal UX Usability

- Enhanced user experience with modals closable via ESC key.

### 8. 🎙️ Screen Reader Accessibility

- Comprehensive use of `aria` attributes to support users relying on assistive technologies.
- Precise descriptive `alt` attributes

### 9. 📸 Modern Picture Element Usage

- Efficient loading and responsive image handling with the HTML `<picture>` element with `srcset`.
- Support for modern image formats like WebP and AVIF to optimize performance.

### 10. 🎨 SVG Sprite for Icons

- Efficient SVG icon management with a single sprite.
- Dynamic icon coloring directly controlled via CSS for flexibility and performance.

### 11. 📌 Semantic HTML

### 12. ✅ Tested with Lighthouse and WC3

## Setup Instructions

**Live Demo:** You can see a live demo of this project [here](https://maribri.github.io/audiophile-temp/dist/index.html).

To set up this project locally, follow these simple steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/maribri/audiophile.git
   cd audiophile
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Project:**
   ```bash
   npm run dev
   ```

The project will be running locally at `http://localhost:3009` with live-reloading enabled.
