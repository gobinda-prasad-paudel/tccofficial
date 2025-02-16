import * as React from "react";

const HeroImage = () => (
  <svg
    width={1021}
    height={650}
    viewBox="0 0 1021 650"
    className="w-full"
    style={{
      height: "auto",
    }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
      @keyframes rotateOnHover {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .hover-rotate {
        transform-origin: center;
        transition: transform 0.6s ease-in-out;
      }

      .hover-rotate:hover {
        animation: rotateOnHover 1s linear infinite;
      }
      `}
    </style>

    {/* Embedded Image Inside SVG */}
    <image
      href="/logo.png" 
      x="250" 
      y="150" 
      width="500" 
      height="500"
      className="hover-rotate"
    />

    <defs>
      <filter
        id="filter1_d"
        x={401}
        y={392.007}
        width={64}
        height={64}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={7.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>

      <filter
        id="filter2_d"
        x={561.514}
        y={127.757}
        width={48.5}
        height={57.486}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={7.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default HeroImage;
