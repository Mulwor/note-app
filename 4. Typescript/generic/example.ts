interface MetaDataForGeneric {

}

interface UserForGeneric {
  username: string
}

interface ArticleForGeneric {
  title: string
}

interface ApiResponseForGeneric<T> {
  status?: 'error' | 'success';
  meta?: MetaDataForGeneric;
  requestId?: string;
  data: T;
}

const response_01: ApiResponseForGeneric<UserForGeneric> = {
  data: {
    username: 'test'
  }
}

const response_02: ApiResponseForGeneric<ArticleForGeneric> = {
  data: {
    title: 'test'
  }
}

// Inoy primer
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

// Inoy primer с функциями
function genericFC<T>(arg: T) {}
const arrowGeneric = <T,>(arg: T) => {}
const dataForArrowGeneric = arrowGeneric<UserForGeneric>({username: '123'})

// Можно также ограничивать дженерики
function createEntity<T extends { id: string, createdAt: Date}>(arg: T) {}
createEntity<UserForGeneric>({})

// Можно также для дженерика указывать дефолтный тип
// interface ApiResponseForGeneric<T = string> {
//   status?: 'error' | 'success';
//   meta?: MetaDataForGeneric;
//   requestId?: string;
//   data: T;
// }

// ? Условная контрукция в generic
type isArray<T> = T extends any[] ? true: false;
const first: isArray<string> = false;
const second: isArray<string[]> = true

// Inoy primer
type UserForOptionConstruction = {
  username: string;
}

type RandomName<T> = T extends UserForOptionConstruction ? { value: number } : { value: string }
const checkRandomName_01: RandomName<UserForOptionConstruction>
const checkRandomName_02: RandomName<string>