class Vehicle {
    constructor(name, price, colour, engine, mileage) {
      this.name = name;
      this.price = price;
      this.colour = colour;
      this.engine = engine;
      this.mileage = mileage;
    }
    showDetails() {
      console.log(`Car Name: ${this.name}, Price: ${this.price}, Colour : ${this.colour}, Engine: ${this.engine}, Mileage : ${this.mileage} `);
    }
  }
  const toyotaFortuner = new Vehicle( "Toyota Fortuner", "₹ 45.50 lakh","White","2694cc","10.01kmpl");
  const mahindraScorpio = new Vehicle("Mahindra Scorpio","₹ 19.81 lakh","Black","2184cc","12.01kmpl");
  const mahindraThar = new Vehicle("Mahindra Thar","₹ 15.56 lakh","Grey","2184cc","14.0kmpl");
  const tataSafari = new Vehicle("Tata Safari","₹ 17.90 lakh","Blue","1199cc","19.2 kmpl");
  const AudiQ5 = new Vehicle("Audi Q5","₹ 55.20 lakh","Saffron","4999cc","19.3kmpl");
  
  toyotaFortuner.showDetails();
  mahindraScorpio.showDetails();
  mahindraThar.showDetails();
  tataSafari.showDetails();
  AudiQ5.showDetails();
  
  
  console.log(" ");
  
  console.log(`------------ Step.1: Travrse the Vehicle class objects-----------`);
  const arrayOfVehicle = [toyotaFortuner,mahindraScorpio,mahindraThar,tataSafari,AudiQ5,];
  
  
  for (const element of arrayOfVehicle) {
    element.showDetails();
  }
  
  console.log(" ");
  
  class College {
    constructor(collegeName, department, city) {
      this.collegeName = collegeName;
      this.department = department;
      this.city = city;
    }
  }
  const sgbau = new College("Santa Gadge Baba Amravati University","Dr.Ambedkar Thought","Amravati");
  const prmceam = new College("Prof.Ram Meghe College of Engineering and Management","Engineering and Management","Badnera");
  const pote = new College("P.R.Pote,Patil,Group,Of Edutional,Institudes","Engineering","Amravati");
  const sipna = new College("Sipna College of Engineering","Engineering","Amravati");
  console.log(`----------------------------Step.3: Traverse object of College-----------------------`);
  
  travrse(sgbau);
  console.log(`-------------------------------------------------------`);
  travrse(prmceam);
  console.log(`-------------------------------------------------------`);
  travrse(pote);
  console.log(`-------------------------------------------------------`);
  travrse(sipna);
  
  // console.log(`----------------------------Step.2,3: Traverse object of College-----------------------`);
  function travrse(collegeObject) {
    for (const key in collegeObject) {
      if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
        console.log(`${key} : ${element}`);
      }
    }
  }