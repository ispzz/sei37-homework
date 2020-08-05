class CreateDisneyCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :disney_characters do |t|
      t.string "name"
      t.text "debut"
      t.text "image"
      t.integer "age"
    end
  end
end
