class Program < ApplicationRecord
  validates_presence_of :name, :creator, :description, :author_id
  validates_uniqueness_of :name

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :statuses,
    dependent: :destroy

  has_many :users,
    through: :statuses,
    source: :user

  has_many :reviews,
    dependent: :destroy
end
