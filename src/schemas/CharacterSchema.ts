import { Thumbnail } from "./ThumbnailSchema";

export interface Character {
    id: number,
    name: string,
    description: string,
    modified: string,
    resourceURI: string,
    thumbnail: Thumbnail
}
