import register from '../../api/register'
import VuexClass from '../../common/vuex-class';

class UserRegister extends VuexClass {
    state:Register.State = {
        params: {
            nickname: '',
            name: '',
            password: '',
            sex: '',
            age: ''
        },
        data: {mes: ''},
        registerStatus: 'unrequest',
        isEmpty: true
    }
    _data (state: any): this {
        return state.data;
    }
    _RegisterStatus (state: any): this {
        return state.registerStatus;
    }
    $assignParams (state: any, params: Register.RequestParams): this {
        return Object.assign(state.params, params);
    }
    $registerStart (state: any): this {
        state.loginStatus = 'requesting';
        return this;
    }
    $registerSuccess (state:any, data: Register.Response): this {
        if (data) {
            state.loginStatus = 'success';
            state.data = data;
        } else {
            state.loginStatus = 'error';
        }
        return this;
    }
    async userRegister ( { commit, state }: any): Promise<this> {
        commit('$registerStart');
        const res = await register.userRegister(state.params);
        commit('$registerSuccess', res.data);
        return this;
    }
}
export default UserRegister;
