import React, { createContext, useContext } from "react";

const FirstContext = createContext();
const SecondContext = createContext();

const ChildComponent = () => {
  const value = useContext(SecondContext);
  return <h1> {value}</h1>;
};

const SecondProvider = ({ children }) => {
  return (
    <SecondContext.Provider value="Hello">
      {children}
    </SecondContext.Provider>
  );
};

const FirstProvider = ({ children }) => {
  return (
    <FirstContext.Provider value="Hello">
      <SecondProvider>{children}</SecondProvider>
    </FirstContext.Provider>
  );
};

const App = () => {
  return (
    <FirstProvider>
      <ChildComponent />
    </FirstProvider>
  );
};

export default App;
