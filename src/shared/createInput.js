function createInput() {
	return { up: false, right: false, left: false, down: false, arrowLeft: false, arrowRight: false, space: false, shift: false }
}
try {
	module.exports = createInput;
} catch {
	
}