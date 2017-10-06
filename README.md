# IndieNoMo

[IndieNoMo live][heroku]

[heroku]: https://indienomo.herokuapp.com/

IndieNoMo is a full-stack crowdfunding web application inspired by IndieGoGo. It incorporates a Ruby on
Rails backend, a PostgreSQL database, and a React.js frontend with a Redux architectural framework for state management.

![indienomo-Homepage](/app/assets/images/indienomo_homepage.jpg)

IndieNoMo allows people to raise funds for ideas by creating crowdfunding campaigns and showcasing these campaigns to other users.

## Features

### Account creation and authentication
In order to create or fund a campaign users need to have an account within IndieNoMo. Sign-up form is compact and simple. During account creation user's password is being encrypted and hashed and only after that stored to the database. So the actual passwords are never saved to the database.   

### Campaigns and Perks

Campaigns are stored in a single table in the database and have a connection to an authoring user through a user foreign key. Each campaign has a number of associated rewards called Perks. Perks are stored in a separate Rewards table.

Campaigns are rendered in two different ways. The first one is the campaign show page that provides campaign's full details as well as associated data such as number of contributions, total funds and list of perks.

![campaign-showpage](/app/assets/images/campaign-showpage.jpg)

The other one is a compact campaign representation in form of campaign tile. Campaign tiles are used on index, search and main pages making browsing process easier.

![campaign-tile](/app/assets/images/campaign-tile.jpg)

Below is the example of a json that represents campaign index state

```Javascript
{
  "346": {
    "id": 346,
    "title": "AirLink: Make Your Headphones Wireless",
    "tagline": "The only Bluetooth adapter with Hi-Fi Sound. Built-in Mic. Camera Shutter. Sync \u0026 Share function.",
    "current_amount": 22.0,
    "progress": 1,
    "goal_amount" :2517.0,
    "created_at": "2017-10-03T15:36:20.968Z",
    "end_date":"2018-05-11",
    "image_url":"https://s3.amazonaws.com/indienomo-dev/campaigns/image_urls/000/000/346/original/edegmngdlrb8pbqq3mwe.jpg?1507044980"
  },
  "347": {
    "id": 347,
    "title": "Ultraloq - Fingerprint, Fob \u0026 Bluetooth Smart Lock",
    "tagline": "With 3 ways to unlock \u0026 remote access, UL1 is a secure, user-friendly \u0026 affordable home smart lock.",
    "current_amount": 0.0,
    "progress": 0,
    "goal_amount": 36296.0,
    "created_at": "2017-10-03T15:36:21.708Z",
    "end_date": "2017-12-25",
    "image_url": "https://s3.amazonaws.com/indienomo-dev/campaigns/image_urls/000/000/347/original/mcye1urqyrfcbkddesus.jpg?1507044981"
  }
}
```

Campaigns are created and edited through special edit component.

![campaign-edit](/app/assets/images/campaign_edit.jpg)

Perks are saved in a separate table and store a reference to assigned campaign. They are created and added through campaign editor form at perks tab. User can add new perks and see how they look like as they appear in the form.

![perk-create](/app/assets/images/perk-create.jpg)

### Homepage Campaigns Carousel

The homepage features an infinite scroll carousel which was built using CSS Animation. Clicking either on a left or right campaign tile will trigger CSS transition that shifts tiles to an appropriate direction. When animation is finished React will trigger another event that will update the arrangement of campaigns in a carousel state according to finished animation.

### Search

IndieNoMo also supports search functionality allowing user to explore campaigns trough their title, tagline or overview content. Search performance incorporates trigram indexes (words broken up into sequences of 3 letter) and implemented via PostgreSQL's `pg_trgm` extension.
