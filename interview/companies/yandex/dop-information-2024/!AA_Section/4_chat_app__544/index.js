// Наше приложение чат должно отображать новые сообщения, которые приходят с сервера как можно быстрее.
//     сообщение имеет формат
// interface Message {
//     id:number
//     text:string
// }
// id самого первого сообщения = 1 , а id каждого следующего на 1 больше чем id предыдущего. Нам нужно выводить сообщения в правильном порядке, но
// сервер не гарантирует правильный порядок сообщений, отправляемых в наше приложение.
// Сообщения от сервера приходят в обработчике функции connect:
// connect((msg)=>{...})
// Отображать сообщения нужно с помощью функции render :
// render(msg)

// ===================================================================

function solution(connect, render) {
    let currentID = 1; // Ожидаемый id следующего сообщения
    const buffer = new Map(); // Буфер для хранения сообщений

    connect((msg) => {
        buffer.set(msg.id, msg); // Добавляем сообщение в буфер

        // Проверяем, можно ли рендерить сообщения
        while (buffer.has(currentID)) { // Если в буфере есть сообщение с текущим ожидаемым id
            render(buffer.get(currentID)); // Рендерим сообщение с текущим ожидаемым id
            buffer.delete(currentID); // Удаляем сообщение из буфера
            currentID++; // Увеличиваем ожидаемый id
        }
    });
}

const wait = () => new Promise((resolve) => {
    setTimeout(resolve, 500);
});

const runTest = () => {
    const renderedMessages = [];
    const expectedMessages = [
        { id: 1, text: 'One' },
        { id: 2, text: 'Two' },
        { id: 3, text: 'Three' },
        { id: 4, text: 'Four' },
        { id: 5, text: 'Five' },
        { id: 6, text: 'Six' },
        { id: 7, text: 'Seven' }
    ];

    const testConnect = async (cb) => {
        cb({ id: 7, text: 'Seven' });
        await wait();
        cb({ id: 1, text: 'One' });
        await wait();
        cb({ id: 2, text: 'Two' });
        await wait();
        cb({ id: 3, text: 'Three' });
        await wait();
        cb({ id: 6, text: 'Six' });
        await wait();
        cb({ id: 5, text: 'Five' });
        await wait();
        cb({ id: 4, text: 'Four' });

        if (JSON.stringify(renderedMessages) !== JSON.stringify(expectedMessages)) {
            console.error(`Expected: ${JSON.stringify(expectedMessages)}`);
            console.error(`Received: ${JSON.stringify(renderedMessages)}`);
            return;
        }

        console.log('Test passed');
    };

    const testRenderMsg = (msg) => {
        console.log('Rendered message: ', msg);
        renderedMessages.push(msg);
    };

    solution(testConnect, testRenderMsg);
};

console.clear();
runTest();
