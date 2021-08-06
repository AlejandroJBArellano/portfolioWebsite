import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return <nav>
            <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">My targets and values</a></li>
            </ul>
        </nav>
    }
}
