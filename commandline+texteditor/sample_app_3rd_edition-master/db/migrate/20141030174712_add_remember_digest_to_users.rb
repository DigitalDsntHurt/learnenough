class AddRememberDigestToUsers < ActiveRecord::Migration
  def change   # function definition
    add_column :users, :remember_digest, :string
  end
end
