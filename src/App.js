import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Emote from './pages/Emote'
import Dog from './pages/Dog'
import { Footer, Navigation } from './components/02-organisms'

function App() {
    const linkList = [
        { name: 'Emote', destination: '/' },
        { name: 'Dog', destination: '/dog' },
        { name: 'Animal', destination: '/animals' },
    ]

    return (
        <Router>
            <Navigation linkList={linkList} />
            <Switch>
                <Route path='/' exact component={Emote} />
                <Route path='/dog' exact component={Dog} />
            </Switch>

            <Footer />
        </Router>
    )
}

export default App
