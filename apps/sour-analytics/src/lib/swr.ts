import axios, { AxiosError, AxiosRequestConfig } from 'axios'

import { Exception } from './exception'

type Props = Pick<AxiosRequestConfig, 'data' | 'method' | 'params'>

export const fetcher = async <T>(url: string, props: Props): Promise<T> => {
  try {
    const { data } = await axios.request<T>({
      ...props,
      url,
      withCredentials: true
    })

    return data
  } catch (error) {
    if ((error as AxiosError).response) {
      throw new Exception(error.response.status, error.response.data.error)
    }

    if (error instanceof Error) {
      throw new Exception(500, error.message as keyof IntlMessages)
    }

    throw new Error('unknown_error')
  }
}
