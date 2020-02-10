import React from 'react';
import GreenBar from './components/GreenBar';
import WhiteBar from './components/WhiteBar';
import Content from './components/Content';

function Main() {
  return (
    <div className="Main">
        <GreenBar/>
        <WhiteBar/>
        <Content/>
    </div>
  );
}

export default Main;