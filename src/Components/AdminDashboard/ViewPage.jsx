import React from 'react';

const ViewPage = () => {

    const data = {
        coverImage: 'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
        musicFile: 'music_file.mp3',
        artistName: 'John Doe',
        title: 'Amazing Song',
        subtitle: 'The Best Hits',
        genre: 'Pop',
        duration: '3:45',
        releaseDate: '2023-04-20',
        link: 'https://example.com/amazing-song',
      };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">    
      <main className="flex-grow p-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <img src={data.coverImage} alt="Music Cover" className="w-64 h-64 rounded-lg shadow-lg" />
          <audio controls src={data.musicFile} className="rounded-lg shadow-lg">
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Artist Name:</p>
              <p>{data.artistName}</p>
            </div>
            <div>
              <p className="font-bold">Title:</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p className="font-bold">Subtitle:</p>
              <p>{data.subtitle}</p>
            </div>
            <div>
              <p className="font-bold">Genre:</p>
              <p>{data.genre}</p>
            </div>
            <div>
              <p className="font-bold">Duration:</p>
              <p>{data.duration}</p>
            </div>
            <div>
              <p className="font-bold">Music Mastering:</p>
              <p>Applied</p>
            </div>
            <div>
              <p className="font-bold">Cover Image by LeeLoop:</p>
              <p>Applied</p>
            </div>
            <div>
              <p className="font-bold">Status:</p>
              <p className="text-green-500">Released</p>
            </div>
            <div>
              <p className="font-bold">Release Date:</p>
              <p>{data.releaseDate}</p>
            </div>
            <div>
              <p className="font-bold">Link:</p>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{data.link}</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewPage;