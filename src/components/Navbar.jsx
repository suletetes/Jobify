import Wrapper from "../assets/wrappers/Navbar.js";
import {Logo} from "./index.js";
import {FaAlignLeft} from "react-icons/fa"
import {useDashboardContext} from "../pages/DashboardLayout.jsx";
import LogoutContainer from "./LogoutContainer.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {
    const {toggleSidebar} = useDashboardContext()
    return (
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo/>
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <div className="btn-container">
                    <ThemeToggle />
                    <LogoutContainer/>

                </div>

            </div>

        </Wrapper>
    )
}
export default Navbar