require 'rails_helper'

RSpec.describe Status, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:program_id) }
  it { should validate_presence_of(:content) }

  it do
    author = User.create(
      username: "test",
      password: "password"
    )
    program = Program.create!(
      name: "test",
      description: "test",
      creator: "Timmy",
      author_id: author.id
    )
    Status.create!(
      content: '1',
      user_id: author.id,
      program_id: program.id
    )
    should validate_uniqueness_of(:user_id).scoped_to(:program_id)
  end

  it { should validate_inclusion_of(:content).in_array(['1', '2', '3']) }

  it { should belong_to(:user) }
  it { should belong_to(:program) }
end
