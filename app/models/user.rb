class User < ApplicationRecord
  validates_presence_of :username, :password_digest, :session_token
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  has_many :authored_programs,
    class_name: :Program,
    foreign_key: :author_id

  has_many :statuses,
    dependent: :destroy

  has_many :programs,
    through: :statuses,
    source: :program

  has_many :reviews,
    foreign_key: :author_id,
    dependent: :destroy

  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
