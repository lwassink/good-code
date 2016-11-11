# Backend

Goodcode runs on Rails and is hosted on Heroku.
The rails backend impliments RESTful apis that serve JSON data in their responses.
This is a partial list of the technologies used to to create the goodcode backend.

* **Ruby on Rails** models are used to manage the database and retrieve information.
Rails controllers provide JSON data using put together jbuilder views.
Only one html response is made, when the user first loads the site.
* **Heroku** hosts Goodcode.
* **Uptime Robot** is used to keep the heroku dyno awake.
* **Database:** Goodcode uses a PostgreSQL database managed by the Active Record RDBMS.
* **BCrypt** is used to seccurely hash and salt passwords before storing them in the database.
The raw password string is never stored.
