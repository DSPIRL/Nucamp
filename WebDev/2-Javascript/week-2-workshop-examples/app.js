// let positiveNum = Math.floor(3.7);
// let negativeNum = Math.floor(-3.7);
//
// console.log(positiveNum);
// console.log(negativeNum);


function putNameTogether(firstName, middleName = '', lastName) {
    let fullName = (`${firstName}` + `${middleName}` + ` ${lastName}`);
    console.log(fullName);
}

putNameTogether('Raph', undefined, 'fet');
