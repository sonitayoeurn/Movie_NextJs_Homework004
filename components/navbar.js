import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <header className="bg-light">
        <nav className="navbar bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center" style={{fontSize: "20px"}}>
                    <li className="nav-item" >
                        <img src="https://scalebranding.com/wp-content/uploads/2021/06/Orange-Film-Logo-1.jpg" style={{width: "60px", height: "60px", borderRadius: "50%", marginRight: "20px"}}/>
                    </li>
                    <li className="nav-item" >
                    <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/" style={{color: "white"}}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"} aria-current="page" href="/about" style={{color: "white", marginLeft: "40px"}}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className={router.pathname == "/product" ? "nav-link active" : "nav-link"} aria-current="page" href="/product" style={{color: "white", marginLeft: "40px"}}>Product</a>
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-warning" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </header>
        
    )
}

export default Navbar;