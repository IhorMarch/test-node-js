const fs = require("fs/promises");

const readFile = async () => {


const text = await fs.readFile("./files/file.txt", "utf-8");
console.log(text);

    // Якщо не знаєш кодування

    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString()
    // console.log(text)
}
readFile()


const addText = async () => {


const result = await fs.appendFile("./files/file.txt", "\nYESSSS!!!");
console.log(result);

}
addText()


const replaceText = async () => {


const result = await fs.writeFile("./files/file.txt", "Cool NODA");
console.log(result);

}
replaceText()



