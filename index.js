const assert = require("assert");
const kuromojin = require("kuromojin");
const analyze = require("negaposi-analyzer-ja");
const txt = process.argv[2];
kuromojin(txt).then(tokens => {
	const score = analyze(tokens);
	console.log(score);
});
