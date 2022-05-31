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

This serve the content of the ``demos`` folder. This folder contain the documentation web site which contain a ``playground`` section. In this section you can easly work on your component without any configuration.

> If you want create a new component see the [create](#create) section.

### Create

You can create a new component easly. To do this just run the following command :

```
$ npm run create
```

It will ask you wish name you would set to your component. When you validate it, it will automaticaly create all base files for your component and update all root config file *(like ``tsconfig``, ``vite.config.js``, etc...)* adding the new component. It also add the `playground` section and the `docs` section into the demos web site. 

Now just run the install command to update the ``package-lock.json`` :

```
$ npm install
```
That it now you can focus on your component.

> By default the new component have the version ``0.0.0``. This will be automaticaly update during the next release, you don't need to update it manually.

### Documentation

When you add or update a component, you must write the documentation about it. To write it go into the `demos/docs/<component name>.html` file and update it. The *README* of the component is already write you **don't** must update it. You can also update the `demos/playgrounds/<component name>.html` file with your new feature if needed. The ``playground`` section use the ``api-viewer-element``, go [here](https://github.com/open-wc/api-viewer-element) to get more information about it.

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

### Release 

Before release a new version the changelog must be updated. `Kami Collection` use [keep a changelog](https://keepachangelog.com/en/1.0.0/) as changelog convention. After this run the following command :

```console
$ npm run release -- version
$ npm run release -- 1.0.0
```

This command will automaticaly update package.json version of all components. Create the new tag and push it to the online repository.