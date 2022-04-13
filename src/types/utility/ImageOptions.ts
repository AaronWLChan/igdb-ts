export interface ImageOptions {
    imageId: string,
    size: ImageSize
    retina?: boolean
}

export type ImageSize = "cover_small" | "screenshot_med" | "cover_big" | "logo_med" | "screenshot_big"
                 | "screenshot_huge" | "thumb" | "micro" | "720p" | "1080p"






