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

class Campaign < ApplicationRecord
  validates :title, :tagline, :description, :overview, :goal_amount,
            :end_date, :user_id, presence: true
  validates :title, length: { maximum: 50, allow_nil: true }
  #add category_id to validation

  has_attached_file :image_url, default_url: "default.jpg"
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/

  belongs_to :user


  # def category=(category)
  #   self.category_id = Category.find_by(category[:id])
  # end
end
