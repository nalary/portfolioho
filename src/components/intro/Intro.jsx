import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Full Stack Developer", "JavaScript, C++, Java", "Operating System, GUI Software"],
        });
    }, []);

    return (
        <div className="intro" id="intro">          
            <div className="left">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>ANDY KANG</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                </div>
                <img src="assets/me.png" alt="" />
            </div>
            <AnimatedShapes />
        </div>
    );
};

export default Intro;
