import React from 'react';

import './index.scss';
import listSvg from './assets/img/list.svg';
import { lists, colors } from './assets/db.json'

import List from './components/List';
import AddList from './components/AddButtonList';


function App() {
  const [listsState, setListsState] = React.useState(
    lists.map(item => {
      item.color = colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );

  function onAddList(obj: object): void {
    const newList: Array<any> = [...listsState, obj];
    setListsState(newList);
  }

  function removeList(obj: any):void {
    const newList: Array<any> = listsState.filter(list => list.name !== obj.name)
    setListsState(newList);
  }

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: listSvg,
            name: 'Все задачи',
          }
        ]} isRemovable={false} />
        <List items={listsState} isRemovable={true} onRemove={obj => {removeList(obj)}}/>
       <AddList onAdd={onAddList}/>
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;

