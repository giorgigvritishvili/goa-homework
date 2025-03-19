import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const WrapperComponent = () => {
 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Wrapper Component</h1>
     
      <ChildComponent value={count} setValue={setCount} />
    </div>
  );
};

export default WrapperComponent;
