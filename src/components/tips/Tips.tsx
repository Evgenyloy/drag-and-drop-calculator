import { SlQuestion } from "react-icons/sl";

function Tips() {
  return (
    <div className="app__tips">
      <SlQuestion className="app__tips-icon" />
      <p className="app__tips-text">
        - В режиме конструктора можно собирать интерфейс, калькулятор не
        работает <br /> - В режиме runtime работает калькулятор , но нельзя
        собирать интерфейс <br />- Двойной клик по элементу удаляет его из
        конструктора <br />- Переключение при не собранном конструкторе
        сбрасывает состояние
      </p>
    </div>
  );
}

export default Tips;
