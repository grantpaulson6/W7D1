class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.text :title
      t.text :body
      t.boolean :done, default: false
      t.timestamps
    end
  end
end
