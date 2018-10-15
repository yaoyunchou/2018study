import VuexClass from "./vuex-class";
import ScrollPosition from './scroll-position'

class ScrollStore extends VuexClass {
    state = {
        scroll: {}
    }
    _scrollStore (state: any) {
        return state.scroll;
    }
    $openScrollStore (state: any, name: string): this {
        if (state.scroll[name]) return this;
        state.scroll[name] = new ScrollPosition();
        return this;
    }
    $saveScrollStore (state: any, params: any): this {
        const {name, position} = params;
        state.scroll[name].$savePosition(position);
        return this;
    }
    $getScrollStore (state: any, name: string): this {
        return state.scroll[name].position;
    }
}

export default ScrollStore;
