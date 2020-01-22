const test = require("ava")
const isRunkit = require(".")

test("main", (t) => {
	t.is(typeof isRunkit, "boolean")
})
