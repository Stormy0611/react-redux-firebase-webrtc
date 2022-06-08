import React, { useState } from 'react'
import Header from '../layout/Header';
import LeftSide from '../layout/LeftSide';
import Screen from '../layout/Screen';
// import { useState } from 'react';

const Media = (props) => {

    // useLayoutEffect(() => {
    //     window.location.reload(true)
    // }, []);

    return (
        <div className='Media'>
            <Header />
            <LeftSide account={props.account} />
            <Screen />
            <div className='Line' />
            <div className='About' />
            <div className='Copy' />
            <div className='Twit' />
            <div className='Team' />
            <div className='Clock'></div>
        </div>
    )
}



export default Media