# == Schema Information
#
# Table name: campaigns
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  goal_amount            :float            not null
#  user_id                :integer          not null
#  category_id            :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  image_url_file_name    :string
#  image_url_content_type :string
#  image_url_file_size    :integer
#  image_url_updated_at   :datetime
#  tagline                :string
#  description            :text
#  overview               :text
#  end_date               :date
#  launch                 :boolean
#

class Campaign < ApplicationRecord
  validates :title, :goal_amount, :category_id, :user_id, presence: true
  validates :title, length: { maximum: 50, allow_nil: true }
  validates :goal_amount, numericality: { greater_than: 499 }
  #add category_id to validation

  has_attached_file :image_url, default_url: "default.jpg"
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/

  belongs_to :user, inverse_of: :campaigns
  # belongs_to :category
  has_many :contributions, inverse_of: :campaign

  has_many :rewards, inverse_of: :campaign
  accepts_nested_attributes_for :rewards, allow_destroy: true

  has_many :backers, through: :contributions, source: :user


  # def category=(category)
  #   self.category_id = Category.find_by(category[:id])
  # end
end
