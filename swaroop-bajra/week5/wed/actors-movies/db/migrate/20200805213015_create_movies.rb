class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.date :year
      t.text :genre
      t.integer :actor_id

      t.timestamps
    end
  end
end
