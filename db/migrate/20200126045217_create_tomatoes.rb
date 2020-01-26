class CreateTomatoes < ActiveRecord::Migration[6.0]
  def change
    create_table :tomatoes do |t|
      t.references :account
      t.integer :time

      t.timestamps
    end
  end
end
