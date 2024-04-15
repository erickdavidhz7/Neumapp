import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const SplitScreen = () => {
  return (
    <>
      <div className="split-screen">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
}

export default SplitScreen;
