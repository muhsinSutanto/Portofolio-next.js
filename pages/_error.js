import Layout from '../components/Layout'

export default ({statusCode}) => {
    return ( 
        <Layout title='ERROR'>
           {statusCode? `could load data: status code ${statusCode}` : `could get page`}
        </Layout>
     );
}
 