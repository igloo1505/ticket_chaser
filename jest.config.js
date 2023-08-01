const nextJest = require('next/jest')
// import { pathsToModuleNameMapper } from 'ts-jest'
// import type { JestConfigWithTsJest } from 'ts-jest'
// import tsconfig from './tsconfig.json'

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run

    reporters: ["default", "jest-junit"],
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
