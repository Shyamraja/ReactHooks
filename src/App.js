import React from 'react';
import Profile from './component/Profile'
import Counter from './component/Counter'
function App() {
  return (
    <div className="App">
      <Profile />     
      <div className="Counter">
        <Counter/>
      </div>
    </div>
  );
}

export default App;
