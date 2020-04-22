Design Patterns:
a general solution to common software design problems

3 types:
1. creational
2. structural
3. behavioural 

Creational design patterns:
mainly all about object creation mechanisms that promote
flexiblity and reusablityy of your code

eg.1 Factory pattern [obj creation at a centralised location
using factory methods, instead of constructors;
clean and concise]

eg.2 Singleton pattern [allows you to limit the no. of instances
of a particular object to one;
reduces the need of global variables
limits namespace pollution and risk of name collisions]


Behavioural design patterns:
focus on improving the communication between disparate
objects in a system

eg.1 Strategy pattern [allows you to define a group of
closely related algorithms, known as strategies.
allows you to swap strategies in and out for each other
at runtime]

eg.2 Iterator pattern [allows you to loop over a collection of
objects.
It separates the collection of objects from the traversal of
these objects by implementing a specialized iterator]

eg.3 Observer pattern [offers a subscription model, in 
which objects, known as observers, can subscribe to an event,
known as subject, and get notified when the event occurs, ie
when the subject sends a signal]

Structural design pattern:
concerned with the object composition and identifies simple
ways to realise the relationshipos between different objects

eg. Proxy pattern [a proxy object is an object that acts as a
interface for something else
ti could be an interface to an API, a network connection, 
a large object in memory or any other resource that is 
expensive or impossible to duplicate]