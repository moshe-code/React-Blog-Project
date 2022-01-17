import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="NotFound-root">
            <h1>404</h1>
            <Link to="/">Back to the homepage...</Link>
        
        </div>
    )
}

export default NotFound