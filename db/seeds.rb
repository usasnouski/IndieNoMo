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

camp01 = Campaign.create!(
  title: 'Ham followed now ecstatic use speaking exercise.',
  tagline: 'Himself he evident oh greatly my on inhabit general concern. It earnest amongst he showing females so improve in picture.',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 5000,
  end_date: 'Jan-10-2018',
  user_id: user55.id,
  category_id: 4
)
camp01.image_url = File.open('app/assets/images/camp01.jpeg')
camp01.save!

camp02 = Campaign.create!(
  title: 'Distrusts daughters certainly suspected.',
  tagline: 'Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell.',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 13210,
  end_date: 'Mar-10-2018',
  user_id: user55.id,
  category_id: 4
)
camp02.image_url = File.open('app/assets/images/camp02.jpeg')
camp02.save!

camp03 = Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline some info about campaign',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 12480,
  end_date: 'Aug-15-2017',
  user_id: user55.id,
  category_id: 4
)
camp03.image_url = File.open('app/assets/images/camp03.jpeg')
camp03.save!

camp04 = Campaign.create!(
  title: 'Way now instrument had eat diminution.',
  tagline: 'One built fat you out manor books. Mrs interested now his affronting inquietude contrasted cultivated. ',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 999,
  end_date: 'May-22-2018',
  user_id: user55.id,
  category_id: 4
)
camp04.image_url  = File.open('app/assets/images/camp04.jpeg')
camp04.save!

camp05 = Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline some info about campaign',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 5000,
  end_date: 'Jan-10-2017',
  user_id: user55.id,
  category_id: 4
)
camp05.image_url  = File.open('app/assets/images/camp05.jpeg')
camp05.save!

camp06 = Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline some info about campaign',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 5000,
  end_date: 'Jan-10-2017',
  user_id: user55.id,
  category_id: 4
)
camp06.image_url  = File.open('app/assets/images/camp06.jpeg')
camp06.save!

camp07 = Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline some info about campaign',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 5000,
  end_date: 'Jan-10-2017',
  user_id: user55.id,
  category_id: 4
)
camp07.image_url  = File.open('app/assets/images/camp07.jpeg')
camp07.save!

camp08 = Campaign.create!(
  title: 'New campaign',
  tagline: 'New tagline some info about campaign',
  description: 'The description u have been waiting for',
  overview: 'Lots of overview here, random text. Lots of overview here, random text',
  goal_amount: 5000,
  end_date: 'Jan-10-2017',
  user_id: user55.id,
  category_id: 4
)
camp08.image_url  = File.open('app/assets/images/camp08.jpeg')
camp08.save!
