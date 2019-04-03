import Layout from '../components/Layout'
//import {witdhRouter} from 'next/router'

const Post = ({url}) => (
    //const Post = ({router}) => url is depricated cahnge to router
    <Layout title={url.query.title}>
        <p>lorem</p>
    </Layout>
)

export default Post;
//export default withRouter(Post);