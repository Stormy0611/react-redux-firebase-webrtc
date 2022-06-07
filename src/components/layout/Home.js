import React from 'react'
import Header from './Header';
import LeftSide from './LeftSide';
import Center from './Center';
// import { useState } from 'react';

const Home = () => {

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
        <div className='Home'>
            <Header />
            <LeftSide />
            {/* {currentComp} */}
            <Center />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
        </div>
    )
}



export default Home