import apiclient from './client';


const endpoint = '/listings';


const getListings = () => apiclient.apiClient2.get(endpoint);

const addListing = (listing, onUploadProgress) => {
    const data = new FormData();
    data.append('title', listing.title)
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);


    

    listing.images.forEach((image, index) =>
        data.append("images", {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        }));

        return apiclient.apiClient2.post(endpoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progress) => onUploadProgress(progress.loaded/progress.total)
        });

}

console.log()

export default {
    addListing,
    getListings,
};