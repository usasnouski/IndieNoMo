@campaigns.each do |campaign|
  json.set! campaign.id do
    json.id campaign.id
    json.title campaign.title
    json.tagline campaign.tagline
    json.goal_amount campaign.goal_amount
    json.image_url asset_path(campaign.image_url)
  end
end
