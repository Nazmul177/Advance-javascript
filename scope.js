 const bonus = 20;
function sum(first, second){
    const result = first + second + bonus;
    console.log(bonus);
    if(result>9){
        const mood = "Happy";
        mood = "fishy";
        mood = "funky";

        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3,7);
console.log(bonus);
console.log(output);