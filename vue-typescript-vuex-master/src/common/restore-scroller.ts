import Vue, { VNode, VueConstructor } from 'vue';

/**
 * re-scroll指令封装，它是一个管理整个项目所有滚动状态的智能化指令，
 * 拥有了它，你可以为所欲为。
 */

/**
 * 每个滚动条的位置存放类
 */
interface Position {
    x: number,
    y: number
}
class ScrollPosition {
    position: Position = {
        x: 0,
        y: 0
    }
    $savePosition (position: Position) {
        return Object.assign(this.position, position);
    }
}

/**
 * 指令类
 */
interface Options {
    dom: HTMLElement,
    name: string,
    rescroll: any
}
class RestoreScroll extends Vue {
    opt: Options;
    watchScroll?: () => void;
    timer: any;
    constructor (options: Options) {
        super();
        this.opt = options;
        this.timer = {};
        this.openScrollStore();
        this.getPosition();
        this.scrollTo();
    }
    update (): this {
        this.scrollTo();
        return this;
    }
    openScrollStore ():this {
        const { rescroll, name } = this.opt;
        if (!rescroll[name]) {
            rescroll[name] = new ScrollPosition();
        }
        return this;
    }
    getPosition ():this {
        const { dom, name, rescroll } = this.opt;
        this.watchScroll = () => {
            if (name === nowName) {
                const key = `timer-${name}`;
                clearTimeout(this.timer[key]);
                this.timer[key] = setTimeout(() => {
                    let position = {
                        x: dom.scrollLeft,
                        y: dom.scrollTop
                    };
                    rescroll[name].$savePosition(position);
                    delete this.timer[key];
                }, 1000/60);
            }
        };
        dom.addEventListener('scroll', this.watchScroll, false);
        return this;
    }
    scrollTo (): this {
        const { dom, name, rescroll } = this.opt;
        if (!rescroll[name] || dom.scrollHeight < rescroll[name].position.y) {
            dom.scrollLeft = 0;
            dom.scrollTop = 0;
            return this;
        }
        this.$nextTick(() => {
            dom.scrollLeft = rescroll[name].position.x;
            dom.scrollTop = rescroll[name].position.y;
        });
        return this;
    }
    destroy ():this {
        const { dom } = this.opt;
        if (this.watchScroll) {
            dom.removeEventListener('scroll', this.watchScroll, false);
        }
        return this;
    }
}

interface Binding {
    value: {
        name: string
    }
}

interface DirectiveHTMLElement extends HTMLElement {
    restoreScroll?: any
}

interface VueRoot extends Vue {
    $rescroll?: object
}

let nowName: string = '';
const directive = {
    inserted: function (el: DirectiveHTMLElement, binding: Binding, vnode: VNode) {
        nowName = binding.value.name;
        if (!vnode.context) return this;
        if (!vnode.context.$root) return this;
        const root: VueRoot = vnode.context.$root;
        if (!root.$rescroll) {
            root.$rescroll = {};
        }
        const options: Options = {
            dom: el,
            name: binding.value.name,
            rescroll: root.$rescroll
        };
        if (!el.restoreScroll) {
            el.restoreScroll = {};
        }
        if (!el.restoreScroll[nowName]) {
            // console.log(11111);
            el.restoreScroll[nowName] = new RestoreScroll(options);
            return this;
        } else {
            // console.log(2222);
            el.restoreScroll[nowName].update(options);
            return this;
        }
    },
    componentUpdated: function (el: DirectiveHTMLElement, binding: Binding, vnode: VNode) {
        nowName = binding.value.name;
        if (!vnode.context) return this;
        if (!vnode.context.$root) return this;
        const root: VueRoot = vnode.context.$root;
        if (!root.$rescroll) {
            root.$rescroll = {};
        }
        let options: Options = {
            dom: el,
            name: binding.value.name,
            rescroll: root.$rescroll
        };
        if (!el.restoreScroll) {
            el.restoreScroll = {};
        }
        if (!el.restoreScroll[nowName]) {
            // console.log(333333);
            el.restoreScroll[nowName] = new RestoreScroll(options);
            return this;
        } else {
            // console.log(4444);
            el.restoreScroll[nowName].update(options);
            return this;
        }
    },
    unbind (el: DirectiveHTMLElement) {
        el.restoreScroll[nowName].destroy();
        delete el.restoreScroll;
    }
};

export default {
    install (Vue: VueConstructor) {
        Vue.directive('rescroll', directive);
    }
};
