# CMS de l'association Les anges de la rue

**dev**

```
// setup
npm install; npm run gen:imgs; cd front; npm install; cd ..

// dev
npm run dev

```

**server**

```
// dev
npm run server:dev

// prod
npm run server:ncc
```

**front**

`[!]` frontend uses a dedicated front/node_modules

```
// dev (localhost:3000)
npm run front:dev

```

**.env**

```
API_GQL_PORT=3001

# 'dev' will enable static files serving by nodejs
NODE_ENV='dev'

# where to store uploads => relative path (default 'dist/uploads')
UPLOAD_DIR=

# pagination, number of items displayed per page
PAGE_SIZE=
```

**conf.json**

Configuration file in cwd, contains configuration data:

- shop lists
- product categories
- product conditons

**postgresql**

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v1();


CREATE TABLE prods (
    prod_id uuid DEFAULT uuid_generate_v4 (),
		prod_val jsonb,
    PRIMARY KEY (prod_id)
);

ALTER TABLE prods ADD COLUMN created_at TIMESTAMP DEFAULT NOW()
```
