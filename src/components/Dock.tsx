'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

import './Dock.css';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize, isVertical = false }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);
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
    isHovered.set(1);
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

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', isVertical = false, ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={`${isVertical ? 'dock-label-right' : 'dock-label'} ${className}`}
          role="tooltip"
          style={isVertical ? {} : {}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  isVertical = false,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 158,
  dockHeight = 256,
  baseItemSize = 50
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, isVertical ? maxHeight : panelHeight]);
  const height = useSpring(heightRow, { ...spring, damping: spring.damping * 1.5 });

  return (
    <motion.div 
      style={{ 
        height: isVertical ? height : panelHeight, 
        scrollbarWidth: 'none',
        willChange: 'height'
      }} 
      className="dock-outer"
    >
      <motion.div
        onMouseMove={({ pageX, pageY }) => {
          isHovered.set(1);
          if (isVertical) {
            mouseX.set(pageY);
          } else {
            mouseX.set(pageX);
          }
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${isVertical ? 'dock-panel-right' : 'dock-panel'} ${className}`}
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
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel isVertical={isVertical}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}