json.array! @search_result do |campaign|
  json.set! campaign.id do
    json.id campaign.id
    json.title campaign.title
    json.tagline campaign.tagline
    json.overview campaign.overview
    json.goal_amount campaign.goal_amount

    json.end_date campaign.end_date

    json.launch campaign.launch
    json.image_url asset_path(campaign.image_url)
  end
end
