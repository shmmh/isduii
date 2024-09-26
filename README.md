# Isduii - UI Element Inspiration Browser Extension

<img src="assets/icon.png" alt="Logo" width="100"/>

Isduii (I Suck at Design UI Inspiration) is a browser extension designed for developers and designers to effortlessly capture UI elements and components from various websites.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd isduii
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

### Development Setup

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the development build. For Chrome with Manifest V3, navigate to: `build/chrome-mv3-dev`.

### Editing the Extension

- **Popup**: Modify `popup.tsx` to edit the popup content. The extension will auto-update as you make changes.
- **Options Page**: To add an options page, create an `options.tsx` file in the project root with a default exported React component.
- **Content Script**: For a content page, create a `content.ts` file in the root, import necessary modules, implement logic, and reload the extension in your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/).

## Building for Production

Run the following command to create a production build:

```bash
pnpm build
# or
npm run build
```

This will generate a production bundle ready to be zipped and published to the web stores.
