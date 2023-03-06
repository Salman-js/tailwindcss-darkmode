import React, { useState } from 'react';
import useDarkMode from '../Components/useDarkTheme';
import { BsMoonStars, BsSun } from 'react-icons/bs';

function ThemeAnimation() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const [switched, setSwitched] = useState(false);
  const [visibility, setVisibility] = useState(false);
  function switcher() {
    if (switched) {
      setVisibility(true);
      setSwitched(false);
      setDarkTheme(!darkTheme);
      setTimeout(() => {
        setVisibility(false);
      }, 500);
    } else {
      setVisibility(true);
      setSwitched(true);
      setTimeout(() => {
        setDarkTheme(!darkTheme);
        setVisibility(false);
      }, 700);
    }
  }
  return (
    <>
      <div className='flex flex-row p-4 rounded-lg shadow-md fixed right-10 top-6 overflow-hidden dark:bg-gray-700'>
        <div
          style={{
            borderRadius: '250%',
            width: '10px',
            height: '10px',
            transform: switched ? 'scale(500)' : 'scale(0)',
            backgroundColor: '#000000',
            opacity: visibility ? '90%' : '0%',
            pointerEvents: 'none',
            transition: 'all ease-in-out 700ms',
            position: 'fixed',
            top: '3.2em',
            marginLeft: '8em',
          }}
        ></div>
        <div className='my-auto'>
          <p className='text-gray-700 text-base dark:text-white'>
            Switch theme
          </p>
        </div>
        <div className='ml-4 cursor-pointer' onClick={switcher}>
          {darkTheme ? (
            <BsSun
              color={darkTheme ? '#cad6f6' : '#302c44'}
              size={20}
              className='m-2'
            />
          ) : (
            <BsMoonStars
              color={darkTheme ? '#cad6f6' : '#302c44'}
              size={20}
              className='m-2'
              s
            />
          )}
        </div>
      </div>
      <p className='text-2xl text-gray-700 dark:text-white m-auto font-extrabold'>
        {darkTheme ? 'Dark' : 'Light'}
      </p>
    </>
  );
}

export default ThemeAnimation;
