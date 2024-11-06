export const useScrollToSection = () => {
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Account for header height and some padding
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
  
    return scrollToSection;
  };