import React from 'react';
import Banner from '../Banner/Banner';
import GoodFood from '../why Simple Food/GoodFood';

import TrendingMenu from '../TrendingMenu/TrendingMenu';
import MakeDaily from '../MakeDaily/MakeDaily';
import AskQuestion from '../AskQuesiton/AskQuestion';
import Feedback from '../Fredback/Feedback';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <GoodFood></GoodFood>
               <TrendingMenu></TrendingMenu>
               <MakeDaily></MakeDaily>
               <AskQuestion></AskQuestion>
               <Feedback></Feedback>
          </div>
     );
};

export default Home;