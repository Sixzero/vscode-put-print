
const TextBuffer = require('../../lib/text-buffer');

suite('TextBuffer', () => {

    test('it can store one text', () => {
        const textBuffer = new TextBuffer();
        textBuffer.write('TEXT');
        expect(textBuffer.read()).to.eql('TEXT');
    });
});
