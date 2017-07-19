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

require 'test_helper'

class ContributionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
