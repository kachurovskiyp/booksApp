const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullName', () => {
    it('should return Error if "fullName" is empty', () => {
        expect(formatFullName('')).to.equal('Error');
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName(() => {})).to.equal('Error');
    });

    it('should return Error if "fullName" contain only name or anything more', () => {
        expect(formatFullName('John')).to.equal('Error');
        expect(formatFullName('John Doe Doe')).to.equal('Error');
    });

    it('should return "fullName" where only first letters will be in upper case', () => {
        expect(formatFullName('JOhn DOE')).to.equal('John Doe');
        expect(formatFullName('JOHN DOE')).to.equal('John Doe');
    });
});