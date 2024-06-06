const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    const valid_check = document.querySelector('#valid_Check')
    const message_print = document.querySelector('#message_print')

    results.innerHTML = '';
    message_print.innerHTML = '';
    valid_check.innerHTML = '';



    if (height == '' || height < 70 || isNaN(height)) {
        valid_check.innerHTML = "Please enter a valid height"
    }
    else if (weight == '' || weight < 4 || isNaN(weight)) {
        valid_check.innerHTML = "Please enter a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `${bmi}`

        if (bmi < 18.6) {
            message_print.innerHTML = "Under Weight Nigga"
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            message_print.innerHTML = "Normal Weight Nigga"
        }
        else if (bmi >= 24.9) {
            message_print.innerHTML = "Over Weight Nigga"
        }
    }

})
