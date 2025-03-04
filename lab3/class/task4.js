class Stock {
    constructor() {
      this.boxes = [];
      this.serialNumber = 0;
    }
  
    add(w, v) {
      this.boxes.push({
        serialNumber: this.serialNumber,
        weightCapacity: w,
        volume: v,
        addedAt: Date.now()
      });
      this.serialNumber++;
    }
  
    getByW(minW) {
      let suitableBoxes = this.boxes.filter(box => box.weightCapacity >= minW);
      if (suitableBoxes.length === 0) return -1;
  
      let oldestBox = suitableBoxes.reduce((oldest, current) => {
        return oldest.addedAt < current.addedAt ? oldest : current;
      }, suitableBoxes[0]);
  
      this.boxes = this.boxes.filter(box => box.serialNumber !== oldestBox.serialNumber);
      return oldestBox.serialNumber;
    }
  
    getByV(minV) {
      let suitableBoxes = this.boxes.filter(box => box.volume >= minV);
      if (suitableBoxes.length === 0) return -1;
  
      let oldestBox = suitableBoxes.reduce((oldest, current) => {
        return oldest.addedAt < current.addedAt ? oldest : current;
      }, suitableBoxes[0]);
  
      this.boxes = this.boxes.filter(box => box.serialNumber !== oldestBox.serialNumber);
      return oldestBox.serialNumber;
    }
  }
  

  let stock = new Stock();
  
  stock.add(2, 20);
  stock.add(15, 45);
  stock.add(3, 25);
  
  console.log(stock.getByW(21)); 
  console.log(stock.getByV(30)); 
  console.log(stock.getByW(25)); 
  console.log(stock.getByV(30)); 