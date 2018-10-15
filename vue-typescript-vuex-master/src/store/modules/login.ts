import login from '../../api/login'
import VuexClass from '../../common/vuex-class';

class UserLogin extends VuexClass {
    state:Login.LoginState = {
        params: {
            nickname: '',
            password: ''
        },
        data: {},
        loginStatus: 'unrequest',
        isEmpty: true
    }
    _data (state: any): Login.Data {
        return state.data;
    }
    _loginStatus (state: any): Login.LoginState {
        return state.loginStatus;
    }
    $assignParams (state: any, params: Login.RequestParams):this {
        return Object.assign(state.params, params);
    }
    $loginStart (state: any): this {
        state.loginStatus = 'requesting';
        return this;
    }
    $loginSuccess (state:any, data: Login.Data):this {
        if (data) {
            state.loginStatus = 'success';
            state.data = data;
        } else {
            state.loginStatus = 'error';
        }
        return this;
    }
    async userLogin ({ commit, state }:any): Promise<this> {
        commit('$loginStart');
        const res = await login.userLogin(state.params);
        commit('$loginSuccess', res.data);
        return this;
    }
}

export default UserLogin;
