class Program < ApplicationRecord
  validates_presence_of :name, :creator, :description, :author_id
  validates_uniqueness_of :name

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
