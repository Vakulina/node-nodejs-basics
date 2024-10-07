import { Transform } from "stream";

const reverseTextTransform = new Transform({
  transform(chunk, encoding, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("");
    callback(null, reversedChunk);
  },
});

const transform = async () => {
  process.stdin.pipe(reverseTextTransform).pipe(process.stdout);
};


await transform();
