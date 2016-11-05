class AddThumbnailUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :programs, :thumbnail_url, :string
  end
end
