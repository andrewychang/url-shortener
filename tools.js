module.exports = {
    generateID: function() {
        var result = ''
        var lettersOnly = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        var lettersOnlyLength = lettersOnly.length
        var charactersLength = characters.length
        for ( var i = 0; i < 2; i++ ) {
            result += lettersOnly.charAt(Math.floor(Math.random() * lettersOnlyLength))
        }
        for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result;
    }
}


//Testing Viability of Generator
function generateID() {
    var result = ''
    var lettersOnly = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var lettersOnlyLength = lettersOnly.length
    var charactersLength = characters.length
    for ( var i = 0; i < 2; i++ ) {
        result += lettersOnly.charAt(Math.floor(Math.random() * lettersOnlyLength))
    }
    for ( var i = 0; i < 6; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result;
}

function test() {
    const id = []
    for (var i = 0; i < 10000; i++)
        var newID = generateID()
        if (id.includes(newID)) {
            return false
        }
        id.push(newID)
    return true
}

console.log(test())
