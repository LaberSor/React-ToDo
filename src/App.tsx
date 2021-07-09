import React from 'react';

import './index.scss';
import listSvg from './assets/img/list.svg';

import List from './components/List'

function App() {

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: listSvg,
            name: 'Все задачи',
          }
        ]}/>
        <List items={[
          {
            color: "pink",
            name: 'Поспать', 
            active: false
          },
          {
            color: "green",
            name: 'Купить покушать',
            active: true
          },

        ]} />
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;

