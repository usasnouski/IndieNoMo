class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.string :tagline, null: false
      t.text :description, null: false
      t.text :overview, null: false
      t.float :goal_amount, null: false
      t.date :end_date, null: false
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
