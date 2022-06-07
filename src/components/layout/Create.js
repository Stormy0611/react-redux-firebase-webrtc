import React from 'react'
import Header from './Header';
import LeftSide from './LeftSide';
import Session from './Session';
// import { useState } from 'react';

const Create = () => {

    // const [comp, setComp] = useState(false)

    // const changeComp = (_comp) => {
    //     setComp(_comp);
    // }

    // let currentComp;
    // if (comp)
    //     currentComp = (<Session />)
    // else
    //     currentComp = (<Center onchange={changeComp} />)

    return (
        <div className='Create'>
            <Header />
            <LeftSide />
            {/* {currentComp} */}
            <Session />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
        </div>
    )
}



export default Create