class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :bio
      t.text :image

      t.timestamps
    end
  end
end
