import React from 'react';
import axios from 'axios';

import './index.scss';
import listSvg from './assets/img/list.svg';

import { List, AddList, Tasks} from './components/index'


function App() {
  React.useEffect(() => {
    axios.get("http://localhost:3002/lists?_expand=color").then(({data})=> {
      setLists(data);
    });
    axios.get("http://localhost:3002/colors").then(({data})=> {
      setColors(data);
    });
  }, [])

  const [colors, setColors] = React.useState([]) as any;
  const [lists, setLists] = React.useState([]) as any[];

  function onAddList(obj: object): void {
    const newList: Array<any> = [...lists, obj];
    setLists(newList);
  }

  function removeList(obj: any):void {
    const newList: Array<any> = lists.filter((list: any)=> list.name !== obj.name)
    setLists(newList);
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
        <List items={lists} isRemovable={true} onRemove={obj => {removeList(obj)}}/>
       <AddList onAdd={onAddList} colors={colors}/>
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;

