# API Endpoints

## Users

- `POST /api/users`

## Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

## Programs

- `GET /api/programs`
  - can take query param to only get programs for a given user
- `GET /api/programs/:id`
- `POST /api/programs`
- `DELETE /api/programs/:id`

## Reviews

- `GET /api/reviews`
  - the reviews index only shows reviews for a given program
  - program passed in the query params
- `GET /reviews/:id`
- `POST /api/reviews`
- `DELETE /reviews/:id`
- `PATCH /reviews/:id`

## Statuses

- `GET /api/statuses`
- `POST /api/statuses`
- `PATCH /api/statuses/:id`
- `DELETE /api/statuses/:id`

