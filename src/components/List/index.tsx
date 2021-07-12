import React from "react";
import classNames from 'classnames';

import Badge from '../Badge'
import './List.scss';

interface listProps {
    items: itemsFromList[],
    isRemovable: boolean,
    onClickVizible?: any;
    
}

interface itemsFromList{
    color?: string,
    icon?: string,
    name: string,
    isActive?: boolean,
    className?: any
} 

const List: React.FunctionComponent<listProps> = ({ items, isRemovable, onClickVizible }) => {
    return (
        <ul className="list" onClick={onClickVizible}>
            {
                items.map((item: itemsFromList, index: number) => (
                    
                    <li key={index} className={classNames(item.className, {'active': item.isActive})}>
                        <i>{item.icon ? (
                            <img src={item.icon} alt="Icon" />
                            ) : (
                           <Badge color={item.color}/>)
                        }</i>
                        <span>{item.name}</span>
                    </li>
                    
                ))
            }

        </ul>
    );
}

export default List;