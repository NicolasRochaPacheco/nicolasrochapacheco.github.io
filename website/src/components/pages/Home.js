import "./Home.css";
import "./Pages.css";
import myself from "../../myself.png";

function Home(){
    return (
        <div className="page">
            <div className="home-banner">
                <div className="home-banner-header">
                    <div className="home-banner-name">Nicolás<br />Rocha Pacheco</div>
                    <div className="home-banner-title">Hardware Engineer</div>
                </div>
                <div className="home-banner-photo">
                    <img src={myself} alt="myself" />
                </div>
            </div>
            <div className="home-invitation">
                I welcome you to my personal webpage. In this page I would like to
                introduce myself in terms of my education, experience and skills. 
                <br /><br />
                I consider myself to be a hardware engineer i.e. the person that develops
                electronics that have the potential to change the life of billions of
                people. 
                <br /><br />
                Feel free to navigate to know more about myself.
            </div>
        </div>
    );
}

export default Home;
