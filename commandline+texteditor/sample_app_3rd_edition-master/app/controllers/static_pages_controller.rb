class StaticPagesController < ApplicationController
  
  def home   # function definition
    if logged_in?
      @micropost = current_user.microposts.build
      @feed_items = current_user.feed.paginate(page: params[:page])
    end
  end

  def help   # function definition
  end

  def about   # function definition
  end
  
  def contact   # function definition
  end
end
