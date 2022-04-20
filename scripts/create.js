module.exports = function (plop) {
    plop.setGenerator('package', {
        description: 'create a new web component.',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Name of your package ?'
        }],
        actions: [{
            type: 'addMany',
            destination: '../packages/{{lowerCase name}}',
            templateFiles: 'templates/**/*.hbs'
        }]
    });
};