
/**
 * This function for ageCal
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
function ageCal(name, year) {

    const date = new Date();
    const age = date.getFullYear()-year;
    let ageStatus = ageCheck(age)
    
    
    return `<p class ="alert alert-${ageStatus.status}"> Hi ${name} your age ${age} years old & you are a ${ageStatus.name} </p>`

    
}
/**
 * function for age Check
 * @param {*} age 
 * @returns object
 */

function ageCheck(age) {
    
    if(age > 0 && age <= 10 ){
        return {
            name : 'Babu',
            status : 'primary'
        }
    }else if(age > 10 && age <= 17){

        return{
            name : 'Young',
            status : 'secondary'
        }
    }else if (age > 17 && age <= 32){
        return {
            name : 'Jobuk',
            status : 'success'
        }
    }else if (age > 32  && age < 60 ){
        return {
            name : 'Boyosko',
            status : 'info'
        }
    }else if(age > 60  && age < 110){
        return {
            name : 'Briddo',
            status : 'danger'
        }
    }else {
        return{
            name : 'Jin/ buth',
            status : 'dark'
        }
    }
}