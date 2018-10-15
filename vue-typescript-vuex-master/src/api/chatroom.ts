import Axios from "axios";

export default {
    getArtic (params: Loader.RequestParams): Promise<Loader.Response> {
        return Axios.get(`/api/user/chatroomsg`, { params });
    },
    saveView (params: ChatRoom.View.RequestParams): Promise<ChatRoom.View.Response> {
        return Axios.post(`/api/user/view`, params);
    }
};
