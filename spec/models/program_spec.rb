require 'rails_helper'

RSpec.describe Program, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:creator) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:author_id) }

  it "should validate uniqueness of name" do
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
    should validate_uniqueness_of(:name)
    program.destroy
    author.destroy
  end

  it { should belong_to(:author) }
  it { should have_many(:statuses) }
  it { should have_many(:users) }
  it { should have_many(:reviews) }
end
