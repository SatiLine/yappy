let str = prompt("Введите почту: ");

function address(str) {
    let flag = false;
    let warning = "No @";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "@") {
            flag = true;
        }
        else {
            return warning;
        }
    }

    return flag;
}

document.write(address(str));
