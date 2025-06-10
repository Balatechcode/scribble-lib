# ✍️ Scribble Underline Library

A lightweight JavaScript library to add animated, SVG-based, hand-drawn underline effects to any HTML element using custom paths and GSAP animations.

---

## ✅ Features

- 🎨 Predefined scribble paths: `underline`, `wave`, `zigzag`, `scribble`
- 🔁 Animation types: `draw`, `glow`, `bounce` (with infinite repeat option)
- 🛠️ Customizable stroke color, width, easing, duration, repeat delay
- ⚙️ Animation triggers: `load`, `hover`, `click`
- 🧩 Support for custom SVG path data
- 📦 Works with plain JS + GSAP (no framework required)

---

## 📁 Folder Structure

```
scribble-underline/
│
├── index.html           # Demo HTML file
├── scribble-svg.js      # Main library file
├── scribble.css         # Wrapper styles
└── README.md            # You're here!
```

---

## 🛠️ Requirements

> ❗ Must be run from a local or remote server — not from `file://`

### Option 1: Using VS Code Live Server (Recommended)
1. Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → "Open with Live Server"

### Option 2: Use Python HTTP Server

```bash
python -m http.server
```

Navigate to `http://localhost:8000`

---

## ⚙️ Setup & Usage

### 1. Include GSAP + Library

```html
<!-- GSAP CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<!-- Your JS Module -->
<script type="module">
  import { ScribbleSVG } from './scribble-svg.js';
  window.addEventListener('DOMContentLoaded', () => {
    ScribbleSVG.init(); // Auto-initialize all elements with data-animation
  });
</script>
```

```html
<script src="https://cdn.jsdelivr.net/gh/Balatechcode/scribble-lib/scribble-svg.js"></script>
```

---

### 2. Add Markup

```html
<h2
  data-animation="draw"
  data-path="wave"
  data-stroke="red"
  data-stroke-width="2"
  data-offset-y="5"
  data-trigger="hover"
  data-repeat="true"
  data-repeat-delay="1"
  data-duration="1.5"
  data-ease="power2.out"
>
  Hello Scribble
</h2>
```

---

## 🧩 Available `data-*` Attributes

| Attribute             | Type      | Description |
|----------------------|-----------|-------------|
| `data-animation`      | `string`  | `draw`, `glow`, `bounce` |
| `data-path`           | `string`  | `underline`, `wave`, `zigzag`, `scribble` or custom path |
| `data-stroke`         | `string`  | Stroke color (`black`, `#ff00ff`, etc.) |
| `data-stroke-width`   | `number`  | Line thickness (e.g., `2`, `4`) |
| `data-offset-x`       | `number`  | Horizontal position shift (px) |
| `data-offset-y`       | `number`  | Vertical position shift (px) |
| `data-trigger`        | `string`  | `load`, `hover`, or `click` |
| `data-duration`       | `number`  | Animation duration (in seconds) |
| `data-ease`           | `string`  | GSAP easing name (e.g., `power1.inOut`) |
| `data-repeat`         | `boolean` | `"true"` to loop animation infinitely |
| `data-repeat-delay`   | `number`  | Delay between repeats (in sec) |

---

## ✨ Animation Types

### 🖊️ `draw`
Reveals the SVG path gradually using stroke dash technique.

### 💡 `glow`
Creates a pulsing glow around the path with drop shadow.

### 🪩 `bounce`
Applies a vertical bounce to the underline path.

---

## 📌 Example Snippets

### 🔄 Auto Repeat Glow on Load

```html
<p
  data-animation="glow"
  data-path="zigzag"
  data-stroke="blue"
  data-stroke-width="3"
  data-repeat="true"
>
  Glowing Line
</p>
```

---

### 🧪 Trigger Bounce on Hover

```html
<button
  data-animation="bounce"
  data-path="scribble"
  data-stroke="orange"
  data-stroke-width="2"
  data-trigger="hover"
  data-offset-y="-5"
>
  Hover Me
</button>
```

---

### ✍️ Custom Path Animation

```html
<h3
  data-animation="draw"
  data-path="M0,20 C20,40 40,0 60,20"
  data-stroke="#00cc99"
  data-stroke-width="2"
>
  Custom Path
</h3>
```

---

## 🎨 CSS

```css
.scribble-wrapper {
  display: inline-block;
  position: relative;
}
```

---

## 💡 Tips

- Want a new animation? Just add to `ScribbleAnimations` inside `scribble-svg.js`
- Supports nesting inside spans, buttons, h1-h6, paragraphs, etc.
- Works great on dark mode UIs with colored strokes

---

## 🚀 Future Plans

- Add animation presets like `shake`, `zoom`, `rotate`
- Build NPM version for modern apps
- Add React/Vue wrappers

---

## 🧑‍💻 Author

Crafted with ❤️ by Balakrishna Kolla
Inspired by scribbly UI effects and the creative web.

---

**Happy Scribbling ✍️**

