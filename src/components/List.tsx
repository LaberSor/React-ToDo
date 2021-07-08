import React from "react";

import listSvg from '../assets/img/list.svg';

interface listProps {
    items: object[];
}

interface itemFromProps: Object {
    icon: any,
        name: string
}

const List: React.FunctionComponent<listProps> = ({ items }) => {
    return (
        <ul className="todo__list">
            {
                items.map((item: itemFromProps) => (
                    <li>
                        <i>
                            <img src={item.icon} alt="List icon" />
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))
            }

        </ul>
    );
}

export default List;