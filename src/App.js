import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import { useEffect, useState } from 'react';
import LineGradient from './components/LineGradient';
import useMediaQuery from './hooks/useMediaQuery';
import { motion } from 'framer-motion';
import NewProjectsConatiner from './scenes/NewProjectsContainer';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const projList = [
    { projName: 'Css Playground', projGithub: ' https://github.com/pelegsch666/css-playground-client', projLive: 'https://css-playground-peleg-irad.netlify.app' },
    { projName: 'Shred It Up', projGithub: 'https://github.com/pelegsch666/tempo-organizer', projLive: 'https://shred-it-up.netlify.app' },
    { projName: 'Elbit Form', projGithub: 'https://github.com/pelegsch666/elbit-form', projLive: 'https://data-base-boards-elbit.netlify.app'},
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
      console.log(window.screenY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}>
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}>
          
          <NewProjectsConatiner projList={projList}/>
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6   md:h-full">
        <motion.div
          margin="0 0 0px 0"
          amount="all"
          >
        
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto  md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
