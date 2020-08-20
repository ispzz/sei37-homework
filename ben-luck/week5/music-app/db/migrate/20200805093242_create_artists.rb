class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :image
      t.integer :followers

      t.timestamps
    end
  end
end
