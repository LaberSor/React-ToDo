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

/* interface objForRemove {
    color?: string,
    colorId?: number,
    id?: number,
    name?: string
} */

interface itemsFromList{
    color?: string,
    icon?: string,
    name: string,
    isActive?: boolean,
    className?: any
} 

const List: React.FunctionComponent<listProps> = ({ items, isRemovable, onClickVizible, onRemove }) => {
    return (
        <ul className="list" onClick={onClickVizible}>
            {
                items && items.map((item: itemsFromList /* | objForRemove */, index: number) => (
                    
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
                        onClick={() => onRemove!(item)}/>}

                    </li>
                    
                ))
            }

        </ul>
    );
}

export default List;