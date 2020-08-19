class CreateDucks < ActiveRecord::Migration[5.2]
  def change
    create_table :ducks do |t|
      t.string  :name
      t.integer :rotundness
      t.text    :overview
      t.text    :image
    end
  end
end
