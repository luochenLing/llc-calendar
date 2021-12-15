declare global {
    interface Date {
        Format: Function;
    }
}
/**
 * 根据当天推断是周几
 * @param curDay 当天日期
 */
export declare const getWeek: (curDay: string) => string;
/**
 * 根据当前时间获取指定日期
 * @param curTime 指定的当前时间
 * @param num  指定的天数，向前是负数，向后是正数
 */
export declare const getDayByNum: (curTime: Date, num: number) => Date;
/**
 * 指定数组内的数组项位置交换
 * @param arr 选定的数组
 * @param index1 交换的目标索引
 * @param index2 要换到哪个位置的索引
 */
export declare const swapArray: (arr: [], index1: number, index2: number) => [];
/**
 * 数组去重
 * @param arr 选中的数组
 */
export declare const duplicateRemoval: (arr: []) => any[];
/**
 * 对象数组去重
 * @param arr 选中的数组
 * @param file 选中数组项的对象字段
 */
export declare const duplicateRemovalByObjArr: (arr: [], file: string) => any[];
declare const _default: {
    Date: DateConstructor;
};
export default _default;
