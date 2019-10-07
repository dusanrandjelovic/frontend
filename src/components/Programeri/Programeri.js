import React, { Component } from 'react'

//import Header from '../Header'; 

import { Slajder } from './Slajder'
import { Info } from './Info'

//import Footer from '../Footer';

 class Programeri extends Component {
    render() {
        return (
            <div>
                
                <h1 style={{textAlign: 'center', margin: '0 0 30px'}}>PHP programeri</h1>
                <Slajder />
                <Info />
               
            </div>
        )
    }
}
export default Programeri;