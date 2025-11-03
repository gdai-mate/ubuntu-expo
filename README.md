# Ubuntu Expo Website

A stunning website for Ubuntu Expo - an art, culture, and music festival on Minjerribah (Stradbroke Island).

## About

Ubuntu Expo celebrates the philosophy of "I am because we are" by bringing together artists, musicians, and community through shared experiences of art, music, photography, and cultural celebration.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Hero Section**: Full-screen hero with next event information
- **Image Gallery**: Filterable masonry gallery showcasing Ubuntu I & II events
- **About Page**: Detailed information about Ubuntu philosophy and values
- **Contact Form**: Easy-to-use contact form for sponsors, artists, and media
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Custom Color Palette**: Earthy tones inspired by ochre and Indigenous art

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Vercel**: Deployment platform (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ubuntu-expo.git
cd ubuntu-expo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
ubuntu-expo/
├── app/
│   ├── about/          # About page
│   ├── gallery/        # Gallery with filtering
│   ├── contact/        # Contact form
│   ├── layout.tsx      # Root layout with nav/footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles & color palette
├── components/
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/         # Event images
└── README.md
```

## Color Palette

- **Background**: `#1a0f0a` - Deep black
- **Foreground**: `#f5e6d3` - Cream
- **Primary**: `#d4a354` - Ochre gold
- **Secondary**: `#8b3a2e` - Burnt red
- **Accent**: `#c8a858` - Golden yellow
- **Muted**: `#3d2a1f` - Deep brown

## Adding Images

1. Place images in `public/images/ubuntu-ii/` or `public/images/ubuntu-i/`
2. Update the image arrays in:
   - `app/page.tsx` (homepage preview)
   - `app/gallery/page.tsx` (full gallery)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## Environment Variables

Currently, no environment variables are required. When you add a contact form backend, you'll need:

```env
NEXT_PUBLIC_CONTACT_API_URL=your-api-endpoint
```

## Future Enhancements

- [ ] Backend integration for contact form
- [ ] Newsletter signup
- [ ] Event ticket purchasing integration
- [ ] Artist/performer profiles
- [ ] Blog/news section
- [ ] More images from Ubuntu I

## Acknowledgment

We acknowledge the Traditional Custodians of Minjerribah, the Quandamooka People, and pay our respects to Elders past, present, and emerging.

## License

© 2025 Ubuntu Expo. All rights reserved.

## Contact

- Instagram: [@ubuntu.expo](https://www.instagram.com/ubuntu.expo)
- Website: [ubuntuexpo.com.au](https://ubuntuexpo.com.au)
