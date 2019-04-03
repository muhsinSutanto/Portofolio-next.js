import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
//https://cdnjs.com/ to get css from npprogress

Router.onRouteChangeStart = ur => {
    console.log(ur)
    NProgress.start()
}

Router.onRouterChangeComplete = () => NProgress.done()
Router.onRouterChangeError = () => NProgress.done()



const Layout = ({children, title}) => {
    return ( 
        <div className='root'>
            <Head>
            <title>nextportofolio</title>
            </Head>
            <header>
                <Link href='/'><a>home</a></Link>
                <Link href='/about'><a>about</a></Link>
                <Link href='/hireme'><a>hire me</a></Link>
                <Link href='/blog'><a>blog</a></Link>
            </header>

            <h1>{title}</h1>
                {children}

            <footer>&copy; {new Date().getFullYear()}</footer>
            <style jsx>{`
                .root{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction: column; 
                }
                header{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    padding: 1em;
                    font-size: 1.2rem;
                    background: indigo;
                }
                header a{
                    color: white;
                    text-decoration: none;
                }
                header a:hover{
                    font-weight: bold;
                    color: light-grey;
                }
                footer{
                    padding: 1em;
                }
            `} </style>
            <style global jsx>{`
                body{
                    margin: 0;
                    background: #fofofo
                }
            `}</style>
        </div>
     );
}
 
export default Layout;