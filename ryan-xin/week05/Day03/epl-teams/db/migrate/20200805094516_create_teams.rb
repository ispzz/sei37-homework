class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.integer :founded
      t.text :stadium
      t.text :logo
      t.text :manager
      t.boolean :ucl

      t.timestamps
    end
  end
end
