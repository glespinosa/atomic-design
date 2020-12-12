import React from 'react'
import { EmoteItemList } from '../components/02-organisms'
import { EmoteTemplate, Layout } from '../components/03-templates'
import data from '../data/emote'

function Emote() {
    return (
        <Layout>
            <EmoteTemplate>
                <EmoteItemList data={data} />
                <EmoteItemList data={data} />
                <EmoteItemList data={data} />
                <EmoteItemList data={data} />
                <EmoteItemList data={data} />
                <EmoteItemList data={data} />
            </EmoteTemplate>
        </Layout>
    )
}

export default Emote
