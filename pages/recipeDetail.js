import Head from 'next/head';
import SiteHeader from '../components/siteHeader';
import RecepieMeta from '../components/recipeMeta';
export default function RecipeDetail() {
  return (
    <>
      <Head>
        <title>Kajol Jain | Recipe Detail</title>
        <SiteHeader />
      </Head>
      <div id='site-content'></div>
      <main className='main-content recipe-detail'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 main-img'>
                <figure>
                  <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/single-food@2x.jpg' />
                </figure>
              </div>
              <div className='col-md-7 col-md-offset-1'>
                <h2 className='entry-title'>Name of the recipe</h2>
                <RecepieMeta />
                <div className='ingredient'>
                  <h3>Ingredients</h3>
                  <table>
                    <tr>
                      <td>
                        <strong>150 g</strong>
                      </td>
                      <td>Consectetur adipisicing</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>50 g</strong>
                      </td>
                      <td>Elit sed do eiusmod tempor</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>70 g</strong>
                      </td>
                      <td>Duis aute irure dolor</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>20 g</strong>
                      </td>
                      <td>Deserunt mollit anim</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>300 g</strong>
                      </td>
                      <td>Voluptatem accusantium</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>15 g</strong>
                      </td>
                      <td>Dolorem eum fugiat</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>120 g</strong>
                      </td>
                      <td>Consectetur adipisicing</td>
                    </tr>
                  </table>
                </div>
                <p>
                  deleniti delectus quia, facilis accusamus. Illo officia
                  repellat recusandae? Et veniam libero laborum, officia, ullam
                  enim dicta reprehenderit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi quae consequatur soluta deleniti delectus quia, facilis
                  accusamus. Illo officia repellat recusandae? Et veniam libero
                  laborum, officia, ullam enim dicta reprehenderit. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Animi quae
                  consequatur soluta deleniti delectus quia, facilis accusamus.
                  Illo officia repellat recusandae? Et veniam libero laborum,
                  officia, ullam enim dicta reprehenderit.
                </p>

                <section className='comments'>
                  <h3>Comments (3)</h3>
                  <ul className='comment-list'>
                    <li className='comment'>
                      <footer>
                        <img
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/avatar-1@2x.jpg'
                          className='avatar'
                        />
                        <img
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-user@2x.png'
                          classNameName='user-name'
                        />
                        <h4 className='fn'>Sarah Smith</h4>
                        <span className='date'>17/08/2014</span>
                      </footer>
                      <div className='comment-content'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Cupiditate esse repellendus iusto vitae quasi
                          nisi, illo totam saepe tempora quo, possimus
                          quibusdam, debitis ullam itaque nesciunt, adipisci ab
                          expedita assumenda?
                        </p>
                      </div>
                    </li>
                    <li className='comment'>
                      <footer>
                        <img
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/avatar-2@2x.jpg'
                          className='avatar'
                        />
                        <img
                          classNameName='user-name'
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-user@2x.png'
                        />
                        <h4 className='fn'>Susan Glenn</h4>
                        <span className='date'>17/08/2014</span>
                      </footer>
                      <div className='comment-content'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Repudiandae voluptatibus aliquid officia quae
                          quo. Architecto voluptates, inventore quisquam quia
                          eaque pariatur quod, similique voluptatem tempora rem
                          eius ipsa nesciunt? Eveniet?
                        </p>
                      </div>
                    </li>
                    <li className='comment'>
                      <footer>
                        <img
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/avatar-3@2x.jpg'
                          className='avatar'
                        />
                        <img
                          classNameName='user-name'
                          src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-user@2x.png'
                        />
                        <h4 className='fn'>Patricia Brown</h4>
                        <span className='date'>17/08/2014</span>
                      </footer>
                      <div className='comment-content'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Similique cumque illo ea culpa voluptatibus?
                          Optio nulla dolor, provident voluptate quasi! Sequi
                          odit libero, quibusdam suscipit aut tenetur in
                          veritatis debitis?
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div id='respond'>
                    <h3>Leave a reply</h3>
                    <form action='#' className='comment-form'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <input type='text' placeholder='Your name...' />
                        </div>
                        <div className='col-md-6'>
                          <input type='text' placeholder='Email...' />
                        </div>
                      </div>
                      <textarea placeholder='Comments'></textarea>
                      <input type='submit' value='Leave a reply' />
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
