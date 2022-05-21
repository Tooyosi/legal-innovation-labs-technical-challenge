import Loader from 'components/Loader/Loader';
import { AuthContext } from 'contexts/Auth/AuthContext';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { handleLogout } from 'services/authService';
import { getUser } from 'services/userService';

export const AuthGuard: React.FC<any> = (props) => {
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(AuthContext);
    const allowedRoutes = useMemo(()=> ["/"], [])

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            let { data: { data } } = await getUser()
            setUser((prev: any) => {
                return {
                    ...prev,
                    isLoggedIn: true,
                    ...data
                }
            })
        } catch (error) {
            if(!allowedRoutes.includes(window.location.pathname) && !window.location.pathname.includes('/view')){
                handleLogout()
            }
        } finally{
            setLoading(false)
        }
    }, [allowedRoutes, setUser])

    useEffect(() => {
        if (!user.isLoggedIn) {
            fetchUser()
        }
    }, [user.isLoggedIn, fetchUser])


    if (loading)
        return (
            <div className="vh-100">
                <Loader />
            </div>
        )
    return props.children
}

export default AuthGuard;