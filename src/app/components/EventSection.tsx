import React from 'react';
import { ChristmasOrnament } from './ChristmasOrnament';

interface EventItemProps {
  title: string;
  subtitle?: string;
  details?: string[];
  lyrics?: string[];
  note?: string;
}

interface EventSectionProps {
  sectionNumber: string;
  title: string;
  items: EventItemProps[];
  ornamentType?: 'star' | 'tree' | 'gift' | 'snowman' | 'sleigh' | 'berry-branch';
}

export const EventSection: React.FC<EventSectionProps> = ({ 
  sectionNumber, 
  title, 
  items,
  ornamentType = 'star'
}) => {
  return (
    <div className="mb-6 relative">
      {/* Pine branches decoration at top */}
      <div className="absolute -top-3 left-0 right-0 flex justify-between items-start pointer-events-none z-10">
        <div className="opacity-80">
          <ChristmasOrnament type="berry-branch" className="w-24 h-12" />
        </div>
        <div className="opacity-80 transform scale-x-[-1]">
          <ChristmasOrnament type="berry-branch" className="w-24 h-12" />
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-amber-50/95 via-white/90 to-orange-50/95 rounded-xl p-4 sm:p-6 shadow-xl border-2 border-amber-300/60 relative overflow-hidden backdrop-blur-sm">
        {/* Background stars pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-4 left-8"><ChristmasOrnament type="star" className="w-6 h-6" /></div>
          <div className="absolute top-12 right-12"><ChristmasOrnament type="star" className="w-4 h-4" /></div>
          <div className="absolute bottom-8 left-16"><ChristmasOrnament type="star" className="w-5 h-5" /></div>
          <div className="absolute bottom-16 right-8"><ChristmasOrnament type="star" className="w-6 h-6" /></div>
        </div>
        
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 relative z-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex-shrink-0">
              <span className="font-serif text-sm sm:text-base">{sectionNumber}</span>
            </div>
            <h2 className="text-amber-900 flex-1 text-base sm:text-lg">{title}</h2>
            <ChristmasOrnament type={ornamentType} className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" color="#B8860B" />
          </div>
          <div className="h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-full shadow-sm"></div>
        </div>

        {/* Event Items */}
        <div className="space-y-3 sm:space-y-4 relative z-10">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-amber-200/60 hover:shadow-lg transition-shadow">
                {/* Item decorations */}
                <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4">
                  <ChristmasOrnament 
                    type={index % 2 === 0 ? 'star' : 'gift'} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    color="#B8860B"
                  />
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md">
                      <span className="text-xs sm:text-sm font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-amber-900 mb-1 sm:mb-2 text-sm sm:text-base leading-snug">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-amber-800 italic text-xs sm:text-sm mb-1 sm:mb-2">{item.subtitle}</p>
                    )}
                    
                    {item.details && item.details.length > 0 && (
                      <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-amber-900/80">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="leading-relaxed break-words">{detail}</p>
                        ))}
                      </div>
                    )}
                    
                    {item.lyrics && item.lyrics.length > 0 && (
                      <div className="mt-2 sm:mt-3 pl-2 sm:pl-4 border-l-2 border-amber-400/60 space-y-0.5 sm:space-y-1">
                        {item.lyrics.map((lyric, idx) => (
                          <p key={idx} className="text-xs sm:text-sm text-amber-800 italic leading-relaxed break-words">
                            {lyric}
                          </p>
                        ))}
                      </div>
                    )}
                    
                    {item.note && (
                      <p className="mt-2 text-xs text-amber-700 bg-amber-100/80 px-2 sm:px-3 py-1 rounded-full inline-block">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom pine branches decoration */}
      <div className="absolute -bottom-3 left-0 right-0 flex justify-center pointer-events-none z-10">
        <ChristmasOrnament type="berry-branch" className="w-28 h-12 opacity-80" />
      </div>
    </div>
  );
};