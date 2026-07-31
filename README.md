## Minimalist Digital Clock

https://madc-clock.vercel.app/

![brave_22SMwOZESC](https://github.com/user-attachments/assets/9497758f-b416-454f-9125-e0e62970420f)

A minimalist digital clock with a pure black screen, fullscreen toggle support, and an optional date display.

### Features

- Black fullscreen-friendly layout
- Live updating 12-hour clock
- Click the clock to show or hide the date
- Double-click anywhere to toggle fullscreen
- Remembers the date visibility preference in `localStorage`
- Vercel Analytics integration

### Stack

- React 19
- Vite 8
- TypeScript 6
- Tailwind CSS 4
- React Helmet Async

### Architecture

```text
src/
  app/       # app shell and global styles
  pages/     # page-level entry points
  features/  # clock feature components, hooks, and formatters
  shared/    # shared hooks
```

### Commands

- `npm run dev`
- `npm run build`

### Notes

- Main entry: `src/main.tsx`
- App shell: `src/app/App.tsx`
- Clock UI: `src/features/clock/components/DigitalClockCard.tsx`
