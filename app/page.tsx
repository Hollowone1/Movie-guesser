import React from 'react'
import MovieCard from '@/components/cards'

const Home = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-8">A la une</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MovieCard
        title="Close-Up"
        category="Drame"
        imageSrc="/assets/Close_Up_DVD_cover.jpg"
        playlistName="playlist 1"
        critiqueLink="/critiques/close-up"
        mood="Copycat"
      />
      <MovieCard
        title="Il était une fois dans l'Ouest"
        category="Western"
        imageSrc="/assets/iletaitunefoisdanslouest.jpg"
        playlistName="playlist 2"
        critiqueLink="/critiques/once-upon-a-time-in-the-west"
        mood="Vengeance"
        />
      <MovieCard
        title="The Lobster"
        category="Drame"
        imageSrc="/assets/thelobster.jpg"
        playlistName="playlist 3"
        critiqueLink="/critiques/the-lobster"
        mood="Amour"
      />
      </div>
      <div className='bg-default-violet '>
          <div className='container mx-auto py-8 my-4'>
              <h2 className='text-5xl font-bold text-center my-8 text-white'>Qui sommes nous?</h2>
              <p className='text-center text-3xl text-white my-4'>Vous avez des idées de film mais ne savez pas quoi choisir?</p>
              <p className='text-center text-2xl text-white'>MovieGuesser le choisit pour vous! </p>
               <p className='text-center text-2xl text-white pb-8'>MovieGuesser est un algorithme qui prend en compte vos humeurs de la journée et vous conseille le film idéal pour vos matins, après-midis et soirées cinéma!</p>
               <button className='bg-default-pink text-white py-2 px-4 rounded-lg hover:bg-[#4e3e75] mx-auto justify-items-center flex justify-center'>Envie d&#39;essayer ?</button> 
          </div>
      </div>
    </div>
  )
}

export default Home