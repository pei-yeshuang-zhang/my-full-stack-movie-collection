## The Flicks 🎬

## In this readme

  - [The idea](#the-idea)
  - [Setup](#Setup)
  - [External API](#external-api)
  - [Wireframes](#wireframes)
  - [Redux store](#redux-store)
  - [Server-side Routes](#routes)
  - [Database design](#database-design)
  - [User Stories](#user-stories)
  - [Home page](#home-page)
  - [Display a movie](#display-a-movie)
  - [Add a new movie](#add-a-new-movie)
  - [Mark as watched](#mark-as-watched)
  - [Remove movies](#remove-movies)
  - [More User Stories](#more-user-stories)

## The Idea

This app is going to help users keep track of movies they want to watch, essentially a watchlist, but one not tied to a streaming service.

An [external api](#external-api) will be used to provide information and images for these movies.

Users will be able to view a list of all the movies they wish to watch, look at one individual movie and see more info about it, and look up a new movie and add it to their watchlist. Once they have watched a movie they should then be able to mark a movie as watched or delete it if they no longer wish to watch it.


## Setup

Clone this repo and `cd` into the new directory

Run the following commands in terminal:

    ```
    $ npm install
    $ npm run knex migrate:latest
    $ npm run knex seed:run
    $ npm run dev
    ```


## External API

There is an unofficial [omdb api](https://www.omdbapi.com/) will be used to look up movies and get more information about them. It requires registering and being issued with an API key.

## Wireframes

Home page - `/`
![home](/.docs/images/home.png)

Display one movie - `/movie/:imdb_id`
![home](/.docs/images/display.png)

Add a new movie - `/add`
![home](/.docs/images/add.png)

## Redux store

To complete the MVP, I will need only one key within the Redux global state. This will store the movies that will form the list. This should be populated following a request to the server on load of the app, so should reflect the current state of the database table.

If I were to look at the Redux Dev Tools we should see the state contains the key for movies, which will be equal to an array. :

```js
{
  movies: []
}
```

Once the request for movies from the server side has completed, the array should be filled with movie objects:

```js
{
  movies: [
    { id: 1, title: 'The Batman', .....etc },
    { id: 2, title: 'Arrival', .....etc },
  ]
}
```

## Routes

| path | method | data | response |
|---|---|---|---|
| /api/v1/movies | GET | -- | Array of movie objects |
| /api/v1/movies | POST | New movie object | Object containing new id |
| /api/v1/movies/:imdb_id | PUT | Object with edited details | Movie object |
| /api/v1/movies/:imdb_id | DELETE | -- | -- |

## Database design


Movies table

| movies ||
|---|---|
| id | increments |
| title | str |
| img | str |
| imdb_id | str |
| watched | boolean (default to false) |

## User Stories

- [Home page](#home-page)
- [Display a movie](#display-a-movie)
- [Add a new movie](#add-a-new-movie)
- [Mark as watched](#mark-as-watched)
- [Remove movies](#remove-movies)
- [More User Stories](#more-user-stories)

## Home page

The home page will display all the movies that users wish to watch currently held in the database. This will require setting up the back end to hold our data, the front end to display it, and a GET request from the front end to the back to connect the two.

## Display a movie

Users should be able to click on one of the movies displayed on the home page and be taken to a new page. This page should use the imdb_id from the movie to request more information about the individual movie from the External API and then display it to us.

## Add a new movie

Users should be able to access a third page containing a form to add a new movie to the watch list.

When users enter the name of a movie in this form, it should then make a request to the External API and receive back a array of all the movies matching a given title. 

Once the matching movies have been displayed users should be able to click on one of these movies to add it to watch list. When this happens I will need to add it to our database table and update the Redux store.

## Mark as watched

When viewing an individual movie users should be able to mark a movie as watched. This should update the `watched` boolean of that movie to `true`.

On the home page I should indicate to the user whether a movie has been watched or not. This may be by showing some information on the movie tile, perhaps by having one section for watched movies and one for unwatched movies, or perhaps even a new page for those previously watched.

## Remove movies

Users should be able to delete a movie from the list.

## More User Stories

- Sort movies

Arrange the home page by date added, alphabetically, or perhaps even by year released.

- Search movies

In case the list gets too long and it's hard to find specific movies, add the ability to search within the home page.

- Ratings

Once a movie has been watched, add a rating from the user, perhaps even a review.

- Multiple users

Adding authentication will enable a movie to be associated with a specific user, enabling individual watch lists.
