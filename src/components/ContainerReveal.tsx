import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ContainerReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ContainerRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  enableParallax?: boolean;
  parallaxSpeed?: number;
  rotationAmount?: number;
  scaleAmount?: number;
  trigger?: 'top bottom' | 'top center' | 'center bottom' | 'center center';
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
}

const ContainerReveal: React.FC<ContainerRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  distance = 60,
  duration = 1,
  delay = 0,
  stagger = 0.1,
  enableParallax = false,
  parallaxSpeed = 0.5,
  rotationAmount = 10,
  scaleAmount = 0.8,
  trigger = 'top bottom',
  end = 'bottom top',
  scrub = false,
  once = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get initial transform values based on direction
    const getInitialTransform = () => {
      switch (direction) {
        case 'up':
          return { y: distance, x: 0, opacity: 0, scale: 1, rotation: 0 };
        case 'down':
          return { y: -distance, x: 0, opacity: 0, scale: 1, rotation: 0 };
        case 'left':
          return { x: distance, y: 0, opacity: 0, scale: 1, rotation: 0 };
        case 'right':
          return { x: -distance, y: 0, opacity: 0, scale: 1, rotation: 0 };
        case 'fade':
          return { x: 0, y: 0, opacity: 0, scale: 1, rotation: 0 };
        case 'scale':
          return { x: 0, y: 0, opacity: 0, scale: scaleAmount, rotation: 0 };
        case 'rotate':
          return { x: 0, y: 0, opacity: 0, scale: 1, rotation: rotationAmount };
        default:
          return { y: distance, x: 0, opacity: 0, scale: 1, rotation: 0 };
      }
    };

    const initialTransform = getInitialTransform();
    const children = container.children;

    // Set initial state
    gsap.set(container, initialTransform);

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: trigger,
        end: end,
        scrub: scrub,
        once: once,
        onUpdate: (self) => {
          // Dynamic effects based on scroll direction and velocity
          if (enableParallax) {
            const velocity = self.getVelocity();
            const parallaxY = self.progress * distance * parallaxSpeed;
            gsap.to(container, {
              y: parallaxY,
              duration: 0.1,
              ease: 'none'
            });
          }
        }
      }
    });

    // Main container animation
    tl.to(container, {
      x: 0,
      y: enableParallax ? 0 : 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out'
    });

    // Stagger children if they exist
    if (children.length > 0 && stagger > 0) {
      gsap.set(children, { opacity: 0, y: 20 });
      tl.to(children, {
        opacity: 1,
        y: 0,
        duration: duration * 0.8,
        stagger: stagger,
        ease: 'power2.out'
      }, `-=${duration * 0.5}`);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, distance, duration, delay, stagger, enableParallax, parallaxSpeed, rotationAmount, scaleAmount, trigger, end, scrub, once]);

  return (
    <div 
      ref={containerRef} 
      className={`container-reveal ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerReveal;