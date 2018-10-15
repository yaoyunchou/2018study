<template>
  <div class="hello">
    <div id="tx">
      <img src="../assets/image/login/tx.jpg">
    </div>
    <form id="loginFrom">
      <div class="input" id="nkdiv">
        <label>昵称：</label> <input type="text" name="nickname" placeholder="请输入昵称" v-model="nickname"/>
      </div>
      <div class="input">
        <label>密码：</label> <input type="password" name="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div id="login-btn">
        <my-button 
          :disabled="button.disabled" 
          :value="button.value" 
          :btnStyle="button.btnStyle" 
          @click.native="login"
        />
      </div>
      <router-link to="/reset"><span class="button">忘记密码？</span></router-link>
      <router-link to="/register"><span class="button" id="register-btn">注册新用户</span></router-link>
    </form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { Action, Mutation, Getter, namespace } from 'vuex-class';
import { Toast } from '../common/comjs';
const loginModule = namespace('login')

@Component
export default class login extends Vue {
    @loginModule.Mutation('$isEmpty') $isEmpty: any;
    @loginModule.Getter('_isEmpty') isEmpty: any;
    @loginModule.Action('userLogin') userLogin: any;
    @loginModule.Mutation('$assignParams') $assignParams :any;
    @loginModule.Getter('_data') data: any;

    nickname: string = '';
    password: string = '';

    button: MyButton.Button<MyButton.BtnStyle> = {
        disabled: false,
        value: '登陆',
        btnStyle: {
          width: '7.75rem',
          height: '1.175rem',
          fontSize: '0.5rem'
        }
    }

    async login () {
        let params = {
            nickname: this.nickname,
            password: this.password
        }
        this.$isEmpty(params);
        if (this.isEmpty) return Toast('', '用户名密码不能为空');
        this.$assignParams(params);
        this.button.disabled = true;
        await this.userLogin();
        setTimeout(() => {
            this.button.disabled = false;
        }, 1000);
        if (this.data.nickname) {
            localStorage.setItem('nickname', this.data.nickname) 
            return this.$router.push({name: 'chatroom'});
        } 
        Toast('', this.data.mes);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tx img{
  height: 1.333333rem;
  width: 1.333333rem;
  border-radius: 1.333333rem;
  border: solid #ADADAD 0.013333rem;
  margin-top: 35%;
}
#loginFrom{
   margin-top: 2%;
   text-align: left;
   width: 100%;
   font-size: 0.506667rem;
}
#loginFrom .input{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 0.2rem;
}
#loginFrom input{
  width: 76%;
  height: 0.966667rem;
  font-size: 0.533333rem;
  padding-left: 0.266667rem;
}
#login-btn{
  width: 100%;
  text-align: center;
}
.button{
  display: inline-block;
  width: auto;
  margin-top: 0.4rem;
  margin-left: 0.213333rem;
}
#register-btn{
  width: 65%;
  text-align: right;
  margin-right: 0.213333rem;
}
</style>
