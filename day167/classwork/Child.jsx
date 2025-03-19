import React from 'react';

const ChildComponent = ({ value, setValue }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Current Count: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increase Count</button>
    </div>
  );
};

export default ChildComponent;
