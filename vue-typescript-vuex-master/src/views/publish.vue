<template>
  <div id="publish">
    <div id="back-btn">
      <router-link to="/chatroom"><button type="button" class="back"><span>返回</span></button></router-link>
      <button type="button" :disabled="disable" class="publishit" @click="publishIt"><span>发表</span></button>
    </div>
    <input type="text" placeholder="请输入标题" v-model="title" id="input" v-focus/>
    <textarea placeholder="请输入正文" v-model="artic">
    </textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Mutation, namespace } from 'vuex-class';
import { Toast, closeLoading } from '../common/comjs';

const publishModule = namespace('publish');

@Component
export default class publish extends Vue {
    @publishModule.Mutation('$isEmpty') $isEmpty: any;
    @publishModule.Getter('_isEmpty') isEmpty: any;
    @publishModule.Mutation('$assignParams') $assignParams: any;
    @publishModule.Action('userPublish') userPublish: any;
    @publishModule.Getter('_data') data: any;
    title: string = '';
    artic: string = '';
    disable: boolean = false;
    async publishIt() {
        let params = {
            nickname: localStorage.getItem('nickname'),
            title: this.title,
            msg: this.artic
        }
        this.$isEmpty(params);
        if (this.isEmpty) return Toast('', '内容不能为空!');
        this.disable = true;
        this.$assignParams(params);
        await this.userPublish();
        this.disable = false;
        Toast('loading', '发表中...');
        setTimeout(function () {
        closeLoading()
        }, 200);
        this.$router.push({path: '/chatroom'});
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back-btn{
  width: 95%;
  padding-left: 5%;
  margin-top: 4%;
  text-align: left;
}
.back{
  width: 20%;
  height: 1rem;
  border-style: none;
  border-radius: 50px 5px 5px 50px;
  background-color: #00dcff;
  color: white;
  font-size: 0.453333rem;
}
.publishit{
  width: 20%;
  height: 1rem;
  margin-left: 52%;
  border-style: none;
  border-radius: 5px 50px 50px 5px;
  background-color: #00dcff;
  color: white;
  font-size: 0.453333rem;
}
#back-btn button span{
  margin-left: 0.2rem;
}
#publish input{
  margin-top: 0.8rem;
  padding-left: 0.266667rem;
  width: 40%;
  font-size: 0.533333rem;
  height: 0.8rem;
}
textarea{
  margin-top: 0.6rem;
  height: 4.0rem;
  width: 86%;
  outline: none;
  border: solid #ADADAD 1px;
  padding-left: 0.266667rem;
  padding-top: 0.266667rem;
  font-size: 0.48rem;
  resize: none;
}
</style>
