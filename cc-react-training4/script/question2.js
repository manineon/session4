function camelize(str) {
    let string1 = str.split('-');
    for (let i = 0; i < string1.length; i++) {
        if (i == 0)
            continue;
        let string2 = string1[i].split("");
        string2[0] = string1[i].charAt(0).toUpperCase();
        string1[i] = string2.join("");
    }
    str = string1.join("");
    return str;
}

console.log(camelize("background-color-"));
console.log("list-style-image");
console.log(camelize("-webkit-transition"));