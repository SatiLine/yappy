function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function(a) {
      this.value += a;
    };
  }
  
  let accumulator = new Accumulator(1); // начальное значение 1
  accumulator.read(10); // прибавляет 10 к текущему значению
  accumulator.read(5); // прибавляет 5 к текущему значению
  console.log(accumulator.value); // выведет 16