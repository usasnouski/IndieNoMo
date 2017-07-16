json.merge! @campaign.attributes

json.creator @creator

if @amount
  json.current_amount @amount
  json.progress (@amount * 100 / @campaign.goal_amount).round
end

json.backers @campaign.backers.length
json.image_url asset_path(@campaign.image_url)

json.rewards @campaign.rewards.order(:price)
