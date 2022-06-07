import React from 'react'
import { useNavigate } from 'react-router-dom'

const Session = () => {

        let navigate = useNavigate();

        return (
        <div className='Session'>
            <div className='Logo' />
            <div className='Text' />
            <div className='SName' />
            <input type='text' id='name' />
            <div className='SDesc' />
            <input type='text' id='desc' />
            <div className='Fee' />
            <input type='text' id='f  ee' />
            <div className='Min' />
            <div className='Icon' />
            <div className='CreateBtn' />
            <div className='UnderText' />
        </div>
    )
}

export default Session