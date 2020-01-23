import React from 'react';

const NavBar = ()=>{
    return(
        <React.Fragment>
            <nav className="navbar nav-bar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">4to5</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">Home</li>
                            <li></li>
                        </ul>

                    </div>

                </div>

            </nav>

        </React.Fragment>
    )
}
export default NavBar;