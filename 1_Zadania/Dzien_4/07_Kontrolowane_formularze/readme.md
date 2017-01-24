# Kontrolowane formularze &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Hello, Ty (~ 5min)

Stwórz komponent `HelloName`.

Ma wyświetlać element `div`, a w nim `input type="text"` oraz `h1`. W `h1` ma się wyświetlać "Hello, {name}". `{name}` na być na żywo tym, co wpisał użytkownik, a domyślnie ma to być "Ty".

Pamiętaj, żeby `input` był komponentem kontrolowanym.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min - 15min)

Stwórz komponent `AddTwoNumbers`.

Ma renderować `div`, a w nim dwa `input type="text"` oraz `h1`. W `h1` ma się na żywo wyświetlać wynik dodawania dwóch liczb. Pobieraj je z elementów `input`, pamiętaj o konwersji na typ `Number`.
 
 Jeżeli któraś dana z elementów `input` po konwersji da NaN (użyj `Number.isNaN()`) to wypisz w `h1` "Podaj dwie liczby.".
 
Pamiętaj, żeby `input` był komponentem kontrolowanym.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2 (~ 15min)

Stwórz komponent `InteractiveDiv`.

Ma renderować `div`, a w nim `input type="`**`number`**`"` oraz wewnętrzny `div`. Ten wewnętrzny `div` ma mieć następujące style:
- Wysokość: 100px,
- Wysokość: z elementu `input` `+'px'`,
- Kolor tła: czerwony.

Zmienijąc wartość inputa powinna się zmieniać automatycznie szerokość wewnętrznego elementu `div`, pamiętaj o konwersji na typ `Number`.

Pamiętaj, żeby `input` był komponentem kontrolowanym.

Wyrenderuj i przetestuj swój komponent. Zauważ jak state się łączy i jaki jest jego przepły w komponencie. 

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 3 (~ 25min - 35min)

To zadanie pozwoli Ci stworzyć kolejną minigrę matematyczną.

Stwórz komponent `MathAnswersGame`.

Na początku wylosuj **dwie liczby całkowite z przedziału 1-10**. Wykonaj dodawanie pomiędzy dwoma wylosowanymi liczbami, przechowaj wynik.

Wyświetl dodawane liczby oraz `input type="number"`.

Gra wyświetlać się ma w takiej strukturze (przykład):
```HTML
<div>
    <h1>2 + 3 =</h1>
    <div>
        <input type="number">
    </div>
    <h2>00:02</h2>
    <h3>Punkty: 2</h3>
</div>
```

Gracz ma mieć 3 sekund na udzielenie prawidłowej odpowiedzi. Uruchom timer. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Po upłynięciu czasu sprawdź, czy wynik podany przez gracza jest prawidłowy. Zasady:
- Jeżeli wynik jest prawidłowy to dodajesz punkt graczowi, generujesz nowe liczby i uruchamiasz ponownie timer (zauważ, że najlepiej zrobić do tego osobną metodę pomoczniczą, żebyś nie musiał powtarzać kodu);
- Jeżeli wynik jest nieprawidłowy (lub gracz nie zdążył wpisać wyników - to będzie ten sam warunek), to zablokuj `input` i wyświetl w `h1` napis "Koniec gry".

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 4 (~ 30min - 40min)

To zadanie pozwoli Ci stworzyć własną listę rzeczy do zrobienia.

Stwórz komponent `ToDoList`. Przechowuje on w swoim state listę rzeczy do zrobienia, jako tablicę obiektów w takiej formie:
```JavaScript
[
    {
        name: 'Element do zrobienia',
        done: false
    },
    //...
]
```

Oto przykładowa struktura komponentu (przykład, HTML):
```HTML
<div class="toDoList">
    <div class="header">
        <h2>Lista rzeczy do zrobienia</h2>
        <input type="text">
        <button class="addBtn">Dodaj</button>
    </div>

    <ul>
        <li>Kupić mleko</li>
        <li class="checked">Zrobić prezentację</li>
    </ul>
</div>
```

Po wpisaniu do elementu `input` dowolnego tekstu i kliknięciu na przycisk "Dodaj", powinna się zaktualizować wewnętrzna tablica z rzeczami do zrobienia. Wstaw wtedy nowy obiekt na jej końcu, ustawiając `done` na `false`. W praktyce wymaga to pobrania tablicy ze state, stworzenia jej kopii, tam dodania obiektu i zaktualizowania state z całą nową tablicą. Po dodaniu wyczyść `input` (po prostu ręcznie ustawiając stan powiązany z `input` na pusty string).

Pamiętaj, żeby `input` był komponentem kontrolowanym.

Po kliknięciu na dowolny element `li` z listy, należy przeszukać tablicę i znaleźć ten element, a następnie zmienić mu `done` na odwrotny. Jeżeli element był oznaczony jako skończony, to ma nie być skończony, a jeżeli był nieskończony, to ma być skończony.

Podczas renderowania nadawaj klasę CSS `checked` elementom `li`, które są oznaczone jako zakończone. Pamiętaj o odpowiednich kluczach dla elementów listy.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**