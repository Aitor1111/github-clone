const searchRepos = require('./search-repos')
const { expect } = require('chai')
const { random } = Math

describe('search-repos', () => {

    it('should return the user data', async () => {
        const result = await searchRepos('octokit', 'app')

        expect(result).to.exist
        expect(result.items.length).to.be.above(0)

        expect(result.items[0].owner.login).to.equal('octokit')
        expect(result.items[0].owner.type).to.equal('Organization')
        expect(result.items[0].id).to.exist
    })

    it('should fail if user is not found', async () => {

        const results = await searchRepos(random().toString(), 'app')
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.an.instanceof(Error)
            })
    })

    it('should fail on not found query', async () => {

        const results = await searchRepos('octokit', random().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.an.instanceof(Error)
            })
    })
})