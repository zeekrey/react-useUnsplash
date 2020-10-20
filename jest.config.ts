import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/.env.js'],
    // transform: {
    //     '^.+\\.ts?$': 'ts-jest',
    // },
}
export default config
