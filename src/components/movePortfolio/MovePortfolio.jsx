import "./movePortfolio.scss";

const MovePortfolio = ({title, desc, img, link}) => {
    return (
        <div className="movePortfolio">
            <div className="container">
                <div className="browser">
                    <div className="sunset"></div>
                    <div className="pastel"></div>
                    <div className="malachite"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" />                            
                </a>
            </div>   
            <a href={link} target="_blank" rel="noreferrer" className="link">
                <h3>{title}</h3>                      
            </a>
            <p>{desc}</p>
        </div> 
    );
};

export default MovePortfolio;
