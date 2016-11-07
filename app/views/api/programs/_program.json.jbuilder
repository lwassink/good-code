json.extract! program, :id, :name, :creator, :description, :image_url, :source_code_url, :author_id, :thumbnail_url
status = current_user ? program.statuses.find_by_user_id(current_user.id) : nil
json.status status ? status.content : nil
