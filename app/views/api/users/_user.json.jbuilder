json.extract! user, :id, :email, :first_name, :last_name

json.profile_img asset_path(user.profile_img)
