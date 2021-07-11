import React from "react";

import plusSvg from '../../assets/img/plus.svg';
import './AddList.scss';
import '../../index.scss';

import List from "../List";


export const AddList = () => {
    const [isPopupVizible, setPopupVizible] = React.useState(false);

    const popupVizibility = () => {
        setPopupVizible(!isPopupVizible);
    }

    return (
        <div className="add-list">
            <List items={[
            { 
                className: 'list__add-button',
                icon: plusSvg,
                name: 'Добавить список', 
                isActive: false
            }
            ]} isRemovable={false} onClickVizible={() => popupVizibility()}/>

            {isPopupVizible && <div className="add-list__popup">
                <input className="field" type="text" placeholder="Название списка"></input>
                <button className="button">Добавить</button>
             </div>}
        </div>
    )
}

export default AddList;
