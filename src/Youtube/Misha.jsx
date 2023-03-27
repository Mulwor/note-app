import React from "react";
import { useForm } from "react-hook-form";

function MichaelNepomnyashiy() {
  // * register - позволяет регистрировать различные поля для формы
  // * formState - объект у которого различные св-ва: одно из них ошибки
  // * handleSubmit - функция получает данные, если не будет ошибки
  // * useForm() - метод, который возвращает объект
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <h3>React Hook Form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          FirstName:
          <input
            {...register("firstName", {
              // Если человек ничего не ввел выведится данная ошибка
              required: "Поле обязательное к заполнению",
              minLength: {
                value: 5,
                message: "Минимум должно быть 5 символов"
              }
            })}
          />
        </label>
        <div style={{ height: 48 }}>
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </>
  );
}

export default MichaelNepomnyashiy;
