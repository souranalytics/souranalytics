import axios, { AxiosRequestConfig } from 'axios'

type Props = Pick<AxiosRequestConfig, 'data' | 'method' | 'params' | 'url'>

export const request = async <T>(props: Props): Promise<T> => {
  const { data } = await axios.request<T>({
    ...props,
    baseURL: '/api',
    withCredentials: true
  })

  return data
}
