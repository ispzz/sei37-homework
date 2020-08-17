class AddImageToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :image, :text
  end
end
