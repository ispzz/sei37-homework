class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :colours
      t.text :headcoach
      t.text :description

      t.timestamps
    end
  end
end
