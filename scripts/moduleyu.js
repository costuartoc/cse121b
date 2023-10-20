

export default function reset(parent){
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};