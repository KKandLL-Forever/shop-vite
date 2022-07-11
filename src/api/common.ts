/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/dev/login/info'
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/dev/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob'
  })
}
