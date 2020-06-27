function text(input) {
    var _input = input.trim().split('\n');
	for (var i = 1; i < _input.length; i = i + 2) {
        var pattern = _input[i];
        var patternRev = pattern.split("").reverse().join("");
		var str = _input[i + 1];
		if (str.includes(pattern) || str.includes(patternRev)) {
			console.log("YES");
		}
		else {
			console.log("NO");
		}
	}
}
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data",(input) => {
    stdin_input += input;
});
 
process.stdin.on("end", () => {
   text(stdin_input);
});