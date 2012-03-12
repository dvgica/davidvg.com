--- 
layout: post
title: Disabling the query cache and profiling MySQL
typo_id: 50
comments: true
---

I'm constantly forgetting how to enable profiling and turn off query 
caching in MySQL.  So for my own benefit, and possibly yours, here's the
goods.

Turn off the query cache for your particular connection:

``` sql
SET SESSION query_cache_type = OFF;
```

Enable profiling for your connection:

``` sql
SET profiling=1;
```

Run the query:

``` sql
SELECT * FROM widgets WHERE plant_id = 5 ORDER BY widget_id DESC LIMIT 1;
```

Show the profile:

``` sql
SHOW profile;
```

You'll get something like this:

``` bash
+----------------------+----------+
| Status               | Duration |
+----------------------+----------+
| starting             | 0.000087 |
| checking permissions | 0.000013 |
| Opening tables       | 0.000106 |
| System lock          | 0.000099 |
| init                 | 0.000036 |
| optimizing           | 0.000019 |
| statistics           | 0.000311 |
| preparing            | 0.000027 |
| executing            | 0.000006 |
| Sorting result       | 0.000006 |
| Sending data         | 0.001665 |
| end                  | 0.000011 |
| query end            | 0.000008 |
| closing tables       | 0.000023 |
| freeing items        | 0.000034 |
| logging slow query   | 0.000005 |
| cleaning up          | 0.000006 |
+----------------------+----------+
17 rows in set (0.00 sec)
```

Remember that the time in the right column actually corresponds to to 
the operation in the row ABOVE.  So in this case, the operation that 
took 0.001665 seconds was the `Sorting result` operation, not the 
`Sending data` operation.
