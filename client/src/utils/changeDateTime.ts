
const timeConverterComment = (name : string,createdAt: string) => {
    let a = new Date(createdAt);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var hour = Math.abs(new Date().getTime() - a.getTime()) /36e5
    var min = Math.abs(new Date().getTime() - a.getTime()) / (36e5*60)
    var sec = Math.abs(new Date().getTime() - a.getTime())/(36e5*60*60)
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
}

const timeConverterOrder = (createdAt: string) => {
    let a = new Date(createdAt);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[a.getMonth()] + " " + a.getDate() +", " + a.getFullYear()
}
const time = {timeConverterComment,timeConverterOrder}

export default time