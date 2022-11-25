//     Преобразовать строку в массив слов. Напишите функцию stringToArray(str), которая преобразует строку в массив слов.
function stringToArray(str){
        let newArray = str.split(' ');
        return newArray;
}
//     Напишите функцию deleteCharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteCharacters(str, length){
        let sliceString = str.slice(0, length);
        return sliceString;
}
//     Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
function insertDash(str) {
        let changeStrToArr = str.split(' ');
        let changeArrToStr = changeStrToArr.join('-');
        return changeArrToStr.toUpperCase();
    }
//     Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
function func1(str) {
        let firstLetter = str[0].toUpperCase();
        let restOfStr = str.slice(1);
        let result = firstLetter + restOfStr;
        return result;

}
//     Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
        let firstLetterStr = str.split(' ');
        for (let i = 0; i < firstLetterStr.length; i++ ) {
                firstLetterStr[i] = firstLetterStr[i][0].toUpperCase() + firstLetterStr[i].slice(1);
        } 
        return firstLetterStr.join(' ');
    }
//     Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {
        newStr = '';
        for (let i = 0; i < str.length; i++) {
                if (str[i] === str[i].toUpperCase() ) {
                    newStr +=  str[i].toLowerCase();
                }else{
                    newStr +=  str[i].toUpperCase();; 
                }
        }
        return newStr;
    
    }
//     Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function removeChar(str) {
        let result ='';
        result = str.replace(/[^a-zа-яёА-Я\d]/gi, '');
        return result;
    }
//    Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение.
function zeros(num, len, sign) {
        let zerosLen = len - (num + '').length;
        zerosNum = '';
        for (; zerosLen > 0; zerosLen--){
            zerosNum += 0;   
        }
        return (sign === undefined || sign === '') ?
            zerosNum + num + '':
            sign + zerosNum + num + '';
    }
//     Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
      let result = str1.toLowerCase() === str2.toLowerCase();
      return result;

}
//     Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
function insensitiveSearch(str1, str2) {
        let isStrInStr = str1.toLowerCase().indexOf(str2.toLowerCase());
        let result
        if (isStrInStr >= 0){
          result = true;
        } else {
          result = false;
        }
        return result;
      

}
//     Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {
        let strToArr = str.split(' ');
    for (let i = 0; i < strToArr.length; i++){
        strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].toLowerCase().slice(1);
    }
    let camelCase = strToArr.join('');
    return camelCase;
}
//     Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
        let snakeCase = str.replace(/[A-Z]/g, function (letter) {
                return '_' + letter.toLowerCase();
        });
        return snakeCase.replace(/^_/, '');

}
//     Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {
        let newStr = "";
        for (i = 0; i < n; i++) {
            newStr += str;
        }
        return newStr;

}
//     Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
function endsWith(str, str1){
        let isStrInStr = str.toLowerCase().lastIndexOf(str1.toLowerCase());
        let result
        if (isStrInStr >= 0){
          result = true;
        } else {
          result = false;
        }
        return result;

}
//     Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos){
        let newStr = str.slice(0, pos) + substr + str.slice(pos);
        return newStr;
}
//     Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb){
        symb = symb || '...';
    let newStr = str.slice(0, n) + symb;
    return newStr;

}
//     Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count(str, stringsearch){
        let arr = [];
        let lastIndex = -1;
        while (( lastIndex = str.indexOf(stringsearch, lastIndex + 1)) !== -1) {
                arr.push(lastIndex)
        };
        return arr.length;

}
//     Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str){
        let newStr = str.replace(/ +/g, ' ').trim();
        return newStr;


}
//     Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n){
        let newArr = str.split(' ');
        let shortArr = [];
          for (i = 0; i < n; i++) {
            shortArr.push(newArr[i]);   
        } 
        return newStr = shortArr.join(' ');
    

}
//     Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str){
        let isStrInStr = str.indexOf(word);
        let result
        if (isStrInStr >= 0){
          result = true;
        } else {
          result = false;
        }
        return result;
}

module.exports = {
        stringToArray,
        deleteCharacters,
        insertDash,
        func1,
        capitalize,
        changeRegister,
        removeChar,
        zeros,
        comparison,
        insensitiveSearch,
        initCap,
        initSnake,
        repeatStr,
        endsWith,
        insert,
        limitStr,
        count,
        strip,
        cutString,
        findWord,
};
