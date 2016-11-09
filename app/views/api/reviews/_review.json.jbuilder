json.extract! review, :id, :author_id, :program_id, :body, :project_used_in
json.author review.author.username
json.status review.author_status
