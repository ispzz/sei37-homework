class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.text :name
      t.date :doe
      t.text :location

      t.timestamps
    end
  end
end
