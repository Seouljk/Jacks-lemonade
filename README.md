# Jack's Lemonade Website

A complete implementation of the Jack's Lemonade website design, based on the Claude Design canvas file.

## Project Structure

```
jacks-lemonade/
├── index.html              # Main website file
├── assets/                 # Image assets directory
│   ├── cup-tamarind.png   # Tamarind lemonade product image
│   └── monsoon-sips.png   # Monsoon Sips promotional image
├── README.md              # This file
└── .claude/               # Claude Code configuration
```

## Getting Started

### Running the Website

1. **Option 1: Open directly in browser**
   - Simply open `index.html` in your web browser
   - All styling and interactivity are built-in

2. **Option 2: Run a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   Then visit `http://localhost:8000`

## Features Implemented

### Header
- Sticky navigation with logo and brand name
- Navigation links: About, Menu, Find a Branch
- Mobile-responsive menu

### Hero Section
- Bold headline with custom typography
- Decorative shapes and elements
- Call-to-action buttons
- Color scheme: Yellow (#FFD21A), Dark Green (#0F4A26)

### About Section
- Family story and brand messaging
- Featured product image (cup-tamarind.png)
- Feature badges

### Menu Section
- **Two display modes** (switchable via JavaScript):
  - **Tabs mode**: Browse by family with tabbed interface
  - **Accordion mode**: Expandable family sections
- 5 flavor families with 30+ flavors total:
  - Jack's Special Lemonade (5 flavors)
  - Dad John's Tea Lemonade (4 flavors)
  - Mom Jenny's Herb Lemonade (5 flavors)
  - Sis Julia's Fruit Lemonade (7 flavors)
  - Baby James' Sweet Lemonade (2 flavors)
- Seasonal feature (Monsoon Sips)
- Family Delights bottled beverages
- Pricing display (placeholder)

### Branches Section
- Location cards for 5 Metro Manila branches
- Mall names, cities, and notable features
- "Coming Soon" locations

### Footer
- Social media links (Facebook, Instagram)
- Brand tagline and contact info
- Copyright notice

## Customization

### JavaScript Controls

The menu controller is exposed globally for easy testing/customization:

```javascript
// Toggle between tabs and accordion menu
window.toggleMenuMode()

// Show/hide seasonal section
window.toggleSeasonal()

// Show/hide prices
window.togglePrices()
```

### Color Palette

Update these colors in the CSS:
- `#FFFBEE` - Cream/off-white background
- `#FFD21A` - Yellow accent
- `#0F4A26` - Dark green primary
- `#2E7D3E` - Medium green accent
- `#1D3B26` - Dark text

### Fonts

Using Google Fonts:
- **Baloo 2** - Bold headings (weights: 500, 600, 700, 800)
- **Caveat** - Handwriting style accents (weights: 500, 600, 700)
- **Nunito** - Body text (weights: 400, 600, 700, 800)

## Image Assets

Two images are referenced and need to be added to the `assets/` folder:

1. **assets/cup-tamarind.png** - Product image for the About section
   - Recommended: Circular image of a tamarind lemonade cup
   - Used in the About section with circular frame styling

2. **assets/monsoon-sips.png** - Promotional image for seasonal menu
   - Recommended: Monsoon Sips collection image
   - Used in the Menu section

If images are not present, the website will still display but show broken image placeholders. Add the PNG files to the `assets/` folder to complete the design.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Fully responsive design that works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with grid/flexbox
- **Vanilla JavaScript** - No frameworks required
- **Google Fonts** - Typography

## Responsive Features

- Sticky header with responsive navigation
- CSS Grid with auto-fit for branch cards
- Flexible typography using `clamp()` for scalable font sizes
- Mobile-first approach
- Touch-friendly interactive elements

## Future Enhancements

- Add real pricing data
- Integrate with location/map services
- Add "Order Online" functionality
- Connect social media feeds
- Analytics tracking
- Contact form
- Newsletter signup
- Product image gallery

## Design Credits

Design by: Claude Design
Implementation by: Claude Code
Brand: Jack's Lemonade (Pro-bono project)
