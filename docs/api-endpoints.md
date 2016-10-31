# API Endpoints

## HTML API

### Root

- `GET /` - loads the web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
  - sends back all programs the user has marked with a status

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Programs

- `GET /api/programs`
  - Programs index
  - only gets the most recent n programs
  - then the next n, and so on
- `GET /api/programs/:id`
- `POST /api/programs`
- `DELETE /api/programs/:id`

### Reviews

- `GET /api/programs/:programId/reviews`
  - the reviews index only shows reviews for a given program
- `GET /reviews/:id`
- `POST /api/programs/:programId/reviews`
  - creates a review for the program with id == programId
- `DELETE /reviews/:id`
- `PATCH /reviews/:id`

### Statuses

- `GET /api/statuses`
- `POST /api/programs/:program_id/statuses`
- `PATCH /api/statuses/:id`
- `DELETE /api/statuses/:id`

