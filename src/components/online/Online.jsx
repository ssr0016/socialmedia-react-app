import './online.css'

function Online( {user} ) {
  return (
    <div>
           <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                  <span className='rightbarOnline'></span>
                </div>
                <span classname='rightbarUsername'>{user.username}</span>
              </li>
    </div>
  )
}

export default Online