export const ImagesAPI = (keyword = 'f22') => `
    https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyword}&orientation=horizontal&image_type=photo&pretty=true
`