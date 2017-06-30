class AddCategoryIdToRewards < ActiveRecord::Migration[5.1]
  def change
    add_column :rewards, :campaign_id, :integer
  end
end
