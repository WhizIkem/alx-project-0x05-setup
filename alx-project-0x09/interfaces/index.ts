import { ReactNode } from "react"

export interface ReactComponentProps {
  children: ReactNode
}

export interface GeneratedImageProps {
  imageUrl: string
  prompt: string
  width?: number
  height?: number
  action: (imagePath: string) => void
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">
