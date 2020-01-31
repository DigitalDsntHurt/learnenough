class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change   # function definition
    add_column :users, :password_digest, :string
  end
end
