// import assets and styles
import comments from './Comments.data.json';
import './Comments.style.scss';

/** @namespace @component/Comments/Component */
export default function Comments() {
  return (
    <section className='comments section'>
      <header className='section-header'>
        <h2 className='section-header-title'>comments</h2>
      </header>
      <main>
        <div className='comments-submission'>
          <img
            className='comments-picture'
            src="/assets/people/user.jpg"
            alt="profile pic" 
          />
          <div className='comments-submission-textarea'>
            <textarea  placeholder="Add Comment..."></textarea>
            <div className='comments-submission-textarea-submitpart'>
              <button>Log in to post</button>
            </div>
          </div>
        </div>
        <ul className='comments-content'>
          {comments.map(({ name, surname, pic, comment }) => (
            <li>
              <img
                className='comments-picture'
                src={pic}
                alt={name}
              />
              <div>
                <h3>{name} <span>{surname}</span></h3>
                <p>{comment}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className='comments-loadmore'>
          Load 10 more comments
        </button>
      </main>
    </section>
  )
}