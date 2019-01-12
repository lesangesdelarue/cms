# CMS de l'association Les anges de la rue

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

**postgresql (DRAFT)**

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
