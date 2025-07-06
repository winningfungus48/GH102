# Game Hub - Web-Based Gaming Platform

A modern, responsive web application featuring a collection of fun games built with React and Vite.

## Features

- 🎮 **Game Collection**: Browse and play various web games
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎯 **Category Filtering**: Organize games by categories
- 🚀 **Fast Performance**: Built with Vite for optimal loading speeds
- 🔗 **Clean URLs**: SEO-friendly routing with React Router

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Update `vite.config.js` base path:
   ```js
   base: '/your-repo-name/'
   ```
2. Build: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

### Custom Domain

1. Update `package.json` homepage field with your domain
2. Update `public/index.html` meta tags with your domain
3. Configure your hosting provider's DNS settings
4. Deploy the `dist` folder

## Project Structure

```
src/
├── components/          # React components
│   ├── GameCard.jsx    # Game card component
│   ├── Game.jsx        # Individual game wrapper
│   ├── HomePage.jsx    # Main hub page
│   └── *.css           # Component styles
├── games/              # Individual game implementations
│   └── numberle/       # Numberle game
├── data/               # Game data and configuration
└── assets/             # Static assets
```

## Adding New Games

1. Create a new folder in `src/games/`
2. Add your game component
3. Update `src/data/gamesData.js` with game information
4. Add the game to the appropriate categories
5. Update `src/components/Game.jsx` to include your game

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and prepare for deployment

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with modern features
- **ES6+** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes! 