import { UseTransitionHook_02, UseTransitionHook_02_WithoutTransition } from "./HeavyTab";
import CommentForm from "./sendComment";

export const UseTransitionHook = () => {
  return (
    <div style={{ display: "flex",}}>
      <CommentForm />
    </div>
  );
};
