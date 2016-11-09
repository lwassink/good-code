json.extract! review, :id, :author_id, :program_id, :body, :project_used_in
json.author review.author.username
json.status review.statuses.where(user_id: review.author_id).first.content
