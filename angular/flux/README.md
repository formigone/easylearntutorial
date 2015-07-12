# Building Angular Apps Using Flux Architecture


##### (In this video, we will take a look at Facebook's Flux design pattern, and how we can use it with Angular.js)

> Flux is the application architecture that Facebook uses for building client-side web applications. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code. [facebook flux docs](https://facebook.github.io/flux/docs/overview.html)


#### (show flux diagram)

The big idea behind Flux is **unidirectional data flow**. This is in sharp contrast to Angular.js, where the core principle is two-way data binding.

The three main components in a Flux application are:


#### (highlight diagram)

 + Dispatcher - a singleton event bus (of sorts) that forward actions to stores.

 + Stores - hold application data and logic, similar to a *model* in traditional MVC. Stores are also event emitters, so views can listen for update messages from individual stores.

 + Views - stateless components responsible for displaying data to, and receiving input from the user.

Interestingly enough, these components map faily easily to Angular constructs:


#### (highlight code implementation)

 + Dispatcher - can be implemented very naturally using an Angular's service object. The easiest way to implement an AppDispatcher is to instantiate Facebook's own dispatcher class as a service.

 + Stores - works exactly like what Angular services are meant to work, except that Angular services are not opinionated about being driven by even dispatchers. The store service would need to be an event emitter somehow, and have an instance of the dispatcher injected into it as a dependency.

 + Views - can be implemented as a controller bound to a view, or more interestingly, as an Angular directive. The directive would need an instance of the dispatcher so it can dispatch events when needed, as well as an instance of each store it wants to listen to.


#### (here's a demo of this in action)

````
+---------------+------------------------+
| <UserBadge>   | <Conversation>         |
+---------------+                        |
| <Search>      |                        |
+---------------+                        |
| <FriendsList> |                        |
|               |                        |
|               |                        |
|               |                        |
|               +------------------------+
|               | <InputForm>            |
+---------------+------------------------+
````

#### (for individual videos: Building a WhatsApp in Angular - web app)

## UserBadge directive

Saturday, 11. July 2015 04:22PM 

