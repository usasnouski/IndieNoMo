json.array! @campaigns.each do |campaign|
  json.set! campaign.id do
    json.title campaign.title
    json.tagline campaign.tagline
    json.goal_amount campaign.goal_amount
  end
end
