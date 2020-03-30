import React from 'react'

const onLine = true
const Contact = () => (
    <div className='Contact'>
        <img className='avatar' src='https://randomuser.me/api/portraits/men/84.jpg' />
        <div>
            <h4 className='name'> Gavin Martin </h4>
            
            <div className='status'>
            
                <div className={onLine ? "status-online" : "status-offline"}></div>
                <p className='status-text'>{onLine ? 'Online' : 'Offline'}</p>
                </div>
        </div>
    </div>
)

export default Contact