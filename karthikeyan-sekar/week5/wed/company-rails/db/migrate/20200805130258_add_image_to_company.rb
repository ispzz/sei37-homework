class AddImageToCompany < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :image, :text
  end
end
