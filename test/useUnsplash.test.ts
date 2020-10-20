import { renderHook } from '@testing-library/react-hooks'
import { useUnsplash } from '../src/useUnsplash'
import fetch from 'cross-fetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch
}

// Spy on console.error output
const spy = jest.spyOn(console, 'error')

describe('Testing useUnsplash', () => {
    test('With correct props', async () => {
        const { APIKEY } = process.env
        if (typeof APIKEY === 'undefined') {
            console.error('Please provide a APIKEY within the env to run test.')
            return
        }
        const { result, waitForNextUpdate } = renderHook(() =>
            useUnsplash({
                apikey: APIKEY,
                id: 'VMPhyAoVqqk',
                options: { w: 600, ar: '9:1', fit: 'crop' },
            }),
        )

        await waitForNextUpdate()
        const [image, imageMeta] = result.current

        expect(image).toEqual(
            expect.stringMatching(
                /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
            ),
        )
        expect(imageMeta).toBeTruthy()
    })

    test('With missing props', () => {
        const { result } = renderHook(() => useUnsplash())

        // await waitForNextUpdate()
        const [image, imageMeta] = result.current

        expect(image).toBeFalsy()
        expect(imageMeta).toBeFalsy()
        expect(spy).toHaveBeenCalled()
    })
})
