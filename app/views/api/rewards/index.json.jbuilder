@rewards.each do |reward|
  json.set! reward.id do
    json.id reward.id
    json.title reward.title
    json.description reward.description
    json.price reward.price
    json.campaign_id reward.campaign_id
  end
end
