import React from 'react';

// 4. Позволяет обращаться к нашему хранилищу. Стоит отметить, что названия store начинается
// со знака $, что является лучшей практикой
import { useStore } from 'effector-react';
import { $modalVisibility } from './effector';

// 7. Отвечает за изменения состояния
import { setModalVisibility } from './effector';

// 10. 
import { $todos, getDataFx, $dataLoading } from './effector';

export function Path() {
  // 5. Объявляем переменную
  const isVisible = useStore($modalVisibility);
  
  // 10.
  const isLoading = useStore($dataLoading)
  const data = useStore($todos)

  return (
    <>
      <Button color="primary" 
              variant="contained" 
              // 7ю По нажатию модальное окно открывается
              onClick={() => setModalVisibility(true)}>
                    Открыть модальное окно
      </Button>

      <DataListModal
        // 6. Изначально было false, сейчас уже мы пишем isVisible. После нажатия на кнопку,
        // оно не будем работать так как мы нигде не использовали на клик, чтобы что-то выводилось
        isVisible={isVisible}
        isLoading={isLoading}
        onSubmit={getDataFx}
        // 7. По нажатию модальное окно закрывается
        onClose={setModalVisibility(false)}
      />

      <DataList isLoading={isLoading} data={data} />
    </>
  );
}
