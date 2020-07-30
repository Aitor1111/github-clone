const retrieveUser = require('./retrieve-user')
const { expect } = require('chai')
const { random } = Math

describe('retrieve-user', () => {

    it('should return the user data', async () => {
        const result = await retrieveUser('octokit')

        expect(result).to.exist
        expect(result.public_repos).to.be.above(0)

        expect(result.login).to.equal('octokit')
        expect(result.type).to.equal('Organization')
        expect(result.name).to.equal('Octokit')
    })

    it('should fail if user is not found', async () => {

        const results = await retrieveUser(random().toString())
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.an.instanceof(Error)
            })
    })
})