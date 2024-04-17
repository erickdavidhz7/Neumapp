import { v2 as cloudinary } from 'cloudinary'

const extractPublicId = (secure_url: string) => {
  const matcher = secure_url.match(/\/image\/upload\/([^/]+)\/(.*?)\./)
  return matcher ? matcher[2] : null
}

export const getCloudinaryResizedImage = (
  secure_url: string,
  width: number,
  height?: number
) => {
  try {
    const publicId = extractPublicId(secure_url)

    return publicId ? cloudinary.url(publicId, {
      width: width,
      height: height,
    }) : undefined
  } catch (error) {}
}
