import React from 'react'

// import Link from 'next/link'

import '../assets/css/header.scss'

export default function Header() {
    return (
        // <Link prefetch href={"http://localhost:3000/"}>
            <a href="/">
                <div className="header">
                    しにゃいの学習帳
                </div>
            </a>
        // {/* </Link> */}
    )
}

