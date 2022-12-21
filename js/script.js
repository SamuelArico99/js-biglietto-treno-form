const kmInput = document.getElementById('km-input')
const ageInput = document.getElementById('age-input')
const ageSelect = document.getElementById('age-select')

const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click',

    function() {
        console.log('kmInput.value', kmInput.value);
        console.log('ageSelect.value', ageSelect.value);

        const km = kmInput.value;
        const age = ageSelect.value;

        // Calcolo prezzo biglietto
        const prezzo = 0.21;
        let prezzofinale = prezzo * km;
        console.log(prezzofinale.toFixed(2));
        
        
        // Se il cliente è minorenne va applicato uno sconto del 20%
        if(age =='m'){
            prezzofinale = (prezzofinale -(prezzofinale / 100)*20);
            console.log(prezzofinale.toFixed(2));
        }
        
        // Se il cliente è over 65 va applicato uno sconto del 40%
        else if(age == 'o'){
            prezzofinale = (prezzofinale -(prezzofinale / 100)*40);
            console.log(prezzofinale.toFixed(2));
        }
        // Output del prezzo con massimo due decimali
        // Fine
    }
);