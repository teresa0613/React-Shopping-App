import React from 'react';
import ShoppingApp from "./components/ShoppingApp"




function App() {
  return (
    <div className="container my-3">
      <header className="App-header">
        <h1>Ma liste des courses</h1>
        On va faire une shopping list ! Yay !!
        <ShoppingApp />
      </header>
    </div>
  );
}

export default App;
