import reset from '../../api/reset'
import VuexClass from '../../common/vuex-class';

class UserReset extends VuexClass {
    state: Reset.State = {
        params: {
            nickname: '',
            name: '',
            sex: '',
            age: '',
            password: ''
        },
        data: {mes: ''},
        requestStatus: 'unrequest',
        isEmpty: true
    }
    _data (state: any): Reset.Data {
        return state.data;
    }
    $assignParams (state: any, params: Reset.RequestParams): this {
        Object.assign(state.params, params);
        return this;
    }
    $ResetStart (state: any):this {
        state.requestStatus = 'requesting';
        return this;
    }
    $ResetSuccess (state:any, data: Reset.Data):this {
        if (data) {
            state.requestStatus = 'success';
            state.data = data;
        } else {
            state.requestStatus = 'error';
        }
        return this;
    }
    async userReset ({ commit, state }:any):Promise<this> {
        commit('$ResetStart');
        const res = await reset.userReset(state.params);
        commit('$ResetSuccess', res.data);
        return this;
    }
}

export default UserReset;
