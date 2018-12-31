# CMS de l'association Les anges de la rue

**dev**

```
// setup
npm install; cd front; npm install; cd ..

// unzip public/img.zip into public

// dev (localhost:3000)
npm run dev

```

**.env**

```
SERVER_PORT=3001

# users
USERS='login1:passwd1;login2:passwd2'

# session secret
SESSION_SECRET='mysecret'

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
