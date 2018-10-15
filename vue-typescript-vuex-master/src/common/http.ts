import axios from 'axios';
import { Toast } from './comjs';

axios.defaults.timeout =  5000;
axios.defaults.baseURL = 'http://127.0.0.1';

// axios.interceptors.request.use(
//     (config: any) => {
//         config.data = JSON.stringify(config.data);
//     }
// )

axios.interceptors.response.use(response => {
    return response;
}, err => {
    if (err) {
        console.log(err);
    } else {
        Toast('', '连接服务器失败');
    }
    return Promise.resolve(err);
})
export default axios;
