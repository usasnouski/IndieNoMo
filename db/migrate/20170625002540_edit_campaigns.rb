class EditCampaigns < ActiveRecord::Migration[5.1]
  def change
    remove_column :campaigns, :tagline
    add_column :campaigns, :tagline, :string
    remove_column :campaigns, :description
    add_column :campaigns, :description, :text
    remove_column :campaigns, :overview
    add_column :campaigns, :overview, :text
    remove_column :campaigns, :end_date
    add_column :campaigns, :end_date, :date
    add_column :campaigns, :launch, :boolean
  end
end
