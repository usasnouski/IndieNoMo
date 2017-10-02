# debugger;
json.set! campaign.id do
  json.extract! campaign, :id, :title, :tagline, :current_amount, :progress, :goal_amount, :created_at, :end_date
  json.image_url asset_path(campaign.image_url)
end
