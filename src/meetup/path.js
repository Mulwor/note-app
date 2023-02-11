import React from 'react';

// 4. Позволяет обращаться к нашему хранилищу. Стоит отметить, что названия store начинается
// со знака $, что является лучшей практикой
import { useStore } from 'effector-react';
import { $modalVisibility } from './effector';

export function Path() {
  // 5. Объявляем переменную
  const isVisible = useStore($modalVisibility);

  return (
    <>
      <Button color="primary" 
              variant="contained" 
              onClick={console.log}>
                    Открыть модальное окно
      </Button>

      <DataListModal
      
        // 6. Изначально было false, сейчас уже мы пишем isVisible. После нажатия на кнопку,
        // оно не будем работать так как мы нигде не использовали на клик, чтобы что-то выводилось
        isVisible={isVisible}
        isLoading={false}
        onSubmit={console.log}
        onClose={console.log}
      />
    </>
  );
}
