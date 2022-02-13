import { Mail, PhoneIphone } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">web portfolio</a>
                    <div className="itemContainer">
                        <PhoneIphone className="icon"/>
                        <span>+82 10 7462 6009</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>bein2u@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
