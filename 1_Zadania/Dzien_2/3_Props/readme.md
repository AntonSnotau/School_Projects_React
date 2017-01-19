# props &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Pierwszy komponent z props (~ 5min - 10min)

Stwórz komponent `Hello`. Do `props` przekazuje się mu imię (`name`) oraz nazwisko (`surname`).

Powinien on wyświetlać w elemencie `h1` napis "Hello, name surname", z odpowiednimi danymi.

Wyrenderuj go na stronie podając w atrybutach do props swoje dane.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min)

Stwórz komponent o nazwie `AddNumbers`. Do `props` przekazuje się mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

Powinien on wyświetlać w elemencie `h1` sumę tych dwóch liczb.

Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**

### Zadanie 2 (~ 10min - 15min)

Stwórz komponent o nazwie `Sum`. Do `props` przekazuje się mu tablicę liczb (`numbers`).

Powinien on wyświetlać w elemencie `h1` sumę wwszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `array.reduce()`.

Wyrenderuj go na stronie podając w atrybucie do props przykładową tablicę liczb.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**

### Zadanie 3 (~ 10min)

Zmodyfikuj komponent `LikeBox` z poprzedniego działu. Niech przyjmuje w `props` początkową liczbę polubień (`likes`).

Wyrenderuj go na stronie podając w atrybucie do props przykładową liczbę polubień.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**

### Zadanie 4 (~ 10min - 20min)

Zmodyfikuj komponent `Menu` z poprzedniego działu. Niech przyjmuje on w `props` tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:

```JavaScript
{
    url     :   'adres_odnośnika'
    text    :   'tekst linku'
}
```

Używając `array.map()` stwóz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut `menu`:
```JavaScript
[
    {
        urL     :   '/',
        text    :   'Strona główna'
    },
    {
        urL     :   '/blog',
        text    :   'Blog'
    },
    {
        urL     :   '/pricing',
        text    :   'Cennik'
    },
    {
        urL     :   '/contact',
        text    :   'Kontakt'
    }
]
```


**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**