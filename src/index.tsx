import * as React from 'react'
import { CSSTransition } from 'react-transition-group';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import './style.scss';

const { useState } = React

export type IButtonProps = {
    className?: string,
    toShow?: number,
    fontSize?: number | string,
    showIcon?: boolean,
    width?: number | string,
    height?: number | string,
    bottom?: number | string,
    right?: number | string,
    left?: number | string,
    icon?: HTMLElement,
    style?: object,
    backgroundColor?: string,
    color?: string,
    borderRadius?: number | string,
    children?: any
}

const App: React.FC<IButtonProps> = ({ 
    className = '', 
    toShow = 300,
    fontSize = 16, 
    showIcon = true, 
    width = '3rem', 
    height = '3rem', 
    bottom = 45, 
    right = 45, 
    left = '', 
    icon = <KeyboardArrowUpIcon style={{fontSize: 25}}/>,
    style = {}, 
    backgroundColor = '#363636',
    color = '#fff', 
    borderRadius = 100,
    children = null 
}) => {
  const [show, setShow] = useState(false)

  const backToTop = () =>  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

  const handleScroll = () => setShow( window.scrollY > toShow );

  window.addEventListener('scroll', handleScroll);

  return <CSSTransition
            in={show}
            timeout={200}
            classNames="backToTopButton"
            unmountOnExit
        >
            <button 
                style={{
                backgroundColor, 
                color, 
                borderRadius, 
                fontSize,
                width,
                height,
                right,
                left,
                bottom,
                ...style,
            }} 
            className={`CustomBackToTopButton ${className}`}
            onClick={backToTop}
            >
                {showIcon && icon}
                {children}
            </button>
        </CSSTransition>
};

export default App;