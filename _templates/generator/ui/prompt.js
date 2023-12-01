const fs = require("fs");
const path = "./src/components/index.ts";

module.exports = {
    prompt: ({ prompter }) => {
        return prompter
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "component name",
                },
            ])
            .then(({ name }) => {
                const contentToAdd = `\nexport * from './${name}';\n`;
                fs.appendFile(path, contentToAdd, "utf8", (err) => {
                    if (err) {
                        console.error("ファイルの書き込みに失敗しました:", err);
                    } else {
                        console.log("ファイルにテキストを追加しました。");
                    }
                });
                return {
                    name,
                };
            });
    },
};
