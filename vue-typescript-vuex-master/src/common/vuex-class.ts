export default class VuexClass {
    namespaced: boolean;
    state: any;
    getters: any;
    mutations: any;
    actions: any;
    constructor () {
        this.namespaced = true;
        this.state = {};
        this.getters = {};
        this.actions = {};
        this.mutations = {};
        // getPrototypeOfArr(this);
        // let prototypes = Object.getPrototypeOf(this);
        // Object.keys(prototypes).forEach((name) => {
        //     if (name === 'constructor' || name === undefined) return;
        //     if (!name.indexOf('$')) {
        //         this.mutations[name] = prototypes[name];
        //     } else if (!name.indexOf('_')) {
        //         this.getters[name] = prototypes[name];
        //     } else {
        //         this.actions[name] =  prototypes[name];
        //     }   
        // })
        for (const name in this) {
            if (name === 'constructor' || name === undefined) {
            } else if (!name.indexOf('$')) {
                this.mutations[name] = this[name];
            } else if (!name.indexOf('_')) {
                this.getters[name] = this[name];
            } else if (
                name === 'namespaced' ||
                name === 'state' ||
                name === 'getters' ||
                name === 'mutations' ||
                name === 'actions') {
            } else {
                this.actions[name] =  this[name];
            } 
        }
        // console.log(this);
    }
    _isEmpty (state: any): boolean {
        return state.isEmpty;
    }
    $isEmpty (state: any, params: any):this {
        let Arr = [];
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                Arr.push(params[key]);
                
            }
        }
        state.isEmpty = Arr.includes('');
        return this;
    }
}