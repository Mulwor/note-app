import { createEffect } from "effector";

// Простой эффект который выводит через 3 секунд имя и пароль пользователя в консоль в виде массива
export const sendFormFx = createEffect(
   (formData) => new Promise((rs) => setTimeout(rs, 1000, `Signed in as [${formData.get('name')}] и [${formData.get('password')}]`)),
);

// используем побочный эффект sendFormFx с помощью doneDate. Он необходимо для того, чтобы мы видели данные, который позднее будут отправлять в консоль
sendFormFx.doneData.watch((result) => {
    console.log(result);
});
  