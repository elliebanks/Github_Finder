import React from 'react'
import PropTypes from 'prop-types';


const Navbar = ({ icon, title }) => {
        return (
            <nav className="navbar bg-primary">
                <h1>

                    <i className={icon} /> {title}

                    {/* use props inside of the Component: use curly brackets for an expression.
                    When inside of a class based component, the way to access props is using 'this.props',
                    and then whatever the name of the prop is. 'this.props.title'.
                     */}
                </h1>
            </nav>
        )
    
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
