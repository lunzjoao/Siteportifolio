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
      if (e.target.closest('a, button, .skill-item, .project-card, h1, h2, h3, p, span, .fixed-logo')) {
        setIsHovering(true);
      }
      
      // Detectar diferentes tipos de elementos para aplicar cores
      const target = e.target;
      
      // Ícones sociais
      const socialLink = target.closest('.social-links a');
      if (socialLink) {
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
      
      // Skills
      const skillItem = target.closest('.skill-item');
      if (skillItem) {
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
      
      // Links gerais
      const link = target.closest('a');
      if (link) {
        setCursorColor('var(--primary-color)');
        return;
      }
      
      // Botões
      const button = target.closest('button');
      if (button) {
        setCursorColor('var(--primary-color)');
        return;
      }
      
      // Títulos
      const heading = target.closest('h1, h2, h3');
      if (heading && target === heading) {
        setCursorColor('var(--secondary-color)');
        return;
      }
      
      // Projetos
      const projectCard = target.closest('.project-card');
      if (projectCard) {
        setCursorColor('var(--project-glow-color)');
        return;
      }
      
      // Logo fixo
      const fixedLogo = target.closest('.fixed-logo');
      if (fixedLogo) {
        setCursorColor('var(--primary-color)');
        return;
      }
      
      // Resetar cor se não estiver sobre nenhum elemento específico
      setCursorColor('');
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, .skill-item, .project-card, h1, h2, h3, p, span, .fixed-logo')) {
        setIsHovering(false);
      }
      
      // Resetar cor quando sair dos elementos interativos
      if (!e.target.closest('a, button, .skill-item, .project-card, h1, h2, h3, .fixed-logo')) {
        setCursorColor('');
      }
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