function capitalizeName(name) {
    var word = `${name}`;
    return `${word[0].toLocaleUpperCase() + word.substring(1, word.length)}`
}

function trimLine(line) {
    return line.replace(" ", "");
}

export default function asPath(line) {
    return "/" + line;
}

export { asPath, capitalizeName, trimLine };