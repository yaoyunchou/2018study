declare namespace Publish {
    export interface RequestParams {
        nickname: string,
        title: string,
        msg: string
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
        publishStatus: Loader.RequestStatus,
        isEmpty: boolean
    }
}
