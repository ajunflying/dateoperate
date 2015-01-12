/**
 * Created by junping on 15-1-12.
 */
module.exports = DateOperate;

function DateOperate(){

};

DateOperate.test = function(){
    return "1900-01-01";
};

/*
* info:获取当前时间
* */
DateOperate.getNowTime = function(format){
    var self = this;
    var nowTime = Date.now();
    if(format){
        return self.format(nowTime, format);
    }
    return nowTime;
};

DateOperate.getDayInWeek = function(){

};

/*
 * info:获取当天剩余多少秒
 * */
DateOperate.getSDayLastSecond = function(){
    var date = new Date(Date.now());
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return (23 - hour) * 60 * 60 + (59 - minute) * 60 + (59 - second);
};

/*
* info:两个时间相差天数
* */
DateOperate.twoDateSpace = function(date1, date2){

};

DateOperate.format = function(time, format)
{
    if(!format)
        return time;
    var testDate = new Date(time);
    var o =
    {
        "M+" : testDate.getMonth()+1,
        "d+" : testDate.getDate(),
        "h+" : testDate.getHours(),
        "m+" : testDate.getMinutes(),
        "s+" : testDate.getSeconds(),
        "q+" : Math.floor((testDate.getMonth()+3)/3),
        "S" : testDate.getMilliseconds()
    }
    if(/(y+)/.test(format))
    {
        format = format.replace(RegExp.$1, (testDate.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o)
    {
        if(new RegExp("("+ k +")").test(format))
        {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}