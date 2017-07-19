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

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
