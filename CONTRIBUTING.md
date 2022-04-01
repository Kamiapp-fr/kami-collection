We're really glad you're reading this. 👏

## Instructions
### Install
These steps will guide you through contributing to this project:

- Fork the repo
- Clone it and install dependencies

```
$ git clone https://github.com/<YOUR-USERNAME>/kami-collection
$ npm install
```

Keep in mind that after running `npm install` the git repo is reset. So a good way to cope with this is to have a copy of the folder to push the changes, and the other to try them. 

> This repository use `npm workspaces` to work. You don't need to run the install command into each packages. All the dependencies for each packages is into the root `node_modules` and all local packages use symlink directly from the ``packages`` folder. 

### Develop

To develop a new or existing component, run the following command :

```
$ npm run dev
```

This serve the content of the ``demos`` folder. This folder content a sample of each component which take sources directly from the `packages` folder. Now you can add or edit a component into the `packages` folder.


### Build 

To build all components use this command :

```console
$ npm run build --workspaces
```

If you want build a specific packages use this :

```console
$ npm run build --workspace=./packages/<PACKAGE-NAME>

# An example with the flash package
$ npm run build --workspace=./packages/flash
```

And if you want build the demos website run this command :

```console
$ npm run build
```

Make and commit your changes. Make sure the commands ``npm run build --workspaces`` is working.

### Commmit

Before begin to write some code create a branch :

```console
# For a feature always namespace your branch with `feature`
$ git branch -b feature/my-super-feat

# For a hot fix always namespace your branch with `fix`
$ git branch -b fix/fix-an-big-trouble
```

This repository use [gitmoji](https://gitmoji.dev/) as commit convention. You can write commit manually or use the gitmoji-cli :

```console
$ npm install -g gitmoji-cli
```

If you work on a specific component you can use scoped commit, for example if I work on the flash component only I can write this :

```
✨ (flash): My super flash feature
```


Finally send a [GitHub Pull Request](https://github.com/alexjoverm/typescript-library-starter/compare?expand=1) with a clear list of what you've done (read more [about pull requests](https://help.github.com/articles/about-pull-requests/)). Make sure all of your commits are atomic (one feature per commit).