import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'

// import Bod from './Bod.jsx'
// import UP from './up.jsx'
// import tec1 from './assets/technp.png'
// import tec2 from './assets/out.png'
import Footer from './Footer.jsx';
// import one from './assets/1.jpg'
// import five from './assets/5.jpg'
// import tewnty from './assets/20.jpg'
// import follow from './assets/Follow.gif'
import App2 from './App2.jsx'
function App() {
    return (
        <>
            {/* <UP></UP> */}
            <Navbar />
            <Routes>
                <Route path="/" element={<App2 />} />
                <Route path="/home" element={<Footer />} />
            </Routes>


        </>
    );
}
export default App