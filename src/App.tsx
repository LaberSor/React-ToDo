import React from 'react';

import './index.scss';
import listSvg from './assets/img/list.svg';
import plusSvg from './assets/img/plus.svg';

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
        ]} isRemovable={false}/>
        <List items={[
          {
            color: "pink",
            name: 'Поспать', 
            isActive: false
          },
          {
            color: "green",
            name: 'Купить покушать',
            isActive: true
          },

        ]} isRemovable={true}/>
        <List items={[
          { 
            className: 'list__add-button',
            icon: plusSvg,
            name: 'Добавить список', 
            isActive: false
          }
        ]} isRemovable={false}/>
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;

