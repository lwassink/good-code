class CreateStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :statuses do |t|
      t.string :content, null: false
      t.integer :user_id, null: false, index: true
      t.integer :program_id, null: false, index: true

      t.timestamps
    end
  end
end
