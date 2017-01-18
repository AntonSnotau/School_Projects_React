# Zagnieżdżanie &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Dzielenie na komponenty (~ 10min - 15min)

Stwórz komponent `ShopItem` z odpowiednimi `props`, które wynikają z dalszej części zadania. Ma mieć on następującą strukturę:
```HTML
<div>
    <div>
        <h1>{title z props}</h1>
        <img src="{image z props}">
    </div>
    <article>
        <p>{description z props}</p>
    </article>
    <div>
        Cena: {price z props}
        <button>Kup!</button>
    </div>
</div>
```

Następnie podziel go na 4 komponenty:
- `ShopItemHeader`
- `ShopItemDescription`
- `ShopItemPricing`
- `ShopItem`, który ma dalej podstawową strukturę i korzysta z powyższych.

Wyrenderuj na stronie komponent `ShopItem` podając w atrybutach do props przykładowe dane.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

**Zadanie wykonaj tylko komponentami w wersji zbudowanej z klas ES6**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min)

Wykorzystaj zadanie zrobione z wykładowcą.

Stwórz komponent o nazwie `ShopList`. Niech przyjmuje on w `props` tablicę obiektów z elementami kosztyka.
                                      
Obiekty mają być w jakiej formie:

```JavaScript
{
    title   :   'nazwa przedmiotu',
    image   :   'url_do_obrazu_przedmiotu'
}
```

Powinien on wyświetlać w divie o klasie CSS `shopitems` wyrenderować same komponenty `ShopItemHeader` z odpowiednimi danymi. Wykorzystaj `array.map()`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut `menu`:
```JavaScript
[
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/a/aa/3-Tastenmaus_Microsoft.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptopr programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
]
```
**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

**Zadanie wykonaj tylko komponentami w wersji zbudowanej z klas ES6**

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

Obiekty mają być w jakiej formie:

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