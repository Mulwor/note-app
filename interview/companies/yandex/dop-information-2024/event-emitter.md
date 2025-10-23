---
date-created: 2025-01-09
tags: problem, interview, yandex, javascript
source: https://petalite-panther-19d.notion.site/EventEmitter-167f1a398b04422caf119769d72e64b4#77245dfd255343df8dbc5ef29a52dc4c
title: Event Emitter
type: problem
---

## Итерация 1

Необходимо реализовать класс `EventEmitter`, который будет предоставлять следующие методы:

1. `addEventListener(event: string, listener: EventListener): RemoveEventListener` — метод для подписки на событие `event`. Возвращает функцию, вызов которой отписывает слушателя от события.
2. `dispatchEvent(event: string, payload?: Payload): void` — метод для вызова всех слушателей, привязанных к событию `event`.

### Основные требования 1

- Поддержка множественной подписки на одно событие.
- Возможность отписки от события.
- Поддержка передачи данных в обработчики событий (через `payload`).

### Интерфейс

```ts
type Payload = any;
type RemoveEventListener = () => void;
type EventListener = (payload?: Payload) => void | Promise<void>;

interface IEventEmitter {
	addEventListener(event: string, listener: EventListener): RemoveEventListener;
	dispatchEvent(event: string, payload?: Payload): void;
}
```

### Пример использования

```js
// Создаем экземпляр EventEmitter
const button = new EventEmitter();

// Подписываем слушатели к событию "click"
const removeHandleClick1 = button.addEventListener("click", () => console.log("called on click 1"));
const removeHandleClick2 = button.addEventListener("click", () => console.log("called on click 2"));

// Подписываем слушатель к событию "hover"
const removeHandleHover = button.addEventListener("hover", (payload) => console.log("called on hover", payload));

// Оповещаем всех слушателей о наступлении события "click"
button.dispatchEvent("click"); // called on click 1, called on click 2

// Оповещаем всех слушателей о наступлении события "hover"
button.dispatchEvent("hover", 1); // called on hover 1

// Отписываем все слушатели
removeHandleClick1();
removeHandleClick2();
removeHandleHover();

// Пытаемся снова оповестить всех слушателей о наступлении событий "click" и "hover"
button.dispatchEvent("click"); // Обработчики не вызвались
button.dispatchEvent("hover"); // Обработчики не вызвались
```

### Реализация

```ts
class EventEmitter implements IEventEmitter {
	private listeners: Map<string, Set<EventListener>> = new Map();

	addEventListener(event: string, listener: EventListener): RemoveEventListener {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}

		this.listeners.get(event).add(listener);

		return () => {
			this.listeners.get(event).delete(listener);
		};
	}

	async dispatchEvent(event: string, payload?: Payload): Promise<void> {
		if (!this.listeners.has(event)) {
			return;
		}

		for (const listener of this.listeners.get(event)!) {
			await listener(payload);
		}
	}
}
```

## Итерация 2

### Постановка задачи 2

Создается 3 `EventEmitter`:

```js
/* инициализация по умолчанию */
const button = new EventEmitter();

/* инициализация с оповещением через очередь макрозадачу */
const macroTaskButton = new EventEmitter();

/* инициализация с оповещением через очередь микрозадачу */
const microTaskButton = new EventEmitter();
```

В конструктор, нужно что-то передавать и задача, того что ты передашь, сказать `EventEmitter` как ему нужно `dispatch`’ить наши `listeners` . По умолчанию, хотим оставить текущий вариант - когда `dispatch` происходит синхронно, по очереди. Но кроме этого, хотим иметь возможность вызывать наши `listeners` , как отдельные `macro` или `micro` таски.

Как должно работать при `dispatch` наших `listeners`:

```js
// Подписываем слушателей к событию 'click'
macroTaskButton.addEventListener('click', () => console.log('1'));
microTaskButton.addEventListener('click', () => console.log('2'));
button.addEventListener('click', () => console.log('3'));

macroTaskButton.dispatchEvent('click');
microTaskButton.dispatchEvent('click');
button.dispatchEvent('click');
```

Ожидается что в консоли будет обратный отчет: 3 2 1: сначала отработал синхронный слушатель, затем microtask и последним macrotask события.

### Реализация 2

```ts
const DISPATCH_STRATEGY = {
	SYNC: "SYNC",
	MACRO: "MACRO",
	MICRO: "MICRO"
};

class EventEmitter {
	// ...

	constructor(strategy = DISPATCH_STRATEGY.SYNC) {
		this.strategy = strategy;
	}

	private dispatchSync(listeners: Set<EventListener>, payload?: Payload): void {
		listeners.forEach(listener => listener(payload));
	}

	private dispatchMacro(listeners: Set<EventListener>, payload?: Payload): void {
		listeners.forEach(listener => {
			setTimeout(() => listener, 0);
		});
	}

	private dispatchMicro(listeners: Set<EventListener>, payload?: Payload): void {
		listeners.forEach(listener => {
			queueMicrotask(() => listener(payload))
		});
	}

	private dispatch(listeners: Set<EventListener>, payload?: Payload): void {
		switch (this.strategy) {
			case DISPATCH_STRATEGY.MACRO:
				this.dispatchMacro(listeners, payload);
				break;
			case DISPATCH_STRATEGY.MICRO:
				this.dispatchMicro(listeners, payload);
				break;
			case DISPATCH_STRATEGY.SYNC:
			default:
				this.dispatchSync(listeners, payload);
		}
	}

	dispatchEvent(event: string, payload?: Payload): void {
		if (!this.listeners.has(event)) {
			return;
		}

		this.dispatch(this.listeners.get(event), payload);
	}
}
```

## Итерация 3

В наш интерфейс `IEventEmitter` добавляется новый метод `once`:

```ts
interface IEventEmitter {
	//...

	// Подписывает слушатель к событию event, который должен вызваться не более одного раза.
	// Возвращает функцию, вызов которой отписывает слушателя от события event
	once(event: string, listener: EventListener): RemoveEventListener;
}
```

### Реализация 3

```ts
class EventEmitter {
	// ...

	once(event: string, listener: EventListener): RemoveListener {
		const removeCallback = this.addEventListener(event, payload => {
			removeCallback();
			listener(payload);
		});

		return removeCallback;
	}
}
```
