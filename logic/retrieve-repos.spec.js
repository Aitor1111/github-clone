const retrieveRepos = require('./retrieve-repos')
const { expect } = require('chai')
const { random } = Math

describe('retrieve-repos', () => {

    it('should return a repos list', async () => {
        const result = await retrieveRepos('octokit')

        expect(result).to.exist
        expect(result.length).to.be.above(0)

        expect(result[0].owner.login).to.equal('octokit')
        expect(result[0].name).to.exist
        expect(result[0].id).to.exist


    })

    it('should fail if user is not found', async () => {

        const results = await retrieveRepos(random().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.an.instanceof(Error)
            })
    })
})