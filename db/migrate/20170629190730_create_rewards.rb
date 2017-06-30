class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.string :description
      t.integer :price
      t.timestamps
    end
  end
end
