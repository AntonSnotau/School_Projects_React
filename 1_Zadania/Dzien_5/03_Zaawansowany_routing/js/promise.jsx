$.ajax('https://github.com/users/rogal12321')
  .done(response => {
    console.log(response); // dane z serwera

    $.ajax('API POGODOWE')
      .done(resp => {
        console.log('pogoda dla uzytkownika' + response.username + 'to ' + resp.temperature);
      })
      .fail(error => console.log('wystapil error', error);

  }).fail(error => console.log('wystapil error', error);


console.log('ta czynnosc nie jest wstrzymywana');







fetch('https://github.com/users/rogal12321')
  .then(user => {
    console.log(user.name);
    fetch('API POGODOWE');
  })
  .then(weather => {
    console.log('pogoda dla uzytkownika' + user.username + 'to ' + weather.temperature);
  })
  .then(() => {
    $('html').text(weather.temperature);
  })
  .catch(err => console.log(err));



  var zadDom = fetch('Ola zrob zadanie domowe');
  var przynKres = fetch('Ola przynies kredki');


  constructor() {
    this.state = {
      items : []
    }
  }

  Promise.all([zadDom, przynKres])
    .then(([zrobioneZadDom, Kredki]) => {
      console.log(zrobioneZadDom); // Ola napisala w Pamietniku ze nie lubi ludzi
      console.log(Kredki) //Czerwona i biala

      this.setState({
        items: Kredki
      })
    })
    .catch(blad => //Ola albo nie przyniosla kredek albo nie zrobila zadania domowego)


// 'Krzysiek mowi mi ze jutro odda
  ('krzysiek daj 5 zl')
    .then(() => {
      ' za te 5 zl mgoe kupic lody'
    })
    .then(() => {
      'Za kupione lody zjem je z dziewcznya'
    })
    .catch(() => {
      'to pojde ise zabic'
    })
