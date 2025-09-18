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



