# JobylonList

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Live Demo

If hosted: `http://jobylonlist.netlify.app`

## Notes

**Design Decisions:**

- Used styled-components for component-scoped CSS and theming
- Responsive mobile-first design with CSS Grid for job cards
- Accessibility focus: proper ARIA labels, keyboard navigation, focus states
- Color-coded experience badges for visual hierarchy

**Trade-offs:**

- No complicated UI for longer text for job card, therefore the formatJobData function
- No error handling or loading states - prioritized core functionality
- Limited responsive breakpoints - focused on desktop but worked from mobile to show you my regular workflow

**With More Time:**

- Add loading spinner, errormessages and error handling for API calls
- More animations and micro-interactions
- Include pagination/virtualization and lazy loading for larger lists
