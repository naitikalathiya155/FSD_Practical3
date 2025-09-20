import React, { useState, useEffect } from "react";

function App() {
  // State for date & time
  const [dateTime, setDateTime] = useState(new Date());

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to CHARUSAT!!!!</h1>
      <h2>It is 19/09/2025</h2>
      <h2>It is {dateTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
