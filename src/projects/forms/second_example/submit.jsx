import { createComponent } from "effector-react";

import { sendFormFx } from "./effector";


export const SubmitButton = createComponent(sendFormFx.pending, (props, loading) => (
  //approach #2: implicit store usage
  <button disabled={loading} type="submit"> Submit </button>
));


