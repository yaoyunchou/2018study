import axios from 'axios'
import qs from 'qs'

//配置服务器路由地址，用于获取异步数据
//本地数据获取链接
//var API_ROOT = "http://local.royole.com/index.php?route=web/"

//qa 服务器数据获取链接
//var API_ROOT = "http://qa.royole.com/index.php?route=web/"
//var API_EMAIL = 'http://qa.royole.com/index.php?route='
var API_ROOT = '/api/index.php?route=web/'
var API_EMAIL = '/api/index.php?route='

//qa2 服务器数据获取链接
//var API_ROOT = "http://qa2.royole.com/index.php?route=web/"
//var API_EMAIL = 'http://qa2.royole.com/index.php?route='

//www 正式上线服务器数据获取链接
//var API_ROOT = "http://www.royole.com/index.php?route=web/"
//var API_EMAIL = 'http://www.royole.com/index.php?route='


//异步验证用户输入后 用户名判断、登陆判断
const login = {
	checkName(data) {
	  return axios.post(API_ROOT + 'login/usernameCheck', qs.stringify(data))
	},
    checkLogin(data) {
	  return axios.post(API_ROOT + 'login/userLogin', qs.stringify(data))
	},
	getUser(data) {
	  return axios.post(API_ROOT + 'user/getUserInfo', qs.stringify(data))
	}
}

//动态的获取导航，包含中文导航和英文导航两种数据格式的返回
const nav = {
  getProductsList(){
    return axios.get(API_ROOT + 'product/getProductTypes')
  },
  getLanguage(data){
	return axios.post(API_ROOT + 'user/setLanguage', qs.stringify(data))
  },

}

//动态获取零售网点信息
const retailStore = {
	getStoreCity(data){
	    return axios.post(API_ROOT + 'information/retailStoreCity', qs.stringify(data))
	},
	getStoreList(data){
	    return axios.post(API_ROOT + 'information/retailStoreList', qs.stringify(data))
	}
}

//动态获取新闻中心信息
const news = {
	//获取分类信息
	getAllId(data){
		return axios.post(API_ROOT + 'company_news/getAllId', qs.stringify(data))
	},
	//获取公司动态 列表信息
	getDynamicsList(data){
	    return axios.post(API_ROOT + 'company_news/getArticleList', qs.stringify(data))
	},
	//获取公司动态 详情信息
	getDynamicsDetail(data){
	    return axios.post(API_ROOT + 'company_news/getArticleDetail', qs.stringify(data))
	},
	//获取媒体报道 列表信息
	getCoverageList(data){
	    return axios.post(API_ROOT + 'media_report/getArticleList', qs.stringify(data))
	},
	//获取媒体报道 详情信息
	getCoverageDetail(data){
	    return axios.post(API_ROOT + 'media_report/getArticleDetail', qs.stringify(data))
	},
	//增加公司动态文章浏览量
	addDynamicsView(data){
		return axios.post(API_ROOT + 'company_news/addArticleView', qs.stringify(data))
	},
	//增加媒体报道文章浏览量
	addCoverageView(data){
		return axios.post(API_ROOT + 'media_report/addArticleView', qs.stringify(data))
	}

}

//底部邮箱接口
const email = {
	//提交页面信息
	PostAllInfo(data){
		return axios.post(API_EMAIL + 'account/mailfeedback', qs.stringify(data))
	}
}


export default {
  login,
  nav,
  retailStore,
  news,
	email
}
