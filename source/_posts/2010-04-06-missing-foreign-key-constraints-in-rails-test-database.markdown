--- 
layout: post
title: Missing foreign key constraints in Rails test database
typo_id: 3
comments: true
---

Wondering why your foreign key constraints are never created in your 
Rails test database? Chances are you, like me, are creating your 
referential integrity constraints using execute calls in a migration. 
These database-implementation-specific statements cannot be included in 
the DB-independent schema.rb file, so when you run `rake test:db:prepare`
(or it is called implicitly by `rake test`), your FK constraints are not
included in the test database.

The workaround to this is simple. In your `config/environment.rb` file, add 
(or uncomment) a line as follows:

``` ruby
config.active_record.schema_format = :sql
```

Now Rails will load the test DB structure from 
`db/development_structure.sql`, which should be automatically created 
when you run your tests. You can also create it manually using 
`rake db:structure:dump`.

*Update*:

 * I now recommend using the [foreigner gem](https://github.com/matthuhiggins/foreigner) to create your foreign keys
 * In Rails 3, the config option should be put in `config/application.rb`
