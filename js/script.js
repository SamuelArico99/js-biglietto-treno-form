const kmInput = document.getElementById('km-input');
const nameInput = document.getElementById('name-input');
const ageSelect = document.getElementById('age-select');

const submitButton = document.getElementById('submit-button');
const emptyButton = document.getElementById('empty-button')

submitButton.addEventListener('click',

    function() {
        console.log('kmInput.value', kmInput.value);
        console.log('ageSelect.value', ageSelect.value);

        const km = kmInput.value;
        const age = ageSelect.value;
        const name = nameInput.value;
        document.getElementById("display").style.display = 'block';
        document.getElementById('name').innerHTML = name;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000) + 1;
        // Calcolo prezzo biglietto
        const prezzo = 0.21;
        let prezzofinale = prezzo * km;

        if(age == 's'){
            console.log(prezzofinale.toFixed(2));
            document.getElementById('costo').innerHTML =  prezzofinale.toFixed(2) + ' €' ;
            document.getElementById('offerta').innerHTML = 'Biglietto Standard';
        }
        
        
        // Se il cliente è minorenne va applicato uno sconto del 20%
        if(age == 'm'){
            prezzofinale = (prezzofinale -(prezzofinale / 100)*20);
            console.log(prezzofinale.toFixed(2));
            document.getElementById('costo').innerHTML =  prezzofinale.toFixed(2) + ' €' ;
            document.getElementById('offerta').innerHTML = 'Biglietto Minorenni';
        }
        
        // Se il cliente è over 65 va applicato uno sconto del 40%
        else if(age == 'o'){
            prezzofinale = (prezzofinale -(prezzofinale / 100)*40);
            console.log(prezzofinale.toFixed(2));
            document.getElementById('costo').innerHTML =  prezzofinale.toFixed(2) + ' €' ;
            document.getElementById('offerta').innerHTML = 'Biglietto Over 65';
        }
        // Output del prezzo con massimo due decimali
        // Fine
    }
);
emptyButton.addEventListener('click',
    function() {
       nameInput.value = '';
       kmInput.value = '' ;
       ageSelect.value = 's';
       document.getElementById("display").style.display = 'none';
    }
)