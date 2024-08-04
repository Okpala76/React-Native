import React from 'react';
import Play from './app/screen/Play';
import logger from './app/utility/logger';


logger.start();

function App() {
  logger.log(new Error('Error in app'))
  return (
    <Play/>
  );
}

export default App;

