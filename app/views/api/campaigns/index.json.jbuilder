@campaigns.each do |campaign|
  json.set! campaign.id do
    json.id campaign.id
    json.title campaign.title
    json.tagline campaign.tagline
    json.goal_amount campaign.goal_amount
    json.backers campaign.backers.length
    json.current_amount campaign.contributions.sum(:amount)
    json.end_date campaign.end_date
    json.rewards campaign.rewards
    json.launch campaign.launch
    json.image_url asset_path(campaign.image_url)
  end
end
