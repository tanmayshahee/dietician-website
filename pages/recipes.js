import Head from 'next/head';
import SiteHeader from '../components/siteHeader';
import RecepieMeta from '../components/recipeMeta';
export default function Recipes() {
  return (
    <>
      <Head>
        <title>Kajol Jain | Recipes</title>
      </Head>
      <div id='site-content'>
        <SiteHeader />
        <main className='main-content'>
          <div className='content'>
            <div className='container'>
              <h2 className='entry-title'>
                Cras sit amet odio enim condimentum pretium vitae nec enim in
                aliquet dolor proin semper vivamus
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{' '}
              </p>

              <div className='recipes-list'>
                <article className='recipe'>
                  <figure className='recipe-image'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/food-1@2x.jpg'
                      alt='Food 1'
                    />
                  </figure>
                  <div className='recipe-detail'>
                    <h2 className='recipe-title'>
                      <a href='recipeDetail'>
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem aliquam minima ullam officiis eum facilis impedit
                      molestiae ducimus nam. Et, saepe commodi quisquam, porro
                      eaque eligendi neque voluptates numquam perspiciatis.
                    </p>
                    <RecepieMeta />
                  </div>
                </article>
                <article className='recipe'>
                  <figure className='recipe-image'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/food-2@2x.jpg'
                      alt='Food 2'
                    />
                  </figure>
                  <div className='recipe-detail'>
                    <h2 className='recipe-title'>
                      <a href='recipeDetail'>
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Temporibus a dolor ducimus error rerum, corporis nam,
                      perspiciatis molestiae illo, doloribus repellendus vitae.
                      Excepturi inventore est adipisci. Dignissimos amet unde,
                      consequatur.
                    </p>
                    <RecepieMeta />
                  </div>
                </article>
                <article className='recipe'>
                  <figure className='recipe-image'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/food-3@2x.jpg'
                      alt='Food 3'
                    />
                  </figure>
                  <div className='recipe-detail'>
                    <h2 className='recipe-title'>
                      <a href='recipeDetail'>
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perspiciatis, ipsum sint omnis. Porro ea molestiae magni
                      necessitatibus ducimus quidem at, quibusdam odit quam,
                      doloribus temporibus sit, eum consectetur quos dolorem?
                    </p>
                    <RecepieMeta />
                  </div>
                </article>
                <article className='recipe'>
                  <figure className='recipe-image'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/food-4@2x.jpg'
                      alt='Food 4'
                    />
                  </figure>
                  <div className='recipe-detail'>
                    <h2 className='recipe-title'>
                      <a href='recipeDetail'>
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Commodi natus, recusandae, earum soluta esse iste ipsa
                      culpa assumenda. Sint quod fugiat, nihil totam vel debitis
                      nesciunt libero harum qui nulla.
                    </p>
                    <RecepieMeta />
                  </div>
                </article>
                <article className='recipe'>
                  <figure className='recipe-image'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/food-5@2x.jpg'
                      alt='Food 5'
                    />
                  </figure>
                  <div className='recipe-detail'>
                    <h2 className='recipe-title'>
                      <a href='recipeDetail'>
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda accusamus nisi quasi, minus praesentium culpa
                      eligendi in! Laborum cumque, ab autem sed maiores,
                      quisquam, ipsum soluta ipsa laboriosam dolores vel.
                    </p>
                    <RecepieMeta />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
