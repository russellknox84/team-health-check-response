class validationRuleModel {
    constructor(type, arguments=[]) {
        this.type = type;
        this.arguments = arguments;
    }
}

var myRule1 = new validationRuleModel('lowerThan', [6]);

var validationCommands = {
    lowerThan: function(data, x) {
        return data < x;
    },
    greaterThan: function(data, x) {
        return data > x;
    },
    inRange: function(data, x, y) {
        return data > x && data < y ? true : false;
    },
    isNumber: function(data) {
        return parseFloat(data) != NaN ? true : false;
    },
    isText: function(data) {
        return /[A-Z][a-z]/gi.test(data);
    },
    isAlphaNum: function(data) {
        return /[A-Z][a-z][0-9]/gi.test(data);
    },
    notBlank: function(data) {
        return data !== undefined && data !== null && data !== '';
    },
    longerThan: function(data, x) {
        return data.length > x;
    },
    shorterThan: function(data, x) {
        return data.length < x;
    },
    wordCount: function(data, x) {
        let count = 0
        for(var i of data.split) {
            count++;
            if(count > x) return false;
        }
        return true;     
    }


}

validationCommands.runCommand = function(command) {
    if(validationCommands.hasOwnProperty(command.type)) {
        if(this[command.type].apply(this, Array.prototype.slice.call(arguments, 1))){
            return false;
        } else {
            return true;
        };
    }
}

function validateCommands(data, validationRules, callback) {
    for(var x = 0; x < validationRules.length; x++) {
        if(validationCommands.runCommand(validationRules[x], data, ...validationRules[x].arguments)) callback(err);
    } 
    callback(null);
};

validateCommands(5, [myRule1], (err) => {
    if(err) return 'error';
});