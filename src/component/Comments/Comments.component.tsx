/* import assets and styles */
import comments from "data/Comments.json";
import "./Comments.style.scss";

/** @namespace @component/Comments/Component */
export default function Comments() {
  return (
    <section className="comments section">
      {/* header of the section */}
      <header className="section__header">
        <h2 className="section__title">comments</h2>
      </header>

      <main className="comments__main">
        {/* comment addition part */}
        <div className="comments__self">
          <img
            className="comments__picture"
            src="/images/people/user.jpg"
            alt="profile pic"
          />

          <div className="comments__box">
            <textarea
              className="comments__box--main"
              placeholder="Add Comment..."
            ></textarea>

            <footer className="comments__box--footer">
              <button className="comments__button--small primary-button">
                Log in to post
              </button>
            </footer>
          </div>
        </div>

        {/* all comment messages renders here */}
        <ul className="comments__list">
          {comments.map(({ name, surname, pic, comment }, index) => (
            <li className="comments__item" key={index}>
              {/* profile picture of user */}
              <img className="comments__picture" src={pic} alt={name} />
              {/* name and comment of user */}

              <div>
                <h3 className="comments__name">
                  {name} <span className="comments__surname">{surname}</span>
                </h3>
                <p className="comments__comment">{comment}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* load more button */}
        <button className="comments__button--normal primary-button">
          Load 4 more comments
        </button>
      </main>
    </section>
  );
}
