import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../context';
import links from '../utils/links'; // assuming this is where links are defined

const NavLinks = ({ isBigSidebar }) => {
    const { user, toggleSidebar } = useDashboardContext();
    const { role } = user;

    return (
        <div className='nav-links'>
            {links.map(({ text, path, icon }) => {
                if (role !== 'admin' && path === 'admin') return null;

                return (
                    <NavLink
                        to={path}
                        key={text}
                        onClick={isBigSidebar ? null : toggleSidebar}
                        className='nav-link'
                        end
                    >
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavLinks;
