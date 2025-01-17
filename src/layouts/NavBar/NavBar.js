
function NavBar() {

    return (
        <header className = "sticky-nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

            <div className="container-fluid">
                <img src='./images/logo2.png' width="40" height="40" className="d-inline-block align-top" alt="logo"/>
                <a className="navbar-brand" href="/#">Link Up</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Favorite</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Friends</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Create Events</a>
                        </li>            
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;