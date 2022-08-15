import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { jspPortfolio, mernPortfolio, nextPortfolio } from "../../data";
import MovePortfolio from "../movePortfolio/MovePortfolio";
import ReversePortfolio from "../reversePortfolio/ReversePortfolio";

const Portfolio = () => {
    const [selected, setSelected] = useState("jsp");

    const list = [
        {
            id: "jsp",
            title: "Java Server Pages",
        },
        {
            id: "mern",
            title: "MERN Stack",
        },
        {
            id: "next",
            title: "Next.js",
        },
    ];
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        key={item.id} 
                        title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {selected === 'jsp' && 
                    jspPortfolio.map(portfolio => (
                        <MovePortfolio 
                            key={portfolio.id}
                            title={portfolio.title}
                            desc={portfolio.desc}
                            img={portfolio.img}
                            link={portfolio.link}
                        />
                    ))
                }
                
                {selected === 'mern' &&
                    mernPortfolio.map(portfolio => (
                        <ReversePortfolio 
                            key={portfolio.id}
                            title={portfolio.title}
                            desc={portfolio.desc}
                            img={portfolio.img}
                            link={portfolio.link}
                        />
                    ))
                }

                {selected === 'next' &&
                    nextPortfolio.map(portfolio => (
                        <MovePortfolio 
                            key={portfolio.id}
                            title={portfolio.title}
                            desc={portfolio.desc}
                            img={portfolio.img}
                            link={portfolio.link}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;
