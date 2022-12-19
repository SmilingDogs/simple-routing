import React from 'react'

const Details = ({ data }) => {
    return (
        <ul>
            {data.map((obj, i) => (
                <li key={i}>{obj.keyPoints.map((point, j) => (
                    <p key={j}>{point}</p>
                ))}
                    {obj.links.map((link, h) => (
                        <>
                            <a href={link[1]} key={h}>{link[0]}</a>
                            <br />
                        </>
                    ))}
                    <a href={obj.youtube}>Watch it on Youtube</a>
                    <br />
                    {obj.hometask.map((task, k) => (
                        <span key={k} className='task'>{task}</span>
                    ))}
                </li>
            ))}
        </ul>
    )
}

export default Details;