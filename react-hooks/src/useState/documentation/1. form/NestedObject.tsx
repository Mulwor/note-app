import { ChangeEvent, useState } from 'react';

export function NestedObject() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',

    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      /*
        ? Создаёт поверхностную копию текущего состояния объекта person. Это гарантирует, 
        ? что существующие поля объекта person остаются неизменными, за исключением тех,
        ? которые будут явно обновлены. То есть они не будут мутиворованы
      */
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,

      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,

      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,

      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:{' '}
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:{' '}
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:{' '}
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:{' '}
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i> {' by '} {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />

      <hr />
    </>
  );
}
