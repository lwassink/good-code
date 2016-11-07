class Status < ApplicationRecord
  VALID_STATUSES = [
    "Currently  using",
    "Have used",
    "Want to use"
  ]

  validates_prsence_of :user_id, :program_id, :content
  validates :user_id, uniqueness: { scope: :program_id }
  validates :content, inclusion: { in: VALID_STATUSES }

  belongs_to :user

  belongs_to :program
end
