const marvelHeros = ["thor", "ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]



//array ke andar array push ho gaya
// marvelHeros.push(dc_heros);
// console.log(marvelHeros);

//for merging arrays together
const newEle = marvelHeros.concat(dc_heros)
console.log(newEle);


//one more method

//spread operator
const all_new_hero = [...marvelHeros,...dc_heros]
console.log(all_new_hero);



const img_array = [1,2,3,[4,[5,6]]];
const real_arr = img_array.flat(Infinity)

console.log(real_arr);
