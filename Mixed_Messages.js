const mixedMessage = {
    _messagePart1: ['I', 'You', 'She', 'He', 'It'],
    _messagePart2: ['always', 'sometimes', 'often', 'occasionally', 'infrequent'],
    _messagePart3: ['eat(s) hamburgers.', 'steal(s) lighters in a supermarket.', 'go(es) for a walk with the dog.', 'freak(s) out completely.', 'wash(es) the dishes willingly'],
    createMessage: function() {
        let randomMessagePart1 = this._messagePart1[Math.floor(Math.random()*5)];
        let randomMessagePart2 = this._messagePart2[Math.floor(Math.random()*5)];
        let randomMessagePart3 = this._messagePart3[Math.floor(Math.random()*5)];

        return randomMessagePart1 + ' ' + randomMessagePart2 + ' ' + randomMessagePart3;
    }
};

console.log(mixedMessage.createMessage());