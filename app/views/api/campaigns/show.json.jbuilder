json.merge! @campaign.attributes

if @amount
  json.current_amount @amount
  json.progress (@amount * 100 / @campaign.goal_amount).round
end
json.image_url asset_path(@campaign.image_url)
