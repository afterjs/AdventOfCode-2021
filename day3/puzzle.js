const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let binaryList = data.trim().split('\n');

    console.log(` Part 1 -> ${calculatePowerConsumption(binaryList)}`)
});

const calculeCommon = (data) => {
    let zero = 0;
    let one = 0;

    for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i]) === 0) {
            zero++
        } else {
            one++
        }
    } 
    
    return zero > one ? 0 : 1
}

const calculatePowerConsumption = (binaryList) => {
    first = [],second = [], third = [], fourth = [] ,fifth = [], sixth = []
    seventh = [], eighth = [] , ninth = [] , tenth = [] , eleventh = [] , twelfth = []

    gamaList = []
    gama = null
    epsilon = null

    for (let i = 0; i < binaryList.length; i++) {

        first.push(parseInt(binaryList[i][0]))
        second.push(parseInt(binaryList[i][1]))
        third.push(parseInt(binaryList[i][2]))
        fourth.push(parseInt(binaryList[i][3]))
        fifth.push(parseInt(binaryList[i][4]))
        sixth.push(parseInt(binaryList[i][5]))
        seventh.push(parseInt(binaryList[i][6]))
        eighth.push(parseInt(binaryList[i][7]))
        ninth.push(parseInt(binaryList[i][8]))
        tenth.push(parseInt(binaryList[i][9]))
        eleventh.push(parseInt(binaryList[i][10]))
        twelfth.push(parseInt(binaryList[i][11]))
        
    }

    gamaList = [calculeCommon(first), calculeCommon(second), calculeCommon(third), calculeCommon(fourth), calculeCommon(fifth), calculeCommon(sixth), 
                calculeCommon(seventh), calculeCommon(eighth), calculeCommon(ninth), calculeCommon(tenth), calculeCommon(eleventh), calculeCommon(twelfth)]

    gama = gamaList.join('')
    
    
    epsilon = gamaList.map((num)=> {
      return  parseInt(num) === 1 
        ?  0
        : 1
    }).join("")

   return parseInt(gama, 2) * parseInt(epsilon, 2)

}