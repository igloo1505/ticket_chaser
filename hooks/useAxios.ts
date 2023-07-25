import { AppError } from '#/classes/ErrorHandling'
import { setLoading } from '#/state/slices/network'
import store from '#/state/store'
import axios, { AxiosRequestConfig, Method } from 'axios'

const handleErrorDisplay = (err: AppError) => {
       console.log("err: ", err) 
    }

const useAxios = async (method: Method, url: string, data?: object, config?: AxiosRequestConfig) => {
    store.dispatch(setLoading(true))
    const res = await axios({
        url: url,
        method: method,
        ...(data && {data: data}),
        ...(config && {...config}),
    })
    store.dispatch(setLoading(false))
    if(res.data.error) {
         handleErrorDisplay(res.data.error as AppError)
    }
}

export default useAxios
