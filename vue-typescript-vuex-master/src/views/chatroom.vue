<template>
    <div id="chatroom">
        <header id="header">
            <span>Confenssion Wall</span>
            <img @click="loginout()" src="../assets/image/chatroom/loginout.png"/>
        </header>
        <div class="empty"></div>
        <div id="wrapper" ref="my_wrapper">
            <scroller 
                @dropDown="dropDown" 
                @pullUp="pullUp"
                :pullUpstatus="pullUpStatus"
                :pullDownStatus="pullDownStatus"
                v-rescroll="{name: 'chatroom', path: 'scrollStore'}"
            >
                <artic-list :mes="mes" @todetail="todetail"/>
            </scroller>
        </div>
        <footer id="footer">
            <input type="text" name="talk"  @click="topublish" placeholder="发表言论"/>
        </footer>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Mutation, namespace } from 'vuex-class';
import { Toast, Time } from '../common/comjs';
import Scroller from '../components/scroller/scroller.vue';
import ArticList from '../components/artic-list/artic-list.vue';
const ArticListModule = namespace('ChatRoom/articList');
const ViewModule = namespace('ChatRoom/view');

@Component({
    components: {
        Scroller,
        ArticList
    }
})
export default class ChatRoom extends Vue {
    @ArticListModule.Mutation('$clearData') $clearData: any;
    @ArticListModule.Action('pullDown') pullDown: any;
    @ArticListModule.Action('pullUp') pullUp: any;
    @ArticListModule.Getter('_mes') mes: any;
    @ArticListModule.Getter('_pullDownStatus') pullDownStatus: any;
    @ArticListModule.Getter('_pullUpStatus') pullUpStatus: any;
    @ViewModule.Mutation('$assignParams') $assignParams: any;
    @ViewModule.Action('saveView') saveView: any;
    @ViewModule.Getter('_data') data: any;
    @ViewModule.Getter('_requestStatus') requestStatus: any;
    async dropDown () {
        await this.pullDown();
        Toast('', '刷新成功！');
    }
    async todetail (id: string) {
        let params: ChatRoom.View.RequestParams = {
            id: id,
        }
        this.$assignParams(params);
        await this.saveView();
        if (this.requestStatus === 'error') return Toast('', '请求失败!');
        this.$router.push({name: 'detail', query: {id: id}});
    }
    topublish () {
        this.$clearData();
        this.$router.push({name: 'publish'});
    }
    loginout () {
        localStorage.removeItem('nickname');
        this.$clearData(); 
        this.$router.push({name: 'login'})
    }
}
</script>

<style lang="less" scoped>
#chatroom {
    height: 100%;
    #header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: #00dcff;
        font-size: 0.533333rem;
        color: white;
        height: 0.96rem;
        line-height: 0.96rem;
        z-index: 999;
        img {
            height: 0.6rem;
            width: 0.6rem;
            position: relative;
            left: 22%;
            top: 0.09rem;
        }
    }
    .empty {
        height: 0.96rem;
    }
    #wrapper {
        position: relative;
        height: 16rem;
        overflow-y: auto;
    }
    #footer{
        position: fixed;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        height: 1.2rem;
        background-color: white;
        border-top: solid #ADADAD 1px;
        width: 100%;
        display: table;
        input{
            width: 80%;
            height: 0.8rem;
            border: solid #ADADAD 1px;
            padding-left: 0.266667rem;
            font-size: 0.4rem;
            display: table-cell;
            vertical-align: middle;
        }
    }
}
</style>
