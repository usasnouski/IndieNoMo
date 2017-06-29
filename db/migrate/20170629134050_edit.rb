class Edit < ActiveRecord::Migration[5.1]
  def change
    remove_column :contributions, :amount
    add_column :contributions, :amount, :float
  end
end
