import React from 'react'
import Header from '../layout/Header';
import LeftSide from '../layout/LeftSide';
import Center from '../layout/Center';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
// import { useState } from 'react';

const Home = (props) => {

    // useLayoutEffect(() => {
    //     window.location.reload(true)
    // }, []);

    return (
        <div className='Home'>
            <Header />
            <LeftSide account={ props.account}/>
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