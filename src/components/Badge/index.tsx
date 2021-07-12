import React from 'react';
import classNames from 'classnames';

import './Badge.scss';

interface badgeProps {
    color?: string,
    activateColor?: any,
    className?: any
}

const Badge: React.FunctionComponent<badgeProps> = ({ color, activateColor, className }) =>
<i onClick={activateColor} className={classNames('badge', {[`badge--${color}`]: color}, className)}></i>

export default Badge;