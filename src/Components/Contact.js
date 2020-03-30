import React from 'react'

const onLine = false
const Contact = () => (
    <div className='Contact'>
        <img className='avatar' src = 'https://randomuser.me/api/portraits/men/84.jpg'/>
        
        <div className='status'>
            <p className = 'name'> Gavin Martin </p>
            <p className='status-online'></p>
            <p className='status-text'>{onLine ? 'Online' : 'Offline'}</p>
        </div>
    </div>
)

export default Contact