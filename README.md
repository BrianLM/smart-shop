# The Application

Shopping list organizer for making smarter, reusable lists

## The tech

This SPA page was written with Handlebars Templates, Javascript, jQuery, HTML5, and CSS Styling through Bootstrap.

## With the user in mind
- 'As a user I can sign up to log in from anywhere to see my lists.'
- 'As a user I can mark individual items purchased if I cannot get everything in one place.'
- 'As a user I can see my past lists if I shop for the same things often.'
- 'As a user I can change my password.'
- 'As a user I want to know others cannot change my lists.'

## The planning
### The start
Planning for the site started with whiteboarding where features would appear, and designing the page with miniumal static content. Handlebars were designed to control each result for cleaner content delivery.
### The back end
Back end development started with user authentication. All logins are controlled via modal content. User signup will log the user in as well.

Once logging in was available, creating lists and items were next. Each of these entities are stand-alone resources, meaning they do not require any other entities, and extend others by their presense.

Using the responses from these entities, the Handlebars templates were created, and duplicated, to ensure content is delivered as needed, removed as not and follows the same theme. Basic templates were created for the other actions, as well as showing list items.

After list items were shown, development was deficit-driven. What is missing, what does not make sense, and what can't the user do with what is available.

## Future development
The ERD is configured to handle a great deal more functionality. Additional features would include
1. Store data storing. Name, location and pricing by items.
2. Purchase history. Storing what store purchased at, what price it had, how often you purchase it and what the average price has been.
3. List sharing for organizations, friends and families.
4. Predictive listing. Based on frequency of purchases.

## The API.
The API can be found here, https://github.com/BrianLM/rails-project-api

## Wireframe
![Wireframe](https://github.com/BrianLM/smart-shop/blob/master/wireframe.png)
