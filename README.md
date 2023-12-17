# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Reference

https://infima.dev/docs/layout/grid

#### Example of landing page in Figma
https://www.figma.com/file/X8EAalJa8drwDp71oZVnWH/50%2B-Landing-page-designs-(Community)?type=design&node-id=801-2256&mode=design&t=5IWGXjUCytGQCioY-0

#### timeline
https://codepen.io/darcyvoutt/pen/ogPrpK/

#### tailwind landing page
https://tailwindui.com/components/marketing/sections/heroes

#### Google api token
```
AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA
```