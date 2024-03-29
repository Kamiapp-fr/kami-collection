module.exports = function (plop) {
    plop.setGenerator('package', {
        description: 'create a new web component.',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Name of your package ?'
        }],
        actions: [
            {
                type: 'addMany',
                base: 'templates/package/',
                destination: '../packages/{{lowerCase name}}',
                templateFiles: 'templates/package/**/*.hbs'
            },
            {
                type: 'add',
                path: '../demos/docs/{{lowerCase name}}.html',
                templateFile: 'templates/docs.hbs'
            },
            {
                type: 'add',
                path: '../demos/playgrounds/{{lowerCase name}}.html',
                templateFile: 'templates/playground.hbs'
            },
            {
                type: 'append',
                path: '../demos/main.ts',
                pattern: /import '@kamiapp\/changelog';/,
                template: "import '@kamiapp/{{lowerCase name}}';"
            },
            {
                type: 'append',
                path: '../package.json',
                pattern: /".\/packages\/component",/,
                template: '    "./packages/{{lowerCase name}}",'
            },
            {
                type: 'append',
                path: '../vite.config.js',
                pattern: /export const alias = {/,
                template: '  "@kamiapp/{{lowerCase name}}": resolve(_dirname, "./packages/{{lowerCase name}}/src/index.ts"),'
            },
            {
                type: 'append',
                path: '../vite.config.js',
                pattern: /files: \[/,
                template: "        './packages/{{lowerCase name}}/src/index.ts',"
            },
            {
                type: 'append',
                path: '../tsconfig.json',
                pattern: /"paths": {/,
                template: '      "@kamiapp/{{lowerCase name}}": ["./packages/{{lowerCase name}}/src/index.ts"],'
            }
        ]
    });
};