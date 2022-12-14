import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>OOPS!</h1>
            <p>Something went wrong... </p>
            <p>{error.statusText ?? error.message}</p>
        </div>
    )
}
