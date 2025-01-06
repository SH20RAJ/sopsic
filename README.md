# Sopsic

Sopsic is a music streaming website inspired by JioSaavn and Spotify. It provides a sleek user interface for users to stream music and download tracks directly from the JioSaavn library using the [JioSaavn API](https://saavn.dev/docs#description/introduction).

---

## Features

- Stream millions of songs from the JioSaavn library.
- Download music directly to your device.
- User interface inspired by JioSaavn and Spotify for a modern and intuitive experience.
- Search for songs, albums, artists, and playlists.
- Create and manage custom playlists.

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router) with JavaScript
- **Backend**: JioSaavn API integration
- **Styling**: TailwindCSS for a responsive and visually appealing UI
- **State Management**: Context API or Zustand (optional, depending on complexity)
- **Deployment**: Vercel or Netlify

---

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/sopsic.git
   cd sopsic
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   JIOSAAVN_API_BASE_URL=https://saavn.dev/api
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`.

5. **Build for Production**:

   ```bash
   npm run build
   npm start
   ```

---

## Folder Structure

```plaintext
sopsic/
├── app/
│   ├── layout.js          # App layout
│   ├── page.js            # Homepage
│   └── music/             # Music-related routes
│       ├── [id]/          # Dynamic routes for song, album, or artist
│       └── download.js    # Download functionality
├── components/            # Reusable UI components
├── styles/                # Global styles and Tailwind configuration
├── utils/                 # Helper functions and API utilities
├── public/                # Static assets
├── .env.local             # Environment variables
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## API Integration

This project integrates the [JioSaavn API](https://saavn.dev/docs) for fetching music data. All API requests are made through server-side functions to ensure security and efficiency.

Example API utility:

```javascript
const fetchSongs = async (query) => {
  const res = await fetch(`${process.env.JIOSAAVN_API_BASE_URL}/search?song=${query}`);
  const data = await res.json();
  return data;
};
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear descriptions.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
