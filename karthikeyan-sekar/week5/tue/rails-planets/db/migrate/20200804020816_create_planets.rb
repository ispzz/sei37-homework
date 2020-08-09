class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    #SQL : CREATE TABLE planets ( cols )
    create_table :planets do |t|
      # NO NEED to create an :id column - it's so essential that
      # Rails always automatically creates it for us
      t.string :name   # a string column to store planet's name
      t.text   :image  # a longer text column for the image URl
      t.float  :orbit  # float for the orbit time (relative to earth's orbit)
      t.float  :diameter
      t.float  :mass
      t.integer :moons
    end
  end
end
