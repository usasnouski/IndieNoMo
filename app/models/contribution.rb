# == Schema Information
#
# Table name: contributions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  campaign_id :integer          not null
#  amount      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Contribution < ApplicationRecord
  validates :user_id, :campaign_id, :amount, presence: true
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :user
  belongs_to :campaign

end
