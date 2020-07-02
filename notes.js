// Modeling Data
// - Before building my database I need to think of how my database structure. This is crucial because data can get very complicated. 

// AREAS OF CONCERN 
// - Enabling Admins to use the platform
// - Kennels
// - Dogs
// - etc.

// Prevent Problems
// - Planning our how these areas of concern will all fit and relate in the database prevents problems in the future. 

// Basics of Database Structuring 
// Q: What is behind a database?
// - The database will store info for us. 
// - Info will need to communicate with other info.

// Q: How does a database store data, and enable that data to communicate to one another?
// - "Tables": The place where organize our data into specified rows and columns.
// - You define tables by the unique data you plan on storing in your app. 
// - Ultimitly your database is collection of tables.

// Q: Okay so databases are made of tables that store our info. But how do we define what becomes a table? 
// - Use the 'nouns' approach. 
// - Think of tables in terms of the "nouns" that will be in your applications (people, animal, places, and things).
// You can extract what the nouns of your application by its function or the problem it solves. Or elivator pitch. 
// "Woof Adopt will allow kennel admins to log in and edit a kennel's dog's information"
// Nouns: 
// - Admins
// - Kennels
// - Dogs


// Q: What is an API?
// - An API is a collection of JS functions that define the way we can read, add to, update or delete something from our database.
// - API's are the way our backend communicates with our database and later how our frontend communicates with our database, via our handy backend. 

// When we begin chatting with the backend their are specific actions and request we can use. This chatting with the backend with specif action and request is elluding to the concept of CRUD actions.
// Create, Read, Update, Delete
// When communcting with our database these are the actions that we want to implement. 

// For every CRUD action their are handy HTTP and SQL methods that allow us to request data and act on it. 
// Most of the time HTTP request will request will define the actions and the SQL methods will execute the action.

// I need to define when and where I am going to need to access the data. 
// Q: What is a good method in order to know when and where we need to access the data (Planning API)?
// - Mapping out the flow of each user accessing the application.
// - Knowing the user journey and when they will need to access data will help you engineer practical routes in my API.

// For this example I am going to have two types of users the Visitors and the Admins. 
// 1 Visitor Journey: 

