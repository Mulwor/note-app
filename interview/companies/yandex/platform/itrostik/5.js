// Необходимо проверить решение задачи по двум сервисом, вызвав 
// checkResult(url1, solution), checkResult(url2, solution)
// checkResult: (url: string, solution: string | number) => Promise<boolean>;
// - Если оба запроса вернули true - вывести success;
// - Если хоть один вернул false - вывести fail
// - Если хоть один не ответил - вывести error;
// - Если хоть один отвечает дольше 1 сек - вывести timeout

import {checkResult} from 'myLib'

const solution = "Any answer";
const url1 = "yandex.ru";
const url2 = "google.com";

checkResult(url1, solution);
checkResult(url2, solution)