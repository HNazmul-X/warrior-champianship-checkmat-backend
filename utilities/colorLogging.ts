import chalk from "chalk";

const array_to_text = (...arg: any[]): Promise<String> => {
    return new Promise<string>((resolve, reject) => {
        try {
            let text = "";
            arg.forEach((value, index) => {
                text += value;
                if (index === arg.length - 1) {
                    resolve(text);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

export async function logInfo(...arg: any[]) {
    // let  = await array_to_text(...arg);
    console.log(chalk.bgYellow(chalk.black(...arg)));
}

export function logSuccess(...arg: any[]) {
    console.log(chalk.whiteBright.bgGreen(...arg));
}
