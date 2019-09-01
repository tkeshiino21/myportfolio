import React, { Component } from 'react'
import HelloHeader from './HelloHeader'
import AllSkills from './AllSkills'
import AllContents from './AllContents'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <HelloHeader　/>
                <AllSkills />
                <hr />
                <AllContents />
                <hr />
            </div>
        )
    }
}
