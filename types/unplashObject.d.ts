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
    tags: object[]
    current_user_collections: object[]
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
