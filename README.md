# CMS de l'association Les anges de la rue

**deploy**

build server and frontends assets from workstation before deploy

`npm run build`:

- build/ncc (server)
- front/build (frontend assets)

```
[!] copy front/build/img/prod/* into front/public/img/prod in order to prevent 'new added images' lost
```

**dev**

```
// setup
npm run setup

// dev (localhost:3000 using proxy server on localhost:3001)
npm run dev

// [!] npm run dev may crash on first launch
```

**.env**

A `.env` template is generated on setup.

**conf.json**

Configuration file in cwd, contains configuration data:

- shop lists
- product categories
- product conditons

**data.json**

Fake database endpoint
