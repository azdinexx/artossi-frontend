import Accordion from '../components/Accordion';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';
import Peaks from '../components/Peaks';

NewsLetter;
function Home() {
  return (
    <div>
      <Hero />
      <Peaks />
      <div
        style={{
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        <Accordion />
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home;
