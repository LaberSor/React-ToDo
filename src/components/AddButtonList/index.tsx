import React from "react";


import plusSvg from '../../assets/img/plus.svg';
import './AddList.scss';
import '../../index.scss';
import { colors } from '../../assets/db.json'
import closeSvg from '../../assets/img/close.svg';

import List from "../List";
import Badge from "../Badge";

/* interface addListPropsextends Array<propsFromAddList> {
    colors: [propsFromAddList];
} 
 */
/* interface propsFromAddList {
    id: any,
    name: any
} */

const AddList/* : React.FunctionComponent< addListProps > */ = (/* colors */) => {
    const [isPopupVizible, setPopupVizible] = React.useState(false);
    const [isColorActive, setColorActive] = React.useState(colors[0].id);

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
                <img onClick={() => popupVizibility()} src={closeSvg} alt="Close" className="add-list__popup-close-btn"/>
                <input className="field" type="text" placeholder="Название списка"></input>
                <div className="add-list__popup-colors">
                    {
                        colors.map((color: any) => 
                            <Badge 
                            className={isColorActive === color.id && 'active'} 
                            activateColor={() => setColorActive(color.id)} 
                            key={color.id} 
                            color={color.name}/>
                        )
                    }
                </div>
                <button className="button">Добавить</button>
             </div>}
        </div>
    )
}

export default AddList;
