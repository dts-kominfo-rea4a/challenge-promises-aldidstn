const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  
  const theater1 = await promiseTheaterIXX()
  const theater2 = await promiseTheaterVGC()

  let arrayResult1 = theater1.map(key => key.hasil)
  let arrayResult2 = theater2.map(key => key.hasil)
  let result = arrayResult1.concat(arrayResult2)

  let total = 0
  
  result.forEach(el => {
    if(el === emosi){
      total++
    }
  });

  return total
}

promiseOutput()

module.exports = {
  promiseOutput,
};
