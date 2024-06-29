import React from 'react';

const Header = (props) => {
  return (
    <div className='bg-black text-white text-center py-4 text-2xl font-bold'>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;
