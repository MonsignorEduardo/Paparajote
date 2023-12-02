export interface Root {
    status: string
    data: Data
}

export interface Data {
    item: Item
}

export interface Item {
    type: string
    id: number
    path: string
    name: string
    url: string
    sourceUrl: string
    sourceCountry: string
    releaseDate: string
    createdAt: string
    updatedAt: string
    refreshedAt: string
    image: string
    isrc: string
    isExplicit: boolean
    links: Links
    linksCountries: string[]
    artists: Artist[]
}

export interface Links {
    qobuz: Qobuz[]
    tidal: Tidal[]
    amazon: Amazon[]
    deezer: Deezer[]
    itunes: Itune[]
    napster: Napster[]
    pandora: Pandora[]
    spotify: Spotify[]
    youtube: Youtube[]
    audiomack: Audiomack[]
    soundcloud: Soundcloud[]
    amazonMusic: AmazonMusic[]
    itunesStore: ItunesStore[]
    youtubeMusic: YoutubeMusic[]
}

export interface Qobuz {
    link: string
    countries: any
}

export interface Tidal {
    link: string
    countries: string[]
}

export interface Amazon {
    link: string
    countries: string[]
}

export interface Deezer {
    link: string
    countries: any
}

export interface Itune {
    link: string
    countries: string[]
}

export interface Napster {
    link: string
    countries: any
}

export interface Pandora {
    link: string
    countries: string[]
}

export interface Spotify {
    link: string
    countries: string[]
}

export interface Youtube {
    link: string
    countries: any
}

export interface Audiomack {
    link: string
    countries: any
}

export interface Soundcloud {
    link: string
    countries: any
}

export interface AmazonMusic {
    link: string
    countries: string[]
}

export interface ItunesStore {
    link: string
    countries: string[]
}

export interface YoutubeMusic {
    link: string
    countries: any
}

export interface Artist {
    type: string
    id: number
    path: string
    name: string
    sourceUrl: string
    sourceCountry: string
    url: string
    image: string
    createdAt: string
    updatedAt: string
    refreshedAt: string
    serviceIds: ServiceIds
    orchardId: string
    spotifyId: string
    links: Links2
    linksCountries: string[]
    description: string
}

export interface ServiceIds {
    qobuz: string
    tidal: string
    amazon: string
    deezer: string
    itunes: string
    discogs: string
    napster: string
    orchard: string
    pandora: string
    spotify: string
    bandcamp: string
    audiomack: string
    lineMusic: string
    soundcloud: string
    youtubeMusic: string
}

export interface Links2 {
    qobuz: Qobuz2[]
    tidal: Tidal2[]
    amazon: Amazon2[]
    deezer: Deezer2[]
    itunes: Itune2[]
    discogs: Discog[]
    napster: Napster2[]
    pandora: Pandora2[]
    spotify: Spotify2[]
    twitter: Twitter[]
    youtube: Youtube2[]
    bandcamp: Bandcamp[]
    facebook: Facebook[]
    audiomack: Audiomack2[]
    instagram: Instagram[]
    lineMusic: LineMusic[]
    wikipedia: Wikipedum[]
    amazonMusic: AmazonMusic2[]
    itunesStore: ItunesStore2[]
    ticketmaster: Ticketmaster[]
    youtubeMusic: YoutubeMusic2[]
}

export interface Qobuz2 {
    link: string
    countries: any
}

export interface Tidal2 {
    link: string
    countries: string[]
}

export interface Amazon2 {
    link: string
    countries: string[]
}

export interface Deezer2 {
    link: string
    countries: any
}

export interface Itune2 {
    link: string
    countries: string[]
}

export interface Discog {
    link: string
    countries: any
}

export interface Napster2 {
    link: string
    countries: any
}

export interface Pandora2 {
    link: string
    countries: string[]
}

export interface Spotify2 {
    link: string
    countries: any
}

export interface Twitter {
    link: string
    countries: any
}

export interface Youtube2 {
    link: string
    countries: any
}

export interface Bandcamp {
    link: string
    countries: any
}

export interface Facebook {
    link: string
    countries: any
}

export interface Audiomack2 {
    link: string
    countries: any
}

export interface Instagram {
    link: string
    countries: any
}

export interface LineMusic {
    link: string
    countries: any
}

export interface Wikipedum {
    link: string
    countries: any
}

export interface AmazonMusic2 {
    link: string
    countries: string[]
}

export interface ItunesStore2 {
    link: string
    countries: string[]
}

export interface Ticketmaster {
    link: string
    countries: any
}

export interface YoutubeMusic2 {
    link: string
    countries: any
}
