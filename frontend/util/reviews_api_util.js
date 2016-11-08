export const fetchReview = (id, success, error) => {
  $.ajax({
    url: `api/reviews/${id}`,
    type: 'GET',
    success,
    error
  });
};

export const fetchReviews = (program_id, success, error) => {
  $.ajax({
    url: `api/reviews`,
    type: 'GET',
    success,
    error,
    data: { program_id }
  });
};

export const createReview = (review, success, error) => {
  $.ajax({
    url: `api/reviews`,
    type: 'POST',
    success,
    error,
    data: { review }
  });
};

export const updateReview = (review, success, error) => {
  $.ajax({
    url: `api/reviews/${review.id}`,
    type: 'PATCH',
    success,
    error,
    review
  });
};

export const destroyReview = (id, success, error) => {
  $.ajax({
    url: `api/reviews/${id}`,
    type: 'DELETE',
    success,
    error
  });
};

