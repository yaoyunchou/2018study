import detail from '../../api/detail'
import VuexClass from '../../common/vuex-class';
import ScrollStore from '../../common/scroll-store';

class SaveData {
    articMessage: any;
    clickDetail: any;
    constructor () {
        this.articMessage = {};
        this.clickDetail = {};
    }
    saveArticMessage (params: any): this {
        return Object.assign(this.articMessage, params);
    }
    saveClickDetail (params: any):this {
        return Object.assign(this.clickDetail, params);
    }
}
/**
 * 获取文章详情
 */
class ArticDetail extends VuexClass {
    state: Detail.ArticDetail.State = {
        params: {
            id: '',
            nickname: ''
        },
        requestStatus: 'unrequest',
        dataStore: {}
    }
    _articMessage (state: any): Detail.ArticDetail.Mes {
        return state.articMessage;
    }
    _clickDetail (state: any): Detail.ArticDetail.Click {
        return state.clickDetail;
    }
    _requestStatus (state: any): Loader.RequestStatus {
        return state.requestStatus;
    }
    _dataStore (state: any):this {
        return state.dataStore;
    }
    $assignParams (state: any, params: Detail.ArticDetail.RequestParams)
        : Detail.ArticDetail.RequestParams {
        return Object.assign(state.params, params);
    }
    $requestStart (state: any):this {
        state.requestStatus = 'requesting';
        return this;
    }
    $requestSuccess (state:any, data: Detail.ArticDetail.Data): this {
        if (data && data.mes) {
            state.requestStatus = 'success';
            if (state.dataStore[data.mes._id]) return this;
            state.dataStore[data.mes._id] = new SaveData();
            state.dataStore[data.mes._id].saveArticMessage({...data.mes});
            state.dataStore[data.mes._id].saveClickDetail({...data.mes.click});
        } else {
            state.requestStatus = 'error';
        }
        return this;
    }
    $clearData (state: any):this {
        state.articMessage = {};
        state.requestStatus = 'unrequest';
        return this;
    }
    async getArticDetail ({ commit, state }:any): Promise<this> {
        commit('$requestStart');
        const res = await detail.getDetail(state.params);
        commit('$requestSuccess', res.data);
        return this;
    }
}
/**
 * 用户评论文章
 */
class UserComment extends VuexClass {
    state: Detail.UserComment.State = {
        params: {
            id: '',
            nickname: '',
            msg: ''
        },
        data: {mes: ''}
    }
    _data (state: any): Detail.UserComment.Data {
        return state.data;
    }
    $assginParams (state: any, params: Detail.UserComment.RequestParams)
        :Detail.UserComment.RequestParams {
        return Object.assign(state.params, params);
    }
    $requestSuccess (state: any, data: any):this {
        if (data.mes === '评论成功!') {
            state.data = {...data};
        } else {
            state.data.mes = '评论失败!';
        }
        return this;
    }
    async userComment ({ state, commit }: any):Promise<this> {
        const res = await detail.userComment(state.params);
        commit('$requestSuccess', res.data);
        return this;
    }
}
/**
 * 点赞作者
 */
class AgreeAuthor extends VuexClass {
    state: Detail.AgreeAuthor.State = {
        params: {
            id: '',
            nickname: ''
        },
        data: {mes: ''},
        requestStatus: 'unrequest'
    }
    _status (state: any):Loader.RequestStatus {
        return state.requestStatus;
    }
    $assginParams (state: any, params: Detail.UserComment.RequestParams)
        :Detail.UserComment.RequestParams {
        return Object.assign(state.params, params);
    }
    $requestStart (state: any):this {
        state.requestStatus = 'requesting';
        return this;
    }
    $requestSuccess (state: any, data: Detail.AgreeAuthor.Data):this {
        if (data.mes === '点赞成功!' || data.mes === '取消成功!') {
            state.data = {...data};
            state.requestStatus = 'success';
        } else {
            state.requestStatus = 'error';
        }
        return this;
    }
    async agreeAuthor ({ state, commit }: any):Promise<this> {
        commit('$requestStart');
        const res = await detail.agreeAuthor(state.params);
        commit('$requestSuccess', res.data);
        return this;
    }
}
/**
 * 点赞评论
 */
class AgreeComment extends VuexClass {
    state: Detail.AgreeComment.State = {
        params: {
            id: '',
            nickname: '',
            index: 0
        },
        data: {mes: ''},
        requestStatus: 'unrequest'
    }
    _status (state: any):Loader.RequestStatus {
        return state.requestStatus;
    }
    $assginParams (state: any, params: Detail.AgreeComment.RequestParams)
        :Detail.AgreeComment.RequestParams {
        return Object.assign(state.params, params);
    }
    $requestStart (state: any):this {
        state.requestStatus = 'requesting';
        return this;
    }
    $requestSuccess (state: any, data: Detail.AgreeComment.Data):this {
        if (data.mes === '点赞成功!' || data.mes === '取消成功!') {
            state.data = {...data};
            state.requestStatus = 'success';
        } else {
            state.requestStatus = 'error';
        }
        return this;
    }
    async agreeComment ({ state, commit }: any):Promise<this> {
        commit('$requestStart');
        const res = await detail.agreeComment(state.params);
        commit('$requestSuccess', res.data);
        return this;
    }
}

class Detail extends VuexClass {
    modules: {
        articDetail: ArticDetail,
        userComment: UserComment,
        agreeAuthor: AgreeAuthor,
        agreeComment: AgreeComment
    }
    constructor () {
        super();
        this.modules = {
            articDetail: new ArticDetail(),
            userComment: new UserComment(),
            agreeAuthor: new AgreeAuthor(),
            agreeComment: new AgreeComment()
        }
    }
}
export default Detail;
