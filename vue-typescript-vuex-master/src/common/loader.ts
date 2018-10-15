import chatroom from "../api/chatroom";
import VuexClass from './vuex-class';

export default class BaseLoader extends VuexClass {
    state: Loader.LoaderState = {
        params: {
            limit: 9,
            page: 0
        },
        data: {mes:[]},
        mes: [],
        pullDownStatus: 'unrequest',
        pullUpStatus: 'unrequest',
        position: {x: 0, y: 0}
    }
    _data (state: any): Loader.Data {
        return state.data;
    }
    _mes (state: any): this {
        return state.mes;
    }
    _pullDownStatus (state: any): Loader.LoaderState {
        return state.pullDownStatus;
    }
    _pullUpStatus (state: any): Loader.LoaderState {
        return state.pullUpStatus;
    }
    $assignParams (state: any, params: Loader.RequestParams): this {
        return Object.assign(state.params, params);
    }
    $getScrollPos (state: any):this {
        return state.position;
    }
    $pullDownStart (state: any): this {
        state.data = '';
        state.mes = [];
        state.params.page = 0;
        state.pullDownStatus = 'unrequest';
        state.pullUpStatus = 'unrequest';
        return this;
    }
    $pullDownSuccess (state: any, data: Loader.Data) {
        if (!data) return state.pullUpStatus = 'error';
        if (state.data.mes === '暂无信息') {
            state.data = data;
            state.pullUpStatus = 'done';
            return;
        }
        state.mes = [...data.mes];
        if (state.mes.length === state.params.limit) {
            state.pullDownStatus = 'success';
            state.params.page++;
        } else {
            state.pullUpStatus = 'done';
        }
    }
    $pullUpStart (state: any): this {
        state.pullUpStatus = 'requesting';
        return this;
    }
    $pullUpSuccess (state:any, data: Loader.Data) {
        if (!data) return state.pullUpStatus = 'error';
        if (state.data.mes === '暂无信息') {
            state.data = data;
            state.pullUpStatus = 'done';
            return;
        }
        state.mes = [
            ...state.mes,
            ...data.mes
        ];
        if (state.mes.length === state.params.limit) {
            state.pullUpStatus = 'success';
            state.params.page++;
        } else {
            state.pullUpStatus = 'done';
        }
    }
    $clearData (state: any): this {
        state.data = '';
        state.mes = [];
        state.params.page = 0;
        state.pullDownStatus = 'unrequest';
        state.pullUpStatus = 'unrequest';
        return this;
    }
    async pullDown ({ commit, state }:any): Promise<this> {
        commit('$pullDownStart');
        const res = await chatroom.getArtic(state.params);
        commit('$pullDownSuccess', res.data);
        return this;
    }
    async pullUp ({ commit, state }:any): Promise<this> {
        commit('$pullUpStart');
        const res = await chatroom.getArtic(state.params);
        commit('$pullUpSuccess', res.data);
        return this;
    }
};
