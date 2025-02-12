document.write("1" + 2 + 3); document.write("<br>");
document.write(1 + 2 + "3"); document.write("<br>");
document.write("1" - 2); document.write("<br>");
document.write("1" + - 2); document.write("<br>");
document.write("1" + "1" - "1" ); document.write("<br>");
document.write("foo" + - "bar"); document.write("<br>");
document.write(0 == "0"); document.write("<br>");
document.write(0.5 + 0.1 == 0.6); document.write("<br>");
document.write(0.1 + 0.2 == 0.3); document.write("<br>");
document.write(true + true + true == 3); document.write("<br>");
//true потому что проверка только по соответсвию значения, а true соответствует в мат.логике 1
// второй вариант объяснения происходит преобразование типов операндов перед сравнением
document.write(true == 1); document.write("<br>");
//false потому что эквиваленция проверяет значение + тип. у нас 2 разных типа число и boolean
document.write(true === 1); document.write("<br>");
document.write(1 < 2 < 3); document.write("<br>");
document.write(3 > 2 > 1); document.write("<br>");
document.write(9007199254740991 + 1 == 9007199254740991 + 2); document.write("<br>");
document.write(Math.sqrt(-1) == Math.sqrt(-1)); document.write("<br>"); 