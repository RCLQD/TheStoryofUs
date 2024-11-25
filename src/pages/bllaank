import { useAnimate } from "framer-motion";
import React, { useRef } from "react";

export const Images = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpeg",
        "/images/img4.jpeg",
        "/images/img4.jpeg",
        "/images/img5.jpeg",
        "/images/img6.jpeg",
        "/images/img7.jpg",
        "/images/img8.jpg",
        "/images/img9.jpg",
        "/images/img10.jpg",
        "/images/img11.jpg",
        "/images/img12.jpg",
        "/images/img13.jpg",
        "/images/img14.jpeg",
        "/images/img15.jpeg",
        "/images/img16.jpeg",
        "/images/img17.jpg",
        "/images/img18.jpg",
        "/images/img19.jpg",
        "/images/img20.jpg",
        "/images/img21.jpg",
        "/images/img22.jpg",
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-white font-poppins">
        <p className="flex flex-col items-center gap-2 text-3xl font-bold text-black">
          <span>Happy Monthsary Langga</span>
          <span>I Love You Always</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const texts = [
  "iloveyouu",
  "foreverus",
  "myheart",
  "alwaysus",
  "yoursalways",
  "mylove",
  "youandme",
  "sweetlove",
  "youlightme",
  "foreverone",
  "staywithme",
  "togethernow",
  "myone",
  "lovealways",
  "wegotthis",
  "youaremine",
  "withyou",
  "mylangga",
  "heartandyou"
];

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden w-full"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => {
        const randomText = texts[Math.floor(Math.random() * texts.length)];

        return (
          <div
            key={index}
            className="w-32 card pointer-events-none absolute left-0 top-0 z-0 opacity-0 flex flex-col items-center justify-center p-4 bg-white border-[1.5px] border-black rounded-lg shadow-lg"
            data-mouse-move-index={index}
          >
            <img
              className="h-24 w-full rounded-md object-cover"
              srcSet={`${img}?w=400&h=400 400w, ${img}?w=800&h=800 800w`}
              sizes="(max-width: 600px) 400px, 800px"
              alt={`Mouse move image ${index}`}
            />
            <div className="w-full flex gap-x-2 pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 32 32">
                <path fill="#ff0000" d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64" />
              </svg>
              <p className="text-xs">{randomText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};