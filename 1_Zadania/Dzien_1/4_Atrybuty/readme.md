# Atrybuty &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadania rozwiązywane z wykładowcą

### Atrybut ze zmiennej  (~ 5min)

Przechowaj adres obrazu w zmiennej dodając poniższy kod:
 
 ```JavaScript
 const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```img```, którego atrybut ```src``` ustawisz w JSX na zmienną ```imageUrl```. Pamiętaj o zamknięciu tagu ```img```.

### Dynamiczne style  (~ 10min - 20min)

Za pomocą ```prompt()``` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź, czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę ```.find()``` tablicy), jeżeli nie to wyrenderuj w elemencie o id ```app``` element ```div``` z napisem `Nieprawidłowy kolor`.

Jeżeli podany kolor był poprawny to za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, ze stylami ustawionymi na:
- Szerokość: 100px,
- Wysokość: 100px,
- Grubość ramki: 5px,
- Styl ramki: solid,
- Kolor ramki: ten podany przez użytkownika.

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min)

> Aby wykonać to zadanie, zmień ustawienie w webpack.config.js dla ```entry```, aby wyglądało w ten sposób:
> ```JavaScript
> entry: "./js/zadanie01.jsx",
> ```
> **Odpowiedzi do tego zadania wpisuj do pliku ```js/zadanie01.jsx```.**

Ustaw wszystkim trzem divom wysokość na ```100px```, a dla każdego ustaw kolor tła odpowiadający jego nazwie. **Pamiętaj o użyciu odpowiedniej nazwy stylu**.
 
Spróbuj wykonać zadanie z pomocznicą zmienną (po jednej dla każdego z div-ów), a następnie skrótowym zapisem bezpośrednio w każdym tagu JSX.

### Zadanie 2 (~ 15min - 20min)

> Aby wykonać to zadanie, zmień ustawienie w webpack.config.js dla ```entry```, aby wyglądało w ten sposób:
> ```JavaScript
> entry: "./js/zadanie02.jsx",
> ```
> **Odpowiedzi do tego zadania wpisuj do pliku ```js/zadanie02.jsx```.**

W pliku ```js/zadanie02.jsx``` znajduje się funkcja ```genNumber()```, która generuje pseudolosowe liczby z zakresu 1-10. Za jej pomocą wygeneruj liczbę A i liczbę B.

Następnie za pomocą funkcji ```prompt()``` zapytaj użytkownika jaki jest wynik dodawania tych dwóch liczb. **Wyświetl w komunikacie prompt-a obie liczy, żeby użytkownik miał szansę je zobaczyć.**

Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```. Jeżeli odpowiedź użytkownika była poprawna to w nowoutworznym elemencie ```div``` wyświetl informację `Odpowiedź poprawna` i ustaw styl tła na zielony. Jeżeli odpowiedź była niepoprawna to element ```div``` ma zawierać informację `Odpowiedź błędna` oraz ma mieć styl tła czerwony.

 Spróbuj wykonać to zadanie na kilka sposobów:
 - Zapisując w dwóch zmiennych tekst i kolor tła;
 - Zapisując w jednej zmiennej gotowy element w zależności od sytuacji;
 - Tworząc nową funkcję ```getAnswerElement(a, b, answer)```. Przyjmuje ona parametry - liczbę A, B oraz odpowiedź użytkownika. Ma ona zwrócić gotowy element w zależności od sytuacji. Następnie przerób miejsce w którym korzystasz z ```ReactDOM.render()``` w taki sposób, żeby renderował element ```div```, a w nim bezpośrednio wynik działania funkcji ```getAnswerElement()```.