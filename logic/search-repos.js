/**
 * Retrieves user repositories filtered by name query.
 * 
 * @param {string} user The user repos to retrieve. 
 * @param {string} query The filter to retrieve, finding matches by name. 
 * 
 * @returns {Promise<String>} The user repositories filtered if it resolves, an error if it rejects.
 * 
 * @throws {Error} If cannot find the user, or other unexpected errors.
 */
const fetch = require("node-fetch");

module.exports = function (user, query) {
    return (async () => {
        try {
            const url = `https://api.github.com/search/repositories?q=${query}+user:${user}`
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
            console.log(error)
            throw new Error(error.message)
        }
    })()
}