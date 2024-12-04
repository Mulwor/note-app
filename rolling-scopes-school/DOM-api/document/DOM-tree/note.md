1. В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом. Например, 
document.body – объект для тега <body>. Теги являются узлами-элементами (или просто элементами). Они образуют структуру дерева: 
<html> – это корневой узел, <head> и <body> его дочерние узлы и т.д. Каждый узел этого дерева – это объект.

Самые верхние элементы дерева доступны как свойства объекта document:

<html> = document.documentElement
<body> = document.body
<head> = document.head

---

2. Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла. Например, <head> и <body> являются детьми 
элемента <html>.

Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д. Детьми тега <body> являются все теги внутри него,
в общем, все элементы поддерева.

Чтобы пройтись по всему дереву, а точнее дочерним узлам. Можно использовать коллекцию `childNodes`, которы содержит список всех детей, 
включая текстовые узлы. Для проверки наличия дочерних узлов существует также специальная функция elem.hasChildNodes().

```
for (let i = 0; i < document.body.childNodes.length; i++) {
  alert( document.body.childNodes[i] ); 
  // Text, DIV, Text, UL, ..., SCRIPT
}
```

Стоит упомянуть, что childNodes - это коллекция (особый перебираемый объект-псевдомассива). И есть два важных следствия из этого:
1. Для перебора исп можно использовать `for...of` => for (let node of document.body.childNodes) { alert(node); } 
Это работает, потому что коллекция является перебираемым объектом (есть требуемый для этого метод Symbol.iterator).
2. Методы массивов не будут работать, потому что коллекция – это не массив. Другими словами sort, filter не работают. . Если нам хочется
использовать именно методы массива, то мы можем создать настоящий массив из коллекции alert( Array.from(document.body.childNodes).filter ); 

Свойства `firstChild и lastChild` обеспечивают быстрый доступ к первому и последнему дочернему элементу.

Стоит также упомянуть, что DOM-коллекции – только для чтения. Мы не можем заменить один дочерний узел на другой, просто написав childNodes[i] = ....

---

Соседи – это узлы, у которых один и тот же родитель.

Например, здесь <head> и <body> соседи:

<html>
  <head>...</head><body>...</body>
</html>

говорят, что <body> – «следующий» или «правый» сосед <head> также можно сказать, что <head> «предыдущий» или «левый» сосед <body>.

Родитель доступен через parentNode.
alert( document.body.parentNode === document.documentElement ); 
alert( document.head.nextSibling ); // HTMLBodyElement
alert( document.body.previousSibling ); // HTMLHeadElement

Подведем итоги: 

Есть два основных набора ссылок:

1. Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
2. Только для узлов-элементов: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

---

#### Поиск по дом-дереву

1. let elem = `document.getElementById('elem');` - используем если у элемента есть id. Стоит отметить, что после того как мы добавили переменную мы можем его
видоизменять через elem.style.background = 'red';
2. let elements = `document.querySelectorAll('ul > li')` - он возвращает все найденные элементы согласно классу. Псевдоклассы внутри него тоже работают, когда мы хотим вызвать :hover, :active, last-child.
3. let elements = `document.querySelectorAll(css)`-  возвращает первый элемент, соответствующий данному CSS-селектору.

Отличительные черты - elem.querySelectorAll(css)[0], но он сначала найдёт все элементы, а потом возьмёт первый, в то время как elem.querySelector найдёт только первый и остановится.

4. Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск. Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей. Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден.

Есть также методы getElementsByName, getElementsByTagName, getElementsByClassName, которые возвращают живую коллекцию. Однако они встречаются в старом коде

---

Для того, чтобы узнать имя класса DOM-узла, вспомним, что обычно у объекта есть свойство constructor. Оно ссылается на конструктор класса, и в свойстве constructor.name содержится его имя: alert( document.body.constructor.name ); // HTMLBodyElement

Чтобы узнать тип узла мы можем использовать метод instanceof

Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
Мы также можем изменять его. Это один из самых мощных способов менять содержимое на странице.

```
alert( document.body.innerHTML );
document.body.innerHTML = 'Новый BODY!';
```

Другими словами, innerHTML+= делает следующее:

- Старое содержимое удаляется.
- На его место становится новое значение innerHTML (с добавленной строкой).

Свойство outerHTML содержит HTML элемента целиком. Это как innerHTML плюс сам элемент. В отличие от innerHTML, запись в outerHTML не изменяет элемент. Вместо этого элемент заменяется целиком во внешнем контексте.

 Все атрибуты доступны с помощью следующих методов:

elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.
elem.attributes – это коллекция всех атрибутов.


Изменение документа

1. Методы для создания узлов:

document.createElement(tag) – создаёт элемент с заданным тегом,
document.createTextNode(value) – создаёт текстовый узел (редко используется),
elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

2. Метод вставки и удаление текста: 
node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
node.before(...nodes or strings) –- вставляет узлы или строки до node,
node.after(...nodes or strings) –- вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.
node.remove() - удаляет узел.

3. Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

"beforebegin" – вставляет html прямо перед elem,
"afterbegin" – вставляет html в elem в начало,
"beforeend" – вставляет html в elem в конец,
"afterend" – вставляет html сразу после elem.

4. Чтобы добавить HTML на страницу до завершения её загрузки: document.write(html)

---

Работа со стилями:
elem.classList.add/remove("class") – добавить/удалить класс.
elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

Можно также перебрать классы с помощью цикла 
for (let name of document.body.classList) {
  alert(name); // main, затем page
}

Иногда нам нужно добавить свойство стиля, а потом, позже, убрать его.
Например, чтобы скрыть элемент, мы можем задать elem.style.display = "none".