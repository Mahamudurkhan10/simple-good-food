import React from 'react';
import GoodFood from '../../Home/why Simple Food/GoodFood';
import HowItWorkFAQ from '../How It Work Faq/HowItWorkFAQ';
import HowItWorkSection from '../It work/HowItWorkSection';

const HowItWork = () => {
     return (
          <div>
              <HowItWorkFAQ></HowItWorkFAQ>
              <HowItWorkSection></HowItWorkSection>
              <GoodFood></GoodFood>
          </div>
     );
};

export default HowItWork;