import { useState, useEffect } from "react";

/** 
Написать таймер который запускается/останавливается при клике на кнопку
если таймер запущен, то каждую секунду он увеличивается на 1
*/

export const Counter = () => {
  return (
    <div>
      <div>count: 0</div>
      <button>Toggle timer</button>
    </div>
  );
};

export default Counter;
