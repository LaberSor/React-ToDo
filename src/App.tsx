import React from 'react';

import './index.scss';
import listSvg from './assets/img/list.svg';

import List from './components/List';
import AddButtonList from './components/AddButtonList';

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
       <AddButtonList />
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;

