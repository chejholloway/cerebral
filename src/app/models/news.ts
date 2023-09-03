export interface Entity {
  term?: string
  label?: string
  score?: number
}

export interface MainImage {
  resolutions?: Resolution[]
  original_height?: number
  original_width?: number
  original_url?: string
}

export interface News {
  uuid?: string
  title?: string
  link?: string
  summary?: string
  publisher?: string
  author?: string
  type?: string
  entities?: Entity[]
  offnet?: boolean
  content?: string
  streams?: Stream[]
  ignore_main_image?: boolean
  published_at?: number
  main_image?: MainImage
  is_magazine?: boolean
  reference_id?: string
}

export interface Resolution {
  tag?: string
  width?: number
  height?: number
  url?: string
  tags?: any
}

export interface Stream {
  url?: string
  uuid?: string
  mime_type?: string
}
