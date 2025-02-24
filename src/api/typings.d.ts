declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
    timestamp?: number
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
    timestamp?: number
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
    timestamp?: number
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
    timestamp?: number
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
    timestamp?: number
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User
    message?: string
    timestamp?: number
  }

  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
    timestamp?: number
  }

  type DeleteRequest = {
    id?: number
  }

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type LoginUserVO = {
    createTime?: string
    editTime?: string
    id?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type User = {
    createTime?: string
    editTime?: string
    id?: number
    isDelete?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userPassword?: string
    userProfile?: string
    userRole?: string
  }

  type UserAddRequest = {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserQueryRequest = {
    current?: number
    id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    userAccount?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserRegisterRequest = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateRequest = {
    id?: number
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserVO = {
    createTime?: string
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
