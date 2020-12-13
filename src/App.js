import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Emote from './pages/Emote'
import Dog from './pages/Dog'
import { Footer, Navigation } from './components/02-organisms'
import { Description, Heading, Link } from './components/00-atoms'
import { VscGithubInverted } from 'react-icons/vsc'
function App() {
    const linkList = [
        { name: 'Emote', destination: '/' },
        { name: 'Dog', destination: '/dog' },
    ]

    return (
        <Router>
            <Navigation linkList={linkList}>
                <Link
                    title='View my code in github'
                    dest='https://github.com/glespinosa/atomic-design'
                >
                    <VscGithubInverted />
                </Link>
                <Heading>Atomic Design System</Heading>
                <Description>
                    The goal of this application is to enhance my skills in
                    using atomic design pattern, view my code by clicking the
                    github icon above.
                </Description>
            </Navigation>
            <Switch>
                <Route path='/' exact component={Emote} />
                <Route path='/dog' exact component={Dog} />
            </Switch>

            <Footer />
        </Router>
    )
}

export default App
