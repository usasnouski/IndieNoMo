@campaigns.each do |campaign|
  json.partial! "api/campaigns/campaign_tile", campaign: campaign
end
