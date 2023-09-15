import React from "react"

export default function Navbar() {

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
    };

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">SPYEYE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/showEmployee">Sale Agents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/showBranches">Branches</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Cart</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">LOGOUT</a> */}
                            <button onClick={logOut} className="btn btn-primary">
                                Log Out
                            </button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


