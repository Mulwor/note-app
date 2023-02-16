import { useStore } from "effector-react";

import { sendFormFx } from "./effector";

export const Loader = () => {
    // approach #1: explicit store usage, with hook `useStore`
    const loading = useStore(sendFormFx.pending); //typeof loading === "boolean"
  
    return loading ? <div>Loading...</div> : null;
};