const fs = require('fs');
const path = require('path');

class Runner {
    constructor() {
        this.testFiles = [];
    }

    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        for (let file of files) {
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filePath);

            if (stats.isFile() && file.includes('.test.js')) {

            } else if (stats.isDirectory()) {

            }
        }
    }
}

module.exports = Runner;