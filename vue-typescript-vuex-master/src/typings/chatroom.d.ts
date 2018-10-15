declare namespace ChatRoom {
    namespace ArticList {
        export interface RequestParams {
            limit: number,
            page: number
        }
        export interface Response {
            mes: string | Array<string>
        }
        export interface Position {
            x: number,
            y: number
        }
    }
    namespace View {
        export interface RequestParams {
            id: string
        }
        export interface Data {
            mes: string   
        }
        export interface Response {
             data: Data
        }
        export interface Position {
            x: number,
            y: number
        }
        export interface State {
            params: RequestParams,
            data: Data,
            requestStatus: Loader.RequestStatus,
            position: Position,
            scroll: object
        }
    }
}
