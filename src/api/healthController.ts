// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** add GET /api/add */
export async function addUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>('/api/add', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** health GET /api/health */
export async function healthUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/health', {
    method: 'GET',
    ...(options || {}),
  })
}
