import React from 'react'
import ReactTooltip from 'react-tooltip'

const LeftSide = () => {

    const handleClick = (e) => {
        navigator.clipboard.writeText('0x224B88F8767832054eE67872fA2fEeE936618a59')
        setTimeout(() => {
            ReactTooltip.hide()
        }, 1000)

    }

    return (
        <div className='LeftSide'>
            <div className='Avatar' />
            <div className='Avatar_name' />
            <div className='Avatar_stream' />
            <div className='Icon1' />
            <div className='Icon3' />
            <div className='Address' />
            <div className='Icon4' />
            <div className='Icon2' onClick={handleClick} data-tip data-for="copyTip" />
            <ReactTooltip
                event='click' id='copyTip' place="top"
            >
                Copy address to clipboard!
            </ReactTooltip>
            <div className='SessionGroup' />
        </div>
    )
}

export default LeftSide