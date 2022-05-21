import Header from 'components/HeaderNavigation'
import React from 'react'
import AuthGuard from 'Routes/guards/AuthGuard'

const BaseLayout: React.FC<any> = ({ children }) => {
    return (
        <AuthGuard>
            <Header />
            {children}
        </AuthGuard>
    )
}

export default BaseLayout;