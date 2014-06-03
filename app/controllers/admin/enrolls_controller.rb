class Admin::EnrollsController < ApplicationController

  def create
    @course = Course.get_course params[:course_id]
    @user = Refinery::User.find params[:user_id]
    @user.enroll_to_course(@course)
    redirect_to admin_course_url(params[:course_id])
  end
end
