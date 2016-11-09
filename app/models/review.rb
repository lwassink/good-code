class Review < ApplicationRecord
  validates_presence_of :author_id, :program_id, :body

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :program

  has_many :statuses,
    through: :program,
    source: :statuses

  def author_status
    author_statuses = statuses.where(user_id: self.author_id)
    return "0" if author_statuses.empty?
    author_statuses.first.content
  end
end
