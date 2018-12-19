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
