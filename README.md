# Lahelu Project

## Overview

Lahelu is a React Native project built with Expo. It includes various features and components to provide a seamless user experience.

## Project Structure

The project is organized as follows:

```
.
├── core
│   ├── components
│   │   ├── AppDrawer.tsx
│   │   ├── AppHeader.tsx
│   │   ├── BottomTabs.tsx
│   │   ├── index.ts
│   │   └── RouteWrapper.tsx
│   ├── hooks
│   │   ├── index.ts
│   │   └── useLoadFonts.ts
│   ├── models
│   │   └── Post.ts
│   ├── repository
│   │   └── posts
│   │       ├── PostMapper.ts
│   │       ├── PostsApiService.ts
│   │       ├── PostsRepository.ts
│   │       └── PostsResponse.ts
│   ├── routes
│   │   ├── index.ts
│   │   ├── linkingConfig.tsx
│   │   └── routeMap.tsx
│   └── state
│       └── store.ts
├── features
│   └── posts
│       ├── components
│       │   ├── PostFooter.tsx
│       │   ├── PostHeader.tsx
│       │   └── PostItem.tsx
│       ├── data
│       ├── domain
│       └── presentation
│           ├── viewmodels
│           │   ├── postsSlice.ts
│           │   └── usePostsViewModel.ts
│           └── views
│               └── PostsView.tsx
├── shared
│   ├── api
│   │   └── HttpClient.ts
│   ├── components
│   │   ├── BadgeButton.tsx
│   │   ├── BoxedButtons.tsx
│   │   ├── DText.tsx
│   │   ├── index.ts
│   │   ├── SearchDrawer.tsx
│   │   └── TagsDrawer.tsx
│   └── utils
│       ├── getFontFamily.ts
│       └── index.ts
└── global.d.ts
```

- `src/core`: Core functionalities like models and repositories.
- `src/features`: Feature-specific code, e.g., posts feature.
- `src/routes`: Routing configuration and wrappers.
- `src/shared`: Shared components and utilities.

### Key Files

- `src/routes/routeMap.tsx`: Defines the route map for the application.

## Getting Started

### Prerequisites

- Node.js
- npm
- Expo CLI

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/gmaggio/lahelu.git
    cd lahelu
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:

```sh
npx expo start
```
