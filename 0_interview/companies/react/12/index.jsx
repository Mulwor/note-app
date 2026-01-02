// Необходимо реализовать компонент счетчика. При единичном
// клике на кнопку add значение counter должно увеличиваться 
// на единицу, при клике на кнопку sub - уменьшаться на
// единицу. При зажатии кнопок (когда жмем и не отпускаем),
// значение должно изменяться автоматически (1 раз в 1 секунду)
// . После того, как кнопка отпущена, изменение значения останавливается.

import React from 'react';

export const Test = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
      }}>
      <h1>Counter</h1>
      <h2>0</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <button>sub</button>
        <button>add</button>
      </div>
    </div>
  );
};