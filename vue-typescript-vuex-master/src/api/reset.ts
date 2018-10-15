import Axios from 'axios'
export default {
    userReset (params: Reset.RequestParams): Promise<Reset.Response> {
        return Axios.post('/api/user/reset', params);
    }
}