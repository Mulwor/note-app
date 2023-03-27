import React from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FirstName from "./FirstName";

export type TRenderError = {
    required: string;
    minLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };


function Formiks () {
  const { reset } = useForm({
    mode: "onBlur",
  });

  const methods = useForm()

  const renderError: TRenderError = {
    required: 'You need to write your name',
    minLength: {
      value: 5,
      message: 'Your name must be at least 5 characters long',
    },
    pattern: {
      value: /^[A-Z][a-zA-Z]+$/,
      message: 'Should consist of letters and start with uppercase letter',
    },
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <h3>Form</h3>
      <FormProvider {...methods} >
        <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <FirstName {...renderError}/>
        </form>
      </FormProvider>
    </div>
  )
}

export default Formiks;
