export const REQUEST_REVIEW = 'REQUEST_REVIEW';
export const requestReview = (id) => ({
  type: REQUEST_REVIEW,
  id
});

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const requestReviews = (program_id) => ({
  type: REQUEST_REVIEWS,
  program_id
});

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
});

export const DESTROY_REVIEW = 'DESTROY_REVIEW';
export const destroyReview = (id) => ({
  type: DESTROY_REVIEW,
  id
});

export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const recieveReview = (review) => ({
  type: RECIEVE_REVIEW,
  review
});

export const RECIEVE_REVIEWS = 'RECIEVE_REVIEWS';
export const recieveReviews = (reviews) => ({
  type: RECIEVE_REVIEWS,
  reviews
});

export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const removeReview = (id) => ({
  type: REMOVE_REVIEW,
  id
});

export const RECIEVE_REVIEW_ERRORS = 'RECIEVE_REVIEW_ERRORS';
export const recieveReviewErrors = (errors) => ({
  type: RECIEVE_REVIEW_ERRORS,
  errors
});

export const OPEN_REVIEW_FORM = 'OPEN_REVIEW_FORM';
export const openReviewForm = () => ({
  type: OPEN_REVIEW_FORM
});

export const CLOSE_REVIEW_FORM = 'CLOSE_REVIEW_FORM';
export const closeReviewForm = () => ({
  type: CLOSE_REVIEW_FORM
});

export const OPEN_REVIEW_EDIT = 'OPEN_REVIEW_EDIT';
export const openReviewEdit = (id) => ({
  type: OPEN_REVIEW_EDIT,
  id
});

export const CLOSE_REVIEW_EDIT = 'CLOSE_REVIEW_EDIT';
export const closeReviewEdit = (id) => ({
  type: CLOSE_REVIEW_EDIT,
  id
});

