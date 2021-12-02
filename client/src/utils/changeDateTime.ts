const timeConverter = (name : string,createdAt: string) => {
    let a = new Date(createdAt);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let time = name + " , " + months[a.getMonth()] + " " + a.getDate() +", " + a.getFullYear() ;
    return time;
}
export default timeConverter