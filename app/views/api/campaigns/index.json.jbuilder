@campaigns.each do |campaign|
  json.set! campaign.id do
    json.id campaign.id
    json.title campaign.title
    json.tagline campaign.tagline
    json.overview campaign.overview
    json.goal_amount campaign.goal_amount
    json.creator ({ f_name: campaign.user.first_name, l_name: campaign.user.last_name })
    json.backers campaign.backers.length
    # sum = campaign.contributions.sum(:amount)

    total = campaign.contributions.inject(0) { |sum, n| sum + n.amount }.round(2)

    json.current_amount total
    json.progress (total * 100 / campaign.goal_amount).round
    json.end_date campaign.end_date
    json.rewards campaign.rewards
    json.launch campaign.launch
    json.image_url asset_path(campaign.image_url)
  end
end
