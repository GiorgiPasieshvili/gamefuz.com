// import assets and styles
// import comments from './Comments.data.json';
import './Comments.style.scss';

/** @namespace @section/Comments/Component */
export default function Comments() {
  return (
    <section className='comments section'>
      <header className='section-header'>
        <h2 className='section-header-title'>comments</h2>
      </header>
      Nikoloz Gabunia
      <br />
      Mirza Gelovani
      <br />
      Tamta Axvlediani
    </section>
  )
}