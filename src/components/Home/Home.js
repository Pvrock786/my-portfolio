import React, { Component } from 'react'
import Classes from './Home.module.css';
import satellite from '../../assests/image/satellite/satellite-communications-cartoon-icon-vector-73557.png';
import GlitchClip from 'react-glitch-effect/core/Clip';
import Glitchify from 'react-glitchify';
import Slider from '../SliderComponent/Slider';
import Timer from 'react-compound-timer';
import Pic1 from '../../assests/slider/teaser.png';
import Pic2 from '../../assests/slider/movieshow.jpg';

export default class Home extends Component {
 
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    UNSAFE_componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };


    render() {

        let now = new Date().getTime(); 
        let deadline = new Date("mar 27, 2020 00:00:00").getTime();
        let t = deadline - now;

        let size;
        const { width } = this.state;
        if (width < 350) {
            size = "3em";
        }
        else if (width < 500) {
            size = "2rem";
        }
        else if (width < 800) {
            size = "3rem";
        }
        else {
            size = "4rem";
        }


        return (


            <div className={Classes.home}>
                <div className={Classes.twinkling}></div>
                <div className={Classes.stars}>
                    <div className={Classes.main}>
                        <div className={Classes.star_anim_1}></div>
                        <div className={Classes.star_anim_2}></div>
                        <div className={Classes.star_anim_3}></div>
                        <div className={Classes.star_anim_4}></div>
                        <div className={Classes.star_anim_5}></div>


                        <img className={Classes.satellite} src={satellite}
                            alt="satelliteImage" width="250px" />

                        <div className={Classes.textWrapper} >
                            <div className={Classes.text}>
                                <Glitchify className={Classes.tF} font="Orbitron" fontSize={size} steps={30} background="rgba(0,0,0,0)" color="white">techFEST'20</Glitchify>
                                <GlitchClip iterationCount="infinite" duration='3s'><p className={Classes.coming}>
                                    <Timer
                                        initialTime={t}
                                        direction="backward"
                                    >
                                        {() => (
                                            <React.Fragment>
                                                <Timer.Days /> Days to go
                                            </React.Fragment>
                                        )}
                                    </Timer></p></GlitchClip>
                            </div>
                        </div>


                        <div className={Classes.mars}>
                            <div></div>
                        </div>
                    </div>
                    <div className={Classes.bottom_part}>
                        <div className={Classes.about} >
                            <article>
                                Space, a vast expanse of incalculable contingencies. But with the advent of technology & extensive research, the multiverse has no longer remained an uncharted vicinity. It's a matter of great fortune that we live in such an era where this multidimensional abyss that was once considered an alienated hemisphere is now deemed to dwell upon. techFEST'20 presents a platform where inquisitive minds are invited to take their experience from the past, execute the ideation in the present and thrive in the endeavours of future.
                                As a matter of fact, this year's theme - "Innovation in Space" offers myriad opportunities to contemplate, create and contrivance the philosophies into tangible entities. The stage is set and the footlights are on. Beat the odds and let your theatrics do the talking. Witness the events that’ll fulfil your wishes and open up the gates to a developing realm. Come aboard as we set sail to the interstellar with techFEST’20.
                            </article>
                        </div>
                        <div className={Classes.container}>
                            <div className={Classes.card}>
                                <div className={Classes.card1}>
                                    <h3 className={Classes.title}>50+ EVENTS</h3>
                                </div>
                            </div>

                            <div className={Classes.card}>
                                <div className={Classes.card2}>
                                    <h3 className={Classes.title}>WORKSHOPS</h3>
                                </div>
                            </div>
                            <div className={Classes.card}>
                                <div className={Classes.card3}>
                                    <h3 className={Classes.title}>EXPERT TALKS</h3>
                                </div>
                            </div>
                        </div>
                        <Slider slides={[{
                            head: 'WATCH TEASER>>',
                            link: 'https://youtu.be/5IyH5s1N1Fc',
                            img: Pic1
                        }]} />

                    </div>
                </div>
                <div className={Classes.footerbr}></div>
            </div>
        )
    }
}
