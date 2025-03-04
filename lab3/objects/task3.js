let emptyObj = {};
let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};

function isEmpty(obj) {
    for (let key in obj) {
      return false; // Если свойство найдено, объект не пустой
    }
    return true; // Если свойств не найдено, объект пустой
  };

  console.log(isEmpty(emptyObj));
  console.log(isEmpty(myBrowser));