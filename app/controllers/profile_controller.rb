class ProfileController < ApplicationController
    before_action :authenticate_user! 
    def index
        @user = current_user
    end

    def update
        current_user.update(user_params)
        current_user.first_name = user_params[:first_name] if user_params[:first_name]
        current_user.last_name = user_params[:last_name] if user_params[:last_name]
        redirect_to root_path
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name)
    end
end
