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
  include PgSearch

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

  pg_search_scope :search, against: [:title, :tagline], using: { trigram: { threshold: 0.02 } }

  attr_reader :creator, :total

  def self.launched_campaigns
    where(launch: true).includes(:contributions)
  end

  def creator
    campaign_creator = user
    @creator = {
      id: campaign_creator.id,
      f_name: campaign_creator.first_name,
      l_name: campaign_creator.last_name,
      profile_img: campaign_creator.profile_img
    }
  end

  def current_amount
    @total = contributions.inject(0) { |sum, n| sum + n.amount }.round(2)
  end

  def progress
    (total * 100 / goal_amount).round
  end

  # def category=(category)
  #   self.category_id = Category.find_by(category[:id])
  # end
end
