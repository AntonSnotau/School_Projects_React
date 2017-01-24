# Więcej dzieci &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Dzieci i wnuki (~ 5min - 15min)

Stwórz komponenty `ParentComponent`, `ChildComponent` oraz `GrandchildComponent`.

Niech `ParentComponent` renderuje `ChildComponent`, przekazując mu jako dzieci swoje dzieci.

`ChildComponent` renderuje `GrandchildComponent`, przekazując mu jako dzieci swoje dzieci.
 
 `GrandchildComponent` po prostu wyświetla swoje dzieci.

Wyrenderuj i przetestuj swój komponent, za pomocą takiej konstrukcji:
```JSX
<ParentComponent>
    <h1>To działa!</h1>
</ParentComponent>
```

Kod ten powinien wyświetlić taką strukturę:
```
-- ParentComponent
    |-- ChildComponent
          |-- GrandchildComponent
                |-- <h1>To działa!</h1>
```

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 20min)

Stwórz komponent `WebsiteTemplate`. Spraw, żeby renderował on szablon strony "holy grail":

![Układ strony holy grail](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/images/flex-order-page.svg "Układ strony holy grail")

Skorzystaj z dołączonego arkusza stylu, możesz się posiłkować tym artykułem: <https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/> .

Komponent powinien przyjmować przez props:
- `header`, który wstawia do nagłówka;
- `content`, który wstawia do głównej treści;
- `menu`, który wstawia do menu po lewej;
- `ads`, który wstawia do sekcji po prawej;
- `footer`, który wstawia do stopki.

Wyrenderuj i przetestuj swój komponent, używając takiej konstrukcji:
```JSX
<WebsiteTemplate
    header = {
        <h1>Moja strona</h1>
    }
    content = {
        <div>
            <h1>Witaj na mojej stronie</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
    }
    menu = {
        <ul>
            <li>Strona główna</li>
            <li>O mnie</li>
            <li>Kontakt</li>
        </ul>
    }
    ad = {null}
    footer = {
        <p>&copy; 2017 Coders Lab</p>
    }
/>
```

Sprawdź, czy została poprawnie wygenerowana strona.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**