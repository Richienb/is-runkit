"use strict"

module.exports =
	typeof process.env.RUNKIT_ENDPOINT_PATH === "string" &&
	typeof process.env.RUNKIT_ENDPOINT_URL === "string" &&
	typeof process.env.RUNKIT_MOUNT_PATH === "string" &&
	process.env.RUNKIT_HOST === "runkit.com"
