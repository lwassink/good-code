# GoodCode

[Heroku link]
[Trello link][trello]

[trello]: https://trello.com/b/mAPXiEe1/goodcode

## Minimum Viable Product

Goodcode is a web application based on Goodreads but designed to support reviews of coding frameworks and libraries rather than books.
It is built using Ruby on Rails and React/Redux.
By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest login
- [ ] Programs
- [ ] Giving programs a status (have used/want to use/etc.)
- [ ] Review programs in markdown
- [ ] Infinite scroll or pagination for programs index

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Frontend End User Authentication (2 days)

**Objective:** Functioning project with fronend auth

### Phase 2: Programs Model, API, and components (2 days)

**Objective:** Programs can be created, edited, and destroyed, and can be viewed through index and show components

### Phase 3: Statuses (2 day)

**Objective:** Users can mark programs with statuses and marked programs are listed on the user home pages

### Phase 4: Reviews (2 days)

**Objective:** Users can create, edit, and destroy reviews.
Reviews are shown on the user show page

### Phase 5: Reviews in Markdown with live preview (1 day)

**Objective:** Reviews can be styled in markdown with code snippets and a live preview of the review is shown like on Stack Overflow

### Phase 6: Pagination / infinte scroll for programs index (1 day, W2 F 6PM)

**Objective:** Add infinite scroll to the Programs Index

### Bonus Features (TBD)
- [ ] Search programs and reviews
- [ ] Friend other users
- [ ] View timeline of your friends' statuses and reviews
