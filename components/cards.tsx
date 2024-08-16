import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  title: string;
  category: string;
  imageSrc: string;
  playlistName: string;
  critiqueLink: string;
  mood: string;
}

const MovieCard = ({ title, category, imageSrc, playlistName, critiqueLink, mood }: MovieCardProps) => {
  return (
    <div className="border-2 border-gray-300 bg-card-violet p-4 rounded-lg max-w-md mx-auto h-full">
      {/* Titre du film */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      {/* Catégorie du film */}
      <h4 className="text-lg text-gray-700 mb-2">{category}</h4>
      
      {/* Affiche du film */}
      <div className="mb-4">
        <Image src={imageSrc} alt={`Affiche de ${title}`} width={300} height={450} className="object-fill" />
      </div>
      
      {/* Nom de la playlist */}
      <h4 className="text-lg text-gray-700 mb-2">Playlist : {playlistName}</h4>
      
      {/* Lien vers la critique */}
      <Link href={critiqueLink} className="text-blue-500 hover:underline mb-4 block">
        Voir la critique
      </Link>
      
      {/* Humeur liée au film */}
      <p className="text-gray-600 mb-4">{mood}</p>
      
      {/* Boutons d'action */}
      <div className="flex justify-between">
        <button className="bg-card-violet text-black py-2 px-4 rounded-lg border-2 border-gray-300 hover:bg-gray-200" >
          Supprimer
        </button>
        <button className="bg-default-violet text-white py-2 px-4 rounded-lg hover:bg-[#4e3e75]">
          Ajouter à la Playlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
