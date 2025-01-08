import { getTopCharts } from "@/lib/saavn";
import Link from "next/link";
import Image from "next/image";

async function HomePage() {
  try {
    const data = await getTopCharts();
    const charts = data?.playlists || [];

    if (!charts.length) {
      return (
        <div className="px-4 md:px-6 py-4">
          <div className="text-center text-gray-400 mt-20">
            No playlists available at the moment. Please try again later.
          </div>
        </div>
      );
    }

    return (
      <div className="px-4 md:px-6 py-4 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {charts.slice(0, 5).map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="group relative bg-gray-900/40 rounded-lg p-3 md:p-4 hover:bg-gray-800/40 transition duration-300 backdrop-blur-sm"
              >
                <div className="relative aspect-square mb-3 md:mb-4">
                  <Image
                    src={playlist.image?.[2]?.link || "/placeholder.png"}
                    alt={playlist.title}
                    fill
                    className="object-cover rounded-md group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-xl">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm md:text-base text-white group-hover:underline line-clamp-1">
                  {playlist.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1 line-clamp-2">
                  {playlist.songCount} songs
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Top Charts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {charts.slice(5, 10).map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlist/${playlist.id}`}
                className="group relative bg-gray-900/40 rounded-lg p-3 md:p-4 hover:bg-gray-800/40 transition duration-300 backdrop-blur-sm"
              >
                <div className="relative aspect-square mb-3 md:mb-4">
                  <Image
                    src={playlist.image?.[2]?.link || "/placeholder.png"}
                    alt={playlist.title}
                    fill
                    className="object-cover rounded-md group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-xl">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm md:text-base text-white group-hover:underline line-clamp-1">
                  {playlist.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1 line-clamp-2">
                  {playlist.songCount} songs
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    return (
      <div className="px-4 md:px-6 py-4">
        <div className="text-center text-gray-400 mt-20">
          An error occurred while fetching playlists. Please try again later.
        </div>
      </div>
    );
  }
}

export default HomePage;
