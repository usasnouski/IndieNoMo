# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
User.delete_all
Campaign.delete_all

user55 = User.create!(
  email: 'guestuser@mail.com',
  password: 'password',
)

Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here',
  goal_amount: 5000,
  end_date: 'Jan-10-2017',
  user_id: user55.id,
  category_id: 4
)
