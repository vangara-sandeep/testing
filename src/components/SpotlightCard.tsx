import { useRef } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
  as?: 'div' | 'button';
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(255, 255, 255, 0.4)',
  onClick,
  as: Component = 'div'
}) => {
  const divRef = useRef<HTMLDivElement | HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <Component 
      ref={divRef as any} 
      onMouseMove={handleMouseMove} 
      onClick={onClick}
      className={`card-spotlight ${className}`}
    >
      {children}
    </Component>
  );
};

export default SpotlightCard;