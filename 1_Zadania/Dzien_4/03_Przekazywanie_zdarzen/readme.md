# Przekazywanie zdarzeń &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.jsx`, wyjściowym `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Zlicz kliknięcia (~ 15min)

Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.

`ButtonToClick` zawiera `div` oraz przycisk `button`, po kliknięciu którego przesyła odpowiednią informację do callbacku, który pobiera z props pod nazwą `onClick`. **Nie zapomnić sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.**

`BtnCounter` wyświetla `div`, a w nim `h1` oraz 3 przyciski `ButtonToClick`. W `h1` początkowo wyświetla 0, ma tam wyświetlać łącznie ile razy zostały kliknięte przyciski.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 20min)

Stwórz komponent `Shop` oraz komponent `ShopItem`.
 
 `ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`. W `div` znajduje się też przycisk z napisaem "Kup", po jego kliknięciu przesyła się odpowiednią informację do callbacku, który pobiera z props pod nazwą `onBuy`.  **Nie zapomnić sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.** Wywołanie cllbacku ma się odbyć a argumentem pobieranym z tytułu przekazanego w props (`title`).
 
 `Shop` ma mieć następującą strukturę:
 
 ```JSX
    <div>
        <ShopItem title="skarpetki" />
        <ShopItem title="koszula" />
        <ShopItem title="pończochy" />
        <ul>
            {list}
        </ul>           
    </div>        
 ```

Zamiast `list` ma się pojawić lista elementów `li`, z wymienionymi elementami, na których użytkownik kliknął przycisk "Kup".

Wyrenderuj i przetestuj swój komponent. Czy widzisz jakieś błędy w konsoli?

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**