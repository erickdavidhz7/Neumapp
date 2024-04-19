import fileUpload from "express-fileupload"

declare global {
  namespace Express {
    interface Request {
      user?:Record<string,any>,
      files: UploadedFiles
    }

    interface UploadedFiles {
      // image: any
      photo?: fileUpload.UploadedFile,
      json1?: fileUpload.UploadedFile,
      json2?: fileUpload.UploadedFile
    }
  }
}
export {}