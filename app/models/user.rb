class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	def as_json(options={})
		{ id: id, name: display_name, gravatar: gravatar}
		
	end

    def display_name
        first_name.present? ? "#{first_name} #{last_name}" :email
    end

    def gravatar
		hash = Digest::MD5.hexdigest(email)
		"https://www.gravatar.com/avatar/#{hash}"
	end
end
