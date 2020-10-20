# useUnsplash - React hook

> React hook to get a unsplash image and its metadata with ease. 

## Usage

```bash
yarn add @zeekrey/useunsplash
```

```
npm install @zeekrey/useunsplash
```

Basic usage:

```javascript
const [image, imageMeta] = useUnsplash({
                apikey: '21jkwopdio29khp192',
                id: 'VMPhyAoVqqk',
                options: { w: 600, ar: '2:1', fit: 'crop' },
            }),
```

## Details

This is the object thats needs to be provided when using the hook:

* **apikey**: Your Unplash API key. If you don't have one, you can get it here: [unsplash.com/developers](https://unsplash.com/developers)
* **id**: This is the image id. The is this: *unsplash.com/photos/<id>*. For example https://unsplash.com/photos/jK2LuKGd_vI => id = jK2LuKGd_vI
* **options**: Finde the most updated version here: [unsplash.com/documentation](https://unsplash.com/documentation#supported-parameters)

The hook returns an array with the following two parameters:

* image: The actual image endpoint. We use the 'raw' version of the image like described here: [unsplash.com/documentation](https://unsplash.com/documentation#example-image-use)
* imageMeta: An object that is described here: [unsplash.com/documentation](https://unsplash.com/documentation#response-9https://unsplash.com/documentation#response-9)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Development

Run tests with 

```
yarn test
```

To run tests you need to create env file like this:

```
cd <project-root> && echo process.env.APIKEY = 'your_api_key' > .env.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

hedpoh+fRuq`gq56iueX