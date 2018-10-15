import Axios from "axios";

export default {
    userPublish (params: Publish.RequestParams): Promise<Publish.Response> {
        return Axios.post(`/api/user/publish`, params);
    }
};
