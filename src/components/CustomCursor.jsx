import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('');

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      
      // Logo fixo - cursor branco
      const fixedLogo = target.closest('.fixed-logo');
      if (fixedLogo) {
        setIsHovering(true);
        setCursorColor('white');
        return;
      }
      
      // Seta de scroll - cursor branco
      const scrollArrow = target.closest('.scroll-down-arrow');
      if (scrollArrow) {
        setIsHovering(true);
        setCursorColor('white');
        return;
      }
      
      // Ícones sociais
      const socialLink = target.closest('.social-links a');
      if (socialLink) {
        setIsHovering(true);
        const isGitHub = socialLink.querySelector('svg[data-icon="github"]') || 
                        socialLink.href.includes('github');
        const isLinkedIn = socialLink.querySelector('svg[data-icon="linkedin"]') || 
                          socialLink.href.includes('linkedin');
        
        if (isGitHub) {
          setCursorColor('white');
        } else if (isLinkedIn) {
          setCursorColor('#0077b5');
        }
        return;
      }
      
      // Skills - usar as cores específicas de cada tecnologia
      const skillItem = target.closest('.skill-item');
      if (skillItem) {
        setIsHovering(true);
        if (skillItem.classList.contains('js')) {
          setCursorColor('#F0DB4F');
        } else if (skillItem.classList.contains('react')) {
          setCursorColor('#00C8F8');
        } else if (skillItem.classList.contains('node')) {
          setCursorColor('#3C873A');
        } else if (skillItem.classList.contains('python')) {
          setCursorColor('#3572A5');
        } else if (skillItem.classList.contains('java')) {
          setCursorColor('#f89820');
        } else if (skillItem.classList.contains('kotlin')) {
          setCursorColor('#7F52FF');
        }
        return;
      }
      
      // Links de projetos
      const projectLink = target.closest('.project-links a');
      if (projectLink) {
        setIsHovering(true);
        setCursorColor('white');
        return;
      }
      
      // Botões
      const button = target.closest('button');
      if (button) {
        setIsHovering(true);
        setCursorColor('var(--primary-color)');
        return;
      }
      
      // Resetar para elementos não interativos
      setIsHovering(false);
      setCursorColor('');
    };

    const onMouseOut = (e) => {
      // Resetar quando sair dos elementos interativos
      setIsHovering(false);
      setCursorColor('');
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        backgroundColor: cursorColor || '#191970',
        boxShadow: cursorColor ? 
          `0 0 3px ${cursorColor}, 0 0 6px ${cursorColor}, 0 0 9px ${cursorColor}, 0 0 12px ${cursorColor}, 0 0 15px ${cursorColor}, 0 0 18px ${cursorColor}, 0 0 21px ${cursorColor}, 0 0 24px ${cursorColor}, 0 0 27px ${cursorColor}, 0 0 30px ${cursorColor}, 0 0 33px ${cursorColor}, 0 0 36px ${cursorColor}` : 
          '0 0 3px #191970, 0 0 6px #191970, 0 0 9px #191970, 0 0 12px #191970, 0 0 15px #191970, 0 0 18px #191970, 0 0 21px #191970, 0 0 24px #191970, 0 0 27px #191970, 0 0 30px #191970, 0 0 33px #191970, 0 0 36px #191970'
      }}
    />
  );
};

export default CustomCursor; 