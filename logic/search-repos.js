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