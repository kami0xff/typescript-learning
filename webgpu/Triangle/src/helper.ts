export const checkWebGpu = () => {
    let result = true;
    if(!navigator.gpu){
        result = false;
    }
    return result;
}