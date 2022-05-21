import Loader from 'components/Loader/Loader'
import { apiErrorHandler } from 'Helpers/utility'
import React, { useCallback, useEffect, useState } from 'react'
import { getPosts } from 'services/postService'
import LatestPosts from './LatestPosts'

export const Landing: React.FC<any> = () => {

    const [state, setState] = useState({
        loading: true,
        count: 0,
        pageNo: 1,
        hasMore: false,
        data: [],
        limit: 20,
    })

    const getAllPosts = useCallback(async (pageNo = 1) => {
        try {
            const offset = pageNo === 1 ? 0 : pageNo * state.limit;
            let { data: { data } } = await getPosts(state.limit, offset)
            setState((prev) => {
                const newData = pageNo === 1 ? data.rows : prev.data.concat(data.rows)
                return {
                    ...prev,
                    loading: false,
                    data: newData,
                    count: data.count,
                    hasMore: data.count > newData.length,
                }
            })
        } catch (error) {
            apiErrorHandler(error);
            setState((prev) => ({ ...prev, loading: false }))
        }
    }, [state.limit])

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])

    return (
        <div>
            {state.loading ? <Loader /> :
                <LatestPosts
                    data={state.data}
                />
            }
        </div>
    )
}
