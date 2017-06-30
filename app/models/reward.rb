class Reward < ApplicationRecord
  validates :title, :price, :campaign_id, presence: true
  validates :price, numericality: true

  belongs_to :campaign
end
