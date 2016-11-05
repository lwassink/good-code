class Status < ApplicationRecord
  VALID_STATUSES = [
    "currently us"
  ]

  validates_prsence_of :user_id, :program_id, :content
  validates :user_id, uniqueness: { scope: :program_id }
  validates :content, inclusion: { in  }

  belongs_to :user

  belongs_to :program
end
