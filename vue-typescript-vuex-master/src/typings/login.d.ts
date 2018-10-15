declare namespace Login {
    export interface RequestParams {
        nickname: string,
        password: string
    }
    interface Data {
        nickname?: string,
        mes?: string
    }
    export interface Response {
        data: Data
    }
    export interface LoginState {
        params: RequestParams,
        data: Data,
        loginStatus: Loader.RequestStatus,
        isEmpty: boolean
    }
}