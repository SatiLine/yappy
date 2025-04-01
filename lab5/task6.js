async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
  }
  
  function f() {
    let result;
    wait()
      .then(value => {
        result = value;
        console.log("Результат из wait():", result); // Выведет 10
      });
  
    // result будет undefined сразу после вызова wait(),
    // так как wait() - асинхронная функция
    console.log("Функция f() завершилась");
  }
  
  f();
  