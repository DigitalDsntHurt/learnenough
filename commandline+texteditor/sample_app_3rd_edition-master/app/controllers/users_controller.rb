class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :edit, :update, :destroy,
                                        :following, :followers]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: :destroy
  
  def index   # function definition
    @persons = User.paginate(page: params[:page])
  end
  
  def show   # function definition
    @person = User.find(params[:id])
    @microposts = @person.microposts.paginate(page: params[:page])
  end
  
  def new   # function definition
    @person = User.new
  end
  
  def create   # function definition
    @person = User.new(user_params)
    if @person.save
      @person.send_activation_email
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_url
    else
      render 'new'
    end
  end
  
  def edit   # function definition
  end
  
  def update   # function definition
    if @person.update_attributes(user_params)
      flash[:success] = "Profile updated"
      redirect_to @person
    else
      render 'edit'
    end
  end
  
  def destroy   # function definition
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end
  
  def following   # function definition
    @title = "Following"
    @person  = User.find(params[:id])
    @persons = @person.following.paginate(page: params[:page])
    render 'show_follow'
  end
  
  def followers   # function definition
    @title = "Followers"
    @person  = User.find(params[:id])
    @persons = @person.followers.paginate(page: params[:page])
    render 'show_follow'
  end
  
  private
    
    def user_params   # function definition
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
    
    # Before filters
    
    # Confirms the correct user.
    def correct_user   # function definition
      @person = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@person)
    end
    
    # Confirms an admin user.
    def admin_user   # function definition
      redirect_to(root_url) unless current_user.admin?
    end
end
