class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.integer :number
      t.text :position
      t.text :height
      t.text :weight

      t.timestamps
    end
  end
end
