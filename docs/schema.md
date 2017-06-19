# Schema Information

## users

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique
first_name | string| not null, indexed
last_name | string | not null, indexed
about me | text |
profile_image_url | string | indexed
timestamps | datetime |

## campaign

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
user_id | integer |  not null, foreign key
title | string | not null
tagline | string | not null
overview | text | not null
description | text | not null
goal_amount | integer | not null
current_amount | integer | not null
tile_img_url | string | not null
category_id | integer | not null
img_url | integer | indexed
end_date | date | not null
timestamps | datetime |

## contributions

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
user_id | string | not null, foreign key
campaign_id | integer | not null, foreign_key
reward_id | integer | foreign_key
amount | integer | not null
timestamps | datetime |

## rewards

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
campaign_id | integer | not null, foreign key
title | string| not null
description | string | not null, indexed
price | integer | not null

## categories

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
category_name | string | not null
campaign_id | integer | not_null
