# == Schema Information
#
# Table name: campaigns
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  tagline                :string           not null
#  description            :text             not null
#  overview               :text             not null
#  goal_amount            :float            not null
#  end_date               :date             not null
#  user_id                :integer          not null
#  category_id            :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  image_url_file_name    :string
#  image_url_content_type :string
#  image_url_file_size    :integer
#  image_url_updated_at   :datetime
#

require 'test_helper'

class CampaignTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
