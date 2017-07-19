# == Schema Information
#
# Table name: contributions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  campaign_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  amount      :float
#

class Contribution < ApplicationRecord
  validates :campaign_id, :amount, presence: true
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :user
  belongs_to :campaign

end
