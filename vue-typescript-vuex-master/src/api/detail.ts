import Axios from "axios";

export default {
    getDetail (params: Detail.ArticDetail.RequestParams):
        Promise<Detail.ArticDetail.Response>
    {
        return Axios.post('/api/user/detail', params);
    },
    userComment (params: Detail.UserComment.RequestParams):
        Promise<Detail.UserComment.Response>
    {
        return Axios.post('/api/user/comment', params);
    },
    agreeAuthor (params: Detail.AgreeAuthor.RequestParams):
        Promise<Detail.AgreeAuthor.Response>
    {
        return Axios.post('/api/user/agree/artic', params);
    },
    agreeComment (params: Detail.AgreeComment.RequestParams):
        Promise<Detail.AgreeComment.Response>
    {
        return Axios.post('/api/user/agree/comment', params);
    }
};
