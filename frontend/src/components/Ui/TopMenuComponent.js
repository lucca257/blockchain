import React from 'react';

class TopMenuComponent extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <a className="navbar-brand text-white" href="/">Post App</a>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <div className="navbar-nav">
                            <a href="/" className="nav-item nav-link text-white">Home</a>
                            <a href="/" className="nav-item nav-link text-white">Posts</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default TopMenuComponent;