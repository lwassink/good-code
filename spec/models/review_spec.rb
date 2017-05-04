require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should validate_presence_of(:author_id) }
  it { should validate_presence_of(:program_id) }
  it { should validate_presence_of(:body) }

  it { should belong_to(:author) }
  it { should belong_to(:program) }
  it { should have_many(:statuses) }
end
