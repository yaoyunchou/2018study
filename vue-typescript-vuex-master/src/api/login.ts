import Axios from "axios";

export default {
    userLogin (params: Login.RequestParams): Promise<Login.Response> {
        return Axios.post(`/api/user/login`, params);
    }
};
