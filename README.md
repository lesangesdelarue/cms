# CMS de l'association Les anges de la rue

**server**

```
// setup
npm install

// dev
npm run server:dev

// prod
npm run server:ncc
```

**.env**

```
API_GQL_PORT=

# 'tests' will enable static files serving by nodejs
NODE_ENV='tests'

# where to store uploads => relative path (default 'dist/uploads')
UPLOAD_DIR=
```

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
