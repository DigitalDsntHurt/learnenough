class AddAdminToUsers < ActiveRecord::Migration
  def change   # function definition
    add_column :users, :admin, :boolean, default: false
  end
end
