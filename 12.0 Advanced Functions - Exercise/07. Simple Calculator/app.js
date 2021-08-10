function calculator() {
    return  {
          init: () => {[n1, n2, output] = [...document.querySelectorAll('input')]},
          add: () =>  output.value = +n1.value + +n2.value,
          subtract: () => output.value = +n1.value - +n2.value,
      }  
  }
  
//   const calculate = calculator();
//   calculate.init('#num1', '#num2', '#result');



//--------------------------------------------------------------------(2)-------------------------------

function calculator() {
    return {
        init: (a, b, c) => {
            n1 = document.querySelector(a)
            n2 = document.querySelector(b)
            result = document.querySelector(c)
        },
        add: () => result.value = +n1.value + +n2.value,
        subtract: () => result.value = +n1.value - +n2.value,

    }
}


// const calculate = calculator();
// calculate.init('#num1', '#num2', '#result');