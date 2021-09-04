const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        if (typeof base === "number") {
            let salida = consola = "";
            console.log(salida)
            for (let i = 1; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consola += `${colors.green(base)} ${colors.magenta('x')} ${colors.brightRed(i)} ${colors.yellow('=')} ${colors.blue(base * i)}\n`;
            }
            if (listar) {
                console.log(colors.rainbow("==========================="));
                console.log("       Tabla del:", base);
                console.log(colors.rainbow("==========================="));
                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        } else reject("Ocurrio un error");
    });
};

module.exports = {
    crearArchivo,
};
