json.array! @cammaigns.each do |campaign|
  json.set! campaign.id do
    json.title campaign.title
    json.tagline campaign.tagline
    json.goal_amount goal_amount
    json.current_amount current_amount
  end
end
