
const { NavLink, Link } = ReactRouterDOM;

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-laptop-code' /> MissBug{' '}
      </h1>
      <ul>
        <li>
          <NavLink activeClassName='nav-active' exact to='/'>
            Bugs
          </NavLink>
        </li>
        {user && (
          <React.Fragment>
            {user.isAdmin && (
              <li>
                <NavLink activeClassName='nav-active' exact to='/users'>
                  Users
                </NavLink>
              </li>
            )}
            <li>
              <NavLink activeClassName='nav-active' onClick={() => onLogout()}>
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/users/${user._id}`}
                activeClassName='nav-active'
              >
                {user.username}
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
