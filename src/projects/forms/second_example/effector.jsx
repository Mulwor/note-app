import { createEffect } from "effector";

//defining simple Effect, which results a string in 3 seconds
export const sendFormFx = createEffect(
  (formData) => new Promise((rs) => setTimeout(rs, 1000, `Signed in as [${formData.get('name')}]`)),
);

//applying side-effect, upon sendFormFx `doneData`
sendFormFx.doneData.watch((result) => {
  console.log(result);
});
