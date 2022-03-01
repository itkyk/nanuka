# Jets Project for Nanuka

```shell
// Run Postgres
$ postgres -D ./db_develop

// Database create
$ jets db:create

// Database migrate
$ jets sb:migrate

// Set seed data
$ jets db:seed -> run ./db/seeds.rb

// development start local server
$ jets s -> http:localhost:8888
```

### Initialize
1. install & initializing postgresql
   1. `brew install postgresql`
   2. `initdb -D ./db_develop`
2. install gems
   1. `bundle install`

### Use
| key | version |
|------|---------|
| Ruby | v 2.7.2 |
| postgresql | stable 14.2 |