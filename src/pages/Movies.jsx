import { Link } from "react-router-dom"

export const Movies = () => {
    return (
        <>
            <h1>All movies are here</h1>
            <ul>
                <li><Link to={'/movies/1'}>Lord of the Rings</Link></li>
                <br />
                <li><Link to={'/movies/2'}>Gladiator</Link></li>
                <br />
                <li><Link to={'/movies/3'}>5th element</Link></li>
            </ul>
        </>
    )
}

