// import { useParams } from 'react-router'
// import { useQuery } from '@apollo/client';
// import { GET_PRODUCT } from '@query/Product.query';
// import Categories from '@component/Categories';

/** @namespace @route/ProductPage/Component */
export default function ProductPage() {
  // const { id } = useParams()
  // const { loading, error, data } = useQuery(GET_PRODUCT, {
  //   variables: { id },
  // });

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error...</p>

  // const { product: { data: { attributes } } } = data;
  // const { title, description, release, categories: { data: categories } } = attributes;
  let title, release, description;

  return (
    <div className='container'  style={{ margin: '8em auto', display: 'flex', gap: '1em' }}>
      <img style={{ width: 300 }} src='/assets/normal-posters/alanwake.jpg' alt='alan wake' />
      <div style={{ fontSize: '32px' }}>

        <h3>title:</h3>
        <h4>{title || 'Alan Wake'}</h4>

        <h3>release:</h3>
        <h4>{release || '2-12'}</h4>

        <h3>description:</h3>
        <p>{description || 'This game is awesome. play now!'}</p>

        <h3>genre:</h3>
        {/* <Categories categories={categories} /> */}

      </div>
    </div>
  );
}