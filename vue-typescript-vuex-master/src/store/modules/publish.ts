import toPublish from '../../api/publish'
import VuexClass from '../../common/vuex-class';

class userPublish extends VuexClass {
    state: Publish.State = {
        params: {
            nickname: '',
            title: '',
            msg: ''
        },
        data: {mes: ''},
        publishStatus: 'unrequest',
        isEmpty: true
    }
    _data (state: any):this {
        return state.data;
    }
    _publishStatus (state: any):this {
        return state.publishStatus;
    }
    $assignParams (state: any, params: Login.RequestParams):this {
        return Object.assign(state.params, params);
    }
    $publishStart (state: any):this {
        state.publishStatus = 'requesting';
        return this;
    }
    $publishSuccess (state:any, data: Login.Data):this {
        if (data) {
            state.publishStatus = 'success';
            state.data = data;
        } else {
            state.publishStatus = 'error';
        }
        return this;
    }
    async userPublish ({ commit, state }:any):Promise<this> {
        commit('$publishStart');
        const res = await toPublish.userPublish(state.params);
        commit('$publishSuccess', res.data);
        return this;
    }
}

export default userPublish;
