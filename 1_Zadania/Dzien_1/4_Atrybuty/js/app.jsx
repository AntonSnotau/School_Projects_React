// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//     const imageUrl =
//     'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
//     const color = prompt('Podaj kolor ramki');
//     let border;
//     let napis;
//     function setColor(color) {
//       if (color == 'red') {
//         border = {border: '2px solid red'};
//       }
//       else if (color == 'green') {
//         border = {border: '2px solid green'};
//       }
//       else if (color == 'blue') {
//         border = {border: '2px solid blue'};
//       }
//       else {
//         napis = 'Nieprawidłowy kolor';
//       }
//       return border
//     };
//     // const boxstyle = {
//     //   width: '100px';
//     //   height: '100px';
//     //   borderSize: '5px';
//     // };
//     ReactDOM.render(
//       <div>
//         <img src={ imageUrl } alt=''/>,
//         <div style={setColor(color)}>{napis}</div>
//       </div>,
//       document.getElementById('app')
//     );
// });

import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
    let chosenColor, hadColor = true;
    const color = prompt('Give me a color: ');

    if(color.indexOf('blue') > -1){
      chosenColor = 'blue'
    }else if(color.indexOf('red') > -1){
      chosenColor = 'red';
    }else if(color.indexOf('green') > -1){
      chosenColor = 'green';
    }else{
      hadColor = false;
    }

    const box = {
      width: '100px',
      height: '100px',
      borderSize: '5px',
      borderStyle: 'solid',
      borderColor: chosenColor
    }

    if(chosenColor){
      ReactDOM.render(
        <div>
          <img src={imageUrl} alt="" /> {/*commento*/}
          <div style={box}>{}</div>
        </div>,
          document.getElementById('app')
      );
    }else{
      ReactDOM.render(
        <div>
          <img src={imageUrl} alt="" /> {/*commento*/}
          <div>Nieprawidłowy kolor</div>
        </div>,
          document.getElementById('app')
      );
    }


});
