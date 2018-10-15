import chatroom from '../../api/chatroom'
import BaseLoader from '../../common/loader';
import VuexClass from '../../common/vuex-class'
import ScrollPosition from '../../common/scroll-position'
import ScrollStore from '../../common/scroll-store';

class ArticList extends BaseLoader {
    constructor() {
        super();
    }
}
class View extends VuexClass {
    state: ChatRoom.View.State = {
        params: {
            id: ''
        },
        data: {mes: ''},
        requestStatus: 'unrequest',
        position: {x: 0, y: 0},
        scroll: {}
    }
    _data (state: any): ChatRoom.View.Data {
        return state.data;
    }
    _requestStatus (state: any): Loader.RequestStatus {
        return state.requestStatus;
    }
    $assignParams (state: any, params: ChatRoom.View.RequestParams): this {
        return Object.assign(state.params, params);
    }
    $RequestStart (state: any): this {
        state.pullUpStatus = 'requesting';
        return this;
    }
    $RequestSuccess (state:any, data: ChatRoom.View.Data):void {
        if (!data || data.mes !== '浏览成功!') {
            state.requestStatus = 'error';
            return;
        }
        state.data = {...data};
        state.requestStatus = 'success';
        return;
    }
    async saveView ({commit, state}: any): Promise<this> {
        commit('$RequestStart');
        const res = await chatroom.saveView(state.params);
        commit('$RequestSuccess', res.data);
        return this;
    }
}
class ChatRoom extends VuexClass {
    modules: {
        articList: ArticList
        view: View
    }
    constructor () {
        super();
        this.modules = {
            articList: new ArticList(),
            view: new View()
        }
    }
}
export default ChatRoom;
