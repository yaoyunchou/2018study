declare namespace Detail {
    namespace ArticDetail {
        export interface RequestParams {
            id: string,
            nickname: any
        }
        export interface Click {
            name: Array<string>,
            num: number
        }
        export interface Commentxt {
            msg?: string,
            name?: Array<string>
        }
        export interface Mes {
            click: Click,
            commentunm: number,
            commentxt: Commentxt,
            createtime: string,
            msg: string,
            nickname: string,
            title: string,
            viewnum: number,
            __v: number,
            _id:string
        }
        export interface Data {
            mes: Mes
        }
        export interface Response {
            data: Data
        }
        export interface State {
            params: RequestParams,
            requestStatus: Loader.RequestStatus,
            dataStore: object
        }
    }
    namespace UserComment {
        export interface RequestParams {
            id: string,
            nickname: any,
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
            data: Data
        }
    }
    namespace AgreeAuthor {
        export interface RequestParams {
            id: string,
            nickname: any
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
            requestStatus: Loader.RequestStatus
        }
    }
    namespace AgreeComment {
        export interface RequestParams {
            id: string,
            nickname: any,
            index: number
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
            requestStatus: Loader.RequestStatus
        }
    }
}