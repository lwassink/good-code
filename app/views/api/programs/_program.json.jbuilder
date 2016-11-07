json.extract! program, :id, :name, :creator, :description, :image_url, :source_code_url, :author_id, :thumbnail_url
status = program.statuses.find_by_user_id(current_user.id)
json.status status ? status.content : status
