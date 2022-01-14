import React, { useEffect } from 'react'
import { Detail, Layout } from '../../src/components'
import { data } from '../../src/db/data'

const MoviesDetail = ({id,query}) => {
    const newData = data.moviesCard.find((d,i) => id === d.name)
    console.log({newData})
    useEffect(()=>{

    },[newData])
    return (
        <Layout title={newData.name} description={newData.name} >
            <Detail data={newData} />
        </Layout>
    )
}

export default MoviesDetail

export async function getServerSideProps(context){
    const {params,query}=context
    console.log(query)
    return {
        props:{
            id: params.id,
            query
        }
    }
}