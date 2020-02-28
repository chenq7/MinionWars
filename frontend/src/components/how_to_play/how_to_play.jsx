import React from 'react'
import './how_to.css'
import Logo from '../../app/assets/logo.png';


class HowToPlay extends React.Component {



    render(){
        return(
            <div className='how-to-container'>
                <div className='title-container'>
                    <h1 className='how-title'>How to play</h1>
                </div>
                <div className='description'>
                    <p>Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Atque dolor qui ipsam, 
                        maxime saepe cumque delectus 
                        aliquam perferendis sit in iure
                         veniam iusto placeat, cupiditate 
                         beatae nostrum vero? Dolorem, rem!</p>
                </div>
            </div>
        )
    }
}


export default HowToPlay;