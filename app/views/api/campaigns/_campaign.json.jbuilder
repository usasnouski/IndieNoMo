json.extract! campaign, :id, :title, :tagline, :description, :overview, :current_amount, :goal_amount, :current_amount, :progress, :created_at, :end_date, :creator
json.image_url asset_path(campaign.image_url)
json.backers campaign.backers.length
json.rewards rewards
