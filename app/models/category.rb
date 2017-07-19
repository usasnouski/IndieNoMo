# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  category   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates :category, presence: true

  has_many :campaigns

end
