declare namespace Register {
    export interface RequestParams {
        nickname: string,
        name: string,
        password: string,
        sex: string,
        age: string
    }
    export interface Data {
        mes: string
    }
    export interface State {
        params: RequestParams,
        data: Data,
        registerStatus: Loader.RequestStatus,
        isEmpty: boolean
    }
    export interface Response {
        data: Data
    }
}