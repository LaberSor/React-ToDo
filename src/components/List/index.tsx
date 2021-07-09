import React from "react";

import './List.scss';

interface listProps {
    items: itemsFromList[];
}

interface itemsFromList{
    color?: string,
    icon?: string,
    name: string,
    active?: boolean
} 

const List: React.FunctionComponent<listProps> = ({ items }) => {
    return (
        <ul className="list">
            {
                items.map((item: itemsFromList, index: number) => (
                    
                    <li key={index} className={item.active ? 'active' : ''}>
                        <i>{item.icon ? (
                            <img src={item.icon} alt="Icon" />
                            ) : (
                            <i className={`badge badge--${item.color}`}></i>)
                        }</i>
                        <span>{item.name}</span>
                    </li>
                    
                ))
            }

        </ul>
    );
}

export default List;