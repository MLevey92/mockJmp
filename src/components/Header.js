const Header = () => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div id="leftNav">
                <a class="navbar-brand" href="#">MockJMP</a>
                <button className="btn btn-default nav-btn">New</button>
            </div>
            <div id="rightNav">
                <form className="form-inline my-2 my-lg-0 search">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                </form>
                <button className="btn btn-default nav-btn">Info</button>
                <button className="btn btn-default nav-btn">Sign In</button>
            </div>
        </nav>
    )
}

export default Header
