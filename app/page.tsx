'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const galleryImages = [
    { src: '/images/ubuntu-ii/chess-scene.jpg', alt: 'Chess under warm light' },
    { src: '/images/ubuntu-ii/butterfly-art.jpg', alt: 'Indigenous butterfly art' },
    { src: '/images/ubuntu-ii/botanical-art.jpg', alt: 'Botanical installation' },
    { src: '/images/ubuntu-ii/2AE85DC3-DB8F-43F1-81FC-411CCFCD3C7C-86619-00000D3FCD9C4744.JPG', alt: 'Community gathering' },
    { src: '/images/ubuntu-ii/248FFC77-9478-41C6-8ED6-3A55DB46E451-86619-00000D3A6BE9E23F.JPG', alt: 'Celebration' },
    { src: '/images/ubuntu-ii/67CCCC3F-56AD-4276-ADFC-3AA74CF8CA96-86619-00000D3AAE968FD6.JPG', alt: 'Community celebration' },
  ];

  return (
    <div className="bg-background w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Ubuntu Expo community gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        {/* Wobbly Image Shapes - Left Side (1 bigger, 1 smaller) */}
        <motion.div
          className="absolute left-10 top-1/4 w-48 h-48 opacity-70"
          whileHover={{ scale: 1.15, opacity: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <clipPath id="blob1">
                <path
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.8,88.2C-24.4,88.8,-40.8,86.9,-54.6,79.3C-68.4,71.7,-79.6,58.4,-86.2,43.2C-92.8,28,-94.8,11,-92.6,-5.4C-90.4,-21.8,-84,-37.6,-74.4,-50.8C-64.8,-64,-52,-74.6,-37.8,-81.6C-23.6,-88.6,-8.2,-92,6.4,-91.1C21,-90.2,30.6,-83.6,44.7,-76.4Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="30s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="d"
                    dur="15s"
                    repeatCount="indefinite"
                    values="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.8,88.2C-24.4,88.8,-40.8,86.9,-54.6,79.3C-68.4,71.7,-79.6,58.4,-86.2,43.2C-92.8,28,-94.8,11,-92.6,-5.4C-90.4,-21.8,-84,-37.6,-74.4,-50.8C-64.8,-64,-52,-74.6,-37.8,-81.6C-23.6,-88.6,-8.2,-92,6.4,-91.1C21,-90.2,30.6,-83.6,44.7,-76.4Z;
                            M51.2,-73.9C64.3,-64.9,71.8,-48.2,76.1,-31.8C80.4,-15.4,81.5,0.7,78.8,16.2C76.1,31.7,69.6,46.6,58.7,57.8C47.8,69,32.5,76.5,15.7,80.5C-1.1,84.5,-19.4,85,-37.4,79.9C-55.4,74.8,-73.1,64.1,-82.7,48.3C-92.3,32.5,-93.8,11.6,-91.2,-8.6C-88.6,-28.8,-81.9,-48.3,-69.5,-57.8C-57.1,-67.3,-39,-66.8,-22.4,-73.2C-5.8,-79.6,9.3,-93,26.1,-92.8C42.9,-92.6,38.1,-82.9,51.2,-73.9Z;
                            M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.8,88.2C-24.4,88.8,-40.8,86.9,-54.6,79.3C-68.4,71.7,-79.6,58.4,-86.2,43.2C-92.8,28,-94.8,11,-92.6,-5.4C-90.4,-21.8,-84,-37.6,-74.4,-50.8C-64.8,-64,-52,-74.6,-37.8,-81.6C-23.6,-88.6,-8.2,-92,6.4,-91.1C21,-90.2,30.6,-83.6,44.7,-76.4Z"
                  />
                </path>
              </clipPath>
            </defs>
            <image
              href="/images/ubuntu-ii/chess-scene.jpg"
              width="200"
              height="200"
              clipPath="url(#blob1)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute left-24 bottom-1/4 w-28 h-28 opacity-65"
          whileHover={{ scale: 1.25, opacity: 0.85 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <clipPath id="blob2">
                <path
                  d="M39.5,-67.3C50.9,-60.1,59.3,-49.4,65.8,-37.4C72.3,-25.4,76.9,-12.7,77.2,0.1C77.5,12.9,73.5,25.8,66.8,37.4C60.1,49,50.7,59.3,39.2,65.8C27.7,72.3,13.9,74.9,0.5,74C-12.9,73.1,-25.8,68.7,-37.4,62.1C-49,55.5,-59.3,46.7,-66.8,35.7C-74.3,24.7,-79,11.5,-78.8,-1.8C-78.6,-15.1,-73.5,-30.2,-65.3,-42.8C-57.1,-55.4,-45.8,-65.5,-33.2,-72C-20.6,-78.5,-6.9,-81.4,5.4,-79.4C17.7,-77.4,28.1,-74.5,39.5,-67.3Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 100 100"
                    to="0 100 100"
                    dur="25s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="d"
                    dur="18s"
                    repeatCount="indefinite"
                    values="M39.5,-67.3C50.9,-60.1,59.3,-49.4,65.8,-37.4C72.3,-25.4,76.9,-12.7,77.2,0.1C77.5,12.9,73.5,25.8,66.8,37.4C60.1,49,50.7,59.3,39.2,65.8C27.7,72.3,13.9,74.9,0.5,74C-12.9,73.1,-25.8,68.7,-37.4,62.1C-49,55.5,-59.3,46.7,-66.8,35.7C-74.3,24.7,-79,11.5,-78.8,-1.8C-78.6,-15.1,-73.5,-30.2,-65.3,-42.8C-57.1,-55.4,-45.8,-65.5,-33.2,-72C-20.6,-78.5,-6.9,-81.4,5.4,-79.4C17.7,-77.4,28.1,-74.5,39.5,-67.3Z;
                            M47.3,-68.8C59.4,-59.3,65.8,-42.2,70.6,-25.7C75.4,-9.2,78.6,6.7,75.4,21.4C72.2,36.1,62.6,49.6,50.2,59.7C37.8,69.8,22.6,76.5,6.1,77.8C-10.4,79.1,-28.2,75,-43.4,66.5C-58.6,58,-71.2,45.1,-78.2,29.1C-85.2,13.1,-86.6,-6,-82.4,-23.6C-78.2,-41.2,-68.4,-57.3,-55.3,-66.5C-42.2,-75.7,-26.8,-77.9,-12.1,-77.3C2.6,-76.7,35.2,-78.3,47.3,-68.8Z;
                            M39.5,-67.3C50.9,-60.1,59.3,-49.4,65.8,-37.4C72.3,-25.4,76.9,-12.7,77.2,0.1C77.5,12.9,73.5,25.8,66.8,37.4C60.1,49,50.7,59.3,39.2,65.8C27.7,72.3,13.9,74.9,0.5,74C-12.9,73.1,-25.8,68.7,-37.4,62.1C-49,55.5,-59.3,46.7,-66.8,35.7C-74.3,24.7,-79,11.5,-78.8,-1.8C-78.6,-15.1,-73.5,-30.2,-65.3,-42.8C-57.1,-55.4,-45.8,-65.5,-33.2,-72C-20.6,-78.5,-6.9,-81.4,5.4,-79.4C17.7,-77.4,28.1,-74.5,39.5,-67.3Z"
                  />
                </path>
              </clipPath>
            </defs>
            <image
              href="/images/ubuntu-ii/butterfly-art.jpg"
              width="200"
              height="200"
              clipPath="url(#blob2)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>

        {/* Wobbly Image Shapes - Right Side (2 medium, 1 small) */}
        <motion.div
          className="absolute right-16 top-1/3 w-36 h-36 opacity-70"
          whileHover={{ scale: 1.18, opacity: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <clipPath id="blob3">
                <path
                  d="M51.4,-83.8C64.8,-75.3,72.8,-58.4,77.8,-42.3C82.8,-26.2,84.8,-10.9,83.2,4C81.6,18.9,76.4,33.4,68.2,45.9C60,58.4,48.8,69,35.7,75.8C22.6,82.6,7.6,85.6,-7.8,85.2C-23.2,84.8,-39,81,-52.6,73.8C-66.2,66.6,-77.6,56,-83.8,42.8C-90,29.6,-91,13.8,-88.6,-1.4C-86.2,-16.6,-80.4,-31.2,-72.4,-44.4C-64.4,-57.6,-54.2,-69.4,-41.2,-78.2C-28.2,-87,-14.1,-92.8,1.8,-95.8C17.7,-98.8,38,-96.3,51.4,-83.8Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="35s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="d"
                    dur="20s"
                    repeatCount="indefinite"
                    values="M51.4,-83.8C64.8,-75.3,72.8,-58.4,77.8,-42.3C82.8,-26.2,84.8,-10.9,83.2,4C81.6,18.9,76.4,33.4,68.2,45.9C60,58.4,48.8,69,35.7,75.8C22.6,82.6,7.6,85.6,-7.8,85.2C-23.2,84.8,-39,81,-52.6,73.8C-66.2,66.6,-77.6,56,-83.8,42.8C-90,29.6,-91,13.8,-88.6,-1.4C-86.2,-16.6,-80.4,-31.2,-72.4,-44.4C-64.4,-57.6,-54.2,-69.4,-41.2,-78.2C-28.2,-87,-14.1,-92.8,1.8,-95.8C17.7,-98.8,38,-96.3,51.4,-83.8Z;
                            M45.8,-75.2C57.8,-67.4,64.3,-51.2,69.7,-35.4C75.1,-19.6,79.4,-4.2,78.3,10.8C77.2,25.8,70.7,40.4,60.8,51.8C50.9,63.2,37.6,71.4,23,76.5C8.4,81.6,-7.5,83.6,-22.6,80.8C-37.7,78,-52,70.4,-63.6,59.3C-75.2,48.2,-84.1,33.6,-87.3,17.6C-90.5,1.6,-88,-15.8,-80.8,-29.9C-73.6,-44,-61.7,-54.8,-48.4,-62.2C-35.1,-69.6,-20.4,-73.6,-4.7,-72.8C11,-72,34.8,-83,45.8,-75.2Z;
                            M51.4,-83.8C64.8,-75.3,72.8,-58.4,77.8,-42.3C82.8,-26.2,84.8,-10.9,83.2,4C81.6,18.9,76.4,33.4,68.2,45.9C60,58.4,48.8,69,35.7,75.8C22.6,82.6,7.6,85.6,-7.8,85.2C-23.2,84.8,-39,81,-52.6,73.8C-66.2,66.6,-77.6,56,-83.8,42.8C-90,29.6,-91,13.8,-88.6,-1.4C-86.2,-16.6,-80.4,-31.2,-72.4,-44.4C-64.4,-57.6,-54.2,-69.4,-41.2,-78.2C-28.2,-87,-14.1,-92.8,1.8,-95.8C17.7,-98.8,38,-96.3,51.4,-83.8Z"
                  />
                </path>
              </clipPath>
            </defs>
            <image
              href="/images/ubuntu-ii/botanical-art.jpg"
              width="200"
              height="200"
              clipPath="url(#blob3)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-10 top-1/2 w-40 h-40 opacity-70"
          whileHover={{ scale: 1.15, opacity: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <clipPath id="blob4">
                <path
                  d="M42.8,-72.9C54.5,-65.4,62.5,-52.3,68.4,-38.8C74.3,-25.3,78.1,-11.4,78.3,2.6C78.5,16.6,75.1,30.8,68.5,43.4C61.9,56,52.1,67,40.1,73.8C28.1,80.6,14.1,83.2,-0.3,83.8C-14.7,84.4,-29.4,83,-42.9,76.9C-56.4,70.8,-68.7,60,-76.8,46.8C-84.9,33.6,-88.8,18,-87.4,3.1C-86,-11.8,-79.3,-26.1,-70.5,-38.4C-61.7,-50.7,-50.8,-61,-38.4,-68.2C-26,-75.4,-12.1,-79.5,2.4,-83.5C16.9,-87.5,31.1,-80.4,42.8,-72.9Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 100 100"
                    to="0 100 100"
                    dur="28s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="d"
                    dur="22s"
                    repeatCount="indefinite"
                    values="M42.8,-72.9C54.5,-65.4,62.5,-52.3,68.4,-38.8C74.3,-25.3,78.1,-11.4,78.3,2.6C78.5,16.6,75.1,30.8,68.5,43.4C61.9,56,52.1,67,40.1,73.8C28.1,80.6,14.1,83.2,-0.3,83.8C-14.7,84.4,-29.4,83,-42.9,76.9C-56.4,70.8,-68.7,60,-76.8,46.8C-84.9,33.6,-88.8,18,-87.4,3.1C-86,-11.8,-79.3,-26.1,-70.5,-38.4C-61.7,-50.7,-50.8,-61,-38.4,-68.2C-26,-75.4,-12.1,-79.5,2.4,-83.5C16.9,-87.5,31.1,-80.4,42.8,-72.9Z;
                            M49.6,-82.3C61.9,-73.8,68.3,-55.8,73.1,-38.9C77.9,-22,81.1,-6.2,79.8,9.1C78.5,24.4,72.7,39.2,63.4,51.4C54.1,63.6,41.3,73.2,26.8,78.5C12.3,83.8,-3.9,84.8,-19.2,81.2C-34.5,77.6,-48.9,69.4,-60.8,57.8C-72.7,46.2,-82.1,31.2,-85.3,14.8C-88.5,-1.6,-85.5,-19.4,-78.1,-35.4C-70.7,-51.4,-58.9,-65.6,-44.9,-73.6C-30.9,-81.6,-15.5,-83.4,1.2,-85.5C17.9,-87.6,37.3,-90.8,49.6,-82.3Z;
                            M42.8,-72.9C54.5,-65.4,62.5,-52.3,68.4,-38.8C74.3,-25.3,78.1,-11.4,78.3,2.6C78.5,16.6,75.1,30.8,68.5,43.4C61.9,56,52.1,67,40.1,73.8C28.1,80.6,14.1,83.2,-0.3,83.8C-14.7,84.4,-29.4,83,-42.9,76.9C-56.4,70.8,-68.7,60,-76.8,46.8C-84.9,33.6,-88.8,18,-87.4,3.1C-86,-11.8,-79.3,-26.1,-70.5,-38.4C-61.7,-50.7,-50.8,-61,-38.4,-68.2C-26,-75.4,-12.1,-79.5,2.4,-83.5C16.9,-87.5,31.1,-80.4,42.8,-72.9Z"
                  />
                </path>
              </clipPath>
            </defs>
            <image
              href="/images/ubuntu-ii/ochre-painting.jpg"
              width="200"
              height="200"
              clipPath="url(#blob4)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-32 bottom-1/3 w-24 h-24 opacity-65"
          whileHover={{ scale: 1.3, opacity: 0.85 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <clipPath id="blob5">
                <path
                  d="M37.3,-63.5C47.8,-56.2,55.3,-44.9,60.9,-32.8C66.5,-20.7,70.2,-7.8,70.3,5.2C70.4,18.2,66.9,31.3,60.1,42.8C53.3,54.3,43.2,64.2,31.1,70.5C19,76.8,4.9,79.5,-9.6,78.3C-24.1,77.1,-39,72,-51.3,64.3C-63.6,56.6,-73.3,46.3,-78.8,34.1C-84.3,21.9,-85.6,7.8,-83.2,-5.5C-80.8,-18.8,-74.7,-31.3,-66.1,-41.8C-57.5,-52.3,-46.4,-60.8,-34.6,-67.8C-22.8,-74.8,-10.2,-80.3,2.8,-84.9C15.8,-89.5,26.8,-70.8,37.3,-63.5Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="32s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="d"
                    dur="16s"
                    repeatCount="indefinite"
                    values="M37.3,-63.5C47.8,-56.2,55.3,-44.9,60.9,-32.8C66.5,-20.7,70.2,-7.8,70.3,5.2C70.4,18.2,66.9,31.3,60.1,42.8C53.3,54.3,43.2,64.2,31.1,70.5C19,76.8,4.9,79.5,-9.6,78.3C-24.1,77.1,-39,72,-51.3,64.3C-63.6,56.6,-73.3,46.3,-78.8,34.1C-84.3,21.9,-85.6,7.8,-83.2,-5.5C-80.8,-18.8,-74.7,-31.3,-66.1,-41.8C-57.5,-52.3,-46.4,-60.8,-34.6,-67.8C-22.8,-74.8,-10.2,-80.3,2.8,-84.9C15.8,-89.5,26.8,-70.8,37.3,-63.5Z;
                            M43.2,-69.8C54.6,-61.9,61.5,-47.2,66.8,-32.7C72.1,-18.2,75.8,-3.9,74.4,9.9C73,23.7,66.5,37,57.2,48.4C47.9,59.8,35.8,69.3,21.9,75.2C8,81.1,-7.7,83.4,-22.4,80.1C-37.1,76.8,-50.8,68,-61.8,56.1C-72.8,44.2,-81.1,29.2,-83.3,13.1C-85.5,-3,-81.6,-20.2,-73.4,-35.4C-65.2,-50.6,-52.7,-63.8,-38.9,-70.9C-25.1,-78,-10.6,-79,3.4,-84.4C17.4,-89.8,31.8,-77.7,43.2,-69.8Z;
                            M37.3,-63.5C47.8,-56.2,55.3,-44.9,60.9,-32.8C66.5,-20.7,70.2,-7.8,70.3,5.2C70.4,18.2,66.9,31.3,60.1,42.8C53.3,54.3,43.2,64.2,31.1,70.5C19,76.8,4.9,79.5,-9.6,78.3C-24.1,77.1,-39,72,-51.3,64.3C-63.6,56.6,-73.3,46.3,-78.8,34.1C-84.3,21.9,-85.6,7.8,-83.2,-5.5C-80.8,-18.8,-74.7,-31.3,-66.1,-41.8C-57.5,-52.3,-46.4,-60.8,-34.6,-67.8C-22.8,-74.8,-10.2,-80.3,2.8,-84.9C15.8,-89.5,26.8,-70.8,37.3,-63.5Z"
                  />
                </path>
              </clipPath>
            </defs>
            <image
              href="/images/ubuntu-ii/248FFC77-9478-41C6-8ED6-3A55DB46E451-86619-00000D3A6BE9E23F.JPG"
              width="200"
              height="200"
              clipPath="url(#blob5)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-32 w-full max-w-5xl"
          >
            <h1 className="text-7xl md:text-9xl font-serif font-light tracking-[0.15em] text-foreground mb-8 uppercase">
              Ubuntu
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-cream/90 font-light">
              I am because we are
            </p>
          </motion.div>

          {/* Next Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="border border-primary/20 bg-black/40 backdrop-blur-md rounded-none p-12 w-full max-w-xl"
          >
            <div className="border-b border-primary/20 pb-6 mb-6 text-center">
              <h2 className="text-4xl font-serif font-light text-primary tracking-wider">
                Ubuntu III
              </h2>
            </div>
            <div className="space-y-3 text-cream/80 font-light text-center">
              <p className="text-lg">Mid-December 2025</p>
              <p className="text-sm tracking-wide">Community Hall, Point Lookout</p>
              <p className="text-sm tracking-wide">Minjerribah, Stradbroke Island</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-cream/70 leading-loose font-light">
              Ubuntu Expo brings together artists, musicians, and community on the shores of
              Minjerribah. A celebration of connection, creativity, and cultural expression.
            </p>
            <div className="pt-12">
              <Link
                href="/about"
                className="inline-block border border-primary/40 px-10 py-4 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider text-sm uppercase"
              >
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-4xl mx-auto my-20" />

      {/* Gallery Preview */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-wide mb-6">
              Ubuntu II
            </h2>
            <p className="text-cream/60 font-light text-sm tracking-widest uppercase">
              A Collection of Moments
            </p>
          </motion.div>

          {/* Refined Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-full">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden group cursor-pointer"
                style={{ height: '500px' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border border-primary/40 px-10 py-4 text-primary hover:bg-primary/10 transition-all duration-300 font-light tracking-wider text-sm uppercase"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-4xl mx-auto my-20" />

      {/* Contact CTA */}
      <section className="py-40 px-6 bg-background w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-16"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-wide mb-10">
                Be Part of Ubuntu
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto leading-relaxed font-light text-lg">
                For sponsorship opportunities, artist inquiries, or media partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Sponsorship
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Support artists and cultural celebration
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Artists
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Share your work with our community
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-primary font-light tracking-wide">
                  Media
                </h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">
                  Press inquiries and partnerships
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-block bg-primary px-12 py-5 text-background hover:bg-accent transition-all duration-300 font-light tracking-wider text-sm uppercase"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
