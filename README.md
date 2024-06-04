## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Заметки для [Next.js](https://nextjs.org/)

Чтобы создать next.js, необходимо в терминале написать:
1. npx create-next-app@latest my-app - если нам нужна последняя версия
2. npx create-next-app@13.4 my-app - если нам нужна определенная версия
3. npx create-next-app@13.4 . - точка нужна для создания в текущей директории
 
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

echo {} > .prettierrc - создает внутри директории prettier

Главным плюсом серверного компонента является то, что у нас на фронтенд не подставляется лишний js.
Если мне нужно нарисовать страницу на которой всегда есть статические данные. Однако минусом является 
то что мы не можем ничего использовать со стейтом (хуки, классовые компоненты). Если нам все таки надо
работать со стейтом, то необходимо написать 'use client'