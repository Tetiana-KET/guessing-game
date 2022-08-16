//Каждый объект Range определяется исходной и завершаемой позицией символов.
//В основе выделения лежит Range – диапазон.
//Он представляет собой пару «граничных точек»: начало и конец диапазона.

// function binarySearch(val, arr) {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {

//     console.log('try again');
    
//     const middle = min + Math.floor((max - min) / 2);

//     if (val === arr[middle]) {
//       return middle;
//     }

//     if (val < arr[middle]) {
//       max = middle - 1;
//     } else {
//       min = middle + 1;
//     }
//   }
//   return -1
// }


class GuessingGame {
    constructor() {}

    setRange(min, max) {// SetRange( _Start_ , _End_ ) переопределяет начальные и завершающую позиции существующего объекта Range .
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.middle = Math.round((this.min + this.max) / 2);//находим среднее из заданного диапазона
    }

    lower() {//если число меньше, то максимум равен середине

        this.max = this.middle; 
    }

    greater() {//если число больше, то минимумум равен середине

        this.min = this.middle;
    }
}

module.exports = GuessingGame;
