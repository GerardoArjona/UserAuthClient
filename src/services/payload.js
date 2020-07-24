export default (token) => {
    let base64Uri = token.split('.')[1];
    let base64 = base64Uri.replace('-','+').replace('_','/');
    return JSON.parse(typeof window !== `undefined` ? window.atob(base64) : "");
}