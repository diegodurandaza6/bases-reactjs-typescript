interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo?: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Diego',
        edad: 31,
        direccion: {
            pais: 'Alemania',
            //casaNo: 195
        }
    }
    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
