# MongoDB Atlas & Spring
Your goal will be to create a simple application that can do basic I/O to a mongoDB Atlas cluster. We want to set up the connection and verify we can both read and write to the cluster. We will create a new spring boot app with the initializer, set up the properties, build a couple classes, and finally write and read back from the cluster.

 - Start a new [spring boot project](http://start.spring.io) with the spring data mongodb dependency
 - Create a new Maven project in Intellij and copy the spring boot files into it
 - Set up the connection string in application properties:
   - Talk to Kyle about username and password to access cluster
   - ```spring.data.mongodb.uri=mongodb+srv://<username>:<pwd>@<cluster>/<db name>```
   - username: your username
   - password: testPass123
   - cluster: revature.phob7l3.mongodb.net
   - database name: your db name (include your name please)
   - Example: ```spring.data.mongodb.uri=mongodb+srv://testuser:testpass123@revature.phob7l3.mongodb.net/kyle-db```
 - Create a new entity with several private fields including id of type ObjectId, an empty public constructor, public getters and setters, and a toString() implementation
 - Annotate the entity with @Document, @MongoId, and @Field annotations
 - Create a repository interface which extends MongoRepository and includes the correct type parameters for your entity

Now test it out:
 - In the main method, get a reference to the application context
 - Instantiate a new object of your entity type, giving it values except for ObjectId
 - Get a reference to your repository bean
 - Use the repository to save the entity object, this should populate the object with an id from the database
 - Use the repository to find all records in your collection
 - Print all records to the console
 - Check to make sure you see your records

Try to do this on your own based solely on your understanding of the material and the instructions above. Everything you need should be here, but feel free to ask if you get stuck at all. There is a demo of this exercise you can look at if you get stuck, but try to do it solo first.
