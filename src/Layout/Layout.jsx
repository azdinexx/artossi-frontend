import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Layout() {
  const [isSrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10; // Adjust this value as per your needs
      const scrolled = window.scrollY > scrollThreshold;
      if (scrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      style={{
        width: '100vw',
      }}
    >
      <Header scrolled={isSrolled} />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
