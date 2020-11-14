import React from 'react';
import Profile from './component/Profile'
import Counter from './component/Counter'
import TodoList from './component/TodoList'


function App() {
  return (
    <div className="Hook Learning">
      <Profile />   
      <div className="Counter">
        <Counter/>
      </div>
      <div className='todo'>
      <TodoList />
    </div>
    
    </div>
  );
}

export default App;
