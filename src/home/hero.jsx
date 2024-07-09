import style from './hero.module.css'
import javascritp_logo from "../assets/Javascript.png"
import html_logo from "../assets/Html.webp"
import css_logo from "../assets/Css.png"
import react_logo from '../assets/React.png'
import among_us from '../assets/among-us.jpg'

function Hero(props){


    return (
        <>
        <div className={style.heroFlexContainer}>
            <div className={style.hero_techStack}>
                <div className={style.hero}>
                    <h1>Hi, Im Joshua im a front end developer</h1>
                    <p>i still dont kow what to put here :)</p>
                </div>
                <div className={style.techStackContainer}>
                    <img src={javascritp_logo} alt="javascript" width={50}/>
                    <img src={html_logo} alt="html" width={50}/>
                    <img src={css_logo} alt="css" width={50}/>
                    <img src={react_logo} alt="react" width={50}/>
                </div>
            </div>

            <img className={style.heroProfile} src={among_us} alt="" height={400} width={400}/>

        </div>

          
        </>
    );
}

export default Hero