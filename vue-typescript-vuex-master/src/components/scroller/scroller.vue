<template>
    <div class="my_scroll"
        ref="my_scroll"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
    >
        <down-loading :isShow="isShow" :height="height"/>
        <slot></slot>
        <see-loading @pullUp="pullUp" :pullUpstatus="pullUpstatus"></see-loading>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SeeLoading from '../see-loading/see-loading.vue';
import DownLoading from '../down-loading/down-loading.vue';

/**
 * 加载的几种状态
 * 未加载 unrequest
 * 正在加载 requesting
 * 加载成功 success
 * 请求失败 failure
 * 加载失败 error
 * 全部加载 done
 */

@Component({
    components: {
        SeeLoading,
        DownLoading
    }
})
export default class Scroller extends Vue{
    @Prop() pullUpstatus!: string;
    @Prop() pullDownStatus!: string;
    @Prop() position!: ChatRoom.View.Position;
    time: number = 0;
    touchStartY: number = 0;
    height: number = 0;
    isShow: Boolean = false;
    myScroll: any;
    
    mounted () {
        this.myScroll = this.$refs.my_scroll;
        this.scrollPos();
    }
    pullUp () {
        this.$emit('pullUp');
    }
    touchStart () {
        let e:any = window.event || event;
        this.touchStartY = e.changedTouches[0].clientY;
    }
    touchMove () {
        let e:any = window.event || event;
        let top = this.myScroll.scrollTop;
        if (this.touchStartY - e.changedTouches[0].clientY > 0 || top > 0) return;
        if (this.height < 60) {
            if (this.height > 20) this.isShow = true;
            this.height = e.changedTouches[0].clientY - this.touchStartY;
        } else {
            this.height = 60;
        }    
    }
    touchEnd () {
        let e:any = window.event || event;
        let top = this.myScroll.scrollTop;
        if (this.height === 60) {
            this.$emit('dropDown');
            this.clear();
        }
    }
    scrollPos () {
        if (this.position) {
            this.myScroll.scrollLeft = this.position.x;
            this.myScroll.scrollTop = this.position.y;
        }
    }
    clear () {
        setTimeout(() => {
            if (this.height === 0) return;
            if (this.height < 20) this.isShow = false;
            this.height = this.height - 1;
            this.clear();
        }, 1);
    }
    beforeDestroy () {
        const position = {
            x: this.myScroll.scrollLeft,
            y: this.myScroll.scrollTop
        }
        this.$emit('getPosition', position);
    }
};
</script>
<style lang="less" scoped>
.my_scroll {
    height: 100%;
    overflow-y: auto;
}
</style>

