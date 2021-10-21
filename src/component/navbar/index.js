import './navbar.css';

function Navbar(){
    return (
        <div className="nav">
            <div className="logo">
                <h3 className="text-0">Healthcare</h3>
            </div>
            <div className="menu">
                <ul>
                    <li className="text-1">
                        Halo,<p className="txt-primary">Guest</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;