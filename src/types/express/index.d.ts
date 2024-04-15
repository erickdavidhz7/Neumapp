declare global {
  namespace Express {
    interface Request {
      user?:Record<string,any>,
      files: UploadedFiles
    }

    interface UploadedFiles {
      // image: any
      photo?: fileUpload.UploadedFile
    }
  }
}
export {}