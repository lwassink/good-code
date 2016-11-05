# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'Guest', password: 'password')
User.create!(username: 'Luke', password: 'password')
User.create!(username: 'Timmy', password: 'password')
User.create!(username: 'Frank', password: 'password')

Program.create!(
  name: 'Ruby on Rails',
  createor: 'David Heinsmeier Hansson',
  description: 'descriptio',
    source_code_url: 'https://github.com/rails/rails',
  image_url:
  thumbnail_url:
  author_id:
)
