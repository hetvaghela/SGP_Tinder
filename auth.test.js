

const auth = require('./public/js/auth');
const { default: test } = require('node:test');
test('Check Auth' , () => {
    expect(shouldRedirectToHomePage('h','b')).toBe('hb');
});


test('Redirect to login page' , () => {
    expect(shouldRedirectToLoginPage('username','PWD')).toBe('username+PWD');
    
})