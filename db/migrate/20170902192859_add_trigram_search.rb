class AddTrigramSearch < ActiveRecord::Migration[5.1]
  def change
    execute "create extension pg_trgm;"
  end
end
