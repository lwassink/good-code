class Status < ApplicationRecord
  VALID_STATUSES = ['1', '2', '3']

  validates_presence_of :user_id, :program_id, :content
  validates :user_id, uniqueness: { scope: :program_id }
  validates :content, inclusion: { in: VALID_STATUSES, message: "Status content must be one of: #{VALID_STATUSES.join(', ')}" }

  belongs_to :user

  belongs_to :program
end
