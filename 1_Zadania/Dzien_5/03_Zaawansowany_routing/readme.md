# Zaawansowany routing &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Zagnieżdżone ścieżki (~ 10min - 20min)

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Main`, w którym jest `h1` z napisem "Witaj na stronie";
- `/about/us` - ścieżka renderuje komponent `AboutUs`, w którym jest `p` z napisem "Trochę więcej o nas...";
- `/about/company` - ścieżka renderuje komponent `AboutCompany`, w którym jest `p` z napisem "Trochę więcej na temat firmy...".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i treść renderowaną przez dzieci.
 
Dodatkowo, ścieżki zaczynające się od `/about` mają dodatkowy, własny szablon, który zawiera w `div` element `h2` z napisem "O nas" i treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)

Przerób zadanie 1 z poprzedniego działu tak, aby każdy zaznaczony link miał zieloną ramkę.

Stosuj `IndexLink`, zamiast `Link`, żeby ominąć możliwe kłopoty z kolorowaniem linków, które nie są dokładnie takie jakie powinny być.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki i ich wygląd.

### Zadanie 2 (~ 15min - 25min)

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, ma wyświetlać listę wszystkich linków services, dokładnie: `/services/www`, `/services/shop`, `/services/seo`;
- `/services/:service` - ścieżka renderuje komponent `ServiceInfo`, w którym jest `h1` z napisem "Proponujemy usługę: {service}", gdzie `{service}` to nazwa tego co poda się w parametrze URL. Poprawne parametry `service` to: `www`, `shop` lub `seo`. Sprawdź to, jeżeli wpisano co innego - wyświetl tylko link do strony głównej;
- Jeżeli ktoś poda nieprawidłową ścieżkę, to również wyświetla się link do strony głównej.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki. Sprawdź również co się stanie gdy podasz nieprawidłowy odnośnik (wpisanie `/brak` lub `/services/niepoprawny` powinno skutkować wyświetleniem linku do strony głównej).
