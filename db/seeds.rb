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

user01 = User.create!(
  email: 'guestuser@mail.com',
  password: 'password',
  first_name: 'Amazing',
  last_name: 'User'
)

camp01 = Campaign.create!(
  title: 'AirLink: Make Your Headphones Wireless',
  tagline: 'The only Bluetooth adapter with Hi-Fi Sound. Built-in Mic. Camera Shutter. Sync & Share function.',
  description: 'The description u have been waiting for',
  overview: 'AirLink is the best solution to make your wired headphones
  adapt to smartphones without headphone jacks. It adds Bluetooth connectivity
  to any audio device and lets you stream music wirelessly with 24bit Hi-Fi
  sound. The control system makes volume control, calls answering, virtual
  assistant control and picture taking easier than ever before. You can also
  sync and share the audio with your friends. Enjoy it with only half of the market price.',
  goal_amount: 10000,
  end_date: 'Jul-30-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp01.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1498253479/edegmngdlrb8pbqq3mwe.jpg'
camp01.save!

camp02 = Campaign.create!(
  title: 'Ultraloq - Fingerprint, Fob & Bluetooth Smart Lock',
  tagline: 'With 3 ways to unlock & remote access, UL1 is a secure, user-friendly & affordable home smart lock.',
  description: 'The description u have been waiting for',
  overview: "Ultraloq UL1 is a revolutionary smart lock that offers entry via biometric fingerprint identification,
  contactless key fob, or your Bluetooth enabled smartphone. The Bridge upgrade allows you to share an
  eKey with guests while you're away from your home and monitor all activity via the iOS or Android app.
  Designed to fit any standard door, UL1 can be installed in minutes with only 5 screws. UL1 is the most affordable solution to home security.",
  goal_amount: 40400,
  end_date: 'Aug-25-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp02.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1493058759/mcye1urqyrfcbkddesus.jpg'
camp02.save!

camp03 = Campaign.create!(
  title: "Mizu Chef's Knife - Be A Cut Above",
  tagline: "The Mizu Chef's Knife is professionally crafted using premium materials and sold at a sensible price",
  description: 'The description u have been waiting for',
  overview: "Ultraloq UL1 is a revolutionary smart lock that offers entry via biometric fingerprint identification,
  contactless key fob, or your Bluetooth enabled smartphone. The Bridge upgrade allows you to share an
  eKey with guests while you're away from your home and monitor all activity via the iOS or Android app.
  Designed to fit any standard door, UL1 can be installed in minutes with only 5 screws. UL1 is the most affordable solution to home security.",
  goal_amount: 37887,
  end_date: 'Sep-30-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp03.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1492325669/gf480p1mnzplacyicdbo.png'
camp03.save!

camp04 = Campaign.create!(
  title: "Gemini PDA Android & Linux keyboard mobile device",
  tagline: "Bringing the keyboard personal digital assistant into the 21st century. Type and create on the move!",
  description: 'The description u have been waiting for',
  overview: "Ultraloq UL1 is a revolutionary smart lock that offers entry via biometric fingerprint identification,
  contactless key fob, or your Bluetooth enabled smartphone. The Bridge upgrade allows you to share an
  eKey with guests while you're away from your home and monitor all activity via the iOS or Android app.
  Designed to fit any standard door, UL1 can be installed in minutes with only 5 screws. UL1 is the most affordable solution to home security.",
  goal_amount: 335900,
  end_date: 'Sep-30-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp04.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1488155049/r8oloqrq2kdjsjtgtr4w.jpg'
camp04.save!


camp05 = Campaign.create!(
  title: "13.3 and 6.8 Android e-reader",
  tagline: "Take notes, read e-books and install your favorite Android apps with our 13.3 and 6.8 inch e-reader.",
  description: 'The description u have been waiting for',
  overview: "The Good e-Reader 13.3 and Good e-Reader 6.8 is a breakthrough
  in digital note taking. You can draw, take notes and write down essential
  information with the accompanied stylus.  We also have a fully interactive
  touchscreen display, so you can read digital books, comics, manga or newspapers.
  Both of our devices run Google Android and come bundled with a fully functional app store.
  You can easily install OneNote, Dropbox, Kindle, Nook, Kobo and thousands of others.",
  goal_amount: 83000,
  end_date: 'May-17-2018',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp05.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1456129617/jzvfbngkqleix3utujtc.jpg'
camp05.save!

camp06 = Campaign.create!(
  title: "B-2 World's Smallest Tactical Pocket Knife EDC",
  tagline: "Best Concealed Carry Pocket Knife for Everyday Carry - Lifetime Warranty - Urban Survival.",
  description: 'The description u have been waiting for',
  overview: "We've been a small, community base, start-up founded via
  Kickstarter running for the past 3 years.  We sell premium outdoor
  survival gear with a mission to incorporate functionality into modern day
  aesthetics. Essentially, we wanted to the create premium survival gear
  and make them into everyday carry gear that everyone can wear as well as use.",
  goal_amount: 14500,
  end_date: 'May-11-2018',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp06.image_url = 'https://res.cloudinary.com/indiegogo-media-prod-cld/image/upload/v1496676429/wwevqfbgc1uhcmei9nsx.jpg'
camp06.save!

camp07 = Campaign.create!(
  title: "ABC: Basic Connections - Reference Book for Makers",
  tagline: "The essential reference book for makers. Connect almost anything to your Arduino compatible board!",
  description: "ABC: Basic Connections is a collection of neat circuit
  diagrams that shows you how to properly connect almost anything to your
   Arduino, ARM mbed, ESP8266, etc. compatible board.",
  goal_amount: 60000,
  end_date: 'Jul-22-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp07.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1497531195/gmvdqtst16tyubyvuny2.jpg'
camp07.save!

camp08 = Campaign.create!(
  title: "Octopus Watch, the training wheels for good habits",
  tagline: "The first icon-based watch that teaches kids good habits and the concept of time.",
  description: "We need your support to bring to life Octopus, the first
   icon-based watch that empowers kids by teaching good habits and the concept of time.",
  goal_amount: 60000,
  end_date: 'Jul-22-2017',
  user_id: user01.id,
  category_id: 4,
  launch: true
)
camp08.image_url = 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1477372196/dsnvt8mbr3mlmh8rvoi7.jpg'
camp08.save!


contr01 = Contribution.create!(
  user_id: user01.id,
  campaign_id: camp01.id,
  amount: 22.00
)

reward01 = Reward.create!(
  title: '2x AirLink',
  description: 'Save 42% off the $78 Retail Price and Get TWO (2)
   AirLink Bluetooth Adapters! Enjoy music together with your friend.
   Available in Black and White colors. Shipping Worldwide.',
  price: 45,
  campaign_id: camp01.id
  )

reward02 = Reward.create!(
  title: 'Add-on - Premium Earphone',
  description: 'Save 44% off $39 Retail Price and get ONE(1) AirLink
  Customized Short-Cord Earphone. This premium earphone works perfectly
  with AirLink Adapter. No tangle wires, more freedom.',
  price: 22,
  campaign_id: camp01.id
  )

reward03 = Reward.create!(
  title: 'Early Bird - 1× AirLink',
  description: 'Save 26% off the $39 Retail Price and Get ONE(1) AirLink
  Bluetooth Adapter! Available in Black and White colors. Shipping Worldwide.',
  price: 29,
  campaign_id: camp01.id
)

reward04 = Reward.create!(
  title: '(1) Ultraloq UL1',
  description: 'InDemand: Save 46% off the retail price of $219! Get (1)
   Ultraloq UL1 and choose your color: satin nickel or black color.
   Free shipping to the US!',
  price: 119,
  campaign_id: camp02.id
)

reward05 = Reward.create!(
  title: '(2) Ultraloq Bridges',
  description: 'InDemand Pricing: Save 62% off the retail price of $198!
   Ultraloq Bridge allows you to unlock, share eKeys, and view access logs
    from anywhere. Compatible with UL1 and UL3 BT (previously 550% funded
    IGG campaign). Free shipping to the US!',
  price: 65,
  campaign_id: camp03.id
  )

reward06 = Reward.create!(
  title: "Mizu Chef's Knife",
  description: "Best knife you can buy for $65. Be of part of the 2nd
  production run and get the knife before it sells out! Available in USA and Canada only.",
  price: 29,
  campaign_id: camp03.id
)

reward07 = Reward.create!(
  title: "Mizu Chef's Knife + Gift Box",
  description: "Laser engraved and made to wow, your Mizu Chef's knife
  will come in a premium acacia wood gift box! Available in USA and Canada only.",
  price: 80,
  campaign_id: camp03.id
)

reward08 = Reward.create!(
  title: 'The Gemini PDA (WiFi + 4G)',
  description: 'The Gemini PDA keyboard mobile device with WiFi and 4G
  connectivity. $200 off the final retail price exclusively for our Indiegogo
  backers. You will get your unit from our first production run. No units
  will be available for general release until you receive your Gemini.!',
  price: 399,
  campaign_id: camp04.id
)
reward09 = Reward.create!(
  title: 'The Gemini Bundle - All In',
  description: 'The complete Gemini PDA (WiFi + 4G) package.',
  price: 510,
  campaign_id: camp04.id
)

reward10 = Reward.create!(
  title: "13.3 Inch e-Reader (Black)",
  description: "Purchase one of the most anticipated e-readers in the
  world. The Good e-reader 13.3 inch will give you a full note taking
  experience and you can read all of your e-books. Do you like Android
  apps? You can install all of the apps you want via Google Play.",
  price: 699,
  campaign_id: camp05.id
)

reward11 = Reward.create!(
  title: 'Donate What You Can',
  description: 'Every little bit counts, your $5 donation will go towards
  all of the costs involved in bringing this great 13.3 inch e-reader to the market.',
  price: 5,
  campaign_id: camp05.id
)
reward12 = Reward.create!(
  title: '6.8 eReader and Accessory Pack',
  description: 'Order your Good e-Reader 6.8 Inch today and an epic
  accessory pack! You will receive: - 6.8 Inch Android e-reader - 1x
  Screen Protector - 1x Extra Stylus - 1x 4GB Micro SD card - 1x USB Wall
   Charger - 1x Micro USB Cable',
  price: 226,
  campaign_id: camp05.id
)

reward13 = Reward.create!(
  title: 'B-2 SUPER DEAL: Team Bundle',
  description: 'Get seven B-2 Bomber Nano Blades (BEST DEAL)',
  price: 99,
  campaign_id: camp06.id
)
reward14 = Reward.create!(
  title: 'B-2 Nano Blade',
  description: 'Get one B-2 Nano Blade.',
  price: 25,
  campaign_id: camp06.id
)
reward15 = Reward.create!(
  title: 'Early Bird: Buy 2 Get 1 FREE!',
  description: 'Get a total of three B-2 Nano Blades',
  price: 50,
  campaign_id: camp06.id
)

reward16 = Reward.create!(
  title: '1 x ABC: Basic Connections',
  description: '1 copy of ABC: Basic Connections - The Essential
  Reference Book for Makers! Thank you for your support! ABC: Basic
  Connections will retail for €35 after the campaign.',
  price: 23,
  campaign_id: camp07.id
)
reward17 = Reward.create!(
  title: '2 x ABC: Basic Connections',
  description: '2 copies of ABC: Basic Connections - The essential
  Reference Book for Makers! Thank you for your support! ABC: Basic
  Connections will retail for €35 after the campaign.',
  price: 46,
  campaign_id: camp07.id
)


reward18 = Reward.create!(
  title: '1 Octopus Watch',
  description: 'Includes: - 1 Octopus watch. - 1 charging cable. -
  iOS/Android app. Available colors: strawberry red, blue sky, lemon
  green, pink candy and dark grey (a form will be sent separately next
  month to collect your choice)',
  price: 69,
  campaign_id: camp08.id
)

reward19 = Reward.create!(
  title: '2 Octopus Watch',
  description: 'Includes: - 2 Octopus watch. - 2 charging cable. -
  iOS/Android app. Available colors: strawberry red, blue sky, lemon
  green, pink candy and dark grey (a form will be sent separately next
  month to collect your choice)',
  price: 138,
  campaign_id: camp08.id
)
