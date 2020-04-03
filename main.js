
function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let numbers = document.form.textview.value;
    document.form.textview.value = numbers.substring(0, numbers.length - 1);
}

function operation() {
    let numbers = document.form.textview.value;

        if(numbers) {
            document.form.textview.value = eval(numbers);
        }
}