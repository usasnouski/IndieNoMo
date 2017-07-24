json.created_campaigns do
  json.array! user.campaigns.includes(:user) do |campaign|
    json.extract! campaign, :id, :user_id, :title, :tagline
    json.image_url asset_path(campaign.image_url)
    json.f_name campaign.user.first_name
    json.l_name campaign.user.last_name
  end
end

json.backed_campaigns do
  json.array! user.contributions.includes(campaign: [:user]) do |contr|
    json.extract! contr.campaign, :id, :user_id, :title, :tagline
    json.image_url asset_path(contr.campaign.image_url)
    json.f_name contr.campaign.user.first_name
    json.l_name contr.campaign.user.last_name
  end
end
