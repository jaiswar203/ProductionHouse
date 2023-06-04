import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '.'


const Layout = ({ title, children, description }) => {
    
    return (
        <>
            <Head>
                <title>{title ? `${title} - KMAX Digital` : 'KMAX Digital'}</title>
                {description && <meta name='description' content={description} />}
                
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>

    )
}

export default Layout
