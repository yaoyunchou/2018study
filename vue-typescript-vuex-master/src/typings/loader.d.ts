declare namespace Loader {
    export interface RequestParams {
        limit: number,
        page: number
    }
    export interface Data {
        mes: any
    }
    export interface Response {
        data: Data
    }
    export interface Position {
        x: number,
        y: number
    }
    export interface LoaderState {
        params: RequestParams,
        data: Data,
        mes: any,
        pullDownStatus: RequestStatus,
        pullUpStatus: RequestStatus,
        position: Position
    }
    export type RequestStatus = 'unrequest' | 'requesting' | 'success' | 'error' | 'done'
}