declare namespace Reset {
    export interface RequestParams {
        nickname: any,
        name: string,
        sex: string,
        age: string,
        password: string
    }
    export interface Data {
        mes: string
    }
    export interface Response {
        data: Data
    }
    export interface State {
        params: RequestParams,
        data: Data,
        requestStatus: Loader.RequestStatus,
        isEmpty: boolean
    }
}