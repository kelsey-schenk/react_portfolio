import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
    const [projects] = useState([

    ]);

    return (
        <div>
            <Nav>

            </Nav>
            <main>
                <Header></Header>
                <Project></Project>
                <Footer></Footer>
            </main>
        </div>
    )
}

export default App;