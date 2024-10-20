import illustration from "/Users/henriettajeansson/Documents/sommarprojekt-24/portfolio/portfolio-client/src/assets/Henrietta-portfolio.png";
import '../styles/main.scss';


export const HeroSection = () => {

    return (
        <>

            <img src={illustration} className='hero' width="1920"
                height="1080" alt="En illustrerad Henrietta med datorskärm och oljemålning" />
        </>
    );
};