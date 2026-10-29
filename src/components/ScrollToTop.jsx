
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Mohamed Shamil K | Performance Marketer, Meta Ads Specialist & AI Web Builder in Kerala',
  '/services': 'Services & Capabilities | Mohamed Shamil K • Meta Ads & CRO',
  '/case-study': 'Oman E-Commerce Case Study (44% Cart Intent) | Mohamed Shamil K',
  '/projects': 'AI Products & Vibe Coding Projects | Mohamed Shamil K',
  '/about': 'About Mohamed Shamil K | Computer Science & Growth Story',
  '/contact': 'Contact US | Book a Free Funnel Audit • Mohamed Shamil K'
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Update document title dynamically
    const matchedTitle = pageTitles[pathname] || pageTitles['/'];
    document.title = matchedTitle;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
