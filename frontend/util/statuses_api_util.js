export const createStatus = (status, success, error) => {
  $.ajax({
    url: `api/statuses`,
    type: 'POST',
    success,
    error,
    data: { status }
  });
};

export const updateStatus = (status, success, error) => {
  $.ajax({
    url: `api/statuses/${status.program_id}`,
    type: 'PATCH',
    success,
    error,
    data: { status }
  });
};

export const destroyStatus = (programId, success, error) => {
  $.ajax({
    url: `api/statuses/${programId}`,
    type: 'DELETE',
    success,
    error
  });
};

