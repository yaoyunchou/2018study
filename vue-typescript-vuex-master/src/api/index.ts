import { Toast } from '../common/comjs';

class BaseAxios {
    async createAxios (axios: any, method: string, url: string, params: any) {
        let param = Object.assign({}, params);
        try {
            if (method === 'get') 
                return await axios({
                    method: method,
                    url: url,
                    params: param
                });
            return axios({
                method: method,
                url: url,
                data: param
            });        
        } catch (err) {
            console.log(err);
            Toast('', '请求失败');
        }
    }
}
export default new BaseAxios();
