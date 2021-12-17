const timeConverterComment = (name : string,createdAt: string) => {
    let a = new Date(createdAt);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var hour = Math.abs(new Date().getHours() - a.getHours())
    var min = Math.abs(new Date().getMinutes() - a.getMinutes()) 
    var sec = Math.abs(new Date().getSeconds() - a.getSeconds())
    let time = '' ;
    switch(true){
        case (hour <= 0 && min <=0 ) : 
            return time = name + " , " + sec + "s"
        case (hour <= 0 && min >0) : 
            return time = name + " , " + min + "m"
        case (hour > 0 && hour < 24) :
            return time = name + " , " + hour + "h"
        case (hour >=24 && hour <=72) :
            return time = name + " , " + Math.round(hour/24) + "d"
        default :
            return name + " , " + months[a.getMonth()] + " " + a.getDate() +", " + a.getFullYear()
    }
    return time;
}

const timeConverterOrder = (createdAt: string) => {
    let a = new Date(createdAt);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var hour = Math.abs(new Date().getHours() - a.getHours())
    var min = Math.abs(new Date().getMinutes() - a.getMinutes()) 
    var sec = Math.abs(new Date().getSeconds() - a.getSeconds())
    return months[a.getMonth()] + " " + a.getDate() +", " + a.getFullYear()
}
const time = {timeConverterComment,timeConverterOrder}

export default time