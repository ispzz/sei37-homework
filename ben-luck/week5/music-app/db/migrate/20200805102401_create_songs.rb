class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.date :release
      t.integer :downloads
      t.integer :rank
      t.text :review

      t.timestamps
    end
  end
end
