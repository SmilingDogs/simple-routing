import React from 'react'

const Card = ({ dataObj }) => {
    const {title, type} = dataObj;
    return (
        <div className='card'>
            <p>Lesson title: {title}</p>
            <p>Lesson type: {type}</p>
        </div>
    )
}

export default Card;