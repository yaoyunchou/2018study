<template>
  <div id="registerdiv">
    <div id="back-btn">
      <router-link to="/"><button type="button"><span>返回</span></button></router-link>
    </div>
    <form id="registerForm">
      <div id="tx">
        <img src="../assets/image/login/tx.jpg">
      </div>

      <!-- <form><input id="file" type="file" @change="upload($event)"/> </form> -->
      
      <!-- <button type="button" @click="upload"></button> -->
      <div class="inputdiv">
        <label>昵称：</label> <input type="text" placeholder="请输入您的昵称" name="nickname" v-model="nickname"/>
      </div>
      <div class="inputdiv">
        <label>姓名：</label> <input type="text" placeholder="请输入您的姓名" name="name" v-model="name"/>
      </div>
      <div class="inputdiv">
        <label>密码：</label> <input type="password" placeholder="请输入您的密码" name="password" v-model="password"/>
      </div>
      <div class="inputdiv1">
        <input type="radio" v-model="sex" value="男"/>男 <input type="radio" v-model="sex" value="女" />女
      </div>
      <div class="inputdiv">
        <label>年龄：</label> <input type="text" placeholder="请输入您的年龄" name="age" v-model="age"/>
      </div>
      <my-button 
        :disabled="button.disabled" 
        :value="button.value" 
        :btnStyle="button.btnStyle"
        @click.native="register"></my-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, Mutation, namespace } from 'vuex-class';
import { Toast, closeLoading } from '../common/comjs';

const registerModule = namespace('register')

@Component
export default class Register extends Vue {
    @registerModule.Mutation('$isEmpty') $isEmpty: any;
    @registerModule.Getter('_isEmpty') isEmpty: any;
    @registerModule.Mutation('$assignParams') $assignParams: any;
    @registerModule.Action('userRegister') userRegister: any;
    @registerModule.Getter('_data') data: any;
    
    nickname: String = '';
    name: String = '';
    password: String = '';
    sex: String = '';
    age: string = '';
    uploadImg: any = '';
    button: MyButton.Button<MyButton.BtnStyle> = {
        disabled: false,
        value: '注册',
        btnStyle: {
          width: '7.75rem',
          height: '1.175rem',
          fontSize: '0.5rem'
        }
    }
    async register () {
        let params = {
            nickname: this.nickname,
            name: this.name,
            password: this.password,
            sex: this.sex,
            age: this.age
        }
        this.$isEmpty(params);
        if (this.isEmpty) return Toast('', '请填写完整信息');
        this.$assignParams(params);
        Toast('loading', '注册中...');
        this.button.disabled = true;
        await this.userRegister();
        closeLoading();
        setTimeout(() => {
            this.button.disabled = false;
        }, 1000);
        Toast('', this.data.mes);
        if (this.data.mes === '注册成功!') return this.$router.push({ name: 'login' });
    }
    upload (e: any) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            let arr = this.result.split('base64,');
            console.log(arr);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#registerdiv{
  font-size: 0.506667rem;
}
#tx img{
  height: 1.333333rem;
  width: 1.333333rem;
  border-radius: 1.333333rem;
  border: solid #ADADAD 0.013333rem;
}
.inputdiv, .inputdiv1{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 0.2rem;
}
.inputdiv input{
  width: 77%;
   height: 0.966667rem;
  font-size: 0.533333rem;
  padding-left: 0.266667rem;
}
.inputdiv1 input{
   outline-color: #00dcff;
}
#back-btn{
  width: 95%;
  padding-left: 5%;
  margin-top: 10%;
  margin-bottom: 7%;
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
</style>
