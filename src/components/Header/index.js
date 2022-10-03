import React from 'react';

import './styles.css';

function Header(props) {
    return(
        <div className='card-header'>
            <h1 className='card-header-title header'>
                You have {props.qtyTodos.length} Todos
            </h1>
        </div>
    )
}

export default Header;