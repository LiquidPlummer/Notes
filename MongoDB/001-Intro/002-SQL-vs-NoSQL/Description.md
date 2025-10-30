# SQL vs. NoSQL Databases
### Table Schema vs Documents
Records in a SQL database are stored in rigidly defined tables, often related data is "normalized" across multiple tables. In a document database like Mongo all related data would be stored in a document, which is basically a node in a linked list. The whole list of documents is called a collection, which is akin to a table. 

### Foreign Keys & Referential Integrity
There is no referential integrity in MongoDB. We can reference other documents, just like a foreign key, however nothing in the database system will enforce referential integrity, nothing will stop you from breaking a valid reference.

### Indexes
Indexes in Mongo and SQL are very similar, some portion of the data is copied into a data structure which is very fast to search, and from there you can access the rest of the document. 

### Ordering
In MongoDB the order of results depends on the ordering of the searched index. This is unlike SQL, where the order of the results is based on a clause in the query. In Mongo you get the results in the order specified by the index.

### more to come...

