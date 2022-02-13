import AnimatedShapes from "../animatedShapes/AnimatedShapes";
import "./about.scss";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="card bg"></div>
                <div className="card">
                    <img src="assets/me_720.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="info">
                    <h1 className="mainTitle">學無止境</h1>
                    <p className="sub">
                    </p>
                    
                    <h3 className="title">SAMSUNG TECHWIN CO., LTD.</h3>
                    <p className="sub">
                        Seongnam, Korea (July 2006 – June 2011)
                    </p>
                    <p className="sub">
                        Research Engineer, SMT Development Group, R&D Team
                    </p>
                    <p className="desc">
                        Operating System/GUI Developer in C++
                    </p>
                    {/* <p className="desc">
                        Maintenance Project: SMT Chip Mounter CP60/SM310 Series
                    </p>
                    <p className="desc">
                        Development Project: SMT Shield Can Mounter and Chip Mounter Q/V Series
                    </p> */}
                    
                    <h3 className="title">FUNFUN THAI MAGAZINE</h3>
                    <p className="sub">
                        Bangkok, Thailand (February 2012 – October 2016)
                    </p>
                    <p className="sub">
                        President, Writer & Editor
                    </p>
                    <p className="desc">
                        Ran Travel Web Magazine
                    </p>
                    {/* <p className="desc">
                        Found contents and Wrote articles
                    </p> */}

                    <h3 className="title">SB HOUSE</h3>
                    <p className="sub">
                        Bangkok, Thailand (August 2015 – September 2016)
                    </p>
                    <p className="sub">
                        President
                    </p>
                    <p className="desc">
                        Ran Hostel & Travel Agency
                    </p>

                    <h3 className="title">INNOMETRY CO., LTD.</h3>
                    <p className="sub">
                        Anyang, Korea (April 2017 – June 2018)
                    </p>
                    <p className="sub">
                        Deputy General Manager, New Business Department
                    </p>
                    <p className="desc">
                        Operating System/GUI Developer in C++, Team Leader
                    </p>
                    {/* <p className="desc">
                        Maintenance Project: X-ray Battery Inspector
                    </p>
                    <p className="desc">
                        Development Project: X-ray Food Inspector
                    </p> */}

                    <h3 className="title">IT WILL INSTITUTE</h3>
                    <p className="sub">
                        Busan, Korea (July 2018 – January 2019)
                    </p>
                    <p className="sub">
                        Trainee
                    </p>
                    <div className="desc">
                        Complete the course of Java Web Programming with IoT
                    </div>
                    {/* <p className="desc">
                        Learned Java, JSP, Oracle, MySQL, JavaScript, jQuery, Ajax, CSS, HTML
                    </p> */}
                </div>                
                {/* <div className="award">
                    <div className="texts">
                        <h4 className="title">International Design Awards 2021</h4>
                        <p className="desc">
                            Gain worldwide exposure and enter one of the most respected global design awards.
                        </p>
                    </div>
                </div> */}
            </div>
            <AnimatedShapes />     
        </div>
    );
};

export default About;