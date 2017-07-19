# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  price       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  campaign_id :integer
#

class Reward < ApplicationRecord
  validates :title, :price, :campaign_id, presence: true
  validates :price, numericality: true

  belongs_to :campaign, inverse_of: :rewards
end
