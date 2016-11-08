class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.text :project_used_in
      t.integer :author_id, null: false, index: true
      t.integer :program_id, null: false, index: true

      t.timestamps
    end
  end
end
