import "./works.scss";
import { useState } from 'react';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/movie.png",
            title: "WATCHO App",
            sub: "MERN Stack Netflix Clone App",
            desc: "React, Node, Express, MongoDB, REST API, Crypto-js, Axios, JWT, Context API, Sass, Material UI, Recharts, Firebase",
            img: "./assets/watcho.jpg",
            link: "https://watcho.vercel.app/",
        },
        {
            id: "2",
            icon: "./assets/cart.png",
            title: "Shop.Ho App",
            sub: "MERN Stack Online Shopping App",
            desc: "React, Node, Express, MongoDB, REST API, Crypto-js, Axios, JWT, Redux, Stripe, Styled-components, Material UI, Recharts, Firebase",
            img: "./assets/shopho.jpg",
            link: "https://shopho.vercel.app/",
        },
        {
            id: "3",
            icon: "./assets/social.png",
            title: "Ho.Social App",
            sub: "MERN Stack Social Media App",
            desc: "React, Node, Express, MongoDB, REST API, Axios, Context API, Firebase, Socket.io",
            img: "./assets/hosocial.jpg",
            link: "https://hosocial.vercel.app/",
        },
    ];

    const handleClick = (direction) => {
        if (direction === "left") {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
        } else if (direction === "right"){
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
        }        
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(item => (
                    <div key={item.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <h4>{item.sub}</h4>
                                    <p>{item.desc}</p>
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <span>Move Now</span>
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <div className="imgContainer">
                                    <div className="browser">
                                        <div className="sunset"></div>
                                        <div className="pastel"></div>
                                        <div className="malachite"></div>
                                    </div>
                                    <img src={item.img} alt="" />
                                </div>                                
                            </div>
                        </div>
                    </div>
                ))}                    
            </div>            
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")}/>
            <div className="rightShade" />
        </div>
    );
};

export default Works;
