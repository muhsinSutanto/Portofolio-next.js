import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({title, slug}) => (
    <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
    </Link>
</li>
)

export default () => (
    <Layout title='My Blog'>
        <ul>
           <PostLink slug='react-app' title='react' />
           <PostLink slug='angular-app' title='angular' />
           <PostLink slug='view-app' title='view' />
        </ul>

    </Layout>
)