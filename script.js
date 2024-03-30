let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = string.replace(/%/g, '*0.01');
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            let lastChar = string[string.length - 1];
            if (!(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '.' )) {
                string += e.target.innerHTML;
                input.value = string;
            }

            else if (!isNaN(e.target.innerHTML) || e.target.innerHTML == '(' || e.target.innerHTML == ')') {
                string += e.target.innerHTML;
                input.value = string;
            }
        }
    })
})
