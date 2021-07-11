import React from "react";

import plusSvg from '../assets/img/plus.svg';

import List from "./List";


export const AddButtonList = () => {
    return (
        <>
            <List items={[
            { 
            className: 'list__add-button',
            icon: plusSvg,
            name: 'Добавить список', 
            isActive: false
             }
        ]} isRemovable={false}/>

        <div className=""> </div>
        </>
    )
}

export default AddButtonList;
