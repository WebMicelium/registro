import React from 'react'

const Main = () => {
  return (
    <div >
        <div className="border-4 border-red-500 m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <section className="bg-blue-500 p-4 rounded-lg text-white shadow-md min-h-96">
            <div>
                <h1 className="text-4xl font-extrabold mb-4">Micelium Proyecto</h1>
                <p className="text-lg mb-6">
                    Una breve descripción sobre el proyecto Micelium, destacando sus objetivos y características principales.
                </p>
            </div>
            <button className="bg-white text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                Saber más
            </button>
            </section>
            <section className="bg-green-500 p-4 rounded-lg text-white shadow-md">
                <h2 className="text-xl font-bold">Sección 2</h2>
                <p>Contenido de la segunda sección.</p>
            </section>
</div>

    
    </div>
  )
}

export default Main
