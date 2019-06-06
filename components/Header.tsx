import React from 'react'

import Link from 'next/link'

import '../assets/css/header.scss'

export default function Header() {
    return (
        <Link prefetch href="/">
            <a>
                <div className="header">
                    しにゃいの学習帳
                </div>
            </a>
        </Link>
    )
}

