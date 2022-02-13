import "./reversePortfolio.scss";

const ReversePortfolio = ({title, img, link}) => {
    return (
        <div className="reversePortfolio">
            <div className="container">
                <div className="browser">
                    <div className="sunset"></div>
                    <div className="pastel"></div>
                    <div className="malachite"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" />
                </a>
                <h3>{title}</h3>               
            </div>
        </div>
    );
};

export default ReversePortfolio;
