const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then((res) => {
    console.log(colors.yellow.italic(res), colors.yellow.italic("creado"));
})
.catch((err) => {
    console.log(err);
});

// DOCUMENTACIÓN
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");