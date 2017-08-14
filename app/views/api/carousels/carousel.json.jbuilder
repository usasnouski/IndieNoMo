json.array! @carousel_campaigns do |campaign|
  json.extract! campaign, :id, :title, :tagline
  json.image_url asset_path(campaign.image_url)
end
