/**
 * Retrieves a user profile by name.
 * 
 * @param {string} user The username to retrieve. 
 * 
 * @returns {Promise<String>} The user profile data if it resolves, an error if it rejects.
 * 
 * @throws {Error} If cannot find the user, or other unexpected errors.
 */

const fetch = require("node-fetch");

module.exports = function (user) {

    return (async () => {
        try {
            const url = `https://api.github.com/users/${user}`
            const method = 'GET'
            const headers = undefined
            const body = undefined

            const res = await fetch(url, { method, headers, body })
            const content = await res.text()
            const { status } = res

            if (status === 200) return JSON.parse(content)
            else {
                const { error } = JSON.parse(content)
                throw new Error(error)
            }
        } catch (error) {
            throw new Error(error.message)
        }
    })()
}