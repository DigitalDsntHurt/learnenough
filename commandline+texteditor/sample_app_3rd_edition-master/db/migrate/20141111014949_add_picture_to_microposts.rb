class AddPictureToMicroposts < ActiveRecord::Migration
  def change   # function definition
    add_column :microposts, :picture, :string
  end
end
