import {Link, useRouteError} from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage.js";
import img from "../assets/images/not-found.svg"


const Error = () => {
    const error = useRouteError()
    console.log(error)
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not found"/>
                    <h3>Ohh! Page not found</h3>
                    <p>we can't seem to find the page you are looking for</p>
                    <Link to='/dashboard'>back home</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <div>
            <h1>Error Page</h1>
            <Link to="/">Back Home </Link>
        </div>
    )
}
export default Error