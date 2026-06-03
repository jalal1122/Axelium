# Axelium Menuiseries

A high-performance, responsive showcase and catalog application for **Axelium Menuiseries**, a custom joinery (*menuiserie*) business based in Dunkerque, France. The platform highlights their premium product lines (windows, doors, sliding systems, and shutters) made of PVC, aluminum, and wood, allowing users to browse detailed specifications, examine technical designs, and request quotes.

---

## 1. Project Title & Overview
**Axelium Menuiseries** is a modern, single-page application (SPA) built for showcasing and managing a detailed showcase catalog of premium custom-built architectural products. It solves the challenge of displaying technical specifications, standard equipment, and section details of complex joinery products in an elegant, interactive format. By providing a clean interface with fluid animations, dynamic product routing, and direct email communication, Axelium streamlines the user journey from browsing to quote inquiries.

---

## 2. Architecture & Tech Stack
The project is built as a client-side SPA with a modern toolchain:

*   **Frontend**: 
    *   **React 19**: Core UI framework for component-based architecture.
    *   **Vite v7**: High-performance dev server and compiler.
    *   **Tailwind CSS v4**: Utility-first CSS styling using the new `@tailwindcss/vite` engine.
    *   **React Router (v7)**: Routing solution for client-side pages and dynamic product views.
    *   **GSAP & @gsap/react**: Animations for layout expansions (specifically the home page product range selector).
    *   **Swiper**: High-performance carousel for the homepage showcase.
    *   **React Head**: Head element manager for page-specific SEO meta-tags.
    *   **React Hot Toast**: Clean, reactive user feedback notifications.
    *   **React Icons**: Comprehensive SVG icon pack (e.g. FontAwesome icons).
*   **Backend & Integrations**: 
    *   **EmailJS**: Direct client-side SMTP integrations for form processing without a dedicated backend server.
    *   **Google Maps Embed API**: Visual interactive map for the Dunkerque office.
*   **Database**: 
    *   **Static Memory Catalog**: Complete structured catalog stored in-memory in Javascript arrays/objects (`src/products.js`), ensuring instant loading and sub-millisecond route transitions.
*   **DevOps & Tools**:
    *   **Vercel Routing configuration**: For SPA routing rewrites.
    *   **ESLint**: Integrated lint rules with ESLint 9 configuration.
    *   **Sitemap Generator script**: Node ESM script to dynamically generate search engine indexes pre-build.

---

## 3. Core Features
*   **Dynamic Product Catalog**: Programmatic routing dynamically matches parameters (`/product/:category/:pdName`) to filter specifications (thermal transmittance, sound insulation, gasket count, chamber depth), standard equipment lists, and technical designs.
*   **Interactive GSAP Product Panel**: Immersive home-page product selector using GSAP transitions to slide, expand, and swap active catalogs and panels smoothly.
*   **Automatic SEO Metadata Engine**: Integrated `SEO.jsx` wrapper feeding custom page titles, Open Graph (OG) tags, canonical tags, and Twitter Cards per route to maximize search index optimization.
*   **Automated Pre-build Sitemap**: Integrated ESM build script that reads catalog data and compiles search-engine compliant `sitemap.xml` records on every production build.
*   **Contact Form & Email Delivery**: Reactive email dispatcher powered by EmailJS, validating user details and giving toast feedback depending on transmission status.
*   **Embedded Geolocation**: Direct Google Maps interactive iframe pointing to the Dunkerque office (13 Rue Alfred Dumont 59140 Dunkerque).
*   **Swiper Carousel Landing**: Immersive hero header with autoplaying slides, fade animations, and dark overlay filters.

---

## 4. Project Structure
The tree below details the directory layout of the application:

```
axelium/
├── public/                 # Static assets (logo, icons, favicons)
├── scripts/
│   └── generate-sitemap.mjs # Prebuild script to generate sitemap.xml dynamically
├── src/
│   ├── assets/             # Product and section media (images & video clips)
│   ├── components/         # Reusable presentation and layout components
│   │   ├── Home/           # Hero, ProductRange, TrustSection, About sections
│   │   ├── Navbar/         # Submenus for doors, shutters, terrace systems, windows
│   │   ├── Footer.jsx      # Global site footer with links and details
│   │   ├── Navbar.jsx      # Global navigation header with mega menus
│   │   └── SEO.jsx         # Component injecting SEO and Open Graph metadata
│   ├── pages/              # Application page-level views
│   │   ├── Contact.jsx     # Contact form page with map and EmailJS integration
│   │   ├── Doors.jsx       # Dynamic doors product route
│   │   ├── Home.jsx        # Landing page layout wrapper
│   │   ├── Ideal.jsx       # IDEAL product line features and overview page
│   │   ├── Shutters.jsx    # Dynamic shutters product route
│   │   ├── TerraceSystems.jsx # Dynamic sliding systems product route
│   │   └── Windows.jsx     # Dynamic windows product route
│   ├── router/
│   │   └── router.jsx      # React Router routes definition
│   ├── App.jsx             # Core application entry component
│   ├── index.css           # Global CSS stylesheet (Tailwind v4 imports & custom styles)
│   ├── main.jsx            # DOM entrypoint
│   └── products.js         # Comprehensive static catalog data for all menuiserie lines
├── .env                    # Local environment variables
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML shell
├── package.json            # npm package dependencies and run scripts
├── vercel.json             # Vercel SPA routing rewrite configurations
└── vite.config.js          # Vite build engine configurations
```

---

## 5. Prerequisites & Environment Variables

### Prerequisites
*   **Node.js**: v18.0.0 or higher is required.
*   **npm**: v9.0.0 or higher.

### Environment Variables
Create a `.env` file in the root directory. The application consumes the following variables:

| Variable Name | Required | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | `ART4tZD9aS_voEnoJ` | The public API key issued by EmailJS for sending user inquiries. |
| `SITEMAP_BASE_URL` | No | `https://axelium.eu` | The base URL utilized during the automated pre-build sitemap generation script. |

---

## 6. Local Development & Installation

### Step 1: Clone the repository
Navigate into your local workspace directory.

### Step 2: Install dependencies
Use npm to download project modules:
```bash
npm install
```

### Step 3: Configure Environment
Create a `.env` file in the root directory and add your key:
```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

### Step 4: Run dev server
Launch Vite local development environment:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Step 5: Test & Lint
Run static analysis checks across codebase modules:
```bash
npm run lint
```

### Step 6: Build for Production
Compiles production bundles. The sitemap generation script runs automatically before the build starts:
```bash
npm run build
```
The optimized bundle files will output to the `/dist` directory.

### Step 7: Preview Bundle locally
Serve the built `/dist` directory locally:
```bash
npm run preview
```

---

## 7. API Reference
As a static React application, the project does not expose server-side endpoints, but it relies on key external API web-integrations:

### EmailJS Client API Integration
The application interfaces with EmailJS endpoints client-side in [Contact.jsx](file:///d:/University%20files/Programming/Clients/Mr.%20Oussama%20Maaroufi%20(France)/Axelium/src/pages/Contact.jsx):
*   **Method**: `emailjs.sendForm`
*   **Service ID**: `service_iu0pbcp`
*   **Template ID**: `template_dkid99g`
*   **Key**: `VITE_EMAILJS_PUBLIC_KEY` (Loaded from Environment)
*   **Data Fields Transmitted**:
    *   `name`: The contact's full name.
    *   `email`: The contact's email address.
    *   `phone`: The contact's telephone number.
    *   `message`: The body text of the joinery inquiry.
