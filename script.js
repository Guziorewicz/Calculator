let runningTotal = 0; /*bierząca suma dla screena */
let buffer = "0"; /*buffor jako wciśnięty przycisk*/
let previousOperator =
  null; /*do zapamiętania co było kliknięte,w fazie początkowej ma watość null czyli 'pusty' */
const screen =
  document.querySelector(
    ".screen"
  ); /*jako 'screen' w funkcjach przyjmij selector 'class = screen'*/

document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  }); /*dodaje dla 'calc-buttons' selector który uruchamia funkcję 'button-click'*/

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender(); /*odśwież*/
} /*'NaN' Not a Number - funkcja sprawdza czy wartość na przycisku jest numerem czy nie i w dwóch przypadkach używa funkcji symbol albo numer*/

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
} /*funkcja sprawdza czy buffor jest równy 0 i jeśli tak to go zamienia na wartość a jeśli nie to dostawia do niego kolejna liczbę*/

function handleSymbol(value) {
  switch (value) {
    case "C" /*w przypadku gdy wciśniesz 'C' */:
      buffer = "0"; /*buffor się wyzeruje */
      runningTotal = 0; /* bierząca suma przyjmie wartość 0*/
      previousOperator =
        null; /*informacja o poprzednim operatorze się skasuje*/
      break;
    case "=" /* w przypadku '=' */:
      if (previousOperator === null) {
        return; /*w poprzednim operatorze nic nie ma to nic nie rób :)*/
      }
      flushOperation(parseInt(buffer));
      previousOperator = null; /*wywala poprzeni operator*/
      buffer =
        "" +
        runningTotal; /*powiązanie stringów , bierząca suma staje się stringiem*/
      runningTotal = 0; /*bierząca suma jest wyzerowana żeby nie wpływała na wynik buffora*/
      break;
    case "⬅":
      if (buffer.length === 1) {
        /*jeśli długość buffora wynosi 1 czyli jak jest jedna liczba*/
        buffer = "0"; /*to buffor zmieni się na 0*/
      } else {
        /*w przeciwnym razie*/
        buffer = buffer.substring(
          0,
          buffer.length - 1
        ); /*podciągnij (substring) długośc buffora o -1 czyli zabierz jedną liczbę*/
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(buffer); /*wymuś zamianę buffora na int */
  if (runningTotal === 0) {
    /*jeśli bierząca suma wynosi 0*/
    runningTotal = intBuffer; /* zamień ją na int buffora */
  } else {
    /* w przeciwnym razie*/
    flushOperation(
      intBuffer
    ); /*jeśli suma bierząca ma wartość, wykonaj fukncję flushOperation*/
  }

  previousOperator = value;

  buffer =
    "0"; /*buffor ustawia się na zero aby pobrać wartość drugiej liczby która będzie wpisywana*/
}

function flushOperation(intBuffer) {
  /*spłucz operacje */
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "x") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
} /*w przypadku gdy operator przyjmuje wartość z wyżej podanych to suma bierząca poddana jest działaniu z buforem*/

function rerender() {
  screen.innerText = buffer;
} /*funkcja wrzuca w screen buffor*/
