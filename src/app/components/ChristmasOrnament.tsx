import React from 'react';

interface ChristmasOrnamentProps {
  type: 'star' | 'tree' | 'gift' | 'snowman' | 'sleigh' | 'berry-branch';
  className?: string;
  color?: string;
}

export const ChristmasOrnament: React.FC<ChristmasOrnamentProps> = ({ 
  type, 
  className = '',
  color = '#B8860B' 
}) => {
  const renderOrnament = () => {
    switch (type) {
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill={color} className={className}>
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z" />
          </svg>
        );
      
      case 'tree':
        return (
          <svg viewBox="0 0 24 24" fill="#2d5016" className={className}>
            <path d="M12 2l-4 6h2l-3 5h2l-3 6h10l-3-6h2l-3-5h2z" />
            <rect x="10" y="19" width="4" height="3" fill="#8B4513" />
          </svg>
        );
      
      case 'gift':
        return (
          <svg viewBox="0 0 24 24" fill={color} className={className}>
            <rect x="5" y="10" width="14" height="12" rx="1" />
            <path d="M12 10V22M5 14h14" stroke="#fff" strokeWidth="1" fill="none" />
            <circle cx="9" cy="6" r="2" fill="#C41E3A" />
            <circle cx="15" cy="6" r="2" fill="#C41E3A" />
            <path d="M9 8c0-2 3-2 3 0M15 8c0-2-3-2-3 0" stroke="#C41E3A" strokeWidth="1.5" fill="none" />
          </svg>
        );
      
      case 'snowman':
        return (
          <svg viewBox="0 0 24 24" fill="#fff" stroke="#333" strokeWidth="0.5" className={className}>
            <circle cx="12" cy="16" r="4" />
            <circle cx="12" cy="9" r="3" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="11" cy="8.5" r="0.3" fill="#333" />
            <circle cx="13" cy="8.5" r="0.3" fill="#333" />
            <path d="M10 9.5c0.5 0.3 1.5 0.3 2 0" stroke="#FF6347" strokeWidth="0.5" fill="none" />
          </svg>
        );
      
      case 'sleigh':
        return (
          <svg viewBox="0 0 32 24" fill={color} className={className}>
            <path d="M4 14c0-1 1-2 2-2h14l4 4v4H6c-1 0-2-1-2-2v-4z" />
            <path d="M20 12l-2-4h-6l-2 4" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="8" cy="20" r="1.5" />
            <circle cx="20" cy="20" r="1.5" />
            <path d="M24 8c2-2 4-1 4 1l-2 3" />
            <path d="M28 6l2-4 1 1-2 4z" />
          </svg>
        );
      
      case 'berry-branch':
        return (
          <svg viewBox="0 0 40 24" className={className}>
            <path d="M2 12Q10 8 20 12T38 12" stroke="#2d5016" strokeWidth="2" fill="none" />
            <ellipse cx="8" cy="10" rx="3" ry="4" fill="#2d5016" />
            <ellipse cx="15" cy="14" rx="3" ry="4" fill="#2d5016" />
            <ellipse cx="22" cy="10" rx="3" ry="4" fill="#2d5016" />
            <ellipse cx="30" cy="14" rx="3" ry="4" fill="#2d5016" />
            <circle cx="8" cy="12" r="2" fill="#C41E3A" />
            <circle cx="15" cy="16" r="2" fill="#C41E3A" />
            <circle cx="22" cy="12" r="2" fill="#C41E3A" />
            <circle cx="30" cy="16" r="2" fill="#C41E3A" />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return renderOrnament();
};
