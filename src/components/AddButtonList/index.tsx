import React from "react";


import plusSvg from '../../assets/img/plus.svg';
import './AddList.scss';
import '../../index.scss';
import closeSvg from '../../assets/img/close.svg';

import List from "../List";
import Badge from "../Badge";

 interface addListProps{
    onAdd(object: any): void,
    colors: any[]
}  

const AddList: React.FunctionComponent<addListProps> = ({onAdd, colors}) => {
    const [isPopupVizible, setPopupVizible] = React.useState(false);
    const [selectedColor, setSelectedColor] = React.useState(0);
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        /* if (Array.isArray(colors)) {
            setSelectedColor(colors[0].id);
        } */
    }, [colors])

    const onClose = (): void => {
        setPopupVizible(!isPopupVizible);
        setInputValue('');
        setSelectedColor(colors[0].id);
    }

    function addList (): void  {
        if (!inputValue) {
            return;
        } 
        console.log("test")
        const color = colors.filter(c => c.id === selectedColor)[0].name;
        onAdd({ id: Math.random()*10, name: inputValue, color});
        onClose();
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
            ]} isRemovable={false} onClickVizible={() => onClose()}/>

            {isPopupVizible && <div className="add-list__popup">
                <img onClick={() => onClose()} src={closeSvg} alt="Close" className="add-list__popup-close-btn"/>
                <input 
                    onChange={element => setInputValue(element.target.value)} 
                    className="field" 
                    type="text" 
                    placeholder="Название списка">
                </input>
                <div className="add-list__popup-colors">
                    {
                        colors.map((color: any) => 
                            <Badge 
                            className={selectedColor === color.id && 'active'} 
                            activateColor={() => setSelectedColor(color.id)} 
                            key={color.id} 
                            color={color.name}/>
                        )
                    }
                </div>
                <button onClick={addList} value={inputValue} className="button">Добавить</button>
             </div>}
        </div>
    )
}

export default AddList;
