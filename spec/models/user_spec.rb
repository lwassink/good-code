require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }

  it "should validate uniqueness of username" do
    FactoryGirl.build(:user).save
    FactoryGirl.build(:user, username: "test2").save
    should validate_uniqueness_of(:username)
  end

  it { should have_many(:authored_programs) }
  it { should have_many(:programs) }
  it { should have_many(:statuses) }
  it { should have_many(:reviews) }

  it "should automatically set the session_token" do
    user = FactoryGirl.build(:user, session_token: nil)
    user.save
    expect(user.valid?).to be_truthy
  end

  it "should save the password_digest, not the password" do
    id = User.create!(username: "test", password: "password").id
    user = User.find(id)
    expect(user.password).to be(nil)
    expect(user.password_digest).to be_truthy
    user.destroy
  end
end
