class Clock {
    constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  
    showTime() {
      console.log(this.hours.toString().padStart(2, '0') + ":" + this.minutes.toString().padStart(2, '0') + ":" + this.seconds.toString().padStart(2, '0'));
    }
  }
  
  let clock = new Clock(12, 1, 20);
  clock.showTime();

  //Метод showTime(): Выводит текущее время в консоль в формате HH:MM:SS
  //Метод padStart(2, '0'): Добавляет ведущие нули, если значение меньше 10.