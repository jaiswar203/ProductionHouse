import React from 'react'
import { Layout, News } from '../../src/components'

const index = () => {
    return (
        <Layout title={"News"} description={"News"}  >
            <News />
        </Layout>
    )
}

export default index
