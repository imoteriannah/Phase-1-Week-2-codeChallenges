//get car spped
const carSpeed = prompt("Please enter car speed(km/s)");
const licenseStatus=null;
let totalDemeritPoints = 0;

//check speed of car against base
const checkSpeed =(speed)=>{
    if(speed > 0 && speed<=70){
        return "OK";
    }else if(speed > 0 && speed >70){
        //get demerit points from a call to calculateDemeritPoints function
        const points = calculateDemeritPoints(speed);
        alert(`You have ${points} demerit points`);

        const isValid = licenseValidity();
        if(isValid !== undefined){
            alert(isValid);
        }
        return 
    }
};

//calcualte total demerit points
const calculateDemeritPoints =(sp)=>{
    const valAbove = sp - 70;
    const penaltyPoints = Math.floor(valAbove/5);
    totalDemeritPoints = penaltyPoints;

    return penaltyPoints;
};
//check validity of drivers License
const licenseValidity =()=>{
    if(totalDemeritPoints>12){
        return "License suspended";
    }

}

checkSpeed(carSpeed);