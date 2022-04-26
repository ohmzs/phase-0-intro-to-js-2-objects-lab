//We want to store each employee as an Object
//employee's name and street address.

//assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like.




// const employee = (name, streetAddress)



// function nondestructivelyUpdateObject(obj, key, value) {
//     return {
//       ...obj,
//       [key]: value,
//     };
//   }

const employee = {
    name: "Omar",
    streetAddress: "10 Pal Ave."
}
function updateEmployeeWithKeyAndValue(employee, key, value){    
    return {                                                     //returns an employee with the original key value pairs and the new key value pair
        ...employee,                                            //it does not modify the original employee, but rather returns a clone with the new data
    [key]: value,
}
}

console.log(updateEmployeeWithKeyAndValue(employee, "contact", 24244422 ))  //updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    return {
   ...employee,
   [key]: value,
}
}

function destructivelyDeleteFromEmployeeByKey(employee, key){           //  returns employee without the deleted key/value pair
        delete employee[key]
        return employee
}
