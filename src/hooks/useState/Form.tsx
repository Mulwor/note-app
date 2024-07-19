import React from 'react';

export const Form = () => {
  const [form, setForm] = React.useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    address: '',
    zip: '',
  });
  console.log(form);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ? Первый способ
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // ? Второй способ
    // setForm({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // })
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      <input
        type='text'
        name='firstName'
        onChange={handleChange}
        placeholder='firstName'
      />
      <input
        type='text'
        name='secondName'
        onChange={handleChange}
        placeholder='secondName'
      />
      <input
        type='text'
        name='email'
        onChange={handleChange}
        placeholder='email'
      />
      <input
        type='text'
        name='password'
        onChange={handleChange}
        placeholder='password'
      />
      <input
        type='text'
        name='address'
        onChange={handleChange}
        placeholder='address'
      />
      <input
        type='text'
        name='zip'
        onChange={handleChange}
        placeholder='zip'
      />
    </form>
  );
};

export default Form;
