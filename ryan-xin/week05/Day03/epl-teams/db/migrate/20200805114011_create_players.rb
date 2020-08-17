class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nationality
      t.integer :age
      t.text :position
      t.integer :number
      t.integer :team_id

      t.timestamps
    end
  end
end
