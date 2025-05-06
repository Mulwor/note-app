// ! ===================== Пример №1 ==========================
const exampleGeneric_01 = (item: unknown) => item;
let resultExampleGeneric_01 = exampleGeneric_01(5);     // ? let resultWrong: unknown

const exampleGeneric_02 = <T>(item: T)=> item;
function exampleGeneric_03<T>(value: T): T {
  return value;
}
let resultExampleGeneric_02 = exampleGeneric_02(5);     // ? let resultWrong: number
let resultExampleGeneric_03 = exampleGeneric_03(5);     // ? let resultWrong: number

function exampleGeneric_04<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = exampleGeneric_04([1, 2, 3]);          // ? number
const firstStr = exampleGeneric_04(["a", "b", "c"]);    // ? string

// Можно также для дженерика указывать дефолтный тип
// interface ApiResponseForGeneric<T = string> {
//   status?: 'error' | 'success';
//   meta?: MetaDataForGeneric;
//   requestId?: string;
//   data: T;
// }

// ! ===================== Пример №2 ==========================
interface MetaDataForGeneric {};
export interface UserForGeneric { username: string };
interface ArticleForGeneric { title: string };

interface ApiResponseForGeneric<T> {
  status?: 'error' | 'success';
  meta?: MetaDataForGeneric;
  requestId?: string;
  data: T;
}

const response_01: ApiResponseForGeneric<UserForGeneric> = {
  data: { username: 'test' }
}

const response_02: ApiResponseForGeneric<ArticleForGeneric> = {
  data: { title: 'test' }
}

// ! ===================== Пример №3 ==========================
interface Tree<T> {
  id: string;
  value: T;
  children: Tree<T>[] | null
}

const treeNode: Tree<UserForGeneric> = {
  id: '10',
  value: {
    username: '123'
  },
  children: [
    { 
      id: '11', 
      value: { 
        username: '123' 
      }, 
      children: null
    }
  ]
}

// ! ===================== Пример №4 - Условная конструкция ==========================
type isArray<T> = T extends any[] ? true: false;
const first: isArray<string> = false;
const second: isArray<string[]> = true