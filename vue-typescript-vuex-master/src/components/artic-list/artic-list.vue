<template>
<ul>
    <li v-for="(item, key) in mes" :key="key" @click="todetail(item._id)">
        <div class="artic-content">
            <div class="userImg">
                <img src="../../assets/image/tx.jpg"/>
            </div>
            <div class="author">
                <div class="title">{{item.title}}</div>
                <span class="authormsg">作者：</span>
                <span class="authormsg authorname">{{item.nickname}}</span>
                <span class="publishtime publishtxt">发表于</span>
                <span class="publishtime">{{time(item.createtime)}}</span>
            </div>
        </div>
        <div class="oparatenum">
            <div class="hasborder">
                <img src="../../assets/image/chatroom/view.png" />{{item.viewnum}}
            </div>
            <div class="hasborder">
                <img src="../../assets/image/detail/comment.png" />{{item.commentunm}}
            </div>
            <div>
                <img src="../../assets/image/chatroom/click.png" />{{item.click.num}}
            </div>
        </div>
    </li>
</ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Time } from '../../common/comjs';
@Component
export default class ArticList extends Vue{
    @Prop({default: () => []}) mes!: Array<any>

    todetail (id: string) {
        this.$emit('todetail', id)
    }
    time (createtime: number) {
        return Time(createtime);
    }
}
</script>
<style lang="less" scoped>
ul {
    overflow: hidden;
    width: 100%;
    li {
        border-bottom: solid #ADADAD 0.013333rem;
        .artic-content {
            width: 98%;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            text-align: left;
            padding-left: 6%;
            .userImg{
                padding-top: 0.3rem;
                font-size: 0.533333rem;
                font-weight: bold;
                img {
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                }
            }
            .author{
                width: 100%;
                font-size: 0.38rem;
                padding-top: 0.133333rem;
                margin-left: 0.5rem;
                .title {
                    font-size: 0.6rem;
                }
                .authorname{
                    width: 15%;
                }
                .publishtime{
                    font-size: 0.213333rem;
                    color: #ADADAD;
                }
                .publishtxt{
                    margin-left: 4%;
                }
            }
        }
        .oparatenum{
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: 0.32rem;
            color: #ADADAD;
            img {
                height: 0.4rem;
                width: 0.4rem;
                margin-right: 0.3rem;
            }
            div {
                width: 33%;
                padding-bottom: 0.1rem;
            }
            .hasborder {
                border-right: #ADADAD 1px solid; 
            }
        }
    }
}
</style>
