import React, { useState, useEffect } from 'react'
import { UnsplashObject } from '../types/unplashObject'

interface Props {
    apikey: string
    id: string
    options?: {
        w?: number
        h?: number
        ar?: string
        crop?: string
        fm?: string
        q?: number
        fit?: string
        dpr?: number
    }
}

function useUnsplash(
    { apikey, id, options = {} }: Props = { apikey: '', id: '' },
): [string | undefined, UnsplashObject | undefined] {
    const baseUrl = 'https://api.unsplash.com/photos/'
    const [image, setImage] = useState<string | undefined>(undefined)
    const [imageMeta, setImageMeta] = useState<UnsplashObject | undefined>(undefined)

    const applyOptions = (rawUrl: string): string => {
        const source = (Object.keys(options) as Array<keyof Props['options']>).reduce(
            (query, key) => query.concat('&', key, '=', options[key]),
            `${rawUrl}`,
        )
        return source
    }

    useEffect(() => {
        if (apikey.length && id.length) {
            fetch(`${baseUrl}${id}?client_id=${apikey}`).then(async (response) => {
                const res = await response.json()
                setImage(() => applyOptions(res.urls.raw))
                setImageMeta(res)
            })
        } else {
            console.error(
                'Please provide correct props to useUnsplash like so: useUnsplash({apikey: <yourapikey>, id=<imageid>, options?=<options>}).',
            )
        }
    }, [])

    return [image, imageMeta]
}

export { useUnsplash }
