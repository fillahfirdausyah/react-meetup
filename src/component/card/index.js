import React from 'react'

function Card(props) {
    return (
        <div class={props.class}>
            {props.children}
        </div>
    )
}

export default Card
