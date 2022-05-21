import Header from 'components/HeaderNavigation'
import React from 'react'
import AuthGuard from 'Routes/guards/AuthGuard'

const BaseLayout: React.FC<any> = ({ children }) => {
    return (
        <AuthGuard>
            <Header />
            <div className='mt-5 pt-3'>
                {children}
            </div>
        </AuthGuard>
    )
}

export default BaseLayout;