

//objects pe loop lagana hai to for in laga lo
// maps ke upar loop lagana hai to for of laga lo 

const myObj = {
    js : 'javascript',
    cpp : 'c ++',
    rb : 'ruby ',
    swift : 'swift by apple'
}

for (const key in myObj) {
    // console.log(` ${key} shortcut is for  ${myObj[key]}`);
}

const program = ['js', 'java','rb'];
for (const key in program) {
    console.log(program[key]);   
}
