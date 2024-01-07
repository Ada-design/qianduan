// 定义一个接口，用户限制person对象的具体属性
export interface PersonInter {
    id: string;
    name: string;
    age: number;
}

// 定义一个类型，类型为数组，数组中的每一项类型都为PersonInter
export type Persons = Array<PersonInter>
// 上述代码也可以写成这样的，export type persons = PersonInter[]