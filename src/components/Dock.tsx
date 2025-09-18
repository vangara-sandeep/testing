'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState, useCallback } from 'react';

import './Dock.css';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize, isVertical = false, isMobile = false }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightColor, setSpotlightColor] = useState('rgba(59, 130, 246, 0.3)');

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: baseItemSize
    };
    if (isVertical) {
      return val - rect.y - baseItemSize / 2;
    }
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
    ref.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Set different spotlight colors for variety
    const colors = [
      'rgba(59, 130, 246, 0.3)',   // blue
      'rgba(20, 184, 166, 0.3)',   // teal
      'rgba(147, 51, 234, 0.3)',   // purple
      'rgba(34, 197, 94, 0.3)',    // green
      'rgba(249, 115, 22, 0.3)',   // orange
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSpotlightColor(randomColor);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: isMobile ? size : 'auto',
        height: size,
        minWidth: isMobile ? baseItemSize : 'auto',
        padding: isMobile ? '0' : '0.5rem 1rem'
      }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`dock-item ${isMobile ? 'dock-item-mobile' : 'dock-item-desktop'} ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child => cloneElement(child, { isHovered, isVertical, isMobile }))}
    </motion.div>
  );
}

function DockContent({ icon, label, isMobile = false }) {
  return (
    <div className="dock-content">
      {isMobile ? (
        // Mobile: Show only icon
        <div className="dock-icon">
          {icon}
        </div>
      ) : (
        // Desktop: Show icon + text
        <div className="dock-desktop-content">
          <div className="dock-icon-small">
            {icon}
          </div>
          <span className="dock-text">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  isVertical = false,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50
}) {
  const mouseX = useMotionValue(Infinity);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;
    
    // Show dock when scrolling up or at the top
    if (scrollDifference < 0 || currentScrollY < 100) {
      setIsVisible(true);
    }
    // Hide dock when scrolling down and not at the top
    else if (scrollDifference > 0 && currentScrollY > 100) {
      setIsVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <motion.div 
      style={{ 
        height: isVertical ? maxHeight : panelHeight, 
        scrollbarWidth: 'none',
        willChange: 'height'
      }} 
      className="dock-outer"
    >
      <motion.div
        onMouseMove={({ pageX, pageY }) => {
          if (isVertical) {
            mouseX.set(pageY);
          } else {
            mouseX.set(pageX);
          }
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
        }}
        className={`${isVertical ? 'dock-panel-right' : 'dock-panel'} ${isMobile ? 'dock-panel-mobile' : 'dock-panel-desktop'} ${className} ${!isVisible ? 'dock-hidden' : ''}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            isVertical={isVertical}
            isMobile={isMobile}
          >
            <DockContent 
              icon={item.icon} 
              label={item.label} 
              isMobile={isMobile}
            />
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}