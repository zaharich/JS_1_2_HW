var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2   префиксная форма записи поэтому сначала а=а+1, потом с=а (a уже равно 2)
d = b++; alert(d); // 1   постфиксная форма записи - поэтому сначала d=b (b все еще равно 1). Потом b=b+1 

c = (2+ ++a); alert(c); // 5  a=2, префиксная форма a=a+1(а=3), далее 2+a=5 . Порядок операций определяется по таблице приоритетов. ++... выше приоритет(15) чем у ...+...(14)
d = (2+ b++); alert(d); // 4  b=2, постфиксная форма- сначала d=(2+b), далее b=b+1. (постфикская возвращает значение до инкремента)

alert(a); // 3  изначально а=1, в 3-ей строчке ++а, в 6-ой строчке ++а - два раз инкремент а=3
alert(b); // 3  изначально b=1, в 4-ой b++, в 7-ой b++ - два инкремента b=3. Неважно как возвращается значение -до инкремента или после. Инкремент переменной все равно происходит


/* 2_2 */
var a = 2;
var x = 1 + (a*=2);
//ответ 5. По приоритету сначала выполнится то, что в скобках (а*=2) а=а*2  = 4
//         потом прибавиться 1. 
