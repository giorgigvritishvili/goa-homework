import React from "react";
import errorboundery from "errorboundary";
import BuggyComponent from "BuggyComponent";

function App() {
  return (
    <div>
      <h1>React Error Boundary Test</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
