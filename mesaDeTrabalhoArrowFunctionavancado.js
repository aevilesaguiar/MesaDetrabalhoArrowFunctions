let fizzBuzz=(word1, word2, word3, num1, num2)=>{
  //●	Você deve imprimir os números de 1 a 100;
    for(let num=1; num <= 100; num++){
      //●	Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.
      if(num % num1 === 0 && num %num2===0){
        console.log(word1)
      }
      //●	Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
        if(num % num1 === 0){
          console.log(word2);
        }   
       // ●	Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
        else if(num % num2 === 0){
          console.log(word3)
        }
        else {
          console.log(num)
        }
    }
}
fizzBuzz("ciranda", "cirandinha", "vamos todos cirandar",3,7)
