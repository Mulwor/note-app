Middleware - цепочка специальных функций, который позволяет обрабатывать каждый из них свой кусочек работы с экшеном и передает управления дальше.

У миддл вара есть доступ ко всему состоянию. Он может получить доступ, подписаться к состоянию, че-то с ним сделать. Может ограничивать работу с action и т.д.


Thunk - это простая middleware, который берет и проверяет action является функцией или не функцией. И если action - функция, то он вызы-
вает функцию с dispatch, getState, extraArgument. А потом просто делает next с этим action никак не оброботав

```
const middleware = ( {dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument)
  }

  return next(action)
}
```

Для чего это нужно? - Раньше мы redux могли dispatch только объекты, 
а теперь можем и dispatch функции. И этот middleware вызовет эти функции
самостоятельным образом передав туда getState и dispatch. То есть мы не обязаны каждый раз прокидывать его туда. Мы можем просто вызвать какую-то функцию через диспатч в которой автоматически будут положены  getState и dispatch.

59 минута 27 секунда