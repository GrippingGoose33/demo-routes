import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App';
import Error404 from './Components/Error/404';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes';
import CharacterUI from './Components/CharacterUI/CharacterUI';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/character" element={<CharacterUI/>} />
            <Route path= "/about" element={<About/>} />
            <Route path= "/contact" element={<Contact/>} />
            <Route path= "*" element={<Error404/>} />
            <Route path= "/notes" element={<Notes/>} />
            <Route path= "/notes/:noteid" element={<Notes/>} />
        </Routes>
    </App>
)

export default AppRoutes;