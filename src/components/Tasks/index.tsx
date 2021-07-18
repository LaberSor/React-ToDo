import React from 'react';

import penSvg from '../../assets/img/pen.svg'

import './Tasks.scss';

const Tasks:React.FunctionComponent<any> = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">Фронтенд
                <img src={penSvg} alt="pen" />
            </h2>

            <div className="tasks__items">
                <div className="checkbox">
                    <input type="checkbox" />
                    <label htmlFor=""></label>
                </div>
            </div>
        </div>
    )
}

export default Tasks;