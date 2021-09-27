import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/* the props are defined on the Navbar inside the App.js component */}
                    <i className={this.props.icon} /> {this.props.title}
                    </h1>
            </nav>
        )
    }
}

export default Navbar;
