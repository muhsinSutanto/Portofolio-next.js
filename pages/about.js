import Link from 'next/link'
import Layout from '../components/Layout'
import Error from './_error'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';

class About extends Component {

    static async getInitialProps() {
        try {
            const res = await fetch('https://api.github.com/users/muhsinSutanto')
            const statusCode = res.status > 200 ? res.status : false
            const data = await res.json()
            return{user: data, statusCode }
            console.log('data',data)
            
        } catch (error) {
            console.log(error)
        }
       

    }

    render() { 
        const {user, statusCode} = this.props

        if(statusCode) {
            return <Error statusCode={statusCode} />
        }

        return ( 
            <Layout title='ABOUT'>
            <p>{user.name}</p>
            <img src={user.avatar_url} height='200px'/>
            
        </Layout> 
         );
    }
}
 
export default About;
