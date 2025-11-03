/*
 Вывести значения полей в консоль, при клиике на форму, 
 учитывая что первый input controlled, а второй input uncontrolled.
*/

export default function App() {
  const onClickForm = () => {
    console.log("controlled: " /* вставить value1 */);
    console.log("uncontrolled: " /* вставить value2 */);
  };

  return (
    <form onClick={onClickForm}>
      <input placeholder="controlled" />
      <input placeholder="uncontrolled" />

      <button>Отправить заявку на кредит</button>
    </form>
  );
}
