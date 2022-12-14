# Changelog
All notable changes to the Weather App Rebuild will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2022-09-10
Initial building

### Changed
- CHANGELOG.md
  - Renaming project in specified spots.
- package.json
  - Updated:
    - name
    - version
    - description
- Readme.md
  - Updated:
    - Project Name
    - Project Desc
    - Project goals
- docker-compose.prod.yml
  - sample-prod
    - container_name
- public/index.html
  - Updated title field.
- src/template.html
  - Updated title field.


## [1.0.0] - 2022-09-13
Global config/settings

### Added
- BG image asset: ~/src/globalAssets/images/hexBgRep.png
- Added Module config support for TS to ~/src/globalConfig/ts

### Changed
- Added Background image and css to ~/src/globalConfig/GlobalStyles.tsx
- Updated for TypeScript PNG support:
  - ~/tsconfig.json
  - ~/webpack.config.json
- Updated webpack.config.json for added ts type declarations

## [1.0.1] - 2022-09-13
Header

### Added
- Font files: ./src/globalAssets/fonts
- Font config:
  - ./src/globalAssets/fonts/fonts.tsx
  - ./tsconfig.json
  - ./webpack.config.js
- Header Styles
  - ./src/components/modules/Header/StyledHeader.tsx

## [1.0.2] - 2022-09-13
Api pulls

### Added
#### Libraries Added (./package.json)
##### Dev Dependencies
- @types/dotenv-webpack
- dotenv-webpack

#### Files added
- .env
  - Added to GitIgnore rules
- .env.example file ./src/globalConfig/templates/
- ./src/helpers
  - api.js
    - Helper functions to handle API calls.
  - getPosition.js
    - Gets your current location based off of browser
  - isNight.js
    - Checks to see if its night, returns booleen

### Changed
- .eslintrc
  - Added Helper alias
- index.tsx
  - Activated React Strict
- tsconfig.json
  - Helpers alias
- webpack.config.js
  - Dotenv configuration
- ./src/App.tsx
  - Added state for position and weather response
  - Set up use Effects
  - render waits for state updates before rendering.
  - else shows 'Loading'

## [1.0.3] - 2022-09-15
Implemented Current Weather Component
### Added
#### Libraries Added (./package.json)
- moment
- react-icons
- react-moment

#### Components Added (./src/components)
- ./elements/WeatherIcon
  - WeatherIcon.tsx
    - The weather icon Component.
    - Allows for conditional rendering depending on string to select icon.
- ./modules/CurrentWeather
  - CurrentWeather.tsx
    - Current weather component for displaying current weather.

### Changed
- ./src/App.tsx
  - Implemented CurrentWeather
  - Types change

## [1.0.4] - 2022-09-15
Implemented Future Weather Component

### Added
#### Components Added (./src/components)
- ./layouts/WeatherWrap
  - Wrapper for Future and Current weather
- ./modules/DayItem
  - Component to wrap each day.
- ./modules/FutureWeather
  - Component to wrap and map through a list of days.

### Changed
- ./src/components/modules/CurrentWeather/StyledCurrentWeather
  - Removed some un-needed code.
- ./src/App.tsx
  - Types update
- ./tsconfig.json
  - Added layout alias
- ./webpack.config.js
  - Added layout alias

## [1.0.5] - 2022-09-19
Implemented mobile styles.

- Added mobile responsive styles
- Removed un-needed mediaquereies.