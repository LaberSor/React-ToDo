import React from 'react';

import './index.scss';

import List from './components/List';

function App() {

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: null,
            name: 'Все задачи'
          }
        ]} />
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;

