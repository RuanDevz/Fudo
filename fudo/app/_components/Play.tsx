import React from 'react';

const Play = () => {
  return (
    <div className='play-button shadow-lg p-2 rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdc55e" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
        <polygon points="6 3 20 12 6 21 6 3"/>
      </svg>
    </div>
  );
}

export default Play;
