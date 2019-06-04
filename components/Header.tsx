import React from 'react'

// import dynamic from 'next/dynamic';

// const Scss=dynamic(import ('../assets/css/header.scss'),{ssr:true});

import '../assets/css/header.scss'

export default function Header() {
    return (
        <div className="header">
            This is Header
        </div>
    )
}

