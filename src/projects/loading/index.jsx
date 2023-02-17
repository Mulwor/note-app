import { useGate } from "effector-react";
import { useStore } from "effector-react";
import { SampleCompGate, myVerySideEffectFx } from "./effector";

const Loading = () => <div>I am loading huh?</div>;

const ProfileForm = () => (
  <form>
    <input type="text" placeholder="my little input" />
    <input type="submit" />
  </form>
);

export const SampleComp = () => {
  useGate(SampleCompGate); 
  const loading = useStore(myVerySideEffectFx.pending);
  console.log(loading);
  return loading ? <Loading /> : <ProfileForm />;
};
