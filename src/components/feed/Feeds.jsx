import Share from '../../components/share/Share'
import Post from '../../components/post/Post'
import './feed.css'
import { Posts } from '../../dummyData'

function Feeds() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          {Posts.map((p)=>(
            <Post key={p.id} post={p}/>
          ))}
          
        </div>
    </div>
  )
}

export default Feeds