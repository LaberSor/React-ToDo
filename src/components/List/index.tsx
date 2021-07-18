import React from "react";
import classNames from 'classnames';

import removeSvg from '../../assets/img/remove.svg'
import Badge from '../Badge'
import './List.scss';

interface listProps {
    items: Array<itemsFromList>,
    isRemovable: boolean,
    onClickVizible?: any,
     onRemove?:(item: itemsFromList) => void
}

interface itemsFromList{
    color?: string,
    icon?: string,
    name: string,
    isActive?: boolean,
    className?: any
} 

const List: React.FunctionComponent<listProps> = ({ items, isRemovable, onClickVizible, onRemove }) => {
    const removingList = (item: itemsFromList) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            onRemove!(item)
        }
    }

    return (
        <ul className="list" onClick={onClickVizible}>
            {
                items && items.map((item: itemsFromList, index: number) => (
                    
                    <li key={index} className={classNames(item.className, {'active': item.isActive})}>
                        <i>{item.icon ? (
                            <img src={item.icon} alt="Icon" />
                            ) : (
                           <Badge color={item.color}/>)
                        }</i>
                        <span>{item.name}</span>
                        {isRemovable && <img 
                        src={removeSvg} 
                        alt="remove list" 
                        className="list__remove-btn"
                        onClick={() => removingList(item)}/>}

                    </li>
                    
                ))
            }

        </ul>
    );
}

export default List;