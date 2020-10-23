import * as React from 'react'
// import { UnsplashObject } from '../types/unplashObject'

function useUnsplash(
    { apikey, id, options = {} }: Props = { apikey: '', id: '' },
): [string | undefined, UnsplashObject | undefined] {
    const baseUrl = 'https://api.unsplash.com/photos/'
    const [image, setImage] = React.useState<string | undefined>(undefined)
    const [imageMeta, setImageMeta] = React.useState<UnsplashObject | undefined>(undefined)

    const applyOptions = (rawUrl: string): string => {
        const source = (Object.keys(options) as Array<keyof Props['options']>).reduce(
            (query, key) => query.concat('&', key, '=', options[key]),
            `${rawUrl}`,
        )
        return source
    }

    // React.useEffect(() => {
        if (apikey.length && id.length) {
            fetch(`${baseUrl}${id}?client_id=${apikey}`).then(async (response) => {
                const res = await response.json()
                setImage(() => applyOptions(res.urls.raw))
                setImageMeta(res)
                console.log(res)
            })
        } else {
            console.error(
                'Please provide correct props to useUnsplash like so: useUnsplash({apikey: <yourapikey>, id=<imageid>, options?=<options>}).',
            )
        }
    // }, [])

    return [image, imageMeta]
}

export { useUnsplash }

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

/**
 * Date: 20.10.2020
 * From: https://unsplash.com/documentation#response-9
 */

export interface UnsplashObject {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    downloads: number
    likes: number
    liked_by_user: boolean
    description: string
    exif: {
        make: string
        model: string
        exposure_time: string
        aperture: string
        focal_length: string
        iso: number
    }
    location: {
        city: string
        country: string
        position: {
            latitude: number
            longitude: number
        }
    }
    tags: {
        [key: string]: string
    }[]
    current_user_collections: {
        [key: string]: string
    }[]
    urls: {
        raw: string
        full: string
        regular: string
        small: string
        thumb: string
    }
    links: {
        self: string
        html: string
        download: string
        download_location: string
    }
    user: {
        id: string
        updated_at: string
        username: string
        name: string
        portfolio_url: string
        bio: string
        location: string
        total_likes: number
        total_photos: number
        total_collections: number
        links: {
            self: string
            html: string
            photos: string
            likes: string
            portfolio: string
        }
    }
}
