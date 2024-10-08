const parseArgs = () => {
    let result = ''
    process.argv.forEach((item, index) => {
        if (item.startsWith('--')) {
            result = result + ` ${item.slice(2)} is ${process.argv[index + 1]},`
        }
    })
    console.log(result.slice(0, result.length - 1))
};

parseArgs();