/* import assets and styles */
import comments from "@data/Comments.json";
import "./Comments.style.scss";

/** @namespace @component/Comments/Component */
export default function Comments() {
  return (
    <section className="comments section">
      {/* header of the section */}
      <header className="section-header">
        <h2 className="section-header-title">comments</h2>
      </header>

      <main>
        {/* comment addition part */}
        <div className="comments-addition">
          <img
            className="comments-pic"
            src="/images/people/user.jpg"
            alt="profile pic"
          />
          <div className="comments-addition-box">
            <textarea placeholder="Add Comment..."></textarea>
            <div className="comments-addition-box-down">
              <button className="primary-button">Log in to post</button>
            </div>
          </div>
        </div>

        {/* all comment messages renders here */}
        <ul className="comments-content">
          {comments.map(({ name, surname, pic, comment }, index) => (
            <li key={index}>
              {/* profile picture of user */}
              <img className="comments-pic" src={pic} alt={name} />
              {/* name and comment of user */}
              <div>
                <h3>
                  {name} <span>{surname}</span>
                </h3>
                <p>{comment}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* load more button */}
        <button className="comments-load primary-button">
          Load 4 more comments
        </button>
      </main>
    </section>
  );
}
