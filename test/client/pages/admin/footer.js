const Code = require('code');
const Footer = require('../../../../client/pages/admin/footer.jsx');
const Lab = require('lab');
const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');


const lab = exports.lab = Lab.script();


lab.experiment('Admin Footer', () => {

    lab.test('it renders', (done) => {

        const FooterEl = React.createElement(Footer, {});
        const footer = ReactTestUtils.renderIntoDocument(FooterEl);

        Code.expect(footer).to.exist();

        done();
    });
});
