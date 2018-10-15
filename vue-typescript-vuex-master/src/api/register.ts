import Axios from "axios";

export default {
    userRegister (params: Register.RequestParams): Promise<Register.Response> {
        return Axios.post(`/api/user/register`, params);
    }
};
