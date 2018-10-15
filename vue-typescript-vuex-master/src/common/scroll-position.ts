import VuexClass from "./vuex-class";

interface Position {
    x: number,
    y: number
}
interface State {
    position: Position
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

export default ScrollPosition;
