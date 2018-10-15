<template>
<div id="detail"
    @click="control"
    v-rescroll="{
        name: `detail${$route.query.id}`,
        path: 'scrollStore'
    }"
>
    <div id="detailcontent">
        <div id="back-btn">
            <button type="button" @click="back()"><span>返回</span></button>
        </div>
        <h1>{{articMessage.title}}</h1>
        <div id="author">
            <span id="name">{{articMessage.nickname}}</span>
            <span>{{time(articMessage.createtime)}}</span>
        </div>
        <div id="artic">
            <span>{{articMessage.msg}}</span>
        </div>
        <div id="comment">
            <div id="commentitle">
                评论区
            </div>
            <div class="commentul">
                <div class="commentli"
                    v-if="hasComment"
                    v-for="(item, index) in articMessage.commentxt"
                    :key="item._id"
                >
                    <div class="commentname">
                        {{item.c_name}}
                    </div>
                    <div class="commentmsg">
                        <span class="time">{{time(item.c_time)}}</span>
                        <span class="agree">
                            <span 
                                :class="item.c_agree.status ? 'agreeimged' : 'agreeimg'"
                                @click="agreeit(index)">
                            </span>
                            <span class="agreenum">{{item.c_agree.num}}</span>
                        </span>
                    </div>
                    <div class="commenttxt" v-html='item.c_msg'>
                    </div>
                </div>
                <div v-if="!hasComment">暂无评论!</div>
                <div id="ulbottom"></div>
            </div>
        </div>
      <div id="footer">
        <div id="operate" v-if="hidshow">
          <input @focus="sayit()" id="input1" type="text" name="" placeholder="说点什么..."/>
          <div class="agreeuthor" @click="agreeAuthors()">
            <span class="authorimg" :class="status ? 'agreeauthorimged' : 'agreeauthorimg'">
            </span>
            <span class="agreeaunum">{{clickDetail.num}}</span>
          </div>
          <div class="cmauthor">
            <span class="cmauthorimg authorimg"></span>
            <span class="agreeaunum">{{articMessage.commentunm}}</span>
          </div>
        </div>
        <div v-else id="commentdiv">
          <img id="motion" src="../assets/image/detail/input.png"/>
          <input 
              @keyup="filter()"
              id="input2"
              type="text"
              name=""
              v-model="commentmsg"
              placeholder="可使用输入法自带表情"
              v-focus
          />
          <my-button 
              :disabled="button.disabled" 
              :value="button.value" 
              :btnStyle="button.btnStyle" 
              @click.native="commentit"
          />
        </div>
      </div>
    </div>
</div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { Getter, Mutation, Action, namespace } from 'vuex-class';
import { Toast, closeLoading, Time } from '../common/comjs';

const ArticDetailModule = namespace('detail/articDetail');
const UserCommentModule = namespace('detail/userComment');
const AgreeAuthorModule = namespace('detail/agreeAuthor');
const AgreeCommentModule = namespace('detail/agreeComment');

@Component
export default class Detail extends Vue {
    @ArticDetailModule.Mutation('$assignParams') $assignParams: any;
    @ArticDetailModule.Action('getArticDetail') getArticDetail: any;
    @ArticDetailModule.Getter('_dataStore') dataStore:any;
    @ArticDetailModule.Mutation('$clearData') $clearData: any;
    @UserCommentModule.Mutation('$assginParams') $C_assignParams: any;
    @UserCommentModule.Action('userComment') userComment: any;
    @UserCommentModule.Getter('_data') commentData:any;
    @AgreeAuthorModule.Mutation('$assginParams') $A_assignParams: any;
    @AgreeAuthorModule.Action('agreeAuthor') agreeAuthor: any;
    @AgreeAuthorModule.Getter('_status') A_status: any;
    @AgreeCommentModule.Mutation('$assginParams') $AC_assignParams: any;
    @AgreeCommentModule.Action('agreeComment') agreeComment: any;
    @AgreeCommentModule.Action('_status') AC_status: any;
    status: boolean = false;
    commentmsg: string = '';
    hidshow: boolean = true;
    articMessage: any = {};
    clickDetail: any = {};
    button: MyButton.Button<MyButton.BtnStyle> = {
        disabled: true,
        value: '评论',
        btnStyle: {
          width: '1.6rem',
          height: '0.9rem'
        }
    };
    hasComment: boolean = false;

    get id (): string {
        return this.$route.query.id;
    }
    get nickName (): any {
        return localStorage.getItem('nickname');
    }
    async created () {
        if (!this.dataStore[this.id]) {
            await this.getData();
        } else {
            this.articMessage = this.dataStore[this.id].articMessage;
            this.clickDetail = this.dataStore[this.id].clickDetail;
            return this.setData();
        }
    }
    /**
     * 接口挖的坑
     */
    async getData (): Promise<this> {
        let params: Detail.ArticDetail.RequestParams = {
            id: this.id,
            nickname: this.nickName
        }
        this.$assignParams(params);
        await this.getArticDetail();
        this.articMessage = this.dataStore[this.id].articMessage;
        this.clickDetail = this.dataStore[this.id].clickDetail;
        this.setData();
        return this;
    }
    setData () {
        this.hasComment = !!this.articMessage.commentxt.length;
        if (this.articMessage.click.name.length > 0) {
            for (var n = 0; n < this.articMessage.click.name.length; n++) { 
                if (this.articMessage.click.name[n] === this.nickName) {
                    this.status = true;
                } else {
                    this.status = false;
                }
            }
        }
        if (this.hasComment) {
            for (var i = 0; i < this.articMessage.commentxt.length; i++) {
                if (this.articMessage.commentxt[i].c_agree.name.length === 0) {
                    Vue.set(this.articMessage.commentxt[i].c_agree, 'status', false)
                } else {
                    for (var j = 0; j < this.articMessage.commentxt[i].c_agree.name.length; j++) {
                        if (this.articMessage.commentxt[i].c_agree.name[j] === this.nickName) {
                            Vue.set(this.articMessage.commentxt[i].c_agree, 'status', true)
                        } else {
                            Vue.set(this.articMessage.commentxt[i].c_agree, 'status', false)
                        }
                    }
                }
            }
        }    
    }
    filter () {
        if (this.commentmsg) {
            this.button.disabled = false;
            let reg = new RegExp('傻逼', 'g')
            this.commentmsg = this.commentmsg.replace(reg, '***')
        } else {
            this.button.disabled = true;
        }  
    }
    time (time: number): string | undefined {
        return Time(time);
    }
    async commentit (): Promise<this> {
        let params = {
            id: this.id,
            nickname: this.nickName,
            msg: this.commentmsg
        }
        this.$C_assignParams(params);
        await this.userComment();
        Toast('', this.commentData.mes);
        this.getData();
        this.commentmsg = '';
        this.hidshow = true;
        return this;
    }
    async agreeAuthors (): Promise<this> {
        let params = {
            id: this.id,
            nickname: this.nickName
        }
        this.$A_assignParams(params);
        await this.agreeAuthor();
        if (this.A_status === 'error') Toast('', '点赞失败!');
        this.getData();
        return this;
    }
    async agreeit (index: number): Promise<this> {
        let realIndex: number = this.articMessage.commentxt.length - index - 1;
        let params = {
            id: this.id,
            nickname: this.nickName,
            index: realIndex
        }
        this.$AC_assignParams(params);
        await this.agreeComment();
        if (this.AC_status === 'error') Toast('', '点赞失败!');
        this.getData();
        return this;
    }
    sayit ():void {
      this.hidshow = false;
      return;
    }
    control (event: any):void {
        let tag = event.target;
        if (!this.hidshow) {
            while (tag !== document.getElementById("footer") &&
                tag !== document.getElementById("detail")) {
                tag = tag.parentNode;
            }
            if (tag !== document.getElementById("footer")) {
               this.hidshow = true;
            }  
        }
        return;
    }
    back ():any {
        return this.$router.go(-1)
    }
    // beforeDestroy () {
    //     console.log(1);
    //     this.$clearData();
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#detail{
  height: 17rem;
  overflow-y: auto;
}
#detailcontent h1{
  padding-top: 0.4rem;
  font-size: 0.55rem;
}
#author{
  width: 90%;
  padding-top: 0.333333rem;
  margin: 0 auto;
  font-size: 0.3rem;
  text-align: left;
  color: #ADADAD;
}
#author span{
  display: inline-block;
}
#name{
  width: 20%;
}
#artic{
  font-size: 0.45rem;
  text-align: left;
  height: auto;
  width: 90%;
  margin: 0 auto;
  padding-top: 0.266667rem;
  padding-bottom: 0.4rem;
}
.cut{
  height: 0.066667rem;
  width: 100%;
  background-color: #adadad75;
}
#comment{
  text-align: left;
  height: auto;
  overflow-y: auto;
}
#commentitle{
  border-top: #ADADAD solid 0.066667rem;
  border-bottom: #ADADAD solid 1px;
  font-size: 0.5rem;
  padding-left: 0.533333rem;
  height: 1.066667rem;
  margin: 0 auto;
  line-height: 1.066667rem;
}
.mincut{
  height: 1px;
  width: 100%;
  background-color: #adadad75;
}
.commentul{
  height: auto;
  width: 100%;
  overflow-y: auto;
}
#ulbottom{
  height: 1.2rem;
}
.commentli{
  height: auto;
  width: 100%;
  border-bottom: solid #ADADAD 1px;
  padding-bottom: 0.2rem;
}
.commentname{
  font-size: 0.4rem;
  height: 0.46rem;
  padding-left: 0.8rem;
  color: #ADADAD;
  padding-top: 0.2rem;
}
.commentmsg{
  padding-top: 0.106667rem;
  font-size: 0.3rem;
  color: #ADADAD;
  height: 0.466667rem;
  position: relative;
  padding-left: 0.8rem;
  overflow: hidden;
}
.commentmsg span{
  display: inline-block;
}
.agreenum{
  position: relative;
  top: -0.04rem;
  padding-left: 0.133333rem;
}
.agreeimg, .agreeimged{
  height: 0.426667rem;
  width: 0.426667rem;
  background-size: cover;
}
.agreeimg{
  background-image: url(../assets/image/chatroom/click.png);
}
.agreeimged{
  background-image: url(../assets/image/chatroom/clicked.png);
}
.agreeauthor{
  display: inline-block;
  width: auto;
  padding-left: 0.4rem;
  padding-top: 0.05rem;
}
.agreeuthor {
  position: relative;
  margin-left: 0.5rem;
  width: 15%;
}
.agreeauthorimg{
  height: 0.7rem;
  width: 0.7rem;
  background-image: url(../assets/image/chatroom/click.png);
  background-size: cover;
}
.agreeauthorimged {
  height: 0.7rem;
  width: 0.7rem;
  background-image: url(../assets/image/chatroom/clicked.png);
  background-size: cover;
}
.agreeaunum{
  position: absolute;
  top: 0.4rem;
  left: 0.9rem;
  font-size: 0.4rem;
  color: #ADADAD;
}
.authorimg {
  display: inline-block;
}
.cmauthor {
  position: relative;
  width: 23%;
}
.cmauthorimg{
  height: 0.7rem;
  width: 0.7rem;
  background-image: url(../assets/image/detail/comment.png);
  background-size: cover;
}
.cmaunum{
  font-size: 0.426667rem;
}
.commentmsg img{
  width: 0.426667rem;
  height: 0.426667rem;
}
.time{
  width: 40%;
}
.agree{
  width: 51%;
  height: 0.466667rem;
  line-height: 0.466667rem;
  text-align: right;
}
.commenttxt{
  padding-top: 0.133333rem;
  padding-left: 0.8rem;
  font-size: 0.42rem;
}
#back-btn{
  width: 95%;
  padding-left: 5%;
  margin-top: 4%;
  text-align: left;
}
#back-btn button{
  width: 20%;
  height: 1rem;
  border-style: none;
  border-radius: 50px 5px 5px 50px;
  background-color: #00dcff;
  color: white;
  font-size: 0.453333rem;
}
#back-btn button span{
  margin-left: 0.2rem;
}
#footer{
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 1.2rem;
  border-top: solid #ADADAD 1px;
  background-color: white;
  width: 100%;
  text-align: left;
  overflow: hidden;
}
#footer #operate {
  display: flex;
  display: -webkit-flex; /* Safari */
  justify-content: center;
  align-items: center;
}
#footer #input1{
  width: 50%;
  margin-left: 0.8rem;
  height: 0.8rem;
  font-size: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 50px;
}
#motion{
  height: 0.933333rem;
  width: 0.933333rem;
  margin-top: 0.1rem;
}
#commentdiv{
  display: flex;
  display: -webkit-flex; /* Safari */
  justify-content: center;
  align-items: center;
  padding-top: 0.07rem;
  overflow: hidden;
}
#input2{
  width: 65%;
  height: 0.8rem;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 0.5rem;
  margin: 0 0.1875rem 0 0.1875rem;
  border-radius: 0;
}
</style>
