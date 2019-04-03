import Link from 'next/link'
import Layout from '../components/Layout'

const Home = () => {
    return ( <Layout title='HOME'>
        <h1>hello this is home</h1>
        <Link href='/about'><a>about page</a></Link>
        
    </Layout> );
}
 
export default Home;