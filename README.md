# Installed Packages

vehicle-tracking-api@1.0.0 C:\gitrepo\Vehicle-tracking-api
├── @types/bcryptjs@2.4.4
├── @types/express@4.17.19
├── @types/node@16.18.58
├── bcryptjs@2.4.3
├── express@4.18.2
├── pg@8.11.3
├── reflect-metadata@0.1.13
├── ts-node@10.9.1
├── typeorm@0.3.17
└── typescript@4.5.2


This project uses entity framework typeorm to connect to posrgresql. 


-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

CREATE SCHEMA IF NOT EXISTS public
    AUTHORIZATION pg_database_owner;

COMMENT ON SCHEMA public
    IS 'standard public schema';

GRANT USAGE ON SCHEMA public TO PUBLIC;

GRANT ALL ON SCHEMA public TO pg_database_owner;


