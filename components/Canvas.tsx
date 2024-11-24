// "use client";
// import { useEffect, useRef } from "react";

// export default function DotsAnimation() {
//   const heroRef = useRef(null);
//   const canvasRef = useRef(null);
//   const dotsRef = useRef([]);
//   const colors = ["#eee", "#545454", "#bba68", "#696969"];

//   useEffect(() => {
//     const hero = heroRef.current;
//     const canvas = canvasRef.current;
//     if (!canvas || !hero) return;

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const ctx = canvas.getContext("2d");

//     // Initialize dots
//     dotsRef.current = Array.from({ length: 50 }, () => ({
//       x: Math.floor(Math.random() * canvas.width),
//       y: Math.floor(Math.random() * canvas.height),
//       size: Math.random() * 3,
//       color: colors[Math.floor(Math.random() * 4)],
//     }));

//     // Draw dots function
//     const drawDots = () => {
//       dotsRef.current.forEach((dot) => {
//         ctx.fillStyle = dot.color;
//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     };

//     // Initial draw
//     drawDots();

//     // Mouse move handler
//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mouse = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       };

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawDots();

//       dotsRef.current.forEach((dot) => {
//         const distance = Math.sqrt(
//           (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
//         );

//         if (distance < 200) {
//           ctx.strokeStyle = dot.color;
//           ctx.lineWidth = 1;
//           ctx.beginPath();
//           ctx.moveTo(dot.x, dot.y);
//           ctx.lineTo(mouse.x, mouse.y);
//           ctx.stroke();
//         }
//       });
//     };

//     // Mouse out handler
//     const handleMouseOut = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawDots();
//     };

//     // Add event listeners
//     hero.addEventListener("mousemove", handleMouseMove);
//     hero.addEventListener("mouseout", handleMouseOut);

//     // Cleanup function
//     return () => {
//       hero.removeEventListener("mousemove", handleMouseMove);
//       hero.removeEventListener("mouseout", handleMouseOut);
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <div ref={heroRef} className="hero relative w-full h-full">
//       <canvas
//         ref={canvasRef}
//         id="canvas"
//         className="absolute top-0 left-0 w-full h-full"
//       />
//     </div>
//   );
// }
