declare global {
 interface Date {
    Format: Function;
  }
}
// eslint-disable-next-line
Date.prototype.Format = function (fmt: string) {
  //author: meizz
  var o: any = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

/**
 * 根据当天推断是周几
 * @param curDay 当天日期
 */
export const getWeek = (curDay: string) => {
  let day = new Date(curDay).getDay();
  var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return weeks[day];
};

/**
 * 根据当前时间获取指定日期
 * @param curTime 指定的当前时间
 * @param num  指定的天数，向前是负数，向后是正数
 */
export const getDayByNum=(curTime:Date,num:number)=>{
  return new Date(curTime.getTime()+num*24*60*60*1000)
}

/**
 * 指定数组内的数组项位置交换
 * @param arr 选定的数组
 * @param index1 交换的目标索引
 * @param index2 要换到哪个位置的索引
 */
export const swapArray=(arr:[], index1:number, index2:number)=>{
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}

/**
 * 数组去重
 * @param arr 选中的数组
 */
export const duplicateRemoval=(arr:[])=>{
  return arr.reduce((cur, next) => {
    return cur.includes(next) ? cur : cur.concat(next);
  }, [])
}

/**
 * 对象数组去重
 * @param arr 选中的数组 
 * @param file 选中数组项的对象字段
 */
export const duplicateRemovalByObjArr=(arr:[],file:string)=>{
  return arr.reduce((cur, next) => {
    if (cur.length > 0 && cur.filter(x => x[file] === next[file]).length > 0) {
      return cur
    }
    else {
      cur.push(next)
      return cur
    }
  }, [])
}

export default {
  Date,
};
