import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        //file has been uploaded successfully
        console.log("File uploaded successfully", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the operation got failed
        return null;
    }
}

cloudinary.v2.upload("htttps://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    {pulic_id: 'olympic_flaf'},
    function(error, result) {
        console.log(result, error);
    });