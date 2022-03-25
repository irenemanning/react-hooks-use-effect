import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  let text = "Poop"
  useEffect(() => {
    
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return <button>Click Me</button>;
}

export default App;
