# ui

### color system

```css
:root {
  /* L=0.7, C=0.14, H=113 */
  --accent: oklch(0.7 0.14 113);
}

.error {
  /* oklch(0.7 0.14 15) */
  background: oklch(from var(--accent) l c 15);
}

.button:hover {
  /* oklch(0.8 0.14 113) */
  background: oklch(from var(--accent) calc(l + 0.1) c h);
}
```

- placeholder: text-fg-rev/50
- default item hover: bg-border/50

### Dialog & Drawer & Sheet

- Dialog is centered on the screen and used for important information or actions that require user attention.

- Drawer slides up from the bottom of the screen and is typically used for mobile screens.

- Sheet slides in from the side of the screen and is often used for desktop screens.

