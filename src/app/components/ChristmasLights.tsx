import React from 'react';

export const ChristmasLights: React.FC<{ position?: 'top' | 'bottom' }> = ({ position = 'top' }) => {
  const sparkles = [
    { color: '#FFD700', size: 4, delay: '0s', duration: '2s', left: '5%' },
    { color: '#FF69B4', size: 3, delay: '0.3s', duration: '2.5s', left: '12%' },
    { color: '#87CEEB', size: 5, delay: '0.6s', duration: '2s', left: '20%' },
    { color: '#FFD700', size: 3, delay: '0.9s', duration: '2.2s', left: '28%' },
    { color: '#FF6347', size: 4, delay: '1.2s', duration: '2.4s', left: '35%' },
    { color: '#98FB98', size: 3, delay: '1.5s', duration: '2s', left: '42%' },
    { color: '#FFD700', size: 5, delay: '1.8s', duration: '2.6s', left: '50%' },
    { color: '#FF69B4', size: 4, delay: '2.1s', duration: '2.3s', left: '58%' },
    { color: '#87CEEB', size: 3, delay: '0.4s', duration: '2.5s', left: '65%' },
    { color: '#FFD700', size: 4, delay: '0.7s', duration: '2.1s', left: '72%' },
    { color: '#FF6347', size: 3, delay: '1s', duration: '2.4s', left: '80%' },
    { color: '#98FB98', size: 5, delay: '1.3s', duration: '2.2s', left: '88%' },
    { color: '#FFD700', size: 3, delay: '1.6s', duration: '2.5s', left: '95%' },
  ];

  return (
    <>
      <style>
        {`
          @keyframes sparkle {
            0%, 100% { 
              opacity: 0; 
              transform: scale(0) rotate(0deg);
            }
            50% { 
              opacity: 1; 
              transform: scale(1) rotate(180deg);
            }
          }
          
          @keyframes shimmer {
            0%, 100% { 
              filter: brightness(1) blur(2px);
            }
            50% { 
              filter: brightness(1.8) blur(3px);
            }
          }
        `}
      </style>
      
      <div className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 h-16 pointer-events-none z-50 overflow-hidden`}>
        {/* Elegant light garland line */}
        <div className={`absolute ${position === 'top' ? 'top-4' : 'bottom-4'} left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent`}></div>
        
        {/* Sparkle lights */}
        <div className="absolute inset-0">
          {sparkles.map((sparkle, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: sparkle.left,
                top: position === 'top' ? '16px' : 'auto',
                bottom: position === 'bottom' ? '16px' : 'auto',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Main sparkle glow */}
              <div
                className="relative"
                style={{
                  width: `${sparkle.size * 4}px`,
                  height: `${sparkle.size * 4}px`,
                  animation: `shimmer ${sparkle.duration} ease-in-out infinite ${sparkle.delay}`,
                }}
              >
                {/* Center bright point */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${sparkle.size}px`,
                    height: `${sparkle.size}px`,
                    background: `radial-gradient(circle, ${sparkle.color}, transparent)`,
                    boxShadow: `0 0 ${sparkle.size * 3}px ${sparkle.color}, 0 0 ${sparkle.size * 6}px ${sparkle.color}88`,
                    animation: `sparkle ${sparkle.duration} ease-in-out infinite ${sparkle.delay}`,
                  }}
                ></div>
                
                {/* Star rays */}
                {[0, 45, 90, 135].map((rotation) => (
                  <div
                    key={rotation}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '2px',
                      height: `${sparkle.size * 5}px`,
                      background: `linear-gradient(to bottom, transparent, ${sparkle.color}aa, transparent)`,
                      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                      opacity: 0.6,
                      animation: `sparkle ${sparkle.duration} ease-in-out infinite ${sparkle.delay}`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional ambient glow */}
        <div 
          className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 h-12 bg-gradient-to-${position === 'top' ? 'b' : 't'} from-amber-200/10 to-transparent`}
          style={{
            animation: 'shimmer 4s ease-in-out infinite',
          }}
        ></div>
      </div>
    </>
  );
};
