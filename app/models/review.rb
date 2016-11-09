class Review < ApplicationRecord
  validates_presence_of :author_id, :program_id, :body

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :program

  has_many :statuses,
    through: :program,
    source: :statuses
end
