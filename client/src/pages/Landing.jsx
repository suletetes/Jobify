import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import {Logo} from "../components/index.js";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobify" className="logo"/>
                <nav>
                    <Logo/>
                </nav>
                <div className="container page">
                    <div className="info">
                        <h1>
                            job<span>tracking</span> app
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga fugiat inventore,
                            molestiae odit quaerat quasi saepe
                        </p>
                        <Link to="/register" class="btn register-link">
                            Register
                        </Link>
                        <Link to="/login" class="btn">
                            Login / Demo User
                        </Link>
                    </div>
                    <img src={main} alt="job hunt" className="img main-img"/>

                </div>

            </nav>
        </Wrapper>
    )
}
export default Landing
