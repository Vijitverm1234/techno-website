import React from 'react';
import Bod from './Bod.jsx'
import UP from './up.jsx'
import tec1 from './assets/technp.png'
import tec2 from './assets/out.png'
import Footer from './Footer.jsx';
import one from './assets/1.jpg'
import five from './assets/5.jpg'
import tewnty from './assets/20.jpg'
import follow from './assets/Follow.gif'
function App2(props) {
    return (
        <>
            <audio autoPlay loop>
                <source src="money.mp3" />
            </audio>
            <div className="container">
                <div className="row">
                    <div className="main-text">

                        <div className="middle-text" >VERTIGO</div>
                    </div>
                </div>
            </div>

            <Bod></Bod>
            <div className="container">
                <div className="row">
                    <img src={tec1} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <center>
                            <img className="tec" src={tec2} alt="" />
                        </center>
                    </div>
                    <div className="col-md-6">
                        <p className='teca'><center>
                            <b><h3>VERTIGO</h3></b>
                        </center>
                            <br /><center>
                                Vertigo, the flagship event of our technical club, Technovation, is a two day
                                jam-packed event with excitement and innovation, tailored for students who love all
                                things techs and fun. From thrilling e-game tournaments to nerve-wracking Shark
                                Tank-style pitches, brain-teasing coding contests, and adrenaline-fueled hackathons,
                                there's something for everyone. It's not just about competing; it's about collaboration,
                                learning, and pushing the boundaries of what's possible in the world of technology.
                                Vertigo is where friendships are formed, ideas are sparked, and dreams take flight. We're on
                                a mission to inspire the next generation of tech leaders and problem-solvers. Each year, we
                                make Vertigo an unforgettable experience where students can unleash their creativity,
                                showcase their skills, and set the stage for a future filled with innovation.
                            </center>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className='con1'>

                        <div className="con">
                            <div className="scroll">

                                <div className="LeftToRight">
                                    <p><b>#VERTIGO</b> <i>2K24</i> REGISTER FAST</p>
                                    <p>#VERTIGO 2K24 REGISTER FAST</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br />
            <div className="container">
                <div className="row">
                    <p className="eve">EVENTS</p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="hov">
                            OPEN SESSIONS
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            IDEATHON
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            TREASURE HUNT
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            AD MAKING
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="hov">
                            BRIDGE THE GAP
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="hov">
                            BUG DEBUG
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="hov">
                            CSS BATTLE
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="hov">
                            QUIZ
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            MEME MANIA
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            BGMI
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="hov">
                            VALORANT
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="hov">
                            BRIDGE THE GAP
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="hov">
                            SMASH KARTS
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="hov">
                            SEMINARS
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App2;