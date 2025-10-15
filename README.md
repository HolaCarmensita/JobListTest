# JobylonList

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Live Demo

If hosted: `http://jobylonlist.netlify.app`

## Figma design

Figma file: `https://www.figma.com/proto/DveL8qex3jCyK37cDLZPsn/JobylonList?node-id=12-161&p=f&t=UkIAznF1oPXuRysJ-0&scaling=contain&content-scaling=fixed&page-id=0%3A1`

## Notes

**Design Decisions:**

- Used styled-components for styling
- Responsive mobile-first design with CSS Grid for job cards
- Accessibility focus: proper ARIA labels, keyboard navigation, focus states
- Color-coded "experience badges" for better visual

**Trade-offs:**

- No complicated UI for longer text for job card, therefore the formatJobData function
- No error handling or loading states to prioritized core functionality
- Limited responsive breakpoints to focused on desktop but worked from mobile to show you my regular workflow

**With More Time I would:**

- On hoover on Jobitem, a short description of the position could show. Would be super neat but no time now
- Add loading spinner, errormessages and error handling for API calls
- Add Tailwind instead of styled components due to more responsivenes built-in
- More animations and micro-interactions
- Include pagination/virtualization and lazy loading for larger lists
