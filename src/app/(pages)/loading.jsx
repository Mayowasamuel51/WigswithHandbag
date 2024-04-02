import React from 'react'
import "../globals.css"

const loading = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default loading